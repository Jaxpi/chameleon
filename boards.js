// Example structure – you’ll fill in real categories/words
const boards = [
  {
    category: "Animals",
    grid: [
      ["Lion", "Tiger", "Bear", "Wolf", "Fox"], // row 1 (number 1)
      ["Eagle", "Hawk", "Owl", "Crow", "Swan"], // row 2
      ["Shark", "Whale", "Dolphin", "Seal", "Crab"], // row 3
      ["Dog", "Cat", "Rabbit", "Hamster", "Horse"], // row 4
      ["Ant", "Bee", "Spider", "Fly", "Wasp"], // row 5
    ],
  },
  {
    category: "Countries",
    grid: [
      ["China", "Greece", "Peru", "Fiji", "Ghana"],
      ["Sweden", "Cambodia", "Egypt", "Russia", "Cuba"],
      ["Japan", "Jamaica", "France", "Ireland", "Finland"],
      ["Argentina", "Iceland", "Italy", "Iran", "Thailand"],
      ["Mexico", "Portugal", "India", "Poland", "Spain"],
    ],
  },
  {
    category: "Desserts",
    grid: [
      ["Cake", "Pie", "Ice Cream", "Brownie", "Cookie"],
      ["Cupcake", "Donut", "Muffin", "Tart", "Éclair"],
      ["Sorbet", "Parfait", "Cheesecake", "Tiramisu", "Panna Cotta"],
      ["Mochi", "Cobbler", "Custard", "Churro", "Baklava"],
      ["Gelato", "Flan", "Soufflé", "Macaron", "Trifle"],
    ],
  },
  {
    category: "Fast Food",
    grid: [
      ["Burger", "Sandwich", "Fries", "Milkshake", "Nuggets"],
      ["Pizza", "Taco", "Burrito", "Salad", "Soda"],
      ["Onion Rings", "Hot Dog", "Kebab", "Soup", "Noodles"],
      ["Wrap", "Nachos", "Coleslaw", "Pickle", "Muffin"],
      ["Bagel", "Corn Dog", "Cheeseburger", "Dumplings", "Fried Rice"],
    ],
  },
  {
    category: "Sports",
    grid: [
      ["Baseball", "Basketball", "Soccer", "Tennis", "Swimming"],
      ["Running", "Cycling", "Weightlifting", "Bowling", "Gymnastics"],
      ["Golf", "Football", "Figure Skating", "Skiing", "Surfing"],
      ["Volleyball", "Badminton", "Rugby", "Cricket", "Boxing"],
      ["Hockey", "Lacrosse", "Wrestling", " Snowboarding", "Pickleball"],
    ],
  },
  {
    category: "Professions",
    grid: [
      ["Doctor", "Engineer", "Teacher", "Artist", "Lawyer"],
      ["Nurse", "Designer", "Writer", "Musician", "Judge"],
      ["Firefighter", "Pilot", "Chef", "Photographer", "Architect"],
      ["Police Officer", "Actor", "Scientist", "Dentist", "Veterinarian"],
      ["Politician", "Journalist", "Therapist", "Programmer", "Salesperson"],
    ],
  },
  {
    category: "Film Genres",
    grid: [
      ["Horror", "Action", "Thriller", "Sci-Fi", "Rom-Com"],
      ["Western", "Comedy", "Christmas", "Gangster", "Bollywood"],
      ["War", "Documentary", "Musical", "Zombie", "Post-Apocalyptic"],
      ["Sports", "Arthouse", "Animated", "Children's", "Adventure"],
      ["Drama", "Fantasy", "Mystery", "Biopic", "Superhero"],
    ],
  },
  {
    category: "Musical Instruments",
    grid: [
      ["Piano", "Guitar", "Violin", "Drums", "Flute"],
      ["Saxophone", "Trumpet", "Clarinet", "Harp", "Bagpipes"],
      ["Organ", "Synthesizer", "Electric Guitar", "Bassoon", "Timpani"],
      ["Cello", "French Horn", "Trombone", "Viola", "Horn"],
      ["Drum Kit", "Accordion", "Banjo", "Ukulele", "Mandolin"],
    ],
  },
  {
    category: "US States",
    grid: [
      ["California", "Texas", "Florida", "New York", "Pennsylvania"],
      ["Illinois", "Ohio", "Georgia", "North Carolina", "Michigan"],
      ["Washington", "Arizona", "Tennessee", "Missouri", "Massachusetts"],
      ["Indiana", "Alabama", "Louisiana", "South Carolina", "Kentucky"],
      ["Iowa", "Mississippi", "Arkansas", "West Virginia", "Nevada"],
    ],
  },
  {
    category: "Board Games",
    grid: [
      ["Monopoly", "Scrabble", "Boggle", "Yahtzee", "Twister"],
      ["Chess", "Catan", "Parcheesi", "Sorry", "Codenames"],
      ["Splendor", "Checkers", "Clue", "Battleship", "Operation"],
      ["Guess Who", "Pictionary", "Taboo", "Scattergories", "Balderdash"],
      [
        "Backgammon",
        "Sequence",
        "Trivial Pursuit",
        "Risk",
        "Exploding Kittens",
      ],
    ],
  },
  {
    category: "Christmas",
    grid: [
      ["Santa", "Snow", "Tree", "Gifts", "Dinner"],
      ["Reindeer", "Elves", "Tinsel", "Ornament", "Snowglobe"],
      ["Sweater", "Candy Cane", "Nutcracker", "Holly", "Wreath"],
      ["Chimney", "Holiday", "Stocking", "Bells", "Pajamas"],
      ["Shopping", "Family", "Decorating", "Movies", "Carols"],
    ],
  },
  {
    category: "Songs",
    grid: [
      [
        "Happy Birthday",
        "Hotel California",
        "Billie Jean",
        "My Heart Will Go On",
        "Sweet Caroline",
      ],
      [
        "Bohemian Rhapsody",
        "Stayin' Alive",
        "Beat It",
        "Dancing Queen",
        "Don't Stop Believin'",
      ],
      [
        "Sweet Home Alabama",
        "Under Pressure",
        "Auld Lang Syne",
        "Wannabe",
        "Radioactive",
      ],
      ["Let It Go", "All of Me", "Macarena", "Firework", "Good Vibrations"],
      [
        "Jingle Bells",
        "Mr. Brightside",
        "Shape of You",
        "Someone Like You",
        "Golden",
      ],
    ],
  },
  {
    category: "Fairy Tales",
    grid: [
      [
        "Cinderella",
        "Sleeping Beauty",
        "Rapunzel",
        "Little Red Riding Hood",
        "Snow White",
      ],
      [
        "Hansel and Gretel",
        "Jack and the Beanstalk",
        "Gingerbread Man",
        "Three Little Pigs",
        "Little Miss Muffet",
      ],
      [
        "Little Jack Horner",
        "Goldilocks",
        "Jack and Jill",
        "Rumpelstiltskin",
        "The Little Mermaid",
      ],
      [
        "Beauty and the Beast",
        "Thumbelina",
        "The Ugly Duckling",
        "The Princess and the Pea",
        "The Emperor's New Clothes",
      ],
      [
        "The Snow Queen",
        "The Goose With Golden Eggs",
        "Humpty Dumpty",
        "Little Boy Blue",
        "Tortoise and Hare",
      ],
    ],
  },
  {
    category: "World Cities",
    grid: [
      ["Tokyo", "New York", "Shanghai", "London", "Paris"],
      ["Berlin", "Taipei", "Madrid", "Amsterdam", "Stockholm"],
      ["Copenhagen", "Bangkok", "Helsinki", "Manila", "Lima"],
      ["Vienna", "Mumbai", "Budapest", "Warsaw", "Bucharest"],
      ["Singapore", "Athens", "Istanbul", "Cairo", "Cape Town"],
    ],
  },
  {
    category: "Geographic Features",
    grid: [
      ["Mountain", "Cliff", "Plain", "Valley", "River"],
      ["Atoll", "Beach", "Mesa", "Gorge", "Volcano"],
      ["Reef", "Desert", "Fjord", "Forest", "Delta"],
      ["Peninsula", "Lake", "Island", "Meadow", "Archipelago"],
      ["Canyon", "Swamp", "Estuary", "Gulf", "Bay"],
    ],
  },
];
