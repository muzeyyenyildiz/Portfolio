import { RootContent } from "./types";

export const CONTENT: RootContent = {
    // İngilizce Veriler
    en: {
        // CV Verileri
        name: "Müzeyyen Yıldız",
        profession: "FRONTEND DEVELOPER",
        summary: "Combining 6 years of architectural experience with 3 years as a Frontend Developer, I bring a unique design perspective to web and mobile development. I specialize in React and React Native technologies, creating user-friendly solutions. My architectural background enhances my ability to blend aesthetics with functionality, while my commitment to continuous learning drives innovation in every project.",
        summary2: "I'm someone who loves stepping outside the box in my career! I've forged a strong interdisciplinary path by blending architecture and web development. I've successfully combined my solid 6 years of architectural experience with the innovative web development knowledge I've gained over the last 3 years.These two distinct worlds have given me a truly unique perspective. Now, I approach problems not just as a 'developer,' but also as an 'architect' who deeply understands system and structure. This allows me to keep the codebase clean and manageable while also establishing a robust application architecture from the ground up.At the heart of my expertise are React and React Native. I have a proven track record of taking complex designs and transforming them into interfaces that are both elegant and user-friendly. Thanks to the keen eye for detail and spatial relationship awareness I inherited from architecture, I can create truly exceptional user experiences where aesthetics and performance work perfectly in harmony.My focus is always clear: optimizing processes and consistently keeping the quality bar high in every digital product I deliver. In short, I don't just write code; I build structures in the digital world!",
        contact: {
            email: "mim.mzyn@gmail.com",
            github: "github.com/muzeyyenyildiz",
            linkedin: "linkedin.com/in/muzeyyenyildiz89/",
            location: "Gökçeada / Çanakkale, Turkey",
            phone: "+905426612075",
        },
        skills: [
            "HTML", "CSS-Sass", "JavaScript", "React.js", "Typescript", "Vite", "Next.js", "React Native",
            "React Hooks", "Redux", "React-router-dom", "React-hook-form", "React-query", "Tanstack Table",
            "Redux Tool Kit", "Bootstrap", "Tailwind", "NextUi", "Git", "Github", "Figma", "Postman", "Firebase"
        ],
        experience: [
            {
                title: "FRONTEND DEVELOPER / DogGO",
                time: "Feb. 2022 - Dec 2024",
                tasks: [
                    "Contributed significantly to the front-end development of the company's website, admin, and HR panels, delivering robust digital solutions as a core team member.",
                    "Provided active support to cross-platform development for the Owner and Walker mobile apps (React Native), implementing features, updating views, and resolving bugs.",
                    "Actively participated in code review processes (PRs), offering constructive feedback to peers to ensure high code quality, consistency, and adherence to best practices.",
                    "Executed major technical modernizations, including the successful migration from Class Components to the Hooks API and completing essential React version updates.",
                    "Enhanced code reliability and maintainability by completing the TypeScript migration for key web applications.",
                    "Developed performant solutions using Next.js, expertly implementing and optimizing both Server-Side and Client-Side Rendering techniques.",
                    "Collaborated closely with design teams to enhance UX/UI, strategically introducing new features (forms, tables, pages) for improved system functionality.",
                    "Built solutions using a modern stack: Next.js, React, and Tailwind CSS, adhering to a component-based architecture within a Monorepo structure.",
                    "Utilized GitHub for effective version control and systematically resolved bugs across all platforms to maintain software reliability."
                ],
                website: 'https://www.doggoapp.com/',
                technologies: ["ReactJs", "React Native", "Next.js", "TypeScript", "Redux", "Vite", "Tailwind", "Bootstrap", "NextUI", "React Hooks", "React Query", "Tanstack Table"]
            },
            {
                title: "FREELANCER - CSS DEVELOPER / Exodus",
                time: "2021",
                tasks: ["Created Exodus Detail Websites using Bootstrap, HTML5, and CSS3."],
                technologies: ["HTML5", "CSS3", "Bootstrap"]
            }
        ],
        projects: [
            {
                name: "GITHUB SEARCH APP",
                description: "Built using React.js, React Hooks, Redux, Redux-toolkit, React Bootstrap, Fetch, React-router-dom, Font-awesome, and Goggle-font.",
                link: "github_search_app",
                vercel: 'https://github-search-app-nine-black.vercel.app/',
                technologies: ["React.js", "Redux", "React Bootstrap", "Redux-toolkit"]
            },
            {
                name: "BUDGET MANAGER",
                description: "Next.js, React.js, Tailwind, Typescript, React Hooks,date-fns, highcharts  kullanılarak oluşturuldu.",
                link: "BudgetManager",
                vercel: 'https://budget-manager-dun.vercel.app/',
                technologies: ['Next.js', "React.js", 'Tailwind', 'TypeScript']
            },
            {
                name: "RESTAURANT MOBILE APP",
                description: "Built using React Native, React Navigation, Expo/vector-icons, Axios, and Yelp API.",
                link: "RestaurantApp-ReactNative",
                vercel: '',
                technologies: ["React Native", "Axios", "Expo/vector-icons"]
            },
            {
                name: "REACT SEARCH APP",
                description: "Built using React, React Router, React Icon, React Pagination, Vanilla CSS, Lodash, and Sorting.",
                link: "react-search-app",
                vercel: 'https://react-search-app-six.vercel.app/',
                technologies: ["React", "React Router", "Lodash"]
            },
            {
                name: "TODO APP",
                description: "Built using Vanilla Javascript, Vanilla CSS, and Local Storage (HTML5).",
                link: "TodoAppByVanillaJS",
                vercel: 'https://todo-app-by-vanilla-js.vercel.app/',
                technologies: ["Vanilla JS", "HTML5", "Local Storage"]
            }
        ],
        education: [
            { degree: "Bachelor of Architecture", school: "Yıldız Technical University | 2008-2013" },
            { degree: "Erasmus | 2012-2013", school: "Sint Lucas Architectuur Hogeschool Voor Wetenschap, Brussels / Belgium" }
        ],

        // Arayüz Metinleri
        ui: {
            nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
            buttons: { linkedin: "LinkedIn", github: "GitHub", graduated: "Graduated", viewOnGithub: "View on GitHub", viewOnWebsite: 'View on Website', sendMessage: "Send Message" },
            titles: {
                about: "About Me", education: "Education", skills: "Technical Skills", experience: "Work Experience",
                projects: "Projects", contact: "Get In Touch", technologiesUsed: "Technologies Used:",
                contactFormTitle: "Send a Message", email: "Email", name: "Name", message: "Message",
                enterName: "Enter your name", enterEmail: "Enter your email", writeMessage: "Write your message"
            },
            footer: "Frontend Developer Portfolio",
            locationText: "Location:",
        }
    },

    // Türkçe Veriler
    tr: {
        // CV Verileri
        name: "Müzeyyen Yıldız",
        profession: "ÖN YÜZ GELİŞTİRİCİ",
        summary: "6 yıllık mimarlık deneyimini 3 yıllık Frontend Geliştirici tecrübesiyle birleştirerek, web ve mobil geliştirmeye benzersiz bir tasarım bakış açısı getiriyorum. React ve React Native teknolojilerinde uzmanlaşarak kullanıcı dostu çözümler üretiyorum. Mimarlık geçmişim, estetiği işlevsellikle harmanlama yeteneğimi artırırken, sürekli öğrenme taahhüdüm her projede inovasyonu teşvik ediyor.",
        summary2: "Ben, kariyerinde alışılmışın dışına çıkmayı seven biriyim! Mimarlık ve web geliştirmeyi harmanlayarak kendime güçlü bir disiplinler arası yol çizdim. Tam 6 yıllık mimarlık tecrübemi, son 3 yılda edindiğim o yenilikçi web geliştirme birikimiyle birleştirdim. Bu iki farklı dünya, bana gerçekten benzersiz bir bakış açısı kazandırdı. Artık sorunlara sadece bir 'geliştirici' gibi değil, aynı zamanda sistemi ve yapıyı çok iyi anlayan bir 'mimar' gibi yaklaşıyorum. Bu sayede hem kod tabanını tertemiz ve yönetilebilir tutabiliyor, hem de uygulamanın mimarisini en baştan sağlam kurabiliyorum. Uzmanlığımın kalbinde ise React ve React Native var. Karmaşık bir tasarımı alıp, onu hem göz yormayan hem de kullanıcı dostu bir arayüze dönüştürme konusunda sağlam bir geçmişim var. Mimarlıktan gelen o detay takıntım ve mekan/ilişki algım sağ olsun, estetik ve performansın el ele yürüdüğü, gerçekten fark yaratan kullanıcı deneyimleri yaratabiliyorum. Odak noktam her zaman belli: Süreçleri akıcı hale getirmek ve teslim ettiğim her dijital üründe kalite çıtasını sürekli yüksekte tutmak. Özetle, ben sadece kod yazmıyorum; dijital dünyada yapılar inşa ediyorum!",
        contact: {
            email: "mim.mzyn@gmail.com",
            github: "github.com/muzeyyenyildiz",
            linkedin: "linkedin.com/in/muzeyyenyildiz89/",
            location: "Gökçeada / Çanakkale, Türkiye",
            phone: "+90 542 661 20 75",
        },
        skills: [
            "HTML", "CSS-Sass", "JavaScript", "React.js", "Typescript", "Vite", "Next.js", "React Native",
            "React Hooks", "Redux", "React-router-dom", "React-hook-form", "React-query", "Tanstack Table",
            "Redux Tool Kit", "Bootstrap", "Tailwind", "NextUi", "Git", "Github", "Figma", "Postman", "Firebase"
        ],
        experience: [
            {
                title: "FRONTEND DEVELOPER / DogGO",
                time: "Şub. 2022 - Ara. 2024",
                tasks: [
                    "Bir yazılım ekibinin parçası olarak, şirketin web sitesi, yönetici ve İK panellerinin ön yüz geliştirmelerine önemli katkılar sağladım.",
                    "Owner ve Walker mobil uygulamalarının (React Native) platformlar arası geliştirmesini destekledim; yeni özellikler, sayfa güncellemeleri ve hata çözümleri yaptım.",
                    "Kod inceleme (PR) süreçlerine aktif olarak katıldım, ekip arkadaşlarıma yapıcı geri bildirimler sunarak kod kalitesinin ve standartların korunmasına katkıda bulundum.",
                    "Önemli teknik modernizasyon süreçlerini yürüttüm; Class Component'leri Hook API'ye taşıdım ve gerekli React versiyon güncellemelerini tamamladım.",
                    "Ana web uygulamalarında JavaScript'ten TypeScript'e dönüşümü gerçekleştirerek kod güvenliğini ve sürdürülebilirliğini artırdım.",
                    "Next.js kullanarak yüksek performanslı uygulamalar geliştirdim ve hem Sunucu Taraflı (SSR) hem de İstemci Taraflı (CSR) Rendering tekniklerini uygulayıp optimize ettim.",
                    "Kullanıcı deneyimini (UX/UI) iyileştirmek amacıyla tasarım ekipleriyle yakın çalışarak stratejik olarak yeni özellikler ekledim.",
                    "Next.js, React ve Tailwind CSS kullanarak bileşen tabanlı mimariye sahip çözümler geliştirdim ve projeleri Monorepo yapısı içinde yönettim.",
                    "GitHub ile etkili sürüm kontrolü sağladım ve tüm platformlarda yazılım güvenilirliğini sürdürmek için sistematik olarak hataları çözdüm."
                ],
                website: 'https://www.doggoapp.com/',
                technologies: ["ReactJs", "React Native", "Next.js", "TypeScript", "Redux", "Vite", "Tailwind", "Bootstrap", "NextUI", "React Hooks", "React Query", "Tanstack Table"]
            },
            {
                title: "FREELANCER - CSS GELİŞTİRİCİ / Exodus",
                time: "2021",
                tasks: ["Exodus Detail Websites, Bootstrap, HTML5 ve CSS3 ile oluşturuldu."],
                technologies: ["HTML5", "CSS3", "Bootstrap"]
            }
        ],
        projects: [
            {
                name: "GITHUB SEARCH APP",
                description: "React.js, React Hooks, Redux, Redux-toolkit, React Bootstrap, Fetch, React-router-dom, Font-awesome, Goggle-font kullanılarak oluşturuldu.",
                link: "github_search_app",
                vercel: 'https://github-search-app-nine-black.vercel.app/',
                technologies: ["React.js", "Redux", "React Bootstrap", "Redux-toolkit"]
            },
            {
                name: "BUDGET MANAGER",
                description: "Next.js, React.js, Tailwind, Typescript, React Hooks,date-fns, highcharts  kullanılarak oluşturuldu.",
                link: "BudgetManager",
                vercel: 'https://budget-manager-dun.vercel.app/',
                technologies: ['Next.js', "React.js", 'Tailwind', 'TypeScript']
            },
            {
                name: "RESTAURANT MOBILE APP",
                description: "React Native, React Navigation, Expo/vector-icons, Axios, yelp Api kullanılarak oluşturuldu.",
                link: "RestaurantApp-ReactNative",
                vercel: '',
                technologies: ["React Native", "Axios", "Expo/vector-icons"]
            },
            {
                name: "REACT SEARCH APP",
                description: "React, React Router, React Icon, React Pagination, Vanilla CSS, Lodash, Sorting kullanılarak oluşturuldu.",
                link: "react-search-app",
                vercel: 'https://react-search-app-six.vercel.app/',
                technologies: ["React", "React Router", "Lodash"]
            },
            {
                name: "TODO APP",
                description: "Vanilla Javascript, Vanilla CSS, Local Storage (HTML5) kullanılarak oluşturuldu.",
                link: "TodoAppByVanillaJS",
                vercel: 'https://todo-app-by-vanilla-js.vercel.app/',
                technologies: ["Vanilla JS", "HTML5", "Local Storage"]
            }
        ],
        education: [
            { degree: "Mimarlık Lisansı", school: "Yıldız Teknik Üniversitesi | 2008-2013" },
            { degree: "Erasmus | 2012-2013", school: "Sint Lucas Architectuur Hogeschool Voor Wetenschap, Brüksel / Belçika" }
        ],

        // Arayüz Metinleri
        ui: {
            nav: { about: "Hakkımda", skills: "Beceriler", experience: "Deneyim", projects: "Projeler", contact: "İletişim" },
            buttons: { linkedin: "LinkedIn", github: "GitHub", graduated: "Mezun", viewOnGithub: "GitHub'da Gör", viewOnWebsite: 'Sitede Gör', sendMessage: "Mesajı Gönder" },
            titles: {
                about: "Hakkımda", education: "Eğitim", skills: "Teknik Beceriler", experience: "İş Deneyimi",
                projects: "Projeler", contact: "İletişim", technologiesUsed: "Kullanılan Teknolojiler:",
                contactFormTitle: "Bana Ulaşın", email: "E-posta", name: "Adınız", message: "Mesajınız",
                enterName: "Adınızı Giriniz", enterEmail: "E-posta Adresinizi Giriniz", writeMessage: "Mesajınızı Yazınız"
            },
            footer: "FRONTEND DEVELOPER Portfolyo",
            locationText: "Konum:",
        }
    }
};

