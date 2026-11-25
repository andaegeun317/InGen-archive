// Static records loaded before the app logic.

const dinosaurs = [
    // Jurassic Park (1993)
    {
        id: "tyrannosaurus-rex",
        name: "Tyrannosaurus rex",
        species: "Tyrannosaurus rex",
        movie: "Jurassic Park",
        diet: "Carnivore",
        length: "12.3 M",
        height: "4.6 M",
        weight: "8,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/tyrannosaurus-rex.webp",
        description: "A large tyrannosaurid theropod from Late Cretaceous North America. Jurassic Park portrays its cloned T. rex as the park's apex predator."
    },
    {
        id: "velociraptor",
        name: "Velociraptor",
        species: "Velociraptor mongoliensis",
        movie: "Jurassic Park",
        diet: "Carnivore",
        length: "4.0 M",
        height: "1.8 M",
        weight: "100 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/velociraptor.webp",
        description: "A small, feathered dromaeosaurid from Late Cretaceous Mongolia. The films depict much larger animals and pack behavior that is not established for the real genus."
    },
    {
        id: "brachiosaurus",
        name: "Brachiosaurus",
        species: "Brachiosaurus altithorax",
        movie: "Jurassic Park",
        diet: "Herbivore",
        length: "22.0 M",
        height: "12.0 M",
        weight: "45,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/brachiosaurus.webp",
        description: "A Late Jurassic sauropod with forelimbs longer than its hind limbs. Its high shoulders and long neck gave it a distinctive body shape."
    },
    {
        id: "triceratops",
        name: "Triceratops",
        species: "Triceratops horridus",
        movie: "Jurassic Park",
        diet: "Herbivore",
        length: "8.0 M",
        height: "3.0 M",
        weight: "6,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/triceratops.webp",
        description: "A Late Cretaceous herbivorous ceratopsian recognized by three facial horns and a broad bony frill."
    },

    // The Lost World: Jurassic Park (1997)
    {
        id: "dilophosaurus",
        name: "Dilophosaurus",
        species: "Dilophosaurus wetherilli",
        movie: "Jurassic Park",
        diet: "Carnivore",
        length: "6.0 M",
        height: "1.5 M",
        weight: "400 KG",
        era: "Early Jurassic",
        image: "assets/images/dinosaurs/dilophosaurus.webp",
        description: "An Early Jurassic theropod known for a pair of skull crests. The neck frill and venom-spitting abilities shown in the film are fictional."
    },
    {
        id: "stegosaurus",
        name: "Stegosaurus",
        species: "Stegosaurus stenops",
        movie: "The Lost World: Jurassic Park",
        diet: "Herbivore",
        length: "9.0 M",
        height: "4.0 M",
        weight: "5,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/stegosaurus.webp",
        description: "A Late Jurassic herbivore with paired back plates and a spiked tail. The tail spikes are commonly nicknamed a thagomizer."
    },
    {
        id: "mamenchisaurus",
        name: "Mamenchisaurus",
        species: "Mamenchisaurus constructus",
        movie: "The Lost World: Jurassic Park",
        diet: "Herbivore",
        length: "25.0 M",
        height: "14.0 M",
        weight: "50,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/mamenchisaurus.webp",
        description: "A Chinese sauropod from the Jurassic Period, notable for the exceptionally long neck found in several species of the genus."
    },
    {
        id: "compsognathus",
        name: "Compsognathus",
        species: "Compsognathus longipes",
        movie: "The Lost World: Jurassic Park",
        diet: "Carnivore",
        length: "1.0 M",
        height: "0.5 M",
        weight: "3 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/compsognathus.webp",
        description: "A small theropod known from well-preserved European fossils. The coordinated swarms shown in The Lost World are a fictional portrayal."
    },

    // Jurassic Park III (2001)
    {
        id: "spinosaurus",
        name: "Spinosaurus",
        species: "Spinosaurus aegyptiacus",
        movie: "Jurassic Park III",
        diet: "Piscivore",
        length: "15.0 M",
        height: "5.5 M",
        weight: "9,000 KG",
        era: "Cretaceous",
        image: "assets/images/dinosaurs/spinosaurus.webp",
        description: "A North African spinosaur with a long snout and a prominent back sail. Fossil evidence supports a strong association with aquatic environments."
    },
    {
        id: "pteranodon",
        name: "Pteranodon",
        species: "Pteranodon longiceps",
        movie: "Jurassic Park III",
        diet: "Carnivore",
        length: "7.0 M (Wingspan)",
        height: "2.0 M",
        weight: "30 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/pteranodon.webp",
        description: "A large flying pterosaur, not a dinosaur, with a toothless beak and a prominent head crest."
    },
    {
        id: "ankylosaurus",
        name: "Ankylosaurus",
        species: "Ankylosaurus magniventris",
        movie: "Jurassic Park III",
        diet: "Herbivore",
        length: "8.5 M",
        height: "2.0 M",
        weight: "6,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/ankylosaurus.webp",
        description: "A Late Cretaceous ankylosaur from North America with extensive bony armor and a tail club."
    },
    {
        id: "ceratosaurus",
        name: "Ceratosaurus",
        species: "Ceratosaurus nasicornis",
        movie: "Jurassic Park III",
        diet: "Carnivore",
        length: "6.0 M",
        height: "2.5 M",
        weight: "1,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/ceratosaurus.webp",
        description: "A Late Jurassic theropod with a prominent nasal horn and sharp teeth, known mainly from North American fossils."
    },

    // Jurassic World (2015)
    {
        id: "indominus-rex",
        name: "Indominus Rex",
        species: "Indominus rex (fictional hybrid)",
        movie: "Jurassic World",
        diet: "Carnivore",
        type: "Hybrid",
        length: "15.0 M",
        height: "6.0 M",
        weight: "10,000 KG",
        era: "Modern Synthetic",
        image: "assets/images/dinosaurs/indominus-rex.webp",
        description: "A fictional InGen hybrid created for Jurassic World. Its mixed genetic traits and camouflage abilities are story elements, not a real species."
    },
    {
        id: "mosasaurus",
        name: "Mosasaurus",
        species: "Mosasaurus hoffmannii",
        movie: "Jurassic World",
        diet: "Carnivore",
        length: "18.0 M",
        height: "3.5 M",
        weight: "15,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/mosasaurus.webp",
        description: "A large Late Cretaceous marine reptile, not a dinosaur. Jurassic World portrays a cloned Mosasaurus in a park lagoon."
    },
    {
        id: "indoraptor",
        name: "Indoraptor",
        species: "Indoraptor (fictional hybrid)",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Carnivore",
        type: "Hybrid",
        length: "7.3 M",
        height: "3.1 M",
        weight: "1,100 KG",
        era: "Modern Synthetic",
        image: "assets/images/dinosaurs/indoraptor.webp",
        description: "A fictional InGen hybrid introduced as a weapons prototype in Jurassic World: Fallen Kingdom. It has no fossil record or natural population."
    },
    {
        id: "stygimoloch",
        name: "Stygimoloch",
        species: "Stygimoloch spinifer",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Herbivore",
        length: "3.0 M",
        height: "1.0 M",
        weight: "80 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/stygimoloch.webp",
        description: "A dome-headed pachycephalosaur from Late Cretaceous North America. Whether it is a distinct genus or a growth stage of Pachycephalosaurus is debated."
    },
    {
        id: "giganotosaurus",
        name: "Giganotosaurus",
        species: "Giganotosaurus carolinii",
        movie: "Jurassic World: Dominion",
        diet: "Carnivore",
        length: "13.0 M",
        height: "4.8 M",
        weight: "8,500 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/giganotosaurus.webp",
        description: "A giant carcharodontosaurid theropod known from fossils in Argentina. It is among the largest theropods known, though exact size comparisons are uncertain."
    },
    {
        id: "pyroraptor",
        name: "Pyroraptor",
        species: "Pyroraptor olympius",
        movie: "Jurassic World: Dominion",
        diet: "Carnivore",
        length: "2.5 M",
        height: "1.2 M",
        weight: "35 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/pyroraptor.webp",
        description: "A dromaeosaurid from Late Cretaceous France, known from limited fossil material. Its cold-weather and underwater behavior in Dominion is fictional."
    },
    {
        id: "therizinosaurus",
        name: "Therizinosaurus",
        species: "Therizinosaurus cheloniformis",
        movie: "Jurassic World: Dominion",
        diet: "Herbivore",
        length: "10.0 M",
        height: "5.0 M",
        weight: "5,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/therizinosaurus.webp",
        description: "A Late Cretaceous therizinosaur from Mongolia, recognized by enormous hand claws. It is generally considered plant-eating; some details of its diet remain uncertain."
    },
    {
        id: "quetzalcoatlus",
        name: "Quetzalcoatlus",
        species: "Quetzalcoatlus northropi",
        movie: "Jurassic World: Dominion",
        diet: "Carnivore",
        length: "11.0 M (Wingspan)",
        height: "5.0 M",
        weight: "250 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/quetzalcoatlus.webp",
        description: "A giant azhdarchid pterosaur from Late Cretaceous Texas, not a dinosaur. Its flight and feeding behavior remain subjects of research."
    },
    {
        id: "baryonyx",
        name: "Baryonyx",
        species: "Baryonyx walkeri",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Piscivore",
        length: "8.0 M",
        height: "2.5 M",
        weight: "1,700 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/baryonyx.webp",
        description: "An Early Cretaceous spinosaurid from England. Its long snout, conical teeth, and fossil evidence support a diet that included fish."
    },
    {
        id: "allosaurus",
        name: "Allosaurus",
        species: "Allosaurus fragilis",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Carnivore",
        length: "9.0 M",
        height: "3.0 M",
        weight: "2,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/allosaurus.webp",
        description: "A large Late Jurassic theropod from North America with a strong skull, sharp teeth, and short ridges above the eyes."
    },
    {
        id: "carnotaurus",
        name: "Carnotaurus",
        species: "Carnotaurus sastrei",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Carnivore",
        length: "8.0 M",
        height: "3.0 M",
        weight: "1,500 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/carnotaurus.webp",
        description: "A Late Cretaceous abelisaurid from Argentina, recognized by paired brow horns, very short forelimbs, and rare fossil skin impressions."
    },
    {
        id: "sinoceratops",
        name: "Sinoceratops",
        species: "Sinoceratops zhuchengensis",
        movie: "Jurassic World: Fallen Kingdom",
        diet: "Herbivore",
        length: "7.0 M",
        height: "2.4 M",
        weight: "2,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/sinoceratops.webp",
        description: "A large ceratopsid from Late Cretaceous China, known for its broad frill and distinctive skull ornaments."
    },
    {
        id: "dimetrodon",
        name: "Dimetrodon",
        species: "Dimetrodon limbatus",
        movie: "Jurassic World: Dominion",
        diet: "Carnivore",
        length: "3.5 M",
        height: "1.8 M",
        weight: "250 KG",
        era: "Early Permian",
        image: "assets/images/dinosaurs/dimetrodon.webp",
        description: "An Early Permian synapsid, not a dinosaur. Its tall back sail was supported by elongated vertebrae; the amber-mine setting in Dominion is fictional."
    }
];

