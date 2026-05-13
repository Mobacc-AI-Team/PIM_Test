// PIM Console — demo applicatie

const administrations = {
  "110": {
    name: "Mobacc",
    subtitle: "Mobacc productinformatie en documentbeheer",
    channelTabs: ["overview", "documents", "procurement", "compliance"],
    logo: "./assets/brand-logos/Logo's/Mobacc_sRGB_VRIJSTAAND_2000x493.png",
  },
  "210": {
    name: "Pharmaspray",
    subtitle: "Pharmaspray compliance- en productdata",
    channelTabs: ["overview", "documents", "procurement", "compliance"],
    logo: "./assets/brand-logos/Logo's/Logo_pharmaspray_2026_sRGB_zonder_PO.png",
  },
  "710": {
    name: "U-Sport",
    subtitle: "U-Sport webshop- en productspecificaties",
    channelTabs: ["overview", "documents", "content", "sales", "compliance"],
    logo: "./assets/brand-logos/Logo's/U-Sport_logo_horizontaal_zonder_URL_3000px.png",
  },
  "731": {
    name: "Sportbase",
    subtitle: "Sportbase webshop- en marketingcontent",
    channelTabs: ["overview", "documents", "content", "sales", "compliance"],
    logo: "./assets/brand-logos/Logo's/Logo_Sportbase_WARM_GRIJS_sRGB_VRIJSTAAND.png",
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

// Velden per bewerkbare groep
const groupFields = {
  "pim-basis": ["basis-item-type", "basis-group", "basis-brand", "basis-attribute-set", "basis-unit", "basis-owner"],
  "content-teksten": ["content-short", "content-long", "content-seo-title", "content-seo-status"],
  "inkoop-stamdata": ["procurement-context", "procurement-approved", "procurement-required"],
  "productiedata": ["production-recipe", "production-quality", "production-batch", "production-docset"],
  "compliance-data": ["compliance-sds", "compliance-tds", "compliance-coa", "compliance-cas"],
  "ppwr-data": ["extra-plastic", "extra-metal", "extra-cardboard", "extra-packaging"],
  "verkoop-data": ["sales-channel", "sales-publication", "sales-required"],
  "webshopdata": ["sales-attribute-set", "sales-content-status", "sales-media-rule", "sales-goal"],
};

const articles = [
  // ── 110 Mobacc ──────────────────────────────────────────────────────────────
  {
    code: "53-57660-8900",
    description: "V16.96/20 BC/BC BRUSH",
    admin: "110",
    searchcode: "53-57660-8900",
    profile: "Inkoopartikel",
    channel: "Productie / component",
    status: "PIM basis gevuld",
    updated: "13-05-2026",
    completeness: 65,
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
      assumptions: [
        "Brondata uit Exact blijft leidend voor code en basisomschrijving.",
        "PIM bewaart aanvullende leveranciersdocumenten en kwaliteitsbijlagen.",
        "Productie gebruikt deze kaart voor documentcontrole en verpakkingsdata.",
      ],
      production: {
        recipe: "Where used via Exact Globe",
        quality: "Standaard componentcontrole",
        batch: "Niet batch-plichtig",
        docset: "Spec + voorwaarden + PPWR",
      },
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
    code: "53-88040-0100",
    description: "DOSEERVENTIEL STANDAARD 1/1",
    admin: "110",
    searchcode: "doseerventiel",
    profile: "Inkoopartikel",
    channel: "Productie / component",
    status: "Bijna compleet",
    updated: "12-05-2026",
    completeness: 88,
    pim: {
      itemType: "Component",
      group: "53-Doseerventiel",
      brand: "Mobacc",
      attributeSet: "Componenten",
      unit: "STUK",
      owner: "Inkoop",
      flags: [
        ["Leveranciersdata", "Actueel", "good"],
        ["Documentset", "Compleet", "good"],
        ["PPWR", "Deels gevuld", "warn"],
      ],
      openCount: 1,
      documentCount: 3,
    },
    documents: {
      rows: [
        ["Leveranciersspecificatie", "Inkoop", "v3.0", "Actueel", "31-12-2026"],
        ["Inkoopspecificatie", "Intern", "v2.1", "Actueel", ""],
        ["PPWR-declaratie", "Compliance", "v1.0", "Concept", ""],
      ],
      uploads: [
        ["Leveranciersspecificatie", "PDF upload", "Preview beschikbaar"],
        ["Inkoopspecificatie", "PDF upload", "Preview beschikbaar"],
        ["PPWR-declaratie", "Nog voltooien", "Geen preview"],
      ],
    },
    procurement: {
      context: "Standaard doseerventiel voor aerosolproductie",
      approved: "Ja",
      required: "Inkoopspecificatie\nLeveranciersspecificatie\nPPWR-declaratie",
      assumptions: [
        "Ventieltype is gekoppeld aan receptuurlijst in Exact Globe.",
        "PPWR-data wordt aangeleverd door leverancier vóór Q3 2026.",
        "Kwaliteitscontrole vindt plaats per inkomende partij.",
      ],
      production: {
        recipe: "BOM-koppeling Exact — 12 actieve recepturen",
        quality: "IQC op binnenkomst",
        batch: "Batchregistratie vereist",
        docset: "Spec + PPWR",
      },
      suppliers: [
        ["Salvalco BV", "Primair", "10.000", "EUR", "0,021", "14 dgn"],
        ["Altachem NV", "Alternatief", "10.000", "EUR", "0,023", "21 dgn"],
      ],
    },
    compliance: {
      sds: "Niet vereist",
      tds: "Leveranciersspecificatie v3.0",
      coa: "Per batch aanwezig",
      cas: "-",
      plastic: "0,002 kg",
      metal: "0,001 kg",
      cardboard: "0,000 kg",
      packaging: "Bulk component",
      flags: [
        ["PPWR-declaratie", "Concept — actie leverancier", "warn"],
        ["Chemische compliance", "Niet van toepassing", "good"],
      ],
    },
  },

  // ── 210 Pharmaspray ─────────────────────────────────────────────────────────
  {
    code: "47-00000-0165",
    description: "*VTO*PARFUM PÖ LIMONE",
    admin: "210",
    searchcode: "47-00000-0165",
    profile: "Inkoopartikel",
    channel: "Chemische grondstof",
    status: "Reminder op SDS",
    updated: "12-05-2026",
    completeness: 78,
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
      assumptions: [
        "Fabrieksgebruik vraagt geldige SDS en productspecificatie vóór vrijgave.",
        "QA/QC bewaakt versies, verloopdata en volledigheid van chemische documentatie.",
        "Latere koppeling met MOC en where-used is voorzien.",
      ],
      production: {
        recipe: "Koppeling aan recepturen via Exact where used",
        quality: "QA/QC chemische vrijgave",
        batch: "Batch- en lottraceerbaarheid vereist",
        docset: "SDS + TDS + COA",
      },
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
        ["SDS reminder", "Actie nodig vóór 03-06", "bad"],
        ["Chemische basisdata", "Deels gevuld", "warn"],
      ],
    },
  },
  {
    code: "47-99001-0012",
    description: "ETHANOL 96% DENAT.",
    admin: "210",
    searchcode: "ethanol",
    profile: "Inkoopartikel",
    channel: "Chemische grondstof",
    status: "SDS ontbreekt",
    updated: "08-05-2026",
    completeness: 42,
    pim: {
      itemType: "Grondstof",
      group: "4.-Grondstoffen",
      brand: "Pharmaspray",
      attributeSet: "Chemie",
      unit: "KG",
      owner: "QA/QC",
      flags: [
        ["MSDS / SDS", "Ontbreekt", "bad"],
        ["TDS", "Ontbreekt", "bad"],
        ["COA", "Niet aanwezig", "bad"],
        ["Leveranciersdata", "Deels gevuld", "warn"],
      ],
      openCount: 4,
      documentCount: 0,
    },
    documents: {
      rows: [],
      uploads: [],
    },
    procurement: {
      context: "Solvent — productie en reiniging",
      approved: "In beoordeling",
      required: "MSDS/SDS\nTDS\nCOA\nUN-nummer\nVeiligheidsinstructie",
      assumptions: [
        "Gebruik vereist geldige SDS vóór eerste inzet in productie.",
        "ADR-classificatie en UN-nummer moeten worden vastgelegd.",
        "QA/QC geeft vrijgave pas na complete documentset.",
      ],
      production: {
        recipe: "Nog niet gekoppeld aan Exact recepturen",
        quality: "QA/QC vrijgave benodigd",
        batch: "Batch- en lottraceerbaarheid verplicht",
        docset: "SDS + TDS + COA + UN",
      },
      suppliers: [
        ["Brenntag NV", "Primair", "200", "EUR", "1,240", "7 dgn"],
      ],
    },
    compliance: {
      sds: "Ontbreekt — direct actie vereist",
      tds: "Ontbreekt",
      coa: "Ontbreekt",
      cas: "64-17-5 (ethanol) — nog in te vullen",
      plastic: "0,000 kg",
      metal: "0,000 kg",
      cardboard: "0,000 kg",
      packaging: "IBC / vat",
      flags: [
        ["SDS", "Ontbreekt — blokkering productie", "bad"],
        ["TDS", "Ontbreekt", "bad"],
        ["COA", "Ontbreekt", "bad"],
        ["UN/ADR", "Nog vast te leggen", "warn"],
      ],
    },
  },

  // ── 710 U-Sport ─────────────────────────────────────────────────────────────
  {
    code: "710-WS-0001",
    description: "Revalidatie balsem 200ml",
    admin: "710",
    searchcode: "revalidatie balsem",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Teksten in concept",
    updated: "13-05-2026",
    completeness: 72,
    pim: {
      itemType: "Gereed product",
      group: "Medical care",
      brand: "U-Sport",
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
      usps: ["Professionele formule", "Snel absorberend", "Geschikt voor dagelijks gebruik", "Vrij van parabenen"],
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
      assumptions: [
        "Webshopcontent wordt niet in Exact maar in PIM onderhouden.",
        "Minimaal 1 packshot, SEO titel en productspecificatie zijn verplicht.",
        "Klant-specifieke docs mogen los staan van generieke webshopcontent.",
      ],
      webshop: {
        attributeSet: "Medical care",
        contentStatus: "Concept",
        mediaRule: "1 packshot + 1 sfeerbeeld + 1 PDF",
        goal: "B2B publicatie met downloads",
      },
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
    code: "710-WS-0047",
    description: "Sportgel cooling 100ml",
    admin: "710",
    searchcode: "sportgel cooling",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Content in progress",
    updated: "10-05-2026",
    completeness: 58,
    pim: {
      itemType: "Gereed product",
      group: "Recovery",
      brand: "U-Sport",
      attributeSet: "Webshop",
      unit: "STUK",
      owner: "Webshop",
      flags: [
        ["Magento content", "Deels gevuld", "warn"],
        ["Media", "Packshot ontbreekt", "bad"],
        ["SEO", "Niet ingevuld", "bad"],
      ],
      openCount: 3,
      documentCount: 2,
    },
    documents: {
      rows: [
        ["Verkoopspecificatie", "Verkoop", "v1.0", "Actueel", "31-12-2026"],
        ["MSDS", "Compliance", "v1.0", "Actueel", "30-09-2026"],
      ],
      uploads: [
        ["Verkoopspecificatie", "PDF upload", "Preview beschikbaar"],
        ["Packshot", "Nog uploaden", "Geen preview"],
      ],
    },
    content: {
      short: "Verkoelende sportgel voor spieren na intensieve training.",
      long: "Sportgel met menthol voor direct verkoelend effect op vermoeide spieren. Licht van textuur en snel intrekkend. Ideaal na hardlopen, fietsen of krachttraining.",
      seoTitle: "",
      seoStatus: "Niet ingevuld",
      usps: ["Menthol cooling effect", "Lichte gel-textuur", "Snel intrekkend"],
      media: [
        ["Packshot", "Productdetailpagina", "Ontbreekt"],
        ["Verkoopspecificatie PDF", "Download", "Beschikbaar"],
      ],
    },
    sales: {
      channel: "Magento / B2B webshop",
      publication: "Concept — nog niet gereed",
      required: "Packshot\nSEO titel\nLange omschrijving\nProductspecificatie",
      assumptions: [
        "Packshot is harde voorwaarde voor publicatie.",
        "SEO-velden worden aangeleverd door marketingteam.",
        "Publicatie volgt na content- en mediareview.",
      ],
      webshop: {
        attributeSet: "Recovery",
        contentStatus: "Onvolledig",
        mediaRule: "1 packshot verplicht + 1 PDF",
        goal: "Webshop publicatie B2B",
      },
      customerSpecs: [
        ["Sportclub NL", "Verkoopspecificatie", "v1.0", "Actueel"],
      ],
    },
    compliance: {
      sds: "v1.0 actueel",
      tds: "Verkoopspecificatie aanwezig",
      coa: "Niet standaard",
      cas: "Niet relevant",
      plastic: "0,010 kg",
      metal: "0,000 kg",
      cardboard: "0,015 kg",
      packaging: "Primaire verpakking",
      flags: [
        ["PPWR", "Deels gevuld", "warn"],
        ["Webshop gereed", "Nee — packshot en SEO open", "bad"],
      ],
    },
  },

  // ── 731 Sportbase ────────────────────────────────────────────────────────────
  {
    code: "50-33915-4602",
    description: "52x161NI HEMA ONDERHOUDSSPRAY 250ML",
    admin: "731",
    searchcode: "50-33915-4602",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Content niet compleet",
    updated: "13-05-2026",
    completeness: 55,
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
      usps: ["Packshot aanwezig", "Klant-specifieke datasheet", "PPWR vastgelegd"],
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
      assumptions: [
        "Sportbase gebruikt PIM als bron voor marketingteksten en downloads.",
        "Packshots en klantdatasheets kunnen apart versiebeheer krijgen.",
        "Publicatie volgt pas na content-, media- en documentcontrole.",
      ],
      webshop: {
        attributeSet: "Webshop sportzorg",
        contentStatus: "Niet compleet",
        mediaRule: "2 packshots + 1 lifestyle + 1 PDF",
        goal: "Magento publicatie + marketinggebruik",
      },
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
  {
    code: "50-20100-1205",
    description: "FIETSREINIGER 500ML",
    admin: "731",
    searchcode: "fietsreiniger",
    profile: "Verkoopartikel",
    channel: "Webshop / marketing",
    status: "Net aangemaakt",
    updated: "13-05-2026",
    completeness: 28,
    pim: {
      itemType: "Gereed product",
      group: "50-Bussen",
      brand: "Sportbase",
      attributeSet: "Webshop",
      unit: "STUK",
      owner: "Nog toe te wijzen",
      flags: [
        ["Webshopomschrijving", "Leeg", "bad"],
        ["Media", "Geen assets", "bad"],
        ["PPWR", "Niet ingevuld", "bad"],
        ["Documenten", "Ontbreken", "bad"],
      ],
      openCount: 5,
      documentCount: 0,
    },
    documents: {
      rows: [],
      uploads: [],
    },
    content: {
      short: "",
      long: "",
      seoTitle: "",
      seoStatus: "Niet ingevuld",
      usps: [],
      media: [],
    },
    sales: {
      channel: "Magento / Sportbase webshop",
      publication: "Niet gestart",
      required: "Packshots\nKorte en lange omschrijving\nSEO titel\nMSDS\nVerkoopspecificatie",
      assumptions: [
        "PIM-kaart is aangemaakt op basis van Exact-import.",
        "Content, media en documenten moeten volledig worden aangevuld.",
        "Publicatie is pas mogelijk na goedkeuring contenteigenaar.",
      ],
      webshop: {
        attributeSet: "Webshop sportzorg",
        contentStatus: "Leeg",
        mediaRule: "Min. 1 packshot + 1 PDF verplicht",
        goal: "Magento publicatie",
      },
      customerSpecs: [],
    },
    compliance: {
      sds: "Ontbreekt — aanvragen bij leverancier",
      tds: "Ontbreekt",
      coa: "Ontbreekt",
      cas: "Nog vast te leggen",
      plastic: "",
      metal: "",
      cardboard: "",
      packaging: "Nog in te vullen",
      flags: [
        ["SDS", "Ontbreekt", "bad"],
        ["PPWR", "Niet ingevuld", "bad"],
        ["Documenten", "Volledig leeg", "bad"],
      ],
    },
  },
];

// ── DOM-referenties ────────────────────────────────────────────────────────────

const adminSelect   = document.getElementById("admin-select");
const brandChip     = document.getElementById("brand-chip");
const brandLogo     = document.getElementById("brand-logo");
const brandSubtitle = document.getElementById("brand-subtitle");
const contextPill   = document.getElementById("context-pill");
const tabBar        = document.getElementById("tab-bar");
const tabViews      = document.querySelectorAll(".tab-view");
const searchInput   = document.getElementById("article-search");
const clearButton   = document.getElementById("clear-search");
const resultCount   = document.getElementById("result-count");
const resultScope   = document.getElementById("result-scope");
const searchResults = document.getElementById("search-results");

let activeAdmin = adminSelect.value;
let activeCode  = null;
let editState   = {};
let currentModalType = null;
let uploadSimulated  = false;

// ── Hulpfuncties ──────────────────────────────────────────────────────────────

function getAdminItems() {
  return articles.filter(a => a.admin === activeAdmin);
}

function completenessColor(pct) {
  if (pct >= 75) return "good";
  if (pct >= 40) return "warn";
  return "bad";
}

function statusTone(status) {
  const map = {
    "Bijna compleet": "good",
    "Compleet": "good",
    "Gepubliceerd": "good",
    "PIM basis gevuld": "blue",
    "Content in progress": "orange",
    "Teksten in concept": "orange",
    "Reminder op SDS": "orange",
    "Content niet compleet": "red",
    "SDS ontbreekt": "red",
    "Net aangemaakt": "grey",
  };
  return map[status] || "blue";
}

// ── Thema & tabs ──────────────────────────────────────────────────────────────

function setTheme(adminCode) {
  const admin = administrations[adminCode];
  document.body.dataset.adminTheme = adminCode;
  brandChip.textContent = adminCode;
  brandLogo.src = admin.logo;
  brandLogo.alt = `${admin.name} logo`;
  brandSubtitle.textContent = admin.subtitle;
  resultScope.textContent = `${adminCode} – ${admin.name}`;
}

function setTab(tabName) {
  tabBar.querySelectorAll(".tab-button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  tabViews.forEach(view => {
    const key = view.id.replace("tab-", "");
    view.classList.toggle("active", key === tabName);
  });
}

function renderTabBar(article) {
  const adminTabs   = administrations[article.admin].channelTabs;
  const profileTabs = article.profile === "Inkoopartikel"
    ? ["overview", "documents", "procurement", "compliance"]
    : ["overview", "documents", "content", "sales", "compliance"];
  const activeTabs = adminTabs.filter(t => profileTabs.includes(t));

  tabBar.innerHTML = activeTabs.map((tab, i) => `
    <button class="tab-button ${i === 0 ? "active" : ""}" type="button" data-tab="${tab}">
      ${tabConfig[tab]}
    </button>
  `).join("");

  tabBar.querySelectorAll(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });

  setTab(activeTabs[0]);
}

