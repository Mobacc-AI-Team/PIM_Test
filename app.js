const administrations = {
  "110": {
    name: "Mobacc",
    subtitle: "Mobacc productinformatie en documentbeheer",
    channelTabs: ["overview", "documents", "procurement", "compliance"],
  },
  "210": {
    name: "Pharmaspray",
    subtitle: "Pharmaspray compliance- en productdata",
    channelTabs: ["overview", "documents", "procurement", "compliance"],
  },
  "710": {
    name: "MediccSports",
    subtitle: "MediccSports webshop- en productspecificaties",
    channelTabs: ["overview", "documents", "content", "sales", "compliance"],
  },
  "731": {
    name: "Sportbase",
    subtitle: "Sportbase webshop- en marketingcontent",
    channelTabs: ["overview", "documents", "content", "sales", "compliance"],
  },
};

const tabConfig = {
  overview: "PIM basis",
  documents: "Documenten",
  content: "Content & preview",
  procurement: "Inkoop",
  sales: "Verkoop / webshop",
  compliance: "Compliance & PPWR",
};

const articles = [
  {
    code: "53-57660-8900",
    description: "V16.96/20 BC/BC BRUSH",
    admin: "110",
    searchcode: "53-57660-8900",
    profile: "Inkoopartikel",
    channel: "Productie / component",
    status: "PIM basis gevuld",
    updated: "13-05-2026",
    pim: {
      itemType: "Component",
      group: "53-Sproeikop",
      brand: "Mobacc",
      attributeSet: "Componenten",
      unit: "STUK",
      owner: "Inkoop",
      flags: [
        ["Leveranciersdata", "Gevuld", "good"],
        ["Documentset", "Deels gevuld", "warn"],
        ["PPWR", "Open", "warn"],
      ],
      openCount: 2,
      documentCount: 2,
    },
    documents: {
      rows: [
        ["Leveranciersspecificatie", "Inkoop", "v2.1", "Actueel", "31-12-2026"],
        ["Inkoopspecificatie", "Intern", "v1.0", "Concept", ""],
      ],
      uploads: [
        ["Leveranciersspecificatie", "PDF upload", "Preview beschikbaar"],
        ["Leveranciersvoorwaarden", "Nog toevoegen", "Geen preview"],
      ],
    },
    procurement: {
      context: "Goedgekeurde inkoopcomponent",
      approved: "Ja",
      required: "Inkoopspecificatie\nLeveranciersspecificatie\nLeveranciersvoorwaarden\nPPWR-basisdata",
      suppliers: [["ADL - Aerosoldosen Limburg GmbH", "Primair", "5.000", "EUR", "0,034", "21 dgn"]],
    },
    compliance: {
      sds: "Niet vereist",
      tds: "Leveranciersspecificatie aanwezig",
      coa: "Niet van toepassing",
      cas: "-",
      plastic: "0,001 kg",
      metal: "0,000 kg",
      cardboard: "0,000 kg",
      packaging: "Primair component",
      flags: [
        ["PPWR-opbouw", "Nog niet compleet", "warn"],
        ["Chemische compliance", "Niet van toepassing", "warn"],
      ],
    },
  },
  {
    code: "47-00000-0165",
    description: "*VTO*PARFUM PÖ LIMONE",
    admin: "210",
    searchcode: "47-00000-0165",
    profile: "Inkoopartikel",
    channel: "Chemische grondstof",
    status: "Reminder op SDS",
    updated: "12-05-2026",
    pim: {
      itemType: "Grondstof",
      group: "4.-Grondstoffen",
      brand: "Pharmaspray",
      attributeSet: "Chemie",
      unit: "KG",
      owner: "QA/QC",
      flags: [
        ["MSDS", "Verloopt binnenkort", "bad"],
        ["Productspecificatie", "Actueel", "good"],
        ["COA", "Aanwezig", "good"],
      ],
      openCount: 1,
      documentCount: 3,
    },
    documents: {
      rows: [
        ["MSDS", "Compliance", "v5.2", "Reminder", "03-06-2026"],
        ["TDS", "Compliance", "v2.0", "Actueel", ""],
        ["COA", "Kwaliteit", "v1.1", "Actueel", ""],
      ],
      uploads: [
        ["MSDS", "PDF upload", "Preview beschikbaar"],
        ["TDS", "PDF upload", "Preview beschikbaar"],
        ["COA", "PDF upload", "Preview beschikbaar"],
      ],
    },
    procurement: {
      context: "Chemische grondstof met complianceplicht",
      approved: "Ja",
      required: "MSDS/SDS\nTDS\nCOA\nLeveranciersspecificatie\nEventueel CAS/UN-data",
      suppliers: [
        ["ADL - Aerosoldosen Limburg GmbH", "Primair", "25", "EUR", "18,400", "14 dgn"],
        ["Altachem NV", "Alternatief", "25", "EUR", "19,100", "21 dgn"],
      ],
    },
    compliance: {
      sds: "v5.2 geldig t/m 03-06-2026",
      tds: "v2.0 actueel",
      coa: "v1.1 actueel",
      cas: "CAS/UN later aan te vullen",
      plastic: "0,000 kg",
      metal: "0,000 kg",
      cardboard: "0,000 kg",
      packaging: "Bulk grondstof",
      flags: [
        ["SDS reminder", "Actie nodig", "bad"],
        ["Chemische basisdata", "Deels gevuld", "warn"],
      ],
    },
  },
  {
    code: "710-WS-0001",
    description: "Revalidatie balsem 200ml",
    admin: "710",
    searchcode: "revalidatie balsem",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Teksten in concept",
    updated: "13-05-2026",
    pim: {
      itemType: "Gereed product",
      group: "Medical care",
      brand: "MediccSports",
      attributeSet: "Webshop",
      unit: "STUK",
      owner: "Webshop",
      flags: [
        ["Magento content", "Concept", "warn"],
        ["Media", "Deels gevuld", "warn"],
        ["Klant-specifieke docs", "Actueel", "good"],
      ],
      openCount: 2,
      documentCount: 3,
    },
    documents: {
      rows: [
        ["Verkoopspecificatie", "Verkoop", "v2.1", "Actueel", "31-12-2026"],
        ["MSDS", "Compliance", "v1.3", "Actueel", "31-10-2026"],
        ["Klantdatasheet", "Klantniveau", "v1.0", "Actueel", ""],
      ],
      uploads: [
        ["Packshot", "Afbeelding upload", "Preview beschikbaar"],
        ["Productspecificatie", "PDF upload", "Preview beschikbaar"],
        ["Video", "MP4 upload", "Geen preview"],
      ],
    },
    content: {
      short: "Snelle ondersteuning voor spieren en gewrichten bij herstel en warming-up.",
      long: "Deze Magento-tekst wordt in de PIM beheerd en niet in Exact. Hier horen korte commerciële teksten, lange productomschrijvingen, SEO-velden, USP's, foto's en downloads thuis.",
      seoTitle: "Revalidatie balsem 200ml voor professioneel herstel",
      seoStatus: "Concept",
      usps: ["Magento contentveld", "Webshopmedia gekoppeld", "Klantspecs beschikbaar", "Preview voor marketing"],
      media: [
        ["Packshot", "Productdetailpagina", "Goedgekeurd"],
        ["Sfeerbeeld", "Campagne", "Concept"],
        ["Productspecificatie PDF", "Download", "Beschikbaar"],
      ],
    },
    sales: {
      channel: "Magento / B2B webshop",
      publication: "Nog niet gepubliceerd",
      required: "Korte omschrijving\nLange omschrijving\nSEO titel\nPackshot(s)\nProductspecificatie\nKlantdatasheet",
      customerSpecs: [
        ["Zorginkoper A", "Klantdatasheet", "v1.0", "Actueel"],
        ["Reseller B", "Verkoopspecificatie", "v2.1", "Actueel"],
      ],
    },
    compliance: {
      sds: "v1.3 actueel",
      tds: "Productspecificatie via download",
      coa: "Niet standaard",
      cas: "Niet relevant voor webshopweergave",
      plastic: "0,014 kg",
      metal: "0,000 kg",
      cardboard: "0,022 kg",
      packaging: "Primaire + secundaire verpakking",
      flags: [
        ["Webshop compleetheid", "Nog niet gereed", "warn"],
        ["PPWR", "Gevuld", "good"],
      ],
    },
  },
  {
    code: "50-33915-4602",
    description: "52x161NI HEMA ONDERHOUDSSPRAY 250ML",
    admin: "731",
    searchcode: "50-33915-4602",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Content niet compleet",
    updated: "13-05-2026",
    pim: {
      itemType: "Gereed product",
      group: "50-Bussen",
      brand: "Sportbase",
      attributeSet: "Webshop",
      unit: "STUK",
      owner: "Webshop",
      flags: [
        ["Webshopomschrijving", "Open", "warn"],
        ["Media", "Deels gevuld", "warn"],
        ["Klantdatasheet", "Concept", "warn"],
        ["PPWR", "Gereed", "good"],
      ],
      openCount: 3,
      documentCount: 3,
    },
    documents: {
      rows: [
        ["Verkoopspecificatie", "Verkoop", "v3.1", "Actueel", "31-12-2026"],
        ["MSDS", "Compliance", "v2.2", "Actueel", "31-10-2026"],
        ["Klantdatasheet", "Klantniveau", "v1.0", "Concept", ""],
      ],
      uploads: [
        ["Packshot", "Afbeelding upload", "Preview beschikbaar"],
        ["Lifestyle beeld", "Afbeelding upload", "Preview beschikbaar"],
        ["How-to video", "Video upload", "Geen preview"],
      ],
    },
    content: {
      short: "Onderhoudsspray met webshopcontent, packshots en klantgebonden specificaties.",
      long: "PIM-item voor verkoop en webshop. Hier worden uitgebreide productomschrijvingen, USP's, afbeeldingen, downloads, klant-specifieke documenten en verpakkingsdata beheerd buiten Exact Globe.",
      seoTitle: "Onderhoudsspray 250ml voor professioneel gebruik",
      seoStatus: "Concept",
      usps: ["Packshot aanwezig", "Klant-specifieke datasheet", "Webshopuitbreiding buiten Exact", "PPWR vastgelegd"],
      media: [
        ["Packshot", "Webshop PDP", "Goedgekeurd"],
        ["Lifestyle beeld", "Campagne", "Concept"],
        ["PDF download", "Productspecificatie", "Beschikbaar"],
      ],
    },
    sales: {
      channel: "Magento / Sportbase webshop",
      publication: "Concept",
      required: "Packshots\nLange omschrijving\nSEO velden\nDownloads\nKlant-specifieke datasheets",
      customerSpecs: [
        ["Mediccsports", "Verkoopspecificatie", "v3.1", "Actueel"],
        ["Sportbase", "Klantdatasheet", "v1.0", "Concept"],
      ],
    },
    compliance: {
      sds: "v2.2 actueel",
      tds: "Productspecificatie via download",
      coa: "Niet standaard",
      cas: "UN/CAS niet nodig voor webshopgebruik",
      plastic: "0,012 kg",
      metal: "0,031 kg",
      cardboard: "0,018 kg",
      packaging: "Primaire + secundaire verpakking",
      flags: [
        ["Klantspecs", "Nog niet compleet", "warn"],
        ["SDS", "Actueel", "good"],
      ],
    },
  },
];

