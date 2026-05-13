const tabButtons = document.querySelectorAll(".tab-button");
const views = {
  dashboard: document.getElementById("dashboard-view"),
  detail: document.getElementById("detail-view"),
  documents: document.getElementById("documents-view"),
  completeness: document.getElementById("completeness-view"),
};

function setView(viewName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("active", name === viewName);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll("[data-target-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.targetView));
});

const searchInput = document.getElementById("global-search");

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    setView("dashboard");
    return;
  }

  const detailTerms = ["110", "mob-42015", "degreaser", "chemsource", "sds"];
  const documentTerms = ["document", "msds", "sds", "coa", "tds", "spec"];
  const completenessTerms = ["compleet", "qa", "ppwr", "vrijgave", "status"];

  if (documentTerms.some((term) => query.includes(term))) {
    setView("documents");
    return;
  }

  if (completenessTerms.some((term) => query.includes(term))) {
    setView("completeness");
    return;
  }

  if (detailTerms.some((term) => query.includes(term))) {
    setView("detail");
    return;
  }

  setView("dashboard");
});