// ── Vul-functies ──────────────────────────────────────────────────────────────

function fillSignalList(targetId, items) {
  const el = document.getElementById(targetId);
  el.innerHTML = items.map(([label, state, tone]) => `
    <li>
      <span class="signal-label">${label}</span>
      <strong class="signal-state ${tone}">${state}</strong>
    </li>
  `).join("");
}

function fillTable(targetId, rows, emptyMessage, cols) {
  const el = document.getElementById(targetId);
  if (!rows || !rows.length) {
    el.innerHTML = `<tr><td colspan="${cols}" class="table-empty">${emptyMessage}</td></tr>`;
    return;
  }
  el.innerHTML = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("");
}

function fillList(targetId, items) {
  document.getElementById(targetId).innerHTML = (items || []).map(item => `<li>${item}</li>`).join("");
}

function fillUploadList(items) {
  const el = document.getElementById("upload-list");
  if (!items || !items.length) {
    el.innerHTML = `<div class="upload-empty">Nog geen bestanden geüpload.</div>`;
    return;
  }
  el.innerHTML = items.map(([name, uploadType, preview]) => {
    const hasPreview = preview.toLowerCase().includes("beschikbaar");
    return `
      <div class="upload-card">
        <div class="upload-card-info">
          <strong>${name}</strong>
          <span>${uploadType}</span>
        </div>
        <div class="preview-badge ${hasPreview ? "has-preview" : ""}">${preview}</div>
      </div>
    `;
  }).join("");
}