// Add a video URL for a specimen when one is available.
const specimenVideoFiles = {
    "tyrannosaurus-rex": "https://www.youtube.com/watch?v=VkZ_IawaGUk",
    "velociraptor": "https://www.youtube.com/watch?v=TfEH--TJ_fY",
    "brachiosaurus": "https://www.youtube.com/watch?v=-NDhuQOLK9g&pp=0gcJCRAIAYcqIYzv",
    "triceratops": "https://www.youtube.com/watch?v=4x7iJ4jQEg8",
    "dilophosaurus": "https://www.youtube.com/watch?v=EQkJQDEyOmc&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=17",
    "stegosaurus": "https://www.youtube.com/watch?v=7Dsxe1qJW_o&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=4",
    "spinosaurus": "https://www.youtube.com/watch?v=VpUUpKPkpE0&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=18",
    "pteranodon": "https://www.youtube.com/watch?v=TfEH--TJ_fY",
    "ankylosaurus": "https://www.youtube.com/watch?v=Ij4beUU3pUU&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=3",
    "ceratosaurus": "https://www.youtube.com/watch?v=xiPnWypUeU8&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=2",
    "indominus-rex": "https://www.youtube.com/watch?v=74LntABT9Ug&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=23",
    "mosasaurus": "https://www.youtube.com/watch?v=g9DJRY9iM2c",
    "indoraptor": "https://www.youtube.com/watch?v=Itb3bwH2o5s&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=29",
    "stygimoloch": "https://www.youtube.com/watch?v=qo84nLHYwMY&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=28",
    "giganotosaurus": "https://www.youtube.com/results?search_query=Giganotosaurus",
    "pyroraptor": "https://www.youtube.com/watch?v=AJXxjzBw5x0",
    "therizinosaurus": "https://www.youtube.com/watch?v=3UCNT7voFJI",
    "quetzalcoatlus": "https://www.youtube.com/watch?v=8N5ZAWEW2JE",
    "baryonyx": "https://www.youtube.com/watch?v=e5e54i_PzBw&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=25",
    "allosaurus": "https://www.youtube.com/watch?v=mwDUYvXwFt8&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=24",
    "carnotaurus": "https://www.youtube.com/watch?v=5fYKchogJYk&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=26",
    "sinoceratops": "https://www.youtube.com/watch?v=-tMDyNvUeQQ&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=27",
    "gallimimus": "https://www.youtube.com/watch?v=B1_944p9epo&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=7",
    "parasaurolophus": "https://www.youtube.com/watch?v=EkS0QENSZ-E&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=8",
    "pachycephalosaurus": "https://www.youtube.com/watch?v=gljdEz9yuuk&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=11",
    "apatosaurus": "https://www.youtube.com/watch?v=ZjIzwW0OB1k&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=14",
    "dimorphodon": "https://www.youtube.com/watch?v=Rhz3wGOSL3A",
    "carcharodontosaurus": "https://www.youtube.com/watch?v=qkKR6LCKaEU&list=PLCbOivu5Z0Vbkfl142hgT2QrPfk-3nFHR",
    "majungasaurus": "https://www.youtube.com/watch?v=xS7Cj55tOJQ&list=PLCbOivu5Z0VZI88w1duotn2G9sMCnZLrS&index=9",
    "troodon": "https://www.youtube.com/watch?v=nFrW9tUZkQM&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=33",
    "scorpios-rex": "https://www.youtube.com/watch?v=cDwmnk6NSpo&list=PLCbOivu5Z0Vbi0tX6HpH_JypDP3lKvL9f&index=9",
    "kentrosaurus": "https://www.youtube.com/watch?v=_kVaqmES3N0&list=PLCbOivu5Z0VaMmROUaf5HcAZLQU94t7Xf&index=16",
    "aquilops": "https://www.youtube.com/watch?v=-Sb_6AuBWag&t=1s",
    "titanosaurus": "https://www.youtube.com/watch?v=yeHPEwD63fU",
    "distortus-rex": "https://www.youtube.com/watch?v=daaIbvb0qJI",
    "mutadon": "https://www.youtube.com/watch?v=5VhGo7LuAR0&t=1s"
};

const specimensWithoutVideo = new Set([
    "dreadnoughtus",
    "corythosaurus",
    "acrocanthosaurus",
    "megalosaurus",
    "deinonychus",
    "suchomimus",
    "iguanodon",
    "monolophosaurus",
    "ouranosaurus",
    "spinoceratops",
    "mamenchisaurus",
    "compsognathus",
    "dimetrodon"
]);

