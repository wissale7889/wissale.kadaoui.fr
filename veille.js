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

// ── RÉSUMÉ HEBDOMADAIRE ─────────────────────────────
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

const weeklySummaries = [
  "Cette semaine, l'IA générative renforce les attaques de phishing avec des e-mails personnalisés et multilingues, rendant la détection plus difficile pour les équipes de sécurité. Pour ma veille technologique sur l'IA et la cybersécurité, je m'appuie principalement sur la chaîne YouTube Hugo Decrypt, qui offre des analyses claires et accessibles des dernières menaces. Ma méthode consiste à combiner ces vidéos avec des lectures complémentaires sur des sites comme ZDNet et les rapports de l'ENISA, en notant les tendances émergentes. Je teste ensuite des outils open-source pour une compréhension pratique, et je participe à des forums comme Reddit r/cybersecurity pour discuter des implications réelles. Cette approche me permet de rester à jour tout en préparant des présentations orales impactantes sur les évolutions de la cybersécurité, en intégrant des exemples concrets et des analyses critiques.",
  "Focus sur les deepfakes vocaux : les cybercriminels utilisent l'IA pour imiter les voix de dirigeants, facilitant les fraudes par téléphone ou visioconférence. Hugo Decrypt est ma source principale pour décrypter ces menaces complexes, avec des explications détaillées et des exemples concrets tirés de cas réels. Je complète cela par des expérimentations personnelles avec des outils d'IA éthique, comme des générateurs de voix open-source, pour comprendre les mécanismes sous-jacents et leurs limites. Dans ma veille, je scanne les flux RSS de sites spécialisés comme ThreatPost et Bleeping Computer, puis j'analyse les vulnérabilités via des plateformes comme CVE Details. Cette méthode interactive et approfondie m'aide à contextualiser les informations pour des exposés engageants lors d'orals, en préparant des démonstrations visuelles et des discussions sur les contre-mesures possibles.",
  "Les agents IA autonomes deviennent une cible privilégiée : les attaquants exploitent les vulnérabilités des prompts pour compromettre des systèmes d'IA internes. Grâce à Hugo Decrypt, je reste informé des dernières évolutions avec des vidéos pédagogiques qui vulgarisent les concepts techniques souvent complexes. Ma méthode de veille inclut la lecture quotidienne de rapports de recherche sur arXiv, la participation à des webinaires sur la sécurité des LLM, et l'utilisation d'outils comme Google Alerts pour suivre les mots-clés 'IA sécurité'. Je documente mes découvertes dans un journal personnel pour identifier les patterns récurrents, ce qui enrichit mes présentations orales avec des analyses structurées et des exemples pertinents, permettant de débattre des risques émergents de manière approfondie.",
  "Explosion des malwares polymorphiques générés par IA : ces logiciels changent constamment de forme, échappant aux antivirus traditionnels. Hugo Decrypt m'aide à vulgariser ces concepts techniques avec des démonstrations visuelles et des explications accessibles. Pour rester à jour, je consulte les bases de données de malwares comme MalwareBazaar, j'étudie les analyses post-mortem sur des blogs techniques spécialisés, et je teste des environnements virtuels pour reproduire les attaques. Ma veille est proactive : je m'intéresse aux contre-mesures émergentes comme les systèmes de détection basés sur l'IA elle-même. Cette approche complète me permet de préparer des résumés synthétiques adaptés à des exposés, en intégrant théorie et pratique pour des présentations convaincantes et pédagogiques.",
  "L'IA dans la cybersécurité défensive : nouveaux outils de détection des anomalies basés sur le machine learning pour anticiper les intrusions. Les vidéos d'Hugo Decrypt sont essentielles pour comprendre ces innovations, avec des explications accessibles et des comparaisons pratiques. Ma méthode combine théorie et pratique : je lis des papiers académiques sur IEEE Xplore, je suis les conférences comme Black Hat, et j'expérimente avec des frameworks open-source comme Scikit-learn pour des projets personnels. Je partage mes insights sur LinkedIn pour enrichir ma veille collaborative. Cela me permet d'illustrer des points clés lors d'orals avec des démonstrations concrètes et des comparaisons d'outils, en préparant des discussions techniques et stratégiques.",
  "Réglementation en cours : l'Union Européenne prépare des normes pour sécuriser les modèles d'IA, impactant les entreprises technologiques. Hugo Decrypt décrypte ces aspects réglementaires complexes avec des analyses juridiques simplifiées et des exemples concrets. Dans ma veille, je surveille les évolutions législatives via des sites comme Eur-Lex, je participe à des groupes de discussion sur la conformité RGPD, et j'analyse l'impact sur les pratiques de développement. Ma méthode est itérative : je reviens régulièrement sur les sujets pour voir les évolutions. Cette veille structurée m'aide à structurer mes notes pour des présentations convaincantes, en intégrant des perspectives légales et techniques pour des orals complets.",
  "Attaques par empoisonnement de données : les adversaires injectent des données malicieuses dans les jeux d'entraînement des IA pour les rendre biaisées ou dangereuses. Hugo Decrypt explique ces mécanismes subtils avec des exemples pratiques et des démonstrations. Pour ma veille, je me concentre sur les recherches en adversarial machine learning, en consultant des publications de Google AI et Microsoft Research. Je pratique cela en créant des datasets de test et en observant les comportements anormaux, tout en suivant les communautés sur GitHub pour les dernières défenses. Cette méthode empirique me permet de préparer des démonstrations percutantes pour des orals, en montrant les risques concrets et les stratégies de mitigation.",
  "IA et cybersécurité : le double tranchant – comment l'IA accélère à la fois les attaques et les défenses, créant une course aux armements technologique. Les analyses d'Hugo Decrypt équilibrent ces perspectives avec des vidéos équilibrées et nuancées. Je consacre du temps aux aspects offensifs (via des CTF et des challenges sur HackTheBox) et défensifs (en apprenant sur des plateformes comme Coursera). Je tiens un bilan hebdomadaire pour évaluer l'équilibre entre innovation et risque. Cette approche réfléchie enrichit mes présentations orales avec des récits engageants, en soulignant les enjeux éthiques et stratégiques pour des discussions profondes.",
  "Tendances 2026 : intégration de l'IA dans les SOC (centres d'opérations de sécurité) pour une réponse automatisée aux incidents. Hugo Decrypt couvre ces avancées avec des aperçus futuristes et des analyses techniques. Dans ma veille, je m'intéresse aux solutions commerciales comme celles de Splunk ou CrowdStrike, tout en explorant les alternatives open-source. Ma méthode inclut des démonstrations pratiques et des comparaisons de performances pour comprendre les avantages réels. Cela me permet d'enrichir mes orals avec des exemples concrets d'intégration technologique, en préparant des scénarios d'usage réalistes et des recommandations.",
  "Risques émergents : l'IA générative facilite la création de faux sites web et documents officiels, augmentant les risques de phishing sophistiqué. Grâce à Hugo Decrypt, je comprends ces menaces avec des explications détaillées et des cas d'étude. Je teste des outils de génération comme DALL-E ou Midjourney pour comprendre les limites, et je consulte des rapports d'incidents sur des sites comme Phishing.org. Ma veille est orientée vers la prévention : je développe des checklists pour identifier les contenus synthétiques. Cette méthode proactive m'aide à préparer des présentations pédagogiques, en intégrant des outils de détection et des stratégies de sensibilisation pour des orals informatifs.",
  "Sécurité des LLM : les grands modèles de langage sont vulnérables aux jailbreaks, permettant aux attaquants d'exploiter des capacités cachées. Hugo Decrypt vulgarise ces vulnérabilités avec des démonstrations pratiques et des explications claires. Ma méthode consiste à expérimenter avec des prompts sur des plateformes comme Hugging Face, à analyser les vulnérabilités documentées, et à suivre les patches de sécurité. Je participe à des communautés en ligne pour discuter des meilleures pratiques de sécurisation. Cela enrichit mes orals avec des exemples concrets de failles et de remédiations, en préparant des discussions techniques approfondies et interactives.",
  "IA éthique : débat sur l'utilisation de l'IA dans la cybersécurité, entre efficacité et risques de surveillance de masse. Les vidéos d'Hugo Decrypt soulèvent ces questions avec des analyses nuancées et des perspectives multiples. Je lis des ouvrages sur l'éthique numérique, je suis les débats sur des forums comme EFF, et j'analyse les implications sociétales. Ma méthode est réfléchie : je pose des questions critiques sur chaque nouvelle technologie. Cette veille éthique me permet de préparer des présentations orales profondes, en intégrant des perspectives philosophiques et des exemples de dilemmes réels pour des débats enrichissants.",
  "Évolution des menaces : les ransomware pilotés par IA s'adaptent en temps réel aux défenses des victimes, rendant les négociations plus complexes. Hugo Decrypt détaille ces stratégies avec des cas d'étude détaillés et des analyses. Pour ma veille, je suis les analyses de groupes comme Conti ou LockBit via des rapports de Chainalysis, et je simule des scénarios avec des outils de virtualisation. Je m'intéresse aux aspects psychologiques des négociations. Cette approche holistique enrichit mes orals avec des récits captivants, en combinant analyse technique et compréhension humaine pour des présentations complètes.",
  "Formation et sensibilisation : l'IA aide à simuler des attaques pour entraîner les équipes, mais nécessite une mise à jour constante des scénarios. Hugo Decrypt inspire mes modules avec des idées pratiques et des exemples concrets. Ma méthode inclut la création de modules de formation personnels, l'utilisation de plateformes comme TryHackMe, et le partage de connaissances avec mes pairs. Je mesure l'efficacité de mes apprentissages. Cela me permet de préparer des présentations pédagogiques efficaces, en intégrant des outils d'enseignement et des métriques d'impact pour des orals engageants.",
  "Futur proche : prédiction des attaques grâce à l'IA, utilisant des données historiques pour anticiper les vulnérabilités potentielles. Les insights d'Hugo Decrypt sont précieux pour ces projections, avec des analyses prospectives. Je explore les techniques de predictive analytics, en consultant des études de cas et en expérimentant avec des datasets publics. Ma méthode est prospective : je pense aux implications à long terme. Cette veille stratégique enrichit mes orals avec des scénarios futuristes, en préparant des discussions sur les tendances émergentes et les stratégies d'adaptation.",
  "Collaboration internationale : partage de données sur les menaces IA entre agences de cybersécurité pour une réponse globale. Hugo Decrypt met en lumière ces initiatives avec des exemples mondiaux et des analyses. Je suis les initiatives comme le FS-ISAC, je participe à des échanges virtuels, et j'analyse les rapports annuels. Ma veille est collaborative : je contribue à des communautés ouvertes. Cela me permet de préparer des présentations orales sur la coopération internationale, en intégrant des études de cas et des perspectives globales pour des exposés convaincants.",
  "Impact sur l'emploi : l'IA transforme les rôles en cybersécurité, créant de nouveaux postes en analyse de données et en ingénierie de prompts. Hugo Decrypt analyse ces changements avec des données actuelles et des projections. Dans ma veille professionnelle, je consulte des études de marché sur LinkedIn, je suis les offres d'emploi, et je développe des compétences transversales. Je m'adapte en apprenant continuellement. Cette approche professionnelle enrichit mes orals avec des analyses de carrière, en préparant des conseils pratiques pour l'avenir et des discussions sur l'évolution du métier.",
  "Défis techniques : sécurisation des API d'IA contre les injections de prompts malveillants, une vulnérabilité croissante. Hugo Decrypt explique ces défis avec des exemples techniques détaillés. Ma méthode pratique : je teste des API comme OpenAI ou Anthropic, j'identifie les failles communes, et je propose des solutions comme la validation des inputs. Je documente mes tests pour référence future. Cela me permet de préparer des démonstrations techniques pour des orals, en montrant des vulnérabilités et des correctifs avec des exemples pratiques.",
  "Innovations défensives : utilisation de l'IA pour détecter les deepfakes et les contenus générés artificiellement. Les vidéos d'Hugo Decrypt sont instructives avec des démonstrations et des comparaisons. Je compare des outils comme Microsoft's Video Authenticator, je lis des recherches sur la détection, et j'expérimente avec des bibliothèques Python. Ma méthode est empirique : je valide les outils sur des cas réels. Cela enrichit mes orals pratiques avec des tests et des analyses, en préparant des présentations sur les technologies de détection.",
  "Perspectives 2027 : l'IA pourrait devenir le principal outil offensif et défensif en cybersécurité, redéfinissant le paysage des menaces. Hugo Decrypt offre une vision d'ensemble avec des prédictions et des analyses. Je lis des rapports de Gartner et Forrester, je participe à des panels d'experts, et je réfléchis aux scénarios futurs. Ma méthode est holistique : je considère les aspects technologiques, éthiques et économiques. Cette veille prospective enrichit mes présentations orales stratégiques, en intégrant des analyses complètes et des recommandations pour des discussions approfondies."
];

const currentWeek = getWeekNumber(new Date());
const summaryIndex = (currentWeek - 1) % weeklySummaries.length;
document.getElementById('weekly-summary').textContent = weeklySummaries[summaryIndex];