// ── Webshop preview ───────────────────────────────────────────────────────────

function renderWebshopPreview(article) {
  const target = document.getElementById("preview-render");
  if (!article.content) {
    target.innerHTML = `
      <div class="preview-empty">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>Geen webshoppreview voor dit artikeltype.</p>
      </div>`;
    return;
  }

  const admin  = administrations[article.admin];
  const tone   = article.content.seoStatus === "Gepubliceerd" ? "good" : "warn";
  const domain = admin.name.toLowerCase().replace(/[^a-z]/g, "") + ".nl";
  const uspsHtml = (article.content.usps || [])
    .map(u => `<li><span class="usp-check">✓</span>${u}</li>`)
    .join("");
  const shortText = article.content.short || "—";
  const seoTitle  = article.content.seoTitle || article.description;
  const seoDesc   = shortText.length > 115 ? shortText.slice(0, 115) + "…" : shortText;

  target.innerHTML = `
    <div class="wpc">
      <div class="wpc-top">
        <span class="wpc-kicker">Live preview</span>
        <span class="wpc-pub-badge ${tone}">${article.content.seoStatus}</span>
      </div>
      <div class="wpc-main">
        <div class="wpc-image-slot">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Packshot</span>
        </div>
        <div class="wpc-body">
          <p class="wpc-brand-label">${admin.name}</p>
          <h2 class="wpc-title">${article.description}</h2>
          <p class="wpc-desc">${shortText}</p>
          ${uspsHtml ? `<ul class="wpc-usps">${uspsHtml}</ul>` : ""}
          <button class="wpc-cta" disabled>Toevoegen aan winkelwagen</button>
        </div>
      </div>
      <div class="wpc-seo">
        <span class="wpc-seo-label">Google preview</span>
        <div class="wpc-seo-card">
          <div class="wpc-seo-url">www.${domain} › producten</div>
          <div class="wpc-seo-title">${seoTitle}</div>
          <div class="wpc-seo-desc">${seoDesc}</div>
        </div>
      </div>
    </div>
  `;
}

