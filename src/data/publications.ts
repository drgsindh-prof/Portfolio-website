// Publications Data for Prof. (Dr.) Gurinder Singh

export interface Publication {
  id: number;
  authors: string;
  year: number;
  title: string;
  venue: string;
  type: "journal" | "conference" | "book" | "chapter";
  publisher?: string;
  pages?: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    authors: "Saraswat, S., Rajesh, A., Singh, G., Trehan, K., Patil, V., Shukla, G., & Singh, S.",
    year: 2025,
    title: "A Framework Using Big Data for Patient Detection and Identification Systems",
    venue: "Generative AI for Business Analytics and Strategic Decision Making in Service Industry",
    type: "chapter",
    publisher: "IGI Global Scientific Publishing",
    pages: "169-194"
  },
  {
    id: 2,
    authors: "Deka, P., Singh, G., Sharma, C. S., Verma, P., & Kapoor, S.",
    year: 2025,
    title: "Optimizing organisation system by focusing on mental wellbeing, substance abuse, counterproductive work behaviour, resilience and stress, using SEM",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "1-15"
  },
  {
    id: 3,
    authors: "Khan, S., Banerjee, S., Kumar, K., Chanakya, S. D., & Singh, G.",
    year: 2025,
    title: "Evaluating the Impact of Advertising Channels on Sales: A Comparative Analysis Using Machine Learning Models",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "666-671"
  },
  {
    id: 4,
    authors: "Kler, R., Kler, R., Nag, B. C., Saraswat, E., Ather, D., & Singh, G.",
    year: 2025,
    title: "Enhancing Short Run Exchange Rate Forecasting for Uzbeki Soum: From Econometric Models to Machine Learning-Based Hybrid Approaches",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "584-590"
  },
  {
    id: 5,
    authors: "Ather, D., Singh, G., Kler, R., Kler, R., Nag, B. C., & Saraswat, E.",
    year: 2025,
    title: "Exploring Non-Linear Dynamics of Current Account Balance in Uzbekistan Using SVR and Random Forest",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "620-625"
  },
  {
    id: 6,
    authors: "Banerjee, S., Banerjee, A., Majumder, S., Singh, G., & Chanakya, S. D.",
    year: 2025,
    title: "AI as a Catalyst for Socio-Political Transparency in Uzbekistan",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "626-632"
  },
  {
    id: 7,
    authors: "Khan, S., Das, S. G., Kalra, S., Chaudhary, N., & Singh, G.",
    year: 2025,
    title: "Factors Influencing AI Index Across Regions, Political Regimes, and Development Indicators: A Random Forest and K-Mean Clustering Approach",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "672-677"
  },
  {
    id: 8,
    authors: "Kler, R., Nag, B. C., Saraswat, E., Ather, D., Singh, G., & Kler, R.",
    year: 2025,
    title: "Modeling and Forecasting Natural Rate of Interest for Uzbekistan Through Bayesian Filtering and Machine Learning Model",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "599-605"
  },
  {
    id: 9,
    authors: "Singh, G., Kler, R., Kler, R., Nag, B. C., Saraswat, E., & Ather, D.",
    year: 2025,
    title: "Integrating Machine Learning and Econometric Models to Analyze Unemployment Dynamics in Uzbekistan: A Comparative Study of Random Forest, XGBoost, and Traditional Approaches",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "613-619"
  },
  {
    id: 10,
    authors: "Saraswat, E., Ather, D., Singh, G., Kler, R., Kler, R., & Nag, B. C.",
    year: 2025,
    title: "Analysing the Policy Shift Regarding FDI Regims in Uzbekistan: A Machine Learning Lense Via Implementing Smooth Transition Regression Model",
    venue: "2025 International Conference on Technology Enabled Economic Changes (InTech)",
    type: "conference",
    publisher: "IEEE",
    pages: "606-612"
  },
  {
    id: 11,
    authors: "Chaudhary, M., Gaur, L., Singh, G., & Afaq, A.",
    year: 2024,
    title: "Introduction to Explainable AI (XAI) in E-Commerce",
    venue: "Role of Explainable Artificial Intelligence in E-Commerce",
    type: "chapter",
    publisher: "Springer Nature Switzerland",
    pages: "1-15"
  },
  {
    id: 12,
    authors: "Hasan, N., Nanda, S., Singh, G., Sharma, V., Kaur, G., & Jain, V.",
    year: 2024,
    title: "Adoption of Blockchain Technology in Productivity and Automation Process of Microfinance Services",
    venue: "2024 4th International Conference on Innovative Practices in Technology and Management (ICIPTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 13,
    authors: "Shrivastava, A., Singh, A., Mishra, R. P., Nanda, S., & Singh, G.",
    year: 2024,
    title: "An empirical study of the Indian automotive industry using lean transformation integrated with Industry 4.0",
    venue: "2024 4th International Conference on Innovative Practices in Technology and Management (ICIPTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 14,
    authors: "Nanda, S., Singh, G., Hasan, N., Verma, P., Joshi, A., & Verma, R.",
    year: 2024,
    title: "Artificial Intelligence and Computational Ability in Digitizing Financial Products And Services By Micro-Entrepreneurs",
    venue: "2024 4th International Conference on Innovative Practices in Technology and Management (ICIPTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 15,
    authors: "Chaudhary, M., Afaq, A., Singh, G., & Kapoor, S.",
    year: 2024,
    title: "Unboxing the mystery: employee churn in the retail industry using machine learning approach",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "1-11"
  },
  {
    id: 16,
    authors: "Singh, G., George, R. P., Ahmad, N., Hussain, S., Ather, D., & Kler, R.",
    year: 2024,
    title: "A deep learning approach for evaluating the efficacy and accuracy of PoseNet for posture detection",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "1-10"
  },
  {
    id: 17,
    authors: "Sharma, S., Singh, G., Dhanny, H. S., & Garg, V.",
    year: 2024,
    title: "Emerging Role of HR 4.0 in Postpandemic Scenario: Countering the Challenges and Utilizing the Opportunities",
    venue: "HR 4.0 Practices in the Post-COVID-19 Scenario",
    type: "chapter",
    publisher: "Apple Academic Press",
    pages: "1-20"
  },
  {
    id: 18,
    authors: "Sharma, S., Singh, G., Sharma, C. S., & Kapoor, S.",
    year: 2024,
    title: "Artificial intelligence in Indian higher education institutions: a quantitative study on adoption and perceptions",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "1-17"
  },
  {
    id: 19,
    authors: "Sahu, G., Singh, G., & Gaur, L.",
    year: 2024,
    title: "Exploring new dimensions in OTT consumption: an empirical study on perceived risks, descriptive norms and goal-directed behaviour",
    venue: "Asia Pacific Journal of Marketing and Logistics",
    type: "journal"
  },
  {
    id: 20,
    authors: "Karpe, P., Singh, G., & Agarwal, V.",
    year: 2023,
    title: "A Study on Factors Affecting Consumer Attitude And Purchase Intention Of Luxury Home Appliance Brands",
    venue: "Educational Administration: Theory and Practice",
    type: "journal",
    pages: "3747-3758"
  },
  {
    id: 21,
    authors: "Sharma, P., Kapur, P. K., Sanjeev, M. A., Singh, G., & Anjum, M.",
    year: 2023,
    title: "Assessment of the factors affecting admissions in HEI's: a two-phase approach",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "1-10"
  },
  {
    id: 22,
    authors: "Singh, G., Chaudhary, N., Ather, D., Kler, R., & Arora, M.",
    year: 2023,
    title: "Revolutionizing Remote Healthcare: Proposing An IoT & Arduino-Based Integrated Approach for Real-Time Health Monitoring",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 23,
    authors: "Kumar, A., Singh, O., Anand, A., Bisht, M., & Singh, G.",
    year: 2023,
    title: "A Waterfall Approach to Study Innovation Adoption Process",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "01-06"
  },
  {
    id: 24,
    authors: "Arora, M., Singh, G., Ather, D., Chaudhary, N., & Kler, R.",
    year: 2023,
    title: "Forecasting Inbound Tourism in Uzbekistan: Leveraging AI and ARIMA Models for Economic Growth Insights",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-4"
  },
  {
    id: 25,
    authors: "Ather, D., Chaudhary, N., Singh, G., Beig, T., & Kler, R.",
    year: 2023,
    title: "Enhancing Used Automobile Valuations: A Data-Cleaning and Linear Regression Approach for Predicting Prices In Competitive Market",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 26,
    authors: "Chaudhary, N., Singh, G., Ather, D., Kler, R., & Bhandwal, M.",
    year: 2023,
    title: "Arduino-Based Monitoring of Microclimatic Variables for Precision Agriculture in Sugarcane Cultivation",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-6"
  },
  {
    id: 27,
    authors: "Kler, R., Ather, D., Singh, G., Chaudhary, N., & Arora, M.",
    year: 2023,
    title: "Predicting Agricultural Growth in Jizzax Region Using Advanced Machine Learning Techniques: An ARIMA-Based Approach",
    venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 28,
    authors: "Patil, P., Chaudhary, N., Prasad, S., Bhandwal, M., Arora, M., & Singh, G.",
    year: 2023,
    title: "Predicting Student Performance with Machine Learning Algorithms",
    venue: "2023 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "conference",
    publisher: "IEEE",
    pages: "1346-1353"
  },
  {
    id: 29,
    authors: "Aggarwal, G., Srivastava, A. K., Jhajharia, K., Sharma, N. V., & Singh, G.",
    year: 2023,
    title: "Detection of Deep Fake Images Using Convolutional Neural Networks",
    venue: "2023 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "conference",
    publisher: "IEEE",
    pages: "1083-1087"
  },
  {
    id: 30,
    authors: "Singh, G., Sao, A., Singh, S., & Hinchey, M.",
    year: 2023,
    title: "AI-Enhanced SEM Analysis: Evaluating E-CRM's Effect on Customer Experience in NCR's Private Banking Sector",
    venue: "2023 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "conference",
    publisher: "IEEE",
    pages: "957-962"
  },
  {
    id: 31,
    authors: "Chaudhary, M., Singh, G., Gaur, L., Mathur, N., & Kapoor, S.",
    year: 2023,
    title: "Leveraging Unity 3D and Vuforia Engine for Augmented Reality Application Development",
    venue: "2023 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "conference",
    publisher: "IEEE",
    pages: "1139-1144"
  },
  {
    id: 32,
    authors: "Afaq, A., Singh, G., Gaur, L., & Kapoor, S.",
    year: 2023,
    title: "Aspect-Based Opinion Mining of Customer Reviews in the Hospitality Industry: Leveraging Recursive Neural Tensor Network Algorithm",
    venue: "2023 3rd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "conference",
    publisher: "IEEE",
    pages: "1392-1397"
  },
  {
    id: 33,
    authors: "Maurya, A., Munoz, J. M., Gaur, L., & Singh, G. (Eds.)",
    year: 2023,
    title: "Disruptive Technologies in International Business: Challenges and Opportunities for Emerging Markets",
    venue: "De Gruyter",
    type: "book",
    publisher: "De Gruyter"
  },
  {
    id: 34,
    authors: "Singh, G., Tiwari, P., & Garg, V.",
    year: 2023,
    title: "HRM Digitalisation: Exploring Success and Outcomes",
    venue: "The Adoption and Effect of Artificial Intelligence on Human Resources Management, Part B",
    type: "chapter",
    publisher: "Emerald Publishing Limited",
    pages: "199-219"
  },
  {
    id: 35,
    authors: "Jain, R., Singh, G., Jain, S., & Jain, K.",
    year: 2023,
    title: "Gen Xers: Perceived barriers and motivators to fashion renting from the Indian cultural context",
    venue: "Journal of Consumer Behaviour",
    type: "journal"
  },
  {
    id: 36,
    authors: "Krishnan, C., Thapliyal, K., & Singh, G. (Eds.)",
    year: 2023,
    title: "Global Higher Education and the COVID-19 Pandemic: Perspectives, Challenges, and New Opportunities",
    venue: "CRC Press",
    type: "book",
    publisher: "CRC Press"
  },
  {
    id: 37,
    authors: "Pal, T., Singh, G., Bohara, V. A., & Srivastava, A.",
    year: 2022,
    title: "Optical IRS Aided B5G V2V Solution for Road Safety Applications",
    venue: "2022 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
    type: "conference",
    publisher: "IEEE",
    pages: "169-174"
  },
  {
    id: 38,
    authors: "Sahdev, S. L., Singh, G., Sharma, C. S., & Chawla, M.",
    year: 2022,
    title: "A study on impact of open innovation openness on the practices adopted by Indian Food Processing SMEs on Product Innovation Output",
    venue: "Acta Innovations",
    type: "journal"
  },
  {
    id: 39,
    authors: "Goel, R., Sahai, S., & Singh, G.",
    year: 2022,
    title: "Consumer's Awareness and Perception Towards E-Waste Management",
    venue: "Handbook of Solid Waste Management: Sustainability through Circular Economy",
    type: "chapter",
    pages: "1-11"
  },
  {
    id: 40,
    authors: "Singh, G., Sharma, M., Nanda, S., & Kadyan, S.",
    year: 2022,
    title: "Disruptive Technologies and Digitalization in Insurance: Improving the Value Chain of Insurance",
    venue: "2022 3rd International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-5"
  },
  {
    id: 41,
    authors: "Chaudhary, M., Gangele, A., Naved, M., Gaur, L., & Singh, G.",
    year: 2022,
    title: "The Function of Driver Categorisation in the Ride-Hailing Industry: A Study on On-Demand Transport",
    venue: "2022 3rd International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "1-6"
  },
  {
    id: 42,
    authors: "Spais, G., Behl, A., Jain, K., Jain, V., & Singh, G.",
    year: 2022,
    title: "Promotion and branding from the lens of gamification in challenging times",
    venue: "Journal of Promotion Management",
    type: "journal",
    pages: "413-419"
  },
  {
    id: 43,
    authors: "Singh, G., Bhardwaj, G., Singh, S. V., & Chaudhary, N.",
    year: 2022,
    title: "Artificial intelligence led Industry 4.0 application for sustainable development",
    venue: "2022 2nd International Conference on Innovative Practices in Technology and Management (ICIPTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "339-343"
  },
  {
    id: 44,
    authors: "Tyagi, A., Gaur, L., Singh, G., & Kumar, A.",
    year: 2022,
    title: "Air Quality Index (AQI) Using Time Series Modelling During COVID Pandemic",
    venue: "International Conference on Artificial Intelligence and Sustainable Engineering: Select Proceedings of AISE 2020",
    type: "conference",
    publisher: "Springer Singapore",
    pages: "441-452"
  },
  {
    id: 45,
    authors: "Singh, G., Gupta, R., & Vatsa, V.",
    year: 2021,
    title: "A framework for enhancing cyber security in fintech applications in india",
    venue: "2021 International Conference on Technological Advancements and Innovations (ICTAI)",
    type: "conference",
    publisher: "IEEE",
    pages: "274-279"
  },
  {
    id: 46,
    authors: "Singh, G., Bhardwaj, G., Singh, S. V., Chaturvedi, P., Kumar, V., & Gupta, S.",
    year: 2021,
    title: "Industry 4.0: the industrial revolution and future landscape in Indian Market",
    venue: "2021 International Conference on Technological Advancements and Innovations (ICTAI)",
    type: "conference",
    publisher: "IEEE",
    pages: "500-505"
  },
  {
    id: 47,
    authors: "Singh, G., Dhanny, H. S., Garg, V., & Sharma, S.",
    year: 2021,
    title: "HR Acumen in Industry 4.0: Managing Talent and Achieving Balance in Life",
    venue: "Financial Intelligence in Human Resources Management",
    type: "chapter",
    publisher: "Apple Academic Press",
    pages: "1-20"
  },
  {
    id: 48,
    authors: "Gaur, L., Singh, G., Hinchey, M., Singh, G., & Jain, V.",
    year: 2022,
    title: "Applications of computational intelligence techniques to software engineering problems",
    venue: "Special Issue",
    type: "journal"
  },
  {
    id: 49,
    authors: "Sharma, S., & Singh, G.",
    year: 2021,
    title: "Comparison of voice based virtual assistants fostering indian higher education–a technical perspective",
    venue: "2021 International Conference on Technological Advancements and Innovations (ICTAI)",
    type: "conference",
    publisher: "IEEE",
    pages: "162-167"
  },
  {
    id: 50,
    authors: "Goel, R., Sahai, S., Singh, G., & Lall, S.",
    year: 2021,
    title: "Measures for Improving IoT Security",
    venue: "Integration of Cloud Computing with Internet of Things: Foundations, Analytics, and Applications",
    type: "chapter",
    pages: "25-39"
  },
  {
    id: 51,
    authors: "Sahai, S., Goel, R., Bajaj, P., & Singh, G.",
    year: 2021,
    title: "IoT and Its Role in Performance Enhancement in Business Organizations",
    venue: "Integration of Cloud Computing with Internet of Things: Foundations, Analytics, and Applications",
    type: "chapter",
    pages: "183-196"
  },
  {
    id: 52,
    authors: "Sahdev, S. L., Singh, G., & Kaur, N.",
    year: 2021,
    title: "A Study on Indicators for Open Innovation Performance in Food Processing SMEs in India through AHP Approach",
    venue: "2021 2nd International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "210-215"
  },
  {
    id: 53,
    authors: "Kaur, N., Sahdev, S. L., Singh, G., & Tokas, N.",
    year: 2021,
    title: "Monetizing personal brand for business success, financial security and career longevity-sentiment analysis in COVID 19 Era",
    venue: "2021 2nd International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "321-325"
  },
  {
    id: 54,
    authors: "Kaur, N., Sahdev, S. L., Singh, G., & Garg, A.",
    year: 2021,
    title: "Bitcoin: An Investment Management Tool-Comparison between risk and average returns of different financial assets with BTC",
    venue: "2021 2nd International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "351-356"
  },
  {
    id: 55,
    authors: "Singh, G., Garg, V., & Srivastav, S.",
    year: 2021,
    title: "Ecotourism in India: social trends and pathways on sustainable tourism and eco-travelling",
    venue: "International Journal of Business and Globalisation",
    type: "journal",
    pages: "468-480"
  },
  {
    id: 56,
    authors: "Kota, H. B., Singh, G., Mir, M., Smark, C., & Kumar, B.",
    year: 2021,
    title: "Sustainable Development Goals and Businesses",
    venue: "Australasian Accounting, Business and Finance Journal",
    type: "journal",
    pages: "1-3"
  },
  {
    id: 57,
    authors: "Goel, N., Singh, G., Kota, H. B., Mir, M., & Smark, C.",
    year: 2021,
    title: "Sustainable development goals and economic growth in emerging economies: A study of sustainability through international investments",
    venue: "Australasian Accounting, Business and Finance Journal",
    type: "journal",
    pages: "41"
  },
  {
    id: 58,
    authors: "Singh, G., Bhardwaj, G., Singh, S. V., & Garg, V.",
    year: 2021,
    title: "Biometric identification system: security and privacy concern",
    venue: "Artificial intelligence for a sustainable industry 4.0",
    type: "chapter",
    pages: "245-264"
  },
  {
    id: 59,
    authors: "Sahdev, S. L., Singh, G., & Kaur, N.",
    year: 2021,
    title: "Factors contributing and promoting Open Innovation in Indian female-owned Food Processing SMEs-Prioritizing through the AHP technique",
    venue: "Acta Innovations",
    type: "journal",
    pages: "28-41"
  },
  {
    id: 60,
    authors: "Sahai, S., Goel, R., & Singh, G.",
    year: 2021,
    title: "Building the world of Internet of Things",
    venue: "Advanced Soft Computing Techniques in Data Science, IoT and Cloud Computing",
    type: "chapter",
    publisher: "Springer International Publishing",
    pages: "101-119"
  },
  {
    id: 61,
    authors: "Singh, G., Garg, V., & Puri, N.",
    year: 2021,
    title: "Artificial Intelligence's Role in Essential Commodities During a Pandemic Situation",
    venue: "Applications of Artificial Intelligence in COVID-19",
    type: "chapter",
    publisher: "Springer Singapore",
    pages: "511-527"
  },
  {
    id: 62,
    authors: "Singh, G., Garg, V., & Tiwari, P.",
    year: 2021,
    title: "Introduction to Blockchain Technology",
    venue: "Transforming Cybersecurity Solutions using Blockchain",
    type: "chapter",
    publisher: "Springer Singapore",
    pages: "1-18"
  },
  {
    id: 63,
    authors: "Krishnan, C., Baba, M. M., Singh, G., & Srivastava, A.",
    year: 2021,
    title: "COVID-19 and the Marginal People of India: Impact of COVID-19 on the Economy and Society in India",
    venue: "Handbook of Research on the Impact of COVID-19 on Marginalized Populations and Support for the Future",
    type: "chapter",
    publisher: "IGI Global",
    pages: "255-269"
  },
  {
    id: 64,
    authors: "Singh, G., Garg, V., & Tiwari, P.",
    year: 2020,
    title: "A Study on Blockchain Technology: Application and Future Trends",
    venue: "Blockchain Technology and the Internet of Things: Challenges and Applications in Bitcoin and Security",
    type: "chapter",
    pages: "317"
  },
  {
    id: 65,
    authors: "Jain, K., Jajodia, I., Sharma, P., & Singh, G.",
    year: 2021,
    title: "Brand bravery: Conceptualization, scale development and validation",
    venue: "Journal of Product & Brand Management",
    type: "journal",
    pages: "1212-1228"
  },
  {
    id: 66,
    authors: "Gaur, L., Singh, G., & Agarwal, V.",
    year: 2021,
    title: "Leveraging artificial intelligence tools to combat the COVID-19 crisis",
    venue: "Futuristic Trends in Network and Communication Technologies: Third International Conference, FTNCT 2020",
    type: "conference",
    publisher: "Springer Singapore",
    pages: "321-328"
  },
  {
    id: 67,
    authors: "Sharma, I., Jain, K., & Singh, G.",
    year: 2020,
    title: "Effect of online political incivility on partisan attitude: role of issue involvement, moral identity and incivility accountability",
    venue: "Online Information Review",
    type: "journal",
    pages: "1421-1441"
  },
  {
    id: 68,
    authors: "Singh, G., Gupta, R., & Agarwal, N.",
    year: 2020,
    title: "Economic Re-Engineering: Covid-19",
    venue: "Singh, G., Gupta, R. and Agarwal",
    type: "journal",
    pages: "01-05"
  },
  {
    id: 69,
    authors: "Singh, G., Srivastav, S., Gupta, A., & Garg, V.",
    year: 2020,
    title: "Companies adoption of IoT for smart retailing in industry 4.0",
    venue: "2020 International Conference on Intelligent Engineering and Management (ICIEM)",
    type: "conference",
    publisher: "IEEE",
    pages: "487-492"
  },
  {
    id: 70,
    authors: "Singh, G., Malik, P., & Khurana, M.",
    year: 2020,
    title: "Partial Confirmatory Factor Analysis for Green Marketing Practices and its Impact on Indian Consumer Purchase Intention",
    venue: "2020 International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "134-139"
  },
  {
    id: 71,
    authors: "Srivastava, P., Shukla, R. K., Sharma, S., Khanduja, D., Gupta, R., Alrasheedi, M., & Singh, G.",
    year: 2020,
    title: "Fuzzy methodology approach for prioritizing maintenance 4.0 attributes",
    venue: "2020 International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "308-311"
  },
  {
    id: 72,
    authors: "Singh, G., Srivastav, S., Gupta, A., & Garg, V.",
    year: 2020,
    title: "An Analysis of Financial Fraud through PNB Bank Scam and its technical Implications",
    venue: "2020 International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "436-442"
  },
  {
    id: 73,
    authors: "Sharma, M., Sahdev, S. L., Singh, G., & Kumar, B.",
    year: 2020,
    title: "Methodology for the Development of an Ontology based E-Learning Platform",
    venue: "2020 International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
    type: "conference",
    publisher: "IEEE",
    pages: "101-106"
  },
  {
    id: 74,
    authors: "Singh, G.",
    year: 2020,
    title: "Online Food Delivery Services: A Study on Demographic Attributes",
    venue: "Our Heritage",
    type: "journal",
    pages: "2147-2165"
  },
  {
    id: 75,
    authors: "Singh, G., Bhardwaj, G., Singh, S. V., & Kumar, V.",
    year: 2020,
    title: "Technology Acceptance Model to Assess Employee's Perception and Intention of Integration of Artificial Intelligence and Human Resource Management in IT Industry",
    venue: "Technology",
    type: "journal",
    pages: "11485-11490"
  },
  {
    id: 76,
    authors: "Goel, R., Sahai, S., & Singh, G.",
    year: 2020,
    title: "Effect on the Emotional Self-Esteem of Women with Reference to Make-Up",
    venue: "Emotion and Information Processing: A Practical approach",
    type: "chapter",
    pages: "55-77"
  },
  {
    id: 77,
    authors: "Singh, G., Garg, V., Tiwari, P., & Goel, R.",
    year: 2020,
    title: "Emergence of IoT and Big Data: A Study in the Healthcare Industry",
    venue: "Applications of Deep Learning and Big IoT on Personalized Healthcare Services",
    type: "chapter",
    publisher: "IGI Global",
    pages: "42-54"
  },
  {
    id: 78,
    authors: "Singh, G., Kashyap, S., Tomar, K. S., & Garg, V.",
    year: 2019,
    title: "A Study of Business Performance Management in Special Reference to Automobile Industry",
    venue: "Data Management, Analytics and Innovation: Proceedings of ICDMAI 2019",
    type: "conference",
    publisher: "Springer Singapore",
    pages: "69-92"
  },
  {
    id: 79,
    authors: "Goel, N., Kota, H. B., Singh, G., Mir, M., & Kumar, B.",
    year: 2020,
    title: "Technological Innovation and Regulation as Determinants of Business Growth: An Institutional FDI Fitness Theoretical Framework",
    venue: "Technological Innovations for Sustainability and Business Growth",
    type: "chapter",
    publisher: "IGI Global",
    pages: "39-55"
  },
  {
    id: 80,
    authors: "Singh, G., Garg, V., & Srivastav, S.",
    year: 2019,
    title: "Analysis of Investors' Perceptions of Mutual Fund Investment in the Context of the Delhi/NCR Region",
    venue: "Advances in Management Research",
    type: "journal",
    pages: "139-148"
  },
  {
    id: 81,
    authors: "Harjai, S., Khatri, S. K., & Singh, G.",
    year: 2019,
    title: "Detecting fraudulent insurance claims using random forests and synthetic minority oversampling technique",
    venue: "2019 4th International Conference on Information Systems and Computer Networks (ISCON)",
    type: "conference",
    publisher: "IEEE",
    pages: "123-128"
  },
  {
    id: 82,
    authors: "Venaik, A., Singh, G., Garg, V., Goel, R., & Sahai, S.",
    year: 2019,
    title: "Information Security Parameters Used By Aadhar, Uidai And It's Impact",
    venue: "Int. J. Sci. Technol. Res",
    type: "journal",
    pages: "1150-1154"
  },
  {
    id: 83,
    authors: "Gupta, R., Bhardwaj, G., & Singh, G.",
    year: 2019,
    title: "Employee Perception and Behavioral Intention to Adopt BYOD in the Organizations",
    venue: "2019 International Conference on Automation, Computational and Technology Management (ICACTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "73-78"
  },
  {
    id: 84,
    authors: "Singh, G., Kumar, B., & Kota, H. B.",
    year: 2019,
    title: "Women in Business in India AABFJ Volume 13, Issue 2, 2019",
    venue: "Australasian Accounting, Business and Finance Journal",
    type: "journal",
    pages: "1-4"
  },
  {
    id: 85,
    authors: "Jain, K., Sharma, I., & Singh, G.",
    year: 2018,
    title: "An empirical study of factors determining wearable fitness tracker continuance among actual users",
    venue: "International Journal of Technology Marketing",
    type: "journal",
    pages: "83-109"
  },
  {
    id: 86,
    authors: "Singh, G., Kumar, B., Gaur, L., & Tyagi, A.",
    year: 2019,
    title: "Comparison between multinomial and Bernoulli naïve Bayes for text classification",
    venue: "2019 International Conference on Automation, Computational and Technology Management (ICACTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "593-596"
  },
  {
    id: 87,
    authors: "Tageja, N., Chaturvedi, V., Singh, G., & Petford, N.",
    year: 2019,
    title: "Job stress-Performance in academia: Role of emotional intelligence & social support",
    venue: "2019 International Conference on Automation, Computational and Technology Management (ICACTM)",
    type: "conference",
    publisher: "IEEE",
    pages: "198-205"
  },
  {
    id: 88,
    authors: "Kumar, D., Singh, M., & Singh, G.",
    year: 2019,
    title: "APPRAISAL OF JIO",
    venue: "Journal of Emerging Technologies and Innovative Research",
    type: "journal",
    pages: "130-135"
  },
  {
    id: 89,
    authors: "Singh, G., Gaur, L., & Anshu, K.",
    year: 2019,
    title: "Impact of social media on society—analysis and interpretation",
    venue: "System Performance and Management Analytics",
    type: "chapter",
    pages: "361-372"
  },
  {
    id: 90,
    authors: "Singh, G., Kumar, B., & Gupta, R.",
    year: 2018,
    title: "The role of consumer's innovativeness & perceived ease of use to engender adoption of digital wallets in India",
    venue: "2018 International Conference on Automation and Computational Engineering (ICACE)",
    type: "conference",
    publisher: "IEEE",
    pages: "150-158"
  },
  {
    id: 91,
    authors: "Mahanty, A., Singh, G., Som, S., & Khatri, S. K.",
    year: 2018,
    title: "Security issues and challenges in perception layer of smart healthcare",
    venue: "2018 7th International Conference on Reliability, Infocom Technologies and Optimization (ICRITO)",
    type: "conference",
    publisher: "IEEE",
    pages: "639-644"
  },
  {
    id: 92,
    authors: "Goel, N., & Singh, G.",
    year: 2018,
    title: "The Role of Technology and Regulations in Capital Flow to India",
    venue: "Australasian Accounting, Business and Finance Journal",
    type: "journal",
    pages: "87-103"
  },
  {
    id: 93,
    authors: "Sahai, S., & Singh, G.",
    year: 2018,
    title: "Partial Confirmatory Factor Analysis for E-Service Delivery Outcomes Using E-Tools Provided by the Government",
    venue: "Advances in Computing and Data Sciences: Second International Conference, ICACDS 2018",
    type: "conference",
    publisher: "Springer Singapore",
    pages: "463-470"
  },
  {
    id: 94,
    authors: "Sahai, S., Goel, R., Malik, P., Krishnan, C., Singh, G., & Bajpai, C.",
    year: 2018,
    title: "Role of social media optimization in digital marketing with special reference to Trupay",
    venue: "International Journal of Engineering & Technology",
    type: "journal",
    pages: "52-57"
  },
  {
    id: 95,
    authors: "Bajpai, C., Malik, P., Krishnan, C., Sahai, S., Goel, R., & Singh, G.",
    year: 2018,
    title: "WTO: As an instrument of dispute settlement in the international trade",
    venue: "International Journal of Engineering and Technology (UAE)",
    type: "journal",
    pages: "58-61"
  },
  {
    id: 96,
    authors: "Krishnan, C., Goel, R., Singh, G., Bajpai, C., Malik, P., & Sahai, S.",
    year: 2017,
    title: "Emotional Intelligence: A Study on Academic Professionals",
    venue: "Pertanika Journal of Social Sciences & Humanities",
    type: "journal"
  },
  {
    id: 97,
    authors: "Malik, P., Singh, G., Sahai, S., Bajpai, C., Goel, R., & Krishnan, C.",
    year: 2017,
    title: "Consumer Awareness of Digital Payment with Special Reference to the Village Area",
    venue: "Pertanika Journal of Social Sciences & Humanities",
    type: "journal"
  },
  {
    id: 98,
    authors: "Goel, R., Sahai, S., Krishnan, C., Singh, G., Bajpai, C., & Malik, P.",
    year: 2017,
    title: "An Empirical Study to Enquire the Effectiveness of Digital Marketing in the Challenging Age with Reference to Indian Economy",
    venue: "Pertanika Journal of Social Sciences & Humanities",
    type: "journal"
  },
  {
    id: 99,
    authors: "Singh, G., Gaur, L., & Agarwal, M.",
    year: 2017,
    title: "Factors influencing the digital business strategy",
    venue: "Pertanika Journal of Social Sciences and Humanities",
    type: "journal",
    pages: "1489-1500"
  },
  {
    id: 100,
    authors: "Gaur, L., Singh, G., & Ramakrishnan, R.",
    year: 2017,
    title: "Understanding Consumer Preferences using IoT SmartMirrors",
    venue: "Pertanika Journal of Science & Technology",
    type: "journal"
  },
  {
    id: 101,
    authors: "Singh, G., Gaur, L., & Ramakrishnan, R.",
    year: 2017,
    title: "Internet of Things—Technology adoption model in India",
    venue: "Pertanika J. Sci. Technol",
    type: "journal",
    pages: "835-846"
  },
  {
    id: 102,
    authors: "Singh, G., Maurya, A., & Jain, V.",
    year: 2017,
    title: "Spirituality in Indian organizations",
    venue: "Managing VUCA Through Integrative Self-Management",
    type: "chapter",
    pages: "171-181"
  },
  {
    id: 103,
    authors: "Ramakrishnan, R., Gaur, L., & Singh, G.",
    year: 2016,
    title: "Feasibility and efficacy of BLE beacon IoT devices in inventory management at the shop floor",
    venue: "International Journal of Electrical & Computer Engineering",
    type: "journal"
  },
  {
    id: 104,
    authors: "Kansal, Y., Singh, G., Kumar, U., & Kapur, P. K.",
    year: 2016,
    title: "Optimal release and patching time of software with warranty",
    venue: "International Journal of System Assurance Engineering and Management",
    type: "journal",
    pages: "462-468"
  },
  {
    id: 105,
    authors: "Vyas, G., Gaur, L., & Singh, G.",
    year: 2016,
    title: "Evolution of payments bank and impact from M-PESA: A case of mobile banking services in India",
    venue: "Proceedings of the Second International Conference on Information and Communication Technology for Competitive Strategies",
    type: "conference",
    pages: "1-4"
  },
  {
    id: 106,
    authors: "Gaur, L., Singh, G., Jeyta, & Kumar, S.",
    year: 2016,
    title: "Google Analytics: A Tool to make websites more Robust",
    venue: "Proceedings of the Second International Conference on Information and Communication Technology for Competitive Strategies",
    type: "conference",
    pages: "1-7"
  },
  {
    id: 107,
    authors: "Singh, P. K., Sharma, I., Singh, G., & Dhanny, H. S.",
    year: 2016,
    title: "Multiband microstrip antenna with circular polarization for wireless local area network",
    venue: "2016 International Conference on Innovation and Challenges in Cyber Security (ICICCS-INBUSH)",
    type: "conference",
    publisher: "IEEE",
    pages: "319-322"
  },
  {
    id: 108,
    authors: "Sachdeva, N., Kapur, P. K., & Singh, G.",
    year: 2016,
    title: "Selecting appropriate cloud solution for managing big data projects using hybrid AHP-entropy based assessment",
    venue: "2016 International Conference on Innovation and Challenges in Cyber Security (ICICCS-INBUSH)",
    type: "conference",
    publisher: "IEEE",
    pages: "135-140"
  },
  {
    id: 109,
    authors: "Kaur, N., & Singh, G.",
    year: 2015,
    title: "Role of Brokers/Institutional Investors to Induce Investment in Indian Stock Markets",
    venue: "International Journal of Advanced Research",
    type: "journal",
    pages: "1545-1562"
  },
  {
    id: 110,
    authors: "Singh, G., & Kaur, M. N.",
    year: 2014,
    title: "Investigation of the Determinants to Augment Investment in the Indian Stock Market",
    venue: "International Journal of Scientific and Research Publications",
    type: "journal",
    pages: "2250-3153"
  },
  {
    id: 111,
    authors: "Kapur, P. K., Singh, G., Sachdeva, N., & Tickoo, A.",
    year: 2014,
    title: "Measuring software testing efficiency using two-way assessment technique",
    venue: "Proceedings of 3rd International Conference on Reliability, Infocom Technologies and Optimization",
    type: "conference",
    publisher: "IEEE",
    pages: "1-6"
  },
  {
    id: 112,
    authors: "Singh, V. B., Singh, G., Kumar, R., & Kapur, P. K.",
    year: 2010,
    title: "A generalized reliability growth model for open source software",
    venue: "2010 2nd International Conference on Reliability, Safety and Hazard-Risk-Based Technologies and Physics-of-Failure Methods (ICRESH)",
    type: "conference",
    publisher: "IEEE",
    pages: "523-528"
  }
];

// Get publication stats
export const getPublicationStats = () => {
  const journals = publications.filter(p => p.type === "journal").length;
  const conferences = publications.filter(p => p.type === "conference").length;
  const books = publications.filter(p => p.type === "book").length;
  const chapters = publications.filter(p => p.type === "chapter").length;
  
  const yearCounts: Record<number, number> = {};
  publications.forEach(p => {
    yearCounts[p.year] = (yearCounts[p.year] || 0) + 1;
  });
  
  return {
    total: publications.length,
    journals,
    conferences,
    books,
    chapters,
    yearCounts
  };
};
