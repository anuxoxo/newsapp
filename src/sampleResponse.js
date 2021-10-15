const articles = [
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Wired",
        "title": "The Biggest DDoS Attack in History Hit Russian Tech Giant Yandex",
        "description": "Plus: A TrickBot hacker arrest, a Fortinet VPN password leak, and more of the week's top security news.",
        "url": "https://www.wired.com/story/yandex-ddos-fortinet-passwords-security-news/",
        "urlToImage": "https://media.wired.com/photos/613bba4f6032ee5fbc7376b7/191:100/w_1280,c_limit/sec_ru_GettyImages-1234321763.jpg",
        "publishedAt": "2021-09-11T13:00:00Z",
        "content": "As the full implications of Texas's SB 8 abortion law come into view, internet infrastructure companies have become an unlikely focal point. Multiple hosting and domain registration providers have de… [+4369 chars]"
    },
    {
        "source": {
            "id": "buzzfeed",
            "name": "Buzzfeed"
        },
        "author": "[{\"@type\":\"Person\",\"name\":\"Mike Spohr\",\"url\":\"https://www.buzzfeed.com/mikespohr\",\"jobTitle\":\"BuzzFeed Staff\"}]",
        "title": "37 Mildly Vandalized Places That Are 100% Better For It",
        "description": "Technically wrong, but it feels so right.",
        "url": "https://www.buzzfeed.com/mikespohr/times-graffiti-made-the-world-better",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2021-09/10/17/enhanced/1edcb27dc2d3/original-493-1631296727-38.jpg?crop=1581:830;0,0%26downsize=1250:*",
        "publishedAt": "2021-09-11T11:52:24.2136732Z",
        "content": null
    },
    {
        "source": {
            "id": "axios",
            "name": "Axios"
        },
        "author": "Bryan Walsh",
        "title": "Why the 2020s will be the exponential decade",
        "description": "A trio of new books explore the ramifications of technological change — and how to control it",
        "url": "https://www.axios.com/2020s-exponential-age-big-technology-cf567e8c-7de5-43e0-bd8c-d2db19398a49.html",
        "urlToImage": "https://images.axios.com/s-gnwwnTLjXh_5Ysu4K-LG4Y7-k=/0x0:1920x1080/1366x768/2021/09/10/1631287615562.jpg",
        "publishedAt": "2021-09-11T10:59:11Z",
        "content": "Three new books take stock of the rapid technological change so far inthe 21st century and ask whether we can adapt to the even faster change to come.\r\nWhy it matters: The 2020s could be the roaring … [+4027 chars]"
    },
    {
        "source": {
            "id": "handelsblatt",
            "name": "Handelsblatt"
        },
        "author": "Handelsblatt",
        "title": "Meyer-Werft: Schiffbaukrise erhöht Druck auf einfachere Jobs weiter",
        "description": "Bei Kreuzfahrtschiffen und Offshore-Technik sind die großen deutschen Werften noch relativ gut im Geschäft, vieles andere machen billigere Anbieter aus Asien, warnt der Meyer-Chef.",
        "url": "https://www.handelsblatt.com/unternehmen/industrie/schiffbau-meyer-chef-schiffbaukrise-erhoeht-druck-auf-einfachere-jobs-weiter/27603642.html",
        "urlToImage": "https://www.handelsblatt.com/images/meyer-werft/27603684/4-format2003.jpg",
        "publishedAt": "2021-09-11T09:30:00+00:00",
        "content": "Papenburg/Berlin Die Geschäftsführung der Meyer-Werft sieht im kriselnden deutschen Schiffbau immer weniger Perspektiven für einfachere Jobs beim herrschenden Lohnniveau steige der internationale Wet… [+3069 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Connie Loizos",
        "title": "Tesla should say something",
        "description": "Last weekend, a reader wrote to this editor, politely asking why tech companies should speak up about the abortion law that Texas passed last week. “What does American Airlines have to do with abortion?” said the reader, suggesting that companies can’t possib…",
        "url": "https://techcrunch.com/2021/09/10/tesla-should-say-something/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/03/Austin.jpg?w=600",
        "publishedAt": "2021-09-11T05:37:56Z",
        "content": "Last weekend, a reader wrote to this editor, politely asking why tech companies should speak up about the abortion law that Texas passed last week.\r\nWhat does American Airlines have to do with aborti… [+4856 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": null,
        "title": "Judge opens Apple’s App Store to competition",
        "description": "Ruling in Epic Games case will allow developers in the US to bypass tech group’s in-app payment tool",
        "url": "https://www.ft.com/content/a306ca16-f200-4c95-be77-44673c6cc9a0",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fc1544014-89f0-4929-987d-3d837cb0e4e4.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2021-09-11T02:52:22.909577Z",
        "content": "The US judge presiding over Epic Games’ high-profile antitrust case against Apple declined to give either side a full victory.\r\nKate Adams, Apple’s chief counsel, called the verdict “a huge win”, poi… [+5714 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Alex Horton, Sarah Cahlan, Dalton Bennett, Joyce Lee, Meg Kelly, Elyse Samuels",
        "title": "Analysis of the U.S. drone strike’s aftermath in Kabul suggests no evidence the car contained explosives, experts say",
        "description": "The Washington Post provided imagery of the damage caused by the strike and U.S. military assessments of the operation to experts, including a physicist and former bomb technicians. Taken together, their assessments suggest there is no evidence the car contai…",
        "url": "https://www.washingtonpost.com/investigations/interactive/2021/kabul-drone-strike-questions/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DAJNHTQSMAI6ZOWKQ2YUJ7EKFU.jpg&w=1200",
        "publishedAt": "2021-09-10T23:50:22Z",
        "content": "When a Hellfire missile was launched on Aug. 29 at a target in a Kabul neighborhood a parked car suspected of containing explosives for use in a suicide attack U.S. military officials said they were … [+10896 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Greg Kumparak",
        "title": "Daily Crunch: Microsoft acquires tutoring platform TakeLessons for undisclosed sum",
        "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
        "url": "https://techcrunch.com/2021/09/10/daily-crunch-microsoft-acquires-tutoring-platform-takelessons-for-undisclosed-sum/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/sign-language-computer.jpg?w=600",
        "publishedAt": "2021-09-10T22:10:09Z",
        "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHi friends!\r\nWelcome back to the Daily Crunch it’s September 10, 2… [+6363 chars]"
    },
    {
        "source": {
            "id": "fortune",
            "name": "Fortune"
        },
        "author": "Declan Harty",
        "title": "Are we finally ready for smart glasses?",
        "description": "On Thursday, Mark Zuckerberg's Facebook revealed its own camera-enabled smart glasses, joining the ranks of tech giants that have tried to popularize computerized specs.",
        "url": "https://fortune.com/2021/09/10/facebook-smart-glasses-crypto-cult-twitter-bots/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2021/09/GettyImages-1233233561-e1631302993567.jpg?resize=1200,600",
        "publishedAt": "2021-09-10T20:45:03Z",
        "content": "Skip to Content"
    },
    {
        "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
        },
        "author": "Jon Brodkin",
        "title": "Texas law could force social media to host misinformation and hate speech",
        "description": "Big Tech ready to sue, says ban on social media \"censorship\" violates 1st Amendment.",
        "url": "https://arstechnica.com/tech-policy/2021/09/texas-bans-online-censorship-with-law-similar-to-one-already-blocked-in-florida/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/09/getty-texas-capitol-flag-760x380.jpg",
        "publishedAt": "2021-09-10T18:56:19+00:00",
        "content": "Enlarge/ US and Texas flags flying outside the Texas State Capitol building in Austin.\r\n395 with 190 posters participating\r\nTexas Governor Greg Abbott yesterday signed a ban on social media \"censorsh… [+5858 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Russell Brandom",
        "title": "Court issues permanent injunction in Epic v. Apple case",
        "description": "Epic Games had sued Apple over the mandatory transaction fees built into the iOS App Store, in a case that could reshape the basic rules of tech platforms.",
        "url": "https://www.theverge.com/2021/9/10/22662320/epic-apple-ruling-injunction-judge-court-app-store",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/A3W8qd3B3ujlB4JDGV7FElcz6F0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21783860/acastro_20200818_1777_epicApple_0004.0.jpg",
        "publishedAt": "2021-09-10T15:24:40Z",
        "content": "Filed under:\r\nA major win for Epic Games and Fortnite\r\nIllustration by Alex Castro / The Verge\r\nJudge Yvonne Gonzalez-Rogers issued a permanent injunction in the Epic v. Apple case on Friday morning,… [+1876 chars]"
    },
    {
        "source": {
            "id": "new-scientist",
            "name": "New Scientist"
        },
        "author": null,
        "title": "Almost no one encrypts their emails because it is too much of a hassle",
        "description": "A study looking at the use of encryption to keep the contents of an email private has found that the technology is rarely used, despite being available for decades",
        "url": "https://www.newscientist.com/article/2289747-almost-no-one-encrypts-their-emails-because-it-is-too-much-of-a-hassle/",
        "urlToImage": "https://images.newscientist.com/wp-content/uploads/2021/09/09142052/PRI_198585456.jpg",
        "publishedAt": "2021-09-10T00:00:00Z",
        "content": "By Chris Stokel-Walker\r\nWe have the technology to encrypt email, but we normally don’t bother\r\nJLStock/Shutterstock\r\nJust 0.06 per cent of emails are encrypted, according to an analysis of 81 million… [+361 chars]"
    },
    {
        "source": {
            "id": "les-echos",
            "name": "Les Echos"
        },
        "author": "Frédéric Schaeffer",
        "title": "Pourquoi Pékin serre la vis sur ses géants du numérique",
        "description": "La Chine a lancé une vaste campagne réglementaire ciblant les entreprises privées, notamment technologiques. Passage en revue des objectifs de Pékin",
        "url": "https://www.lesechos.fr/tech-medias/hightech/pourquoi-pekin-serre-la-vis-sur-ses-geants-du-numerique-1344772",
        "urlToImage": "https://media.lesechos.com/api/v1/images/view/613a0b388fe56f7da1087746/1280x720/0611678041399-web-tete.jpg",
        "publishedAt": "2021-09-09T13:24:14Z",
        "content": "Pas une journée ou presque ne se passe en Chine sans qu'une nouvelle réglementation tombe sur les entreprises privées, notamment dans le secteur tech. Encore mercredi, Pékin a laissé entendre que le … [+924 chars]"
    },
    {
        "source": {
            "id": "le-monde",
            "name": "Le Monde"
        },
        "author": "Anna Moreau et Elisa Bellanger",
        "title": "Vidéo. Bientôt des villes fournaises ? Pourquoi tout n’est pas perdu",
        "description": "Vidéo - Planter des arbres, repeindre les toits en blanc, arroser le goudron… Une simulateur de Météo-France permet d’évaluer les techniques pour limiter l’impact des canicules sur nos villes, où vivent près de huit Français sur dix.",
        "url": "https://www.lemonde.fr/climat/video/2021/08/22/bientot-des-villes-fournaises-pourquoi-tout-n-est-pas-perdu_6092048_1652612.html",
        "urlToImage": "https://img.lemde.fr/2021/08/12/39/0/1280/640/1440/720/60/0/f9689b2_76530721-capture-d-e-cran-2021-08-12-a-16-30-05.png",
        "publishedAt": "2021-08-22T08:41:48Z",
        "content": "Avec le réchauffement climatique, il fera encore plus chaud quailleurs en ville. En cause : leffet d« îlot de chaleur urbain », identifié il y a deux cent ans à Londres : la texture même des villes (… [+1161 chars]"
    },
    {
        "source": {
            "id": "new-scientist",
            "name": "New Scientist"
        },
        "author": null,
        "title": "Ventilation can make schools and offices safe from covid-19 – but how?",
        "description": "Maximising airflow in public spaces is crucial to cut covid-19 transmission, but questions remain about what technology to use and how effective it needs to be",
        "url": "https://www.newscientist.com/article/mg25133484-200-ventilation-can-make-schools-and-offices-safe-from-covid-19-but-how/",
        "urlToImage": "https://images.newscientist.com/wp-content/uploads/2021/08/18201325/pri195123936-5.jpg",
        "publishedAt": "2021-08-18T00:00:00Z",
        "content": "By Graham Lawton\r\nFirst day back at Tustin Ranch Elementary School in California on 11 August\r\nPaul Bersebach/MediaNews Group/Orange County Register via Getty Images\r\nAS THE nights begin to draw in a… [+486 chars]"
    },
    {
        "source": {
            "id": "msnbc",
            "name": "MSNBC"
        },
        "author": "MSNBC",
        "title": "China upholds Canadian's death sentence as Huawei case looms",
        "description": "A Chinese court rejected a Canadian appeal of a death sentence in an effort to step up pressure on Canada to release executive of tech giant Huawei.",
        "url": "https://www.nbcnews.com/news/world/china-upholds-canadian-s-death-sentence-huawei-case-looms-n1276392",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_32/3497921/210810-robert_schellenberg-mc-8292.JPG",
        "publishedAt": "2021-08-10T09:39:49Z",
        "content": "BEIJING A Chinese court on Tuesday rejected a Canadian drug convicts appeal of a death sentence in what appeared to be an effort to step up pressure on Canada to release a detained executive of tech … [+3654 chars]"
    },
    {
        "source": {
            "id": "hacker-news",
            "name": "Hacker News"
        },
        "author": "Jessica Puckett",
        "title": "Facial Recognition Technology: How to Opt Out at the Airport",
        "description": "Facial recognition technology is a growing trend at airports, but opting out isn't always obvious.",
        "url": "https://www.cntraveler.com/story/how-to-opt-out-of-facial-recognition-at-the-airport",
        "urlToImage": "https://media.cntraveler.com/photos/5ff4856b19684347ada7374f/16:9/w_1280,c_limit/FacialRecognition-Airport-2020-GettyImages-1027974140.jpg",
        "publishedAt": "2021-01-05T22:17:07Z",
        "content": "Facial recognition technology is one of the fastest growing trends in airports across the world. Biometric scanning systems, which include fingerprint and retina scans as well as facial recognition, … [+4313 chars]"
    }
]

export default articles;