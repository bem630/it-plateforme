import { FaCalendarAlt, FaGraduationCap, FaHome, FaInfoCircle } from "react-icons/fa";
import imag1 from '../assets/Banque_Islamique_de_Guinée.webp.png'
import imag2 from '../assets/bcrg.png'
import imag3 from '../assets/mtn.png'
import imag4 from '../assets/orange.jpg'
import imag5 from '../assets/nsia.png'
import imag6 from '../assets/vista.jpeg'
import imag7 from '../assets/tulip.png'
import imag8 from '../assets/Cellcom.jpg'
import url_to_photo from "../assets/person_1.jpg"

export const links = [
    {
        id: "1",
        cName: "nav-links",
        name: 'Accueil',
        path: '/',
        icon: <FaHome/>,
        
    },
    {
        id: "2",
        cName: "nav-links",
        name: 'Qui sommes-nous',
        path: 'about',
        icon: <FaInfoCircle/>,
    },
    {
        id: "3",
        cName: "nav-links",
        name: 'Formations',
        path: 'formation',
        icon: <FaGraduationCap/>,
    },
    {
        id: "4",
        cName: "nav-links",
        name: 'Evenements',
        path: 'evenement',
        icon: <FaCalendarAlt/>,
    },
    {
        id: "5",
        cName: "register-button",
        name: "S'inscrire",
        path: 'signUp',
    },
];

export const partenaire = [
    {
        id: "1",
        img: imag1,
    },
    {
        id: "2",
        img: imag2,
    },
    {
        id: "3",
        img: imag3,
    },
    {
        id: "4",
        img: imag4,
    },
    {
        id: "5",
        img: imag5,
    },
    {
        id: "6",
        img: imag6,
    },
    {
        id: "7",
        img: imag7,
    },
    {
        id: "8",
        img: imag8,
    },
];

export const testimonials = [
    {
        id: "1",
        name: 'Aissata Diallo',
        role: 'Développeuse Web',
        message: 'Les formations sont excellentes et m’ont aidée à évoluer dans ma carrière. Je recommande vivement !',
        rating: 5,
    },
    {
        id: "2",
        name: 'Mamoudou koulibaly',
        role: 'Designer Graphique',
        message: 'Une expérience très enrichissante. Les formateurs sont très professionnels et les cours sont bien structurés.',
        rating: 4,
    },
    {
        id: "3",
        name: 'Lamine Conde',
        role: 'Chef de Projet',
        message: 'J’ai appris énormément de choses et j’ai pu mettre en pratique tout ce que j’ai appris dans des projets concrets.',
        rating: 5,
    },
]

export const faqData = [
    {
        id: "1",
        question: "Quelle est la durée de chaque formation ?",
        answer: "La durée des formations varie de 3 à 6 mois en fonction du programme choisi."
    },
    {
        id: "2",
        question: "Quels sont les prérequis pour s'inscrire à une formation ?",
        answer: "Il n'y a pas de prérequis spécifiques, mais une connaissance de base en informatique est recommandée."
    },
    { 
        id: "3",
        question: "Comment puis-je m'inscrire à une formation ?", 
        answer: "Vous pouvez vous inscrire en cliquant sur le bouton 'S'inscrire' en haut de la page." 
    },
    { 
        id: "4",
        question: "Quels sont les modes de paiement acceptés ?", 
        answer: "Nous acceptons les paiements par carte de crédit, PayPal et virement bancaire." 
    },
    {
        id: "5",
        question: "Quels types de certification offrez-vous ?",
        answer: "Nous offrons des certifications reconnues par l'industrie pour chaque formation complétée."
    },
    {
        id: "6",
        question: "Puis-je suivre plusieurs formations en même temps ?",
        answer: "Oui, vous pouvez suivre plusieurs formations simultanément en fonction de votre emploi du temps."
    },
    // Ajoutez plus de questions et réponses ici
];

export const mentions = [
    {
        id: "1",
        title: "Données personnelles",
        content: "Les données personnelles collectées par Alsacréations via le formulaire de contact sont uniquement destinées à un usage interne. En aucun cas ces données ne seront cédées, communiquées ou vendues à des tiers. Votre adresse e-mail ne sera ni stockée dans une base de données ni réutilisée (sauf pour répondre à une demande de contact e-mail).",
    },
    {
        id: "2",
        title: "Cookies",
        content: "Les cookies sont des petits fichiers texte que votre navigateur reçoit de notre serveur pour y stocker vos préférences. EspaceDevCréations.com n'utilise aucun cookie sur ce site.",
    },
    {
        id: "3",
        title: "Liens",
        content: "Les sites reliés directement ou indirectement au site EspaceDevCréations.com, ne sont pas sous notre contrôle. En conséquence, EspaceDevCréations n'assume aucune responsabilité quant aux informations publiées sur ces sites. Les liens avec des sites extérieurs ne sont fournis qu'à titre de commodité et n'impliquent aucune caution quant à leur contenu.",
    },
    {
        id: "4",
        title: "Contenus et outils",
        content: "EspaceDevCréations ne propose aucune garantie quant à la fiabilité ou au fonctionnement de ce service. EspaceDevCréations ne peut en aucun cas être tenu pour responsable de tous dommages quels qu'ils soient, y compris mais non de façon limitative, des dommages directs, indirects, accessoires ou incidents, des pertes de bénéfices ou de l'interruption d'activité, résultant de l'utilisation ou de l'impossibilité d'utilisation de ce service.",
    },
    {
        id: "5",
        title: "Crédits et Reproduction ",
        content: "Le contenu de ce site est soumis au droit d'auteur et il est interdit de reproduire, représenter, transférer, distribuer, ou d'enregistrer tout ou partie de ces éléments, sous quelque forme que ce soit, sans l'accord préalable et écrit d'EspaceDevCréations. Les images et illustrations utilisées sont réalisées par EspaceDevCréations ou achetées sur des banques d'images libres de droits.",
    },
];

