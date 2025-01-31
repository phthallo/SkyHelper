const firstChoices = [
  {
    label: 'Season of Nine-Colored Deer',
    value: 'nine_colored',
    emoji: '<:ninecoloreddeer:1197412132657053746>',
  },
  {
    label: 'Season of Revival',
    value: 'revival',
    emoji: '<:revival:1163480957706321950>',
  },
  {
    label: 'Season of Moments',
    value: 'moments',
    emoji: '<:moments:1130958731211985019>',
  },
  {
    label: 'Season of Passage',
    value: 'passage',
    emoji: '<:passage:1130958698571911239>',
  },
  {
    label: 'Season of Remembrance',
    value: 'remembrance',
    emoji: '<:remembrance:1130958673959719062>',
  },
  {
    label: 'Season of Aurora',
    value: 'aurora',
    emoji: '<:aurora:1130958641189621771>',
  },
  {
    label: 'Season of Shattering',
    value: 'shattering',
    emoji: '<:shattering:1130961257097334895>',
  },
  {
    label: 'Season of Performance',
    value: 'performance',
    emoji: '<:performance:1130958595345895444>',
  },
  {
    label: 'Season of Abyss',
    value: 'abyss',
    emoji: '<:abyss:1130958569748045845>',
  },
  {
    label: 'Season of Flight',
    value: 'flight',
    emoji: '<:flight:1130958544276045945>',
  },
  {
    label: 'Season of Little Prince',
    value: 'little_prince',
    emoji: '<:littleprince:1130958521253502987>',
  },
  {
    label: 'Season of Assembly',
    value: 'assembly',
    emoji: '<:assembly:1130958465351811173>',
  },
  {
    label: 'Season of Dreams',
    value: 'dreams',
    emoji: '<:dreams:1130958442232815646>',
  },
  {
    label: 'Season of Prophecy',
    value: 'prophecy',
    emoji: '<:prophecy:1130958414655279304>',
  },
  {
    label: 'Season of Sanctuary',
    value: 'sanctuary',
    emoji: '<:sanctuary:1130958391347515573>',
  },
  {
    label: 'Season of Enchantment',
    value: 'enchantment',
    emoji: '<:enchantment:1130958367674867742>',
  },
  {
    label: 'Season of Rhythm',
    value: 'rhythm',
    emoji: '<:rhythm:1130958345352777849>',
  },
  {
    label: 'Season of Belonging',
    value: 'belonging',
    emoji: '<:belonging:1130958323823423509>',
  },
  {
    label: 'Season of Lightseekers',
    value: 'lightseekers',
    emoji: '<:lightseekers:1130958300293365870>',
  },
  {
    label: 'Season of Gratitude',
    value: 'gratitude',
    emoji: '<:gratitude:1130958261349261435>',
  },
];
const secondChoices = {
  nine_colored: [
    { label: 'Seasonal Quests', value: 'nine_colored_q' },
    { label: 'Spirit Locations', value: 'nine_colored_s' },
    { label: 'Spirits Tree', value: 'nine_colored_ts' },
  ],
  revival: [
    { label: 'Seasonal Quests', value: 'revival_q' },
    { label: 'Seasonal Price Tree', value: 'revival_ts' },
  ],
  moments: [
    { label: 'Seasonal Quests', value: 'moments_q' },
    { label: 'Spirit Locations', value: 'moments_s' },
    { label: 'Spirits Tree', value: 'moments_ts' },
  ],
  passage: [
    { label: 'Seasonal Quests', value: 'passage_q' },
    { label: 'Spirit Locations', value: 'passage_s' },
    { label: 'Spirits Tree', value: 'passage_ts' },
  ],
  remembrance: [
    { label: 'Seasonal Quests', value: 'remembrance_q' },
    { label: 'Spirit Locations', value: 'remembrance_s' },
    { label: 'Spirits Tree', value: 'remembrance_ts' },
  ],
  aurora: [
    { label: 'Seasonal Quests', value: 'aurora_q' },
    { label: 'Spirits Tree', value: 'aurora_ts' },
  ],
  shattering: [
    { label: 'Seasonal Quests', value: 'shattering_q' },
    { label: 'Spirits Tree', value: 'shattering_ts' },
  ],
  performance: [
    { label: 'Seasonal Quests', value: 'performance_q' },
    { label: 'Spirit Locations', value: 'performance_s' },
    { label: 'Spirits Tree', value: 'performance_ts' },
  ],
  abyss: [
    { label: 'Seasonal Quests', value: 'abyss_q' },
    { label: 'Spirit Locations', value: 'abyss_s' },
    { label: 'Spirits Tree', value: 'abyss_ts' },
  ],
  flight: [
    { label: 'Seasonal Quests', value: 'flight_q' },
    { label: 'Spirit Locations', value: 'flight_s' },
    { label: 'Spirits Tree', value: 'flight_ts' },
  ],
  little_prince: [
    { label: 'Seasonal Quests', value: 'prince_q' },
    { label: 'Spirit Locations', value: 'prince_s' },
    { label: 'Spirits Tree', value: 'prince_ts' },
  ],
  assembly: [
    { label: 'Seasonal Quests', value: 'assembly_q' },
    { label: 'Spirit Locations', value: 'assembly_s' },
    { label: 'Spirits Tree', value: 'assembly_ts' },
  ],
  dreams: [
    { label: 'Seasonal Quests', value: 'dreams_q' },
    { label: 'Spirit Locations', value: 'dreams_s' },
    { label: 'Spirits Tree', value: 'dreams_ts' },
  ],
  prophecy: [
    { label: 'Seasonal Quests', value: 'prophecy_q' },
    { label: 'Spirit Locations', value: 'prophecy_s' },
    { label: 'Spirits Tree', value: 'prophecy_ts' },
  ],
  sanctuary: [
    { label: 'Seasonal Quests', value: 'sanctuary_q' },
    { label: 'Spirit Locations', value: 'sanctuary_s' },
    { label: 'Spirits Tree', value: 'sanctuary_ts' },
  ],
  enchantment: [
    { label: 'Seasonal Quests', value: 'enchantment_q' },
    { label: 'Spirit Locations', value: 'enchantment_s' },
    { label: 'Spirits Tree', value: 'enchantment_ts' },
  ],
  rhythm: [
    { label: 'Spirit Locations', value: 'rhythm_s' },
    { label: 'Spirits Tree', value: 'rhythm_ts' },
  ],
  belonging: [
    { label: 'Spirit Locations', value: 'belonging_s' },
    { label: 'Spirits Tree', value: 'belonging_ts' },
  ],
  lightseekers: [
    { label: 'Spirit Locations', value: 'lightseekers_s' },
    { label: 'Spirits Tree', value: 'lightseekers_ts' },
  ],
  gratitude: [
    { label: 'Spirit Locations', value: 'gratitude_s' },
    { label: 'Spirits Tree', value: 'gratitude_ts' },
  ],
};
const thirdChoices = {
  nine_colored_q: [
    {
      label: 'Quest 1',
      value: 'nine_colored_q1',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  nine_colored_ts: [
    {
      label: 'Feudal Lord',
      value: 'lord_tree',
      emoji: '<:feudallord:1197413178330578964>',
    },
    {
      label: 'Princess',
      value: 'princess_tree',
      emoji: '<:princess:1197413108717731840>',
    },
    {
      label: 'Hunter',
      value: 'hunter_tree',
      emoji: '<:hunter:1197413131736064052>',
    },
    {
      label: 'Herb Gatherer',
      value: 'herb_gatherer_tree',
      emoji: '<:herbgatherer:1197413154938957885>',
    },
  ],

  revival_q: [
    {
      label: 'Quest 1',
      value: 'revival_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'revival_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'revival_q3',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  revival_ts: [
    {
      label: 'Vestige of a Deserted Oasis',
      value: 'deserted_oasis_tree',
      emoji: '<:oasis:1163516730899972106>',
    },
    {
      label: 'Memory of a Lost Village',
      value: 'lost_village_tree',
      emoji: '<:lostVillage:1163516699228774501>',
    },
    {
      label: 'Echo of an Abandoned Refuge',
      value: 'abandoned_refuge_tree',
      emoji: '<:refuge:1163516307409477744>',
    },
    {
      label: 'Remnant of a Forgotten Haven',
      value: 'forgotten_haven_tree',
      emoji: '<:haven:1163485717641576559>',
    },
  ],
  moments_q: [
    {
      label: 'Quest 1',
      value: 'moments_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'moments_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'moments_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'moments_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'moments_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  moments_s: [
    {
      label: 'Reassuring Ranger',
      value: 'ranger_location',
      emoji: '<:ranger:1130948781026844692>',
    },
    {
      label: 'Jolly Geologist',
      value: 'geologist_location',
      emoji: '<:geologist:1130948834365816973>',
    },
    {
      label: 'Ascetic Monk',
      value: 'monk_location',
      emoji: '<:monk:1130948859674243185>',
    },
    {
      label: 'Nightbird Whisperer',
      value: 'nightbird_location',
      emoji: '<:nightbird:1130948807396429884>',
    },
  ],
  moments_ts: [
    {
      label: 'Reassuring Ranger',
      value: 'ranger_tree',
      emoji: '<:ranger:1130948781026844692>',
    },
    {
      label: 'Jolly Geologist',
      value: 'geologist_tree',
      emoji: '<:geologist:1130948834365816973>',
    },
    {
      label: 'Ascetic Monk',
      value: 'monk_tree',
      emoji: '<:monk:1130948859674243185>',
    },
    {
      label: 'Nightbird Whisperer',
      value: 'nightbird_tree',
      emoji: '<:nightbird:1130948807396429884>',
    },
  ],
  passage_q: [
    {
      label: 'Quest 1',
      value: 'passage_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'passage_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'passage_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'passage_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'passage_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  passage_s: [
    {
      label: 'Tumbling Troublemaker',
      value: 'troublemaker_location',
      emoji: '<:tumbling:1131583486940164126>',
    },
    {
      label: 'Melancholy Mope',
      value: 'mope_location',
      emoji: '<:mope:1131583421529989211>',
    },
    {
      label: 'Overactive Overachiever',
      value: 'overachiever_location',
      emoji: '<:achiever:1131583465649876992>',
    },
    {
      label: 'Oddball Outcast',
      value: 'outcast_location',
      emoji: '<:oddball:1131583444116308072>',
    },
  ],
  passage_ts: [
    {
      label: 'Tumbling Troublemaker',
      value: 'troublemaker_tree',
      emoji: '<:tumbling:1131583486940164126>',
    },
    {
      label: 'Melancholy Mope',
      value: 'mope_tree',
      emoji: '<:mope:1131583421529989211>',
    },
    {
      label: 'Overactive Overachiever',
      value: 'overachiever_tree',
      emoji: '<:achiever:1131583465649876992>',
    },
    {
      label: 'Oddball Outcast',
      value: 'outcast_tree',
      emoji: '<:oddball:1131583444116308072>',
    },
  ],
  remembrance_q: [
    {
      label: 'Quest 1',
      value: 'remembrance_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'remembrance_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'remembrance_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'remembrance_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'remembrance_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  remembrance_s: [
    {
      label: 'Bereft Veteran',
      value: 'veteran_location',
      emoji: '<:Bereft:1131584129054560396>',
    },
    {
      label: 'Pleading Child',
      value: 'pleading_child_location',
      emoji: '<:pleading:1131584152332935331>',
    },
    {
      label: 'Tiptoeing Tea-Brewer',
      value: 'tea_brewer_location',
      emoji: '<:tiptoe:1131584176882192455>',
    },
    {
      label: 'Wounded Warrior',
      value: 'wounded_warrior_location',
      emoji: '<:wounded:1131584200735211710>',
    },
  ],
  remembrance_ts: [
    {
      label: 'Bereft Veteran',
      value: 'veteran_tree',
      emoji: '<:Bereft:1131584129054560396>',
    },
    {
      label: 'Pleading Child',
      value: 'pleading_child_tree',
      emoji: '<:pleading:1131584152332935331>',
    },
    {
      label: 'Tiptoeing Tea-Brewer',
      value: 'tea_brewer_tree',
      emoji: '<:tiptoe:1131584176882192455>',
    },
    {
      label: 'Wounded Warrior',
      value: 'wounded_warrior_tree',
      emoji: '<:wounded:1131584200735211710>',
    },
  ],
  aurora_q: [
    {
      label: 'Quest 1',
      value: 'aurora_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'aurora_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'aurora_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'aurora_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'aurora_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  aurora_ts: [
    {
      label: 'Mindful Miner',
      value: 'mindful_miner_tree',
      emoji: '<:miner:1131584687454818404>',
    },
    {
      label: 'Running Wayfarer',
      value: 'wayfarer_tree',
      emoji: '<:wayfarer:1131584710192144606>',
    },
    {
      label: 'Seed of Hope',
      value: 'seed_of_hope_tree',
      emoji: '<:seedofhope:1131584732887523388>',
    },
    {
      label: 'Warrior of Love',
      value: 'warrior_of_love_tree',
      emoji: '<:warriorlove:1131584753036963882>',
    },
  ],
  shattering_ts: [
    {
      label: 'Ancient Light (Jellyfish)',
      value: 'light_jelly_tree',
      emoji: '<:light:1131585908005687427>',
    },
    {
      label: 'Ancient Light (Manta)',
      value: 'light_manta_tree',
      emoji: '<:light:1131585908005687427>',
    },
    {
      label: 'Ancient Dark (Dragon)',
      value: 'dark_dragon_tree',
      emoji: '<:dark:1131585877349503057>',
    },
    {
      label: 'Ancient Dark (Plant)',
      value: 'dark_plant_tree',
      emoji: '<:dark:1131585877349503057>',
    },
  ],
  performance_q: [
    {
      label: 'Quest 1',
      value: 'performance_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'performance_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'performance_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'performance_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'performance_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  performance_s: [
    {
      label: 'Forgetful Storyteller',
      value: 'storyteller_location',
      emoji: '<:storyteller:1131586451885260831>',
    },
    {
      label: 'Frantic Stagehand',
      value: 'stagehand_location',
      emoji: '<:stagehand:1131586475226562670>',
    },
    {
      label: 'Mellow Musician',
      value: 'mellow_musician_location',
      emoji: '<:mellow:1131586502149816411>',
    },
    {
      label: 'Modest Dancer',
      value: 'modest_dancer_location',
      emoji: '<:modest:1131586528540381194>',
    },
  ],
  performance_ts: [
    {
      label: 'Forgetful Storyteller',
      value: 'storyteller_tree',
      emoji: '<:storyteller:1131586451885260831>',
    },
    {
      label: 'Frantic Stagehand',
      value: 'stagehand_tree',
      emoji: '<:stagehand:1131586475226562670>',
    },
    {
      label: 'Mellow Musician',
      value: 'mellow_musician_tree',
      emoji: '<:mellow:1131586502149816411>',
    },
    {
      label: 'Modest Dancer',
      value: 'modest_dancer_tree',
      emoji: '<:modest:1131586528540381194>',
    },
  ],
  abyss_q: [
    {
      label: 'Quest 1',
      value: 'abyss_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'abyss_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'abyss_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'abyss_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'abyss_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  abyss_s: [
    {
      label: 'Anxious Angler',
      value: 'angler_location',
      emoji: '<:angler:1131587623165632594>',
    },
    {
      label: 'Bumbling Boatswain',
      value: 'boatswain_location',
      emoji: '<:boatswain:1131587645219295382>',
    },
    {
      label: 'Cackling Cannoneer',
      value: 'cannoneer_location',
      emoji: '<:cannoneer:1131587675061747854>',
    },
    {
      label: 'Ceasing Commodore',
      value: 'commodore_location',
      emoji: '<:commodore:1131587707315949608>',
    },
  ],
  abyss_ts: [
    {
      label: 'Anxious Angler',
      value: 'angler_tree',
      emoji: '<:angler:1131587623165632594>',
    },
    {
      label: 'Bumbling Boatswain',
      value: 'boatswain_tree',
      emoji: '<:boatswain:1131587645219295382>',
    },
    {
      label: 'Cackling Cannoneer',
      value: 'cannoneer_tree',
      emoji: '<:cannoneer:1131587675061747854>',
    },
    {
      label: 'Ceasing Commodore',
      value: 'commodore_tree',
      emoji: '<:commodore:1131587707315949608>',
    },
  ],
  flight_q: [
    {
      label: 'Quest 1',
      value: 'flight_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'flight_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'flight_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'flight_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'flight_q5',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  flight_s: [
    {
      label: 'Light Whisperer',
      value: 'light_whispere_location',
      emoji: '<:lightwhisperer:1131589102626672761>',
    },
    {
      label: 'Lively Navigator',
      value: 'navigator_location',
      emoji: '<:navigator:1131589125636632596>',
    },
    {
      label: 'Talented Builder',
      value: 'talented_builder_location',
      emoji: '<:builder:1131589149464481812>',
    },
    {
      label: 'Tinkering Chimesmith',
      value: 'chimesmith_location',
      emoji: '<:chimesmith:1131589172822544435>',
    },
  ],
  flight_ts: [
    {
      label: 'Light Whisperer',
      value: 'light_whispere_tree',
      emoji: '<:lightwhisperer:1131589102626672761>',
    },
    {
      label: 'Lively Navigator',
      value: 'navigator_tree',
      emoji: '<:navigator:1131589125636632596>',
    },
    {
      label: 'Talented Builder',
      value: 'talented_builder_tree',
      emoji: '<:builder:1131589149464481812>',
    },
    {
      label: 'Tinkering Chimesmith',
      value: 'chimesmith_tree',
      emoji: '<:chimesmith:1131589172822544435>',
    },
  ],
  prince_q: [
    {
      label: 'Quest 1',
      value: 'prince_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'prince_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'prince_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'prince_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'prince_q5',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 6',
      value: 'prince_q6',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 7',
      value: 'prince_q7',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  prince_s: [
    {
      label: 'Beckoning Ruler',
      value: 'beckoning_ruler_location',
      emoji: '<:ruler:1131590308430348369>',
    },
    {
      label: 'Gloating Narcissist',
      value: 'narcissist_location',
      emoji: '<:narcissist:1131590328714010684>',
    },
    {
      label: 'Slouching Soldier',
      value: 'slouching_soldier_location',
      emoji: '<:slouching:1131590352038531143>',
    },
    {
      label: 'Sneezing Geographer',
      value: 'geographer_location',
      emoji: '<:geographer:1131590372502548660>',
    },
    {
      label: 'Star Collector',
      value: 'star_collector_location',
      emoji: '<:starcollector:1131590394874962040>',
    },
    {
      label: 'Stretching Lamplighter',
      value: 'lamplighter_location',
      emoji: '<:lamplighter:1131590417360625675>',
    },
  ],
  prince_ts: [
    {
      label: 'Beckoning Ruler',
      value: 'beckoning_ruler_tree',
      emoji: '<:ruler:1131590308430348369>',
    },
    {
      label: 'Gloating Narcissist',
      value: 'narcissist_tree',
      emoji: '<:narcissist:1131590328714010684>',
    },
    {
      label: 'Slouching Soldier',
      value: 'slouching_soldier_tree',
      emoji: '<:slouching:1131590352038531143>',
    },
    {
      label: 'Sneezing Geographer',
      value: 'geographer_tree',
      emoji: '<:geographer:1131590372502548660>',
    },
    {
      label: 'Star Collector',
      value: 'star_collector_tree',
      emoji: '<:starcollector:1131590394874962040>',
    },
    {
      label: 'Stretching Lamplighter',
      value: 'lamplighter_tree',
      emoji: '<:lamplighter:1131590417360625675>',
    },
  ],
  assembly_q: [
    {
      label: 'Quest 1',
      value: 'assembly_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'assembly_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'assembly_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'assembly_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'assembly_q5',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 6',
      value: 'assembly_q6',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  assembly_s: [
    {
      label: 'Baffled Botanist',
      value: 'botanist_location',
      emoji: '<:botanist:1131591369492795503>',
    },
    {
      label: 'Chuckling Scout',
      value: 'scout_location',
      emoji: '<:scout:1131591393282904084>',
    },
    {
      label: 'Daydream Forester',
      value: 'forester_location',
      emoji: '<:forester:1131591420239675402>',
    },
    {
      label: 'Marching Adventurer',
      value: 'adventurer_location',
      emoji: '<:adventurer:1131591445057372272>',
    },
    {
      label: 'Scaredy Cadet',
      value: 'cadet_location',
      emoji: '<:cadet:1131591467429793962>',
    },
    {
      label: 'Scolding Student',
      value: 'scolding_student_location',
      emoji: '<:student:1131591495993016421>',
    },
  ],
  assembly_ts: [
    {
      label: 'Baffled Botanist',
      value: 'botanist_tree',
      emoji: '<:botanist:1131591369492795503>',
    },
    {
      label: 'Chuckling Scout',
      value: 'scout_tree',
      emoji: '<:scout:1131591393282904084>',
    },
    {
      label: 'Daydream Forester',
      value: 'forester_tree',
      emoji: '<:forester:1131591420239675402>',
    },
    {
      label: 'Marching Adventurer',
      value: 'adventurer_tree',
      emoji: '<:adventurer:1131591445057372272>',
    },
    {
      label: 'Scaredy Cadet',
      value: 'cadet_tree',
      emoji: '<:cadet:1131591467429793962>',
    },
    {
      label: 'Scolding Student',
      value: 'scolding_student_tree',
      emoji: '<:student:1131591495993016421>',
    },
  ],
  dreams_s: [
    {
      label: 'Bearhug Hermit',
      value: 'hermit_location',
      emoji: '<:hermit:1131645142898581535>',
    },
    {
      label: 'Dancing Performer',
      value: 'dancing_performer_location',
      emoji: '<:dancing:1131645163383574569>',
    },
    {
      label: 'Peeking Postman',
      value: 'postman_location',
      emoji: '<:postman:1131645181926584341>',
    },
    {
      label: 'Spinning Mentor',
      value: 'spinning_mentor_location',
      emoji: '<:mentor:1131645203548209162>',
    },
  ],
  dreams_ts: [
    {
      label: 'Bearhug Hermit',
      value: 'hermit_tree',
      emoji: '<:hermit:1131645142898581535>',
    },
    {
      label: 'Dancing Performer',
      value: 'dancing_performer_tree',
      emoji: '<:dancing:1131645163383574569>',
    },
    {
      label: 'Peeking Postman',
      value: 'postman_tree',
      emoji: '<:postman:1131645181926584341>',
    },
    {
      label: 'Spinning Mentor',
      value: 'spinning_mentor_tree',
      emoji: '<:mentor:1131645203548209162>',
    },
  ],
  prophecy_q: [
    {
      label: 'Trial of Water',
      value: 'prophecy_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Trial of Earth',
      value: 'prophecy_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Trial of Air',
      value: 'prophecy_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Trial of Fire',
      value: 'prophecy_q4',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  prophecy_s: [
    {
      label: 'Prophet of Water',
      value: 'waterprophet_location',
      emoji: '<:waterprophet:1131649574465974302>',
    },
    {
      label: 'Prophet of Earth',
      value: 'earthprophet_location',
      emoji: '<:earthprophet:1131649510045646908>',
    },
    {
      label: 'Prophet of Air',
      value: 'airprophet_location',
      emoji: '<:airprophet:1131649484347154433>',
    },
    {
      label: 'Prophet of Fire',
      value: 'fireprophet_location',
      emoji: '<:fireprophet:1131649539682603008>',
    },
  ],
  prophecy_ts: [
    {
      label: 'Prophet of Water',
      value: 'waterprophet_tree',
      emoji: '<:waterprophet:1131649574465974302>',
    },
    {
      label: 'Prophet of Earth',
      value: 'earthprophet_tree',
      emoji: '<:earthprophet:1131649510045646908>',
    },
    {
      label: 'Prophet of Air',
      value: 'airprophet_tree',
      emoji: '<:airprophet:1131649484347154433>',
    },
    {
      label: 'Prophet of Fire',
      value: 'fireprophet_tree',
      emoji: '<:fireprophet:1131649539682603008>',
    },
  ],
  sanctuary_q: [
    {
      label: 'Quest 1',
      value: 'sanctuary_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2',
      value: 'sanctuary_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3',
      value: 'sanctuary_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4',
      value: 'sanctuary_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5',
      value: 'sanctuary_q5',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 6',
      value: 'sanctuary_q6',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  sanctuary_s: [
    {
      label: 'Chill Sunbather',
      value: 'sunbather_location',
      emoji: '<:sunbather:1131649605336047676>',
    },
    {
      label: 'Grateful Shell Collector',
      value: 'shell_collector_location',
      emoji: '<:shellcollector:1131649635153363024>',
    },
    {
      label: 'Hiking Grouch',
      value: 'grouch_location',
      emoji: '<:grouch:1131649666954575982>',
    },
    {
      label: 'Jelly Whisperer',
      value: 'jellywhisperer_location',
      emoji: '<:jellywhisperer:1131649695807176895>',
    },
    {
      label: 'Rallying Thrillseeker',
      value: 'rallying_thrillseeker_location',
      emoji: '<:rallying:1131649722042564758>',
    },
    {
      label: 'Timid Bookworm',
      value: 'bookworm_location',
      emoji: '<:bookworm:1131649753420140595>',
    },
  ],
  sanctuary_ts: [
    {
      label: 'Chill Sunbather',
      value: 'sunbather_tree',
      emoji: '<:sunbather:1131649605336047676>',
    },
    {
      label: 'Grateful Shell Collector',
      value: 'shell_collector_tree',
      emoji: '<:shellcollector:1131649635153363024>',
    },
    {
      label: 'Hiking Grouch',
      value: 'grouch_tree',
      emoji: '<:grouch:1131649666954575982>',
    },
    {
      label: 'Rallying Thrillseeker',
      value: 'rallying_thrillseeker_tree',
      emoji: '<:rallying:1131649722042564758>',
    },
    {
      label: 'Jelly Whisperer',
      value: 'jellywhisperer_tree',
      emoji: '<:jellywhisperer:1131649695807176895>',
    },
    {
      label: 'Timid Bookworm',
      value: 'bookworm_tree',
      emoji: '<:bookworm:1131649753420140595>',
    },
  ],
  enchantment_q: [
    {
      label: 'Quest 1 (Red Light)',
      value: 'enchantment_q1',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 2 (Blue Light)',
      value: 'enchantment_q2',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 3 (Cyan Light)',
      value: 'enchantment_q3',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 4 (Green Light)',
      value: 'enchantment_q4',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 5 (Purple Light)',
      value: 'enchantment_q5',
      emoji: '<:quests:1131171487877963886>',
    },
    {
      label: 'Quest 6 (Orange Light)',
      value: 'enchantment_q6',
      emoji: '<:quests:1131171487877963886>',
    },
  ],
  enchantment_s: [
    {
      label: 'Crab Walker',
      value: 'crab_walker_location',
      emoji: '<:crabwalker:1131649778434981908>',
    },
    {
      label: 'Indifferent Alchemist',
      value: 'alchemist_location',
      emoji: '<:alchemist:1131649811439947796>',
    },
    {
      label: 'Nodding Muralist',
      value: 'muralist_location',
      emoji: '<:muralist:1131649861377339452>',
    },
    {
      label: 'Playfighting Herbalist',
      value: 'herbalist_location',
      emoji: '<:herbalist:1131649901814624276>',
    },
    {
      label: 'Scarecrow Farmer',
      value: 'scarecrow_farmer_location',
      emoji: '<:scarecrow:1131649929492828180>',
    },
    {
      label: 'Snoozing Carpenter',
      value: 'carpenter_location',
      emoji: '<:carpenter:1131649953505230848>',
    },
  ],
  enchantment_ts: [
    {
      label: 'Crab Walker',
      value: 'crab_walker_tree',
      emoji: '<:crabwalker:1131649778434981908>',
    },
    {
      label: 'Indifferent Alchemist',
      value: 'alchemist_tree',
      emoji: '<:alchemist:1131649811439947796>',
    },
    {
      label: 'Nodding Muralist',
      value: 'muralist_tree',
      emoji: '<:muralist:1131649861377339452>',
    },
    {
      label: 'Playfighting Herbalist',
      value: 'herbalist_tree',
      emoji: '<:herbalist:1131649901814624276>',
    },
    {
      label: 'Scarecrow Farmer',
      value: 'scarecrow_farmer_tree',
      emoji: '<:scarecrow:1131649929492828180>',
    },
    {
      label: 'Snoozing Carpenter',
      value: 'carpenter_tree',
      emoji: '<:carpenter:1131649953505230848>',
    },
  ],
  rhythm_s: [
    {
      label: 'Admiring Actor',
      value: 'actor_location',
      emoji: '<:actor:1131649977710555136>',
    },
    {
      label: 'Festival Spin Dancer',
      value: 'spin_dancer_location',
      emoji: '<:spindancer:1131650001571946616>',
    },
    {
      label: 'Respectful Pianist',
      value: 'pianist_location',
      emoji: '<:respectfulpianist:1131650056206942300>',
    },
    {
      label: 'Thoughtful Director',
      value: 'director_location',
      emoji: '<:thoughtfuldirector:1131650086422728795>',
    },
    {
      label: 'Troupe Greeter',
      value: 'greeter_location',
      emoji: '<:troupegreeter:1131650161655943228>',
    },
    {
      label: 'Troupe Juggler',
      value: 'juggler_location',
      emoji: '<:troupejuggler:1131650191754268854>',
    },
  ],
  rhythm_ts: [
    {
      label: 'Admiring Actor',
      value: 'actor_tree',
      emoji: '<:actor:1131649977710555136>',
    },
    {
      label: 'Festival Spin Dancer',
      value: 'spin_dancer_tree',
      emoji: '<:spindancer:1131650001571946616>',
    },
    {
      label: 'Respectful Pianist',
      value: 'pianist_tree',
      emoji: '<:respectfulpianist:1131650056206942300>',
    },
    {
      label: 'Thoughtful Director',
      value: 'director_tree',
      emoji: '<:thoughtfuldirector:1131650086422728795>',
    },
    {
      label: 'Troupe Greeter',
      value: 'greeter_tree',
      emoji: '<:troupegreeter:1131650161655943228>',
    },
    {
      label: 'Troupe Juggler',
      value: 'juggler_tree',
      emoji: '<:troupejuggler:1131650191754268854>',
    },
  ],
  belonging_s: [
    {
      label: 'Boogie Kid',
      value: 'boogie_kid_location',
      emoji: '<:boogiekid:1131650220317478923>',
    },
    {
      label: 'Confetti Cousin',
      value: 'confetti_cousin_location',
      emoji: '<:confettiCousin:1131650251216920656>',
    },
    {
      label: 'Hairtousle Teen',
      value: 'hairtousle_teen_location',
      emoji: '<:hairtousle:1131650432180175008>',
    },
    {
      label: 'Pleaful Parent',
      value: 'pleaful_parent_location',
      emoji: '<:pleafulparent:1131650465076101212>',
    },
    {
      label: 'Sparkler Parent',
      value: 'sparkler_parent_location',
      emoji: '<:sparklerparent:1131650491923837018>',
    },
    {
      label: 'Wise Grandparent',
      value: 'wise_grandparent_location',
      emoji: '<:wisegrandparent:1131650518792536125>',
    },
  ],
  belonging_ts: [
    {
      label: 'Boogie Kid',
      value: 'boogie_kid_tree',
      emoji: '<:boogiekid:1131650220317478923>',
    },
    {
      label: 'Confetti Cousin',
      value: 'confetti_cousin_tree',
      emoji: '<:confettiCousin:1131650251216920656>',
    },
    {
      label: 'Hairtousle Teen',
      value: 'hairtousle_teen_tree',
      emoji: '<:hairtousle:1131650432180175008>',
    },
    {
      label: 'Pleaful Parent',
      value: 'pleaful_parent_tree',
      emoji: '<:pleafulparent:1131650465076101212>',
    },
    {
      label: 'Sparkler Parent',
      value: 'sparkler_parent_tree',
      emoji: '<:sparklerparent:1131650491923837018>',
    },
    {
      label: 'Wise Grandparent',
      value: 'wise_grandparent_tree',
      emoji: '<:wisegrandparent:1131650518792536125>',
    },
  ],
  lightseekers_s: [
    {
      label: 'Crab Whisperer',
      value: 'crab_whisperer_location',
      emoji: '<:crabWhisperer:1153511432349032508>',
    },
    {
      label: 'Doublefive Light Catcher',
      value: 'light_catcher_location',
      emoji: '<:doublefiveCatcher:1153511455132496032>',
    },
    {
      label: 'Laidback Pioneer',
      value: 'laidback_location',
      emoji: '<:laidbackPioneer:1153511482949107765>',
    },
    {
      label: 'Piggyback Lightseeker',
      value: 'piggyback_location',
      emoji: '<:piggyback:1153511511701065738>',
    },
    {
      label: 'Shushing Light Scholar',
      value: 'light_scholar_location',
      emoji: '<:shushingscholar:1153511408537980969>',
    },
    {
      label: 'Twirling Champion',
      value: 'twirling_champion_location',
      emoji: '<:twirlingChampion:1153511535499550771>',
    },
  ],
  lightseekers_ts: [
    {
      label: 'Crab Whisperer',
      value: 'crab_whisperer_tree',
      emoji: '<:crabWhisperer:1153511432349032508>',
    },
    {
      label: 'Doublefive Light Catcher',
      value: 'light_catcher_tree',
      emoji: '<:doublefiveCatcher:1153511455132496032>',
    },
    {
      label: 'Laidback Pioneer',
      value: 'laidback_tree',
      emoji: '<:laidbackPioneer:1153511482949107765>',
    },
    {
      label: 'Piggyback Lightseeker',
      value: 'piggyback_tree',
      emoji: '<:piggyback:1153511511701065738>',
    },
    {
      label: 'Shushing Light Scholar',
      value: 'light_scholar_tree',
      emoji: '<:shushingscholar:1153511408537980969>',
    },
    {
      label: 'Twirling Champion',
      value: 'twirling_champion_tree',
      emoji: '<:twirlingChampion:1153511535499550771>',
    },
  ],
  gratitude_s: [
    {
      label: 'Greeting Shaman',
      value: 'shaman_location',
      emoji: '<:greetingShaman:1153511559490965664>',
    },
    {
      label: 'Leaping Dancer',
      value: 'leaping_location',
      emoji: '<:leepingDancer:1153511583532716032>',
    },
    {
      label: 'Provoking Performer',
      value: 'provoking_location',
      emoji: '<:provokingProtector:1153511606475554906>',
    },
    {
      label: 'Saluting Protector',
      value: 'saluting_location',
      emoji: '<:salutingProtector:1153511628596334723>',
    },
    {
      label: 'Sassy Drifter',
      value: 'sassy_location',
      emoji: '<:sassyDrifter:1153511651522396322>',
    },
    {
      label: 'Stretching Guru',
      value: 'stretching_location',
      emoji: '<:stretchingGuru:1153511673949343805>',
    },
  ],
  gratitude_ts: [
    {
      label: 'Greeting Shaman',
      value: 'shaman_tree',
      emoji: '<:greetingShaman:1153511559490965664>',
    },
    {
      label: 'Leaping Dancer',
      value: 'leaping_tree',
      emoji: '<:leepingDancer:1153511583532716032>',
    },
    {
      label: 'Provoking Performer',
      value: 'provoking_tree',
      emoji: '<:provokingProtector:1153511606475554906>',
    },
    {
      label: 'Saluting Protector',
      value: 'saluting_tree',
      emoji: '<:salutingProtector:1153511628596334723>',
    },
    {
      label: 'Sassy Drifter',
      value: 'sassy_tree',
      emoji: '<:sassyDrifter:1153511651522396322>',
    },
    {
      label: 'Stretching Guru',
      value: 'stretching_tree',
      emoji: '<:stretchingGuru:1153511673949343805>',
    },
  ],
};

module.exports = { firstChoices, secondChoices, thirdChoices };
