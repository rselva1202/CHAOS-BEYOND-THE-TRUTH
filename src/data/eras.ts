import type { EraDetail } from './types';

export const ERAS: EraDetail[] = [
  {
    id: 'zep-tepi',
    name: 'Zep Tepi & the Creation Myth',
    short: 'Zep Tepi',
    span: 'The Primordial Age',
    tagline: '“The First Time” — when the gods themselves ruled Kemet.',
    capital: 'None — the Benben mound at Iunu',
    pharaohs: ['Atum-Ra (divine king)', 'Osiris (mythic ruler)', 'Horus (prototype of kings)'],
    developments: [
      'Emergence of the Benben mound at Heliopolis',
      'Generation of the Ennead — the nine gods of creation',
      'Establishment of Ma’at, the cosmic order',
    ],
    gods: ['Nun', 'Atum-Ra', 'Shu & Tefnut', 'Geb & Nut', 'Osiris, Isis, Set, Nephthys'],
    sections: [
      {
        heading: 'The Waters of Nun',
        paragraphs: [
          'Before the world had a name, there was only Nun — an infinite, black ocean of unformed potential. The Egyptians imagined it as inert, neither light nor dark, neither god nor void: pure chaos without a single landmark. Every creation account begins here, and no matter how the stories differ, all agree that everything that would ever exist lay hidden inside those waters, waiting.',
          'From the depths rose a mound of dry earth — the Benben, the primeval hill. The yearly flooding of the Nile made this image real for Egyptians every single year: as the flood withdrew, the first hills of mud appeared above the water, and life rushed back onto them. Creation was not a one-time event but a pattern the cosmos repeated forever.',
        ],
      },
      {
        heading: 'Atum-Ra Speaks the World',
        paragraphs: [
          'Standing alone on the Benben at Heliopolis, the god Atum — joined from the earliest times with the sun as Atum-Ra — began the work of creation. He brought forth the first pair, Shu the air and Tefnut the moisture, by speaking their names and, in the priestly telling, by an act of solitary generation. To speak a thing in Kemet was to make it real: names had substance, and creation was an act of language.',
          'Shu and Tefnut in turn produced Geb the earth and Nut the sky, and their union filled the world with the last generations of gods. This company of nine — the Great Ennead of Heliopolis — became the charter of Egyptian religion. Every temple in Egypt told its own version of the story, from Memphis (where Ptah spoke creation through heart and tongue) to Hermopolis (where eight primordial powers preceded the sun), but the Heliopolitan Ennead remained the state’s official memory of the beginning.',
        ],
      },
      {
        heading: 'Shu Separates Earth and Sky',
        paragraphs: [
          'In the beginning Geb and Nut lay so close together that nothing could exist between them. Their father Shu, god of air and sunlight, placed himself between their bodies and lifted Nut high above Geb — earth below, sky above, and the atmosphere between them becoming the space where all living things would breathe. The Egyptians drew this everywhere: the air god standing, arms raised, holding the star-covered goddess above the reclining earth.',
          'It was into this newly opened space that Ma’at — truth, justice, cosmic balance — was established. The entire apparatus of Egyptian civilization, from pharaoh’s crown to the farmer’s plow, existed for one purpose: to keep Ma’at standing, to keep Shu’s arms from tiring, to keep the waters of Nun from closing over the world again. When a pharaoh restored a crumbling temple he was not renovating; he was re-enacting the First Time.',
        ],
      },
    ],
  },
  {
    id: 'early-dynastic',
    name: 'Predynastic & Early Dynastic Egypt',
    short: 'Early Dynastic',
    span: 'c. 6000 – 2613 BCE',
    tagline: 'From farming villages on the floodplain to the first dynasty of the Two Lands.',
    capital: 'Memphis (Ineb-Hedj)',
    pharaohs: ['King Narmer / Menes', 'Hor-Aha', 'Den', 'Khasekhemwy'],
    developments: [
      'Badarian and Naqada I–III village cultures (c. 4400–3100 BCE)',
      'Earliest hieroglyphic writing and royal iconography',
      'Primitive mummification at Hierakonpolis',
      'Unification of Upper and Lower Egypt (c. 3100 BCE)',
    ],
    gods: ['Horus (royal patron)', 'Seth of Nubt', 'Min of Coptos', 'Neith of Sais'],
    sections: [
      {
        heading: 'Villages on the Floodplain',
        paragraphs: [
          'Egyptian civilization grew out of the Nile’s rhythm. In the Badarian culture (c. 4400 BCE) farmers of the valley raised emmer wheat and flax, fired the finest black-topped pottery of the ancient world, and buried their dead facing the river in shallow graves with their possessions. Their successors of Naqada I–III built real towns, mastered copper and long-distance trade with Nubia and the Levant, and painted their pottery with boats, hunting scenes, and the first unmistakable pictures of kings.',
          'Power concentrated at three great centers: Hierakonpolis and Abydos in Upper Egypt, Buto in the Delta. At Hierakonpolis, elite Tomb 100 held the earliest evidence of deliberate mummification — a wrapped body, part-treated for eternity — and the temple precinct there would yield the objects that mark the birth of the dynastic state.',
        ],
      },
      {
        heading: 'Narmer and the Two Lands',
        paragraphs: [
          'The Narmer Palette, carved just before 3000 BCE, is the founding document of Egyptian art: on one side the king wears the White Crown of Upper Egypt smiting an enemy; on the other he wears the Red Crown of Lower Egypt reviewing the dead. One man, two crowns — the earliest unambiguous image of a unified state. Tradition remembered this king as Menes, the founder; the archaeology calls him Narmer; they are likely the same person.',
          'Unification was not a single battle but a long consolidation. The First Dynasty kings ruled from Memphis — newly founded at the apex of the Delta, facing both lands — while their ancestral tombs stayed at Abydos. Dynasties I–II spent three centuries making the idea of Egypt stick: hieroglyphic writing was standardized for administration, the calendar was regularized, and royal tombs at Abydos grew from mudbrick mastabas into palace-fortresses with retainer burials — the first hints of the obsession with eternity that would later pile up mountains of stone.',
        ],
      },
    ],
  },
  {
    id: 'old-kingdom',
    name: 'The Old Kingdom',
    short: 'Old Kingdom',
    span: 'c. 2613 – 2181 BCE',
    tagline: 'The Age of the Pyramids — kings become gods in stone.',
    capital: 'Memphis (Ineb-Hedj)',
    pharaohs: ['Djoser', 'Khufu', 'Khafre', 'Menkaure', 'Pepi II'],
    developments: [
      'Step Pyramid of Djoser at Saqqara (c. 2670 BCE)',
      'Great Pyramid of Khufu and the Giza complex (c. 2560 BCE)',
      'The Sphinx carved on the Giza plateau',
      'Rise of the Ra solar cult and sun temples',
      'Pyramid Texts — the oldest religious corpus on earth',
    ],
    gods: ['Ra', 'Horus', 'Ptah of Memphis', 'Atum', 'Sokar'],
    sections: [
      {
        heading: 'Djoser and the First Architect',
        paragraphs: [
          'The king was now unambiguously a god on earth — the living Horus, son of Ra — and the state he commanded proved it in limestone. At Saqqara around 2670 BCE, King Djoser and his architect Imhotep stacked six successively smaller mastabas into the Step Pyramid: the first large cut-stone building in human history. Beneath it stretched miles of galleries, blue-tiled chambers, and dummy chambers built for the eternal household of the king.',
          'Imhotep would be deified for this achievement — remembered three thousand years later as a sage and physician standing beside the gods themselves. No architect before or since held that place in Egypt’s memory so completely.',
        ],
      },
      {
        heading: 'The Horizon of Giza',
        paragraphs: [
          'Within four generations the experiment reached its apex. Khufu’s Great Pyramid — 2.3 million blocks averaging 2.5 tons each, aligned to true north within a twentieth of a degree — rose beside Khafre’s pyramid and the Great Sphinx, with Menkaure’s smaller pyramid completing the horizon. The workmen were not slaves but organized crews of farmers serving corvée labor in the flood season, housed in purpose-built villages whose bakeries and breweries archaeologists have excavated.',
          'This was the age of Heliopolis’ ascendancy. The sun cult of Ra became the state religion; kings built sun temples with short obelisks to catch the first light; and the pyramid itself was understood as a machine of resurrection — a ramp of stone for the king’s soul to climb into the sky. In the pyramid chambers of the late Fifth and Sixth Dynasties, scribes painted the Pyramid Texts: the oldest substantial religious literature on earth, still recited after four and a half thousand years.',
        ],
      },
      {
        heading: 'The Center Cannot Hold',
        paragraphs: [
          'The Old Kingdom’s end was as instructive as its height. Long-reigned kings (Pepi II ruled past ninety), droughts that thinned the flood, and provincial governors who made their offices hereditary drained the center. By the 2200s BCE the nomes had swallowed royal authority, the pyramid-builders’ line guttered out, and Egypt fell apart into competing districts — the First Intermediate Period, when for the first time ordinary Egyptians wrote down what it felt like when the world order failed.',
        ],
      },
    ],
  },
  {
    id: 'middle-kingdom',
    name: 'First Intermediate & Middle Kingdom',
    short: 'Middle Kingdom',
    span: 'c. 2181 – 1782 BCE',
    tagline: 'The Classical Renaissance — literature, justice, and a god for every man.',
    capital: 'Itj-tawy (near the Faiyum)',
    pharaohs: ['Mentuhotep II', 'Amenemhat I', 'Senusret III', 'Amenemhat III'],
    developments: [
      'Reunification of Egypt under Mentuhotep II (c. 2055 BCE)',
      'Classical literature — the Tale of Sinuhe, the Eloquent Peasant',
      'Faiyum land reclamation and Nubian fortresses',
      'Coffin Texts democratize the afterlife',
    ],
    gods: ['Osiris', 'Amun of Thebes', 'Montu', 'Ptah', 'Hathor'],
    sections: [
      {
        heading: 'When the Center Fell',
        paragraphs: [
          'The First Intermediate Period broke the myth of royal infallibility. Provincial governors ruled their nomes as petty kings, art went local and rough, and — for the first time in history — ordinary Egyptians wrote down their own complaints, poems, and propaganda. The pessimistic literature of this age (the Admonitions of Ipuwer, the Dialogue of a Man with His Ba) asked what the point of order was, precisely because everyone could see what its absence looked like.',
          'Out of the chaos came a new idea of kingship. Mentuhotep II of Thebes defeated the Herakleopolitan dynasty and reunified the Two Lands around 2055 BCE — but he was depicted not as a remote god-king in the Old Kingdom style; his mortuary temple at Deir el-Bahari shows a rugged war-king in the long white robe of a man of the people.',
        ],
      },
      {
        heading: 'The Classical Age',
        paragraphs: [
          'The Middle Kingdom (c. 2055–1782 BCE) became Egypt’s classical age. Under Amenemhat I and Senusret III the state professionalized: the capital moved to Itj-tawy near the Faiyum, Nubia was fortified to the Second Cataract with a chain of massive mudbrick fortresses, and the Faiyum basin was drained and reclaimed for farmland. Scribes of this era copied down the works Egyptians would study for a thousand years — the Tale of Sinuhe, the Eloquent Peasant, the Instructions of Amenemhat — in a dialect so fine that later ages called Middle Egyptian the classical language.',
          'The kings of the Twelfth Dynasty also reorganized the succession and the priesthood, trimming the power that provincial temples had accumulated. But the deepest change was not political.',
        ],
      },
      {
        heading: 'A God for Every Man',
        paragraphs: [
          'Religion democratized. The Osiris cult — with its promise that ANY soul judged pure could reach the Field of Reeds, not just kings — swept the country during the Middle Kingdom. Abydos became the great pilgrimage center where commoners by the thousands buried votive stelae and even cenotaphs, hoping to be near the god. The Coffin Texts put the pyramid’s secret spells into ordinary coffins, and judgment after death — once the pharaoh’s monopoly — became every Egyptian’s hope and every Egyptian’s dread.',
          'When the Middle Kingdom itself dissolved into the Second Intermediate Period, the foreign Hyksos kings who seized the Delta would inherit a population that no longer believed its rulers were gods — only that the gods judged them all.',
        ],
      },
    ],
  },
  {
    id: 'new-kingdom',
    name: 'Second Intermediate & New Kingdom',
    short: 'New Kingdom',
    span: 'c. 1782 – 1069 BCE',
    tagline: 'The Golden Empire — Egypt rules the world, and then fights its own soul.',
    capital: 'Thebes (Waset), later Akhetaten & Pi-Ramesses',
    pharaohs: ['Ahmose I', 'Hatshepsut', 'Thutmose III', 'Akhenaten & Nefertiti', 'Tutankhamun', 'Ramesses II'],
    developments: [
      'Expulsion of the Hyksos; chariot-based empire (c. 1550 BCE)',
      'Hatshepsut’s reign and Punt expedition',
      'Amarna heresy — Akhenaten’s worship of the Aten',
      'Battle of Kadesh and the first peace treaty (c. 1274 BCE)',
      'Karnak, Luxor, and Abu Simbel completed or expanded',
    ],
    gods: ['Amun-Ra', 'Aten (Amarna interlude)', 'Mut & Khonsu', 'Sekhmet', 'Ptah'],
    sections: [
      {
        heading: 'Chariots of the Expulsion',
        paragraphs: [
          'Foreign kings rode chariots into the Delta. The Hyksos — “rulers of foreign lands” — ruled Lower Egypt for a century until Ahmose I of Thebes expelled them (c. 1550 BCE), chasing them to Sharuhen in Palestine. Egypt, having learned the chariot and the composite bow, never stopped: the New Kingdom was born imperial, with standing armies, foreign vassals, and tribute from Nubia’s gold mines and Syria’s cities reshaping the temple economy of Thebes.',
          'Thutmose III marched to the Euphrates and defeated a coalition at Megiddo; his armies made Egypt the superpower of the Late Bronze Age, and the wealth flowed south to Thebes, where Amun-Ra now reigned as king of the gods and Karnak grew building by building into the largest religious complex on earth.',
        ],
      },
      {
        heading: 'Hatshepsut and the Woman Who Was King',
        paragraphs: [
          'Hatshepsut, widow of Thutmose II, ruled first as regent for her nephew — then as pharaoh in her own right for two decades, adopting the full male regalia and the title King of Upper and Lower Egypt. Her reign was peaceful and prosperous: she sent the famous trading expedition to Punt (recorded in full color on her temple walls), rebuilt neglected shrines, and raised her terraced mortuary temple at Deir el-Bahari like a staircase to the cliffs.',
          'After her death Thutmose III erased her images — not out of personal hate, most historians think, but to secure the succession of his own son and reassert a masculine model of kingship. Time undid the erasure: modern Egyptology restored her, and she is now the most famous woman ruler of the ancient world after Cleopatra.',
        ],
      },
      {
        heading: 'The Sun-Disk Heresy',
        paragraphs: [
          'Then came the great rupture. Amenhotep IV — renaming himself Akhenaten — abandoned Amun, closed the great temples, moved the capital to virgin desert at Amarna (Akhetaten), and imposed the worship of one god alone: the visible sun-disk Aten, drawn with rays ending in hands. With Nefertiti beside him, he oversaw the most radical religious revolution of antiquity — sometimes called the first monotheism.',
          'It collapsed within a generation. Tutankhamun, the boy on the throne, restored the old gods and died at eighteen — his untouched tomb, discovered by Howard Carter in 1922, becoming archaeology’s most famous find. The Amarna episode left a scar: the priesthood of Amun emerged more powerful than ever, and within a century the High Priests of Amun at Thebes would rule the south as kings in all but name.',
        ],
      },
      {
        heading: 'Ramesses the Great and Kadesh',
        paragraphs: [
          'The Nineteenth Dynasty brought the empire’s high noon. Ramesses II — the Great — built Abu Simbel and the Ramesseum, fathered more than a hundred children, and reigned sixty-seven years. In Year 5 he faced the Hittite king Muwatalli at Kadesh: a battle he claimed as total victory on every temple wall, that was in truth a near-disaster rescued by his personal courage and the arrival of reinforcements — and that eventually produced the world’s first surviving international peace treaty (c. 1259 BCE).',
          'Egypt’s sphere stretched from Syria to the Sudan. The Valley of the Kings filled with rock-cut tombs; Luxor Temple rose; and when Ramesses finally died, the empire he left was splendid — but the priest-kings of Amun held the south, the Libyans pressed the Delta, and within a century the golden age was over.',
        ],
      },
    ],
  },
  {
    id: 'late-period',
    name: 'Third Intermediate & Late Period',
    short: 'Late Period',
    span: 'c. 1069 – 323 BCE',
    tagline: 'Foreign crowns, enduring faith — Egypt survives its conquerors.',
    capital: 'Tanis, then Sais, then Memphis',
    pharaohs: ['Piye', 'Taharqa', 'Necho II', 'Amasis II', 'Alexander the Great'],
    developments: [
      'Nubian 25th Dynasty and its archaist revival (c. 747–656 BCE)',
      'Saite renaissance under the 26th Dynasty',
      'Persian conquest (525 BCE) and Alexander’s (332 BCE)',
      'Serapeum, animal cults, standardized Book of the Dead',
    ],
    gods: ['Amun (of Siwa & Karnak)', 'Osiris & Apis', 'Neith', 'Thoth of Hermopolis', 'Bastet'],
    sections: [
      {
        heading: 'The Black Pharaohs',
        paragraphs: [
          'The long slide was punctuated by astonishing revivals. Libyan dynasties ruled from the Delta; then, in 747 BCE, the Kushite king Piye marched north from Nubia — a kingdom older than Egypt’s New Kingdom, at Napata below the Fourth Cataract — and founded the 25th Dynasty.',
          'The black pharaohs saw themselves not as conquerors but as restorers. Taharqa, their greatest king, revived Old Kingdom art styles, buried his family under true pyramids (in Nubia, where more pyramids still stand than in Egypt), and campaigned against the Assyrians who were eating the Levant. The Assyrians pushed them out of Egypt by 656 BCE, but the Nubian dynasty ruled its homeland for another thousand years — the longest-lasting civilization Egypt ever spawned.',
        ],
      },
      {
        heading: 'The Saite Flowering and the Persians',
        paragraphs: [
          'The Saite dynasty (26th Dynasty) gave Egypt its last native flower. From their capital at Sais, Necho II dug the first canal toward the Red Sea and sent Phoenician sailors around Africa; Amasis II invited Greek merchants to the trading city of Naucratis and styled his court after the Old Kingdom, copying monuments and tomb texts with a scholar’s precision — the first great act of Egyptian archaeology, performed by Egyptians.',
          'In 525 BCE the Persian king Cambyses took Egypt; two centuries later Alexander the Great took it from them, and was crowned pharaoh at Memphis — where the oracle of Siwa would soon declare him son of Amun. Egypt had become a province of empires.',
        ],
      },
      {
        heading: 'What the Priests Kept',
        paragraphs: [
          'Through every conquest the temples kept the old rites. Animal cults flourished to industrial scale — the Serapeum at Saqqara housed the embalmed Apis bulls in granite sarcophagi of eighty tons; ibis and cat mummies were produced by the million. The Book of the Dead was standardized; the priests of Memphis and Thebes transcribed and archived everything that would later let the Ptolemies — and, much later, modern historians — rebuild the whole edifice. The conquerors ruled the land, but the priests kept the memory.',
        ],
      },
    ],
  },
  {
    id: 'ptolemaic',
    name: 'Ptolemaic Egypt & Cleopatra VII',
    short: 'Ptolemaic',
    span: '323 – 30 BCE',
    tagline: 'Greek kings on an Egyptian throne — and the last pharaoh of all.',
    capital: 'Alexandria',
    pharaohs: ['Ptolemy I Soter', 'Ptolemy II Philadelphus', 'Ptolemy XII', 'Cleopatra VII'],
    developments: [
      'Ptolemaic dynasty founded (305 BCE)',
      'Library and Museum of Alexandria',
      'Serapis cult; Philae temple of Isis completed',
      'Battle of Actium (31 BCE); Egypt annexed by Rome (30 BCE)',
    ],
    gods: ['Serapis', 'Isis (universal)', 'Harpocrates', 'Amun-Ra', 'Horus of Edfu'],
    sections: [
      {
        heading: 'Alexander’s Inheritance',
        paragraphs: [
          'After Alexander died in Babylon in 323 BCE, his general Ptolemy seized the richest satrapy on earth and had himself crowned pharaoh in Memphis, founding a dynasty that would rule three centuries. The Ptolemies were Macedonian Greek — they spoke Greek, married their siblings, and never troubled to learn Egyptian — but they understood legitimacy: they rebuilt and funded every major temple in Egypt, fused gods (Serapis, part Osiris, part Greek, invented for the purpose), and poured the world’s trade through their new capital.',
          'Alexandria became the intellectual capital of the planet: the Library aimed to own every book ever written, the Museum paid scholars to think, and the Pharos lighthouse — one of the Seven Wonders — lit the harbor. At Philae, begun under Nectanebo and finished by the Ptolemies, Isis received worship so magnetic that her cult sailed across the whole Mediterranean and outlived the empire that built her temple.',
        ],
      },
      {
        heading: 'The Last Pharaoh',
        paragraphs: [
          'The dynasty ended in brilliance and ruin. Cleopatra VII — the first Ptolemy in three hundred years to speak Egyptian, a scholar of nine languages, raised on the Library’s classics — allied first with Julius Caesar (and bore his son Caesarion), then with Mark Antony; between them they commanded half the world’s power.',
          'Octavian’s fleet destroyed theirs at Actium in 31 BCE. Rather than walk in his triumph, Cleopatra died by the asp’s bite in her palace the following summer. Egypt became Rome’s breadbasket — a province, not a kingdom — and the line of pharaohs, three thousand years old, ended with her. The temples she restored at Philae and Dendera still stand: the last written hieroglyphs, carved at Philae in 394 CE, are a eulogy for a world she fought to keep alive.',
        ],
      },
    ],
  },
];
