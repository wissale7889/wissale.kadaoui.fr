const ARTICLES = [
  {
    title: "ANSSI : synthèse officielle sur l'IA générative face aux cyberattaques (CERTFR-2026-CTI-001)",
    summary: "En février 2026, l'ANSSI publie une note de synthèse de 12 pages sur les menaces liées à l'IA générative. L'agence documente l'usage croissant de la GenAI par les attaquants pour le profilage de victimes, la création de contenus d'hameçonnage multilingues et le développement de malwares polymorphiques. L'ANSSI souligne également que les systèmes d'IA sont eux-mêmes des cibles, notamment via l'empoisonnement de modèles à des fins de désinformation.",
    source: "ANSSI / CERT-FR",
    date: "février 2026",
    cat: "ia",
    url: "https://cyber.gouv.fr/actualites/synthese-de-la-menace-sur-lia-generative-face-aux-attaques-informatiques/"
  },
  {
    title: "FraudGPT : comment les cybercriminels s'emparent de l'IA générative",
    summary: "FraudGPT, disponible sur le dark web à partir de 200 $ par mois, permet à n'importe qui de générer des malwares sur mesure et des e-mails de phishing ultra-crédibles sans aucune compétence technique. ActuIA détaille comment ces outils abaissent la barrière d'entrée à la cybercriminalité, entraînant une explosion de 347 % des attaques de phishing générées par IA. Des variantes de WormGPT, fermé en 2023, continuent d'apparaître en s'appuyant sur des modèles open-source.",
    source: "ActuIA",
    date: "2025",
    cat: "ia",
    url: "https://www.actuia.com/actualite/fraudgpt-comment-les-cybercriminels-semparent-de-lia-generative/"
  },
  {
    title: "IA générative : 6 cyberattaques invisibles qui ciblent vos équipes en 2026",
    summary: "i-lead Consulting recense six nouvelles formes d'attaques rendues possibles par l'IA générative : spear-phishing ultraciblé généré en masse, ingénierie sociale via chatbots IA, clonage vocal de dirigeants, compromission d'agents IA internes, malwares auto-réécrits et manipulation de systèmes RAG. Un phishing assisté par IA est 4,5 fois plus efficace qu'un phishing classique, selon Microsoft, et peut être produit à 10 000 exemplaires personnalisés en quelques heures.",
    source: "i-lead Consulting",
    date: "2026",
    cat: "ia",
    url: "https://www.i-leadconsulting.com/ia-generative-cybersecurite-nouvelles-attaques-2026/"
  },
  {
    title: "Deepfakes et IA : les grandes menaces qui marqueront l'année 2026",
    summary: "ICT Journal analyse la montée en puissance des deepfakes en temps réel, notamment depuis l'arrivée de Sora 2, capables d'imiter la voix ou l'apparence d'un dirigeant de manière quasiment indétectable. La fraude au faux président évolue : un simple clone vocal suffit à convaincre un collaborateur de valider un virement. En 2023 déjà, une entreprise britannique avait perdu plus de 200 000 € suite à un appel d'un PDG cloné par IA, des incidents qui se multiplient depuis.",
    source: "ICT Journal",
    date: "décembre 2025",
    cat: "attaque",
    url: "https://www.ictjournal.ch/etudes/2025-12-15/deepfakes-et-ia-marqueront-lannee-2026"
  },
  {
    title: "Cybersécurité 2026 : le basculement vers les agents IA autonomes",
    summary: "Siècle Digital dresse un panorama des risques liés aux agents IA autonomes en 2026. Gartner prédit que 40 % des applications d'entreprise intégreront des agents IA d'ici fin 2026, contre moins de 5 % en 2025. Les attaquants ne ciblent plus seulement les humains : un agent compromis par prompt injection peut silencieusement exfiltrer des données, supprimer des sauvegardes ou initier des virements frauduleux en se faisant passer pour un processus interne de confiance.",
    source: "Siècle Digital",
    date: "décembre 2025",
    cat: "attaque",
    url: "https://siecledigital.fr/2025/12/30/cybersecurite-et-ia-ce-qui-attend-vraiment-les-entreprises-en-2026/"
  },
  {
    title: "Panorama cybermenace ANSSI 2025 : l'IA au cœur des nouvelles tactiques offensives",
    summary: "Digitemis analyse le panorama de la cybermenace publié par l'ANSSI pour 2025. Le rapport pointe la généralisation de l'IA dans les phases de reconnaissance, de compromission et d'exfiltration. L'ANSSI note que si aucune attaque entièrement autonome n'a encore été documentée sur des acteurs français, les attaquants intègrent systématiquement des briques d'IA générative pour accélérer et personnaliser chaque étape de leurs intrusions.",
    source: "Digitemis / ANSSI",
    date: "2025",
    cat: "attaque",
    url: "https://www.digitemis.com/panorama-cybermenace-anssi-bilan-menace-france/"
  },
  {
    title: "Comment l'IA adaptative devient le bouclier contre l'IA pirate",
    summary: "HETIC analyse comment les équipes de sécurité ripostent à l'IA offensive par l'IA défensive : détection comportementale en temps réel, analyse sémantique des e-mails entrants, et réponse automatique aux incidents. Les solutions intégrant du machine learning parviennent à détecter des variants de malwares jamais vus auparavant, là où les antivirus à signatures échouent. La clé réside dans des modèles entraînés en continu sur les nouvelles menaces.",
    source: "HETIC",
    date: "2025",
    cat: "defense",
    url: "https://www.hetic.net/actualites/phishing-deepfakes-malware-comment-lia-adaptative-devient-le-bouclier-contre-lia-pirate"
  },
  {
    title: "ANSSI : recommandations officielles pour sécuriser les systèmes d'IA en entreprise",
    summary: "L'Usine Digitale relaie les recommandations de l'ANSSI pour sécuriser les systèmes d'IA déployés en entreprise : sécurité by design dès la conception, isolation des modèles sensibles, surveillance des entrées/sorties contre les injections de prompt, et tests de robustesse réguliers. L'agence insiste sur la nécessité d'un inventaire précis de tous les composants IA utilisés et d'une évaluation continue des risques liés à leur mise à jour.",
    source: "Usine Digitale / ANSSI",
    date: "2025",
    cat: "defense",
    url: "https://www.usine-digitale.fr/article/cybersecurite-l-anssi-fournit-plusieurs-recommandations-pour-securiser-les-systemes-d-ia.N2227231"
  },
  {
    title: "Rapport Darktrace 2026 : 77 % des organisations utilisent l'IA dans leur cyberdéfense",
    summary: "IT for Business analyse le rapport annuel de Darktrace : 77 % des organisations utilisent désormais l'IA générative dans leur stack de cybersécurité, et 67 % ont adopté l'IA agentique. Ces outils permettent de trier automatiquement les milliers d'alertes quotidiennes, de réduire drastiquement les faux positifs et de produire des rapports d'investigation synthétiques. Microsoft Sentinel, Splunk SOAR et Cortex XSIAM illustrent cette mutation vers des SOC hybrides homme-machine.",
    source: "IT for Business / Darktrace",
    date: "2026",
    cat: "defense",
    url: "https://www.itforbusiness.fr/la-cybersecurite-a-ere-de-ia-en-2026-enfin-des-chiffres-interessants-rapport-darktrace-100081"
  },
  {
    title: "Les 4 grandes tendances cybersécurité IA à suivre en 2026",
    summary: "Le Blog du Modérateur synthétise les quatre axes majeurs qui structurent la cybersécurité en 2026 : montée des attaques pilotées par agents IA autonomes, explosion des deepfakes dans l'ingénierie sociale, généralisation de l'IA dans les SOC, et durcissement réglementaire avec l'AI Act européen et NIS2. Pour les experts, 2026 marque le passage d'une IA expérimentale à une IA opérationnelle des deux côtés du front.",
    source: "Blog du Modérateur",
    date: "2026",
    cat: "outil",
    url: "https://www.blogdumoderateur.com/cybersecurite-tendances-2026/"
  }
];

