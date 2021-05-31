import { GradeComponent, Course } from "~/backend/classes";

export function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export async function getCourseObject() {
  let user = Parse.User.current();
  if (!user) return;
  const courses = Parse.Object.extend("Courses");
  const query = new Parse.Query(courses);
  query.equalTo("User", user);
  const results = await query.find();
  return results[0];
}

export function generateName() {
  var name1 = [
    "abandoned",
    "able",
    "absolute",
    "adorable",
    "adventurous",
    "academic",
    "acceptable",
    "acclaimed",
    "accomplished",
    "accurate",
    "aching",
    "acidic",
    "acrobatic",
    "active",
    "actual",
    "adept",
    "admirable",
    "admired",
    "adolescent",
    "adorable",
    "adored",
    "advanced",
    "afraid",
    "affectionate",
    "aged",
    "aggravating",
    "aggressive",
    "agile",
    "agitated",
    "agonizing",
    "agreeable",
    "ajar",
    "alarmed",
    "alarming",
    "alert",
    "alienated",
    "alive",
    "all",
    "altruistic",
    "amazing",
    "ambitious",
    "ample",
    "amused",
    "amusing",
    "anchored",
    "ancient",
    "angelic",
    "angry",
    "anguished",
    "animated",
    "annual",
    "another",
    "antique",
    "anxious",
    "any",
    "apprehensive",
    "appropriate",
    "apt",
    "arctic",
    "arid",
    "aromatic",
    "artistic",
    "ashamed",
    "assured",
    "astonishing",
    "athletic",
    "attached",
    "attentive",
    "attractive",
    "austere",
    "authentic",
    "authorized",
    "automatic",
    "avaricious",
    "average",
    "aware",
    "awesome",
    "awful",
    "awkward",
    "babyish",
    "bad",
    "back",
    "baggy",
    "bare",
    "barren",
    "basic",
    "beautiful",
    "belated",
    "beloved",
    "beneficial",
    "better",
    "best",
    "bewitched",
    "big",
    "big-hearted",
    "biodegradable",
    "bite-sized",
    "bitter",
    "black",
    "black-and-white",
    "bland",
    "blank",
    "blaring",
    "bleak",
    "blind",
    "blissful",
    "blond",
    "blue",
    "blushing",
    "bogus",
    "boiling",
    "bold",
    "bony",
    "boring",
    "bossy",
    "both",
    "bouncy",
    "bountiful",
    "bowed",
    "brave",
    "breakable",
    "brief",
    "bright",
    "brilliant",
    "brisk",
    "broken",
    "bronze",
    "brown",
    "bruised",
    "bubbly",
    "bulky",
    "bumpy",
    "buoyant",
    "burdensome",
    "burly",
    "bustling",
    "busy",
    "buttery",
    "buzzing",
    "calculating",
    "calm",
    "candid",
    "canine",
    "capital",
    "carefree",
    "careful",
    "careless",
    "caring",
    "cautious",
    "cavernous",
    "celebrated",
    "charming",
    "cheap",
    "cheerful",
    "cheery",
    "chief",
    "chilly",
    "chubby",
    "circular",
    "classic",
    "clean",
    "clear",
    "clear-cut",
    "clever",
    "close",
    "closed",
    "cloudy",
    "clueless",
    "clumsy",
    "cluttered",
    "coarse",
    "cold",
    "colorful",
    "colorless",
    "colossal",
    "comfortable",
    "common",
    "compassionate",
    "competent",
    "complete",
    "complex",
    "complicated",
    "composed",
    "concerned",
    "concrete",
    "confused",
    "conscious",
    "considerate",
    "constant",
    "content",
    "conventional",
    "cooked",
    "cool",
    "cooperative",
    "coordinated",
    "corny",
    "corrupt",
    "costly",
    "courageous",
    "courteous",
    "crafty",
    "crazy",
    "creamy",
    "creative",
    "creepy",
    "criminal",
    "crisp",
    "critical",
    "crooked",
    "crowded",
    "cruel",
    "crushing",
    "cuddly",
    "cultivated",
    "cultured",
    "cumbersome",
    "curly",
    "curvy",
    "cute",
    "cylindrical",
    "damaged",
    "damp",
    "dangerous",
    "dapper",
    "daring",
    "darling",
    "dark",
    "dazzling",
    "dead",
    "deadly",
    "deafening",
    "dear",
    "dearest",
    "decent",
    "decimal",
    "decisive",
    "deep",
    "defenseless",
    "defensive",
    "defiant",
    "deficient",
    "definite",
    "definitive",
    "delayed",
    "delectable",
    "delicious",
    "delightful",
    "delirious",
    "demanding",
    "dense",
    "dental",
    "dependable",
    "dependent",
    "descriptive",
    "deserted",
    "detailed",
    "determined",
    "devoted",
    "different",
    "difficult",
    "digital",
    "diligent",
    "dim",
    "dimpled",
    "dimwitted",
    "direct",
    "disastrous",
    "discrete",
    "disfigured",
    "disgusting",
    "disloyal",
    "dismal",
    "distant",
    "downright",
    "dreary",
    "dirty",
    "disguised",
    "dishonest",
    "dismal",
    "distant",
    "distinct",
    "distorted",
    "dizzy",
    "dopey",
    "doting",
    "double",
    "downright",
    "drab",
    "drafty",
    "dramatic",
    "dreary",
    "droopy",
    "dry",
    "dual",
    "dull",
    "dutiful",
    "each",
    "eager",
    "earnest",
    "early",
    "easy",
    "easy-going",
    "ecstatic",
    "edible",
    "educated",
    "elaborate",
    "elastic",
    "elated",
    "elderly",
    "electric",
    "elegant",
    "elementary",
    "elliptical",
    "embarrassed",
    "embellished",
    "eminent",
    "emotional",
    "empty",
    "enchanted",
    "enchanting",
    "energetic",
    "enlightened",
    "enormous",
    "enraged",
    "entire",
    "envious",
    "equal",
    "equatorial",
    "essential",
    "esteemed",
    "ethical",
    "euphoric",
    "even",
    "evergreen",
    "everlasting",
    "every",
    "evil",
    "exalted",
    "excellent",
    "exemplary",
    "exhausted",
    "excitable",
    "excited",
    "exciting",
    "exotic",
    "expensive",
    "experienced",
    "expert",
    "extraneous",
    "extroverted",
    "extra-large",
    "extra-small",
    "fabulous",
    "failing",
    "faint",
    "fair",
    "faithful",
    "fake",
    "false",
    "familiar",
    "famous",
    "fancy",
    "fantastic",
    "far",
    "faraway",
    "far-flung",
    "far-off",
    "fast",
    "fat",
    "fatal",
    "fatherly",
    "favorable",
    "favorite",
    "fearful",
    "fearless",
    "feisty",
    "feline",
    "female",
    "feminine",
    "few",
    "fickle",
    "filthy",
    "fine",
    "finished",
    "firm",
    "first",
    "firsthand",
    "fitting",
    "fixed",
    "flaky",
    "flamboyant",
    "flashy",
    "flat",
    "flawed",
    "flawless",
    "flickering",
    "flimsy",
    "flippant",
    "flowery",
    "fluffy",
    "fluid",
    "flustered",
    "focused",
    "fond",
    "foolhardy",
    "foolish",
    "forceful",
    "forked",
    "formal",
    "forsaken",
    "forthright",
    "fortunate",
    "fragrant",
    "frail",
    "frank",
    "frayed",
    "free",
    "French",
    "fresh",
    "frequent",
    "friendly",
    "frightened",
    "frightening",
    "frigid",
    "frilly",
    "frizzy",
    "frivolous",
    "front",
    "frosty",
    "frozen",
    "frugal",
    "fruitful",
    "full",
    "fumbling",
    "functional",
    "funny",
    "fussy",
    "fuzzy",
    "gargantuan",
    "gaseous",
    "general",
    "generous",
    "gentle",
    "genuine",
    "giant",
    "giddy",
    "gigantic",
    "gifted",
    "giving",
    "glamorous",
    "glaring",
    "glass",
    "gleaming",
    "gleeful",
    "glistening",
    "glittering",
    "gloomy",
    "glorious",
    "glossy",
    "glum",
    "golden",
    "good",
    "good-natured",
    "gorgeous",
    "graceful",
    "gracious",
    "grand",
    "grandiose",
    "granular",
    "grateful",
    "grave",
    "gray",
    "great",
    "greedy",
    "green",
    "gregarious",
    "grim",
    "grimy",
    "gripping",
    "grizzled",
    "gross",
    "grotesque",
    "grouchy",
    "grounded",
    "growing",
    "growling",
    "grown",
    "grubby",
    "gruesome",
    "grumpy",
    "guilty",
    "gullible",
    "gummy",
    "hairy",
    "half",
    "handmade",
    "handsome",
    "handy",
    "happy",
    "happy-go-lucky",
    "hard",
    "hard-to-find",
    "harmful",
    "harmless",
    "harmonious",
    "harsh",
    "hasty",
    "hateful",
    "haunting",
    "healthy",
    "heartfelt",
    "hearty",
    "heavenly",
    "heavy",
    "hefty",
    "helpful",
    "helpless",
    "hidden",
    "hideous",
    "high",
    "high-level",
    "hilarious",
    "hoarse",
    "hollow",
    "homely",
    "honest",
    "honorable",
    "honored",
    "hopeful",
    "horrible",
    "hospitable",
    "hot",
    "huge",
    "humble",
    "humiliating",
    "humming",
    "humongous",
    "hungry",
    "hurtful",
    "husky",
    "icky",
    "icy",
    "ideal",
    "idealistic",
    "identical",
    "idle",
    "idiotic",
    "idolized",
    "ignorant",
    "ill",
    "illegal",
    "ill-fated",
    "ill-informed",
    "illiterate",
    "illustrious",
    "imaginary",
    "imaginative",
    "immaculate",
    "immaterial",
    "immediate",
    "immense",
    "impassioned",
    "impeccable",
    "impartial",
    "imperfect",
    "imperturbable",
    "impish",
    "impolite",
    "important",
    "impossible",
    "impractical",
    "impressionable",
    "impressive",
    "improbable",
    "impure",
    "inborn",
    "incomparable",
    "incompatible",
    "incomplete",
    "inconsequential",
    "incredible",
    "indelible",
    "inexperienced",
    "indolent",
    "infamous",
    "infantile",
    "infatuated",
    "inferior",
    "infinite",
    "informal",
    "innocent",
    "insecure",
    "insidious",
    "insignificant",
    "insistent",
    "instructive",
    "insubstantial",
    "intelligent",
    "intent",
    "intentional",
    "interesting",
    "internal",
    "international",
    "intrepid",
    "ironclad",
    "irresponsible",
    "irritating",
    "itchy",
    "jaded",
    "jagged",
    "jam-packed",
    "jaunty",
    "jealous",
    "jittery",
    "joint",
    "jolly",
    "jovial",
    "joyful",
    "joyous",
    "jubilant",
    "judicious",
    "juicy",
    "jumbo",
    "junior",
    "jumpy",
    "juvenile",
    "kaleidoscopic",
    "keen",
    "key",
    "kind",
    "kindhearted",
    "kindly",
    "klutzy",
    "knobby",
    "knotty",
    "knowledgeable",
    "knowing",
    "known",
    "kooky",
    "kosher",
    "lame",
    "lanky",
    "large",
    "last",
    "lasting",
    "late",
    "lavish",
    "lawful",
    "lazy",
    "leading",
    "lean",
    "leafy",
    "left",
    "legal",
    "legitimate",
    "light",
    "lighthearted",
    "likable",
    "likely",
    "limited",
    "limp",
    "limping",
    "linear",
    "lined",
    "liquid",
    "little",
    "live",
    "lively",
    "livid",
    "loathsome",
    "lone",
    "lonely",
    "long",
    "long-term",
    "loose",
    "lopsided",
    "lost",
    "loud",
    "lovable",
    "lovely",
    "loving",
    "low",
    "loyal",
    "lucky",
    "lumbering",
    "luminous",
    "lumpy",
    "lustrous",
    "luxurious",
    "mad",
    "made-up",
    "magnificent",
    "majestic",
    "major",
    "male",
    "mammoth",
    "married",
    "marvelous",
    "masculine",
    "massive",
    "mature",
    "meager",
    "mealy",
    "mean",
    "measly",
    "meaty",
    "medical",
    "mediocre",
    "medium",
    "meek",
    "mellow",
    "melodic",
    "memorable",
    "menacing",
    "merry",
    "messy",
    "metallic",
    "mild",
    "milky",
    "mindless",
    "miniature",
    "minor",
    "minty",
    "miserable",
    "miserly",
    "misguided",
    "misty",
    "mixed",
    "modern",
    "modest",
    "moist",
    "monstrous",
    "monthly",
    "monumental",
    "moral",
    "mortified",
    "motherly",
    "motionless",
    "mountainous",
    "muddy",
    "muffled",
    "multicolored",
    "mundane",
    "murky",
    "mushy",
    "musty",
    "muted",
    "mysterious",
    "naive",
    "narrow",
    "nasty",
    "natural",
    "naughty",
    "nautical",
    "near",
    "neat",
    "necessary",
    "needy",
    "negative",
    "neglected",
    "negligible",
    "neighboring",
    "nervous",
    "new",
    "next",
    "nice",
    "nifty",
    "nimble",
    "nippy",
    "nocturnal",
    "noisy",
    "nonstop",
    "normal",
    "notable",
    "noted",
    "noteworthy",
    "novel",
    "noxious",
    "numb",
    "nutritious",
    "nutty",
    "obedient",
    "obese",
    "oblong",
    "oily",
    "oblong",
    "obvious",
    "occasional",
    "odd",
    "oddball",
    "offbeat",
    "offensive",
    "official",
    "old",
    "old-fashioned",
    "only",
    "open",
    "optimal",
    "optimistic",
    "opulent",
    "orange",
    "orderly",
    "organic",
    "ornate",
    "ornery",
    "ordinary",
    "original",
    "other",
    "our",
    "outlying",
    "outgoing",
    "outlandish",
    "outrageous",
    "outstanding",
    "oval",
    "overcooked",
    "overdue",
    "overjoyed",
    "overlooked",
    "palatable",
    "pale",
    "paltry",
    "parallel",
    "parched",
    "partial",
    "passionate",
    "past",
    "pastel",
    "peaceful",
    "peppery",
    "perfect",
    "perfumed",
    "periodic",
    "perky",
    "personal",
    "pertinent",
    "pesky",
    "pessimistic",
    "petty",
    "phony",
    "physical",
    "piercing",
    "pink",
    "pitiful",
    "plain",
    "plaintive",
    "plastic",
    "playful",
    "pleasant",
    "pleased",
    "pleasing",
    "plump",
    "plush",
    "polished",
    "polite",
    "political",
    "pointed",
    "pointless",
    "poised",
    "poor",
    "popular",
    "portly",
    "posh",
    "positive",
    "possible",
    "potable",
    "powerful",
    "powerless",
    "practical",
    "precious",
    "present",
    "prestigious",
    "pretty",
    "precious",
    "previous",
    "pricey",
    "prickly",
    "primary",
    "prime",
    "pristine",
    "private",
    "prize",
    "probable",
    "productive",
    "profitable",
    "profuse",
    "proper",
    "proud",
    "prudent",
    "punctual",
    "pungent",
    "puny",
    "pure",
    "purple",
    "pushy",
    "putrid",
    "puzzled",
    "puzzling",
    "quaint",
    "qualified",
    "quarrelsome",
    "quarterly",
    "queasy",
    "querulous",
    "questionable",
    "quick",
    "quick-witted",
    "quiet",
    "quintessential",
    "quirky",
    "quixotic",
    "quizzical",
    "radiant",
    "ragged",
    "rapid",
    "rare",
    "rash",
    "raw",
    "recent",
    "reckless",
    "rectangular",
    "ready",
    "real",
    "realistic",
    "reasonable",
    "red",
    "reflecting",
    "regal",
    "regular",
    "reliable",
    "relieved",
    "remarkable",
    "remorseful",
    "remote",
    "repentant",
    "required",
    "respectful",
    "responsible",
    "repulsive",
    "revolving",
    "rewarding",
    "rich",
    "rigid",
    "right",
    "ringed",
    "ripe",
    "roasted",
    "robust",
    "rosy",
    "rotating",
    "rotten",
    "rough",
    "round",
    "rowdy",
    "royal",
    "rubbery",
    "rundown",
    "ruddy",
    "rude",
    "runny",
    "rural",
    "rusty",
    "sad",
    "safe",
    "salty",
    "same",
    "sandy",
    "sane",
    "sarcastic",
    "sardonic",
    "satisfied",
    "scaly",
    "scarce",
    "scared",
    "scary",
    "scented",
    "scholarly",
    "scientific",
    "scornful",
    "scratchy",
    "scrawny",
    "second",
    "secondary",
    "second-hand",
    "secret",
    "self-assured",
    "self-reliant",
    "selfish",
    "sentimental",
    "separate",
    "serene",
    "serious",
    "serpentine",
    "several",
    "severe",
    "shabby",
    "shadowy",
    "shady",
    "shallow",
    "shameful",
    "shameless",
    "sharp",
    "shimmering",
    "shiny",
    "shocked",
    "shocking",
    "shoddy",
    "short",
    "short-term",
    "showy",
    "shrill",
    "shy",
    "sick",
    "silent",
    "silky",
    "silly",
    "silver",
    "similar",
    "simple",
    "simplistic",
    "sinful",
    "single",
    "sizzling",
    "skeletal",
    "skinny",
    "sleepy",
    "slight",
    "slim",
    "slimy",
    "slippery",
    "slow",
    "slushy",
    "small",
    "smart",
    "smoggy",
    "smooth",
    "smug",
    "snappy",
    "snarling",
    "sneaky",
    "sniveling",
    "snoopy",
    "sociable",
    "soft",
    "soggy",
    "solid",
    "somber",
    "some",
    "spherical",
    "sophisticated",
    "sore",
    "sorrowful",
    "soulful",
    "soupy",
    "sour",
    "Spanish",
    "sparkling",
    "sparse",
    "specific",
    "spectacular",
    "speedy",
    "spicy",
    "spiffy",
    "spirited",
    "spiteful",
    "splendid",
    "spotless",
    "spotted",
    "spry",
    "square",
    "squeaky",
    "squiggly",
    "stable",
    "staid",
    "stained",
    "stale",
    "standard",
    "starchy",
    "stark",
    "starry",
    "steep",
    "sticky",
    "stiff",
    "stimulating",
    "stingy",
    "stormy",
    "straight",
    "strange",
    "steel",
    "strict",
    "strident",
    "striking",
    "striped",
    "strong",
    "studious",
    "stunning",
    "stupendous",
    "stupid",
    "sturdy",
    "stylish",
    "subdued",
    "submissive",
    "substantial",
    "subtle",
    "suburban",
    "sudden",
    "sugary",
    "sunny",
    "super",
    "superb",
    "superficial",
    "superior",
    "supportive",
    "sure-footed",
    "surprised",
    "suspicious",
    "svelte",
    "sweaty",
    "sweet",
    "sweltering",
    "swift",
    "sympathetic",
    "tall",
    "talkative",
    "tame",
    "tan",
    "tangible",
    "tart",
    "tasty",
    "tattered",
    "taut",
    "tedious",
    "teeming",
    "tempting",
    "tender",
    "tense",
    "tepid",
    "terrible",
    "terrific",
    "testy",
    "thankful",
    "that",
    "these",
    "thick",
    "thin",
    "third",
    "thirsty",
    "this",
    "thorough",
    "thorny",
    "those",
    "thoughtful",
    "threadbare",
    "thrifty",
    "thunderous",
    "tidy",
    "tight",
    "timely",
    "tinted",
    "tiny",
    "tired",
    "torn",
    "total",
    "tough",
    "traumatic",
    "treasured",
    "tremendous",
    "tragic",
    "trained",
    "tremendous",
    "triangular",
    "tricky",
    "trifling",
    "trim",
    "trivial",
    "troubled",
    "true",
    "trusting",
    "trustworthy",
    "trusty",
    "truthful",
    "tubby",
    "turbulent",
    "twin",
    "ugly",
    "ultimate",
    "unacceptable",
    "unaware",
    "uncomfortable",
    "uncommon",
    "unconscious",
    "understated",
    "unequaled",
    "uneven",
    "unfinished",
    "unfit",
    "unfolded",
    "unfortunate",
    "unhappy",
    "unhealthy",
    "uniform",
    "unimportant",
    "unique",
    "united",
    "unkempt",
    "unknown",
    "unlawful",
    "unlined",
    "unlucky",
    "unnatural",
    "unpleasant",
    "unrealistic",
    "unripe",
    "unruly",
    "unselfish",
    "unsightly",
    "unsteady",
    "unsung",
    "untidy",
    "untimely",
    "untried",
    "untrue",
    "unused",
    "unusual",
    "unwelcome",
    "unwieldy",
    "unwilling",
    "unwitting",
    "unwritten",
    "upbeat",
    "upright",
    "upset",
    "urban",
    "usable",
    "used",
    "useful",
    "useless",
    "utilized",
    "utter",
    "vacant",
    "vague",
    "vain",
    "valid",
    "valuable",
    "vapid",
    "variable",
    "vast",
    "velvety",
    "venerated",
    "vengeful",
    "verifiable",
    "vibrant",
    "vicious",
    "victorious",
    "vigilant",
    "vigorous",
    "villainous",
    "violet",
    "violent",
    "virtual",
    "virtuous",
    "visible",
    "vital",
    "vivacious",
    "vivid",
    "voluminous",
    "wan",
    "warlike",
    "warm",
    "warmhearted",
    "warped",
    "wary",
    "wasteful",
    "watchful",
    "waterlogged",
    "watery",
    "wavy",
    "wealthy",
    "weak",
    "weary",
    "webbed",
    "wee",
    "weekly",
    "weepy",
    "weighty",
    "weird",
    "welcome",
    "well-documented",
    "well-groomed",
    "well-informed",
    "well-lit",
    "well-made",
    "well-off",
    "well-to-do",
    "well-worn",
    "wet",
    "which",
    "whimsical",
    "whirlwind",
    "whispered",
    "white",
    "whole",
    "whopping",
    "wicked",
    "wide",
    "wide-eyed",
    "wiggly",
    "wild",
    "willing",
    "wilted",
    "winding",
    "windy",
    "winged",
    "wiry",
    "wise",
    "witty",
    "wobbly",
    "woeful",
    "wonderful",
    "wooden",
    "woozy",
    "wordy",
    "worldly",
    "worn",
    "worried",
    "worrisome",
    "worse",
    "worst",
    "worthless",
    "worthwhile",
    "worthy",
    "wrathful",
    "wretched",
    "writhing",
    "wrong",
    "wry",
    "yawning",
    "yearly",
    "yellow",
    "yellowish",
    "young",
    "youthful",
    "yummy",
    "zany",
    "zealous",
    "zesty",
    "zigzag",
    "rocky"
  ];
  var name2 = [
    "Language Arts",
    "Mathematics",
    "Science",
    "Health",
    "Handwriting",
    "Art",
    "Music",
    "Dramatics",
    "Dance",
    "Leadership",
    "Resource Program",
    "Speech",
    "Adaptive PE",
    "Reading",
    "Language arts",
    "Speech and Debate",
    "English",
    "Basic Math",
    "Prealgebra",
    "Consumer Math",
    "Algebra",
    "Geometry",
    "Life Science",
    "Earth Science",
    "Physical Science",
    "Health",
    "Social Studies",
    "Geography",
    "Art",
    "Home Economics",
    "Woodshop",
    "Metal Shop",
    "Band",
    "Choir",
    "Drama",
    "Sports",
    "Resource Program",
    "Speech Therapy",
    "English I",
    "English II",
    "English III",
    "English IV",
    "Remedial English",
    "World Literature",
    "Modern Literature",
    "Short Story",
    "Shakespeare",
    "Composition",
    "Creative Writing",
    "Poetry",
    "Grammar",
    "Vocabulary",
    "Debate",
    "Speech",
    "Journalism",
    "Publishing Skills",
    "Photojournalism",
    "Yearbook",
    "Study Skills",
    "Research Skills",
    "Art I",
    "Art II",
    "Art III",
    "Art IV",
    "Art Appreciation",
    "Art History",
    "Drawing",
    "Painting",
    "Sculpture",
    "Ceramics",
    "Pottery",
    "Music History",
    "Music Theory",
    "Band",
    "Orchestra",
    "Choir",
    "Voice",
    "Performing Arts",
    "Dance",
    "Photography",
    "Videography",
    "History of Film",
    "Film Production",
    "Leather Working",
    "Drafting",
    "Metal Work",
    "Auto Mechanics",
    "General Science",
    "Physics",
    "Physical Science",
    "Chemistry",
    "Organic Chemistry",
    "Life Science",
    "Biology",
    "Zoology",
    "Marine Biology",
    "Botany",
    "Earth Science",
    "Geology",
    "Oceanography",
    "Meteorology",
    "Astronomy",
    "Animal Science",
    "Equine Science",
    "Forensic Science",
    "Ecology",
    "Gardening",
    "Food Science",
    "Spanish",
    "French",
    "Japanese",
    "German",
    "Latin",
    "Greek",
    "Hebrew",
    "Chinese",
    "LANGUAGE Culture",
    "LANGUAGE History",
    "Sign Language",
    "Remedial Math",
    "Mathematics",
    "PreAlgebra",
    "Algebra",
    "Algebra I",
    "Algebra II",
    "Geometry",
    "Trigonometry",
    "Precalculus",
    "Calculus",
    "Statistics",
    "Business Math",
    "Consumer Math",
    "Accounting",
    "Ancient History",
    "Medieval History",
    "World History",
    "History of ",
    "World Geography",
    "US History",
    "World Religions",
    "Government",
    "Civics",
    "Economics",
    "Political Science",
    "Social Sciences",
    "Psychology",
    "Sociology",
    "Anthropology",
    "Genealogy",
    "Philosophy",
    "Logic I",
    "Logic II",
    "Critical Thinking",
    "Rhetoric",
    "Health",
    "Nutrition",
    "Gymnastics",
    "Track and Field",
    "Archery",
    "Fencing",
    "Golf",
    "Rock Climbing",
    "Hiking",
    "Equestrian Skills",
    "Weightlifting",
    "Physical Fitness",
    "Aerobics",
    "Yoga",
    "Martial Arts",
    "Ice Skating",
    "Figure skating",
    "Cycling",
    "Bowling",
    "Adapted PE",
    "Keyboarding",
    "Word Processing",
    "Certification in ",
    "Computer Graphics",
    "Digital Arts",
    "Photoshop",
    "Programming",
    "Computer Repair",
    "Web Design",
    "Culinary Arts",
    "Child Development",
    "Home Management",
    "Home Organization",
    "Basic Yard Care",
    "Drivers Education",
    "Social Skills",
    "Career Planning",
    "Study Skills",
    "SAT Prep",
    "WorkStudy",
    "Lifeskills",
    "Resource Program",
    "Speech",
    "Special Day Class"
  ];
  var name =
    capFirst(name1[getRandomInt(0, name1.length + 1)]) +
    " " +
    capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return name;
}

