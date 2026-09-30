import type { Act } from './types';

/**
 * ACT I — THE DAWN OF CREATION.
 * The Heliopolitan cosmogony: from the waters of Nun to the birth of the
 * last generation of gods, closing on Ma'at and Isfet — the cosmic tension
 * that gives the whole story its stakes. Cross-references point at existing
 * deity, era, and location profiles; nothing here duplicates their pages.
 */
export const ACT_ONE: Act = {
  id: 'dawn-of-creation',
  actNumber: 1,
  numeral: 'I',
  title: 'The Dawn of Creation',
  subtitle: 'From the black waters of Nun to the first struggle between order and chaos',
  introduction: [
    'Before Egypt had a name, before the river had a course, there was only Nun — and inside Nun, everything that would ever exist waited in the dark. Act I tells how the world was spoken, breathed, and born out of those waters: the mound that rose, the sun that named itself, the air that split earth from sky, and the family of gods whose quarrels would shape every age that followed.',
    'But this is more than a story of beginnings. It is the charter of an idea that governed Egypt for three thousand years: that order is not guaranteed, only achieved — sustained daily against the pull of the waters that wait beyond the riverbanks. Every act that follows, from a murder at a feast to the fall of empires, happens inside that struggle.',
  ],
  chronologicalPosition: 1,
  primaryDeities: [
    { name: 'Nun', role: 'the primeval waters' },
    { name: 'Atum-Ra', role: 'the self-created sun', deityId: 'ra' },
    { name: 'Shu', role: 'air and sunlight' },
    { name: 'Tefnut', role: 'moisture' },
    { name: 'Geb', role: 'the earth' },
    { name: 'Nut', role: 'the sky' },
    { name: 'Ma’at', role: 'truth and cosmic order' },
  ],
  historicalReferences: [
    {
      name: 'Zep Tepi — the First Time',
      relevance: 'The act retells the mythic age that every later era remembered as its charter.',
      kind: 'mythological-tradition',
      eraId: 'zep-tepi',
    },
    {
      name: 'Old Kingdom',
      relevance: 'When the Heliopolitan priesthood fixed the Ennead cosmogony in pyramid texts and state religion.',
      kind: 'historical-context',
      eraId: 'old-kingdom',
    },
  ],
  keywords: ['creation', 'zep tepi', 'ennead', 'heliopolis', 'nun', 'atum', 'cosmogony', 'maat', 'isfet'],
  relatedDeityIds: ['ra', 'osiris', 'isis', 'set', 'thoth', 'ptah'],
  relatedLocationIds: ['heliopolis', 'memphis'],
  relatedEraIds: ['zep-tepi', 'old-kingdom'],
  visual: {
    plate: 'from-sky-200/60 via-cyan-100/40 to-indigo-300/60',
    glyph: '𓈖',
    image: 'images/act-dawn-of-creation.jpg',
    hieroglyph: '𓇳𓆓𓅱',
  },
  sections: [
    {
      id: 'nun',
      title: 'Nun',
      shortDescription: 'The endless black waters that held every possibility before the world began.',
      narrative: [
        {
          heading: 'The Ocean Before Naming',
          paragraphs: [
            'Begin with the water. Not a sea — seas have shores, and shores are definitions — but Nun: an infinite, inert, black ocean of unformed potential that existed before light had an opposite, before above and below meant anything. In Nun there was no earth to stand on, no sky to arch overhead, no death because nothing yet lived, and no divine order because nothing yet happened. Time itself had not begun. The Egyptians pictured the gods of chaos dwelling in this darkness as frogs and serpents — silent creatures of the mud and the deep, eyes shut against a world that did not exist.',
            'The Egyptians did not imagine Nun as evil. Chaos, to them, was not a war to be won but a default to be held back. Nun was simply everything at rest: no shape, no boundary, no name — and therefore no meaning, because in the Egyptian mind a thing without a name was a thing not yet real. What we would call nothing, they called everything, unarranged.',
            'Every major creation account — the priestly traditions of Heliopolis, Memphis, Hermopolis, and Thebes — begins inside these waters, and every one of them agrees on the essential point: nothing was created from nothing. Everything that would ever exist — the gods, the river, the first person, this very sentence — already lay hidden inside Nun, folded and waiting. Creation was not manufacture. It was release: the moment the inert became active, the formless took form, and possibility began spending itself on particulars.',
          ],
        },
        {
          heading: 'The Waters That Never Left',
          paragraphs: [
            'And the Egyptians insisted the door had never fully closed. Each year the Nile rose, drowned the valley, and withdrew — and each year the first black mounds of mud surfaced above the flood exactly as the first mound had surfaced in the First Time. The fields died and were reborn; the world was visibly re-created annually, in front of everyone. The rhythm of the river was the rhythm of creation, replayed.',
            'This is why Nun never became a defeated enemy or a forgotten background. The waters stood patiently outside the riverbanks and beyond the horizon, waiting for the order of Ma’at to tire. Temples were built as islands of creation — their floors raised above artificial mounds, their holy lakes a piece of Nun tamed inside the walls. When the sun set each evening it sank back toward those waters; when it rose, the world had once again been saved.',
            'One tradition, preserved among the Hermopolitan theologians, said the eight chaos-gods of the Ogdoad — four frogs and four serpents, darkness and hiddenness, infinity and the water itself — still surrounded the created sun in its barque as it crossed the sky, its ancient escorts. Whether the Egyptians worshipped them or merely acknowledged them, they never pretended chaos had been abolished. It had only been kept out, and keeping was a full-time job.',
          ],
        },
      ],
      figures: [
        { name: 'Nun', role: 'the primeval waters, father of the gods' },
        { name: 'The Ogdoad', role: 'eight primordial beings of the deep (one tradition among several)' },
      ],
      places: [
        {
          name: 'The primeval deep',
          significance: 'No location yet — the world does not yet exist. Nun surrounds all creation forever after.',
        },
        {
          name: 'Hermopolis (Khemenu)',
          significance: 'The city whose priests preserved the Ogdoad tradition of the eight chaos-powerful beings.',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The mythic first moment the act cycle opens on — the instant before creation.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: [],
      relatedLocationIds: [],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'atum',
      title: 'Atum',
      shortDescription: 'The self-created god stands on the first mound, becomes the sun, and speaks a world into being.',
      narrative: [
        {
          heading: 'The Mound and the Complete One',
          paragraphs: [
            'From the flat black surface of Nun, a mound rose. However the theologians argued about the mechanism — some said the god thought himself into being, others that he sneezed or spat the first moisture into existence — all agreed on the scene: the first solid ground, surfacing from the flood, and a god standing on it. The Egyptians called the mound the Benben, and they believed they could still touch it. At Heliopolis, in the temple of the sun, a pyramidal stone was kept and worshipped as the original — the actual altar of the First Time, washed by the retreating flood of creation.',
            'The god who stood on the mound was Atum, and his name meant something like “the complete one” or “the all” — because he was not born. He had no mother and no father, no lineage and no debt. He made himself: he stirred, he became aware, and existence began around him the way a sentence begins around its first word. In the earliest theology he was the evening sun, the aged sun gliding toward the horizon; but very early — already by the Pyramid Texts of the Old Kingdom — the priests of Heliopolis joined him with the sun in all its forms, and he was worshipped as Atum-Ra: the self-created one and the sun, spoken of as one god.',
          ],
        },
        {
          heading: 'Fusion of Two Powers',
          paragraphs: [
            'The fusion of Atum and Ra deserves a pause, because it shows how Egyptian theology actually worked. Ra — the blazing sun of midday, the king of the sky — and Atum — the tired evening sun, the finished creator — were distinct figures with distinct characters. Rather than choosing between them, the priests braided them: Atum-Ra, one god who is both the power of the sun and the personality of the creator. The Egyptians were never disturbed by such unions. A god could be many things; the names were masks over powers too large for any single one.',
            'In some traditions — later sources describe it in detail — Atum-Ra was also said to be the one who would survive the end: when the world finally tired and returned to Nun, he alone would remain, dissolving back into the waters with the rest of creation, waiting to begin again. The story of the beginning was thus also a prophecy of the ending, and the Egyptians held both without flinching.',
            'His first acts on the mound were not acts of muscle. To speak a thing in Kemet was to make it real — names had substance, and creation was an act of language. Atum opened his mouth and named what came from him: the air, the moisture, and beyond them a whole descending chain of gods and worlds. The priests of Memphis would later tell the same story one step more abstractly — their craftsman god Ptah conceiving the world in his heart and pronouncing it with his tongue — but the pattern never changed: the universe is a sentence, and it was spoken once and must be sustained forever.',
          ],
        },
      ],
      figures: [
        { name: 'Atum', role: 'the self-created one, “the complete”' },
        { name: 'Atum-Ra', role: 'the theological union of creator and sun', deityId: 'ra' },
        { name: 'Ptah', role: 'Memphis’ version of creation by heart and tongue', deityId: 'ptah' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Home of the Benben stone and the priests of the Ennead.',
          locationId: 'heliopolis',
        },
        {
          name: 'Memphis (Ineb-hedj)',
          significance: 'Where the Ptah theology re-told creation as thought and speech.',
          locationId: 'memphis',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The First Time, when Atum stood on the mound.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
        {
          name: 'Old Kingdom',
          relevance: 'When the Pyramid Texts at the royal pyramids fixed the Atum-Ra theology in writing.',
          kind: 'historical-context',
          eraId: 'old-kingdom',
        },
      ],
      relatedDeityIds: ['ra', 'ptah'],
      relatedLocationIds: ['heliopolis', 'memphis'],
      relatedEraIds: ['zep-tepi', 'old-kingdom'],
    },
    {
      id: 'shu-and-tefnut',
      title: 'Shu & Tefnut',
      shortDescription: 'Air and moisture — the first pair — establish the very conditions in which a world can happen.',
      narrative: [
        {
          heading: 'Breath and Damp: The First Conditions',
          paragraphs: [
            'From himself — the texts are delicate about how; one tradition says he sneezed out Shu and spat out Tefnut; another that they emerged from his own body like children of his breath — Atum brought forth the first pair. Shu was the dry, luminous air: the empty space that lets anything occupy a place, the medium through which light travels. Tefnut was moisture: humidity, spittle, rain, the wet principle without which nothing grows. He was air as space; she was air as breath. Between them they were the atmosphere itself, personified.',
            'It is easy to overlook how radical a claim this is. Before Shu and Tefnut, creation had produced only a mound and a god — a place and a being. With them, the world acquired the two conditions without which nothing further can happen: room, and water. Every subsequent act of creation — every birth, every harvest, every life — would take place inside the space Shu opened and drink from the moisture Tefnut carried. The Egyptians honored them as the quiet infrastructure of existence: not the flashiest gods, but the ones without which the universe is a sealed, dry, uninhabitable stone.',
          ],
        },
        {
          heading: 'The Lost Children and the Wandering Eye',
          paragraphs: [
            'Then comes the first story. Shu and Tefnut ventured away from their father into the dark body of Nun — the first expedition into the unknown — and Atum, alone on his mound with no sun yet risen to see by, lost them. The one god who had made himself discovered the one thing he could not make: certainty that his children still existed.',
            'So he removed his own eye and sent it into the darkness to search. The Eye went, found the pair, and led them home — and in its absence, Atum grew another eye in its place. When the first eye returned and found a rival occupying its seat, it wept; and from Atum’s tears, the story says, grew mankind. The Egyptians did not flinch from this humbling arithmetic: we are the overflow of a god’s sorrow, born in the interval between a search and its success. Later traditions built further on this restless Eye, making it the sun’s fierce traveling emissary — a role that in some tellings belongs to other goddesses entirely, for the Eye’s identity was always negotiated, never fixed.',
            'Atum wrapped the returned Eye in radiance and set it on his brow as a uraeus — the coiled cobra that would burn anyone who threatened the sun — and around that image the whole logic of royal Egypt would later assemble: the king as the Eye’s wearer, the sun as an instrument that travels, searches, and comes home. For our story, the point is simpler: the first family reunion in history ended in tears, and from those tears came us. Creation, from its very first generation, was already a story about loss and recovery — the theme that will drive everything that follows.',
          ],
        },
      ],
      figures: [
        { name: 'Shu', role: 'air, space, and the light between things' },
        { name: 'Tefnut', role: 'moisture, the wet breath of the world' },
        { name: 'Atum-Ra', role: 'father who sends his Eye into the dark', deityId: 'ra' },
      ],
      places: [],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The first generation after the self-creation — the world acquires room and water.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['ra'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'geb-and-nut',
      title: 'Geb & Nut',
      shortDescription: 'Earth and sky lie entwined until their father Shu forces them apart — creating the space where life can live.',
      narrative: [
        {
          heading: 'The Embrace That Stalled the World',
          paragraphs: [
            'Shu and Tefnut, joined, produced the second pair: Geb and Nut. Geb was the earth — the fertile skin of the world, its hills its bones, its rivers the water of his laughter. Nut was the sky — vast, arched, star-thrown. And the two loved each other with a closeness that left no room for anything else. Earth pressed against sky; there was no between, no horizon, no air to breathe, no space in which any creature could exist. Creation stalled in an embrace.',
            'So Shu, the air, did the necessary violent thing. He placed himself between his children and pushed — an act the Egyptians read not as cruelty but as the price of a habitable world. Some people are ground and some people are sky and someone must be the space between them; in the Egyptian telling, that someone is always Shu, arms straining forever.',
          ],
        },
        {
          heading: 'The Space Between',
          paragraphs: [
            'Nut arched away over her brother’s body, and the Egyptians drew this image everywhere, for three thousand years: the sky-goddess in a perfect arch, her star-covered belly the night sky, her fingers and toes touching the four horizons where the pillars of heaven stand, while Geb reclines beneath her, green and grinning, and Shu stands between them on eternal guard, arms raised, holding the heavens up. The stars were the ornaments of Nut’s body; dawn and dusk were her passages as she swallowed the sun each evening and gave birth to it each morning.',
            'Geb, separated, became the ground of everything that followed — literally. Vegetation rose from his back; the dead were buried in him; kingship itself, in Egyptian idiom, was said to “sit upon the throne of Geb.” The earthquake, one tradition says, was Geb’s laughter. And into the space Shu had opened — the air between earth and sky, the gap in which weather, light, and life become possible — the god of the world’s structure installed its operating principle: Ma’at, truth and balance, established like a floor in the new room of the universe.',
            'That is the deepest lesson of this section. Creation, for the Egyptians, was not an object but an arrangement: things held apart at exactly the right distance, forever, by effort. The cosmos is a posture, not a monument. Every temple, every crown, every law of pharaonic Egypt existed for one stated purpose — to keep Ma’at standing, to keep Shu’s arms from tiring, to keep Geb and Nut from falling back together and the black water closing over the world again.',
          ],
        },
      ],
      figures: [
        { name: 'Geb', role: 'the earth, throne of kingship' },
        { name: 'Nut', role: 'the sky, who swallows and births the sun' },
        { name: 'Shu', role: 'the separator, god of air and space' },
        { name: 'Ma’at', role: 'the order established in the space between' },
      ],
      places: [],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The structuring of the cosmos before the reign of gods on earth.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['ra'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'birth-of-the-younger-gods',
      title: 'The Children of Geb & Nut',
      shortDescription: 'Osiris, Isis, Set, and Nephthys are born outside time — and with them, the quarrel that will drive the rest of the story.',
      narrative: [
        {
          heading: 'Five Days Outside the Year',
          paragraphs: [
            'Geb and Nut, joined against the decree of Ra — who, angered at their union or jealous of the children it promised, forbade the sky-goddess to give birth in any month of any year — found a loophole worthy of the gods. Thoth, the measurer, the reckoner, went to the moon and won five extra days at gaming: days that belonged to no month, sat outside the calendar, obeyed no rule. And into those five epagomenal days, outside time itself, the new generation slipped into existence.',
            'On the first day Osiris was born, and later tradition describes a voice ringing out from within his mother, proclaiming the lord of all come into the light of day — a birth-cry the temple scribes loved and embroidered for centuries. On the second, elder Horus of the wide wings. On the third — torn out of the womb in his mother’s blood, for he would not wait — came Set, red of hair and temper. On the fourth, Isis, in the marshes; and on the fifth, her twin Nephthys, mistress of the house. Whether the sources name four children or five, and which Horus they count among them, differed from teller to teller — the Egyptians were comfortable with a family whose roster shifted like a river’s bank.',
          ],
        },
        {
          heading: 'Two Horuses: A Necessary Distinction',
          paragraphs: [
            'Here a confusion must be untangled, because it trips every modern reader. Egyptian religion knew two great figures named Horus. The first is Horus the Elder — Haroeris — the falcon of the sky, born in the second of the five days, a cosmic god of the fifth generation of the Ennead, whose eyes were said to be the sun and the moon. He belongs to creation, to this act, to the ordering of the heavens.',
            'The second is Horus, son of Isis and Osiris — Harseisis — the posthumous child of the murder story, born in the reeds of Chemmis and raised in hiding to avenge his father. He belongs to Act III. Egyptian tradition did not originally see these as contradictory: “Horus” named a divine office as much as a person — the sky-falcon, the rightful heir, the god who is — and different ages and different temples filled the office with different stories. The Greeks, trying to systematize, and modern books, trying to tidy, often flattened the distinction; the Egyptians themselves held both Horuses easily, the way a single family name can hold many men.',
            'In the pages of this history, when we say Horus we mean the son of Isis and Osiris — the avenger — unless we say otherwise. But remember that the falcon flew in the sky long before the murder that made him famous.',
          ],
        },
        {
          heading: 'The Last Generation, and the First Crime',
          paragraphs: [
            'With these children the Ennead of Heliopolis — the company of nine — was complete: Atum-Ra and his descendants, from the self-made sun down to the four siblings who would divide the world between them. Each took a character that would define the next two acts. Osiris, firstborn, the king. Isis, the cunning queen, greatest of them in magic. Set, the red one, force of the desert and the storm. Nephthys, the shadow-side sister, who would stand beside her sister in mourning while married to her sister’s enemy.',
            'Act I closes here because creation does: the machinery of the universe finished, the air holding, the sky in place, the Nile promised — and in the family of the gods, the seeds of murder, love, war, and resurrection already sown. The stage of Kemet was set for the first kingship, and the first crime.',
          ],
        },
      ],
      figures: [
        { name: 'Osiris', role: 'firstborn, the future murdered king', deityId: 'osiris' },
        { name: 'Isis', role: 'the great of magic', deityId: 'isis' },
        { name: 'Set', role: 'the forceful one, born of the blood', deityId: 'set' },
        { name: 'Nephthys', role: 'mistress of the house, loyal in mourning' },
        { name: 'Horus the Elder', role: 'the sky-falcon of creation — not the son of Isis' },
        { name: 'Thoth', role: 'who won the five days from the moon', deityId: 'thoth' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where the completed Ennead was remembered and taught.',
          locationId: 'heliopolis',
        },
        {
          name: 'Chemmis',
          significance: 'The papyrus marsh country associated with Isis and the childhood yet to come.',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The divine generation that bridges the creation story to the Osiris cycle.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['osiris', 'isis', 'set', 'horus', 'thoth'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'maat-and-isfet',
      title: 'Ma’at and Isfet',
      shortDescription: 'Truth, balance, and cosmic order — against disorder, chaos, and the pull of the waters. The struggle that never ends.',
      narrative: [
        {
          heading: 'The Feather at the Center of Everything',
          paragraphs: [
            'Creation, we have seen, was not an object but an arrangement — things held in place by effort. The Egyptians gave that arrangement a name and made it a goddess: Ma’at. She appears in art as a woman wearing a single ostrich feather, and that feather came to stand for everything she governed: truth, justice, balance, rightness, the way things are supposed to be when the world is working.',
            'Ma’at was not a moral abstraction floating above events. She was structural. The sun rose because Ma’at held the course of its barque; the Nile flooded on schedule because Ma’at regulated the year; a judge who ruled honestly, a merchant who weighed fairly, a farmer who paid his dues in full — each was performing Ma’at, feeding her the same way offerings fed the gods. Egyptian texts do not say a good king “followed the law.” They say he lived on Ma’at, breathed Ma’at, and gave Ma’at to the gods in exchange for the world’s continuation. The Pharaoh’s core job description, written on every monument, was not conquest but maintenance: to uphold Ma’at and repel Isfet.',
          ],
        },
        {
          heading: 'Isfet: The Constant Pull',
          paragraphs: [
            'Against her stood her shadow — not a devil, but a drift. Isfet was the Egyptian word for disorder: injustice, falsehood, chaos, the tendency of everything, left alone, to slide back toward the formless waters from which it came. Isfet was lies in the courtroom and drought in the fields; it was Apophis, the great serpent coiled each night at the horizon, waiting to swallow the sun’s barque; it was the slow entropy of neglect. Where Ma’at binds, Isfet loosens. Where Ma’at names, Isfet forgets.',
            'The Egyptians never pretended the struggle could be finally won. The sun fights through the underworld every single night and must fight again the next; the Nile must be welcomed and worked every single year; every generation must re-choose justice or watch it fray. Creation was a recurring performance, not a completed project — and this, more than any single myth, is the engine of the entire story this website tells. The Four Acts are not a sequence of finished events but episodes in a war without a final battle.',
          ],
        },
        {
          heading: 'Why the Story Keeps Coming Back',
          paragraphs: [
            'This is why Egyptian mythology returns again and again to order versus chaos — in the creation, in the murder of Osiris, in the daily battle of Ra against Apophis, in the weighing of every human heart against Ma’at’s feather. The theme is not decoration; it is the physics of the Egyptian universe. A king who keeps Ma’at is a god’s partner; a court that fails is a crack in the sky. When Egypt itself was conquered, occupied, or torn by civil war, its scribes reached for the same vocabulary: the land was in isfet, the waters were rising, the sun was in danger — and the task of every age was to gather what had been scattered, and begin again.',
            'Keep Ma’at’s feather in mind as you read what follows. It will be there at the murder of the good king, in the tomb beside every mummy, on the scales of judgment beneath every soul — and at the end of the story, when foreign armies cross the borders, the question the Egyptians asked was always the same one their theologians asked at the beginning: is the arrangement holding, or are the waters closing in?',
          ],
        },
      ],
      figures: [
        { name: 'Ma’at', role: 'truth, justice, and the structure of existence' },
        { name: 'Isfet', role: 'disorder — not a god, a drift toward the waters' },
        { name: 'Apophis', role: 'the serpent of chaos, Isfet’s nightly champion' },
        { name: 'Ra', role: 'whose daily voyage is the struggle made visible', deityId: 'ra' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where the theology of order and the Ennead was taught; Ma’at’s oldest cult centers stood nearby.',
          locationId: 'heliopolis',
        },
        {
          name: 'Thebes (Waset)',
          significance: 'Amun’s priests later proclaimed him the hidden sustainer of Ma’at itself.',
          locationId: 'thebes',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'Ma’at was established in the First Time — the pattern every age must restore.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
        {
          name: 'Middle Kingdom',
          relevance: 'Era of wisdom literature devoted to Ma’at: instruction texts on justice, truth, and the falling apart of the world when order fails.',
          kind: 'historical-context',
          eraId: 'middle-kingdom',
        },
      ],
      relatedDeityIds: ['ra', 'amun'],
      relatedLocationIds: ['heliopolis', 'thebes'],
      relatedEraIds: ['zep-tepi', 'middle-kingdom'],
    },
  ],
};