const dinosaurKnowledge = {
    "tyrannosaurus-rex": {
        family: "Tyrannosauridae",
        genus: "Tyrannosaurus",
        diet: "Carnivore",
        classification: "A large, bipedal theropod dinosaur. Tyrannosaurus rex is the species recorded here.",
        range: "T. rex fossils are known from western North America, including present-day Montana, Wyoming, the Dakotas, and Alberta. In the Jurassic Park story, InGen's cloned animals lived on Isla Nublar; that island is fictional.",
        period: "Late Cretaceous, approximately 68 to 66 million years ago.",
        dietAnswer: "T. rex was a carnivore and likely preyed on large herbivorous dinosaurs, while also scavenging when opportunities arose. Fossils can reveal feeding traces, but they cannot tell us the exact diet of every individual.",
        history: "Tyrannosaurus rex lived near the end of the Cretaceous Period, and the species was named in 1905. Its powerful jaws, large teeth, and strong hind limbs made it one of the best-known large theropods. The Jurassic Park franchise reimagines it as a flagship InGen clone on Isla Nublar.",
        movieAnswer: "The specimen is featured in Jurassic Park (1993), where it escapes during the park's power failure. T. rex also appears in later films, but the animal in the franchise is a fictional clone rather than a real fossil individual."
    },
    "velociraptor": {
        family: "Dromaeosauridae",
        genus: "Velociraptor",
        diet: "Carnivore",
        classification: "A small dromaeosaurid theropod dinosaur. The movie versions are much larger than the fossil animal and are not an exact depiction of the real genus.",
        range: "Velociraptor fossils are best known from Late Cretaceous deposits in Mongolia, including the Gobi Desert. In the films, InGen populations are kept on Isla Nublar and Isla Sorna.",
        period: "Late Cretaceous, approximately 75 to 71 million years ago.",
        dietAnswer: "Velociraptor was a carnivore that likely hunted small animals and may have scavenged. Fossils show that close relatives had feathers; coordinated pack hunting, as shown in the movies, is not firmly established by fossil evidence.",
        history: "The real Velociraptor was a relatively small, feathered predator from Mongolia. A famous fossil association preserves a Velociraptor and a Protoceratops locked together, providing evidence of a predator-prey encounter. The Jurassic Park films greatly enlarge the animal and give it behaviors created for the story.",
        movieAnswer: "Velociraptors are central to Jurassic Park (1993) and recur throughout the film series. Their size, appearance, and pack behavior are cinematic inventions based loosely on dromaeosaurid dinosaurs."
    },
    "brachiosaurus": {
        family: "Brachiosauridae",
        genus: "Brachiosaurus",
        diet: "Herbivore",
        classification: "A long-necked sauropod dinosaur with forelimbs longer than its hind limbs.",
        range: "Brachiosaurus altithorax fossils are known from the Morrison Formation in western North America, especially Colorado. The Jurassic Park herd on Isla Nublar is fictional.",
        period: "Late Jurassic, approximately 154 to 150 million years ago.",
        dietAnswer: "Brachiosaurus was a plant-eater. Its tall shoulders and long neck helped it reach vegetation at different heights, although its precise feeding range and preferred plants remain estimates.",
        history: "Brachiosaurus lived during the Late Jurassic and was named from fossils discovered in the western United States. Its unusually long forelimbs gave it a high-shouldered profile unlike many other sauropods. Its first on-screen reveal in Jurassic Park (1993) became one of the franchise's best-known moments.",
        movieAnswer: "Brachiosaurus appears in Jurassic Park (1993) and later franchise entries. The films portray InGen herds on Isla Nublar, while the real animal is known from North American fossils."
    },
    "triceratops": {
        family: "Ceratopsidae",
        genus: "Triceratops",
        diet: "Herbivore",
        classification: "A horned ceratopsian dinosaur with a large bony frill.",
        range: "Triceratops fossils are found across western North America, especially in Late Cretaceous deposits in the United States and Canada. In the films, InGen keeps a sick animal in the Jurassic Park paddock on Isla Nublar.",
        period: "Late Cretaceous, approximately 68 to 66 million years ago.",
        dietAnswer: "Triceratops was a herbivore that cropped low-growing plants with its beak and rows of teeth. Its horns and frill may have helped with defense, display, or recognition, but their exact functions are still discussed.",
        history: "Triceratops lived near the end of the Cretaceous Period and is recognized by its three facial horns and broad frill. Many fossils have been found in western North America, making it one of the best-known ceratopsians. The sick Triceratops in Jurassic Park (1993) introduces visitors to the park's living animals.",
        movieAnswer: "Triceratops appears in Jurassic Park (1993) and other franchise installments. The sick animal encountered by the visitors is part of the fictional Isla Nublar park population."
    },
    "dilophosaurus": {
        family: "Dilophosauridae",
        genus: "Dilophosaurus",
        diet: "Carnivore",
        classification: "An early theropod dinosaur distinguished by a pair of crests on its skull.",
        range: "Dilophosaurus fossils are known from the Kayenta Formation in Arizona, in the southwestern United States. The Isla Nublar animal in the films is a fictional InGen clone.",
        period: "Early Jurassic, approximately 193 million years ago.",
        dietAnswer: "Dilophosaurus was a carnivore. Its teeth and body shape indicate a meat-eating theropod, but the exact prey it hunted is not known.",
        history: "Dilophosaurus lived in North America during the Early Jurassic and is named for the two crests on its skull. The real fossil animal did not have the retractable neck frill or venom-spitting ability shown in Jurassic Park; those traits were invented for the film.",
        movieAnswer: "Dilophosaurus has a memorable scene in Jurassic Park (1993). The movie's small size, neck frill, and venom are fictional additions, not facts established by its fossils."
    },
    "stegosaurus": {
        family: "Stegosauridae",
        genus: "Stegosaurus",
        diet: "Herbivore",
        classification: "An armored ornithischian dinosaur with paired plates along its back and spikes on its tail.",
        range: "Stegosaurus stenops fossils are common in the Morrison Formation of western North America. The herds shown in The Lost World live on the fictional Isla Sorna.",
        period: "Late Jurassic, approximately 155 to 150 million years ago.",
        dietAnswer: "Stegosaurus was a herbivore that fed on plants. Its relatively low head suggests it browsed vegetation near the ground, though its exact menu is uncertain.",
        history: "Stegosaurus lived in western North America during the Late Jurassic. Its back plates and spiked tail, commonly called a thagomizer, make it one of the most recognizable armored dinosaurs. The species is shown in The Lost World: Jurassic Park (1997).",
        movieAnswer: "Stegosaurus appears in The Lost World: Jurassic Park (1997), where a herd is encountered on Isla Sorna. The film draws on its real plates and tail spikes but places the animals in a fictional island ecosystem."
    },
    "mamenchisaurus": {
        family: "Mamenchisauridae",
        genus: "Mamenchisaurus",
        diet: "Herbivore",
        classification: "A sauropod dinosaur known for its exceptionally long neck.",
        range: "Mamenchisaurus fossils are known from China. In The Lost World, the InGen herd is shown on Isla Sorna, a fictional island.",
        period: "Jurassic Period; the exact age depends on the Mamenchisaurus species and fossil deposit.",
        dietAnswer: "Mamenchisaurus was a herbivore and likely fed on plants using its long neck to reach a broad feeding area. Its body size required a large amount of vegetation.",
        history: "Mamenchisaurus is a long-necked sauropod known from Jurassic rocks in China. Some species had an especially high number of neck vertebrae, giving them an unusually long neck. The Lost World: Jurassic Park (1997) depicts a herd roaming Isla Sorna.",
        movieAnswer: "Mamenchisaurus appears in The Lost World: Jurassic Park (1997). The movie's animals are fictional clones; the real genus is known from fossils found in China."
    },
    "compsognathus": {
        family: "Compsognathidae",
        genus: "Compsognathus",
        diet: "Carnivore",
        classification: "A small, lightly built theropod dinosaur; the species name used in this record is Compsognathus longipes.",
        range: "Compsognathus fossils are known from Late Jurassic deposits in Germany and France. The film's populations live on Isla Sorna.",
        period: "Late Jurassic, approximately 150 million years ago.",
        dietAnswer: "Compsognathus was a small carnivore. Fossil evidence, including preserved stomach contents in some specimens, points to a diet of small animals such as lizards.",
        history: "Compsognathus lived in Europe during the Late Jurassic and is known from unusually well-preserved fossils. Its small body made it one of the smallest non-avian dinosaurs known from good fossil material. The coordinated swarms and nickname 'Compies' in The Lost World are fictional portrayals.",
        movieAnswer: "Compsognathus is featured in The Lost World: Jurassic Park (1997), where the tiny animals attack in groups. Their real size is small, but the movie's swarm behavior is dramatized."
    },
    "spinosaurus": {
        family: "Spinosauridae",
        genus: "Spinosaurus",
        diet: "Piscivore",
        classification: "A spinosaurid theropod with adaptations associated with life in and around water.",
        range: "Spinosaurus fossils are known from North Africa, including Egypt and Morocco. The Jurassic Park III animal is a fictional InGen clone kept on Isla Sorna.",
        period: "Middle Cretaceous, approximately 100 to 94 million years ago.",
        dietAnswer: "Spinosaurus was a fish-eating predator, although its diet may also have included other prey. Its long, narrow jaws, conical teeth, and fossil evidence from aquatic environments support a strong association with water.",
        history: "Spinosaurus lived in North Africa during the Cretaceous Period. It had a long snout and a prominent sail-like structure on its back; later fossil discoveries have strengthened evidence for semi-aquatic habits. The exceptionally aggressive animal in Jurassic Park III (2001) is a fictional version.",
        movieAnswer: "Spinosaurus is a major threat in Jurassic Park III (2001), set on Isla Sorna. Its portrayal as a giant island predator is fictional and should not be treated as a direct record of the real species."
    },
    "pteranodon": {
        family: "Pteranodontidae",
        genus: "Pteranodon",
        diet: "Carnivore",
        classification: "A flying pterosaur, not a dinosaur. It had a toothless beak and a large head crest.",
        range: "Pteranodon fossils are known from central North America around the ancient Western Interior Seaway. In Jurassic Park III, InGen keeps the animals in an aviary on Isla Sorna.",
        period: "Late Cretaceous, approximately 86 to 84 million years ago.",
        dietAnswer: "Pteranodon was a carnivore that likely fed mainly on fish and other marine prey. It was a specialized fish-eater, while carnivore is the broader diet category used in this archive.",
        history: "Pteranodon lived near the Western Interior Seaway during the Late Cretaceous. Despite appearing alongside dinosaurs, it was a pterosaur, a separate group of flying reptiles, and not a dinosaur. The aviary sequence in Jurassic Park III (2001) is a fictional park incident.",
        movieAnswer: "Pteranodons appear in Jurassic Park III (2001) and several later films. They are flying reptiles rather than dinosaurs, and the aviary escape is part of the fictional InGen story."
    },
    "ankylosaurus": {
        family: "Ankylosauridae",
        genus: "Ankylosaurus",
        diet: "Herbivore",
        classification: "A heavily armored ornithischian dinosaur with a bony tail club.",
        range: "Ankylosaurus fossils are known from western North America, including the United States and Canada. In the films, InGen populations are kept on Isla Sorna and Isla Nublar.",
        period: "Late Cretaceous, approximately 68 to 66 million years ago.",
        dietAnswer: "Ankylosaurus was a herbivore that fed on low-growing plants. Its low body and broad muzzle were suited to browsing near the ground.",
        history: "Ankylosaurus lived near the end of the Cretaceous Period. Its body was covered in bony armor, and its tail ended in a powerful club that could deter predators. The Jurassic franchise presents it as a defensive, heavily armored park animal.",
        movieAnswer: "Ankylosaurus is shown in Jurassic Park III (2001) and later Jurassic World films. The movies place InGen herds on fictional islands, while the real fossils come from North America."
    },
    "ceratosaurus": {
        family: "Ceratosauridae",
        genus: "Ceratosaurus",
        diet: "Carnivore",
        classification: "A theropod dinosaur with a prominent nasal horn and smaller horn-like crests above the eyes.",
        range: "Ceratosaurus fossils are best known from the Morrison Formation in western North America, with additional finds elsewhere. In Jurassic Park III, the fictional InGen specimen lives on Isla Sorna.",
        period: "Late Jurassic, approximately 153 to 148 million years ago.",
        dietAnswer: "Ceratosaurus was a carnivore with sharp teeth for eating other animals. Its exact prey varied by habitat and is not known for every fossil individual.",
        history: "Ceratosaurus lived during the Late Jurassic and shared its environment with other large theropods. Its nasal horn and distinctive skull help identify it in the fossil record. Its brief appearance in Jurassic Park III (2001) is set on Isla Sorna.",
        movieAnswer: "Ceratosaurus has a brief appearance in Jurassic Park III (2001). The scene uses the species as an InGen animal on Isla Sorna, a fictional setting."
    },
    "indominus-rex": {
        family: "Hybrid (fictional)",
        genus: "Indominus (fictional)",
        diet: "Carnivore",
        classification: "A fictional genetically engineered hybrid created by InGen; it has no natural species or fossil classification.",
        range: "There is no fossil range because Indominus rex is fictional. In Jurassic World, it is created and held at the park on Isla Nublar.",
        period: "Modern fictional creation; it does not belong to a geologic period.",
        dietAnswer: "The fictional Indominus is portrayed as a carnivorous predator. Its engineered traits and behavior belong to the Jurassic World story, not to a real animal species.",
        history: "Indominus rex was created by InGen as a new attraction for Jurassic World. Its disclosed genetic sources include Tyrannosaurus rex, Velociraptor, cuttlefish, and tree frog, while the complete recipe remains unknown. The hybrid escapes its enclosure, driving the evacuation and destruction of the park.",
        movieAnswer: "Indominus rex is the central antagonist of Jurassic World (2015). It is an invented hybrid and has no real-world fossils, native range, or scientific species record."
    },
    "mosasaurus": {
        family: "Mosasauridae",
        genus: "Mosasaurus",
        diet: "Carnivore",
        classification: "A large marine reptile from Mosasauria, not a dinosaur and not a marine mammal.",
        range: "Mosasaurus fossils have been found in marine deposits across several regions. Mosasaurus hoffmannii is associated with the Maastricht area of the Netherlands and other Late Cretaceous seas; the Jurassic World lagoon on Isla Nublar is fictional.",
        period: "Late Cretaceous, approximately 82 to 66 million years ago.",
        dietAnswer: "Mosasaurus was a carnivorous marine predator that ate fish and other animals in the sea. The exact menu depended on prey available in its marine environment.",
        history: "Mosasaurus was a marine reptile that lived during the Late Cretaceous, long after dinosaurs had become dominant on land. It was not a dinosaur; its name is linked to fossils found near the Meuse River in the Netherlands. Jurassic World depicts a cloned Mosasaurus living in a park lagoon.",
        movieAnswer: "Mosasaurus appears in Jurassic World (2015) as the lagoon's headline animal and returns in later films. The lagoon performances and park setting are fictional; Mosasaurus itself was a real marine reptile."
    },
    "indoraptor": {
        family: "Hybrid (fictional)",
        genus: "Indoraptor (fictional)",
        diet: "Carnivore",
        classification: "A fictional genetically engineered hybrid and weapons prototype; it is not a naturally occurring species.",
        range: "Indoraptor has no natural habitat or fossil range. In Jurassic World: Fallen Kingdom, it is developed and held at Lockwood Manor in California.",
        period: "Modern fictional creation; it does not belong to a geologic period.",
        dietAnswer: "The fictional Indoraptor is portrayed as a carnivorous predator. Its tracking and attack behaviors are engineered story elements rather than observations of a real species.",
        history: "Indoraptor is a prototype hybrid developed from Indominus rex and Velociraptor genetic material for use as a weapon in Jurassic World: Fallen Kingdom. The story follows its sale at an illegal auction at Lockwood Manor and its escape from the estate. No fossil animal or naturally occurring genus named Indoraptor exists.",
        movieAnswer: "Indoraptor is the principal threat in Jurassic World: Fallen Kingdom (2018). It is a fictional hybrid and has no real fossil history or natural habitat."
    },
    "stygimoloch": {
        family: "Pachycephalosauridae",
        genus: "Stygimoloch",
        diet: "Herbivore (likely)",
        classification: "A dome-headed pachycephalosaur. Whether Stygimoloch is a distinct genus or a growth stage of Pachycephalosaurus remains debated.",
        range: "Fossils assigned to Stygimoloch are known from western North America, including Late Cretaceous deposits in the United States. The Fallen Kingdom animal lives on fictional Isla Nublar.",
        period: "Late Cretaceous, approximately 68 to 66 million years ago.",
        dietAnswer: "Stygimoloch is generally presented as a plant-eater, but its exact diet is not well established. The animal's classification is also debated, with some researchers suggesting the fossils represent a juvenile Pachycephalosaurus.",
        history: "Stygimoloch is known from a thick, domed skull with prominent spikes. Its status as a separate genus is disputed, and some studies interpret it as a young Pachycephalosaurus. The Jurassic World films use it as an energetic herbivore on Isla Nublar.",
        movieAnswer: "Stygimoloch appears in Jurassic World: Fallen Kingdom (2018), where it breaks through barriers with its domed skull. Its exact biological classification remains debated in real paleontology."
    },
    "giganotosaurus": {
        family: "Carcharodontosauridae",
        genus: "Giganotosaurus",
        diet: "Carnivore",
        classification: "A giant carcharodontosaurid theropod dinosaur.",
        range: "Giganotosaurus fossils were found in Patagonia, Argentina. In Jurassic World: Dominion, the fictional specimen is kept at the Biosyn sanctuary.",
        period: "Cenomanian Age of the Late Cretaceous, approximately 99 to 96 million years ago.",
        dietAnswer: "Giganotosaurus was a carnivore and likely hunted large herbivorous dinosaurs. Its size and teeth indicate a powerful predator, though specific hunting behavior cannot be determined with certainty from fossils alone.",
        history: "Giganotosaurus lived in what is now Argentina during the Cretaceous Period. A major fossil was discovered in Patagonia and the genus was described in 1995. It is among the largest known theropods, although size comparisons with other giants depend on incomplete fossils.",
        movieAnswer: "Giganotosaurus features in Jurassic World: Dominion (2022) as a major predator at the Biosyn sanctuary. The animal is a fictional clone; the real species is known from fossils in Argentina."
    },
    "pyroraptor": {
        family: "Dromaeosauridae",
        genus: "Pyroraptor",
        diet: "Carnivore",
        classification: "A dromaeosaurid theropod dinosaur; its fossil record is limited.",
        range: "Pyroraptor fossils were found in Provence in southeastern France. Jurassic World: Dominion places a fictional Biosyn specimen in a snowy habitat.",
        period: "Late Cretaceous, approximately 70 million years ago.",
        dietAnswer: "Pyroraptor was a small carnivore and likely fed on smaller animals. Because its fossils are fragmentary, details of its hunting methods and exact prey remain uncertain.",
        history: "Pyroraptor is known from limited fossils discovered in France and was named in 2000. Its name refers to the circumstances of the fossil discovery, not to a proven ability to control fire. The feathered animal swimming beneath ice in Dominion is a cinematic interpretation.",
        movieAnswer: "Pyroraptor appears in Jurassic World: Dominion (2022), including a sequence in a frozen lake. Its screen appearance adds details that cannot be confirmed from the small amount of fossil material."
    },
    "therizinosaurus": {
        family: "Therizinosauridae",
        genus: "Therizinosaurus",
        diet: "Herbivore (likely)",
        classification: "A theropod dinosaur from the unusual therizinosaur group, with enormous hand claws.",
        range: "Therizinosaurus fossils are known from Mongolia. In Jurassic World: Dominion, a fictional specimen lives at the Biosyn sanctuary.",
        period: "Late Cretaceous, approximately 70 million years ago.",
        dietAnswer: "Therizinosaurus is generally considered a herbivore or plant-focused omnivore. Its beaked mouth, long neck, and relatives' anatomy support plant feeding, while the exact purpose of its claws is still studied.",
        history: "Therizinosaurus lived in Mongolia during the Late Cretaceous and is famous for its exceptionally long hand claws. Although it belongs to theropods, the group includes plant-eating forms, so its body plan differs greatly from typical meat-eating theropods. Dominion portrays it as a solitary animal at Biosyn.",
        movieAnswer: "Therizinosaurus appears in Jurassic World: Dominion (2022) at the Biosyn sanctuary. Its long claws are real anatomical inspiration, while its behavior in the film is fictional."
    },
    "quetzalcoatlus": {
        family: "Azhdarchidae",
        genus: "Quetzalcoatlus",
        diet: "Carnivore (likely)",
        classification: "A giant azhdarchid pterosaur, not a dinosaur. Its exact feeding and flight behavior remain subjects of research.",
        range: "Quetzalcoatlus fossils are known from Texas in the United States. In Jurassic World: Dominion, the fictional animal is part of the Biosyn sanctuary.",
        period: "Late Cretaceous, approximately 72 to 66 million years ago.",
        dietAnswer: "Quetzalcoatlus likely ate small animals or other available prey, but its diet is debated. Scientists have proposed both ground-foraging and other feeding strategies based on its anatomy.",
        history: "Quetzalcoatlus lived in North America near the end of the Cretaceous Period and was one of the largest known pterosaurs. It was a flying reptile, not a dinosaur. Its size has prompted ongoing discussion about how it launched, walked, and flew.",
        movieAnswer: "Quetzalcoatlus appears in Jurassic World: Dominion (2022), including an attack on an aircraft. It is a pterosaur, not a dinosaur, and the film's action is fictional."
    },
    "baryonyx": {
        family: "Spinosauridae",
        genus: "Baryonyx",
        diet: "Piscivore",
        classification: "A spinosaurid theropod with a long snout, conical teeth, and a large claw on each hand.",
        range: "Baryonyx fossils are known from England in the United Kingdom. The Jurassic World animals are fictional InGen clones kept on the islands and at its facilities.",
        period: "Early Cretaceous, approximately 130 to 125 million years ago.",
        dietAnswer: "Baryonyx was a fish-eating predator, as suggested by its long snout, conical teeth, and fossil evidence associated with fish scales. It may also have taken other prey when available.",
        history: "A major Baryonyx skeleton was discovered in England in 1983 by fossil collector William Walker and later studied by scientists. Its anatomy is well suited to catching fish, linking it with other spinosaurids. Jurassic World uses the name for a fictional InGen animal.",
        movieAnswer: "Baryonyx appears in Jurassic World: Fallen Kingdom (2018) and related franchise material. The films place an InGen clone in the park's evacuation story; the real fossils come from England."
    },
    "allosaurus": {
        family: "Allosauridae",
        genus: "Allosaurus",
        diet: "Carnivore",
        classification: "A large Late Jurassic theropod dinosaur with a lightweight skull and sharp teeth.",
        range: "Allosaurus fossils are especially common in the Morrison Formation of western North America. The franchise depicts InGen animals in its parks and facilities.",
        period: "Late Jurassic, approximately 155 to 145 million years ago.",
        dietAnswer: "Allosaurus was a carnivore that hunted other dinosaurs and animals. Its teeth and skull are adapted for feeding on meat, but the exact hunting strategy is still interpreted from fossils.",
        history: "Allosaurus was one of the major predators of the Late Jurassic and is represented by many fossils from the Morrison Formation. It had a large skull, sharp teeth, and short horns above the eyes. The genus appears in Jurassic World franchise records as an InGen animal.",
        movieAnswer: "Allosaurus appears in Jurassic World: Fallen Kingdom (2018) and Jurassic World: Dominion (2022). Its park and sanctuary appearances are fictional additions to the real fossil record."
    },
    "carnotaurus": {
        family: "Abelisauridae",
        genus: "Carnotaurus",
        diet: "Carnivore",
        classification: "A South American theropod with two blunt brow horns and unusually small forelimbs.",
        range: "Carnotaurus fossils were found in Patagonia, Argentina. In Fallen Kingdom, the fictional InGen animal is on Isla Nublar during the volcanic evacuation.",
        period: "Late Cretaceous, approximately 72 to 69 million years ago.",
        dietAnswer: "Carnotaurus was a carnivore. Its skull and teeth indicate meat eating, while the exact prey and hunting behavior remain uncertain.",
        history: "Carnotaurus lived in South America during the Late Cretaceous. Its most distinctive features are the paired horns above its eyes, very short arms, and rare fossil skin impressions. The franchise places a cloned Carnotaurus on Isla Nublar.",
        movieAnswer: "Carnotaurus appears in Jurassic World: Fallen Kingdom (2018) and later films. Its role as an InGen clone during the Isla Nublar evacuation is part of the fictional story."
    },
    "sinoceratops": {
        family: "Ceratopsidae",
        genus: "Sinoceratops",
        diet: "Herbivore",
        classification: "A horned ceratopsian dinosaur and one of the known large ceratopsids from Asia.",
        range: "Sinoceratops fossils were found in Shandong Province, China. The Jurassic World animals are fictional InGen clones.",
        period: "Late Cretaceous, approximately 73 to 66 million years ago.",
        dietAnswer: "Sinoceratops was a herbivore that cropped plants with its beak and dental batteries. Its frill and horns may have been used for display, recognition, or defense.",
        history: "Sinoceratops lived in China during the Late Cretaceous and was described from fossils discovered in Shandong. Its large frill and horn-like ornaments distinguish it from many other Asian ceratopsians. The Jurassic World films include it among the park animals.",
        movieAnswer: "Sinoceratops appears in Jurassic World: Fallen Kingdom (2018) and Jurassic World: Dominion (2022). Its appearance in the films is a fictional clone based on a real genus known from China."
    },
    "dimetrodon": {
        family: "Sphenacodontidae",
        genus: "Dimetrodon",
        diet: "Carnivore",
        classification: "A synapsid, not a dinosaur. It lived tens of millions of years before the first dinosaurs.",
        range: "Dimetrodon fossils are known from Permian deposits in North America, including Texas and nearby regions. Its appearance in Jurassic World: Dominion is a fictional Biosyn clone.",
        period: "Early Permian, approximately 295 to 272 million years ago.",
        dietAnswer: "Dimetrodon was a carnivore that likely ate fish and other vertebrates. Its long teeth and powerful jaws were suited to catching and consuming prey.",
        history: "Dimetrodon lived during the Permian Period, long before dinosaurs appeared. Its tall back sail was supported by elongated vertebrae; proposed functions include temperature regulation or display, but its exact role is not settled. Despite its familiar dinosaur-like silhouette, Dimetrodon is a synapsid.",
        movieAnswer: "Dimetrodon is shown in Jurassic World: Dominion (2022) at the Biosyn facility. In reality it lived long before dinosaurs and is not a dinosaur; the movie's cloned version is fictional."
    }
};