export function print(thing) {
  console.log(thing);
}

let alph = num => {
  return String.fromCharCode(97 + num);
};
export { alph };

export function getColors(num, theme) {
  if (theme == undefined) {
    theme = "summer";
  }
  num = 15;
  let act = [];
  let colors = colormap({
    colormap: theme, //allow user customization
    nshades: num,
    format: "rgba",
    alpha: 1
  });
  for (let x of colors) {
    [r, g, b] = lighten(x);
    act.push("rgba(" + r + "," + g + "," + b + "," + x[3] + ")");
  }
  return act;
}

export function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

export function editCSS(rule) {
  for (const sheet of document.styleSheets) {
    if (sheet.href.includes("style.css")) {
      var styling = sheet;
      break;
    }
  }
  sel = document.all ? "rules" : "cssRules";
  stylingL = Object.keys(styling[sel]).length;
  styling.insertRule(rule, stylingL);
}

let addFake = () => {
  let x = new Course("MATH4B", [10, 20, 70]);
  x.weights[0].grade = { hw1: 100, hw2: 90, hw3: 80, hw4: 90 };
  x.weights[2].grade = { lab1: 100, lab2: 90, lab3: 80, lab4: 90 };
  let y = new Course("PSTAT120A", [1, 1, 2, 96]);
  y.weights[0].grade = {
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6,
    "6": 7
  };
  y.weights[1].grade = { a: 1, b: 2, c: 3, d: 4, e: 50, f: 6, g: 7 };
  y.weights[2].grade = {
    "0": 1,
    "-1": 2,
    "-2": 30,
    "-3": 40,
    "-4": 5,
    "-5": 6,
    "-6": 70
  };
  return { x, y };
  //   save(x, "course");
  //   save(y, "course");
  //   location.reload();
};

