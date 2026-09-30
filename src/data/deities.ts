import type { Deity } from './types';

export const DEITIES: Deity[] = [
  {
    id: 'amun',
    name: 'Amun',
    epithet: 'King of Gods & The Hidden One',
    span: 'Lord of the Thrones of the Two Lands',
    glyph: '𓇋',
    plate: 'from-sky-300/50 via-indigo-100/40 to-violet-400/50',
    image: 'images/amun.jpg',
    hieroglyph: '𓇋𓏤',
    symbols: ['Two Tall Feathers (Plumes)', 'Ram Horns', 'Ankh', 'Sacred Ram & Goose'],
    cultCenter: 'Thebes (Karnak & Luxor)',
    sections: [
      {
        heading: 'Mythological Origins',
        paragraphs: [
          'Amun began as no king at all. He was first numbered among the eight primordial deities of the Ogdoad worshipped at Hermopolis — four pairs of frogs and serpents who embodied the raw qualities of the universe before creation. His element was the unseen: the hidden wind, the invisible air that moves everything yet can never itself be looked upon.',
          'This invisibility was not weakness but profundity. To the Egyptians, Amun represented the unknowable depth behind all other gods — the hidden power that even the sun drew upon. His very name meant “the hidden one.”',
        ],
      },
      {
        heading: 'Elevation to King of Gods',
        paragraphs: [
          'Fate changed when Thebes rose. During the New Kingdom, after Egyptian princes from Thebes expelled the foreign Hyksos rulers and reunified the Two Lands, their patron god rose with them. Amun was elevated to supreme national deity — the divine patron of an empire that stretched from Nubia to the Euphrates.',
          'Pharaohs credited their victories to him: Hatshepsut built him terraces at Deir el-Bahri, and every triumph was proclaimed as Amun’s will. What had once been a local wind god of a provincial town now stood above the entire pantheon.',
        ],
      },
      {
        heading: 'Fusion into Amun-Ra',
        paragraphs: [
          'To bind the new king of gods to the oldest sacred traditions, Amun merged with the ancient sun god Ra, forming Amun-Ra — the “King of All Gods, Deities, and Mortals.”',
          'In this fused form he embodied two great mysteries at once: the visible light of the sun, and the invisible breath of life. He was shown as a man crowned with two tall plumes, or as a ram — fertile, strong, and silent. His cult formula declared him the one god who hid himself from gods and mortals alike, beyond the reach of sight yet nearer to the heart than breath itself.',
        ],
      },
      {
        heading: 'Cult Center & Empire',
        paragraphs: [
          'His seat was the Karnak Temple Complex at Thebes (Waset) — the largest religious complex ever constructed in the ancient world, grown over fifteen centuries into a forest of pillars, obelisks, and colossal gateways. The avenue of sphinxes joined Karnak to Luxor, his southern temple of the feast of Opet.',
          'There the high priests of Amun commanded estates, workshops, granaries, and fleets — an economic and political power so immense that by the end of the New Kingdom the priesthood of Amun effectively ruled Upper Egypt as kings in all but name.',
        ],
      },
    ],
  },
  {
    id: 'ra',
    name: 'Ra',
    epithet: 'God of the Sun & Creation',
    span: 'Creator of the Ennead · King of Deities',
    glyph: '𓂀',
    plate: 'from-amber-200/60 via-yellow-100/40 to-orange-300/60',
    image: 'images/ra-eye.jpg',
    hieroglyph: '𓇳',
    symbols: ['Sun Disk', 'Obelisk & Benben Stone', 'Scarab (Khepri)', 'Was-scepter'],
    cultCenter: 'Heliopolis (Iunu)',
    sections: [
      {
        heading: 'Born from the Waters of Nun',
        paragraphs: [
          'Before the world had a name, there was only Nun — an endless, black ocean of unformed chaos. From its depths rose the primeval mound, the Benben, and standing upon it was Ra, self-created, needing no mother and no father. When he opened his mouth and spoke the names of his children — Tefnut, moisture, and Shu, air — the first act of creation was not an act of muscle but of speech. To speak a thing in Kemet was to make it real.',
        ],
      },
      {
        heading: 'The Daily Journey',
        paragraphs: [
          'Every day Ra boards the Mandjet, the Boat of Millions of Years, and sails across the belly of the sky. At dusk he descends into the Mesektet, the evening barque, and journeys through the twelve hours of the Duat — the underworld — passing through twelve gates guarded by serpents and spells, growing old and cold as he goes.',
          'At the seventh hour, the deepest midnight, the chaos serpent Apep rises to swallow the river of the sky itself. Every night Ra battles it with spear and spells, aided by Set at the prow; and every night, so far, he has won. If Apep ever triumphed, dawn would not come — which is why priests all over Egypt recited the Book of Overthrowing Apep daily, enlisting every Egyptian in the sun god’s defense.',
        ],
      },
      {
        heading: 'Khepri, Ra, Atum — One God, Three Ages',
        paragraphs: [
          'Ra is never one god only. At dawn he is Khepri, the scarlet beetle rolling the sun over the horizon like a ball of dung toward new life. At noon he is Ra in the fullness of his power, all-seeing and gold. At evening he becomes Atum, the old man of the sunset, wrinkled and weary, descending into the west to be judged, renewed, and born again. The sun does not die each night; it changes its clothes.',
        ],
      },
    ],
  },
  {
    id: 'osiris',
    name: 'Osiris',
    epithet: 'Ruler of the Afterlife & First Mummy',
    span: 'King of the Golden Age · Judge of Souls',
    glyph: '𓁹',
    plate: 'from-emerald-200/50 via-stone-100/40 to-green-300/50',
    image: 'images/osiris.jpg',
    hieroglyph: '𓊽',
    symbols: ['Atef Crown', 'Crook & Flail', 'Djed Pillar', 'Green Skin of Rebirth'],
    cultCenter: 'Abydos (Abdju)',
    sections: [
      {
        heading: 'The Golden Age King',
        paragraphs: [
          'In the first age, it was Osiris — not Ra — who walked the earth as its king. His reign was the golden age of Kemet: with Isis at his side he taught humanity to plow the silt of the Nile, to press grain into bread, to write law, and to honor the gods with rite and rhythm. It is said the Egyptians wept when he ascended the throne, out of joy — and their tears watered the first harvest.',
        ],
      },
      {
        heading: 'The Betrayal',
        paragraphs: [
          'His brother Set did not weep. Jealousy dressed itself in cunning: Set commissioned a chest of the finest gold, sized exactly to Osiris, and at a feast offered it to whoever fit inside. When Osiris lay down in it, the conspirators slammed the lid, sealed it with lead, and set it upon the Nile. The river carried the king to the sea and to Byblos, where a cedar grew around the chest and swallowed it into its trunk.',
          'Set would not leave even that peace intact. He retrieved the body, tore it into fourteen pieces, and scattered them across the provinces of Egypt — so that no tomb could ever hold the whole king.',
        ],
      },
      {
        heading: 'Resurrection and Judgment',
        paragraphs: [
          'It was Isis who gathered the pieces, Anubis who performed the first embalming, and the gods who reassembled Osiris — not to live again among men, but to reign where no living thing rules. He sits green-skinned and eternal upon the throne of the Duat, presiding over the Field of Reeds (Aaru).',
          'Every soul that dies must pass before his tribunal in the Hall of Two Truths: the heart weighed against the feather of Ma’at, the life read aloud, the forty-two assessors listening. He is both the judge and the promise — for the god who was murdered and made whole is proof that death in Kemet is a door, not a wall.',
        ],
      },
    ],
  },
  {
    id: 'isis',
    name: 'Isis',
    epithet: 'Goddess of Magic, Life, & Protection',
    span: 'The Great Sorceress · Universal Mother',
    glyph: '𓆎',
    plate: 'from-sky-200/50 via-amber-100/40 to-indigo-300/50',
    image: 'images/isis.jpg',
    hieroglyph: '𓋹',
    symbols: ['Throne (Ast) Crown', 'Tyet (Knot of Isis)', 'Wings & Kite Form', 'Sistrum'],
    cultCenter: 'Philae',
    sections: [
      {
        heading: 'The Name of Ra',
        paragraphs: [
          'Isis was not the most powerful god in the beginning — so she made herself so. She learned that Ra held a secret true name carrying his dominion, and she devised the first great act of sorcery: from the spittle of the aging sun god she shaped a serpent that bit him as he walked. No physician could ease the burning, and Isis, the great of magic, offered the cure — for a price. Ra surrendered his hidden name, and with it his power flowed into her. From that day, magic itself was called by her name.',
        ],
      },
      {
        heading: 'The Search for Osiris',
        paragraphs: [
          'When Set murdered her husband and scattered him across Egypt, Isis did what no god of war could: she mourned, and then she worked. Cutting her hair and dressing in widow’s black, she traveled the whole known world — along the Nile, across the Great Green to Byblos — asking, healing, bargaining, until every piece of Osiris was recovered. Where each fragment fell, she raised a shrine.',
          'With Anubis she bound the pieces in linen, crafting the first mummy and teaching Egypt that the body must be kept whole for eternity. The art of embalming is, at its root, an act of devotion re-enacted in her name.',
        ],
      },
      {
        heading: 'Horus in the Marshes of Chemmis',
        paragraphs: [
          'Then came the most audacious spell ever spoken. Fashioning the member Osiris lacked, Isis transformed into a kite, beat her great wings above her husband’s body, and fanned the breath of life into him — not enough to reign again, but enough. From that brief return she conceived Horus, in the papyrus marshes of Chemmis, hiding her unborn son among the reeds from the searching armies of Set.',
          'She raised him in secret, shielding him from scorpions and snakes, until the day the avenger was grown. To the Egyptians she was the throne itself — the sign on her head is the royal seat — the mother of every pharaoh and the intercessor who could bend even the gods. Her cult outlived the empire that invented it, carried by Greek and Roman ships to the banks of the Thames and the Rhine.',
        ],
      },
    ],
  },
  {
    id: 'set',
    name: 'Set',
    epithet: 'God of Chaos, Storms, & Foreign Lands',
    span: 'Lord of the Red Land · Defender of the Solar Barque',
    glyph: '𓃭',
    plate: 'from-red-200/50 via-stone-200/40 to-rose-400/50',
    image: 'images/set.jpg',
    hieroglyph: '𓃒',
    symbols: ['Sha-Animal Head', 'Set-Animal (Typhonic Beast)', 'Storm & Thunder', 'Desert Red Crown'],
    cultCenter: 'Ombos (Nubt)',
    sections: [
      {
        heading: 'Protector and Villain',
        paragraphs: [
          'The Egyptians did not see Set as we might expect — as a devil. He was necessary. Born of Nut with a force so violent he tore his own way out of the womb, Set was the red land beyond the black: the desert that could kill you, the storm that could ruin you, the foreign army at the border. Chaos was part of creation’s economy, and Set was its overseer.',
          'Every night, in fact, Set performed a duty no other god could. Stationed at the prow of Ra’s solar barge as it crossed the Duat, he speared the serpent Apep with a great harpoon — for only Set’s violence was a match for pure chaos. The destroyer of his brother was, without fail, the defender of the sun. Both things were true at once, and the Egyptians never resolved the contradiction. They worshipped him for it and feared him for it.',
        ],
      },
      {
        heading: 'The Contendings of Horus and Set',
        paragraphs: [
          'What Set could not reconcile was envy. Osiris ruled the green and fertile black land; Set held only the desert. First came the golden chest and the murder at the feast. Then, when young Horus rose to claim his inheritance, Set challenged him — and for eighty years the Contendings raged: contests of stone ships, of hippopotami in the deep river, of curses and counter-curses, endless trials before the tribunal of gods who could not decide between them.',
          'In the end the throne went to Horus, and Set did not get the night — he got the sky’s most dangerous post instead: thunder at Ra’s side, storm-lord forever, his strength honored precisely because it could never be trusted. Every pharaoh carried his violence in the army and his order in the crown; Egypt was never allowed to forget him.',
        ],
      },
    ],
  },
  {
    id: 'horus',
    name: 'Horus',
    epithet: 'God of Sky & Kingship',
    span: 'The Avenger · Model for All Pharaohs',
    glyph: '𓅃',
    plate: 'from-yellow-200/60 via-amber-100/40 to-sky-300/50',
    image: 'images/horus.jpg',
    hieroglyph: '𓅗',
    symbols: ['Wadjet Eye (Eye of Horus)', 'Falcon', 'Double Crown of the Two Lands', 'Ankh'],
    cultCenter: 'Edfu',
    sections: [
      {
        heading: 'Born Twice',
        paragraphs: [
          'Horus was born twice — once to be avenged, once to reign. Conceived after his father’s death, carried in the womb of a goddess hiding among the papyrus marshes of Chemmis, he grew up on insects and scorpion-spells, a child raised in exile with one purpose burning in him: the throne of Egypt had been stolen, and he was its heir.',
        ],
      },
      {
        heading: 'The Eye That Was Broken and Made Whole',
        paragraphs: [
          'The war with Set was not one battle but eighty years of them. They fought as hippos in the drowned river, as griffins across the dunes; Set tore out Horus’s left eye and scattered its pieces across the sky, and Horus — in some tellings — unseated Set’s very manhood.',
          'It was Thoth who gathered the shattered eye and healed it, and the restored Eye of Horus, the Wadjet, became the most sacred sign in Egypt: the emblem of what is broken and made whole, offered by every priest to every god before every meal. Its fragments became the fractions of Egyptian mathematics — each piece of the eye a measured part of a whole grain.',
        ],
      },
      {
        heading: 'The Living King',
        paragraphs: [
          'Before the tribunal at Heliopolis the case was argued until even Ra sided with the boy. The throne was his by right and by trial. Crowned king of the living earth, Horus united the Two Lands — his falcon form spreading its wings over the pharaoh, one wing the north, one the south — and every ruler of Egypt from the first dynasty to the last Ptolemy bore his name as the living Horus, becoming at death an Osiris.',
          'This is why the pharaoh sat on the throne at all: not as a man who owned Egypt, but as the god who defended it. When the king died, the falcon merely changed perches — and Horus was proclaimed again in the body of the new heir, unbroken, century after century.',
        ],
      },
    ],
  },
  {
    id: 'anubis',
    name: 'Anubis',
    epithet: 'Guide of Souls & Lord of Embalming',
    span: 'Guardian of Tombs · Weigher of Hearts',
    glyph: '𓃣',
    plate: 'from-stone-300/60 via-amber-200/40 to-zinc-500/50',
    image: 'images/anubis.jpg',
    hieroglyph: '𓋿',
    symbols: ['Jackal Head', 'Imiut Fetish', 'Flail & Scales', 'Ankh'],
    cultCenter: 'Cynopolis',
    sections: [
      {
        heading: 'Origins',
        paragraphs: [
          'Anubis moves between worlds. Born of Osiris and Nephthys — the union that cost so much and gave so much — he was raised in secret by Isis in the marshes, a black jackal at her heel. Jackals haunt the desert edge where the dead are buried; the Egyptians saw the scavenger at the tombs and did the cleverest thing imaginable: they made him a god and asked for protection.',
        ],
      },
      {
        heading: 'The First Embalmer',
        paragraphs: [
          'When Osiris was murdered, it was Anubis who invented the answer to death. He laid the torn god on the embalming table, washed him, anointed him with natron and resin, wound him in bandages blessed with spells — and the first mummy rose whole to rule the Duat. Ever after, every embalmer in Egypt wore the jackal mask in ceremony and was called, for the length of the rite, by Anubis’s own name.',
        ],
      },
      {
        heading: 'The Weighing of the Heart',
        paragraphs: [
          'But his greatest work begins where the mourners stop. Anubis is the guide of souls: he takes the newly dead by the hand through the dark corridors of the Duat, past demons whose names alone could kill, to the Hall of Two Truths — the scales already waiting.',
          'There, before Osiris’s throne and forty-two assessing gods, Anubis performs the ceremony every Egyptian lived to deserve: the deceased’s heart, seat of all their deeds, is weighed on the great balance against a single feather — the Feather of Ma’at, truth itself. The monster Ammit crouches beneath the beam, hungry for the heavy hearts. Those the scale accepts walk on into the Field of Reeds. Those it does not — are never spoken of again. In all of Kemet, no god was painted more often at the bedside of the dying, because no other god promised to hold your hand on the way.',
        ],
      },
    ],
  },
  {
    id: 'thoth',
    name: 'Thoth',
    epithet: 'God of Wisdom, Writing, & Measurement',
    span: 'Scribe of the Ennead · Lord of Time',
    glyph: '𓁟',
    plate: 'from-slate-200/50 via-stone-100/40 to-cyan-300/50',
    image: 'images/thoth.jpg',
    hieroglyph: '𓅝',
    symbols: ['Ibis', 'Baboon', 'Reed Pen & Palette', 'Crescent Moon Disk'],
    cultCenter: 'Hermopolis (Khemenu)',
    sections: [
      {
        heading: 'The Pen of Creation',
        paragraphs: [
          'When Ra spoke the world, it was Thoth who wrote it down. Self-begotten at the dawn of time, the ibis-headed god is the scribe of the Ennead — inventor of hieroglyphs, lord of accounting, keeper of the ledger in which every deed of god and man is recorded. The Egyptians believed nothing existed until it was named and written; Thoth held the pen.',
        ],
      },
      {
        heading: 'Arbiter of the Gods',
        paragraphs: [
          'He stands at the edges of every great myth, indispensable and serene. It was Thoth who healed the torn Eye of Horus, gathering its fragments and restoring the Wadjet — which is why the healed eye became the currency of offerings and the emblem of every physician. It was Thoth who recorded the verdict when Horus and Set contended for eighty years before the tribunal. In the Hall of Two Truths he stands beside the scales, reading the verdict aloud as Anubis weighs the heart.',
        ],
      },
      {
        heading: 'Creator of the Calendar',
        paragraphs: [
          'The Greeks, who loved an orderly mind, identified him with their Hermes and called him Thrice-Greatest. To the Egyptians he was the moon god who measured time itself — inventor of the 365-day calendar that kept the Nile’s flood predictable — patron of every scribe who ever dipped a reed, and the author of the forbidden books of magic: it was said he had written forty-two scrolls containing the secrets of the gods, and that to read them was to become, dangerously, like him.',
        ],
      },
    ],
  },
  {
    id: 'ptah',
    name: 'Ptah',
    epithet: 'Craftsman God of Memphis & Creator by Word',
    span: 'The Opener · Lord of the Artisans',
    glyph: '𓊨',
    plate: 'from-stone-200/50 via-amber-100/40 to-slate-400/50',
    image: 'images/ptah.jpg',
    hieroglyph: '𓏞',
    symbols: ['Was–Djed–Ankh Scepter', 'Shu Feather & Skull Cap', 'Mummified Form', 'Open Hands from Wrappings'],
    cultCenter: 'Memphis (Ineb-Hedj)',
    sections: [
      {
        heading: 'Creation Through Heart and Tongue',
        paragraphs: [
          'At Memphis they told a different creation story than Heliopolis did — and it may be the most modern of them all. Ptah, the craftsman god, made nothing with his hands at first: seated on his throne, he conceived the world in his heart and brought it forth with his tongue — speaking the gods, the cities, the crafts, and all living things into existence, precisely as his high priest read aloud from the Shabaka Stone centuries later. Thought and word, not muscle: creation as pure intelligence.',
        ],
      },
      {
        heading: 'The God of Every Workshop',
        paragraphs: [
          'Form followed speech. Ptah was depicted as a tight, mummified figure gripping the combined was-djed-ankh scepter — power, stability, life — with hands emerging from his wrappings to touch the world he had already imagined. Behind his shoulders stood the craftsman’s calling: he was patron of every smith, sculptor, shipwright, and builder, the god who “fashioned the bodies of the gods” — which is why Memphis, his city, felt entitled to call itself the capital of the world’s first workshop.',
        ],
      },
      {
        heading: 'The Still Center of Memphis',
        paragraphs: [
          'As Egypt aged, Ptah’s portfolio grew along with his city. He absorbed the dwarf-god Ptah-Sokar-Osiris of the necropolis, merged with the funerary god of the Memphite tombs, and traveled as Ptah of Karnak, where Ramesses II gave him a temple within a temple. The Greeks, encountering a god who creates through divine craft, saw their own lame smith-god in him and called him Hephaestus — but Ptah was never broken, only complete: the still center around which Memphis, and Egypt’s memory of itself, was built.',
        ],
      },
    ],
  },
  {
    id: 'hathor',
    name: 'Hathor',
    epithet: 'Goddess of Love, Music, & Joy',
    span: 'The Golden One · Eye of Ra',
    glyph: '𓉡',
    plate: 'from-rose-200/50 via-amber-100/40 to-pink-300/50',
    image: 'images/hathor.jpg',
    hieroglyph: '𓁣',
    symbols: ['Cow Horns & Sun Disk', 'Sistrum', 'Menat Necklace', 'Malachite & Gold'],
    cultCenter: 'Dendera',
    sections: [
      {
        heading: 'The Golden One',
        paragraphs: [
          'Hathor is the golden one — the cow-goddess with a woman’s face, her horns cradling the sun disk. She is love, music, dance, drunkenness, the sweetness of the oil, the sparkle of malachite on a woman’s eyelid, the joy of the feast. Where other gods governed the harvest or the flood, Hathor governed delight, and the Egyptians considered delight a divine duty: festivals in her name emptied the temples into the streets with song, sistrum-rattles, and beer.',
        ],
      },
      {
        heading: 'The Eye of Ra',
        paragraphs: [
          'But love, in Kemet, has teeth. When Ra grew weary of humanity’s mockery, he sent his Eye — Hathor in her fury-form, Sekhmet the lioness — to punish mankind, and she slaughtered so enthusiastically that the gods themselves grew afraid. Ra flooded the fields with beer dyed blood-red; the goddess drank, grew drunk, and woke as the loving Hathor again, mankind saved by a trick worthy of the myths. Mother and lioness, hostess and huntress: the same face, the same gold.',
        ],
      },
      {
        heading: 'Lady of the West',
        paragraphs: [
          'She was the Lady of the West, who welcomes the dead into the mountain of the sunset with food and song — death, in her arms, becomes a homecoming. And she was the divine mother of every living pharaoh, nursing the king at her breast as she had nursed the sun itself. In the temples of Dendera her ceiling is a map of the sky, because joy, the Egyptians held, is not an escape from the cosmos. It is the cosmos working properly.',
        ],
      },
    ],
  },
];