export const conditions = [
    {
        id: "1",
        title: "Inscription",
        content: "Les formations peuvent être suivies par toute personne inscrite de sa propre initiative, à celle de son employeur ou à la faveur d'une prise en charge du coût de la formation par l'OPCO. Une demande d’inscription s’effectue en ligne via complétion du formulaire de contact, ou par prise de contact directe via e-mail ou par appel téléphonique. Les coordonnées de chaque participant(e), prénom, nom et adresse e-mail, sont demandées afin de pouvoir assurer le parcours de formation attendu. Une convention de formation est établie avant toute inscription à une session de formation, définissant les modalités administratives et les coordonnées de la personne participante ainsi que les dates d'exécution de la formation. Cette convention est rédigée à la faveur des échanges préalables par e-mail et/ou téléphone, et l'évaluation des prérequis de chaque personne afin d'adapter le programme et d'en vérifier l'adéquation.",
    },
    {
        id: "2",
        title: "Tarif et règlement",
        content: "Les tarifs exprimés en franc guinéen de chaque formation sont indiqués sur le présent site web ainsi qu'à chaque établissement de convention de formation. Des tarifs préférentiels peuvent être appliqués pour les inscriptions de groupes de personnes. Les tarifs sont susceptibles d'évolution, cependant le prix convenu lors de la rédaction de la convention de formation sera toujours effectif jusqu'à la fin de l'action de formation. ",
        description: "EspaceDevCréations considère que le client est responsable du paiement de la formation du ou des stagiaires inscrits quel que soit le financement utilisé (paiement en direct ou par un virement bancaire). L'entreprise signataire s'engage à verser à l'organisme EspaceDevCréations, en contrepartie des actions de formation réalisées, une somme correspondant aux frais de formations. Les factures sont émises à l’issue de la formation et le règlement est dû au plus tard 30 jours calendaires après émission.",
    },
    {
        id: "3",
        title: "Contenu des formations",
        content: "Les actions de formation sont décrites individuellement sur chaque page de présentation du présent site : programme, prérequis, objectifs, moyens pédagogiques, dates proposées. Toute inscription à une session de formation implique une connaissance de ces informations et notamment du programme ainsi que des prérequis, afin d’y adhérer sans réserve.",
    },
    {
        id: "4",
        title: "Attestation de formation",
        content: "À l'issue de la session de formation et si la personne participant(e) a participé à l'intégralité du parcours proposé, une attestation de formation est remise mentionnant les dates de la session, l'intitulé de la formation et les coordonnées de la personne. Une telle attestation peut être délivrée soit physiquement en main propre, soit par voie postale, soit par voie dématérialisée (e-mail et lien de téléchargement) au format PDF.",
    },
    {
        id: "5",
        title: "Propriété intellectuelle",
        content: "Sauf autre mention explicite, les contenus et supports diffusés à l'occasion de la session de formation sont protégés par le droit d’auteur. Le client et/ou participant(e) s’interdit d’utiliser ces contenus à d'autres fins que son propre usage pédagogique. Toute reproduction, représentation, modification, publication, transmission totale ou partielle des supports sont interdites, suivant le code de la propriété intellectuelle.",
    },
];

export const utilisation = [
    {
        id: "1",
        title: "",
        content: "",
    },
    {
        id: "2",
        title: "",
        content: "",
    },
    {
        id: "3",
        title: "",
        content: "",
    },
    {
        id: "4",
        title: "",
        content: "",
    },
    {
        id: "5",
        title: "",
        content: "",
    },
];
  
export const faqsFormateur = [
    {
        id: "1",
        question: 'Quelles sont les prérequis nécessaires pour devenir un formateur chez nous ?',
        answer: "Il est nécessaire d'avoir une expérience professionnelle, de maîtriser votre domaine de compétence et d'avoir un esprit de partage des connaissances et du savoir-faire. "
    },
    {
        id: "2",
        question: 'Comment puis-je devenir formateur chez vous ?',
        answer: 'Vous pouvez postuler pour devenir formateur en remplissant le formulaire de candidature sur notre site web.'
    },
    {
        id: "3",
        question: 'Offrez-vous des cours en ligne ?',
        answer: 'Actuellement, nous offrons uniquement des cours en présentiel. Veuillez revenir plus tard pour les mises à jour sur les cours en ligne.'
    },
    {
        id: "4",
        question: 'Comment est calculée la rémunération des formateurs ?',
        answer: 'La rémunération est basée sur le nombre d’heures enseignées et l’évaluation des étudiants. Des détails supplémentaires sont fournis lors du processus de candidature.'
    },
    {
        id: "5",
        question: 'Quels sont les horaires de travail pour les formateurs ?',
        answer: 'Les horaires sont flexibles et peuvent être ajustés en fonction de vos disponibilités et des besoins des étudiants.'
    }
];

export const formateurs = [
{
    id: "1",
    name: 'John Doe',
    photo: url_to_photo,
    bio: 'John Doe est un professionnel expérimenté dans le développement commercial.',
    specialties: ['Business, Marketing']
},
{
    id: "2",
    name: 'Jane Smith',
    photo: url_to_photo,
    bio: 'Jane Smith est experte en science des données et apprentissage automatique.',
    specialties: ['Data Science, Machine Learning']
},
{
    id: "3",
    name: 'Alex Johnson',
    photo: url_to_photo,
    bio: 'Alex Johnson se spécialise dans le développement web et le design UI/UX.',
    specialties: ['Développement Web, Design UI/UX']
}
];