export { addFake };
let cClear = () => {
  localStorage.removeItem("gc-datastore");
  location.reload();
};
export { cClear };
export function largestUntitled() {
  store = reconstruct();
  let max = 0;
  for (let x of Object.keys(store)) {
    if (store[x].name.includes("untitled")) {
      if (parseInt(store[x].name.split(" ")[2]) > max) {
        max = parseInt(store[x].name.split(" ")[2]);
      }
    }
  }
  return max;
}

export function reconstruct() {
  try {
    let store = JSON.parse(localStorage.getItem("gc-datastore"));
    let act = {};
    if (store !== null) {
      for (let course of Object.keys(store)) {
        let weights = [];
        for (let component of Object.keys(store[course].weights)) {
          weights.push(store[course].weights[component].weight);
        }
        act[course] = new Course(store[course].name, weights);
        for (let component of Object.keys(store[course].weights)) {
          if (typeof store[course].weights[component].grad === "object") {
            act[course].weights[component].grad =
              store[course].weights[component].grad;
            act[course].weights[component].isList = true;
          } else {
            act[course].weights[component].grade =
              store[course].weights[component].grad;
          }
          act[course].weights[component].name =
            store[course].weights[component].name;
        }
      }
      return act;
    } else {
      return null;
    }
  } catch (e) {
    cClear();
  }
}

