// Do not change this code

const placeholderQuestions = [
  {
    category: "Nature",
    question: "The human heart has how many chambers?",
    answer: "4",
    value: 100,
  },
  {
    category: "Nature",
    question: "What is the largest animal currently on Earth?",
    answer: "Blue Whale",
    value: 200,

  },
  {
    category: "Nature",
    question: "What is the hottest planet in the Solar System?",
    answer: "Venus",
    value: 300,
  },
  {
    category: "Nature",
    question: "What is the first element on the periodic table?",
    answer: "Hydrogen",
    value: 400,
  },
  {
    category: "Nature",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    answer: "Nitrogen",
    value: 500,
  },
  {
    category: "Nature",
    question:
      "Alzheimer's disease primarily affects which part of the human body?",
    answer: "Brain",
    value: 600,
  },
  {
    category: "Nature",
    question:
      "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
    answer: "Sputnik 1",
    value: 700,
  },
  {
    category: "Nature",
    question: "The asteroid belt is located between which two planets?",
    answer: "Mars and Jupiter",
    value: 100,
  },
  {
    category: "Nature",
    question: "What does LASER stand for?",
    answer: "Light amplification by stimulated emission of radiation",
    value: 100,
  },
  {
    category: "Nature",
    question: "Dry ice is the solid form of what substance?",
    answer: "Carbon dioxide",
    value: 100,
  },
  {
    category: "Animals",
    question: "What is the fastest  land animal?",
    answer: "Cheetah",
    value: 100,
  },
  {
    category: "Animals",
    question: "What is the scientific name for modern day humans?",
    answer: "Homo Sapiens",
    value: 100,
  },
  {
    category: "Animals",
    question:
      "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
    answer: "New Zealand",
    value: 100,
  },
  {
    category: "Animals",
    question: "Hippocampus is the Latin name for which marine creature?",
    answer: "Seahorse",
    value: 100,
  },
  {
    category: "Animals",
    question: "What is Grumpy Cat's real name?",
    answer: "Tardar Sauce",
    value: 100,
  },
  {
    category: "Animals",
    question: "Which class of animals are newts members of?",
    answer: "Amphibian",
    value: 100,
  },
  {
    category: "Animals",
    question: "What is the collective noun for a group of crows?",
    answer: "Murder",
    value: 100,
  },
  {
    category: "Animals",
    question: "By definition, where does an abyssopelagic animal live?",
    answer: "Bottom of the ocean",
    value: 100,
  },
  {
    category: "Animals",
    question: "What colour is the female blackbird?",
    answer: "Brown",
    value: 100,
  },
  {
    category: "Animals",
    question: "What is the name of a rabbit's house?",
    answer: "Burrow",
    value: 100,
  },
  {
    category: "Computers",
    question: "What does GHz stand for?",
    answer: "Gigahertz",
    value: 100,
  },
  {
    category: "Computers",
    question: "HTML is what type of language?",
    answer: "Markup Language",
    value: 100,
  },
  {
    category: "Computers",
    question: "What amount of bits commonly equals one byte?",
    answer: "8",
    value: 100,
  },
  {
    category: "Computers",
    question: "In computing, what does MIDI stand for?",
    answer: "Musical Instrument Digital Interface",
    value: 100,
  },
  {
    category: "Computers",
    question: "In web design, what does CSS stand for?",
    answer: "Cascading Style Sheet",
    value: 100,
  },
  {
    category: "Computers",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    answer: "HD Graphics 500",
    value: 100,
  },
  {
    category: "Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    answer: "140",
    value: 100,
  },
  {
    category: "Computers",
    question: "In JavaScript, what is the = operator?",
    answer: "Assignment",
    value: 100,
  },
  {
    category: "Computers",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answer: "Java",
    value: 100,
  },
  {
    category: "Computers",
    question: "In computing, what does LAN stand for?",
    answer: "Local Area Network",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "Who was the only god from Greece who did not get a name change in Rome?",
    answer: "Apollo",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
    answer: "Jason",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "This Greek goddess's name was chosen for the dwarf planet responsible for discord on Pluto's classification amongst astronomers.",
    answer: "Eris",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
    answer: "Apollo",
    id: 34,
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    answer: "Orpheus",
    value: 100,
  },
  {
    category: "Mythology",
    question: "In most traditions, who was the wife of Zeus?",
    answer: "Hera",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "Which of these mythological creatures is said to be half-man and half-horse?",
    answer: "Centaur",
    value: 100,
  },
  {
    category: "Mythology",
    question: "What mythology did the god Apollo come from?",
    answer: "Greek and Roman",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "What mytological creatures have women's faces and vultures' bodies?",
    answer: "Harpies",
    value: 100,
  },
  {
    category: "Mythology",
    question:
      "The Nike apparel and footwear brand takes it's name from the Greek goddess of what?",
    answer: "Victory",
    value: 100,
  },
  {
    category: "History",
    question: "How many manned moon landings have there been?",
    answer: "6",
    value: 100,
  },
  {
    category: "History",
    question:
      "The original Roman alphabet lacked the following letters EXCEPT:",
    answer: "X",
    value: 100,
  },
  {
    category: "History",
    question: "The collapse of the Soviet Union took place in which year?",
    answer: "1991",
    value: 100,
  },
  {
    category: "History",
    question: "What was Manfred von Richthofen's nickname?",
    answer: "The Red Baron",
    value: 100,
  },
  {
    category: "History",
    question:
      "Which modern day country is the region that was known as Phrygia in ancient times?",
    answer: "Turkey",
    value: 100,
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    answer: "George Washington",
    value: 100,
  },
  {
    category: "History",
    question: "What was the first sport to have been played on the moon?",
    answer: "Golf",
    value: 100,
  },
  {
    category: "History",
    question: "What year did World War I begin?",
    answer: "1914",
    value: 100,
  },
  {
    category: "History",
    question: "How old was Adolf Hitler when he died?",
    answer: "56",
    value: 100,
  },
  {
    category: "History",
    question:
      "Abolitionist John Brown raided the arsenal in which Virginia Town?",
    answer: "Harper's Ferry",
    value: 100,
  },
  {
    category: "General",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answer: "HTC",
    value: 100,
  },
  {
    category: "General",
    question: "What alcoholic drink is made from molasses?",
    answer: "Rum",
    value: 100,
  },
  {
    category: "General",
    question: "What is the French word for &quot;hat&quot;?",
    answer: "Chapeau",
    value: 100,
  },
  {
    category: "General",
    question: "Who is depicted on the US hundred dollar bill?",
    answer: "Benjamin Franklin",
    value: 100,
  },
  {
    category: "General",
    question: "What do the letters in the GMT time zone stand for?",
    answer: "Greenwich Mean Time",
    value: 100,
  },
  {
    category: "General",
    question: "How tall is the Burj Khalifa?",
    answer: "2,722 ft",
    value: 100,
  },
  {
    category: "General",
    question:
      "When someone is cowardly, they are said to have what color belly?",
    answer: "Yellow",
    value: 100,
  },
  {
    category: "General",
    question: "What is the name of NASA's most famous space telescope?",
    answer: "Hubble Space Telescope",
    value: 100,
  },
  {
    category: "General",
    question: "Who is the youngest person to recieve a Nobel Prize?",
    answer: "Malala Yousafzai",
    value: 100,
  },
  {
    category: "General",
    question: "What is the famous Papa John's last name?",
    answer: "Schnatter",
    value: 100,
  },
  {
    category: "Final",
    question: "What name was the bootcamp formerly known as?",
    answer: "Burlington Code Academy",
    value: 100,
  },
];

export default placeholderQuestions;