const franchiseExpansion = [
    {
        id: "gallimimus",
        name: "Gallimimus",
        species: "Gallimimus bullatus",
        movie: "Jurassic Park",
        diet: "Herbivore",
        length: "6.0 M",
        height: "1.9 M",
        weight: "440 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/gallimimus.webp",
        description: "A fast-running ornithomimosaur from Late Cretaceous Mongolia. Gallimimus appears in the Jurassic Park stampede scene.",
        knowledge: {
            family: "Ornithomimidae",
            genus: "Gallimimus",
            diet: "Herbivore",
            classification: "A long-legged ornithomimosaur, often called an ostrich-mimic dinosaur.",
            range: "Gallimimus fossils are known from the Nemegt Formation in Mongolia, including the Gobi Desert.",
            period: "Late Cretaceous, approximately 70 million years ago.",
            dietAnswer: "Gallimimus is commonly reconstructed as feeding on plants and small animals; its exact diet remains uncertain.",
            history: "Gallimimus lived in what is now Mongolia and had long legs, a light build, and a toothless beak. Its name means “chicken mimic.” The stampeding herd in Jurassic Park is a fictional depiction of cloned animals.",
            movieAnswer: "Gallimimus appears in Jurassic Park (1993) during the herd stampede. Its fossil record comes from Mongolia, not the fictional Isla Nublar."
        }
    },
    {
        id: "parasaurolophus",
        name: "Parasaurolophus",
        species: "Parasaurolophus walkeri",
        movie: "The Lost World: Jurassic Park",
        diet: "Herbivore",
        length: "9.5 M",
        height: "4.0 M",
        weight: "3,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/parasaurolophus.webp",
        description: "A hadrosaurid recognized by its long, backward-curving head crest.",
        knowledge: {
            family: "Hadrosauridae",
            genus: "Parasaurolophus",
            diet: "Herbivore",
            classification: "A crested, duck-billed ornithopod dinosaur.",
            range: "Parasaurolophus fossils are known from western North America, including Alberta, New Mexico, and Utah.",
            period: "Late Cretaceous, approximately 76 to 73 million years ago.",
            dietAnswer: "It was a plant-eater with a beak and rows of replacement teeth suited to processing vegetation.",
            history: "Parasaurolophus lived in western North America and is named for its distinctive hollow cranial crest. The crest may have helped produce or amplify sounds, though its exact roles are studied through skull anatomy. It is included among the dinosaurs shown in The Lost World.",
            movieAnswer: "Parasaurolophus is seen in The Lost World: Jurassic Park (1997) and later franchise material. The cloned herds and Isla Sorna setting are fictional."
        }
    },
    {
        id: "pachycephalosaurus",
        name: "Pachycephalosaurus",
        species: "Pachycephalosaurus wyomingensis",
        movie: "The Lost World: Jurassic Park",
        diet: "Herbivore",
        length: "4.5 M",
        height: "1.8 M",
        weight: "450 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/pachycephalosaurus.webp",
        description: "A bipedal pachycephalosaur with a thick, domed skull.",
        knowledge: {
            family: "Pachycephalosauridae",
            genus: "Pachycephalosaurus",
            diet: "Herbivore",
            classification: "A bipedal, thick-skulled ornithischian dinosaur.",
            range: "Fossils are known from western North America, especially Montana, South Dakota, and Wyoming.",
            period: "Late Cretaceous, approximately 70 to 66 million years ago.",
            dietAnswer: "It was likely a plant-eater or omnivore; its teeth suggest a varied diet, and the details are not fully settled.",
            history: "Pachycephalosaurus lived near the end of the Cretaceous. Its thick skull dome is its best-known feature; the idea that individuals routinely rammed one another is debated. A related dome-headed animal is shown in The Lost World.",
            movieAnswer: "Pachycephalosaur-like animals appear in The Lost World: Jurassic Park (1997). The movie's animals are fictional clones, and Stygimoloch is also part of this closely related group."
        }
    },
    {
        id: "apatosaurus",
        name: "Apatosaurus",
        species: "Apatosaurus ajax",
        movie: "Jurassic World",
        diet: "Herbivore",
        length: "22.0 M",
        height: "4.5 M",
        weight: "22,000 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/apatosaurus.webp",
        description: "A massive sauropod with a long neck and a deep, heavy-built body.",
        knowledge: {
            family: "Diplodocidae",
            genus: "Apatosaurus",
            diet: "Herbivore",
            classification: "A long-necked diplodocid sauropod dinosaur.",
            range: "Apatosaurus fossils are known from the Morrison Formation in the western United States.",
            period: "Late Jurassic, approximately 152 to 151 million years ago.",
            dietAnswer: "Apatosaurus was a plant-eater that fed on vegetation using its long neck and peg-like teeth.",
            history: "Apatosaurus lived in western North America during the Late Jurassic and was named in 1877. Its robust build distinguishes it from some more lightly built diplodocids. Cloned Apatosaurus appear in Jurassic World.",
            movieAnswer: "Apatosaurus appears in Jurassic World (2015). Its real fossils are from Jurassic rocks in North America."
        }
    },
    {
        id: "dimorphodon",
        name: "Dimorphodon",
        species: "Dimorphodon macronyx",
        movie: "Jurassic World",
        diet: "Carnivore",
        length: "1.4 M (Wingspan)",
        height: "0.6 M",
        weight: "2 KG",
        era: "Early Jurassic",
        image: "assets/images/dinosaurs/dimorphodon.webp",
        description: "A small pterosaur with a large head and two distinct tooth shapes; it was a flying reptile, not a dinosaur.",
        knowledge: {
            family: "Dimorphodontidae",
            genus: "Dimorphodon",
            diet: "Carnivore",
            classification: "An early pterosaur, a flying reptile rather than a dinosaur.",
            range: "Dimorphodon fossils are known from Early Jurassic rocks in southern England.",
            period: "Early Jurassic, approximately 190 million years ago.",
            dietAnswer: "Dimorphodon was a predator; small vertebrates and other prey have been proposed, but its exact diet is uncertain.",
            history: "Dimorphodon lived in what is now England and had a large skull with differently shaped teeth. Its proportions differ from those of modern birds. The aggressive swarms in Jurassic World are fictional.",
            movieAnswer: "Dimorphodon appears in Jurassic World (2015), where it attacks visitors. It is a pterosaur, not a dinosaur, and the film's behavior is dramatized."
        }
    },
    {
        id: "dreadnoughtus",
        name: "Dreadnoughtus",
        species: "Dreadnoughtus schrani",
        movie: "Jurassic World: Dominion",
        diet: "Herbivore",
        length: "26.0 M",
        height: "6.0 M",
        weight: "30,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/dreadnoughtus.webp",
        description: "A very large titanosaur sauropod known from fossils in Patagonia.",
        knowledge: {
            family: "Titanosauria",
            genus: "Dreadnoughtus",
            diet: "Herbivore",
            classification: "A giant, long-necked titanosaur sauropod dinosaur.",
            range: "Dreadnoughtus fossils are known from the Cerro Fortaleza Formation in southern Argentina.",
            period: "Late Cretaceous, approximately 76 to 70 million years ago.",
            dietAnswer: "Dreadnoughtus was a plant-eater that fed on vegetation with its long neck and small head.",
            history: "Dreadnoughtus schrani was described in 2014 from a large, relatively well-preserved skeleton in Patagonia. Size estimates remain uncertain because the specimen was still growing. A cloned individual appears at the Biosyn sanctuary in Dominion.",
            movieAnswer: "Dreadnoughtus is among the herbivores shown at Biosyn in Jurassic World: Dominion (2022). Its real fossils come from Argentina."
        }
    },
    {
        id: "corythosaurus",
        name: "Corythosaurus",
        species: "Corythosaurus casuarius",
        movie: "Jurassic Park III",
        diet: "Herbivore",
        length: "9.0 M",
        height: "3.0 M",
        weight: "3,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/corythosaurus.webp",
        description: "A hadrosaurid with a tall, helmet-like crest, shown among the Isla Sorna herd in Jurassic Park III.",
        knowledge: {
            family: "Hadrosauridae",
            genus: "Corythosaurus",
            diet: "Herbivore",
            classification: "A crested duck-billed ornithopod dinosaur.",
            range: "Corythosaurus fossils are known from Alberta, Canada, in western North America.",
            period: "Late Cretaceous, approximately 77 to 75 million years ago.",
            dietAnswer: "Corythosaurus was a plant-eater that cropped vegetation with its beak and processed it with rows of teeth.",
            history: "Corythosaurus lived in western North America and had a hollow, helmet-shaped crest. The crest's internal passages may have resonated with sound, but its exact function is still studied. A herd appears on Isla Sorna in Jurassic Park III.",
            movieAnswer: "Corythosaurus is seen among the herbivore herds in Jurassic Park III (2001). Its real fossils are from Alberta, Canada."
        }
    },
    {
        id: "acrocanthosaurus",
        name: "Acrocanthosaurus",
        species: "Acrocanthosaurus atokensis",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "11.5 M",
        height: "4.0 M",
        weight: "6,000 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/acrocanthosaurus.webp",
        description: "A large theropod with tall neural spines along its back, featured in Jurassic World Evolution.",
        knowledge: {
            family: "Carcharodontosauridae",
            genus: "Acrocanthosaurus",
            diet: "Carnivore",
            classification: "A large carcharodontosaurid theropod dinosaur.",
            range: "Fossils are known from the southern United States, including Oklahoma and Texas.",
            period: "Early Cretaceous, approximately 115 to 110 million years ago.",
            dietAnswer: "It was a large predator that likely hunted other dinosaurs; direct evidence of specific prey is limited.",
            history: "Acrocanthosaurus lived in North America and is named for the tall neural spines on its vertebrae. It is one of the largest known Early Cretaceous theropods. The species is available in Jurassic World Evolution.",
            movieAnswer: "Acrocanthosaurus is featured in the game Jurassic World Evolution, rather than a mainline Jurassic film. Its real fossils come from the Early Cretaceous of North America."
        }
    },
    {
        id: "carcharodontosaurus",
        name: "Carcharodontosaurus",
        species: "Carcharodontosaurus saharicus",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "12.0 M",
        height: "4.0 M",
        weight: "6,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/carcharodontosaurus.webp",
        description: "A giant North African theropod named for its shark-like teeth.",
        knowledge: {
            family: "Carcharodontosauridae",
            genus: "Carcharodontosaurus",
            diet: "Carnivore",
            classification: "A giant carcharodontosaurid theropod dinosaur.",
            range: "Fossils are known from North Africa, including Morocco and Egypt.",
            period: "Late Cretaceous, approximately 100 to 94 million years ago.",
            dietAnswer: "It was a large carnivore and likely preyed on other dinosaurs in its North African ecosystem.",
            history: "Carcharodontosaurus lived in North Africa alongside other large predators, including Spinosaurus. Its name means “shark-toothed lizard,” referring to its blade-like teeth. It is included in Jurassic World Evolution.",
            movieAnswer: "Carcharodontosaurus is available in Jurassic World Evolution. Its fossils are from North Africa, and it is distinct from the fictional Giganotosaurus in Dominion."
        }
    },
    {
        id: "majungasaurus",
        name: "Majungasaurus",
        species: "Majungasaurus crenatissimus",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "7.0 M",
        height: "2.5 M",
        weight: "1,000 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/majungasaurus.webp",
        description: "An abelisaurid theropod from the island of Madagascar.",
        knowledge: {
            family: "Abelisauridae",
            genus: "Majungasaurus",
            diet: "Carnivore",
            classification: "A stocky abelisaurid theropod with a short skull and small forelimbs.",
            range: "Majungasaurus fossils are known from the Maevarano Formation in Madagascar.",
            period: "Late Cretaceous, approximately 70 to 66 million years ago.",
            dietAnswer: "It was a predator; bite marks on fossils show that Majungasaurus sometimes fed on members of its own species, though the circumstances are uncertain.",
            history: "Majungasaurus lived on Madagascar near the end of the Cretaceous. Its skull and limb anatomy identify it as an abelisaurid. Fossil bite marks provide evidence of feeding on conspecifics, but do not prove habitual social cannibalism. The species appears in Jurassic World Evolution.",
            movieAnswer: "Majungasaurus is available in Jurassic World Evolution. Its fossils come from Madagascar and it is not a species featured in the main film series."
        }
    },
    {
        id: "megalosaurus",
        name: "Megalosaurus",
        species: "Megalosaurus bucklandii",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "6.0 M",
        height: "2.0 M",
        weight: "700 KG",
        era: "Middle Jurassic",
        image: "assets/images/dinosaurs/megalosaurus.webp",
        description: "A theropod from England, historically important as the first dinosaur named scientifically.",
        knowledge: {
            family: "Megalosauridae",
            genus: "Megalosaurus",
            diet: "Carnivore",
            classification: "A large-bodied megalosaurid theropod dinosaur.",
            range: "Megalosaurus fossils are known from the Oxfordshire region of England.",
            period: "Middle Jurassic, approximately 166 million years ago.",
            dietAnswer: "Megalosaurus was a carnivore that likely preyed on other animals in its Jurassic ecosystem.",
            history: "Megalosaurus was the first dinosaur genus to be described scientifically, in 1824, although early ideas about its appearance were inaccurate. Better fossil research later established it as a theropod. It is included in Jurassic World Evolution.",
            movieAnswer: "Megalosaurus is available in Jurassic World Evolution. Its historical significance comes from its 1824 scientific description, not from a major film appearance."
        }
    },
    {
        id: "deinonychus",
        name: "Deinonychus",
        species: "Deinonychus antirrhopus",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "3.4 M",
        height: "1.2 M",
        weight: "70 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/deinonychus.webp",
        description: "A dromaeosaurid with a large, curved claw on each hind foot.",
        knowledge: {
            family: "Dromaeosauridae",
            genus: "Deinonychus",
            diet: "Carnivore",
            classification: "A feathered-group dromaeosaurid theropod dinosaur.",
            range: "Deinonychus fossils are known from Montana, Wyoming, and Oklahoma in the United States.",
            period: "Early Cretaceous, approximately 115 to 108 million years ago.",
            dietAnswer: "It was a carnivore with grasping hands and a large recurved claw on each hind foot, likely used in prey capture.",
            history: "Deinonychus was described in 1969, and its anatomy helped change scientific views of dinosaur activity and bird origins. Fossils found with herbivorous prey suggest predator-prey interactions, but do not conclusively establish coordinated pack hunting. It is in Jurassic World Evolution.",
            movieAnswer: "Deinonychus is featured in Jurassic World Evolution. Its real fossils come from Early Cretaceous North America."
        }
    },
    {
        id: "troodon",
        name: "Troodon",
        species: "Troodon formosus (historical assignment)",
        movie: "Jurassic World Evolution",
        diet: "Carnivore",
        length: "2.4 M",
        height: "1.0 M",
        weight: "50 KG",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/trodon.webp",
        description: "A small troodontid commonly used in popular dinosaur media; the genus assignment is taxonomically debated.",
        knowledge: {
            family: "Troodontidae",
            genus: "Troodon (historical usage)",
            diet: "Carnivore",
            classification: "A small troodontid theropod; many fossils once assigned to Troodon have since been reclassified.",
            range: "Fossils historically attributed to Troodon come from western North America.",
            period: "Late Cretaceous, approximately 77 to 66 million years ago.",
            dietAnswer: "Troodontids were likely predators or omnivores, but the diet of material historically assigned to Troodon is not certain.",
            history: "Troodon became famous in popular culture for claims of exceptional intelligence. The genus is now considered taxonomically problematic, and many fossils formerly assigned to it have been moved to other taxa. The game version is a stylized reconstruction.",
            movieAnswer: "Troodon is included in Jurassic World Evolution. Its real classification is uncertain, so game attributes and intelligence should not be treated as settled paleontological facts."
        }
    },
    {
        id: "suchomimus",
        name: "Suchomimus",
        species: "Suchomimus tenerensis",
        movie: "Jurassic World Evolution",
        diet: "Piscivore",
        length: "11.0 M",
        height: "3.5 M",
        weight: "3,000 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/suchomimus.webp",
        description: "A spinosaurid with a long, narrow snout and conical teeth suited to catching fish.",
        knowledge: {
            family: "Spinosauridae",
            genus: "Suchomimus",
            diet: "Piscivore",
            classification: "A spinosaurid theropod closely related to Baryonyx.",
            range: "Suchomimus fossils are known from the Elrhaz Formation in Niger, central Africa.",
            period: "Early Cretaceous, approximately 125 to 112 million years ago.",
            dietAnswer: "Its narrow jaws and conical teeth suggest fish were important prey, though it may also have eaten other animals.",
            history: "Suchomimus was described in 1998 from fossils found in Niger. Its long snout and powerful forelimbs resemble those of other fish-eating spinosaurids. It is available in Jurassic World Evolution.",
            movieAnswer: "Suchomimus is included in Jurassic World Evolution. The real animal is known from Early Cretaceous rocks in Niger."
        }
    },
    {
        id: "iguanodon",
        name: "Iguanodon",
        species: "Iguanodon bernissartensis",
        movie: "Jurassic World Evolution",
        diet: "Herbivore",
        length: "10.0 M",
        height: "3.0 M",
        weight: "3,500 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/iguanodon.webp",
        description: "A large ornithopod with a thumb spike, featured in Jurassic World Evolution.",
        knowledge: {
            family: "Iguanodontidae",
            genus: "Iguanodon",
            diet: "Herbivore",
            classification: "A large ornithopod dinosaur with a distinctive spike on each thumb.",
            range: "Iguanodon fossils are known from Europe, including Belgium, England, and Spain.",
            period: "Early Cretaceous, approximately 126 to 122 million years ago.",
            dietAnswer: "Iguanodon was a plant-eater with a beak and broad teeth for processing vegetation.",
            history: "Iguanodon was one of the first dinosaurs to be scientifically described, in 1825. A famous group of skeletons from Bernissart, Belgium, helped clarify its anatomy, including its thumb spikes. It is included in Jurassic World Evolution.",
            movieAnswer: "Iguanodon is available in Jurassic World Evolution. Its real fossils are known from several European countries."
        }
    },
    {
        id: "scorpios-rex",
        name: "Scorpios Rex",
        species: "Scorpios rex (fictional hybrid)",
        movie: "Camp Cretaceous",
        diet: "Carnivore",
        type: "Hybrid",
        length: "8.0 M",
        height: "2.0 M",
        weight: "Not listed",
        eggBatchSize: "1 - 1",
        era: "Holocene",
        image: "assets/images/dinosaurs/scorpios-rex.webp",
        description: "A venomous engineered hybrid combining scorpionfish DNA with carnivorous dinosaur DNA. The official game profile lists it at 8 m long and describes its temperament as dangerously unstable.",
        knowledge: {
            family: "Hybrid",
            genus: "Hybrid",
            diet: "Carnivore, Live Prey",
            classification: "A fictional genetically engineered hybrid, not a naturally occurring species.",
            range: "Scorpios rex has no natural range and has only lived in captivity. In Jurassic World: Camp Cretaceous, it escapes from containment on the fictional Isla Nublar.",
            period: "Holocene (fictional engineered animal).",
            dietAnswer: "The official game profile classifies Scorpios rex as a carnivore that eats live prey. It attributes venomous fins to its scorpionfish DNA.",
            history: "Dr. Henry Wu created Scorpios rex for Simon Masrani by combining scorpionfish DNA with DNA from several carnivorous dinosaurs. Its venom, strength, speed, and dexterity made it dangerous, while its unstable temperament led to cryogenic storage. After the storage unit overheated and cracked, it escaped and caused havoc during Camp Cretaceous. The official Jurassic World Evolution 3 profile lists a length of 8 m and height of 2 m, with an egg batch size of 1 - 1; it does not list a weight. Since the hybrid has only been kept in captivity, its ecology is poorly known and the profile says it is unsuitable for release into the wild.",
            movieAnswer: "Scorpios rex appears in Jurassic World: Camp Cretaceous and is also catalogued in Jurassic World Evolution 3. It is a fictional hybrid with no fossil history."
        }
    },
    {
        id: "monolophosaurus",
        name: "Monolophosaurus",
        species: "Monolophosaurus jiangi",
        movie: "Camp Cretaceous",
        diet: "Carnivore",
        length: "5.5 M",
        height: "1.5 M",
        weight: "475 KG",
        era: "Middle Jurassic",
        image: "assets/images/dinosaurs/monolophosaurus.webp",
        description: "A theropod with a single crest along the top of its skull, featured in Camp Cretaceous.",
        knowledge: {
            family: "Monolophosauridae",
            genus: "Monolophosaurus",
            diet: "Carnivore",
            classification: "A medium-sized theropod dinosaur named for its single skull crest.",
            range: "Monolophosaurus fossils were found in the Shishugou Formation in Xinjiang, China.",
            period: "Middle Jurassic, approximately 165 million years ago.",
            dietAnswer: "It was a carnivore that likely preyed on smaller animals; direct evidence of its specific prey is limited.",
            history: "Monolophosaurus lived in what is now China during the Middle Jurassic. Its name refers to the single crest on its skull. The genus appears in Jurassic World: Camp Cretaceous, where its cloned versions are fictional.",
            movieAnswer: "Monolophosaurus appears in Jurassic World: Camp Cretaceous. The real animal is known from Middle Jurassic fossils in China."
        }
    },
    {
        id: "ouranosaurus",
        name: "Ouranosaurus",
        species: "Ouranosaurus nigeriensis",
        movie: "Camp Cretaceous",
        diet: "Herbivore",
        length: "7.0 M",
        height: "2.5 M",
        weight: "2,500 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/ouranosaurus.webp",
        description: "A plant-eating ornithopod from Niger with tall spines along its back.",
        knowledge: {
            family: "Ouranosauridae",
            genus: "Ouranosaurus",
            diet: "Herbivore",
            classification: "A large iguanodontian ornithopod dinosaur with an elongated back profile.",
            range: "Ouranosaurus fossils are known from the Elrhaz Formation in Niger, central Africa.",
            period: "Early Cretaceous, approximately 125 to 112 million years ago.",
            dietAnswer: "Ouranosaurus was a plant-eater with a broad beak and rows of chewing teeth.",
            history: "Ouranosaurus lived in Africa during the Early Cretaceous. Its tall neural spines formed a prominent ridge along its back; their exact function is uncertain. It is one of the species shown in Jurassic World: Camp Cretaceous.",
            movieAnswer: "Ouranosaurus appears in Jurassic World: Camp Cretaceous. Fossils of the real dinosaur were discovered in Niger."
        }
    },
    {
        id: "kentrosaurus",
        name: "Kentrosaurus",
        species: "Kentrosaurus aethiopicus",
        movie: "Camp Cretaceous",
        diet: "Herbivore",
        length: "4.5 M",
        height: "1.5 M",
        weight: "700 KG",
        era: "Late Jurassic",
        image: "assets/images/dinosaurs/kentrosaurus.webp",
        description: "A small stegosaur with plates and long spikes, featured in Camp Cretaceous.",
        knowledge: {
            family: "Stegosauridae",
            genus: "Kentrosaurus",
            diet: "Herbivore",
            classification: "An armored stegosaurid with paired plates and spikes along its back and tail.",
            range: "Kentrosaurus fossils are known from the Tendaguru Formation in Tanzania, East Africa.",
            period: "Late Jurassic, approximately 155 to 150 million years ago.",
            dietAnswer: "Kentrosaurus was a plant-eater, likely browsing low vegetation.",
            history: "Kentrosaurus lived in East Africa during the Late Jurassic. Its armor includes pointed spikes toward the hips and tail, unlike the broad plates associated with Stegosaurus. It appears in Jurassic World: Camp Cretaceous.",
            movieAnswer: "Kentrosaurus is featured in Jurassic World: Camp Cretaceous. Its fossil remains are from Tanzania."
        }
    },
    {
        id: "spinoceratops",
        name: "Spinoceratops",
        species: "Spinoceratops (fictional hybrid)",
        movie: "Camp Cretaceous",
        diet: "Omnivore",
        type: "Hybrid",
        length: "Not established",
        height: "Not established",
        weight: "Not established",
        era: "Modern fictional creation",
        image: "assets/images/dinosaurs/spinoceratops.webp",
        description: "A fictional hybrid featured in Camp Cretaceous; it has no fossil record or established scientific measurements.",
        knowledge: {
            family: "Synthetic hybrid (Mantah Corp)",
            genus: "Spinoceratops",
            diet: "Omnivore",
            classification: "A fictional genetically engineered hybrid, not a naturally occurring species.",
            range: "Spinoceratops has no fossil range. The series places it on the fictional Mantah Corp island.",
            period: "Modern fictional creation; it does not belong to a geologic period.",
            dietAnswer: "Spinoceratops is classified as an omnivore in this archive. Its diet is fictional because it is a hybrid with no fossil record.",
            history: "Spinoceratops is a fictional hybrid of Spinosaurus and Sinoceratops introduced in Jurassic World: Camp Cretaceous. Its biology and measurements are story details rather than real paleontological evidence.",
            movieAnswer: "Spinoceratops appears in Jurassic World: Camp Cretaceous. It is a fictional hybrid with no natural species or fossil record."
        }
    },
    {
        id: "aquilops",
        name: "Aquilops",
        species: "Aquilops americanus",
        movie: "Jurassic World: Rebirth",
        diet: "Herbivore",
        length: "0.6 M",
        height: "0.3 M",
        weight: "1.5 KG",
        era: "Early Cretaceous",
        image: "assets/images/dinosaurs/aquilops.webp",
        description: "A small ceratopsian dinosaur from North America, featured in Jurassic World: Rebirth.",
        knowledge: {
            family: "Ceratopsia",
            genus: "Aquilops",
            diet: "Herbivore",
            classification: "A small, early-diverging ceratopsian dinosaur.",
            range: "Aquilops fossils are known from Montana, in western North America.",
            period: "Early Cretaceous, approximately 109 to 104 million years ago.",
            dietAnswer: "Aquilops was a herbivore, using its beak to crop plants.",
            history: "Aquilops americanus is known from a small skull discovered in Montana. Its name means “eagle face.” The film's appearance is a fictional clone based on the real genus.",
            movieAnswer: "Aquilops appears in Jurassic World: Rebirth (2025). The real animal was a small ceratopsian from Early Cretaceous North America."
        }
    },
    {
        id: "titanosaurus",
        name: "Titanosaurus",
        species: "Titanosaurus sp. (JWE3 engineered specimen)",
        movie: "Jurassic World: Rebirth",
        diet: "Herbivore",
        length: "40 M",
        height: "20 M",
        weight: "60,000 KG",
        eggBatchSize: "1 - 1",
        era: "Late Cretaceous",
        image: "assets/images/dinosaurs/titanosaurus.webp",
        sourceUrl: "https://www.jurassicworldevolution.com/3/dinosaurs/titanosaurus",
        description: "A colossal engineered titanosaur with a long, whip-like tail and two pairs of short sails along its back. The official Jurassic World Evolution 3 profile lists it at 40 m long and 20 m tall.",
        knowledge: {
            family: "Titanosauria",
            genus: "Titanosaurus",
            diet: "Herbivore",
            classification: "A giant titanosaur sauropod. The Jurassic World Evolution 3 animal is a modern engineered specimen, not a naturally surviving fossil species.",
            range: "Titanosaurus fossils were found in India. The Jurassic World Evolution 3 animal is described as having been created at a classified island research facility.",
            period: "Late Cretaceous.",
            dietAnswer: "The official game profile categorizes Titanosaurus as a herbivore with a 'Tall Palaeobotany' feeding preference. It describes the engineered animals as social and peaceful, and tolerant of smaller species.",
            history: "Titanosaurus fossils were first discovered in India in 1828 by Captain William Henry Sleeman. After the bones passed among researchers for decades, Richard Lydekker formally described them in 1877; Titanosaurus is recognized as the first Indian dinosaur to be named. The Jurassic World Evolution 3 profile distinguishes its park animal from that fossil history: this modern specimen was engineered at a classified island facility. The game profile lists it at 40 m long, 20 m tall, and 60 tonnes, with an egg batch size of 1 - 1. Its design has a whip-like tail and two pairs of short back sails. The profile says little is known about its engineered ecology, but reports describe it as social, peaceful, and tolerant of smaller animals.",
            movieAnswer: "The Titanosaurus in Jurassic World Evolution 3 is an engineered modern animal, rather than a naturally surviving Late Cretaceous dinosaur. The game's official profile supplies its measurements and fictional ecology; the genus's real fossil history is from India."
        }
    },
    {
        id: "distortus-rex",
        name: "Distortus Rex",
        species: "Distortus rex (fictional hybrid)",
        movie: "Jurassic World: Rebirth",
        diet: "Carnivore",
        type: "Hybrid",
        length: "14.5 M",
        height: "8.1 M",
        weight: "10,000 KG",
        eggBatchSize: "1 - 1",
        era: "Holocene",
        image: "assets/images/dinosaurs/distortus-rex.webp",
        description: "A powerful, unpredictable engineered mutant with six limbs, including four arms. It was kept on Île Saint-Hubert after abnormalities made it unsuitable for public display.",
        knowledge: {
            family: "Mutant",
            genus: "Distortus rex",
            diet: "Carnivore, Live Prey",
            classification: "A fictional, experimentally engineered mutant; it is not a naturally occurring dinosaur species.",
            range: "The specimen was held at a research facility on Île Saint-Hubert. It has no natural range or fossil distribution.",
            period: "Holocene (fictional engineered animal).",
            dietAnswer: "The official game profile classifies Distortus rex as a carnivore that eats live prey.",
            history: "Distortus rex resulted from confidential genetic experiments at the Île Saint-Hubert research facility. Its conception date is unknown, and records were lost after a containment breach forced the island's evacuation. The specimen has polymelia: six limbs in total, with two hind legs and four arms; its large front pair supports much of its weight while walking. Reports describe it as unpredictable and aggressive, and possibly reactive to bright lights and loud noises, though no formal behavioural study was preserved. Jurassic World Evolution 3 lists it at 14.5 m long, 8.1 m tall, and 10 tonnes, with an egg batch size of 1 - 1.",
            movieAnswer: "Distortus rex, also called the D-Rex, is a fictional engineered mutant featured in Jurassic World: Rebirth and Jurassic World Evolution 3."
        }
    },
    {
        id: "mutadon",
        name: "Mutadon",
        species: "Mutadon (fictional hybrid)",
        movie: "Jurassic World: Rebirth",
        diet: "Carnivore",
        type: "Hybrid",
        length: "4.4 M",
        height: "1.75 M",
        weight: "250 KG",
        eggBatchSize: "1 - 1",
        era: "Holocene",
        image: "assets/images/dinosaurs/mutadon.png",
        description: "An engineered hybrid with Velociraptor-like talons and intelligence and Pteranodon-like wings. Its flight and agility make containment difficult.",
        knowledge: {
            family: "Mutant",
            genus: "Mutadon",
            diet: "Carnivore, Live Prey",
            classification: "A fictional engineered mutant with traits of a theropod and a pterosaur; it is not a natural species.",
            range: "Mutadons were created and kept at the Île Saint-Hubert research facility. They have no natural range or fossil distribution.",
            period: "Holocene (fictional engineered animal).",
            dietAnswer: "The official game profile classifies Mutadon as a carnivore that eats live prey. It describes the animals as intelligent hunters that can adapt their pursuit strategies.",
            history: "Mutadon was developed at the experimental Île Saint-Hubert facility for possible exhibition. It combines Velociraptor-like intelligence, agility, and recurved killing claws with Pteranodon-like wings and flight. Few experimental species survived to adulthood, and although Mutadon proved comparatively stable, its versatile movement and intelligence made it unsuitable for public display. Reports after the island's containment breach describe it solving problems and adapting routes while hunting, making it difficult to contain. Jurassic World Evolution 3 lists it at 4.4 m long, 1.75 m tall, and 250 kg, with an egg batch size of 1 - 1.",
            movieAnswer: "Mutadon is a fictional engineered animal catalogued in Jurassic World Evolution 3. Its hybrid anatomy and behaviour are story details, not fossil-based facts."
        }
    }
];

