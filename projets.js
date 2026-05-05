const skills = {
  "VLAN": {
    icon: "🔀",
    desc: "Un VLAN (Virtual Local Area Network) permet de segmenter un réseau physique en plusieurs réseaux logiques isolés. Cela améliore la sécurité en cloisonnant les flux entre les services, et optimise les performances globales du réseau.",
    tags: ["Segmentation réseau", "Sécurité", "Switch manageable"]
  },
  "DHCP / DNS": {
    icon: "📡",
    desc: "Le DHCP attribue automatiquement des adresses IP aux machines d'un réseau. Le DNS traduit les noms de domaine (ex : google.com) en adresses IP. Ces deux services sont indispensables au bon fonctionnement d'une infrastructure.",
    tags: ["Attribution IP", "Résolution de noms", "Infrastructure réseau"]
  },
  "Routage statique & dynamique": {
    icon: "🗺️",
    desc: "Le routage détermine le chemin emprunté par les données dans un réseau. Le routage statique est configuré manuellement, tandis que le routage dynamique (OSPF, RIP) s'adapte automatiquement aux changements de topologie.",
    tags: ["Interconnexion réseau", "OSPF", "Tables de routage"]
  },
  "Pare-feu": {
    icon: "🛡️",
    desc: "Un pare-feu filtre le trafic réseau entrant et sortant selon des règles définies. Il constitue la première ligne de défense d'une infrastructure et protège les ressources internes contre les accès non autorisés.",
    tags: ["Filtrage de trafic", "Règles ACL", "Sécurité périmétrique"]
  },
  "pfSense": {
    icon: "🔥",
    desc: "pfSense est un pare-feu/routeur open source très utilisé en entreprise. Il offre des fonctionnalités avancées : gestion des VLANs, VPN, NAT, filtrage de contenu et supervision réseau via une interface web intuitive.",
    tags: ["Pare-feu open source", "Routeur", "VPN", "NAT"]
  },
  "VPN": {
    icon: "🔐",
    desc: "Un VPN (Virtual Private Network) crée un tunnel chiffré entre un utilisateur distant et le réseau interne d'une organisation. Il garantit la confidentialité des données transitant, notamment en contexte de télétravail.",
    tags: ["Chiffrement", "Accès distant", "Confidentialité"]
  },
  "DMZ": {
    icon: "🏰",
    desc: "Une DMZ (Zone Démilitarisée) est un sous-réseau isolé qui héberge les services accessibles depuis Internet tout en protégeant le réseau interne. En cas de compromission, l'attaquant reste confiné dans la DMZ.",
    tags: ["Isolation réseau", "Sécurité", "Services exposés"]
  },
  "Windows Server": {
    icon: "🪟",
    desc: "Windows Server est le système d'exploitation serveur de Microsoft. Il permet de gérer des services réseau (DNS, DHCP, Active Directory), de déployer des applications métier et d'administrer les postes clients d'un domaine.",
    tags: ["Administration système", "Services réseau", "Microsoft"]
  },
  "Active Directory": {
    icon: "🗂️",
    desc: "Active Directory est le service d'annuaire de Microsoft. Il centralise la gestion des utilisateurs, des groupes et des ordinateurs d'un domaine. Il permet d'appliquer des politiques (GPO) et de contrôler les accès aux ressources.",
    tags: ["Gestion des identités", "GPO", "Domaine Windows"]
  },
  "PowerShell": {
    icon: "⚙️",
    desc: "PowerShell est un langage de script et un shell développé par Microsoft. Il permet d'automatiser des tâches d'administration : gestion des utilisateurs AD, configuration des serveurs, déploiements en masse.",
    tags: ["Automatisation", "Administration Windows", "Scripting"]
  },
  "VMware": {
    icon: "💻",
    desc: "VMware est une solution de virtualisation qui permet de créer et gérer des machines virtuelles sur un serveur physique. Très utilisée en entreprise pour mutualiser les ressources matérielles et isoler les environnements.",
    tags: ["Virtualisation", "Machines virtuelles", "Infrastructure"]
  },
  "WireGuard": {
    icon: "🔑",
    desc: "WireGuard est un protocole VPN moderne, rapide et sécurisé. Il est reconnu pour sa simplicité de configuration et ses excellentes performances par rapport à OpenVPN, tout en offrant un chiffrement de haut niveau.",
    tags: ["VPN moderne", "Chiffrement", "Performance"]
  },
  "HTTPS / Certificats SSL": {
    icon: "🔒",
    desc: "HTTPS chiffre les communications entre un navigateur et un serveur web grâce à un certificat SSL/TLS. Il garantit l'authenticité du site et la confidentialité des données échangées — indispensable pour tout service exposé sur Internet.",
    tags: ["Chiffrement web", "Let's Encrypt", "TLS/SSL"]
  },
  "Gestion des droits": {
    icon: "👥",
    desc: "La gestion des droits consiste à définir précisément qui peut accéder à quoi dans un système. Elle repose sur le principe du moindre privilège : chaque utilisateur dispose uniquement des permissions nécessaires à son travail.",
    tags: ["Contrôle d'accès", "RBAC", "Moindre privilège"]
  },
  "Politique de sécurité": {
    icon: "📋",
    desc: "Une politique de sécurité définit les règles et bonnes pratiques pour protéger le système d'information. Elle couvre la gestion des mots de passe, les droits d'accès, les mises à jour, les sauvegardes et la réponse aux incidents.",
    tags: ["Bonnes pratiques", "Conformité", "Sécurité SI"]
  },
  "Power Apps": {
    icon: "⚡",
    desc: "Power Apps est la plateforme low-code de Microsoft qui permet de créer des applications métier sans développement lourd. Utilisée en alternance à la SNCF pour concevoir une app de gestion des demandes.",
    tags: ["Low-code", "Microsoft 365", "Applications métier"]
  },
  "Power Automate": {
    icon: "🔄",
    desc: "Power Automate permet d'automatiser des flux de travail entre applications Microsoft et services tiers. Utilisé pour déclencher des alertes automatiques et orchestrer les notifications dans le projet SNCF.",
    tags: ["Automatisation", "Flux de travail", "Microsoft 365"]
  },
  "SharePoint": {
    icon: "📁",
    desc: "SharePoint est la plateforme de collaboration et de stockage documentaire de Microsoft. Utilisée comme base de données pour l'application Power Apps, elle centralise les données et les rend accessibles à toute l'équipe.",
    tags: ["Collaboration", "Stockage", "Microsoft 365"]
  },
  "HTML / CSS": {
    icon: "🎨",
    desc: "HTML structure le contenu d'une page web, CSS en gère l'apparence visuelle. Ensemble, ils forment la base du développement web front-end. Utilisés pour concevoir ce portfolio avec un design responsive et des animations.",
    tags: ["Front-end", "Web", "Design responsive"]
  },
  "JavaScript": {
    icon: "✨",
    desc: "JavaScript est le langage de programmation du web côté client. Il permet d'ajouter de l'interactivité : animations, gestion d'événements, modales. Utilisé ici pour toutes les interactions dynamiques du portfolio.",
    tags: ["Interactivité", "Front-end", "Animations"]
  },
  "Documentation technique": {
    icon: "📝",
    desc: "La documentation technique consiste à rédiger des guides, procédures et notices clairs pour les équipes IT ou les utilisateurs. Une bonne doc facilite la maintenance, la montée en compétence et la continuité de service.",
    tags: ["Rédaction", "Procédures", "Support IT"]
  },
  "Support utilisateur": {
    icon: "🤝",
    desc: "Le support utilisateur consiste à assister les agents dans l'utilisation des outils informatiques, diagnostiquer des incidents et trouver des solutions. Pratiqué au Technicentre SNCF auprès des agents et techniciens.",
    tags: ["Support N1/N2", "Diagnostic", "Relation utilisateurs"]
  },
  "Développement low-code": {
    icon: "⚡",
    desc: "Le développement low-code permet de créer des applications fonctionnelles avec peu ou pas de code classique. Il accélère la mise en production et permet à des non-développeurs de contribuer à la création d'outils métier.",
    tags: ["Power Apps", "Productivité", "Applications métier"]
  },
  "Gestion des rôles utilisateurs": {
    icon: "👤",
    desc: "Définir des profils distincts dans une application (demandeur, administrateur, lecteur) pour contrôler les accès et les actions possibles selon le rôle de chaque utilisateur.",
    tags: ["RBAC", "Sécurité applicative", "UX"]
  },
  "Automatisation de flux": {
    icon: "🔄",
    desc: "L'automatisation de flux consiste à déclencher des actions automatiquement (envoi de mail, mise à jour de données, notifications) en réponse à des événements, sans intervention humaine.",
    tags: ["Power Automate", "Efficacité", "Workflow"]
  },
  "Segmentation réseau": {
    icon: "🔀",
    desc: "La segmentation réseau consiste à diviser un réseau en sous-réseaux isolés pour améliorer la sécurité, les performances et la gestion. Cela permet de limiter la propagation des attaques et d'optimiser le trafic.",
    tags: ["VLAN", "Sous-réseaux", "Isolation"]
  },
  "Pare-feu & filtrage": {
    icon: "🛡️",
    desc: "Le pare-feu et le filtrage de trafic consistent à analyser et contrôler les paquets réseau entrants et sortants selon des règles définies. Cela protège l'infrastructure contre les menaces externes et internes.",
    tags: ["ACL", "Sécurité", "Filtrage"]
  },
  "Administration système": {
    icon: "⚙️",
    desc: "L'administration système englobe la gestion et la maintenance des serveurs et systèmes d'exploitation. Cela inclut l'installation, la configuration, la surveillance et la résolution d'incidents pour assurer la disponibilité des services.",
    tags: ["Serveurs", "Maintenance", "Monitoring"]
  },
  "Gestion des accès": {
    icon: "🔑",
    desc: "La gestion des accès contrôle qui peut accéder à quelles ressources dans un système. Elle repose sur des principes comme le moindre privilège et l'authentification multi-facteurs pour sécuriser les données sensibles.",
    tags: ["RBAC", "Authentification", "Sécurité"]
  },
  "Conteneurisation": {
    icon: "📦",
    desc: "La conteneurisation permet d'emballer une application et ses dépendances dans un conteneur léger et portable. Cela facilite le déploiement, la scalabilité et l'isolation des applications sur différents environnements.",
    tags: ["Docker", "Isolation", "Déploiement"]
  },
  "Déploiement de services web": {
    icon: "🌐",
    desc: "Le déploiement de services web consiste à rendre une application accessible via Internet ou un réseau interne. Cela inclut la configuration des serveurs web, la gestion des certificats et l'optimisation des performances.",
    tags: ["Nginx", "Apache", "HTTPS"]
  },
  "Active Directory & GPO": {
    icon: "🗂️",
    desc: "Active Directory est l'annuaire de Microsoft pour gérer utilisateurs et ordinateurs. Les GPO (Group Policy Objects) appliquent des politiques de sécurité et de configuration à l'échelle du domaine.",
    tags: ["Annuaire", "Politiques", "Domaine"]
  },
  "Sécurisation réseau": {
    icon: "🔒",
    desc: "La sécurisation réseau englobe toutes les mesures pour protéger l'infrastructure contre les cyberattaques : chiffrement, segmentation, surveillance et réponse aux incidents.",
    tags: ["Chiffrement", "Monitoring", "Incident response"]
  }
};

const overlay  = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalClose');

function openModal(skillName) {
  const s = skills[skillName];
  if (!s) return;
  document.getElementById('modalIcon').textContent  = s.icon;
  document.getElementById('modalTitle').textContent = skillName;
  document.getElementById('modalDesc').textContent  = s.desc;
  const tagsEl = document.getElementById('modalTags');
  tagsEl.textContent = '';
  s.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'modal-tag';
    span.textContent = t;
    tagsEl.appendChild(span);
  });
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.competence-badge[data-skill]').forEach(b => {
  b.addEventListener('click', () => openModal(b.dataset.skill));
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
