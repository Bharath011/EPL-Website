export type ResearchArea = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
  images?: string[];
  video?: string;
};

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  summary: string;
};

export type Publication = {
  title: string;
  authors: string;
  outlet: string;
  year: string;
  doi?: string;
};

export const scholarProfileUrl = "https://scholar.google.com/citations?user=xUUG5eAAAAAJ&hl=en";

export type Course = {
  title: string;
  code: string;
  description: string;
  textbooks: string[];
};

export type Project = {
  title: string;
  funding: string;
  duration: string;
  description: string;
  image: string;
};

export type Member = {
  name: string;
  position: string;
  interests: string;
  email?: string;
  image: string;
  group?: string;
};

export type GalleryItem = {
  caption: string;
  image: string;
};

export const navItems = [
  "Home",
  "Research Areas",
  "Team",
  "Publications",
  "Courses",
  "Gallery",
  "Join us"
];

export const stats = [
  { label: "Faculty", value: 4 },
  { label: "Researchers", value: 28 },
  { label: "Projects", value: 12 },
  { label: "Publications", value: 96 }
];

export const researchAreas: ResearchArea[] = [
  {
    title: "Combustion and Hydrolysis of Metal Particles for Recyclable Energy with Zero-Carbon Emissions",
    description: "Investigating metal fuel flames as a recyclable, carbon-free energy carrier for next-generation sustainable energy systems.",
    image: "/research-media-12.png",
    images: ["/research-media-1-ezgif.com-resize.gif"],
    bullets: [
      "Investigating metal fuel flames as a recyclable, carbon-free energy carrier for next-generation sustainable energy systems.",
      "Studying multiphase combustion phenomena in particle-laden and hybrid fuel flames to advance the understanding of reactive flow physics.",
      "Exploring combustion chemistry, flame dynamics, and stability to enable cleaner and more efficient combustion technologies.",
      "Developing and applying advanced optical diagnostics for quantitative flame characterization and detailed reactive flow analysis.",
    ],
  },
  {
    title: "Investigation on Combustion Characteristics of Composite Solid Propellants with Metal and Metal Hydride Additives",
    description: "Studying burning rates, agglomeration, and combustion performance of Al, Mg, B, LiAlH₄, MgH₂, TiH₂, and ZrH₂ enhanced propellants.",
    image: "/research-media-18.png",
    images: ["/research-media-19.jpeg"],
    bullets: [
      "Metal additives in composite solid propellants — Aluminum (Al), Magnesium (Mg), and Boron (B).",
      "Micro-sized vs. nano-sized metal additives — Effects on burning rate and agglomeration.",
      "Metal hydride-based composite solid propellants — LiAlH₄, MgH₂, TiH₂, and ZrH₂.",
      "Combustion characterization — Burning rate, high-speed flame imaging, and agglomerate analysis.",
      "Experimental and thermochemical evaluation of advanced energetic additives for solid rocket propulsion.",
    ],
  },
  {
    title: "Investigation on Metallized Hydro-reactive Propellants and Propulsive Performance of Water-Breathing Ramjet Engines",
    description: "Developing metal-based hydro-reactive fuels and water-breathing ramjet systems for underwater propulsion with improved thrust and efficiency.",
    image: "/research-media-21.png",
    images: ["/research-media-20.png", "/research-media-22.jpeg", "/research-media-2.png"],
    bullets: [
      "Developing advanced metal-based propellants for underwater propulsion systems.",
      "Studying how hydro-reactive propellants burn and perform underwater.",
      "Designing and testing water-breathing ramjet engines for better performance.",
      "Improving thrust, burn rate, and engine efficiency through experiments.",
      "Using advanced testing techniques to understand combustion and propellant behavior.",
      "Building safer, more efficient, and high-performance underwater propulsion technologies.",
    ],
  },
  {
    title: "Combustion Response Measurement of Composite Solid Propellants using T-Burner and Pulsed BEM",
    description: "Measuring solid propellant combustion response, acoustic effects, and motor performance using T-burners and pulsed burner element motor tests.",
    image: "/research-media-3.png",
    images: ["/research-media-4.jpeg", "/research-media-5.jpeg", "/research-media-6.jpeg"],
    bullets: [
      "Measures combustion response using the T-burner technique.",
      "Characterizes pulsed T-burner tests for non-self-excited propellants.",
      "Investigates the effect of initial grain temperature on combustion response.",
      "Demonstrates the influence of propellant composition on stability.",
      "Predicts solid rocket motor stability using combustion response data.",
      "Designing and manufacturing of a complete 3 kg BEM test motor for propellant evaluation.",
      "Conducting tests at different acoustic frequencies to study combustion behavior.",
      "Measurement of chamber pressure and burning performance during motor operation.",
    ],
  },
  {
    title: "Development of Electrically Controlled Solid Propellants (ECSPs)",
    description: "Formulating electrically responsive propellants with conductive additives for controllable ignition, micro-thrusters, and spacecraft propulsion applications.",
    image: "/research-media-7.png",
    images: ["/research-media-8.jpeg", "/research-media-9.jpeg"],
    video: "/research-media-24.mp4",
    bullets: [
      "Development of electrically controlled solid propellants (ECSPs) with electrically initiated and controllable combustion.",
      "Formulation and optimization of advanced oxidizer systems for enhanced ignition and combustion performance.",
      "Development of PVA- and PEO-based polymer binder systems for electrically responsive propellants.",
      "Incorporation of metallic additives to improve energy release and combustion characteristics.",
      "Integration of carbon-based conductive additives to enhance electrical conductivity and ignition reliability.",
      "Investigation of catalytic additives for improved ignition and combustion efficiency."
    ],
  },
  {
    title: "In-situ Measurements of Aluminum Agglomerate Size, Velocity, and Temperature Using Simultaneous Digital Inline Holography and Imaging Pyrometry",
    description: "Combining digital inline holography and imaging pyrometry to quantify aluminum agglomerate size, velocity, temperature, and combustion dynamics.",
    image: "/research-media-10.gif",
    images: ["/research-media-11.gif"],
    bullets: [
      "Integrated Digital Inline Holography (DIH) and imaging pyrometry diagnostic system.",
      "Real-time DIH reconstruction using machine learning for high-speed particle field analysis.",
      "Simultaneous measurements of aluminum agglomerate size, velocity, and temperature.",
      "Image processing algorithms for quantitative agglomerate temperature estimation.",
      "Thermo-physical characterization of agglomeration dynamics near the propellant burning surface.",
      "High-speed optical diagnostics of combustion and particulate evolution in composite solid propellants.",
    ],
  },
  {
    title: "Experimental and Numerical Investigation of Swirling and Non-swirling Flow for Gaseous and Solid Fuels",
    description: "Experimental and numerical analysis of flame topologies, stabilization modes, ammonia-metal combustion, and residue chemistry.",
    image: "/research-media-13.jpg",
    bullets: [
      "Investigation of flame topologies.",
      "Flame stabilization modes (burner attached, lifted, and swirling flames).",
      "Reaction of ammonia with metals.",
      "Effect of ammonia over metal combustion as pilot fuel.",
      "Residue analysis of combustion products and flue gases.",
      "Analysis of reaction mechanism for ammonia, aluminum, and magnesium.",
    ],
  },
  /*
  {
    title: "Solid Fuel Ducted Ramjet (SFDR) Propulsion",
    description: "Developing boron-based SFDR fuels with titanium and magnesium hydrides to improve ignition, combustion efficiency, and thrust performance.",
    image: "/research-media-15.jpeg",
    images: ["/research-media-16.jpeg"],
    bullets: [
      "Development of high-energy boron-based composite fuels for Solid Fuel Ducted Ramjet (SFDR) propulsion.",
      "Investigation of titanium and magnesium hydride additives to improve boron ignition and combustion efficiency.",
      "Experimental evaluation of combustion characteristics, fuel regression, and thrust performance of SFDR fuels.",
      "Characterization of combustion residues using advanced materials analysis techniques to understand reaction mechanisms.",
      "Design and testing of laboratory-scale SFDR propulsion systems for high-speed air-breathing applications.",
      "Optimization of fuel formulations to enhance propulsion efficiency and extend the operational range of next-generation missiles.",
    ],
  },
  */
];

