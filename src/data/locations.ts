import type { LocationDetail } from './types';

export interface MapLocation extends LocationDetail {
  /** Marker position in the SVG viewBox (0 0 100 130). */
  x: number;
  y: number;
  /** Era id in eras.ts this site is most tied to. */
  era: string;
}

export const LOCATIONS: MapLocation[] = [
  {
    id: 'heliopolis',
    name: 'Heliopolis',
    ancientName: 'Iunu',
    epithet: 'City of the Sun',
    span: 'Cult center of Ra and the Ennead',
    x: 57,
    y: 34,
    era: 'zep-tepi',
    deities: ['Ra', 'Atum', 'The Ennead'],
    pharaohs: ['Djoser', 'Userkaf', 'Niuserre'],
    knownFor: [
      'The Benben mound — site of the First Time',
      'Great Temple of Ra and its obelisk-sun-temples',
      'Priestly school of the Ennead creation myth',
    ],
    sections: [
      {
        heading: 'Where the World Began',
        paragraphs: [
          'Every Egyptian creation story is a local story, and Heliopolis told the one that became the state’s official memory. Here — “Iunu,” the Greek “City of the Sun” — the Benben mound first rose from the waters of Nun, and Atum-Ra stood upon it to speak the Ennead into existence. The temple’s sacred enclosure held an actual stone, the Benben, a pyramidal lump worshipped as the first solid thing in the universe.',
          'The priests of Iunu were the keepers of cosmology: it was their doctrine of creation by speech, their genealogy of the nine gods, and their king-lists that later ages copied. When the Old Kingdom pharaohs built pyramids — pointed stone Benbens of a kind — they were raising, in limestone, a memory of the mound their theology began on.',
        ],
      },
      {
        heading: 'The Solar State',
        paragraphs: [
          'During the Fifth Dynasty the sun cult here became the state religion outright: kings built special sun temples (at Abu Gorab, opposite the city) around short stubby obelisks that caught the first ray of dawn, and the king’s title “Son of Ra” was added to the royal protocol — it would remain in every pharaoh’s name for the next two and a half thousand years.',
          'Almost nothing stands of the city today: its stones were stripped for medieval Cairo. Its obelisk of Senusret I — the oldest standing obelisk on earth — is all that remains upright, still catching the sun it was cut for.',
        ],
      },
    ],
  },
  {
    id: 'memphis',
    name: 'Memphis',
    ancientName: 'Ineb-Hedj',
    epithet: 'Seat of Ptah',
    span: 'Old Kingdom capital · White Walls',
    x: 53,
    y: 43,
    era: 'old-kingdom',
    deities: ['Ptah', 'Sekhmet', 'Nefertem'],
    pharaohs: ['Narmer (founder)', 'Djoser', 'Ramesses II'],
    knownFor: [
      'Capital of the unified Two Lands for most of the Old Kingdom',
      'Temple of Ptah — “the balance of the Two Lands”',
      'The Shabaka Stone, recording creation by heart and tongue',
    ],
    sections: [
      {
        heading: 'The White Walls',
        paragraphs: [
          'Founded by Narmer/Menes at the apex of the Delta — facing both Upper and Lower Egypt — Memphis (“Ineb-Hedj,” the White Walls) served as Egypt’s capital through the age that built the pyramids. Every administration, every census of cattle and grain, every foreign envoy came through this city; its harbor connected the Nile to the Mediterranean world.',
          'Its patron was Ptah, the craftsman god who created the universe by conceiving it in his heart and speaking it with his tongue. The Memphite theology — recorded on the Shabaka Stone now in the British Museum — is among the most philosophical documents of antiquity, and it gave the city’s priesthood standing beside Heliopolis itself.',
        ],
      },
      {
        heading: 'Workshop of the World',
        paragraphs: [
          'Memphis was the staging point for the pyramid age: stone from Tura crossed the river here, and the artisans’ villages of the Giza plateau answered to the palace here. Colossal statues of Ramesses II and the alabaster Sphinx of the city’s temple precinct still lie where the town’s quarters sank into the fields.',
          'When the capital moved north — to Amarna, then to the Delta cities of the Late Period — Memphis remained Egypt’s second city and its greatest garrison, until Alexandria took even that. Cambyses made it his seat; Alexander was crowned pharaoh in its temple of Ptah.',
        ],
      },
    ],
  },
  {
    id: 'giza-saqqara',
    name: 'Giza & Saqqara',
    ancientName: 'Necropolis of the Pyramid Age',
    epithet: 'Royal Necropolis',
    span: 'c. 2670 – 2181 BCE · Age of the Pyramids',
    x: 49,
    y: 47,
    era: 'old-kingdom',
    deities: ['Ra', 'Horus', 'Sokar'],
    pharaohs: ['Djoser', 'Khufu', 'Khafre', 'Menkaure'],
    knownFor: [
      'Step Pyramid of Djoser — the first stone building on earth',
      'Great Pyramid of Khufu and the Sphinx',
      'Pyramid Texts — the oldest religious corpus',
    ],
    sections: [
      {
        heading: 'Saqqara: The First Stone',
        paragraphs: [
          'On the escarpment west of Memphis, the royal dead were buried for three thousand years. It began around 2670 BCE, when Imhotep — architect, physician, sage — stacked six mastabas into the Step Pyramid of Djoser: the first large cut-stone building in human history, wrapped in a dummy palace of blue-tiled chambers for the king’s eternal household.',
          'Saqqara never stopped growing. Serapeum burials of the sacred Apis bulls, the tombs of nobles covered in exquisite Old Kingdom reliefs, and the tiny pyramid of a forgotten king keep appearing from the sand — modern archaeology still calls it the richest site in Egypt.',
        ],
      },
      {
        heading: 'Giza: The Horizon of Eternity',
        paragraphs: [
          'A few miles north, the plateau of Giza carries the apex of the experiment: Khufu’s Great Pyramid — 2.3 million blocks, aligned to true north within a twentieth of a degree — with Khafre’s complex and the Sphinx below it, and Menkaure’s pyramid completing the horizon. The workmen were organized crews of farmers on seasonal corvée, housed in excavated villages with bakeries and breweries — not slaves, as the old story went, but paid laborers who left graffiti naming their crews with pride.',
          'The pyramids were machines of resurrection: ramps of stone for the king’s soul to climb into the sun. In the chambers of the late Old Kingdom, scribes painted the Pyramid Texts — the oldest substantial religious writings on earth, protecting the dead king with spells four and a half thousand years old.',
        ],
      },
    ],
  },
  {
    id: 'abydos',
    name: 'Abydos',
    ancientName: 'Abdju',
    epithet: 'The Holy City of Osiris',
    span: 'Sacred center of Osiris · Entrance to the Underworld',
    x: 46,
    y: 71,
    era: 'middle-kingdom',
    deities: ['Osiris', 'Isis', 'Anubis'],
    pharaohs: ['Narmer', 'Seti I', 'Ramesses II'],
    knownFor: [
      'Royal cemetery of the First Dynasty kings',
      'Temple of Seti I with the King List',
      'Osireion — the symbolic tomb of Osiris',
    ],
    sections: [
      {
        heading: 'Where the Kings Are Buried',
        paragraphs: [
          'Abydos was Egypt’s holiest ground. The First Dynasty kings — Narmer, Hor-Aha, Den — buried here in mudbrick mastabas, and the site stayed royal: Seti I built his temple here a thousand years later to anchor his dynasty to the founders, and its walls carry the Abydos King List, the roll-call of pharaohs from Menes to Ramesses’ father that gave modern Egyptology its backbone.',
          'Behind the temple lies the Osireion, a strange subterranean hall ringed by pillars and a moat — built as a symbolic tomb of Osiris himself, a re-creation of the island where the god’s body rested before resurrection.',
        ],
      },
      {
        heading: 'Pilgrimage of the Common People',
        paragraphs: [
          'When the Middle Kingdom democratized the afterlife, Abydos became the destination of every soul that could afford the trip. Commoners by the thousands erected votive stelae and even empty cenotaphs near the god’s grave, hoping to share in his resurrection; the annual mystery passion-play re-enacted Osiris’s death and rebirth before crowds drawn from all of Egypt.',
          'To be buried at Abydos, or to have a cenotaph there, was the surest passport to the Field of Reeds. The city lived on hope — and hope, here, had a postal address.',
        ],
      },
    ],
  },
  {
    id: 'thebes',
    name: 'Thebes',
    ancientName: 'Waset',
    epithet: 'Domain of Amun-Ra',
    span: 'New Kingdom imperial center · Karnak & Luxor',
    x: 55,
    y: 88,
    era: 'new-kingdom',
    deities: ['Amun-Ra', 'Mut', 'Khonsu'],
    pharaohs: ['Mentuhotep II', 'Hatshepsut', 'Tutankhamun', 'Ramesses II'],
    knownFor: [
      'Karnak — the largest religious complex of the ancient world',
      'Luxor Temple and the Opet festival',
      'Valley of the Kings on the west bank',
    ],
    sections: [
      {
        heading: 'The City of Amun',
        paragraphs: [
          'Thebes rose twice. First under Mentuhotep II, whose reunification made it the founding city of the Middle Kingdom; then — and forever — under the New Kingdom, when the Theban princes who expelled the Hyksos made their home city the empire’s religious heart. Amun, a local god of air and creation, merged with the sun as Amun-Ra, King of the Gods.',
          'Karnak grew for two thousand years into the largest religious complex on earth: the Great Temple of Amun with its forest of 134 columns, the sacred lake, the avenue of sphinxes running two miles south to Luxor Temple, where the god visited his harem once a year in the Opet festival — renewing the pharaoh’s divine powers with the flooding of the Nile.',
        ],
      },
      {
        heading: 'The West Bank of Eternity',
        paragraphs: [
          'The living lived on the east bank; the dead were buried across the river, where the sun set into the cliffs of the west. Here lay Deir el-Bahari — Mentuhotep’s and Hatshepsut’s terraced temples — the Valley of the Kings with its rock-cut tombs (Tutankhamun’s among them), the Valley of the Queens, and the workers’ village of Deir el-Medina, whose literate tomb-builders left us the best record of ordinary Egyptian life that exists.',
          'When the empire faded, the High Priests of Amun ruled Thebes as kings in all but name; when the Ptolemies came, they built here too. The city’s gods outlasted its kings — as they did everywhere in Kemet.',
        ],
      },
    ],
  },
  {
    id: 'amarna',
    name: 'Amarna',
    ancientName: 'Akhetaten',
    epithet: 'Horizon of the Aten',
    span: 'c. 1346 – 1332 BCE · The Amarna Interlude',
    x: 50,
    y: 60,
    era: 'new-kingdom',
    deities: ['Aten', 'Akhenaten & Nefertiti (royal cult)'],
    pharaohs: ['Akhenaten', 'Nefertiti', 'Tutankhamun (as Tutankhaten)'],
    knownFor: [
      'Capital built for the worship of the Aten alone',
      'The Great Temple of the Aten — open to the sky, no roof',
      'Amarna Letters — the diplomatic archive of the Bronze Age',
    ],
    sections: [
      {
        heading: 'A City Cut from Virgin Desert',
        paragraphs: [
          'In Year 5 of his reign, Amenhotep IV — now Akhenaten — sailed to an empty bay of desert halfway between Thebes and Memphis and founded a capital dedicated to his single god: the visible sun-disk, the Aten. Akhetaten, “Horizon of the Aten,” had no wealth behind it but the king’s will: temples with no roofs (the sun needed no house), palaces, and tombs cut into the cliffs for a court that had abandoned Thebes and its god.',
          'Art changed with religion. The royal family was shown kissing under the sun’s rays, bodies elongated, bellies soft — an intimacy no pharaoh had ever allowed. The Amarna Letters, the diplomatic archive found here, record the Bronze Age world begging Egypt for gold while Akhenaten prayed.',
        ],
      },
      {
        heading: 'The Heresy Undone',
        paragraphs: [
          'Within three years of Akhenaten’s death the city was doomed. The boy king Tutankhaten — “living image of the Aten” — changed his name to Tutankhamun, restored Amun, and the court returned to Thebes. Amarna was abandoned, quarried, forgotten; the priests who survived erased the heretic’s name wherever it was carved.',
          'And yet: without the archives buried in Amarna’s sand, we would know almost nothing of the Bronze Age world. And without the heresy, the restoration it provoked might never have produced the Tutankhamun we know — the treasure that made the world fall in love with Egypt.',
        ],
      },
    ],
  },
  {
    id: 'alexandria-philae',
    name: 'Alexandria & Philae',
    ancientName: 'Rhakotis & P-aalak',
    epithet: 'Ptolemaic Jewels',
    span: '323 – 30 BCE · The Ptolemaic World',
    x: 43,
    y: 118,
    era: 'ptolemaic',
    deities: ['Serapis', 'Isis', 'Harpocrates'],
    pharaohs: ['Alexander the Great', 'Ptolemy I', 'Cleopatra VII'],
    knownFor: [
      'Library and Museum of Alexandria',
      'Pharos lighthouse — one of the Seven Wonders',
      'Philae — island temple of Isis, in worship until 537 CE',
    ],
    sections: [
      {
        heading: 'Alexandria: The Mind of the Mediterranean',
        paragraphs: [
          'Alexander the Great founded his city on the Delta coast in 331 BCE; Ptolemy I buried him there (in a gold sarcophagus later lost to history) and made Alexandria the capital of the new dynasty. The Library aimed to own every book ever written; the Museum paid scholars to think; the Pharos lit the harbor as one of the Seven Wonders. Euclid wrote geometry here; Eratosthenes measured the earth here; the Hebrew Scriptures were translated into Greek here.',
          'It was a Greek city with an Egyptian soul: the Serapeum fused Osiris and the Greek god Hades into Serapis, a god designed to be worshipped by both nations — and Isis sailed from Alexandria’s harbor into every port of the Roman world.',
        ],
      },
      {
        heading: 'Philae: The Last Temple',
        paragraphs: [
          'Far to the south, on an island above the First Cataract, the temple of Philae rose to Isis — begun under Nectanebo, completed by the Ptolemies, expanded by Romans. Here the goddess’s myth reached its shrine: the island was one of the places where Set’s chest carrying Osiris came to rest, and pilgrims came from the whole Mediterranean to be healed by Isis’s dream-oracles.',
          'Philae outlived the empire. While Rome went Christian, the island’s priests kept the old liturgy — the last hieroglyphic inscription on earth was carved here on August 24, 394 CE. The temple stayed open another century and a half; then the doors closed on a religion three and a half thousand years old, and the gods of Kemet finally went silent.',
        ],
      },
    ],
  },
];