// ── Record renderen ───────────────────────────────────────────────────────────

function renderRecord(article) {
  activeCode = article.code;
  // Sluit eventuele open editmodi
  Object.keys(editState).forEach(g => cancelGroup(g, true));

  renderTabBar(article);

  document.getElementById("field-code").value        = article.code;
  document.getElementById("field-description").value = article.description;
  document.getElementById("field-searchcode").value  = article.searchcode;
  document.getElementById("field-admin").value       = `${article.admin} – ${administrations[article.admin].name}`;
  document.getElementById("field-profile").value     = article.profile;
  document.getElementById("field-updated").value     = article.updated;
  contextPill.textContent = `${article.profile} · ${article.channel}`;

  // Status badge
  document.getElementById("field-status-wrap").innerHTML =
    `<div class="status-badge ${statusTone(article.status)}">${article.status}</div>`;

  // Workflow balk
  document.getElementById("wf-status-display").innerHTML =
    `<div class="status-badge ${statusTone(article.status)}">${article.status}</div>`;

  // Volledigheid
  const pct = article.completeness || 0;
  document.getElementById("completeness-pct").textContent = `${pct}%`;
  const fill = document.getElementById("completeness-fill");
  fill.style.width     = `${pct}%`;
  fill.className       = `completeness-fill ${completenessColor(pct)}`;

  // Overzichtskaarten
  document.getElementById("overview-type").textContent    = article.pim.itemType;
  document.getElementById("overview-channel").textContent = article.channel;
  document.getElementById("overview-docs").textContent    = article.pim.documentCount;
  document.getElementById("overview-open").textContent    = article.pim.openCount;

  // PIM basis
  document.getElementById("basis-item-type").value    = article.pim.itemType;
  document.getElementById("basis-group").value        = article.pim.group;
  document.getElementById("basis-brand").value        = article.pim.brand;
  document.getElementById("basis-attribute-set").value= article.pim.attributeSet;
  document.getElementById("basis-unit").value         = article.pim.unit;
  document.getElementById("basis-owner").value        = article.pim.owner;
  fillSignalList("basis-flags", article.pim.flags);

  // Documenten
  fillTable("documents-table", article.documents.rows, "Nog geen documenten gekoppeld.", 5);
  fillUploadList(article.documents.uploads);

  // Content
  if (article.content) {
    document.getElementById("content-short").value      = article.content.short;
    document.getElementById("content-long").value       = article.content.long;
    document.getElementById("content-seo-title").value  = article.content.seoTitle;
    document.getElementById("content-seo-status").value = article.content.seoStatus;
    fillList("usp-list", article.content.usps);
    fillTable("media-table", article.content.media, "Geen media gekoppeld.", 3);
  } else {
    ["content-short","content-long","content-seo-title","content-seo-status"].forEach(id => {
      document.getElementById(id).value = "";
    });
    fillTable("media-table", [], "Geen media gekoppeld.", 3);
  }
  renderWebshopPreview(article);

  // Inkoop
  if (article.procurement) {
    fillTable("supplier-table", article.procurement.suppliers, "Geen leveranciers gekoppeld.", 6);
    document.getElementById("procurement-context").value  = article.procurement.context;
    document.getElementById("procurement-approved").value = article.procurement.approved;
    document.getElementById("procurement-required").value = article.procurement.required;
    fillList("procurement-assumptions", article.procurement.assumptions);
    document.getElementById("production-recipe").value  = article.procurement.production.recipe;
    document.getElementById("production-quality").value = article.procurement.production.quality;
    document.getElementById("production-batch").value   = article.procurement.production.batch;
    document.getElementById("production-docset").value  = article.procurement.production.docset;
  } else {
    fillTable("supplier-table", [], "Geen leveranciers gekoppeld.", 6);
    ["procurement-context","procurement-approved","procurement-required",
     "production-recipe","production-quality","production-batch","production-docset"]
      .forEach(id => { document.getElementById(id).value = ""; });
    fillList("procurement-assumptions", []);
  }

  // Verkoop
  if (article.sales) {
    fillTable("customer-specs-table", article.sales.customerSpecs, "Geen klant-specifieke documenten.", 4);
    document.getElementById("sales-channel").value       = article.sales.channel;
    document.getElementById("sales-publication").value   = article.sales.publication;
    document.getElementById("sales-required").value      = article.sales.required;
    fillList("sales-assumptions", article.sales.assumptions);
    document.getElementById("sales-attribute-set").value  = article.sales.webshop.attributeSet;
    document.getElementById("sales-content-status").value = article.sales.webshop.contentStatus;
    document.getElementById("sales-media-rule").value     = article.sales.webshop.mediaRule;
    document.getElementById("sales-goal").value           = article.sales.webshop.goal;
  } else {
    fillTable("customer-specs-table", [], "Geen klant-specifieke documenten.", 4);
    ["sales-channel","sales-publication","sales-required",
     "sales-attribute-set","sales-content-status","sales-media-rule","sales-goal"]
      .forEach(id => { document.getElementById(id).value = ""; });
    fillList("sales-assumptions", []);
  }

  // Compliance
  document.getElementById("compliance-sds").value   = article.compliance.sds;
  document.getElementById("compliance-tds").value   = article.compliance.tds;
  document.getElementById("compliance-coa").value   = article.compliance.coa;
  document.getElementById("compliance-cas").value   = article.compliance.cas;
  document.getElementById("extra-plastic").value    = article.compliance.plastic;
  document.getElementById("extra-metal").value      = article.compliance.metal;
  document.getElementById("extra-cardboard").value  = article.compliance.cardboard;
  document.getElementById("extra-packaging").value  = article.compliance.packaging;
  fillSignalList("compliance-flags", article.compliance.flags);
}