export const newsItems: NewsItem[] = Array.from({ length: 8 }, (_, index) => ({
  date: `Placeholder Date ${String(index + 1).padStart(2, "0")}`,
  category: index % 2 === 0 ? "Placeholder Announcement" : "Placeholder Event",
  title: `Placeholder news headline ${index + 1}`,
  summary: "Placeholder summary text for a laboratory update, academic milestone, seminar, award, or project announcement."
}));

export const publications: Publication[] = [
  {
    title: "Combustion characteristics of lithium perchlorate-based electrically controlled solid propellants at elevated pressures",
    authors: "K. Gnanaprakash, D. Lim, J.J. Yoh",
    outlet: "Thermochimica Acta, Vol. 720, 179421",
    year: "2023",
  },
  {
    title: "Understanding the pyroelectric combustion behaviour of metallized electrically controlled solid propellants",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "Proceedings of the Combustion Institute (in press)",
    year: "2022",
    doi: "10.1016/j.proci.2022.07.036",
  },
  {
    title: "Thermal decomposition behaviour and chemical kinetics of tungsten based electrically controlled solid propellants",
    authors: "K. Gnanaprakash, M. Yang, J.J. Yoh",
    outlet: "Combustion and Flame, Vol. 238, 111752",
    year: "2022",
  },
  {
    title: "Insights into combustion and thermal decomposition behaviour of electric solid propellants",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "Journal of Propulsion and Energy, Vol. 2, No. 1, 23-33",
    year: "2021",
  },
  {
    title: "Investigation of aging induced processes on thermo-kinetic and combustion characteristics of tungsten pyrotechnic delay composition",
    authors: "K. Gnanaprakash, Y. Lee, J.J. Yoh",
    outlet: "Combustion and Flame, Vol. 228, 114-127",
    year: "2021",
  },
  {
    title: "Burning characteristics of pyrotechnic time-delay composition subjected to moisture and heat",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "Journal of Propulsion and Power, Vol. 37, No. 6, 868-875",
    year: "2021",
  },
  {
    title: "Combustion behaviour of composite sandwich propellants containing RDX",
    authors: "K. Gnanaprakash, S.R. Chakravarthy, K. Jayaraman, H. Appu, D. Singh, Rohit, Ananthram",
    outlet: "Proceedings of the Combustion Institute, Vol. 38, Issue 3, 4451-4459",
    year: "2021",
  },
  {
    title: "Ignition and combustion behaviour of zirconium-based pyrotechnic igniters and pyrotechnic delays under aging",
    authors: "K. Gnanaprakash, B. Han, J.J. Yoh",
    outlet: "Proceedings of the Combustion Institute, Vol. 38, Issue 3, 4373-4381",
    year: "2021",
  },
  {
    title: "Understanding the effects of hygrothermal aging on thermo-chemical behaviour of Zr-Ni based pyrotechnic delay composition",
    authors: "B. Han, K. Gnanaprakash, Y. Park, J.J. Yoh",
    outlet: "Fuel, Vol. 281, 118776",
    year: "2020",
  },
  {
    title: "Effect of binder melt flow on the leading edge flames of solid propellant sandwiches",
    authors: "K. Gnanaprakash, S.R. Chakravarthy",
    outlet: "Proceedings of the Combustion Institute, Vol. 37, Issue 3, 3127-3134",
    year: "2019",
  },
  {
    title: "Effect of curing agent on the plateau burning mechanism of solid propellant sandwiches",
    authors: "K. Gnanaprakash, S.R. Chakravarthy",
    outlet: "Journal of Propulsion and Power, Vol. 34, No. 6, 1442-1454",
    year: "2018",
  },
  {
    title: "Combustion mechanism of composite solid propellant sandwiches containing nano-aluminium",
    authors: "K. Gnanaprakash, S.R. Chakravarthy, R. Sarathi",
    outlet: "Combustion and Flame, Vol. 182, 64-75",
    year: "2017",
  },
  {
    title: "Peculiar burning characteristics of electrically controlled solid propellants",
    authors: "R. Rajak, D. Lim, K. Gnanaprakash, J. Oh, J.J. Yoh",
    outlet: "29th International Colloquium on the Dynamics of Explosions and Reactive Systems (ICDERS), SNU Siheung, South Korea",
    year: "2023",
  },
  {
    title: "Factors influencing the burning characteristics of electrically controlled solid propellants with various metal content",
    authors: "D. Lim, K. Gnanaprakash, R. Rajak, J.J. Yoh",
    outlet: "29th International Colloquium on the Dynamics of Explosions and Reactive Systems (ICDERS), SNU Siheung, South Korea",
    year: "2023",
  },
  {
    title: "Understanding the thermal behaviour of electrically controlled solid propellants with different metal additives",
    authors: "R. Rajak, D. Lim, K. Gnanaprakash, J.J. Yoh",
    outlet: "14th Asia-Pacific Conference on Combustion (ASPACC), Kaohsiung, Taiwan",
    year: "2023",
  },
  {
    title: "The experimental analysis of the burning characteristics of electrically controlled solid propellants",
    authors: "D. Lim, K. Gnanaprakash, R. Rajak, J.J. Yoh",
    outlet: "14th Asia-Pacific Conference on Combustion (ASPACC), Kaohsiung, Taiwan",
    year: "2023",
  },
  {
    title: "Influence of different metal additives on the burning mechanism of electrically controlled solid propellants",
    authors: "R. Rajak, D. Lim, K. Gnanaprakash, J. J. Yoh",
    outlet: "13th International Meeting on Special Topics in Chemical Propulsion and Energetic Materials (ISICP), Gjøvik, Norway",
    year: "2023",
  },
  {
    title: "Pyroelectric combustion rate characterization of electrically controlled solid propellants",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "28th International Colloquium on the Dynamics of Explosions and Reactive Systems (ICDERS), Napoli, Italy",
    year: "2022",
  },
  {
    title: "Influence of tungsten on ignition behaviour of electrically controlled solid propellants at elevated pressures",
    authors: "K. Gnanaprakash, D. Lim, J.J. Yoh",
    outlet: "2022 Spring KSPE conference, The Korean Society of Propulsion Engineers, Jeju, South Korea",
    year: "2022",
  },
  {
    title: "Analysis of burning characteristics of electrically controlled solid propellants by using multi-wavelength pyrometry",
    authors: "D. Lim, K. Gnanaprakash, J.J. Yoh",
    outlet: "63rd KOSCO Symposium, The Korean Society of Combustion, Gyeongju, South Korea",
    year: "2022",
  },
  {
    title: "Pyroelectric combustion characteristics of electrically controlled solid propellants at elevated pressures",
    authors: "K. Gnanaprakash, D. Lim, J.J. Yoh",
    outlet: "63rd KOSCO Symposium, The Korean Society of Combustion, Gyeongju, South Korea",
    year: "2022",
  },
  {
    title: "Thermal decomposition behaviour of metallized electrically controlled solid propellants",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "13th Asia-Pacific Conference on Combustion (ASPACC), Abu Dhabi, UAE",
    year: "2021",
  },
  {
    title: "Pyroelectric combustion of lithium perchlorate based electrically controlled solid propellants",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "62nd KOSCO Symposium, The Korean Society of Combustion, Seoul, South Korea",
    year: "2021",
  },
  {
    title: "Combustion behaviour of tungsten based pyrotechnic delay composition subjected to hygrothermally aging",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "10th Asian Joint Conference on Propulsion and Power (AJCPP), Jeju, South Korea",
    year: "2021",
  },
  {
    title: "Combustion characterization of zirconium-nickel alloy pyrotechnic delay composition subjected to hygrothermal aging",
    authors: "K. Gnanaprakash, J.J. Yoh",
    outlet: "60th KOSCO Symposium, The Korean Society of Combustion, Seoul, South Korea",
    year: "2020",
  },
  {
    title: "Combustion behaviour of composite sandwich propellants containing RDX",
    authors: "K. Gnanaprakash, S.R. Chakravarthy, K. Jayaraman, D. Singh, Rohit, A. Kumar",
    outlet: "12th International High Energy Materials Conference & Exhibits (HEMCE), Chennai, India",
    year: "2019",
  },
  {
    title: "The effect of relative humidity on aging of zirconium-based energetic materials",
    authors: "B. Han, K. Gnanaprakash, Y. Park, J.J. Yoh",
    outlet: "27th International Colloquium on the Dynamics of Explosions and Reactive Systems (ICDERS), Beijing, China",
    year: "2019",
  },
  {
    title: "Flame spreading mechanism on composite solid propellants under pressurized conditions",
    authors: "K. Gnanaprakash, S.R. Chakravarthy, K. Jayaraman, M. Borthakur",
    outlet: "12th Asia-Pacific Conference on Combustion (ASPACC), Fukuoka, Japan",
    year: "2019",
  },
  {
    title: "Explaining an unusual burning rate trends of certain nano-aluminized composite propellants through sandwich combustion",
    authors: "K. Gnanaprakash, S.R. Chakravarthy",
    outlet: "Prof. P. J. Paul Memorial Workshop on Propulsion and Combustion, Hyderabad, India",
    year: "2018",
  },
  {
    title: "Binder melt flow effect on the leading edge flames of solid propellant sandwiches",
    authors: "K. Gnanaprakash, S.R. Chakravarthy",
    outlet: "11th International High Energy Materials Conference & Exhibits (HEMCE), Pune, India",
    year: "2017",
  },
  {
    title: "Plateau burning mechanism of composite solid propellant sandwiches involving binder melt flow",
    authors: "K. Gnanaprakash, S.R. Chakravarthy",
    outlet: "10th Asia-Pacific Conference on Combustion (ASPACC), Beijing, China",
    year: "2015",
  },
  {
    title: "Development of gas generating material for actuators of aerospace vehicles",
    authors: "K. Gnanaprakash, B.T.N. Sridhar",
    outlet: "SEDSIC, SEDS International conference, VIT University, Vellore, India",
    year: "2012",
  },
  {
    title: "Design-Build-Fly of OSIRCA: Oblate spheroid indoor remotely controlled airship",
    authors: "K. Gnanaprakash, K.P. Kamalraj, R.S. Pant",
    outlet: "11th AIAA Aviation Technology, Integration, and Operations (ATIO) Conference, Virginia, USA",
    year: "2011",
  },
];