export function save(data, type) {
  store = reconstruct();
  try {
    var storelen = Object.keys(store).reduce((a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      return a > b ? a : b;
    });
  } catch {
    var storelen = -1;
  }
  storelen++;
  if (type === "course") {
    store[storelen] = {};
    store[storelen].name = data.name;
    store[storelen].weights = data.export();
    localStorage.setItem("gc-datastore", JSON.stringify(store));
  } else if (type === "component") {
    let courseKey = searchObj(store, data.name);
    store[courseKey] = data;
    localStorage.setItem("gc-datastore", JSON.stringify(store));
  }
}

export function searchObj(store, name) {
  for (let course of Object.keys(store)) {
    if (store[course].name === name) {
      return course;
    }
  }
}
export function searchObjPos(store, name) {
  let c = 0;
  for (let course of Object.keys(store)) {
    if (store[course].name === name) {
      return c;
    }
    c++;
  }
  return -1;
}

export function calcSum(data) {
  let sum = 0;
  for (let i of Object.keys(data.weights)) {
    sum += calcGrad(data.weights[i].grade, data.weights[i].weight);
  }
  return Math.round((sum + Number.EPSILON) * 100) / 100;
}

export function letterGrade(data) {
  let numbergrade = data;
  if (numbergrade >= 97) {
    return "A+";
  } else if (numbergrade >= 93) {
    return "A";
  } else if (numbergrade >= 90) {
    return "A-";
  } else if (numbergrade >= 87) {
    return "B+";
  } else if (numbergrade >= 83) {
    return "B";
  } else if (numbergrade >= 80) {
    return "B-";
  } else if (numbergrade >= 77) {
    return "C+";
  } else if (numbergrade >= 73) {
    return "C";
  } else if (numbergrade >= 70) {
    return "C-";
  } else if (numbergrade >= 67) {
    return "D+";
  } else if (numbergrade >= 63) {
    return "D";
  } else if (numbergrade >= 60) {
    return "D-";
  } else {
    return "F";
  }
}
export function del(name) {
  store = reconstruct();
  delete store[name];
  localStorage.setItem("gc-datastore", JSON.stringify(store));
  location.reload();
}