// ── Zoekresultaten ────────────────────────────────────────────────────────────

function renderResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const items = getAdminItems().filter(a => {
    if (!normalized) return true;
    return [
      a.code, a.description, a.searchcode, a.profile, a.channel,
      ...(a.documents.rows?.flat() || []),
      ...(a.procurement?.suppliers?.flat() || []),
      ...(a.sales?.customerSpecs?.flat() || []),
    ].join(" ").toLowerCase().includes(normalized);
  });

  resultCount.textContent = `${items.length} resultaat${items.length !== 1 ? "en" : ""}`;
  searchResults.innerHTML = items.map(a => {
    const pct   = a.completeness || 0;
    const color = completenessColor(pct);
    return `
      <button class="result-item ${a.code === activeCode ? "active" : ""}" type="button" data-code="${a.code}">
        <span class="result-code">${a.code}</span>
        <span class="result-description">${a.description}</span>
        <span class="result-meta">${a.profile} · ${a.channel}</span>
        <div class="result-progress">
          <div class="result-progress-track">
            <div class="result-progress-fill ${color}" style="width:${pct}%"></div>
          </div>
          <span class="result-progress-pct">${pct}%</span>
        </div>
      </button>
    `;
  }).join("");

  searchResults.querySelectorAll("[data-code]").forEach(btn => {
    btn.addEventListener("click", () => {
      const article = articles.find(a => a.code === btn.dataset.code);
      if (article) {
        renderRecord(article);
        renderResults(searchInput.value.trim());
      }
    });
  });

  if ((!activeCode || !items.find(a => a.code === activeCode)) && items[0]) {
    renderRecord(items[0]);
    return;
  }
  if (!items.length) {
    activeCode = null;
    contextPill.textContent = "Geen artikel gevonden";
  }
}