export const courses: Course[] = [
  {
    title: "Aerospace propulsion",
    code: "AE5050",
    description:
      "Classification of propulsion systems and their operation principles; basic one-dimensional isentropic flows; overall performance characteristics of air-breathing engines: turbojets, turbofans, ramjets; aerothermodynamics of inlets, combustors, exhaust nozzles, compressors, and turbines; principles of rocket propulsion: thrust equation, specific impulse; chemical rocket propellant performance; solid, liquid and hybrid propellant rockets; advanced propulsion concepts: electrical propulsion.",
    textbooks: [
      "Mechanics and Thermodynamics of Propulsion, 2nd edition, P.G. Hill and C.R. Peterson, Pearson Education Inc.",
      "Elements of Gas Turbine Propulsion, J.D. Mattingly, McGraw-Hill.",
      "Rocket Propulsion Elements, 8th edition, G.P. Sutton and O. Biblarz, John Wiley & Sons Inc.",
      "Aerothermodynamics of Gas Turbine and Rocket Propulsion, 3rd edition, G.C. Oates, AIAA education series.",
      "Understanding Aerospace Chemical Propulsion, H.S. Mukunda, I.K. International Pvt. Ltd.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Placeholder Project Alpha",
    funding: "Placeholder Funding Source",
    duration: "Placeholder Duration",
    description: "Placeholder description for a funded engineering research project with experimental and computational tasks.",
    image: "https://placehold.co/900x640/e5edf7/0b5dab?text=Project+Image+01"
  },
  {
    title: "Placeholder Project Beta",
    funding: "Placeholder Funding Source",
    duration: "Placeholder Duration",
    description: "Placeholder description for a collaborative project exploring energy conversion and propulsion technologies.",
    image: "https://placehold.co/900x640/eaf2ef/17685c?text=Project+Image+02"
  },
  {
    title: "Placeholder Project Gamma",
    funding: "Placeholder Funding Source",
    duration: "Placeholder Duration",
    description: "Placeholder description for a laboratory project involving prototype testing, simulation, and validation.",
    image: "https://placehold.co/900x640/f1f4f8/274960?text=Project+Image+03"
  }
];

export const members: Member[] = [
  {
    name: "Dr. Gnanaprakash Kanagaraj",
    position: "Assistant Professor,   Head of Laboratory",
    interests: "Rocket propulsion, energetic materials, electric propulsion, diagnostics, and green aerospace fuels.",
    email: "gnan@mae.iith.ac.in",
    image: "/team-rId4.jpeg",
    group: "Professor"
  },
  {
    name: "YSA Venkataram",
    position: "PhD Scholar",
    interests: "Metal fuel combustion and energetic propellants.",
    image: "/team-rId5.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Deepachanthiran RK",
    position: "PhD Scholar",
    interests: "Energetic systems modeling and experimental propulsion.",
    image: "/Deepachanthiran.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Rishabh Dhadiwal",
    position: "PhD Scholar",
    interests: "High-energy materials and combustion diagnostics.",
    image: "/team-rId6.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Mallidi Jaswanth Reddy",
    position: "PhD Scholar",
    interests: "Propellant formulation and combustion testing.",
    image: "/team-rId7.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Senthil Kumar R",
    position: "PhD Scholar",
    interests: "Pyrotechnic igniters and aging behavior.",
    image: "/team-rId8.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Abhik Mukhopadhyay",
    position: "PhD Scholar",
    interests: "Diagnostics, imaging, and combustion behavior.",
    image: "/team-rId17.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Sharon",
    position: "PhD Scholar",
    interests: "Propulsion experiments and lab coordination.",
    image: "/sharon.jpeg",
    group: "PhD Scholars"
  },
  {
    name: "Harshavardhan Madishetti",
    position: "M. Tech Scholar",
    interests: "Electric solid propellant combustion and diagnostics.",
    image: "/team-rId9.jpeg",
    group: "M. Tech Scholars"
  },
  {
    name: "Shanmukha Adithya Anupindi",
    position: "M. Tech Scholar",
    interests: "Energetic materials and rocket propulsion studies.",
    image: "/team-rId10.jpeg",
    group: "M. Tech Scholars"
  },
  {
    name: "Pangambam Lenin Singh",
    position: "M. Tech Scholar",
    interests: "Solid rocket propellant performance and analysis.",
    image: "/team-rId11.jpeg",
    group: "M. Tech Scholars"
  },
  {
    name: "Arohi Mathur",
    position: "M. Tech Scholar",
    interests: "Diagnostics, imaging, and combustion behavior.",
    image: "/team-rId12.jpeg",
    group: "M. Tech Scholars"
  },
  {
    name: "Balaji",
    position: "M. Tech Scholar",
    interests: "Electric solid propellant combustion and diagnostics.",
    image: "/Balaji.jpeg",
    group: "M. Tech Scholars"
  },
  {
    name: "Mohit Chaudhary",
    position: "M. Tech Scholar",
    interests: "Digital-inline holography and pyrometry for combustion diagnostics.",
    image: "/Mohit.png",
    group: "M. Tech Scholars"
  },
  {
    name: "Dr. Rajneesh Kumar Yadav",
    position: "Project Staff",
    interests: "Propulsion experiments and lab coordination.",
    image: "/team-rId13.jpeg",
    group: "Project Staffs"
  },
  {
    name: "Naresh Kumar",
    position: "Project Staff",
    interests: "Experimental support and energetic materials testing.",
    image: "/Naresh.jpeg",
    group: "Project Staffs"
  },
  {
    name: "Vishnu Vikrama Simman R",
    position: "Project Staff",
    interests: "Instrumentation and propellant characterization.",
    image: "/team-rId14.jpeg",
    group: "Project Staffs"
  },
  {
    name: "Arpit Dubey",
    position: "Project Staff",
    interests: "Data acquisition and propulsion system support.",
    image: "/team-rId15.jpeg",
    group: "Project Staffs"
  },
  {
    name: "MNS Harsha Vardhan",
    position: "Project Staff",
    interests: "Lab operations and energetic materials experiments.",
    image: "/team-rId16.jpeg",
    group: "Project Staffs"
  },
  {
    name: "Prateek Jain",
    position: "Alumni",
    interests: "Former EPL researcher in combustion and propulsion.",
    image: "https://placehold.co/520x620/e8edf3/285f9f?text=Prateek+Jain",
    group: "Alumni"
  },
  {
    name: "Shreyas Sahu",
    position: "Alumni",
    interests: "Former team member working on propellant diagnostics.",
    image: "/team-rId18.jpeg",
    group: "Alumni"
  },
  {
    name: "Amit Kumar Mishra",
    position: "Alumni",
    interests: "Former researcher in propulsion and experimental analysis.",
    image: "/team-rId19.jpeg",
    group: "Alumni"
  },
  {
    name: "Sairaj Gaunekar",
    position: "Alumni",
    interests: "Former lab researcher focused on combustion studies.",
    image: "/Sairaj.jpeg",
    group: "Alumni"
  },
  {
    name: "Atri",
    position: "Intern",
    interests: "Former lab researcher focused on combustion studies.",
    image: "/Atri.jpeg",
    group: "Interns"
  },
];

export const galleryItems: GalleryItem[] = [
  {
    caption: " ",
    image: "/gallery/G-1.jpeg"
  },
  {
    caption: " ",
    image: "/gallery/G-2.jpeg"
  },
  {
    caption: " ",
    image: "/gallery/G-3.jpeg"
  },
  {
    caption: " ",
    image: "/gallery/G-4.jpeg"
  },
  {
    caption: " ",
    image: "/gallery/G-5.jpeg"
  },
  {
    caption: " ",
    image: "/gallery/G-6.jpeg"
  }
];