const adminSelect = document.getElementById("admin-select");
const brandChip = document.getElementById("brand-chip");
const brandSubtitle = document.getElementById("brand-subtitle");
const contextPill = document.getElementById("context-pill");
const tabBar = document.getElementById("tab-bar");
const tabViews = document.querySelectorAll(".tab-view");
const searchInput = document.getElementById("article-search");
const clearButton = document.getElementById("clear-search");
const resultCount = document.getElementById("result-count");
const resultScope = document.getElementById("result-scope");
const searchResults = document.getElementById("search-results");

let activeAdmin = adminSelect.value;
let activeCode = null;

function getAdminItems() {
  return articles.filter((article) => article.admin === activeAdmin);
}

function setTheme(adminCode) {
  const admin = administrations[adminCode];
  document.body.dataset.adminTheme = adminCode;
  brandChip.textContent = adminCode;
  brandSubtitle.textContent = admin.subtitle;
  resultScope.textContent = `${adminCode} - ${admin.name}`;
}

function setTab(tabName) {
  tabBar.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabViews.forEach((view) => {
    const key = view.id.replace("tab-", "");
    view.classList.toggle("active", key === tabName);
  });
}

function renderTabBar(article) {
  const adminTabs = administrations[article.admin].channelTabs;
  const profileTabs = article.profile === "Inkoopartikel"
    ? ["overview", "documents", "procurement", "compliance"]
    : ["overview", "documents", "content", "sales", "compliance"];
  const activeTabs = adminTabs.filter((tab) => profileTabs.includes(tab));

  tabBar.innerHTML = activeTabs
    .map(
      (tab, index) => `
        <button class="tab-button ${index === 0 ? "active" : ""}" type="button" data-tab="${tab}">
          ${tabConfig[tab]}
        </button>
      `,
    )
    .join("");

  tabBar.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setTab(button.dataset.tab));
  });

  setTab(activeTabs[0]);
}