// ── Edit-modus ────────────────────────────────────────────────────────────────

function enterEditMode(groupId) {
  const box    = document.getElementById(`group-${groupId}`);
  const fields = groupFields[groupId] || [];
  const originals = {};

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    originals[id] = el.value;
    el.removeAttribute("readonly");
    el.classList.add("editable");
  });

  editState[groupId] = originals;
  box.classList.add("editing");

  const actionsDiv = document.getElementById(`actions-${groupId}`);
  if (actionsDiv) {
    actionsDiv.innerHTML = `
      <button class="cancel-btn" onclick="cancelGroup('${groupId}')">Annuleren</button>
      <button class="save-btn"   onclick="saveGroup('${groupId}')">Opslaan</button>
    `;
  }
}

function cancelGroup(groupId, silent = false) {
  const box      = document.getElementById(`group-${groupId}`);
  const originals = editState[groupId] || {};
  const fields   = groupFields[groupId] || [];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (originals[id] !== undefined) el.value = originals[id];
    el.setAttribute("readonly", "");
    el.classList.remove("editable");
  });

  delete editState[groupId];
  if (box) box.classList.remove("editing");

  const actionsDiv = document.getElementById(`actions-${groupId}`);
  if (actionsDiv) {
    actionsDiv.innerHTML = `<button class="edit-btn" onclick="enterEditMode('${groupId}')">Bewerken</button>`;
  }

  if (!silent) showToast("Wijzigingen geannuleerd", "neutral");
}

