const views = {
  dashboard: document.getElementById("dashboard-view"),
  board: document.getElementById("board-view"),
  projects: document.getElementById("projects-view")
};

const statusOrder = ["Backlog", "In Progress", "Review", "Approved", "Done"];

const els = {
  navLinks: [...document.querySelectorAll(".nav-link")],
  overviewCards: document.getElementById("overview-cards"),
  recentProjects: document.getElementById("recent-projects"),
  board: document.getElementById("kanban-board"),
  allProjects: document.getElementById("all-projects"),
  statusChips: document.getElementById("status-chips"),
  searchInput: document.getElementById("search-input"),
  detailPanel: document.getElementById("detail-panel"),
  detailContent: document.getElementById("detail-content"),
  lightbox: document.getElementById("lightbox"),
  lightboxImage: document.getElementById("lightbox-image"),
  lightboxLabel: document.getElementById("lightbox-label")
};

const state = {
  activeView: "dashboard",
  activeStatusFilter: "All",
  searchText: ""
};

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function statusClass(status) {
  if (status === "Approved" || status === "Done") return "status-approved";
  if (status === "Review") return "status-review";
  return "status-progress";
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <img class="thumb" src="${project.images[0].src}" alt="${project.title} thumbnail" />
    <div class="card-title-row">
      <h3 class="card-title">${project.title}</h3>
      <span class="badge ${statusClass(project.status)}">${project.status}</span>
    </div>
    <p class="model-number">${project.modelNumber}</p>
    <div class="meta-row">
      <span>Due ${formatDate(project.dueDate)}</span>
      <span>${project.assignedTo}</span>
    </div>
    <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
    <div class="actions-row"><button class="button" data-project-id="${project.id}">View Project</button></div>
  `;
  card.querySelector("button").addEventListener("click", () => openDetail(project.id));
  return card;
}

function renderOverview() {
  const now = new Date();
  const summary = [
    { title: "Active Projects", value: PROJECTS.filter((p) => p.status === "In Progress").length, trend: "Design currently in development" },
    { title: "In Review", value: PROJECTS.filter((p) => p.status === "Review").length, trend: "Awaiting final stakeholder sign-off" },
    { title: "Approved", value: PROJECTS.filter((p) => p.status === "Approved").length, trend: "Ready for production planning" },
    { title: "Overdue", value: PROJECTS.filter((p) => new Date(p.dueDate) < now && !["Done"].includes(p.status)).length, trend: "Needs timeline attention" }
  ];

  els.overviewCards.innerHTML = "";
  summary.forEach((item) => {
    const node = document.createElement("article");
    node.className = "summary-card";
    node.innerHTML = `<h3>${item.title}</h3><div class="summary-value">${item.value}</div><p class="summary-trend">${item.trend}</p>`;
    els.overviewCards.appendChild(node);
  });
}

function renderRecentProjects() {
  const projects = [...PROJECTS]
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 6);

  els.recentProjects.innerHTML = "";
  projects.forEach((project) => els.recentProjects.appendChild(createProjectCard(project)));
}

function createBoardCard(project) {
  const card = document.createElement("article");
  card.className = "board-card";
  card.innerHTML = `
    <img class="thumb" src="${project.images[0].src}" alt="${project.title} thumbnail" />
    <div class="card-title-row">
      <h4 class="card-title">${project.title}</h4>
      <span class="model-number">${project.modelNumber}</span>
    </div>
    <div class="meta-row"><span>Due ${formatDate(project.dueDate)}</span><span>${project.priority}</span></div>
    <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
  `;
  card.addEventListener("click", () => openDetail(project.id));
  return card;
}

function renderBoard() {
  els.board.innerHTML = "";

  statusOrder.forEach((status) => {
    const column = document.createElement("section");
    column.className = "kanban-column";
    const stack = document.createElement("div");
    stack.className = "board-stack";

    PROJECTS.filter((project) => project.status === status).forEach((project) => stack.appendChild(createBoardCard(project)));

    column.innerHTML = `<h3>${status}</h3>`;
    column.appendChild(stack);
    els.board.appendChild(column);
  });
}

function renderStatusFilters() {
  const statuses = ["All", ...new Set(PROJECTS.map((p) => p.status))];
  els.statusChips.innerHTML = "";

  statuses.forEach((status) => {
    const chip = document.createElement("button");
    chip.className = `filter-chip ${state.activeStatusFilter === status ? "is-active" : ""}`;
    chip.textContent = status;
    chip.addEventListener("click", () => {
      state.activeStatusFilter = status;
      renderStatusFilters();
      renderProjectsList();
    });
    els.statusChips.appendChild(chip);
  });
}

function renderProjectsList() {
  const query = state.searchText.trim().toLowerCase();
  const filtered = PROJECTS.filter((project) => {
    const matchesStatus = state.activeStatusFilter === "All" || project.status === state.activeStatusFilter;
    const haystack = `${project.title} ${project.modelNumber} ${project.assignedTo}`.toLowerCase();
    return matchesStatus && (!query || haystack.includes(query));
  });

  els.allProjects.innerHTML = "";
  filtered.forEach((project) => els.allProjects.appendChild(createProjectCard(project)));
}

function renderDetail(id) {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) return;

  const checklistItems = Object.entries(project.checklist)
    .map(([label, done]) => `<li><input type="checkbox" ${done ? "checked" : ""} disabled /><span>${label}</span></li>`)
    .join("");

  const specs = Object.entries(project.specifications)
    .map(([key, value]) => `<div><span class="muted">${key}</span><strong>${value}</strong></div>`)
    .join("");

  const gallery = project.images
    .map(
      (image) => `
        <button class="gallery-item" data-image-src="${image.src}" data-image-label="${image.label}: ${project.title}">
          <img src="${image.src}" alt="${image.label} for ${project.title}" />
          <span>${image.label}</span>
        </button>
      `
    )
    .join("");

  els.detailContent.innerHTML = `
    <header>
      <h2 id="detail-title" class="detail-main-title">${project.title}</h2>
      <p class="model-number">${project.modelNumber}</p>
      <div class="chip-row">
        <span class="badge ${statusClass(project.status)}">${project.status}</span>
        <span class="badge">Due ${formatDate(project.dueDate)}</span>
        <span class="badge">Priority: ${project.priority}</span>
        <span class="badge">Assigned: ${project.assignedTo}</span>
      </div>
    </header>

    <div class="detail-grid">
      <div>
        <section class="panel">
          <h3>Description</h3>
          <p>${project.description}</p>
          <h3>Notes</h3>
          <p class="muted">${project.notes}</p>
          <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        </section>

        <section class="panel">
          <h3>Image Gallery</h3>
          <div class="gallery-grid">${gallery}</div>
        </section>
      </div>

      <div>
        <section class="panel">
          <h3>Checklist</h3>
          <ul class="checklist">${checklistItems}</ul>
        </section>

        <section class="panel">
          <h3>Project Specifications</h3>
          <div class="spec-grid">${specs}</div>
        </section>
      </div>
    </div>
  `;

  els.detailContent.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(item.dataset.imageSrc, item.dataset.imageLabel));
  });
}

function openDetail(id) {
  renderDetail(id);
  els.detailPanel.classList.add("is-open");
  els.detailPanel.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  els.detailPanel.classList.remove("is-open");
  els.detailPanel.setAttribute("aria-hidden", "true");
}

function openLightbox(src, label) {
  els.lightboxImage.src = src;
  els.lightboxLabel.textContent = label;
  els.lightbox.classList.add("is-open");
  els.lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  els.lightbox.classList.remove("is-open");
  els.lightbox.setAttribute("aria-hidden", "true");
}

function setActiveView(viewName) {
  state.activeView = viewName;
  Object.entries(views).forEach(([key, node]) => {
    node.classList.toggle("is-active", key === viewName);
  });
  els.navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.view === viewName));
}

function addListeners() {
  els.navLinks.forEach((link) => {
    link.addEventListener("click", () => setActiveView(link.dataset.view));
  });

  els.searchInput.addEventListener("input", (event) => {
    state.searchText = event.target.value;
    renderProjectsList();
  });

  document.querySelectorAll("[data-close-detail]").forEach((node) => node.addEventListener("click", closeDetail));
  document.querySelectorAll("[data-close-lightbox]").forEach((node) => node.addEventListener("click", closeLightbox));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeDetail();
    }
  });
}

function init() {
  renderOverview();
  renderRecentProjects();
  renderBoard();
  renderStatusFilters();
  renderProjectsList();
  addListeners();
}

init();
