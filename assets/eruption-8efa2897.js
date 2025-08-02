const y=100,e={normal:{use_after:[{name:"earthquake",url:"https://pokeapi.co/api/v2/move/89/"},{name:"endure",url:"https://pokeapi.co/api/v2/move/203/"},{name:"sunny-day",url:"https://pokeapi.co/api/v2/move/241/"}],use_before:null},super:{use_after:null,use_before:null}},a={url:"https://pokeapi.co/api/v2/contest-effect/26/"},o={name:"beauty",url:"https://pokeapi.co/api/v2/contest-type/2/"},p={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},n=null,t=[],r=[{effect:"Inflicts regular damage.  Power increases with the user's remaining HP and is given by `150 * HP / max HP`, to a maximum of 150 when the user has full HP.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts more damage when the user has more HP remaining, with a maximum of 150 power."}],s=[{flavor_text:`The higher the user’s HP,
the more damage caused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`The higher the user’s HP,
the more damage caused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The higher the
user’s HP, the more
powerful this
attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user attacks in
an explosive fury.
The lower the user’s
HP, the less powerful
this attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user attacks in
an explosive fury.
The lower the user’s
HP, the less powerful
this attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user attacks in
an explosive fury.
The lower the user’s
HP, the less powerful
this attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque
est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks the opposing team with
explosive fury. The lower the user’s HP,
the less powerful this attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks the opposing team with
explosive fury. The lower the user’s HP,
the less powerful this attack becomes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Explosiver Angriff. Je höher die KP des Anwenders
sind, desto mehr Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de
PS del usuario, menos daño hará el ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user attacks opposing Pokémon with
explosive fury. The lower the user’s HP,
the lower the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Explosiver Angriff. Je höher die KP des Anwenders
sind, desto mehr Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de 
PS del usuario, menos daño hará el ataque. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user attacks opposing Pokémon with
explosive fury. The lower the user’s HP,
the lower the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。　じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`爆發怒火攻擊對手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Explosiver Angriff. Je höher die KP des Anwenders
sind, desto mehr Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de 
PS del usuario, menos daño hará el ataque. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks opposing Pokémon with explosive
fury. The lower the user’s HP, the lower the
move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。　自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`爆发怒火攻击对手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。　じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`爆發怒火攻擊對手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Explosiver Angriff. Je höher die KP des Anwenders
sind, desto mehr Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de 
PS del usuario, menos daño hará el ataque. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks opposing Pokémon with explosive
fury. The lower the user’s HP, the lower the
move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。　自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`爆发怒火攻击对手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。　じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`爆發怒火攻擊對手。
自己的HP越少，
招式的威力越小。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas et moins l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Explosiver Angriff. Je höher die KP des Anwenders
sind, desto mehr Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de 
PS del usuario, menos daño hará el ataque. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks opposing Pokémon with explosive
fury. The lower the user’s HP, the lower the
move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。　自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`爆发怒火攻击对手。
自己的HP越少，
招式的威力越小。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`いかりを　ばくはつ　させて　あいてを
こうげきする。　じぶんの　ＨＰが　すくない
ほど　わざの　いりょくは　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`분노를 폭발시켜 상대를
공격한다. 자신의 HP가
적을수록 기술의 위력이 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`爆發怒火攻擊對手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur laisse exploser sa colère.
Plus ses PV sont bas, moins l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Explosiver Angriff gegen gegnerische Pokémon.
Je höher die KP des Anwenders sind, desto mehr
Schaden wird angerichtet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Furia explosiva. Cuanto menor sea el número de PS del
usuario, menos daño hará el ataque. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacco impetuoso ed esplosivo la cui potenza
è proporzionale ai PS di chi lo usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks opposing Pokémon with explosive
fury. The lower the user’s HP, the lower the
move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`怒りを　爆発させて　相手を
攻撃する。　自分の　ＨＰが
少ないほど　技の　威力は　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`爆发怒火攻击对手。
自己的ＨＰ越少，
招式的威力越小。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},u=284,l=[{name:"cyndaquil",url:"https://pokeapi.co/api/v2/pokemon/155/"},{name:"quilava",url:"https://pokeapi.co/api/v2/pokemon/156/"},{name:"typhlosion",url:"https://pokeapi.co/api/v2/pokemon/157/"},{name:"entei",url:"https://pokeapi.co/api/v2/pokemon/244/"},{name:"camerupt",url:"https://pokeapi.co/api/v2/pokemon/323/"},{name:"torkoal",url:"https://pokeapi.co/api/v2/pokemon/324/"},{name:"groudon",url:"https://pokeapi.co/api/v2/pokemon/383/"},{name:"groudon-primal",url:"https://pokeapi.co/api/v2/pokemon/10078/"},{name:"camerupt-mega",url:"https://pokeapi.co/api/v2/pokemon/10087/"},{name:"typhlosion-hisui",url:"https://pokeapi.co/api/v2/pokemon/10233/"}],g=[],v={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},h="eruption",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ふんか"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"분화"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"噴火"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Éruption"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Eruption"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Estallido"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Eruzione"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Eruption"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ふんか"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"喷火"}],m=[],k=150,_=5,f=0,d=[],x={url:"https://pokeapi.co/api/v2/super-contest-effect/18/"},w={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},P={name:"fire",url:"https://pokeapi.co/api/v2/type/10/"},H={accuracy:100,contest_combos:e,contest_effect:a,contest_type:o,damage_class:p,effect_chance:n,effect_changes:t,effect_entries:r,flavor_text_entries:s,generation:i,id:u,learned_by_pokemon:l,machines:g,meta:v,name:h,names:c,past_values:m,power:k,pp:_,priority:f,stat_changes:d,super_contest_effect:x,target:w,type:P};export{y as accuracy,e as contest_combos,a as contest_effect,o as contest_type,p as damage_class,H as default,n as effect_chance,t as effect_changes,r as effect_entries,s as flavor_text_entries,i as generation,u as id,l as learned_by_pokemon,g as machines,v as meta,h as name,c as names,m as past_values,k as power,_ as pp,f as priority,d as stat_changes,x as super_contest_effect,w as target,P as type};
