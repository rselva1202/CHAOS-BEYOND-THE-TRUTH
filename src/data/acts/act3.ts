import type { Act } from './types';

/**
 * ACT III — HORUS VS SET.
 * The childhood in the marshes, the claim, the Contendings, the broken and
 * healed Eye, the divine tribunal, and the verdict that made every pharaoh
 * a living Horus — with Set honored, not destroyed. Cross-references point
 * at existing deity, era, and location profiles.
 */
export const ACT_THREE: Act = {
  id: 'horus-vs-set',
  actNumber: 3,
  numeral: 'III',
  title: 'Horus vs Set',
  subtitle: 'The contendings for the throne of the Two Lands',
  introduction: [
    'Act III is the courtroom drama at the heart of Egyptian kingship. A child raised in hiding comes of age and demands his murdered father’s throne — from the strongest god in the pantheon. What follows is not a single battle but a long, exasperating, sometimes ridiculous legal war: contests, transformations, tricks, torn-out eyes, and eighty years of argument before a tribunal of gods who cannot make up their minds. Its verdict — order triumphant, chaos honored but subordinated — became the constitution of every pharaonic reign that followed.',
    'The fullest surviving telling is a single New Kingdom papyrus often called The Contendings of Horus and Seth: a legal-comic text in which the gods bicker, sulk, and break for lunch while a kingdom waits. Older fragments of the same struggle reach back to the Pyramid Texts, and every temple in Egypt retold the parts it needed. Where the traditions differ, this act says so. What never differs is the outcome: the falcon takes the throne, the storm gets a job, and Egypt learns what a king is.',
  ],
  chronologicalPosition: 3,
  primaryDeities: [
    { name: 'Horus', role: 'the avenger and claimant', deityId: 'horus' },
    { name: 'Set', role: 'the incumbent — strong, necessary, and on trial', deityId: 'set' },
    { name: 'Isis', role: 'the mother who bends the tribunal', deityId: 'isis' },
    { name: 'Thoth', role: 'the healer of the Eye and scribe of the court', deityId: 'thoth' },
    { name: 'Osiris', role: 'the decisive testimony from the dead', deityId: 'osiris' },
  ],
  historicalReferences: [
    {
      name: 'Zep Tepi — the divine succession',
      relevance: 'The mythic transfer of rule from Osiris to Horus models every human succession.',
      kind: 'mythological-tradition',
      eraId: 'zep-tepi',
    },
    {
      name: 'Early Dynastic',
      relevance: 'The first human kings bore Horus as their living name — the myth’s verdict made history.',
      kind: 'historical-context',
      eraId: 'early-dynastic',
    },
    {
      name: 'New Kingdom',
      relevance: 'When The Contendings was written down in full — the long literary version of the trial.',
      kind: 'historical-context',
      eraId: 'new-kingdom',
    },
  ],
  keywords: ['horus', 'set', 'contendings', 'eye of horus', 'wedjat', 'udjat', 'kingship', 'thoth', 'tribunal', 'ennead'],
  relatedDeityIds: ['horus', 'set', 'isis', 'thoth', 'osiris'],
  relatedLocationIds: ['heliopolis', 'abydos', 'giza-saqqara'],
  relatedEraIds: ['zep-tepi', 'early-dynastic', 'new-kingdom'],
  visual: {
    plate: 'from-amber-200/60 via-sky-100/40 to-red-300/60',
    glyph: '𓅃',
    image: 'images/act-horus-vs-set.jpg',
    hieroglyph: '𓅗𓅱',
  },
  sections: [
    {
      id: 'horuss-childhood',
      title: "Horus's Childhood",
      shortDescription: 'A hidden child in the papyrus marshes, raised on scorpion-spells and one purpose.',
      narrative: [
        {
          heading: 'The Marshes of Chemmis',
          paragraphs: [
            'Horus was born twice — once to be avenged, once to reign. Conceived after his father’s death, in the one brief return Isis won from the dead, he was carried by a goddess hiding among the papyrus marshes of Chemmis, deep in the Delta where Set’s agents did not think to search. There, among the reeds whose tracks drowned behind the traveler and the crocodiles Isis charmed into stillness, the boy grew up.',
            'Which Horus is this? It is worth saying plainly: this is Horus the younger — Harseisis, Horus son of Isis and Osiris — and not Horus the Elder, the ancient sky-falcon of Act I whose eyes were the sun and moon. Egyptian religion held both figures under one name for centuries, and only gradually, in the latest temples, fused them into one biography. The child in the reeds belongs to the murder story; the falcon of the sky is far older. When this act says Horus, it means the son — the avenger — wearing the oldest office in the pantheon.',
          ],
        },
        {
          heading: 'Raised on Dangers and Spells',
          paragraphs: [
            'His childhood was a catalog of near-fatalities, and the Egyptians catalogued them lovingly. Scorpions stung him and Isis froze the poison mid-vein; one famous healing stele preserves the scene in full — Isis screaming through the marshes, the whole world stopped, even the barque of the sun halted in the sky, until the poison left the child. Snakes found him and were turned back by spells. Sickness came in the night and was answered with incantation. Every danger of the Delta — the scorpion, the serpent, the crocodile, the fever — became, in the myth, one of Set’s scouts.',
            'The boy grew, and the texts mark his growth like a military report: shoulders broadening, eyes strengthening, the falcon-body filling out toward the size of the fight ahead. His education had one curriculum. Isis told him whose son he was, whose throne waited empty, whose body lay scattered and bound. The child’s entire relationship to his father’s legacy was inherited purpose: not grief — he had never met the man — but succession, the debt of the living heir to the murdered king.',
            'Egyptian art loved this episode and painted it on the temples of late Egypt: Isis nursing the hidden child among the lotuses, a falcon chick in the reeds. Every Egyptian mother could read it, and every reader of the world’s stories since has recognized its shape — the future is sometimes raised in hiding, quietly, by women, in the reeds.',
          ],
        },
        {
          heading: 'The Claim Forms',
          paragraphs: [
            'At last the heir was grown, and the hiding was over. Horus rose out of the marshes and did the one thing the whole childhood had aimed at: he came forward and claimed the kingship of Egypt — loudly, formally, before the assembled gods. It was a breathtaking act. He was young, untried, and propertyless, challenging the strongest god in heaven for the throne of the world; and his only asset was the truth of his birth. It would prove enough. But proving it would take the rest of this act.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'the hidden child, son of Isis and Osiris', deityId: 'horus' },
        { name: 'Isis', role: 'mother and bodyguard in the reeds', deityId: 'isis' },
        { name: 'Horus the Elder', role: 'the older sky-falcon — a different figure under the same name' },
      ],
      places: [
        {
          name: 'Chemmis',
          significance: 'The papyrus marsh stronghold of Horus’s childhood.',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The mythic childhood between the murder and the claim.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['horus', 'isis'],
      relatedLocationIds: [],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'claim-to-the-throne',
      title: 'Claim to the Throne',
      shortDescription: 'The grown son stands before the tribunal and demands his inheritance.',
      narrative: [
        {
          heading: 'The Case for the Son',
          paragraphs: [
            'Behind the claim stood the whole weight of Act II. Osiris — the good king, the lord of Ma’at — had been murdered at a feast by his brother Set, who had seized the throne and held it since. Set’s position was simple and not contemptible: kingship in this world belongs to whoever can hold it, and he held it. He was, after all, the strongest of the gods, and strength had always been his title.',
            'Horus’s position was different in kind: kingship belongs by blood and by right — I am the son of the lawful king, and the throne is my inheritance. In one sense the case was open and shut; a child inherited his father’s field, why not a son the Two Lands? But inheritance had never yet been tested against force at the top of the cosmos, and the gods discovered, to their dismay, that their own law had no settled answer. So they did what institutions do: they formed a tribunal.',
          ],
        },
        {
          heading: 'The Court Divides',
          paragraphs: [
            'The Ennead convened — the company of nine, with the whole pantheon attending — under the presidency of Ra himself, aged now, irritable, and from the start oddly cold toward the boy. The surviving account relishes the politics. Some gods favored Horus openly. Some counseled delay. The moon god quarreled with the sun and was struck from the sky for it — one tradition explains a dark moon that way. Set, confident, proposed resolving the matter by combat, as strength had always resolved things; the court, uneasy, kept insisting on deliberation instead, and kept failing to reach a verdict.',
            'The stalemate was itself the story. Here was the whole divine order, unable to answer its most basic constitutional question — who rules? — because both answers were part of its own nature: Horus the heir, Set the strong. Into the deadlock stepped the one goddess who never accepted a deadlock as final. Isis began to work the court from the margins — transforming, whispering, appearing as an old woman, as a beautiful stranger, as the argument itself — and the trial that should have lasted an afternoon lasted, the texts say, the better part of a lifetime.',
            'The claim mattered beyond the myth. In it, Egypt encoded its constitutional theory: kingship belongs by inheritance AND by vindication — blood gives the claim, trial proves it. Every succession dispute for the next three thousand years, whether between dynasties or within a harem conspiracy, ran on the rails this story laid.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'claimant to the Two Lands', deityId: 'horus' },
        { name: 'Set', role: 'the incumbent, strong and defiant', deityId: 'set' },
        { name: 'Isis', role: 'advocate who out-argues the court', deityId: 'isis' },
        { name: 'Ra', role: 'the doubtful, aging presiding judge', deityId: 'ra' },
        { name: 'Osiris', role: 'the murdered king whose throne is in dispute', deityId: 'osiris' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Seat of the Ennead tribunal where the case was argued.',
          locationId: 'heliopolis',
        },
      ],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The divine trial that authorizes all later succession.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['horus', 'set', 'isis', 'ra', 'osiris'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'the-contendings',
      title: 'The Contendings',
      shortDescription: 'Stone ships, hippopotami, disguises and deadlocks — the longest trial in mythology.',
      narrative: [
        {
          heading: 'Eighty Years of Argument',
          paragraphs: [
            'The tribunal could not decide, and the case dragged on. The great papyrus that preserves the story at full length — The Contendings of Horus and Seth, written in the New Kingdom, likely for amusement as much as edification — gives the dispute’s duration as eighty years: a literary figure, a way of saying the trial outlasted everyone’s patience, not a chronicle of a historical war. Egyptian scribes loved this number’s absurdity; the gods themselves, in the text, are exhausted by it.',
            'What filled the years was everything. The tribunal tried deliberation and got nowhere. It proposed judgment by combat, and the combat became a series of contests that read like a festival schedule written by a fever dream — each one a standalone episode, told and retold with variations across temples and centuries.',
          ],
        },
        {
          heading: 'The Trials',
          paragraphs: [
            'First, the island. The court decreed a contest on an island in the river, and forbade Isis to come near it. Set and Horus turned themselves into hippopotami and plunged into the deep to hold a duel of endurance beneath the surface. But Isis would not sit still. She took the form of an old woman and bribed her way across the water, then became a young beauty in Set’s path — and coaxed from him, with a slanderous tale, the words that he would surrender the inheritance to a stranger rather than let the son of a murdered man be dispossessed. His own justice, spoken in his own voice, condemned him. The judges heard the testimony and ruled for Horus — then, at Set’s furious objection that Isis had cheated, reversed themselves and fought among each other in the river shallows.',
            'Then the stone ships. Set proposed a boat race: each contender would build a vessel, and the better craft would win the crown. Set tore the tops off a mountain and made a ship of solid stone — it sank instantly. Horus, outwitting rather than out-muscling, built a cedar boat plastered over to look like stone, and it floated. Set, enraged at being beaten by carpentry, turned hippopotamus again and smashed the boat itself — and the trial collapsed into another seventy years of quarreling, the text says, deadpan.',
            'Then the wars beneath the water. The two gods fought as hippopotami for three days and more; in some versions Horus harpooned Set and hauled him up before the court in chains; in others Isis intervened once more — and in the most famous and disturbing scene, she struck her own son when his spear found its mark, unable to let even Set, the murderer of her husband, be executed before her eyes. Horus, ashamed and enraged, cut off his mother’s head — which Thoth replaced with a cow’s, one tradition explains, origin of the horned crowns of Isis. The family, like the court, was tearing itself apart.',
          ],
        },
        {
          heading: 'What the Contendings Mean',
          paragraphs: [
            'The Contendings are the most human text in Egyptian religion — in the papyrus telling the gods whine, sulk, strike side deals, weep with frustration, and take long lunches while a kingdom waits. The Egyptians laughed at their gods here, not disrespectfully but familiarly: the message being that even divine justice is slow, procedural, and full of bad days. Order, Ma’at, is not the absence of conflict but its eventual, exhausted resolution.',
            'Notice what the contests reward. Set wins every trial of pure strength and loses every one that involves wit, patience, or law. Horus loses his temper — wounds his own mother, in one tradition — and must be healed and disciplined before he is fit to reign. The story is not a simple cheering for the hero. It is a long lesson in what kind of power can hold the throne of Egypt: not the strongest arm, but the claim that survives every contest thrown at it.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'the patient contender', deityId: 'horus' },
        { name: 'Set', role: 'the strong contender, undone by wit', deityId: 'set' },
        { name: 'Isis', role: 'the strategist who wins by transformation', deityId: 'isis' },
        { name: 'Thoth', role: 'the healer of the family’s self-wounds', deityId: 'thoth' },
      ],
      places: [
        {
          name: 'The island in the river',
          significance: 'Where Isis, as an old woman, first turned Set’s own words against him.',
        },
        {
          name: 'Abydos (Abdju)',
          significance: 'Where the passion play of the family saga was acted out annually.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The Contendings papyrus — the fullest telling — was written down in this era.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
        {
          name: 'Zep Tepi',
          relevance: 'The long divine interregnum before lawful kingship, in mythic time.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['horus', 'set', 'isis', 'thoth'],
      relatedLocationIds: ['abydos'],
      relatedEraIds: ['new-kingdom', 'zep-tepi'],
    },
    {
      id: 'the-eye-of-horus',
      title: 'The Eye of Horus',
      shortDescription: 'Torn out and scattered, then healed by Thoth — the broken eye becomes Egypt’s holiest sign.',
      narrative: [
        {
          heading: 'The Wound',
          paragraphs: [
            'Somewhere in the long violence between the two gods — the traditions do not agree where, or exactly how — Set tore out Horus’s left eye. The loss was not a wound to one god but to the world: the eye was the moon (or, in some tellings, one half of the light of the sky), and the cosmic stakes of the fight are written right into the injury. Set, the storm, had extinguished a light in heaven.',
            'Some texts say he crushed it in his fist; some that he buried the pieces; some that he swallowed it, keeping his rival’s power inside his own body. Horus, in retaliation, inflicted a matching wound on Set — in the Contendings the injury is to the testicles, a blow aimed at the very power of generation the contest was about. The tribunal had to heal both combatants before the trial could even continue: the case, quite literally, kept unmaking its own litigants.',
          ],
        },
        {
          heading: 'The Restoration',
          paragraphs: [
            'It was Thoth, the healer and measurer, who found the scattered pieces of the eye and restored it — the texts picture him gathering fragments and rejoining them, healing what violence had dismembered. The restored eye, the Wedjat — “the sound one,” “the whole one” — became one of the most potent signs in all of Egypt: painted on coffins and tomb walls to make the body whole again, carved on the prows of boats to see danger coming, offered by every priest at every altar as the perfect gift, and worn as an amulet by the living and the dead alike. A late tradition even counts its pieces as the fractions of Egyptian measurement — the pupil a quarter, the tear a sixty-fourth, and so on — though scholars debate whether the numbers were read into the eye or out of it; what is certain is that the sign stood, everywhere and always, for what is broken and made whole.',
            'The theology is precise. Violence breaks things into pieces; knowledge gathers, measures, and restores them. And the healed eye was not merely repaired — it became an agent of protection and healing in its own right, stronger for having been broken: wholeness, in the Egyptian understanding, was not the absence of injury but the recovery from it. When the healed Horus, in one tradition, gave his restored eye to his father as an offering — the son returning light to the king the thief had darkened — the myth closed its cruelest circle: what Set scattered, devotion and skill made whole, and the making-whole became a gift.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'whose eye was torn out — and made whole', deityId: 'horus' },
        { name: 'Set', role: 'who broke it', deityId: 'set' },
        { name: 'Thoth', role: 'who gathered, healed, and restored the light', deityId: 'thoth' },
        { name: 'Osiris', role: 'who received the healed eye as offering, in one tradition', deityId: 'osiris' },
      ],
      places: [],
      timeline: [
        {
          name: 'Zep Tepi',
          relevance: 'The central combat-wound of the divine war, in mythic time.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['horus', 'thoth', 'set', 'osiris'],
      relatedLocationIds: [],
      relatedEraIds: ['zep-tepi'],
    },
    {
      id: 'thoth',
      title: 'Thoth',
      shortDescription: 'Scribe of the tribunal — measurer, healer, arbiter, and the pen that made the verdict permanent.',
      narrative: [
        {
          heading: 'The Pen at the Edge of the Battle',
          paragraphs: [
            'Thoth stands at the edges of Act III, indispensable and serene. He is the scribe of the Ennead: his reed pen records the eighty years of proceedings, his arithmetic counts the contested years and the pieces of the broken eye, and his neutrality is the reason both contenders could accept any result at all. In the tribunal hall he sits beside the presiding gods, reading the record aloud, stating the precedents; in the Duat of Act II he stood beside the scales doing the same for souls. The Egyptians gave the pen a god because the pen is what makes justice durable — a verdict unrecorded is a verdict that can be un-decided.',
            'He is also, throughout the act, the fixer of what the combat breaks: the healer of the Wedjat eye; the restorer of Isis’s head after Horus’s rage, in the tradition that says a cow’s head replaced it; the messenger shuttling between the exhausted judges; the one god both sides trusted. When the tribunal finally needed its reasoning assembled into a judgment, it was Thoth’s craft that assembled it.',
          ],
        },
        {
          heading: 'Wisdom, Writing, and the Measured World',
          paragraphs: [
            'The Egyptians credited Thoth with writing itself — hieroglyphs as the notation of reality, the ledger on which Ma’at is kept. He was the patron of scribes, whose profession was the administrative spine of the whole civilization; the inventor of arithmetic, astronomy, and the calendar; and the master of heka in its most disciplined form, magic as knowledge rather than passion. Measure what is, heal what is broken, record what is decided: the Egyptian theory of intellect in three clauses, all of them Thoth’s.',
            'Later ages elaborated him freely — the Greeks identified him with Hermes and called him Hermes Trismegistos, “Thrice-Greatest,” and late Egyptian tradition made him the author of forty-two books of hidden knowledge. But his office in this act is the oldest one: the quiet god with the palette at the edge of every fight, writing down what the powerful decide, so that the decision outlasts the power. Order, in Kemet, was not just won. It was minuted.',
          ],
        },
      ],
      figures: [
        { name: 'Thoth', role: 'scribe, healer, measurer, arbiter of the tribunal', deityId: 'thoth' },
        { name: 'Seshat', role: 'the divine record-keeper, his feminine counterpart in some traditions' },
      ],
      places: [
        {
          name: 'Hermopolis (Khemenu)',
          significance: 'Thoth’s cult city, home of the Ogdoad who predate the Ennead.',
        },
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where he served the tribunal as scribe and read the record aloud.',
          locationId: 'heliopolis',
        },
      ],
      timeline: [
        {
          name: 'Old Kingdom',
          relevance: 'Scribes and scholars of this era were already under Thoth’s patronage — the god of the written word.',
          kind: 'historical-context',
      eraId: 'old-kingdom',
        },
        {
          name: 'Zep Tepi',
          relevance: 'The divine bureaucracy that keeps the myth consistent.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['thoth'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['old-kingdom', 'zep-tepi'],
    },
    {
      id: 'isiss-role',
      title: "Isis's Role",
      shortDescription: 'Mother, strategist, magician — the force that would not let the trial be lost.',
      narrative: [
        {
          heading: 'The Strategist of the Trial',
          paragraphs: [
            'Strip Isis out of Act III and Horus loses. The texts are unambiguous about this: at every point where the tribunal stalled, where force failed, where the law was about to be out-argued by strength, it was Isis who moved the case. She argued before the Ennead — the Contendings picture her rising again and again to plead her son’s cause, wearing the judges down with the sheer moral weight of the murdered husband and the fatherless boy. She transformed — into an old woman on the riverbank, a beautiful stranger on the road, a kite over the water — because in the Egyptian imagination Isis’s intelligence never presents the same face twice.',
            'Her masterpiece on the island has already been told: banned from the contest, she got there anyway, and talked Set into pronouncing judgment against himself. It is the whole woman in one scene — the defiance of the court’s ruling, the perfect reading of her opponent’s vanity, and the weaponizing of his own sense of justice. Set was not wrong that he had been tricked; he was wrong about which of them the trick dishonored.',
          ],
        },
        {
          heading: 'The Line She Would Not Cross',
          paragraphs: [
            'And yet the most revealing scene belongs to her failures and refusals. When Horus had Set chained, in one version of the hippopotamus battle, Isis struck — and killed, or nearly killed — the murderer of her husband… and then, at the last, released him. Even Set, in her arithmetic, could not simply be erased; the story does not let her be a simple avenger. And when her own son, enraged, struck her down, she endured it as all mothers in myths endure it — and was made whole again by Thoth’s craft, a cow’s head in one tradition, a reminder that the family’s war wounds everyone it touches, even the innocent.',
            'Her relationship with Set, across the whole act, is the myth’s most sophisticated thread: sister-in-law, avenger, opponent, and — some traditions remind us — his own queen once, in the household of the usurper, before she walked out of it. She hates what he did. She never pretends he does not exist. In the final settlement of this act, when the gods assign Set a place in the sun’s own service, it is Isis’s whole career that has made the compromise thinkable: she has spent the entire trial proving that cunning, patience, and love are stronger forces than vengeance.',
          ],
        },
      ],
      figures: [
        { name: 'Isis', role: 'mother, advocate, strategist — the trial’s engine', deityId: 'isis' },
        { name: 'Set', role: 'her opponent, her brother-in-law, her husband once', deityId: 'set' },
        { name: 'Horus', role: 'the son whose cause she never abandoned', deityId: 'horus' },
        { name: 'Thoth', role: 'who repaired what the family war broke', deityId: 'thoth' },
      ],
      places: [
        {
          name: 'Philae',
          significance: 'Isis’s great island temple — where the goddess of this act was worshipped longest.',
          locationId: 'alexandria-philae',
        },
      ],
      timeline: [
        {
          name: 'Late Period',
          relevance: 'When Isis’s cult rose toward the Mediterranean-wide status it held at Philae.',
          kind: 'historical-context',
      eraId: 'late-period',
        },
        {
          name: 'Zep Tepi',
          relevance: 'The mythic trial she never allowed to be lost.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['isis', 'set', 'horus', 'thoth'],
      relatedLocationIds: ['alexandria-philae'],
      relatedEraIds: ['late-period', 'zep-tepi'],
    },
    {
      id: 'sets-complex-role',
      title: 'Set’s Complex Role',
      shortDescription: 'Not a devil: the necessary storm — desert, strength, and the frontier — judged but never abolished.',
      narrative: [
        {
          heading: 'The Strongest God in Heaven',
          paragraphs: [
            'Egyptian religion never had a devil, and it is one of the most sophisticated things about it. The forces that threaten life — the desert, the storm, the scorching wind, the foreign army at the border — were not imagined as a rebellion against the gods. They were gods. Set embodied them all: red of hair and temper, the strongest arm in the pantheon, lord of the red land beyond the black. Where Osiris was the fertile flood plain, Set was everything the flood never reached — and everything, therefore, that Egypt had to live beside forever.',
            'That is the key to his role in this act. The Contendings does not read as the defeat of evil; it reads as the subordination of force. Set’s claim to the throne — the strongest should rule — was not a monstrous argument; it was half of the truth, and the judges knew it. What the trial established was the other half: strength without legitimacy is merely weather. The verdict did not execute Set, could not execute Set, because you cannot execute a wind. It employed him.',
          ],
        },
        {
          heading: 'The Storm at the Prow of the Sun',
          paragraphs: [
            'And employment, in Egyptian theology, meant honor. In the nightly voyage of Ra, when the serpent Apophis rises from the deep to swallow the sun, it is Set who stands at the prow of the barque, spear in hand — the only god strong and merciless enough to hold the line against chaos itself. The murderer of Osiris is, in the very same theology, the savior of the sun, every single night. The Egyptians drew this, carved it, and never felt the contradiction; the same violent power that had torn the world apart was the one power the world could not do without. Set was also, at different times and places, a royal patron: pharaohs of the Nineteenth Dynasty bore his name — Seti, “man of Set” — and built him temples of their own.',
            'History tested the settlement. In the eras after Egypt’s humiliations by foreign powers, Set’s red face slowly became the face of the foreigner, and the hatred his myth had always metabolized began to pool on him alone — his statues were defaced, his name scratched out in places, his cult shrunk to a few strongholds like the one at Ombos. Some scholars see in this late demonization the seed of the figure later traditions would carry far beyond Egypt. But that is the late, embittered reading. The verdict of the Contendings itself — the theology at its most confident — is different and better: chaos is real, strength is real, and both can be given a place in the order of Ma’at, so long as the throne belongs to the falcon.',
          ],
        },
      ],
      figures: [
        { name: 'Set', role: 'desert, storm, violence — and defender of the solar barque', deityId: 'set' },
        { name: 'Apophis', role: 'the true enemy of order, whom Set alone can fight' },
        { name: 'Ra', role: 'whose nightly survival depends on Set’s spear', deityId: 'ra' },
      ],
      places: [
        {
          name: 'Ombos (Nubt)',
          significance: 'Set’s cult city — one of the strongholds his worship kept even in decline.',
        },
        {
          name: 'The desert beyond the valley',
          significance: 'Set’s natural domain: the red land the flood never touches.',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The Nineteenth Dynasty made Set a royal patron — the theology at its most confident.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
        {
          name: 'Late Period',
          relevance: 'When foreign humiliation darkened Set’s name and his cult contracted.',
          kind: 'historical-context',
      eraId: 'late-period',
        },
      ],
      relatedDeityIds: ['set', 'ra', 'osiris'],
      relatedLocationIds: [],
      relatedEraIds: ['new-kingdom', 'late-period'],
    },
    {
      id: 'the-final-judgment',
      title: 'The Final Judgment',
      shortDescription: 'The tribunal writes to the dead king — and the dead king’s answer settles heaven.',
      narrative: [
        {
          heading: 'The Question Put to the Dead',
          paragraphs: [
            'Eighty years of contests had settled nothing: Horus won the trials of wit, Set won the trials of strength, and the tribunal was still deadlocked. It was at this point that the story performs its most quietly radical move. The court — Ra presiding, still unconvinced, Thoth drafting — decided to put the question where the whole case had begun: they wrote to Osiris, king of the dead, and asked him whom the throne belonged to.',
            'The answer came back from the Duat with terrible clarity. Why, the murdered king wrote — in the Contendings’ most famous letter — should my son be denied the seat, when it was I who made the barley grow and gave it to gods and men? Was the green of the fields to be questioned by the storm that never crossed them? He reminded the court, with a dead man’s patience, of what the living are prone to forget: that the ordered world they were adjudicating had been built, and paid for, before any of them were asked to judge it.',
            'The letter broke the trial. Even Ra’s resistance collapsed — the text shows the aging sun god taking Osiris’s side at last, and the court, eighty years late, finding its verdict: the throne belongs to Horus, son of Osiris. Set was heard one more time, blustering about his strength; the ruling stood. Justice, Egypt concluded, includes the testimony of the dead — and legitimacy is not what the strongest can take, but what the whole order, living and dead, will stand behind.',
          ],
        },
        {
          heading: 'Geb and the Balance of the Verdict',
          paragraphs: [
            'The traditions elaborate the closing judgment differently, and one thread belongs to Geb — the earth itself, from whose line the dispute had arisen. In several versions it is Geb, the inherited authority of the ground beneath both claimants, who convenes the final session or ratifies the result: the earth speaks, and the succession is settled for the earth’s own descendants. Other accounts let the Ennead’s vote, or Osiris’s letter, or a final face-down between the two contenders carry the day. The surviving accounts differ; the destination is one.',
            'Horus was proclaimed king of the living world. The falcon descended — in temple art, forever after — onto the shoulder of the seated ruler, wings spread over the Two Lands: one wing the Delta, one wing the valley. And Set, neither destroyed nor exiled, received his post: the sky’s most dangerous station, at the prow of the sun. The judgment of Egypt was never that chaos loses. It was that chaos serves.',
          ],
        },
      ],
      figures: [
        { name: 'Osiris', role: 'whose letter from the dead decided the case', deityId: 'osiris' },
        { name: 'Geb', role: 'the earth, ratifying the succession of his own line' },
        { name: 'Horus', role: 'proclaimed king of the living', deityId: 'horus' },
        { name: 'Set', role: 'reassigned to the prow of the sun, not destroyed', deityId: 'set' },
        { name: 'Ra', role: 'the aged president whose resistance finally broke', deityId: 'ra' },
        { name: 'Thoth', role: 'who drafted the verdict the court could finally sign', deityId: 'thoth' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where the verdict was read and the falcon crowned.',
          locationId: 'heliopolis',
        },
        {
          name: 'Abydos (Abdju)',
          significance: 'Osiris’s seat — the court that answered the living from the dead.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'New Kingdom',
          relevance: 'The era whose texts preserve the letter from the Duat and the trial’s end.',
          kind: 'historical-context',
          eraId: 'new-kingdom',
        },
        {
          name: 'Zep Tepi',
          relevance: 'The mythic verdict that ends the divine interregnum.',
          kind: 'mythological-tradition',
          eraId: 'zep-tepi',
        },
      ],
      relatedDeityIds: ['osiris', 'horus', 'set', 'ra', 'thoth'],
      relatedLocationIds: ['heliopolis', 'abydos'],
      relatedEraIds: ['new-kingdom', 'zep-tepi'],
    },
    {
      id: 'balance-of-the-lineage',
      title: 'The Balance of the Lineage',
      shortDescription: 'Horus on the throne of the living, Osiris on the throne of the dead — the two-pole constitution of Egypt.',
      narrative: [
        {
          heading: 'Two Thrones, One Lineage',
          paragraphs: [
            'The settlement left Egypt with two kings where there had been one. Horus took the throne of the living — the visible world, the Two Lands, the office of ruling. Osiris kept the throne of the dead — the Duat, the tribunal of souls, the office of judging and preserving. The two reigns were not rivals; they were the two halves of one continuity, the same royal line running through death and back. Osiris had been Horus; Horus would, in the fullness of time, be one with his father; and the throne passed between the worlds as smoothly as a river passing between its banks.',
            'Egypt turned this mythology directly into its political theory. Every living pharaoh was the Horus — the falcon incarnate, the god of the living throne present in a human body; the king’s very name, from the first dynasty onward, was written inside a falcon-topped frame, the serekh, as if the name itself perched on the god’s perch. And every pharaoh who died became an Osiris — not metaphorically but liturgically: the funeral made him the dead king, tried, justified, and enthroned below. The throne of Egypt, in this theology, never stood empty and never changed hands, because the same kingship just kept moving between Horus and Osiris, between the living land and the silent one.',
          ],
        },
        {
          heading: 'A Formula, Not a Cage',
          paragraphs: [
            'It is tempting to file this under one tidy equation — living king = Horus, dead king = Osiris — and the Egyptians themselves would have recognized its shape. But three thousand years is a long time, and the formula bent with the centuries. In the Old Kingdom, the dead king was sometimes assimilated to the sun and to Ra as much as to Osiris; kingship looked upward as well as downward. In the Middle Kingdom, as Osiris’s cult democratized, the identity spread outward until every dead Egyptian — farmer, scribe, queen — could be called “the Osiris So-and-so,” and the royal pattern became a national hope. And Horus himself, as Act III has shown, was more than one figure in the earliest theology: the falcon-office was filled by the sky-god of creation and the avenger-son before the traditions fused them.',
            'So hold the pattern the way the Egyptians held it: as the deep grammar of their kingship, not as a rigid rule. The living king stands where Horus stood; the dead king goes where Osiris went; and between those two poles — action and judgment, the irrigated field and the dark tribunal — the whole institution of Egyptian monarchy swung like a pendulum for three millennia. When a new reign began, Egypt did not say a new king had been chosen. It said: Horus has come. The throne, in the words the temples never tired of, was re-peopled, not re-decided.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'king of the living — the office every pharaoh filled', deityId: 'horus' },
        { name: 'Osiris', role: 'king of the dead — the office every pharaoh inherited at death', deityId: 'osiris' },
        { name: 'Set', role: 'excluded from the succession, employed in the sky', deityId: 'set' },
        { name: 'Ra', role: 'the other pole of Old Kingdom royal identity, beside Osiris', deityId: 'ra' },
      ],
      places: [
        {
          name: 'Giza & Saqqara',
          significance: 'Where the first Horus-kings built their transition to Osiris in stone.',
          locationId: 'giza-saqqara',
        },
        {
          name: 'Abydos (Abdju)',
          significance: 'Where every Egyptian, royal or not, went to join Osiris.',
          locationId: 'abydos',
        },
      ],
      timeline: [
        {
          name: 'Early Dynastic',
          relevance: 'The serekh — the falcon-topped royal name — appears from the very first dynasties.',
          kind: 'historical-context',
          eraId: 'early-dynastic',
        },
        {
          name: 'Old Kingdom',
          relevance: 'Royal identity spread between Horus, Ra, and Osiris in the pyramid age.',
          kind: 'historical-context',
      eraId: 'old-kingdom',
        },
        {
          name: 'Middle Kingdom',
          relevance: 'When the Osiris identity of the dead spread from pharaohs to everyone.',
          kind: 'historical-context',
      eraId: 'middle-kingdom',
        },
      ],
      relatedDeityIds: ['horus', 'osiris', 'ra', 'set'],
      relatedLocationIds: ['giza-saqqara', 'abydos'],
      relatedEraIds: ['early-dynastic', 'old-kingdom', 'middle-kingdom'],
    },
    {
      id: 'thematic-conclusion',
      title: 'Thematic Conclusion',
      shortDescription: 'Horus does not destroy chaos — the myth’s real ending is an order that employs its dangers.',
      narrative: [
        {
          heading: 'What the Myth Does Not Do',
          paragraphs: [
            'It is worth ending by noticing what this act refuses to do. Horus does not destroy Set. He does not banish him beyond the world’s edge, kill him, or redeem him into goodness. The murderer of Osiris ends the trial with a divine job, a spear, and a place at the front of the sun’s own ship — closer to the source of order, every night, than almost any other god. Egyptian mythology is under no illusion that chaos can be eliminated, and its verdict on the throne of Egypt is not victory but arrangement: the dangerous force, acknowledged, bounded, and given work.',
            'This is the deepest thing the Contendings knows. Every force in the cosmos — the flood that feeds and drowns, the desert that borders and devours, the strength that protects and murders — is double-edged, and an order that pretended otherwise would simply be waiting to be ambushed by its own denial. Ma’at, in this act’s final teaching, is not the absence of Set. It is a world in which Set has a post.',
          ],
        },
        {
          heading: 'The Whole Story in One Verdict',
          paragraphs: [
            'Seen from the top, the first three acts of this history form a single argument. Act I established the cosmos as an arrangement — Ma’at against Isfet, the feather against the waters. Act II showed the arrangement broken and repaired: the good king murdered, gathered, restored — death answered with resurrection, the tomb converted into a promise. Act III has shown the arrangement constitutionalized: succession settled, strength subordinated, the falcon crowned and the storm employed. Kingship, death, resurrection, and cosmic order turn out to be one subject viewed from four sides — and the verdict of the divine trial is the hinge that connects them to the human world.',
            'Because from here on, this is no longer a story about gods alone. The falcon on the throne means every pharaoh who will ever rule; the letter from the dead means every tomb that will ever be cut; the employed storm means every flood, every famine, every frontier war the Two Lands will ever survive. When the fourth and final act opens — on the human history that inherited this verdict — Egypt will already have its constitution, its promise about death, and its theory of power written in myth. Everything left is the working out, across three thousand years, of whether the arrangement can hold.',
          ],
        },
      ],
      figures: [
        { name: 'Horus', role: 'the crowned order that contains its danger', deityId: 'horus' },
        { name: 'Set', role: 'the employed storm — chaos given a post', deityId: 'set' },
        { name: 'Ma’at', role: 'the arrangement the whole verdict serves' },
        { name: 'Osiris', role: 'the resurrection the verdict inherits', deityId: 'osiris' },
      ],
      places: [
        {
          name: 'Heliopolis (Iunu)',
          significance: 'Where the settlement was read — the constitution’s signing place.',
          locationId: 'heliopolis',
        },
      ],
      timeline: [
        {
          name: 'Early Dynastic',
          relevance: 'Where myth hands the verdict to history: the first Horus-kings.',
          kind: 'historical-context',
          eraId: 'early-dynastic',
        },
      ],
      relatedDeityIds: ['horus', 'set', 'osiris', 'ra'],
      relatedLocationIds: ['heliopolis'],
      relatedEraIds: ['early-dynastic'],
    },
  ],
};