franchiseExpansion.forEach(({ knowledge, ...dino }) => {
    dinosaurs.push(dino);
    dinosaurKnowledge[dino.id] = knowledge;
    if (!specimenVideoFiles[dino.id] && !specimensWithoutVideo.has(dino.id)) {
        specimenVideoFiles[dino.id] = `https://www.youtube.com/results?search_query=${encodeURIComponent(dino.name)}`;
    }
});

const campCretaceousDinoIds = new Set([
    "tyrannosaurus-rex",
    "velociraptor",
    "brachiosaurus",
    "triceratops",
    "dilophosaurus",
    "stegosaurus",
    "compsognathus",
    "spinosaurus",
    "pteranodon",
    "ankylosaurus",
    "ceratosaurus",
    "baryonyx",
    "allosaurus",
    "carnotaurus",
    "sinoceratops",
    "gallimimus",
    "parasaurolophus",
    "pachycephalosaurus",
    "mosasaurus",
    "stygimoloch"
]);

dinosaurs.forEach(dino => {
    if (campCretaceousDinoIds.has(dino.id)) {
        dino.media = [...(dino.media || []), "Camp Cretaceous"];
    }
});

const additionalMediaByDinoId = {
    "tyrannosaurus-rex": ["The Lost World: Jurassic Park", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World: Rebirth", "Jurassic World Evolution"],
    "velociraptor": ["The Lost World: Jurassic Park", "Jurassic Park III", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World: Rebirth", "Jurassic World Evolution"],
    "brachiosaurus": ["The Lost World: Jurassic Park", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "triceratops": ["The Lost World: Jurassic Park", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "dilophosaurus": ["Jurassic World", "Jurassic World: Dominion"],
    "stegosaurus": ["Jurassic Park III", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "compsognathus": ["Jurassic Park III", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World: Rebirth", "Jurassic World Evolution"],
    "spinosaurus": ["Jurassic World: Rebirth", "Jurassic World Evolution"],
    "pteranodon": ["Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "ankylosaurus": ["Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "ceratosaurus": ["Jurassic World Evolution"],
    "indominus-rex": ["Jurassic World Evolution"],
    "mosasaurus": ["Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World: Rebirth", "Jurassic World Evolution"],
    "indoraptor": ["Jurassic World Evolution"],
    "stygimoloch": ["Jurassic World: Dominion", "Jurassic World Evolution"],
    "giganotosaurus": ["Jurassic World Evolution"],
    "pyroraptor": ["Jurassic World Evolution"],
    "therizinosaurus": ["Jurassic World Evolution"],
    "quetzalcoatlus": ["Jurassic World: Rebirth", "Jurassic World Evolution"],
    "baryonyx": ["Jurassic World: Dominion", "Jurassic World Evolution"],
    "allosaurus": ["Jurassic World: Dominion", "Jurassic World Evolution"],
    "carnotaurus": ["Jurassic World: Dominion", "Jurassic World Evolution"],
    "sinoceratops": ["Jurassic World: Dominion", "Jurassic World Evolution"],
    "dimetrodon": ["Jurassic World Evolution"],
    "gallimimus": ["The Lost World: Jurassic Park", "Jurassic World", "Jurassic World Evolution"],
    "parasaurolophus": ["Jurassic Park III", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "pachycephalosaurus": ["Jurassic Park III", "Jurassic World Evolution"],
    "apatosaurus": ["Jurassic World Evolution"],
    "dimorphodon": ["Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic World Evolution"],
    "dreadnoughtus": ["Jurassic World Evolution"],
    "corythosaurus": ["Jurassic World Evolution"]
};

dinosaurs.forEach(dino => {
    const additionalMedia = additionalMediaByDinoId[dino.id] || [];
    dino.media = [...new Set([...(dino.media || []), ...additionalMedia])];
});

const franchiseContainmentContexts = {
    "Jurassic Park": {
        location: "Isla Nublar",
        status: "The park is operating; a storm and security failures lead to enclosure breaches."
    },
    "The Lost World: Jurassic Park": {
        location: "Isla Sorna",
        status: "The abandoned Site B is inhabited by free-roaming animals during the expedition."
    },
    "Jurassic Park III": {
        location: "Isla Sorna",
        status: "The abandoned island has free-roaming animals and no active public park."
    },
    "Jurassic World": {
        location: "Isla Nublar",
        status: "The theme park is operating; major enclosure and aviary breaches occur."
    },
    "Jurassic World: Fallen Kingdom": {
        location: "Isla Nublar; captured animals were taken to Lockwood Estate, California",
        status: "A volcanic evacuation moves captured specimens off-island; containment breaks down during the estate auction."
    },
    "Jurassic World: Dominion": {
        location: "Global ecosystems; Biosyn Sanctuary, Italy",
        status: "Dinosaurs live beyond park facilities worldwide; sanctuary populations are managed, then security fails."
    },
    "Jurassic World: Rebirth": {
        location: "Île Saint-Hubert",
        status: "A classified research site suffers a containment breach and is evacuated."
    },
    "Camp Cretaceous": {
        location: "Isla Nublar; later Mantah Corp Island",
        status: "The series moves from the evacuated park to a separate island; animals and containment conditions vary by season."
    },
    "Jurassic World Evolution": {
        location: "Player-built park and campaign locations",
        status: "Game simulation; containment depends on the player's park and scenario."
    }
};

const speciesContainmentContexts = {
    "tyrannosaurus-rex": {
        "Jurassic Park": {
            location: "Isla Nublar — main park paddock",
            status: "Escapes its enclosure during the park's power failure."
        }
    },
    "indominus-rex": {
        "Jurassic World": {
            location: "Isla Nublar — Jurassic World",
            status: "Breaks out of its paddock; the park is evacuated and the hybrid is killed."
        }
    },
    "mosasaurus": {
        "Jurassic World": {
            location: "Isla Nublar — park lagoon",
            status: "Kept in the lagoon attraction; escapes during the park's final incident."
        },
        "Jurassic World: Fallen Kingdom": {
            location: "Isla Nublar → open ocean",
            status: "Transported during the evacuation and eventually released into the ocean."
        },
        "Jurassic World: Dominion": {
            location: "Open ocean",
            status: "Free-ranging beyond park containment."
        }
    },
    "indoraptor": {
        "Jurassic World: Fallen Kingdom": {
            location: "Lockwood Estate, California",
            status: "Held at the estate, escapes during the auction, and is killed there."
        }
    },
    "scorpios-rex": {
        "Camp Cretaceous": {
            location: "Isla Nublar — cryogenic storage facility",
            status: "Escapes after its storage unit fails."
        }
    },
    "spinosaurus": {
        "Jurassic Park III": {
            location: "Isla Sorna",
            status: "Free-roaming on the abandoned island."
        }
    },
    "distortus-rex": {
        "Jurassic World: Rebirth": {
            location: "Île Saint-Hubert — research facility",
            status: "Records describe a containment breach followed by the island's evacuation."
        }
    },
    "mutadon": {
        "Jurassic World: Rebirth": {
            location: "Île Saint-Hubert — research facility",
            status: "Reported outside containment after the island's breach and evacuation."
        }
    }
};

const franchiseContainmentOrder = [
    "Jurassic Park",
    "The Lost World: Jurassic Park",
    "Jurassic Park III",
    "Jurassic World",
    "Camp Cretaceous",
    "Jurassic World: Fallen Kingdom",
    "Jurassic World: Dominion",
    "Jurassic World: Rebirth",
    "Jurassic World Evolution"
];

const homeSlideImages = [
    { src: "assets/images/home/home-slide-1.png", name: "Tyrannosaurus rex", dinoId: "tyrannosaurus-rex" },
    { src: "assets/images/home/home-slide-2.png", name: "Indominus rex", dinoId: "indominus-rex" },
    { src: "assets/images/home/home-slide-3.png", name: "Indoraptor", dinoId: "indoraptor" },
    { src: "assets/images/home/home-slide-4.png", name: "Therizinosaurus", dinoId: "therizinosaurus" },
    { src: "assets/images/home/home-slide-5.png", name: "Spinosaurus", dinoId: "spinosaurus" },
    { src: "assets/images/home/home-slide-6.png", name: "Scorpios Rex", dinoId: "scorpios-rex" },
    { src: "assets/images/home/home-slide-7.png", name: "Mutadon", dinoId: "mutadon" }
];

const featuredDinoIds = [
    "tyrannosaurus-rex",
    "indominus-rex",
    "indoraptor",
    "therizinosaurus"
];

const hybridDnaRecords = {
    "indominus-rex": {
        note: "The films identify these genetic sources; the complete genome mixture and additional contributors are not disclosed.",
        components: [
            { name: "Tyrannosaurus rex", image: "assets/images/dinosaurs/tyrannosaurus-rex.webp", dinoId: "tyrannosaurus-rex" },
            { name: "Velociraptor", image: "assets/images/dinosaurs/velociraptor.webp", dinoId: "velociraptor" },
            { name: "Cuttlefish (Sepia)" },
            { name: "Tree frog" }
        ]
    },
    indoraptor: {
        note: "The story links the prototype to Indominus Rex and Velociraptor DNA. The full splice recipe is not disclosed.",
        components: [
            { name: "Indominus Rex", image: "assets/images/dinosaurs/indominus-rex.webp", dinoId: "indominus-rex" },
            { name: "Velociraptor", image: "assets/images/dinosaurs/velociraptor.webp", dinoId: "velociraptor" }
        ]
    },
    "scorpios-rex": {
        note: "The series identifies Scorpios Rex as an engineered hybrid but does not confirm its source species.",
        components: []
    },
    spinoceratops: {
        note: "The series identifies Spinosaurus and Sinoceratops as its source species; any additional genetic contributors are not specified.",
        components: [
            { name: "Spinosaurus", image: "assets/images/dinosaurs/spinosaurus.webp", dinoId: "spinosaurus" },
            { name: "Sinoceratops", image: "assets/images/dinosaurs/sinoceratops.webp", dinoId: "sinoceratops" }
        ]
    }
};