function saveGroup(groupId) {
  const box    = document.getElementById(`group-${groupId}`);
  const fields = groupFields[groupId] || [];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("readonly", "");
    el.classList.remove("editable");
  });

  delete editState[groupId];
  if (box) box.classList.remove("editing");

  const actionsDiv = document.getElementById(`actions-${groupId}`);
  if (actionsDiv) {
    actionsDiv.innerHTML = `<button class="edit-btn" onclick="enterEditMode('${groupId}')">Bewerken</button>`;
  }

  showToast("Wijzigingen opgeslagen");
}

// ── Workflow actie ────────────────────────────────────────────────────────────

function workflowAction(type) {
  const article = articles.find(a => a.code === activeCode);
  if (!article) return;

  if (type === "complete") {
    article.status = "Compleet";
    article.completeness = Math.max(article.completeness, 95);
    showToast("Artikel gemarkeerd als compleet");
  } else {
    showToast("Artikel ter review gestuurd", "neutral");
  }

  // Herrender statusvelden
  const badgeHtml = `<div class="status-badge ${statusTone(article.status)}">${article.status}</div>`;
  document.getElementById("field-status-wrap").innerHTML = badgeHtml;
  document.getElementById("wf-status-display").innerHTML = badgeHtml;

  const pct  = article.completeness;
  document.getElementById("completeness-pct").textContent = `${pct}%`;
  const fill = document.getElementById("completeness-fill");
  fill.style.width = `${pct}%`;
  fill.className   = `completeness-fill ${completenessColor(pct)}`;

  renderResults(searchInput.value.trim());
}

