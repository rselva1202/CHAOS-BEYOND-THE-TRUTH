import type { Act } from './types';

/**
 * ACT II — THE MYTH OF OSIRIS.
 * The central myth of Egyptian civilization, told in nine movements:
 * golden-age kingship, the jealousy of Set, the chest, the search, the
 * scattering, the first mummy, the magic of Isis, the throne of the dead,
 * and the birth of the avenger. Cross-references point at existing deity,
 * era, and location profiles.
 */
export const ACT_TWO: Act = {
  id: 'myth-of-osiris',
  actNumber: 2,
  numeral: 'II',
  title: 'The Myth of Osiris',
  subtitle: 'Murder, devotion, and the conquest of death itself',
  introduction: [
    'Act II is the central myth of Egyptian civilization — the passion play every temple re-enacted and every funeral echoed. A good king is murdered by his brother; a widow searches the world and gathers him piece by piece; an embalmer invents eternity; and the dead king rises, not to reclaim his throne, but to judge every soul that will ever pass through the Duat.',
    'No single ancient text tells the whole story the way it appears below. What survives is a mosaic: allusions in the Pyramid Texts, fragments of Middle Kingdom drama, a New Kingdom hymn narrated by a stele of Amenhotep II’s time, and — centuries later — a long Greek retelling by Plutarch that shaped what the whole world thought it knew. Where the traditions differ, this telling says so. What never differs is the spine: murder, search, restoration, and a throne beyond death.',
  ],
  chronologicalPosition: 2,
  primaryDeities: [
    { name: 'Osiris', role: 'the murdered king', deityId: 'osiris' },
    { name: 'Isis', role: 'the devoted sorceress', deityId: 'isis' },
    { name: 'Set', role: 'the brother who killed — and who guards the sun', deityId: 'set' },
    { name: 'Anubis', role: 'the first embalmer', deityId: 'anubis' },
    { name: 'Nephthys', role: 'the mourning sister' },
  ],
  historicalReferences: [
    {
      name: 'Zep Tepi — the golden age',
      relevance: 'Osiris’s earthly reign is remembered as the model all later kingship imitated.',
      kind: 'mythological-tradition',
      eraId: 'zep-tepi',
    },
    {
      name: 'Middle Kingdom',
      relevance: 'When the Osiris cult democratized the afterlife and Abydos became the great pilgrimage.',
      kind: 'historical-context',
      eraId: 'middle-kingdom',
    },
    {
      name: 'New Kingdom',
      relevance: 'When the story was told at full length in temple hymns and funerary papyri.',
      kind: 'historical-context',
      eraId: 'new-kingdom',
    },
  ],
  keywords: ['osiris', 'isis', 'set', 'anubis', 'nephthys', 'mummification', 'heka', 'afterlife', 'abydos', 'duat'],
  relatedDeityIds: ['osiris', 'isis', 'set', 'anubis', 'horus', 'thoth'],
  relatedLocationIds: ['abydos', 'memphis', 'alexandria-philae'],
  relatedEraIds: ['zep-tepi', 'middle-kingdom', 'new-kingdom'],
  visual: {
    plate: 'from-emerald-200/60 via-stone-100/40 to-green-400/60',
    glyph: '𓊽',
    image: 'images/act-myth-of-osiris.jpg',
    hieroglyph: '𓁹𓋹𓊽',
  },
  sections: [
    {
      id: 'osiris-and-isis',
      title: 'Osiris & Isis',
      shortDescription: 'The golden-age king and the queen of magic who co-ruled the first civilized world.',
      narrative: [
        {
          heading: 'The First Good King',
          paragraphs: [
            'In the first age it was Osiris — not Ra — who walked the earth as its king. His reign was the golden age of Kemet, the standard against which every later pharaoh would be measured. The ancient sources agree on the broad strokes: he inherited the kingship of Geb, his father, and ruled the whole valley with a justice so complete that the texts call him “lord of Ma’at” — the embodiment of the very order described at the end of Act I.',
            'The Egyptians remembered the world before him as a rough and unfinished place. Osiris, the hymns say, found men living like animals in the marshes and taught them the work of civilization: to plow the silt of the Nile, to press grain into bread, to train the vine, to write law, to honor the gods with rite and rhythm. Agriculture was his signature gift — no accident in a country where the king’s first duty was the harvest, and where the dead king would one day be painted green, the color of sprouting fields.',
            'Fertility, order, kingship, the flood, the crop: in the Egyptian mind these were one single power wearing one crown. A hymn preserved on a New Kingdom stele praises him in exactly this register — the land grows rich when he is near, the fields laugh, the herds are fertile. Osiris was not a god of death who happened to have been a king; he was a god of life-giving order whom death would make universal.',
          ],
        },
        {
          heading: 'The Queen Beside Him',
          paragraphs: [
            'Isis was no consort waiting in the wings. Sister and wife — Egyptian royal theology openly joined the two roles — she was the mind beside the throne and, in time, the greatest magician the myths would ever contain. Her cult would eventually outlast Egypt’s own religion, spreading across the whole Mediterranean; but at this point in the story she is simply the queen: advisor, protector, co-author of the civilization her husband taught.',
            'Egypt remembered them as a single project. Where Osiris gave law, Isis gave the spells that protect; where he taught men to farm, she taught the grinding of grain and the healing of the sick. Later traditions delighted in details the older texts never mention — one late account has her discovering the healing power of magic over sickness itself — but the underlying portrait never changes. Order, taught by love: that was the reign of the two of them, and for the span of the golden age it worked.',
            'The story is careful to place this reign in the First Time — before evil, before strife, before the arrangement of the world was ever tested. What comes next is the test.',
          ],
        },
      ],
      figures: [
        { name: 'Osiris', role: 'king of the golden age, lord of Ma’at', deityId: 'osiris' },
        { name: 'Isis', role: 'queen, co-ruler, the great of magic', deityId: 'isis' },
      ],
      places: [
        {
          name: 'Abydos (Abdju)',
          significance: 'Osiris’s cult city, where his passion play was performed for millennia.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The mythic golden reign later kings claimed to restore.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['osiris', 'isis'],
      relatedLocationIds: ['abydos'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'sets-jealousy',
      title: 'Set’s Jealousy',
      shortDescription: 'The red brother of the desert — not a devil, but a necessary force turned against his own family.',
      narrative: [
        {
          heading: 'The Red One',
          paragraphs: [
            'Understand Set before you judge him. He was born on the third of the five days, in violence — the texts say he tore his way out of his mother’s womb. He was red, the color of the desert and of danger, in a world where black was the color of blessing. He ruled the wastelands beyond the valley: the storms, the foreign lands, the scorching wind. Where Osiris was the black fertile flood plain, Set was everything the flood never touched.',
            'But here is what the modern imagination gets wrong. Set was not the Egyptian devil. Egyptian religion, alone in the ancient world in this respect, never split its gods into a pure party of good and a pure party of evil. Set had a throne-room job in heaven. He stood at the prow of Ra’s solar barque each night and drove off the serpent Apophis with a spear — the only god strong enough to do it. Pharaohs of the Nineteenth Dynasty, Seti and Ramses among them, bore his name proudly and built him temples. He was the god of the desert, and the desert was Egypt’s neighbor forever; someone had to embody it, and in the Egyptian arrangement that embodiment was not evil but power — raw, dangerous, necessary.',
            'The Egyptian arrangement, in other words, was a family arrangement. The destructive and the protective sat at the same table, wore the same divine crowns, and answered to the same Ma’at that all the gods served — uneasily.',
          ],
        },
        {
          heading: 'The Envy of the Second Son',
          paragraphs: [
            'And so the myth does what Egyptian mythology does with all dangerous forces: it tells a story about what happens when a necessary power stops serving Ma’at and starts serving itself. Set envied his brother — the kingship, the acclaim, the completeness of him. Different accounts put the motive differently: jealousy of the crown, resentment of the second place, anger over a family humiliation, or — in the vague, laconic style of the oldest texts — simply the fact of it, without needing to explain why a storm resents a harvest. The surviving accounts differ, but they all converge on the same quiet, terrible sentence: Set began to plan.',
            'The plan, when it came, was unlike anything in the mythology — no battlefield, no duel, no open war between gods. Set, lord of storms, chose hospitality as his weapon. He took measurements — carefully, in secret — of the one person the trap must fit. And then he commissioned a craftsman to build the most beautiful box Egypt had ever seen.',
          ],
        },
      ],
      figures: [
        { name: 'Set', role: 'the red god — desert, storm, and necessary violence', deityId: 'set' },
        { name: 'Apophis', role: 'the chaos serpent Set is fated to fight every night' },
        { name: 'Osiris', role: 'the brother whose crown Set coveted', deityId: 'osiris' },
      ],
      places: [
        {
          name: 'The desert beyond the valley',
          significance: 'Set’s natural domain — the red land that never floods.',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The Nineteenth Dynasty made Set a royal patron — proof that Egypt never demonized him the way later ages would.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['set', 'osiris'],
      relatedLocationIds: [],
      relatedEraIds: ['new-kingdom'],
    },
    {
      id: 'the-banquet-and-the-chest',
      title: 'The Banquet & the Chest',
      shortDescription: 'A feast, a magnificent box, a contest — and measurements taken in secret.',
      narrative: [
        {
          heading: 'The Game of the Box',
          paragraphs: [
            'The fullest surviving account — a long Greek retelling written down over a thousand years after the fact, by Plutarch — dresses the scene in courtly detail. Set held a great feast, with seventy-two conspirators plus a queen of another land already sworn to the plan. The chest itself was the evening’s centerpiece: wrought of the finest materials, overlaid with gold, beautiful enough that every guest admired it.',
            'Then Set stood and made it a game. “The box,” he announced, “I will give to the one it fits.” One by one the guests lay down in it — each chosen, of course, because each was the wrong size. It was, all of them knew now, a coffin without being a coffin. And when at last Osiris himself laughed, climbed in, and lay down — the exact length of it, to the finger — the lid was slammed shut, nailed, and sealed with molten lead. The game had never been a game.',
            'Some traditions, closer to Egypt and older than Plutarch, tell it with no feast at all: the texts simply record that Set felled his brother at a place called Nedyt, by the riverbank — drowned or struck down, the verb is disputed. The surviving accounts differ on the scene, but not on the outcome. The Egyptian material rarely dwells on the how; it cares about the what, and the what was simple. The good king was dead, and the men who killed him carried the box to the river and let the Nile take it.',
          ],
        },
        {
          heading: 'Down the River',
          paragraphs: [
            'The current carried the king out through the papyrus marshes, past the temples, through the Delta, and finally to the sea. The Nile, the river of life, became the river of the body’s exile. In a country where every king’s legitimacy flowed from the flood, the image was unbearable and unforgettable: the giver of the harvest, set adrift on the water he had blessed.',
            'Set divided his brother’s regalia among the conspirators and sat upon the throne. The golden age was over in a single evening — an afternoon’s betrayal dressed as a party. What Set could not know was that the plan had already failed. The box was never found by his men again; the river had other ideas. The chest drifted north and out to sea, to a city on the far coast of the Great Green — where, at Byblos, a young tree grew up around the box and swallowed the king of Egypt inside its own trunk.',
          ],
        },
      ],
      figures: [
        { name: 'Set', role: 'host of the feast, architect of the trap', deityId: 'set' },
        { name: 'Osiris', role: 'the king who fit the box exactly', deityId: 'osiris' },
        { name: 'The seventy-two conspirators', role: 'the court that sealed its own king' },
      ],
      places: [
        {
          name: 'Nedyt',
          significance: 'The riverside place-name the oldest Egyptian texts give for Osiris’s death.',
        },
        {
          name: 'Byblos',
          significance: 'The Syrian coast where the chest washed ashore and a cedar grew around it.',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The fall of the golden age in mythic time.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['set', 'osiris'],
      relatedLocationIds: [],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'isiss-search',
      title: 'Isis’s Search',
      shortDescription: 'A widow cuts her hair, serves in a foreign court, and carries a king home from the edge of the world.',
      narrative: [
        {
          heading: 'Mourning as a Task',
          paragraphs: [
            'Isis was not present at the feast — or if she was, she survived it, and either way the next scenes belong entirely to her. When word came, she cut her hair and put on mourning; the texts give her the first cries of grief, and Egyptian funerary liturgy would never let those cries stop: the two women’s voices wailing at every Egyptian funeral for the next three thousand years are Isis and Nephthys, still at work.',
            'For the widow’s grief, the myth substitutes something harder: a mission. Isis set out to find the body. She wandered Egypt and asked at every landing; she searched with such focus that the hymns later praised her as the one “who sought her brother without rest until she found him,” wandering the world with her sister Nephthys — Set’s own wife, whose loyalty in this scene is one of the myth’s quiet, complicated facts. A kite’s cry over the river was the two goddesses’ mourning shape, and every Egyptian who heard a kite above the fields heard the search still going on.',
          ],
        },
        {
          heading: 'The Pillar of Byblos',
          paragraphs: [
            'The search led out of Egypt entirely — one of the oldest parts of the story, told in Egypt long before Plutarch gave it its fullest form. The chest had crossed the sea to Byblos, where the sea itself had set it down gently at the base of a young tamarisk or heather-tree. The tree had grown fast and huge around the chest, hiding it inside its trunk; and the king of the land, admiring the tree’s height and scent, had cut it down and raised it as a pillar in his new palace. So the king of Egypt stood embedded in a pillar, in a foreign court, holding up a foreign roof — a fact no one in that court knew.',
            'Isis arrived in Byblos as a stranger — later sources describe her sitting, silent and veiled, by a well until the queen’s handmaidens spoke to her, then entering the palace as nursemaid to the royal child. Only at night, in the nursery, did the myth let her true nature show: the queen found her nursing the child in the fire, and shrieked — canceling, one tradition says, the immortality Isis had been quietly granting the boy. Then Isis revealed herself, asked for the pillar, and cut it open. The chest was inside. She pressed her face to her husband’s body and cried out — so loudly, one tradition says, that the king’s younger son died on the spot from the sound. She carried the chest out of Byblos and took ship for Egypt, hiding the box in the papyrus marshes of the Delta, at a place the texts call Chemmis.',
          ],
        },
        {
          heading: 'Found Again',
          paragraphs: [
            'And here the oldest versions of the myth are bleaker than the comfortable retellings. Set — hunting by moonlight, one tradition says, or simply riding out to the marshes — found the chest. The hiding place, chosen to keep the body from any tomb, any shrine, any honor, failed. Set opened the box, dragged out his brother’s corpse — and then did the thing that made the myth eternal: he tore the body apart and scattered the pieces across the whole of Egypt.',
            'Some modern retellings soften this into panic or restraint. The Egyptian logic admits no softening: Osiris had been dead and was now worse than dead — dispersed, unnamed, ungatherable, an insult aimed at Ma’at herself. A body in a tomb could be honored. A body in seventy pieces from the Delta to Elephantine was a king reduced to geography. The first murder had been Set’s. The scattering was his real crime.',
          ],
        },
      ],
      figures: [
        { name: 'Isis', role: 'the widow who searched the world', deityId: 'isis' },
        { name: 'Nephthys', role: 'Set’s wife, and her sister’s mourner' },
        { name: 'Set', role: 'who found the body in the marshes', deityId: 'set' },
      ],
      places: [
        {
          name: 'Byblos',
          significance: 'The Syrian coast where the chest was swallowed by a tree and became a palace pillar.',
        },
        {
          name: 'Chemmis',
          significance: 'The papyrus marsh where Isis hid the chest — and where Set found it.',
        },
        {
          name: 'Philae',
          significance: 'Isis’s great island temple, one of the cult centers her search founded.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The mythic search that bridges the murdered king to the scattered one.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['isis', 'set', 'osiris'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'the-dismemberment',
      title: 'The Dismemberment',
      shortDescription: 'Fourteen pieces — or sixteen, or eighteen, or forty-two. The traditions disagree, and the disagreement is the point.',
      narrative: [
        {
          heading: 'A Kingdom Cut Into a Map',
          paragraphs: [
            'Set tore the body of Osiris into pieces and scattered them across Egypt. This much every tradition agrees on. The rest is a crowd of competing numbers, and the disagreements are ancient — they are not errors in transmission but genuine theological variants, each with its own arithmetic and its own meaning.',
            'The number most often cited, and the one that became standard in the later cult, is fourteen — one piece for each province, or nome, of Upper Egypt; Plutarch gives it, and the Osiris shrines of Egypt were counted in fourteens ever after. Other Egyptian sources give other totals: some spell out sixteen pieces, some eighteen, some — in traditions tied to the forty-two assessors of the judgment court, or to the forty-two nomes of the whole country — forty-two or more. The surviving accounts differ, and the Egyptians did not reconcile them, because each number made a different kind of local sense. What every temple agreed on was the claim: a piece fell here.',
            'And so the geography of the murder became the geography of holiness. Every nome that received a piece of Osiris raised a shrine or claimed a tomb: Philae in the south had the thigh, according to its own priests; Bigga island had other relics; Abydos, above all, claimed the head — or was it the whole body? The temple of Abydos made the strongest claim of all and reaped the pilgrim traffic of a thousand years. The holy map of Egypt and the murder map of Egypt were the same map, drawn twice.',
          ],
        },
        {
          heading: 'How Old the Story Is — and How Much It Changed',
          paragraphs: [
            'It matters how deep this story goes. The Pyramid Texts — the oldest religious writings in Egypt, carved inside royal pyramids of the Old Kingdom more than two thousand years before Plutarch — already take the whole myth for granted. They speak of Osiris who was drowned, thrown down at Nedyt, torn apart by his brother; they speak of Isis and Nephthys gathering him and of Horus avenging him. The core was ancient and fixed. What changed, century by century, was the telling.',
            'The Middle Kingdom added drama — a.stela and papyrus fragments preserve what looks like a staged passion play performed at Abydos, with the god’s death, mourning, and resurrection acted out by priests in the annual mystery. The New Kingdom gave the story its long, devotional voice in hymn and stele. And the Greco-Roman world, hungry for Egyptian wisdom, retold the whole thing in its own image: Plutarch’s Greek version dressed the gods in philosophical allegory, numbering the conspirators, psychologizing Set, and giving later Europe nearly everything it thought it knew about Egypt — much of it true to the spirit, some of it Greek invention wearing an Egyptian mask.',
            'Modern historians sort these layers carefully, and this website tries to do the same: the oldest Egyptian texts give the spine of the story; the later Egyptian cult gives its local geography; the Greco-Roman retellings give its color and its spread. When this page says “one tradition says,” it is honoring that layering — the Egyptians themselves would have understood. Myths in Kemet were living things, and a god with many stories was a god with many temples.',
          ],
        },
      ],
      figures: [
        { name: 'Set', role: 'who scattered the body across Egypt', deityId: 'set' },
        { name: 'Osiris', role: 'the fourteen-fold king — among other countings', deityId: 'osiris' },
        { name: 'Isis', role: 'who began gathering at once', deityId: 'isis' },
        { name: 'Nephthys', role: 'who gathered at her sister’s side' },
      ],
      places: [
        {
          name: 'The nomes of Egypt',
          significance: 'Each province kept the shrine of the piece that fell there — the murder map as holy map.',
        },
        {
          name: 'Abydos (Abdju)',
          significance: 'The strongest claim: the head — or, its priests said, everything that mattered.',
          locationId: 'abydos',
        },
        {
          name: 'Philae',
          significance: 'Whose priests claimed the thigh, and built accordingly.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Old Kingdom',
          relevance: 'The Pyramid Texts already assume the murder and scattering — the story’s oldest layer.',
          kind: 'historical-context',
          eraId: 'old-kingdom',
        },
        {
          name: 'Middle Kingdom',
          relevance: 'The Abydos passion play and the flowering of the Osiris mysteries.',
          kind: 'historical-context',
          eraId: 'middle-kingdom',
        },
      ],
      relatedDeityIds: ['set', 'osiris', 'isis'],
      relatedLocationIds: ['abydos', 'alexandria-philae'],
      relatedEraIds: ['old-kingdom', 'middle-kingdom'],
    },
    {
      id: 'anubis-and-mummification',
      title: 'Anubis & Mummification',
      shortDescription: 'The jackal god invents the technology of eternity on the first embalming table.',
      narrative: [
        {
          heading: 'The First Mummy',
          paragraphs: [
            'When the pieces were gathered — Isis and Nephthys flying as kites over the whole valley, crying out each fragment’s hiding place, collecting what Set had scattered — the gathered body was not a body anymore. It was a problem. Flesh failed; a scattered god reassembled was still mortal matter, subject to the same decay that had claimed every king before him. Death had to be answered with a technology.',
            'That technology was invented, the myth says, for this one body. Anubis — the jackal-headed god born of Osiris and Nephthys, raised in secret by Isis — laid the torn god on the embalming table and performed the first embalming in history. He washed the body in the waters of the Nile. He dried it with natron, the desert salt that eats corruption. He anointed it with oils and resin, restored what was damaged, fashioned what was missing, and wound the whole in long strips of linen — layer upon layer, tucking amulets between the folds, reciting the spells that give each bandage its job. When he finished, decay had lost its purchase. What lay on the table was no longer a corpse. It was the first mummy: a body made permanent, a person made portable through the dark.',
          ],
        },
        {
          heading: 'The Rite Becomes a Civilization’s Promise',
          paragraphs: [
            'Ever after, every embalmer in Egypt wore the jackal mask in ceremony and was called, for the length of the rite, by Anubis’s own name — the priest did not merely imitate the god, he stood in for him. The seventy days of embalming were a liturgy, not a trade: the slow, expensive re-enactment of the moment death was first defeated, performed once more for one more soul.',
            'And Anubis took a second office that no myth ever separates from the first: guide of souls. The god who had carried his father through the embalming hall now takes every dead Egyptian by the hand, leads them through the tomb’s false doors and the Duat’s twelve hours, past demons whose names alone can kill, and delivers them to the scales — because the jackal knows the way, and the jackal can be trusted. Mummification was never about preserving flesh for its own sake; it was about giving the soul a home to return to — the same promise Anubis first kept for his father, and then kept for everyone.',
            'One honest note on the history: the myth gives Anubis the whole work, but the oldest texts are not unanimous about embalmer or even father. In some traditions Anubis is Osiris’s son; in others, a god of far older, pre-Osirian pedigree absorbed into the story as it grew. The Egyptians kept both. The jackal came first; the son came to matter more.',
          ],
        },
      ],
      figures: [
        { name: 'Anubis', role: 'the first embalmer and guide of souls', deityId: 'anubis' },
        { name: 'Osiris', role: 'the first mummy', deityId: 'osiris' },
        { name: 'Isis', role: 'who gathered the pieces for the table', deityId: 'isis' },
        { name: 'Nephthys', role: 'who gathered at her sister’s side' },
      ],
      places: [
        {
          name: 'Abydos (Abdju)',
          significance: 'Site of the Osireion, the symbolic tomb re-enacting the first embalming.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'Middle Kingdom',
          relevance: 'When embalming and judgment became every Egyptian’s hope, not just kings’.',
          kind: 'historical-context',
          eraId: 'middle-kingdom',
        },
      ],
      relatedDeityIds: ['anubis', 'osiris', 'isis'],
      relatedLocationIds: ['abydos'],
      relatedEraIds: ['middle-kingdom'],
    },
    {
      id: 'isiss-magic',
      title: 'Isis’s Magic',
      shortDescription: 'Heka — the force the gods themselves use — and the most audacious spell in the entire mythology.',
      narrative: [
        {
          heading: 'What Heka Is',
          paragraphs: [
            'The Egyptians had a word for the force Isis was about to use, and it was not “magic” in the fairy-tale sense. Heka was the raw power of creation itself — the energy Atum had spent when he spoke the world, the power the sun uses to cross the sky, the force the gods themselves rely on. Heka had its own god, worshipped since the Old Kingdom; every temple text treats it as one of the fundamental substances of the universe, older than the gods who wield it. Magic, in Kemet, was not opposed to religion. It was religion’s operating system.',
            'Into this world Isis was born with an aptitude for heka that outgrew every teacher. Later texts tell of her masterpiece even before her widowhood: she had wheedled the sun god’s true, secret name out of him — the one knowledge that gives power over its owner — by fashioning a serpent to poison him, then offering the cure at a price. It is a shocking story, told with relish in a New Kingdom papyrus: the queen of magic out-bargaining the king of the gods. It establishes the rule that governs everything she does next — in the Egyptian arrangement, knowledge is leverage, and Isis knows more than anyone.',
          ],
        },
        {
          heading: 'The Wings Over the Body',
          paragraphs: [
            'What Isis did for Osiris, the funerary texts recite at every burial. She gathered the scattered pieces; she poured out her grief in the laments still recited three thousand years later; and then, with the body restored and bound by Anubis, she performed the spell no god before her had dared. She took the form of a kite — a small hawk of the Nile marshes — hovered over her husband’s body, and by fanning her wings and calling the secret words, drew breath back into him.',
            'Not all the way back. This is the myth’s most carefully drawn line: Osiris did not rise to reign again. He woke briefly — enough to speak, enough to father — in the dark of the embalming house or (in the account most often retold) inside the hidden chest itself. The resurrection Isis worked was real, but temporary, and its purpose was precise. From that brief, impossible return she conceived her son.',
            'The texts do not blush at this. The child Horus was conceived from the revivified Osiris — in one late tradition, from a hand-made substitute Isis fashioned for what Set had destroyed — and the theology is exact: life came from a dead god, by the power of love and heka, before the god descended to rule the dead. The two facts are not in tension. They are the same fact: Isis’s magic had bridged the one border no living thing could cross, and she had come back pregnant with the bridge’s evidence.',
          ],
        },
      ],
      figures: [
        { name: 'Isis', role: 'the great of magic — Heka’s greatest wielder', deityId: 'isis' },
        { name: 'Osiris', role: 'briefly revived, and the father of Horus', deityId: 'osiris' },
        { name: 'Heka', role: 'the cosmic force of creation, personified' },
        { name: 'Ra', role: 'whose secret name Isis once won', deityId: 'ra' },
      ],
      places: [
        {
          name: 'Chemmis',
          significance: 'The papyrus marsh where the conception of Horus took place.',
        },
        {
          name: 'Philae',
          significance: 'Where Isis’s magical power was worshipped into the Christian era.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The story of Isis and Ra’s secret name is told at full length in a New Kingdom papyrus.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['isis', 'osiris', 'horus', 'ra'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['new-kingdom'],
    },
    {
      id: 'lord-of-the-dead',
      title: 'Osiris Becomes Lord of the Dead',
      shortDescription: 'Risen, green-skinned, eternal — the murdered king takes the throne where no living thing rules.',
      narrative: [
        {
          heading: 'Why He Could Not Come Back',
          paragraphs: [
            'The obvious ending — the ending any Greek audience would demand — is that Osiris rises, defeats Set, and takes back his throne. The Egyptian story refuses it, and the refusal is deliberate. A dead god cannot simply resume living kingship: death has changed him, and the change is not reversible. In some traditions the gods themselves judge the matter and set him below, in others he simply cannot remain — the body that Anubis preserved is no longer a body for the living world. What Egypt did with this irreversibility is the most distinctive move in its whole theology: it did not treat the dead king as ended, but promoted him.',
            'Osiris rises — wrapped, dark, transformed — and takes a different throne. He sits green-skinned (the color of the sprouting fields he once governed) and eternal in the Duat, arms crossed over his chest holding crook and flail — the full royal regalia — and rules the world of the dead as its king. He has not lost his kingship; he has changed jurisdictions. The king who was murdered becomes the king of everyone murder, age, or accident will ever reach — which is to say, everyone.',
          ],
        },
        {
          heading: 'The First Graduate of the System',
          paragraphs: [
            'Every soul that dies must pass before his tribunal in the Hall of Two Truths. The heart — seat of every deed — is weighed by Anubis against the feather of Ma’at; Thoth records the verdict; the monster Ammit waits beneath the scales; and forty-two assessors listen while the dead deny every sin. Those the scale accepts walk into the Field of Reeds — an Egypt of perfect harvests where the justified dead farm eternity under their god-king. Osiris is both the judge and the promise: the god who was murdered and made whole is proof that the system works, because he is its first graduate.',
            'And the connection ran deeper than metaphor. The Egyptian dead did not merely hope to be near Osiris; they hoped to become him. From the Middle Kingdom onward, coffins and tombs routinely name the deceased “the Osiris N” — the dead farmer, scribe, or queen is addressed by the god’s own name, identified with him in death as the king had been identified with Horus in life. This is why Osiris could not simply return to earthly kingship and is also why every Egyptian could reach eternal life: his death was not a tragedy to be undone but a door the whole species now walks through.',
            'Later judgment traditions elaborate the court endlessly — spells to still the heart lest it testify against its owner, negative confessions rehearsed by the living, scales painted on coffins so the verdict travels with you — but the spine never changes: everyone stands before the murdered king, and everyone is measured against a feather. Act II could end here, on the throne of the dead and the map of a promise. It ends instead with a second birth, hidden in the marshes — because the Egyptian story never lets the wronged king rest without an heir.',
          ],
        },
      ],
      figures: [
        { name: 'Osiris', role: 'judge of the dead, lord of the Duat', deityId: 'osiris' },
        { name: 'Anubis', role: 'weigher of hearts', deityId: 'anubis' },
        { name: 'Thoth', role: 'recorder of the verdict', deityId: 'thoth' },
        { name: 'Ma’at', role: 'the feather against which hearts are weighed' },
        { name: 'Ammit', role: 'the devourer waiting beneath the scales' },
      ],
      places: [
        {
          name: 'Abydos (Abdju)',
          significance: 'Pilgrimage center where the living bought their share of the resurrection.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'Middle Kingdom',
          relevance: 'The democratization of Osiris’s judgment to every soul — “the Osiris So-and-so.”',
          kind: 'historical-context',
          eraId: 'middle-kingdom',
        },
        {
          name: 'New Kingdom',
          relevance: 'The Books of the Dead paint the full judgment scene on papyri for the living.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
      ],
      relatedDeityIds: ['osiris', 'anubis', 'thoth'],
      relatedLocationIds: ['abydos'],
      relatedEraIds: ['middle-kingdom', 'new-kingdom'],
    },
    {
      id: 'horuss-birth-and-hiding',
      title: 'Horus’s Birth & Hiding',
      shortDescription: 'A child conceived in the marshes, raised in the reeds, and aimed at a throne.',
      narrative: [
        {
          heading: 'Born in the Bulrushes',
          paragraphs: [
            'The child Isis carried was Horus — the falcon-office inherited by the son of the murdered king. He was born in the papyrus marshes of Chemmis, in the Delta, far from any court Set controlled; the texts give him a birth-cry that fills the marsh — a child born in the bulrushes, and the road of the gods made bright. The motif is one of the oldest echoes in the whole of Egyptian literature — a hidden royal child in the reeds — and cultures far from Egypt would spend millennia retelling its shape.',
            'The marshes were chosen as a fortress. Papyrus stands taller than a man and thicker than an army; the tracks through them drown behind the traveler. Isis had hidden her husband’s chest there once, and hidden it in vain — she would not make the same mistake twice with a living child. Every danger in the marsh was given a mythic edge: scorpions whose stings the infant’s cries could kill, snakes in the water, sickness in the night. One famous stele preserves a spell in which Isis screams that her son has been stung and the whole world stops — the barque of the sun halts mid-passage — until the poison leaves the child. The marsh idyll, the story insists, was a siege.',
          ],
        },
        {
          heading: 'Raised for Vengeance',
          paragraphs: [
            'Isis raised him alone, and raised him for one purpose. The hymns picture her teaching the child to walk and already telling him whose throne he waits for; the laments speak of her watching the marshes while Set’s agents — scorpions, snakes, informers — search for the boy who is the one living proof that the dead king left an heir. In some traditions other gods help hold the line: Thoth counsels her; in one account the local marsh-goddess herself nurses the child. But the weight of the childhood is Isis’s — the magician with the most dangerous knowledge in Egypt, spending years of silence, disguise, and spell-work to keep one small falcon alive.',
            'And Horus grew. The texts mark the growth carefully — eyes strong enough to blind a foe, a body ready for the desert — because the entire logic of the next act depends on it: a child hidden in the reeds became a falcon with a claim to the throne of all Egypt. Set held the kingship by murder; Horus held it by birth and by blood. When at last the young god stood up out of the marshes and walked into the daylight to face his uncle, the golden age was a lifetime gone, the murdered king was decades deep in his new throne below — and the trial that would decide the rulership of the world was ready to begin.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'the son of Isis and Osiris — the avenger, the rightful heir', deityId: 'horus' },
        { name: 'Isis', role: 'the hidden mother, guardian of the heir', deityId: 'isis' },
        { name: 'Set', role: 'the usurper searching the marshes for the child', deityId: 'set' },
        { name: 'Thoth', role: 'counselor in the marsh years', deityId: 'thoth' },
      ],
      places: [
        {
          name: 'Chemmis',
          significance: 'The papyrus fortress where Horus was born and hidden.',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The childhood of the heir — the hinge between the murdered king and the avenger.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['horus', 'isis', 'set', 'thoth'],
      relatedLocationIds: [],
      relatedEraIds: ['zep-tepi'],
    },
  ],
};