function fillSignalList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(
      ([label, state, tone]) => `
        <li>
          <span class="signal-label">${label}</span>
          <strong class="signal-state ${tone}">${state}</strong>
        </li>
      `,
    )
    .join("");
}

function fillTable(targetId, rows, emptyMessage, cols) {
  const target = document.getElementById(targetId);
  if (!rows || !rows.length) {
    target.innerHTML = `<tr><td colspan="${cols}">${emptyMessage}</td></tr>`;
    return;
  }
  target.innerHTML = rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
}

function fillList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = (items || []).map((item) => `<li>${item}</li>`).join("");
}

function fillUploadList(items) {
  const target = document.getElementById("upload-list");
  target.innerHTML = (items || [])
    .map(
      ([name, uploadType, preview]) => `
        <div class="upload-card">
          <div>
            <strong>${name}</strong>
            <span>${uploadType}</span>
          </div>
          <div class="preview-badge">${preview}</div>
        </div>
      `,
    )
    .join("");
}

function renderRecord(article) {
  activeCode = article.code;
  renderTabBar(article);

  document.getElementById("field-code").value = article.code;
  document.getElementById("field-description").value = article.description;
  document.getElementById("field-searchcode").value = article.searchcode;
  document.getElementById("field-admin").value = `${article.admin} - ${administrations[article.admin].name}`;
  document.getElementById("field-profile").value = article.profile;
  document.getElementById("field-status").value = article.status;
  document.getElementById("field-updated").value = article.updated;
  contextPill.textContent = `${article.profile} · ${article.channel}`;

  document.getElementById("overview-type").textContent = article.pim.itemType;
  document.getElementById("overview-channel").textContent = article.channel;
  document.getElementById("overview-docs").textContent = article.pim.documentCount;
  document.getElementById("overview-open").textContent = article.pim.openCount;

  document.getElementById("basis-item-type").value = article.pim.itemType;
  document.getElementById("basis-group").value = article.pim.group;
  document.getElementById("basis-brand").value = article.pim.brand;
  document.getElementById("basis-attribute-set").value = article.pim.attributeSet;
  document.getElementById("basis-unit").value = article.pim.unit;
  document.getElementById("basis-owner").value = article.pim.owner;
  fillSignalList("basis-flags", article.pim.flags);

  fillTable("documents-table", article.documents.rows, "Geen documenten gekoppeld.", 5);
  fillUploadList(article.documents.uploads);

  if (article.content) {
    document.getElementById("content-short").value = article.content.short;
    document.getElementById("content-long").value = article.content.long;
    document.getElementById("content-seo-title").value = article.content.seoTitle;
    document.getElementById("content-seo-status").value = article.content.seoStatus;
    document.getElementById("preview-title").textContent = article.description;
    document.getElementById("preview-copy").textContent = article.content.short;
    fillList("usp-list", article.content.usps);
    fillTable("media-table", article.content.media, "Geen media gekoppeld.", 3);
  } else {
    document.getElementById("content-short").value = "";
    document.getElementById("content-long").value = "";
    document.getElementById("content-seo-title").value = "";
    document.getElementById("content-seo-status").value = "";
    document.getElementById("preview-title").textContent = "Geen webshoppreview";
    document.getElementById("preview-copy").textContent = "Voor dit artikeltype is geen commerciële preview van toepassing.";
    fillList("usp-list", []);
    fillTable("media-table", [], "Geen media gekoppeld.", 3);
  }

  if (article.procurement) {
    fillTable("supplier-table", article.procurement.suppliers, "Geen leveranciers gekoppeld.", 6);
    document.getElementById("procurement-context").value = article.procurement.context;
    document.getElementById("procurement-approved").value = article.procurement.approved;
    document.getElementById("procurement-required").value = article.procurement.required;
  } else {
    fillTable("supplier-table", [], "Geen leveranciers gekoppeld.", 6);
    document.getElementById("procurement-context").value = "";
    document.getElementById("procurement-approved").value = "";
    document.getElementById("procurement-required").value = "";
  }

  if (article.sales) {
    fillTable("customer-specs-table", article.sales.customerSpecs, "Geen klant-specifieke documenten.", 4);
    document.getElementById("sales-channel").value = article.sales.channel;
    document.getElementById("sales-publication").value = article.sales.publication;
    document.getElementById("sales-required").value = article.sales.required;
  } else {
    fillTable("customer-specs-table", [], "Geen klant-specifieke documenten.", 4);
    document.getElementById("sales-channel").value = "";
    document.getElementById("sales-publication").value = "";
    document.getElementById("sales-required").value = "";
  }

  document.getElementById("compliance-sds").value = article.compliance.sds;
  document.getElementById("compliance-tds").value = article.compliance.tds;
  document.getElementById("compliance-coa").value = article.compliance.coa;
  document.getElementById("compliance-cas").value = article.compliance.cas;
  document.getElementById("extra-plastic").value = article.compliance.plastic;
  document.getElementById("extra-metal").value = article.compliance.metal;
  document.getElementById("extra-cardboard").value = article.compliance.cardboard;
  document.getElementById("extra-packaging").value = article.compliance.packaging;
  fillSignalList("compliance-flags", article.compliance.flags);
}

function renderResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const items = getAdminItems().filter((article) => {
    if (!normalized) {
      return true;
    }
    return [
      article.code,
      article.description,
      article.searchcode,
      article.profile,
      article.channel,
      ...(article.documents.rows?.flat() || []),
      ...(article.procurement?.suppliers?.flat() || []),
      ...(article.sales?.customerSpecs?.flat() || []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });

  resultCount.textContent = `${items.length} resultaten`;
  searchResults.innerHTML = items
    .map(
      (article) => `
        <button class="result-item ${article.code === activeCode ? "active" : ""}" type="button" data-code="${article.code}">
          <span class="result-code">${article.code}</span>
          <span class="result-description">${article.description}</span>
          <span class="result-meta">${article.profile} · ${article.channel}</span>
        </button>
      `,
    )
    .join("");

  searchResults.querySelectorAll("[data-code]").forEach((button) => {
    button.addEventListener("click", () => {
      const article = articles.find((item) => item.code === button.dataset.code);
      if (article) {
        renderRecord(article);
        renderResults(searchInput.value.trim());
      }
    });
  });

  if ((!activeCode || !items.find((item) => item.code === activeCode)) && items[0]) {
    renderRecord(items[0]);
    return;
  }

  if (!items.length) {
    activeCode = null;
    contextPill.textContent = "Geen artikel gevonden";
  }
}

adminSelect.addEventListener("change", () => {
  activeAdmin = adminSelect.value;
  activeCode = null;
  setTheme(activeAdmin);
  searchInput.value = "";
  renderResults("");
});

searchInput.addEventListener("input", () => {
  renderResults(searchInput.value);
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  renderResults("");
});

setTheme(activeAdmin);
renderResults("");