// ── Modal ─────────────────────────────────────────────────────────────────────

const modalTitles = {
  document: "Document toevoegen",
  upload:   "Bestand uploaden",
  supplier: "Leverancier toevoegen",
  customer: "Klantdocument toevoegen",
  media:    "Media toevoegen",
};

function openModal(type) {
  currentModalType = type;
  uploadSimulated  = false;

  document.getElementById("modal-title").textContent = modalTitles[type] || "Toevoegen";
  document.getElementById("drop-zone-inner").classList.remove("hidden");
  document.getElementById("drop-zone-success").classList.add("hidden");
  document.getElementById("modal-context").value  = "";
  document.getElementById("modal-version").value  = "";
  document.getElementById("modal-valid").value    = "";

  document.getElementById("modal-overlay").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  currentModalType = null;
  uploadSimulated  = false;
}

function saveModal() {
  const type    = document.getElementById("modal-type").value;
  const context = document.getElementById("modal-context").value || "—";
  const version = document.getElementById("modal-version").value || "v1.0";
  const valid   = document.getElementById("modal-valid").value    || "";

  const article = articles.find(a => a.code === activeCode);
  if (article) {
    article.documents.rows.push([type, context, version, "Nieuw", valid]);
    article.documents.uploads.push([
      type, "PDF upload", uploadSimulated ? "Preview beschikbaar" : "Geen preview",
    ]);
    article.pim.documentCount = article.documents.rows.length;

    fillTable("documents-table", article.documents.rows, "Nog geen documenten gekoppeld.", 5);
    fillUploadList(article.documents.uploads);
    document.getElementById("overview-docs").textContent = article.pim.documentCount;
  }

  closeModal();
  showToast("Document toegevoegd");
}

function simulateUpload() {
  uploadSimulated = true;
  const demos = ["specificatie_v1.pdf", "msds_2026.pdf", "coa_batch_2026.pdf", "technisch_datasheet.pdf"];
  const filename = demos[Math.floor(Math.random() * demos.length)];

  document.getElementById("drop-zone-inner").classList.add("hidden");
  document.getElementById("drop-zone-success").classList.remove("hidden");
  document.getElementById("drop-zone-filename").textContent = filename;
}

// Drag-and-drop op de drop-zone
const dropZone = document.getElementById("drop-zone");
dropZone.addEventListener("dragover",  e => { e.preventDefault(); dropZone.classList.add("drag-over"); });
dropZone.addEventListener("dragleave", ()  => dropZone.classList.remove("drag-over"));
dropZone.addEventListener("drop",      e  => { e.preventDefault(); dropZone.classList.remove("drag-over"); simulateUpload(); });

// Sluit modal via overlay-klik
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});

// ── Toast ─────────────────────────────────────────────────────────────────────

function showToast(message, type = "success") {
  const area  = document.getElementById("toast-area");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : type === "neutral" ? "→" : "✕"}</span>
    <span>${message}</span>
  `;
  area.appendChild(toast);

  // Animeer in
  requestAnimationFrame(() => toast.classList.add("visible"));

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ── Event listeners ───────────────────────────────────────────────────────────

adminSelect.addEventListener("change", () => {
  activeAdmin = adminSelect.value;
  activeCode  = null;
  setTheme(activeAdmin);
  searchInput.value = "";
  renderResults("");
});

searchInput.addEventListener("input", () => renderResults(searchInput.value));
clearButton.addEventListener("click", () => { searchInput.value = ""; renderResults(""); });

// ── Init ──────────────────────────────────────────────────────────────────────

setTheme(activeAdmin);
renderResults("");