let currentFilter = 'tous';

function catClass(cat) {
  return { ia: 'cat-ia', attaque: 'cat-attaque', defense: 'cat-defense', outil: 'cat-outil' }[cat] || 'cat-ia';
}

function catLabel(cat) {
  return { ia: 'IA offensive', attaque: 'Attaque', defense: 'Défense', outil: 'Outil' }[cat] || cat;
}

function renderArticles() {
  const grid = document.getElementById('veilleGrid');
  const list = currentFilter === 'tous' ? ARTICLES : ARTICLES.filter(a => a.cat === currentFilter);

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  if (!list.length) {
    const p = document.createElement('p');
    p.className = 'veille-empty';
    p.textContent = 'Aucun article dans cette catégorie.';
    grid.appendChild(p);
    return;
  }

  list.forEach(a => {
    const card = document.createElement('div');
    card.className = 'veille-auto-card';

    const top = document.createElement('div');
    top.className = 'veille-auto-card-top';

    const catTag = document.createElement('span');
    catTag.className = 'veille-cat-tag ' + catClass(a.cat);
    catTag.textContent = catLabel(a.cat);
    top.appendChild(catTag);

    const dateSpan = document.createElement('span');
    dateSpan.className = 'veille-article-date';
    dateSpan.textContent = a.date;
    top.appendChild(dateSpan);

    const source = document.createElement('span');
    source.className = 'veille-article-source';
    source.textContent = a.source;

    const title = document.createElement('h4');
    title.textContent = a.title;

    const summary = document.createElement('p');
    summary.textContent = a.summary;

    const footer = document.createElement('div');
    footer.className = 'veille-auto-card-footer';

    if (a.url) {
      try {
        const parsed = new URL(a.url);
        if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
          const link = document.createElement('a');
          link.className = 'veille-read-link';
          link.textContent = 'Lire la source →';
          link.href = a.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          footer.appendChild(link);
        }
      } catch (_) {
        footer.appendChild(document.createElement('span'));
      }
    } else {
      footer.appendChild(document.createElement('span'));
    }

    card.appendChild(top);
    card.appendChild(source);
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(footer);
    grid.appendChild(card);
  });
}

document.querySelectorAll('.veille-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.cat;
    document.querySelectorAll('.veille-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderArticles();
  });
});

renderArticles();
