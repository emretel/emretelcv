// Language content
const translations = {
    tr: {
        name: "Emre TEL",
        contact: "emretelglobal@gmail.com | +90 544 518 1298 | İstanbul, Türkiye",
        summary: "Yeni teknolojilere meraklı ve sürekli gelişime açık bir bilgisayar mühendisliği son sınıf öğrencisi.",
        experienceTitle: "Deneyim",
        job1Title: "Tutor",
        job1Company: "Logiscool, İstanbul",
        job1Date: "2021 - 2023",
        job1Detail1: "6-18 yaş aralığındaki öğrencilere kodlama eğitimi vermek.",
        job1Detail2: "Öğrencilerle birlikte çeşitli oyunlar oluşturmak ve kodların altında yatan mantığı sorgulamak.",
        job1Detail3: "Öğrencilerin gelişimlerini analiz etmek ve not almak.",
        job2Title: "IEEE",
        job2Company: "Gönüllü, İstanbul",
        job2Date: "2020 - 2022",
        job2Detail1: "IEEE Bilgi Üniversitesi organizasyonlarından sorumlu başkan yardımcısı.",
        job2Detail2: "Konferanslar, atölyeler ve projeler düzenlemek için ekibi organize etmek.",
        job2Detail3: "Türkiye’de IEEE’yi tanıtmak amacıyla stantlar kurmak.",
        job2Detail4: "Sosyal etkileşimi güçlendirmek amacıyla mühendislik fakültesi öğrencileri arasında networking etkinlikler düzenlemek.",
        educationTitle: "Eğitim",
        educationDegree: "Bilgisayar Mühendisliği",
        educationInstitution: "İstanbul Bilgi Üniversitesi (ENG)",
        educationDate: "2020 - 2025",
        skillsTitle: "Yetenekler",
        skill1: "HTML, CSS, JavaScript",
        skill2: "Node.js, Express",
        skill3: "Java",
        interestsTitle: "İlgi Alanları",
        interests: "Web, Yapay Zeka, Yeni Teknolojiler"
    },
    en: {
        name: "Emre TEL",
        contact: "emretelglobal@gmail.com | +90 544 518 1298 | Istanbul, Turkey",
        summary: "A senior computer engineering student who is curious about new technologies and constantly open to development.",
        experienceTitle: "Experience",
        job1Title: "Tutor",
        job1Company: "Logiscool, Istanbul",
        job1Date: "2021 - 2023",
        job1Detail1: "Teaching coding to students aged 6-18.",
        job1Detail2: "Creating various games with students and discussing the underlying logic of the code.",
        job1Detail3: "Analyzing and recording students' progress.",
        job2Title: "IEEE",
        job2Company: "Volunteer, Istanbul",
        job2Date: "2020 - 2022",
        job2Detail1: "Vice president responsible for IEEE Bilgi University events.",
        job2Detail2: "Organizing the team to hold conferences, workshops, and projects.",
        job2Detail3: "Setting up booths to promote IEEE in Turkey.",
        job2Detail4: "Organizing networking events among engineering students to strengthen social interaction.",
        educationTitle: "Education",
        educationDegree: "Computer Engineering",
        educationInstitution: "Istanbul Bilgi University (ENG)",
        educationDate: "2020 - 2025",
        skillsTitle: "Skills",
        skill1: "HTML, CSS, JavaScript",
        skill2: "Node.js, Express",
        skill3: "Java",
        interestsTitle: "Interests",
        interests: "Web, Artificial Intelligence, New Technologies"
    }
};

// Function to change language
function changeLanguage(languages) {
    const elements = Object.keys(translations[languages]);

    elements.forEach(id => {
        document.getElementById(id).textContent = translations[languages][id];
    });
}

// Initial language setup
document.addEventListener("DOMContentLoaded", changeLanguage);
