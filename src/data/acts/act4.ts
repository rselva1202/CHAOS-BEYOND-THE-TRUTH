import type { Act } from './types';

/**
 * ACT IV — THE IMPERIAL SHIFTS.
 * The act where mythology hands off to documented history: Amun's rise,
 * the Amarna rupture, the restoration, Greek kings, the invented god
 * Serapis, Isis abroad, Cleopatra — and the long afterlife of a religion
 * that did not die with the last pharaoh. Unlike Acts I–III, this act is
 * historical chronology, not myth; dates and sources are named as such.
 */
export const ACT_FOUR: Act = {
  id: 'imperial-shifts',
  actNumber: 4,
  numeral: 'IV',
  title: 'The Imperial Shifts',
  subtitle: 'From the hidden god of Thebes to the last pharaoh — and beyond',
  introduction: [
    'Act IV leaves mythic time. The first three acts told stories the Egyptians themselves set in the First Time; this act tells what can be documented — dated reigns, inscribed decrees, excavated temples — about how the religion those myths built actually changed under empire, heresy, conquest, and transformation. The gods are still here, but the narrative method changes: where Act III has a trial in heaven, Act IV has dates, dynasties, and the honest disagreements of modern historians.',
    'The arc, in brief: a Theban god of the hidden becomes king of all gods when his city becomes master of an empire; he is braided with the sun of Act I by a process theologians call syncretism; one pharaoh tries to abolish him and every other god for a single visible disk; the old order is restored, stronger; Macedonian Greeks take the throne and invent a new god by committee; the goddess Isis sails out to conquer the Mediterranean; and at the end of the royal line a queen who was a living Isis dies in her capital — after which the religion she embodied does something no Greek or Roman predicted: it keeps going, for centuries.',
  ],
  chronologicalPosition: 4,
  primaryDeities: [
    { name: 'Amun', role: 'the hidden one who became king', deityId: 'amun' },
    { name: 'Amun-Ra', role: 'the fused supreme god of the empire', deityId: 'amun' },
    { name: 'Aten', role: 'the sun-disk that reigned alone, briefly' },
    { name: 'Serapis', role: 'the god designed for a Greek Egypt' },
    { name: 'Isis', role: 'whose cult outlived the pharaohs', deityId: 'isis' },
  ],
  historicalReferences: [
    {
      name: 'New Kingdom',
      relevance: 'The imperial age (c. 1550–1069 BCE) that elevated Amun and endured the Amarna rupture.',
      kind: 'historical-context',
      eraId: 'new-kingdom',
    },
    {
      name: 'Late Period',
      relevance: 'The centuries of foreign crowns through which the temples kept the tradition alive.',
      kind: 'historical-context',
      eraId: 'late-period',
    },
    {
      name: 'Ptolemaic',
      relevance: 'Greek pharaohs (305–30 BCE), Serapis, and Cleopatra VII — the close of divine kingship.',
      kind: 'historical-context',
      eraId: 'ptolemaic',
    },
  ],
  keywords: ['amun', 'amun-ra', 'new kingdom', 'akhenaten', 'aten', 'amarna', 'restoration', 'ptolemaic', 'serapis', 'isis', 'cleopatra', 'actium', 'roman egypt'],
  relatedDeityIds: ['amun', 'ra', 'isis', 'osiris'],
  relatedLocationIds: ['thebes', 'amarna', 'alexandria-philae', 'memphis'],
  relatedEraIds: ['new-kingdom', 'late-period', 'ptolemaic'],
  visual: {
    plate: 'from-sky-300/50 via-amber-100/40 to-violet-400/50',
    glyph: '𓇋',
    image: 'images/act-imperial-shifts.png',
    hieroglyph: '𓇋𓏤𓇳',
  },
  sections: [
    {
      id: 'amun',
      title: 'Amun',
      shortDescription: 'A hidden wind of the Ogdoad rises to king of the gods when Thebes rises to power.',
      narrative: [
        {
          heading: 'The Hidden One',
          paragraphs: [
            'Amun’s name meant “the hidden one,” and the meaning is the theology. He is first attested in writing as early as the Old Kingdom — the Pyramid Texts list him among primeval powers — and in the cosmogony of Hermopolis he belonged to the Ogdoad, the eight beings of the waters before creation, where he and his female counterpart Amaunet embodied the invisible air, the hidden force that moves everything while remaining unseen. He was, in other words, not a god of something you could point to — not the sun, not the river, not the sky — but of the fact that there is always more than you can see.',
            'For much of Egyptian history he was also, frankly, provincial. His city was Thebes — Waset — a town in the far south, upstream of the old religious and political centers of Memphis and Heliopolis. His cult grew with his city. When the Theban house of the Eleventh Dynasty reunified Egypt around 2055 BCE, their god rose with them; by the Middle Kingdom, kings were building him temples and naming royal ships after him. The pattern that would define Act IV is already visible: in Egypt, a god’s rank followed his city’s fortunes.',
          ],
        },
        {
          heading: 'The Rise of Thebes, the Rise of the God',
          paragraphs: [
            'The decisive turn came around 1550 BCE. A dynasty of foreign kings — the Hyksos — had ruled the north of Egypt for a century; it was a Theban house, under Ahmose I, that expelled them and reunified the Two Lands. The liberator city’s god became the empire’s god. Amun, patron of the victors, was proclaimed king of the gods, and the pharaohs of the Eighteenth Dynasty credited every campaign to him: Thutmose III marched to the Euphrates in his name, and the victory inscriptions describe the god himself walking at the army’s head.',
            'The theology kept pace with the politics — and outgrew it. The Egyptians had always suspected that behind every visible god stood a hidden power; when the empire needed a supreme god, it promoted the one whose very nature was to be behind everything. The hymns of the New Kingdom describe Amun as hidden even from the other gods, whose true form no one knows, who made every land while they did not know him. Read carefully, this is a new kind of claim in the history of religion: not a bigger god, but a more abstract one — divinity as such, wearing a name.',
          ],
        },
      ],
      figures: [
        { name: 'Amun', role: 'from Ogdoad wind to king of the gods', deityId: 'amun' },
        { name: 'Ahmose I', role: 'the Theban liberator whose god rose with him' },
        { name: 'Thutmose III', role: 'the empire-builder who marched in Amun’s name' },
      ],
      places: [
        {
          name: 'Thebes (Waset)',
          significance: 'Amun’s city — the political engine of his rise.',
          locationId: 'thebes',
        },
        {
          name: 'Hermopolis (Khemenu)',
          significance: 'Where Amun was first numbered among the eight beings of the primeval waters.',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The Hyksos expulsion (c. 1550 BCE) and Amun’s elevation to national god.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['amun'],
      relatedLocationIds: ['thebes'],
      relatedEraIds: ['new-kingdom'],
    },
    {
      id: 'amun-ra',
      title: 'Amun-Ra',
      shortDescription: 'The hidden one and the sun are braided into one god — the classic case of Egyptian syncretism.',
      narrative: [
        {
          heading: 'A Fusion, Not an Identity',
          paragraphs: [
            'Amun and Ra were not “the same god” at the beginning — they are two distinct deities with different origins, cities, and histories, and the texts never pretend otherwise. Ra was the Heliopolitan sun, the self-created one of Act I, ancient beyond reckoning. Amun was the Theban hidden one, a relative newcomer whose prestige was centuries old, not millennia. What joined them was a deliberate theological process — syncretism — in which two gods are worshiped as one power with two aspects, each name preserved, neither erased.',
            'Egypt had done this before: Atum-Ra braided the creator with the sun in Act I’s earliest theology, and “Ra-Horakhty” joined Ra with the horizon-falcon. But the Amun-Ra union, visible in the sources from roughly the Twelfth Dynasty onward and standard by the New Kingdom, became the most consequential fusion in Egyptian history. Amun was said to be one with Ra — the hidden power behind the visible sun, the unseen wind inside the light — and the fused god took the title king of the gods, ruling the pantheon from Thebes as Ra had ruled it from Heliopolis.',
            'The composite theology is striking in its ambition. Amun-Ra was at once the visible sun crossing the sky and the invisible substance of divinity itself — the god who hides from gods. The priesthood explained the union with a sophistication that later monotheist and mystic writers would echo: all the gods, one hymn tradition says, are members of Amun, the way a single power appears in many forms. Whether read as bold theology or political bookkeeping — the new imperial god annexing the ancient capital’s god — it made Amun-Ra the summit of Egyptian religion for the last fifteen centuries of its native life.',
          ],
        },
        {
          heading: 'The God and the King',
          paragraphs: [
            'The fusion remade kingship. Pharaoh was now not merely “the living Horus” of Act III but the son of Amun-Ra: royal birth reliefs at Deir el-Bahri and Luxor show the god himself visiting the queen to father the future king, and the New Kingdom coronation was framed as Amun recognizing his own child. Oracles of Amun — the god’s statue nodding assent from its shrine-bark — were consulted on appointments, campaigns, and successions; the reign of Ramesses II was presented as Amun’s own project, and the inscriptions style the king the living image of Amun — an epithet, not a metaphor, in a theology where the god acts through his son.',
            'This was the system Akhenaten would attack, and the reason his attack mattered: he was not merely rejecting a ritual, he was divorcing the throne from its divine father. To understand what he was breaking, hold this picture — empire, temple, oracle, divine paternity, all braided around one hidden-and-visible god at Thebes — and keep it in mind through the next two sections.',
          ],
        },
      ],
      figures: [
        { name: 'Amun-Ra', role: 'the fused supreme god of the empire', deityId: 'amun' },
        { name: 'Ra', role: 'the Heliopolitan sun joined to Amun by syncretism', deityId: 'ra' },
        { name: 'Ramesses II', role: 'the empire’s greatest builder in Amun’s name' },
      ],
      places: [
        {
          name: 'Karnak',
          significance: 'Amun-Ra’s seat — the largest religious complex ever built in the ancient world.',
          locationId: 'thebes',
        },
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Ra’s ancient home, absorbed theologically into the Theban fusion.',
          locationId: 'heliopolis',
        },
      ],
      timeline: [
        {
          name: 'Middle Kingdom',
          relevance: 'When Amun and Ra first appear braided together in the sources.',
          kind: 'historical-context',
      eraId: 'middle-kingdom',
        },
        {
          name: 'New Kingdom',
          relevance: 'The imperial high point of the Amun-Ra cult and its royal theology.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['amun', 'ra'],
      relatedLocationIds: ['thebes', 'heliopolis'],
      relatedEraIds: ['middle-kingdom', 'new-kingdom'],
    },
    {
      id: 'the-new-kingdom',
      title: 'The New Kingdom',
      shortDescription: 'Empire, Karnak, and a priesthood that outgrew the crown — documented history, dated reigns.',
      narrative: [
        {
          heading: 'The Imperial Age',
          paragraphs: [
            'Here the narrative leaves myth behind entirely: the New Kingdom (roughly 1550–1069 BCE, the Eighteenth through Twentieth Dynasties) is one of the most densely documented periods of the ancient world, known from royal annals, diplomatic letters, tomb inscriptions, and the excavated stones themselves. It was Egypt at full stretch — an empire running from the Euphrates to the fourth cataract of the Nile — and its wealth rebuilt the entire religious landscape around Amun-Ra of Thebes.',
            'The center was Karnak. Begun in the Middle Kingdom and enlarged by reign after reign, it grew into the largest religious complex ever constructed in the ancient world: the hypostyle hall alone — built under Seti I and Ramesses II — held one hundred and thirty-four sandstone columns, the largest seventy-nine feet tall. Alongside it stood Luxor temple, linked by a two-and-a-half-mile avenue of sphinxes, and the annual Opet festival walked the god between them in public splendor. Karnak was not a temple in the modern sense but a city of the god — treasuries, granaries, workshops, lakes, its own docks — and the estates of Amun, staffed by tens of thousands, made it the richest institution in Egypt.',
          ],
        },
        {
          heading: 'Kingship, Legitimacy, Empire',
          paragraphs: [
            'Religion, kingship, and empire locked together into a single machine. Conquest paid for cult: the tribute of Nubia’s gold and Syria’s grain flowed through the temples, and in return the temples proclaimed the king’s divinity — his oracles approved his wars, his birth reliefs made him Amun’s son, and his monuments announced that Ma’at, the order of Act I, was maintained from the Euphrates to Nubia by his hand. Pharaohs as different as Hatshepsut (the woman who ruled as king, c. 1479–1458 BCE), Thutmose III (victor at Megiddo, c. 1457), Amenhotep III (dazzling apex of wealth), and Ramesses II (reigned sixty-seven years; fought the Hittites at Kadesh and signed the world’s first surviving peace treaty) all ruled inside this same ideological frame, however differently they wielded it.',
            'But the machine had a structural flaw, visible in the ledgers: the temples grew richer than the crown. By the reign of Ramesses III (c. 1186–1155 BCE), the temple estates — Amun’s above all — employed a substantial share of Egypt’s population and owned roughly a tenth of its arable land; the king’s own administration, by contrast, was shrinking with the empire’s borders after 1150. The High Priest of Amun administered a state within the state. Within two generations of the New Kingdom’s end, around 1070 BCE, the High Priests of Amun would rule Upper Egypt outright, contemporary with but independent of the pharaohs in the north.',
            'That is the political pressure-cooker into which the strangest event in Egyptian religious history erupted — a royal counter-revolution against the wealth and power of Thebes, carried out in the name of one visible disk.',
          ],
        },
      ],
      figures: [
        { name: 'Hatshepsut', role: 'the woman who ruled as king (c. 1479–1458 BCE)' },
        { name: 'Thutmose III', role: 'victor at Megiddo, architect of the empire' },
        { name: 'Ramesses II', role: 'builder-emperor of the Nineteenth Dynasty' },
        { name: 'Ramesses III', role: 'the last great king of the imperial age' },
      ],
      places: [
        {
          name: 'Thebes (Waset)',
          significance: 'Imperial capital and seat of Karnak, the largest temple complex of antiquity.',
          locationId: 'thebes',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The age this section documents (c. 1550–1069 BCE).',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['amun', 'ra'],
      relatedLocationIds: ['thebes'],
      relatedEraIds: ['new-kingdom'],
    },
    {
      id: 'akhenaten-and-aten',
      title: 'Akhenaten & the Aten',
      shortDescription: 'One god, one city, one family — the Amarna revolution, and the debate over what to call it.',
      narrative: [
        {
          heading: 'The Revolution',
          paragraphs: [
            'Amenhotep IV came to the throne around 1353 BCE and within five years had begun the most radical religious experiment of antiquity. He elevated the Aten — the visible sun-disk, previously a minor aspect of the sun god — to the one god of Egypt; built the Aten a great temple at Karnak itself; took a new name, Akhenaten, “effective for the Aten”; and in year five of his reign abandoned Thebes altogether, founding a virgin capital on empty desert midway down the Nile: Akhetaten, “the horizon of the Aten” — today called Amarna.',
            'What followed is documented in unusual detail, because Amarna’s sudden abandonment preserved it. The temples of the old gods were closed; their revenues redirected to the Aten; the name of Amun was chiseled out of inscriptions, even from his own father’s cartouches and from common words containing it. The plural “gods” was excised from the language itself in the later years. The Aten was drawn as a disk whose rays ended in hands, offering life — but the hands touched only the royal family: in Atenism, access to the god ran exclusively through Akhenaten and Nefertiti. Art changed with theology — the royal family kissing in public beneath the disk, the king’s body drawn elongated and strange — and the tone of the new texts was intimate and joyful: hymns to the light that fills the world each morning.',
          ],
        },
        {
          heading: 'What to Call It — the Historians’ Debate',
          paragraphs: [
            'Atenism is often called the first monotheism, and the label deserves exactly that hesitation. Some scholars embrace it; many do not. The case against: Atenism appears to have been a royal, solar ideology more than a faith for the people — the god was visible to all but approachable only through the king; it had no ethics for ordinary life, no mythology, no funerary hope to replace Osiris; and it looks less like an invention than an extreme intensification of very old solar theology, the sun-god traditions of Heliopolis and the “sole lord” hymns of Amenhotep III’s reign, stripped of every rival. Other scholars reply that exclusivity is the point: for the first documented time, one god was declared real and all others false, and that is a genuinely new thing under the sun. The debate is live, and honest history keeps it open. What is not debated: whatever Atenism was, it was not continuous with the rest of Egyptian religion, and Egyptians treated it as an aberration as soon as they could.',
            'The revolution died with its author. Akhenaten reigned some seventeen years (to c. 1336 BCE); his immediate successors were shadowy and brief; and the boy king Tutankhamun — born Tutankhaten — was on the throne by about 1332, with power in other hands.',
          ],
        },
      ],
      figures: [
        { name: 'Akhenaten', role: 'Amenhotep IV — the pharaoh of the Aten (r. c. 1353–1336 BCE)' },
        { name: 'Nefertiti', role: 'the great royal wife, central to the new cult' },
        { name: 'Tutankhamun', role: 'the boy whose reign undid the revolution' },
      ],
      places: [
        {
          name: 'Amarna (Akhetaten)',
          significance: 'The purpose-built desert capital of the Aten, abandoned within decades of its founding.',
          locationId: 'amarna',
        },
        {
          name: 'Thebes (Waset)',
          significance: 'Amun’s city, first target and later center of the restoration.',
          locationId: 'thebes',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom — Amarna interlude',
          relevance: 'The Aten revolution inside the imperial age (c. 1353–1336 BCE).',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['amun', 'ra'],
      relatedLocationIds: ['amarna', 'thebes'],
      relatedEraIds: ['new-kingdom'],
    },
    {
      id: 'restoration-of-tradition',
      title: 'The Restoration',
      shortDescription: 'The old gods return — and Amun comes back stronger than the crown that restored him.',
      narrative: [
        {
          heading: 'Undoing the Aten',
          paragraphs: [
            'The restoration is documented, dated, and almost triumphant in tone. Tutankhamun’s Restoration Stela — carved within a few years of Akhenaten’s death — describes the state of Egypt before it in plain terms: temples fallen into neglect, the gods turning their backs, the land in confusion. Then the reversal: the king restored the images of the gods, re-endowed their priesthoods and offerings, re-established the musicians and the festivals, and — the stela’s most telling phrase — listened to their petitions as his predecessors had. He changed his name from Tutankhaten to Tutankhamun, moved the court out of Amarna, and died young, around 1322 BCE, his brief reign remembered mainly for the undoing of his predecessor’s world.',
            'His successors completed the demolition of the revolution’s memory. Horemheb, the last king of the dynasty, erased Akhenaten’s name from the king lists — official history would remember no heresy at all — and the Nineteenth Dynasty pharaohs Seti I and Ramesses II, while restoring Egyptian grandeur at full scale, carefully excluded the Amarna kings from the canon of ancestors. The Aten episode was not forgiven; it was unremembered. Set against the mythology of the first three acts, the pattern is poignant: Egypt had a myth for the gathering of scattered pieces, and it now performed it on its own history.',
          ],
        },
        {
          heading: 'Amun Triumphant',
          paragraphs: [
            'The restoration did not merely return things to how they were; it returned Amun to a position stronger than ever — with consequences the crown would regret. The Ramessides built for him on a colossal scale (the Ramesseum, Abu Simbel’s twin temples, Karnak’s additions), and the theology of the hidden king of gods deepened: the great Theban hymns of this era call Amun the one god who made all things, hidden from gods and men, judge of the honest — language that has struck every later reader, and that historians use as evidence in the Aten debate itself, since it shows the “one true god” idea was already present in Egyptian religion before, during, and after Akhenaten.',
            'And the structural flaw of the New Kingdom — temple wealth outgrowing temple loyalty — now matured. After about 1070 BCE, with the empire gone and the crown weakened, the High Priests of Amun ruled Thebes and Upper Egypt as an independent theocracy while nominal pharaohs reigned in the north. The hidden god now governed half the country through his priests. Foreign dynasties — Libyan, Nubian, Persian — would fight, court, and eventually co-opt him for the next seven centuries, but none ever displaced him. Thebes remained the beating heart of Egyptian religion until a Greek dynasty found a different use for it entirely.',
          ],
        },
      ],
      figures: [
        { name: 'Tutankhamun', role: 'whose Restoration Stela records the return of the gods' },
        { name: 'Horemheb', role: 'who erased the Amarna kings from official memory' },
        { name: 'Seti I', role: 'of the Nineteenth Dynasty restoration builders' },
      ],
      places: [
        {
          name: 'Thebes (Waset)',
          significance: 'Karnak’s colossal expansion under the restored Amun-Ra.',
          locationId: 'thebes',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The post-Amarna restoration (c. 1332 BCE onward) and the Theban theocracy after 1070 BCE.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
        {
          name: 'Late Period',
          relevance: 'Foreign dynasties inheriting the problem — and the power — of Amun’s priesthood.',
          kind: 'historical-context',
          eraId: 'late-period',
        },
      ],
      relatedDeityIds: ['amun', 'ra'],
      relatedLocationIds: ['thebes'],
      relatedEraIds: ['new-kingdom', 'late-period'],
    },
    {
      id: 'ptolemaic-egypt',
      title: 'Ptolemaic Egypt',
      shortDescription: 'Alexander’s conquest, a Macedonian dynasty, and Greek kings learning to be pharaohs — 332 BCE onward.',
      narrative: [
        {
          heading: '332 BCE: Alexander',
          paragraphs: [
            'The conquest is documented history, and its date is a hinge in world religion. In 332 BCE Alexander III of Macedon took Egypt from Persian rule with barely a fight; the Egyptians, who hated their Persian overlords, welcomed him as a liberator, and he was crowned pharaoh in traditional form at Memphis. He made two moves that shaped everything after. First, he founded a new Greek capital on the Mediterranean coast — Alexandria — turning Egypt’s face away from the valley and toward the sea. Second, he trekked west across the desert to the oracle of Amun at Siwa, and came back (so both Egyptian priests and Greek writers recorded, each in their own idiom) acknowledged as the son of Amun — whom the Greeks naturally called Zeus. Macedonian kingship and Egyptian divine kingship had been introduced, and the introduction would define the next three hundred years.',
            'Alexander died in Babylon in 323 BCE. His empire was divided among his generals, and the richest prize fell to Ptolemy, son of Lagus — first as satrap, then, from 305 BCE, as King Ptolemy I Soter in his own right. The dynasty he founded would rule Egypt for nearly three centuries, through fifteen Ptolemies and one final queen.',
          ],
        },
        {
          heading: 'Greek Kings, Egyptian Thrones',
          paragraphs: [
            'The Ptolemies were Macedonian Greek to the bone: their court language was Greek, their administration Greek, their marriage customs (sibling marriage, in pharaonic style) a pointed blend of both worlds, and — with one famous exception — they never troubled to learn Egyptian. But they understood legitimacy perfectly. They posed in Egyptian temples as pharaohs had always posed, smiting enemies and offering to the gods in hieroglyphic carving; they took full pharaonic titulature in five names; and above all they spent money on the gods. The temple landscape of Egypt is Ptolemaic to a remarkable degree: Edfu, Dendera, Esna, Philae — the great temples visitors walk through today — are largely the work of this Greek dynasty, built and staffed by native priesthoods under royal patronage.',
            'The two populations lived in parallel. Alexandria was a Greek capital — the Library and its scholars, the Museum, the Pharos lighthouse — while the valley remained Egyptian in language, cult, and custom. The priestly elite negotiated the relationship in documents like the Rosetta Stone (196 BCE): a priestly decree honoring Ptolemy V, issued in hieroglyphic, Demotic, and Greek — three scripts, one deal, in which the priests confirm the king’s cult and the king confirms the temples’ rights. The formula worked for two and a half centuries. Its most creative product was a brand-new god.',
          ],
        },
      ],
      figures: [
        { name: 'Alexander the Great', role: 'conqueror of Egypt (332 BCE), crowned at Memphis, son of Amun at Siwa' },
        { name: 'Ptolemy I Soter', role: 'founder of the dynasty (king from 305 BCE)' },
        { name: 'Ptolemy II Philadelphus', role: 'builder-king of the Library’s glory years' },
      ],
      places: [
        {
          name: 'Alexandria',
          significance: 'The Greek capital — Library, Museum, Pharos — founded 331 BCE.',
          locationId: 'alexandria-philae',
        },
        {
          name: 'Memphis (Ineb-hedj)',
          significance: 'Where Alexander was crowned pharaoh, and the Rosetta decree was issued.',
          locationId: 'memphis',
        },
        {
          name: 'Philae',
          significance: 'Isis’s island temple, largely built under the Ptolemies.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Late Period',
          relevance: 'The Persian occupations that Alexander ended.',
          kind: 'historical-context',
          eraId: 'late-period',
        },
        {
          name: 'Ptolemaic',
          relevance: 'The dynasty (305–30 BCE) this section documents.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
      ],
      relatedDeityIds: ['amun', 'isis'],
      relatedLocationIds: ['alexandria-philae', 'memphis'],
      relatedEraIds: ['late-period', 'ptolemaic'],
    },
    {
      id: 'serapis',
      title: 'Serapis',
      shortDescription: 'A god built by committee — Egyptian in substance, Greek in form, and not simply Osiris.',
      narrative: [
        {
          heading: 'The Manufactured God',
          paragraphs: [
            'Under Ptolemy I, Alexandria acquired a god who had never existed before. Serapis (in Greek Sarapis) was assembled from Egyptian material and given a Greek body. His Egyptian root was real and specific: Osiris-Apis — Osor-Hapis — the dead and deified Apis bull, an established Memphis cult in which the sacred bull, dying, became one with Osiris, lord of the dead; its worship center was the great Serapeum at Saqqara, the burial hall of generations of bulls. From this the Ptolemaic court created a new civic god for their new capital: lord of the underworld and of healing dreams, of fertility and the grain harvest and the sea — a universal patron for a city of Greeks who had no temple culture of their own and needed one they could approach without learning Egyptian theology.',
            'The form they chose makes the policy visible: Serapis was sculpted as a Greek god — a majestic bearded figure on a throne, grain measure on his head, sometimes Cerberus at his feet — recognizable to any Macedonian as kin to Zeus and Hades and Asclepius at once. This is why Serapis must not be flattened into “another name for Osiris”: he was a deliberately composite deity, worshipped with his own cult, his own mythology-lite, and his own temple, created by religious policy in a way traditional Egyptian gods never were. Later writers told colorful stories about the founding — that Ptolemy imported the cult statue in a dream-guided quest from Sinope on the Black Sea — details historians treat with caution, since they come from Greek sources centuries later and serve Greek pride.',
          ],
        },
        {
          heading: 'Did It Work?',
          paragraphs: [
            'As statecraft, largely yes. The Serapeum of Alexandria became one of the ancient world’s famous sanctuaries, and Serapis-Isis worship spread together across the Mediterranean. Greeks and Egyptians in Alexandria did come to share cult spaces, and the pairing gave the dynasty a religious brand that traveled with its trade routes. But note which half of the brand had legs. Serapis flourished for as long as the state pushed him; the goddess beside him — Isis, ancient, story-rich, needing no decree — conquered the world on her own. The committee-built god is a fascinating experiment; the ancient goddess was the export that mattered.',
          ],
        },
      ],
      figures: [
        { name: 'Serapis', role: 'the composite god of Ptolemaic Alexandria' },
        { name: 'Ptolemy I Soter', role: 'under whom the cult was created' },
        { name: 'Osiris', role: 'the Egyptian substance behind the synthesis', deityId: 'osiris' },
        { name: 'Isis', role: 'Serapis’s consort, and the export that outtraveled him', deityId: 'isis' },
      ],
      places: [
        {
          name: 'Alexandria',
          significance: 'The Serapeum, the manufactured god’s great sanctuary.',
          locationId: 'alexandria-philae',
        },
        {
          name: 'Saqqara',
          significance: 'The older Serapeum — burial hall of the Apis bulls behind the Osiris-Apis tradition.',
          locationId: 'giza-saqqara',
        },
      ],
      timeline: [
        {
          name: 'Ptolemaic',
          relevance: 'The era of the cult’s invention (late 4th century BCE) and spread.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
      ],
      relatedDeityIds: ['osiris', 'isis'],
      relatedLocationIds: ['alexandria-philae', 'giza-saqqara'],
      relatedEraIds: ['ptolemaic'],
    },
    {
      id: 'isis-becomes-international',
      title: 'Isis Becomes International',
      shortDescription: 'The Egyptian goddess who crossed the Mediterranean — and the reasons her cult traveled.',
      narrative: [
        {
          heading: 'Out of Egypt',
          paragraphs: [
            'Isis’s export began quietly, centuries before the Ptolemies: sailors and traders carried her name to ports like Byblos and Ugarit in the Bronze Age — a memory of the very tree that hid her husband’s chest in Act II. But the flood tide was Hellenistic. As Ptolemaic ships and colonies stitched the Aegean to Alexandria, Isis temples appeared on Delos, in the Piraeus, in Sicily, and across the trading Mediterranean. Greek worshipers, fluent in reading foreign gods through their own (the habit historians call interpretatio graeca), saw in her their Demeter, their Aphrodite, their Hera — the mother, the lover, the queen — and grafted those roles onto her without ever quite erasing what made her Egyptian: the ancient story of the murdered husband, the magic, the child in the reeds.',
            'Her cult offered things the civic religions of Greece and Italy did not: personal initiation, a goddess who had personally suffered and therefore pitied, and a promised life beyond death for initiates — Osirian hope, repackaged for the wider world. The hymns that traveled with her (the aretalogies, as scholars call them) sang her as the inventor of writing, law, medicine, and sail — a universal civilizer. It was the theology of Act II, internationalized.',
          ],
        },
        {
          heading: 'Rome: Suspicion, Then Conquest by Devotion',
          paragraphs: [
            'The Roman Republic received her like a contagion. The Senate repeatedly ordered Isis temples in Rome demolished — there are documented decrees in 58, 53, 50, and 48 BCE, and the cult rebuilt each time within sight of the Capitol — while Italians privately kept joining. The Empire eventually reversed course altogether: Vespasian, camped in Alexandria in 69 CE, credited Isis and Serapis with his fortune, and emperors of the Flavian house rebuilt her sanctuaries in Rome on a grand scale. By the second century CE the Isis religion was among the most widespread cults of the Roman world — from Gaul to Britain to Syria.',
            'Its most famous testimony is literary, and dates from this Roman era: Apuleius’s novel The Golden Ass (c. 160 CE) ends with its hero saved by a vision of Isis, who reveals herself in language that has echoed through the history of religion — one goddess of many names, mistress of the whole order of nature, worshiped under a thousand forms. That is a Roman author writing fiction, not an Egyptian priest writing liturgy — but it shows how far the transformation had gone. Isis had left Egypt’s theology behind and become something new: the ancient world’s great universal goddess. The religion that reached the Thames was recognizably descended from Philae’s, but it was Roman Isis, not Egyptian, that the future would inherit — and, in fragments and echoes, pass on.',
          ],
        },
      ],
      figures: [
        { name: 'Isis', role: 'the Egyptian goddess who conquered the Mediterranean', deityId: 'isis' },
        { name: 'Apuleius', role: 'the Roman novelist whose hero converts to her cult (c. 160 CE)' },
        { name: 'Vespasian', role: 'the emperor who credited Isis with his rise' },
      ],
      places: [
        {
          name: 'Philae',
          significance: 'Her Egyptian island seat — and the source of the cult that sailed abroad.',
          locationId: 'alexandria-philae',
        },
        {
          name: 'Alexandria',
          significance: 'The port through which the Isis religion reached the Roman world.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Ptolemaic',
          relevance: 'When Isis worship spread through the Hellenistic world’s trade networks.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
        {
          name: 'Late Period',
          relevance: 'The older Egyptian Isis cult from which the international version grew.',
          kind: 'historical-context',
          eraId: 'late-period',
        },
      ],
      relatedDeityIds: ['isis', 'osiris'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['ptolemaic', 'late-period'],
    },
    {
      id: 'cleopatra-vii',
      title: 'Cleopatra VII',
      shortDescription: 'The last pharaoh — scholar, goddess-queen, ally of two Roman warlords.',
      narrative: [
        {
          heading: 'The Last of the Ptolemies',
          paragraphs: [
            'Cleopatra VII Philopator (reigned 51–30 BCE) was the last sovereign of the dynasty Ptolemy I founded — and, according to the ancient sources, the first of the Ptolemies in three centuries to bother learning Egyptian. Plutarch describes a queen of formidable intellect who spoke many languages and negotiated diplomacies without an interpreter; her Egypt was a wealthy but weakening kingdom squeezed between the rising power of Rome, and her lifetime’s work was to keep it alive by making herself indispensable to Romans.',
            'The first alliance was with Julius Caesar. Driven out of Alexandria by her brother-husband’s faction in 48 BCE, she had herself smuggled into the palace — the famous carpet (or bed-sack, in the oldest account) unrolled at the warlord’s feet — and by the next year Caesar had restored her throne. Their son Caesarion was born in 47; Caesar set mother and child up in a villa across from Rome itself, a scandal the Republic noted and never forgave. After Caesar’s assassination in 44 BCE, she found his heir-in-rivalry: Mark Antony, who summoned her to Tarsus in 41 and lost the political war to her charisma on the spot. Their alliance — romantic and strategic in proportions historians still argue over — produced three children and, in 34 BCE, the Donations of Alexandria: a ceremony in which Antony handed out Roman-conquered territories to Cleopatra and her children as kings and queens, with Caesarion proclaimed true heir of Caesar. Rome read it as treason with a crown on it.',
          ],
        },
        {
          heading: 'The Living Isis',
          paragraphs: [
            'Egyptian royal ideology ran through everything she did. The Ptolemies had long posed as pharaohs in the temples; Cleopatra went further, and the sources describe her presenting herself as the living Isis — Plutarch records her processing as the goddess, and her patronage of Isis temples in Egypt and abroad was lavish. To Egyptians she was pharaoh and goddess; to Greeks, queen of an ancient divine line; to Romans, increasingly, a foreign enchantress — Octavian’s propaganda machine painted her as a decadent eastern witch dominating Antony, and in 32 BCE Rome formally declared war not on Antony but on Cleopatra herself, the better to frame a Roman civil war as a patriotic one.',
            'That is the strictly documented frame around the mythology this website began with: the last ruler of Egypt deliberately embodied the goddess of Act II — the widow-mother-queen of the greatest Egyptian story — while fighting the empire that would end divine kingship forever. History had circled back to the myth, wearing a crown.',
          ],
        },
      ],
      figures: [
        { name: 'Cleopatra VII', role: 'last pharaoh of Egypt (r. 51–30 BCE)' },
        { name: 'Julius Caesar', role: 'ally, lover, father of Caesarion' },
        { name: 'Mark Antony', role: 'ally and husband, partner against Octavian' },
        { name: 'Octavian', role: 'the future Augustus — her enemy and conqueror' },
      ],
      places: [
        {
          name: 'Alexandria',
          significance: 'Her capital — and the palace where the dynasty ended.',
          locationId: 'alexandria-philae',
        },
        {
          name: 'Philae',
          significance: 'Isis’s temple, which she patronized as the goddess’s living representative.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Ptolemaic',
          relevance: 'The dynasty’s final reign (51–30 BCE).',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
      ],
      relatedDeityIds: ['isis', 'osiris'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['ptolemaic'],
    },
    {
      id: 'actium-and-the-end',
      title: 'Actium & the End of Ptolemaic Rule',
      shortDescription: '31 BCE: the sea battle; 30 BCE: two deaths and a province.',
      narrative: [
        {
          heading: 'The Battle of Actium (31 BCE)',
          paragraphs: [
            'The showdown came at sea. On 2 September 31 BCE, off the promontory of Actium on the west coast of Greece, the fleets of Antony and Cleopatra met those of Octavian and his admiral Agrippa. The battle is one of history’s most-studied engagements, and its outline is not in serious dispute: Agrippa’s blockade strangled Antony’s supply lines through the summer; his lighter, nimbler squadrons outmaneuvered the heavy quinqueremes; and partway through the fight, Cleopatra’s squadron — the treasury ships — broke through the lines and sailed for Egypt, with Antony abandoning the battle to follow her. His army surrendered within the week. Whatever the private hopes of the escape plan, the result was public and total: control of Rome, the Mediterranean, and Egypt had passed to Octavian.',
            'He arrived in Egypt in the summer of 30 BCE. Antony’s last land forces defected; and in the collapsing city, Antony — told, falsely, that Cleopatra was already dead — fell on his own sword and died in her arms. Cleopatra then negotiated with Octavian from inside her captured palace, evidently probing for terms that would preserve her children or her dignity; finding none (and, by most reconstructions, unwilling to walk in his triumph), she took her own life on 10 August 30 BCE — by poison by most ancient accounts, by the famous asp in the version Plutarch says he cannot confirm. She was thirty-nine.',
            'Octavian had Caesarion — “the boy Caesarian,” seventeen years old, briefly proclaimed pharaoh between the deaths — hunted down and executed, remarking, according to his adviser, that too many Caesars was not good. Egypt itself was not treated like other conquered kingdoms: Octavian kept it under his personal control, administered by an equestrian prefect, precisely because it was the richest prize in the Mediterranean — the empire’s granary. The Ptolemaic dynasty was finished, and with it, after three thousand years — from Narmer to Cleopatra — the office of pharaoh was vacant, and would never be filled by a sovereign of Egypt again.',
          ],
        },
      ],
      figures: [
        { name: 'Cleopatra VII', role: 'died 10 August 30 BCE' },
        { name: 'Mark Antony', role: 'defeated at Actium, dead by his own hand' },
        { name: 'Octavian', role: 'the future Augustus, master of Egypt after 30 BCE' },
        { name: 'Caesarion', role: 'Cleopatra’s son by Caesar — the last male claimant, executed' },
      ],
      places: [
        {
          name: 'Alexandria',
          significance: 'Where the dynasty ended and the province began.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Ptolemaic',
          relevance: 'Actium (31 BCE) and annexation (30 BCE) close the era.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
      ],
      relatedDeityIds: ['isis'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['ptolemaic'],
    },
    {
      id: 'after-the-last-pharaoh',
      title: 'After the Last Pharaoh',
      shortDescription: 'Egyptian religion did not die in 30 BCE. It continued, changed, and faded over centuries — not overnight.',
      narrative: [
        {
          heading: 'The Religion Outlives the Kingdom',
          paragraphs: [
            'It is tempting — and wrong — to end the story with the asp. Egyptian religion did not end when Cleopatra died. The temples kept operating for centuries under Roman rule; the Roman emperors themselves were carved on temple walls in the full pharaonic poses, offering to Ma’at and the gods in the old way — Augustus and his successors appear at Dendera, Esna, Philae — because the ritual logic was intact even as the political office was not. The priesthoods, the festivals, the oracles, the burial industry, the entire apparatus of Egyptian religious life continued, adaptively, for another four to five hundred years.',
            'The dated evidence makes the point better than any summary. The great temple of Isis at Philae remained a living pilgrimage center well into the Christian era, drawing worshipers from far beyond Egypt until it was finally closed in the sixth century CE under the emperor Justinian — commonly cited as among the last active ancient Egyptian temples anywhere. The last securely dated hieroglyphic inscription is a graffito carved at Philae in 394 CE; Demotic Egyptian script — the everyday descendant of the sacred writing — appears in temple graffiti as late as 452 CE. Work out the arithmetic: when the last hieroglyphs were cut into Philae’s stone, the Battle of Actium was already more than four centuries in the past. Cleopatra stands nearly halfway between Narmer and the closing of the temples.',
          ],
        },
        {
          heading: 'Transformation, Then a Long Fading',
          paragraphs: [
            'What ended was not sudden but gradual — a slow transformation under pressures the old religion had never faced. Isis and Serapis continued as major cults of the Roman Empire for centuries after 30 BCE, their Egyptian roots recoloring into something Greco-Roman; Egyptian wisdom literature in Greek — the Hermetic Corpus, attributed to Thoth under his Greek name Hermes Trismegistos — fed currents of mysticism, alchemy, and philosophy that would run through Late Antiquity and into the Renaissance. Meanwhile Christianity spread through Egypt from the first century onward; temples closed one by one, some converted to churches, some simply abandoned to the sand; and the Serapeum of Alexandria was destroyed by a Christian mob in 391 CE, a dated landmark on the long curve of decline.',
            'So the honest ending for this act is not a death but a transformation: the gods of Kemet changed their address — from living temples to buried stone, from state religion to inherited symbol, from practiced faith to the raw material of other people’s faiths and fantasies. When hieroglyphs were finally deciphered in 1822, from the trilingual deal on the Rosetta Stone, Egypt’s gods walked out of the silence and into the modern imagination — which is, in a sense, the forms in which you have been meeting them across this entire website. The First Age of the gods ended, in every sense that counts, only when the last temple shut its doors — and by then their story had already become every age’s story.',
          ],
        },
      ],
      figures: [
        { name: 'The emperors of Rome', role: 'carved as pharaohs in Egypt’s temples for centuries' },
        { name: 'Hermes Trismegistos', role: 'Thoth reborn as the legendary father of Hermetic wisdom' },
        { name: 'Isis', role: 'still worshipped across the Mediterranean centuries after 30 BCE', deityId: 'isis' },
      ],
      places: [
        {
          name: 'Philae',
          significance: 'The last great living temple — hieroglyphs carved 394 CE, doors closed in the 6th century.',
          locationId: 'alexandria-philae',
        },
        {
          name: 'Alexandria',
          significance: 'The Serapeum, destroyed 391 CE — a dated milestone of the slow ending.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Ptolemaic',
          relevance: 'The era whose end this section answers — and whose temples outlasted it.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
        {
          name: 'Late Period',
          relevance: 'The long tradition of temple religion that Roman rule inherited and continued.',
          kind: 'historical-context',
          eraId: 'late-period',
        },
      ],
      relatedDeityIds: ['isis', 'thoth', 'osiris'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['ptolemaic', 'late-period'],
    },
    {
      id: 'thematic-conclusion',
      title: 'The Whole Story',
      shortDescription: 'Eight movements, one civilization — and the door back into the cycle.',
      narrative: [
        {
          heading: 'The Shape of the Four Acts',
          paragraphs: [
            'Creation. Order. Death. Resurrection. Conflict. Kingship. Empire. Cultural transformation. Hold the chain up to the light and each link is one of the acts you have just read: the waters of Nun and the world spoken from the mound; Ma’at established in the space between earth and sky; the good king scattered and the first mummy bound; the brief return and the promise beyond death; eighty years of contendings before the tribunal; the falcon crowned and the storm employed; the hidden god of an empire and the queens and conquerors who inherited his world; and at the end, a religion transformed — carried abroad, translated, and turned into everyone’s past.',
            'Notice what the chain does not contain: a final victory. The Egyptian story never closes with chaos defeated, death abolished, or the arrangement permanent. It ends where it began — with a world that must be gathered, weighed, and maintained, and with people who find in that work their dignity, their hope, and their whole theory of how to live. That refusal of an ending is the most Egyptian thing about it, and it is why the story has never actually stopped being told.',
            'The First Age closes here. The Four Acts are complete — and the doors of this history, like the doors of Egypt’s temples, open in every direction.',
          ],
        },
      ],
      figures: [
        { name: 'Nun', role: 'the waters where the story began' },
        { name: 'Ma’at', role: 'the order that must always be maintained' },
        { name: 'Isis', role: 'the goddess who outlived every empire in this act', deityId: 'isis' },
        { name: 'Osiris', role: 'the first graduate of death — and its judge', deityId: 'osiris' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where creation was spoken — the first door.',
          locationId: 'heliopolis',
        },
        {
          name: 'Philae',
          significance: 'Where the last hieroglyphs were carved — the last door.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The First Time — where the whole cycle begins.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
        {
          name: 'Ptolemaic',
          relevance: 'The documented age where the cycle ends.',
          kind: 'historical-context',
          eraId: 'ptolemaic',
        },
      ],
      relatedDeityIds: ['ra', 'osiris', 'isis', 'amun'],
      relatedLocationIds: ['heliopolis', 'thebes', 'alexandria-philae'],
      relatedEraIds: ['zep-tepi', 'new-kingdom', 'ptolemaic'],
    },
  ],
};
