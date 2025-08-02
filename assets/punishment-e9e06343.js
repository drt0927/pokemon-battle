const w=100,b=null,y=null,e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,p=[],t=[{effect:"Inflicts regular damage.  Power starts at 60 and is increased by 20 for every stage any of the target's stats has been raised, capping at 200.  Accuracy and evasion modifiers do not increase this move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Power increases against targets with more raised stats, up to a maximum of 200."}],n=[{flavor_text:`This attack’s power
increases the more
the foe has powered
up with stat changes.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`This attack’s power
increases the more
the foe has powered
up with stat changes.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`This attack’s power
increases the more
the foe has powered
up with stat changes.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Plus l’ennemi a utilisé des augmentations
de stats et plus cette capacité est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack’s power increases
the more the target has powered
up with stat changes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack’s power increases
the more the target has powered
up with stat changes.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`のうりょく　へんかで
あいてが　パワーアップ　しているほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`능력 변화로
상대가 파워업한 만큼
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Plus l’ennemi a utilisé d’augmentations de stats
et plus cette capacité est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Je stärker das Ziel durch Statusveränderungen ist,
desto stärker wirkt diese Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`La fuerza del ataque aumenta cuanto más se ha
fortalecido el objetivo con cambios de
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Questa mossa diventa più potente ogni volta che
il bersaglio aumenta le proprie statistiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The more the target has powered
up with stat changes, the greater
the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`能力変化で
相手が　パワーアップ　しているほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`のうりょく　へんかで
あいてが　パワーアップ　しているほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`능력 변화로
상대가 파워업한 만큼
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Plus l’ennemi a utilisé d’augmentations de stats
et plus cette capacité est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Je stärker das Ziel durch Statusveränderungen ist,
desto stärker wirkt diese Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`La fuerza del ataque aumenta cuanto más se
ha fortalecido el objetivo con cambios de
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Questa mossa diventa più potente ogni volta che
il bersaglio aumenta le proprie statistiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The more the target has powered
up with stat changes, the greater
the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`能力変化で
相手が　パワーアップ　しているほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`のうりょく　へんかで
あいてが　パワーアップ　しているほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`능력 변화로
상대가 파워업한 만큼
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`對手的能力因為
能力變化而提高得越多，
招式的威力就越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Plus l’ennemi a utilisé d’augmentations de stats
et plus cette capacité est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Je stärker das Ziel durch Statusveränderungen ist,
desto stärker wirkt diese Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`La fuerza del ataque aumenta cuanto más se
ha fortalecido el objetivo con cambios de
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Questa mossa diventa più potente ogni volta che
il bersaglio aumenta le proprie statistiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The more the target has powered up with stat
changes, the greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`能力変化で
相手が　パワーアップ　しているほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`根据能力变化，
对手提高的力量越大，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`のうりょく　へんかで
あいてが　パワーアップ　しているほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`능력 변화로
상대가 파워업한 만큼
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`對手的能力因為
能力變化而提高得越多，
招式的威力就越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Plus l’ennemi a utilisé d’augmentations de stats
et plus cette capacité est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Je stärker das Ziel durch Statusveränderungen ist,
desto stärker wirkt diese Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`La fuerza del ataque aumenta cuanto más se
ha fortalecido el objetivo con cambios de
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Questa mossa diventa più potente ogni volta che
il bersaglio aumenta le proprie statistiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The more the target has powered up with stat
changes, the greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`能力変化で
相手が　パワーアップ　しているほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`根据能力变化，
对手提高的力量越大，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`のうりょく　へんかで
あいてが　パワーアップ　しているほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`능력 변화로
상대가 파워업한 만큼
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`對手的能力因為
能力變化而提高得越多，
招式的威力就越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Plus l’ennemi a utilisé d’augmentations de stats
et plus cette capacité est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Je stärker das Ziel durch Statusveränderungen ist,
desto stärker wirkt diese Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`La fuerza del ataque aumenta cuanto más se
ha fortalecido el objetivo con cambios de
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Questa mossa diventa più potente ogni volta che
il bersaglio aumenta le proprie statistiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The more the target has powered up with stat
changes, the greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`能力変化で
相手が　パワーアップ　しているほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`根据能力变化，
对手提高的力量越大，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
おもいだすことが　できなくなりますが
わざを　わすれることを　おすすめします`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`사용할 수 없는 기술입니다.
다시 배우게 할 수 없지만
기술을 잊게 하는 것을 권장합니다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`無法使用此招式。
雖然忘記後將無法再想起來，
但還是建議忘記此招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Cette capacité ne peut pas être utilisée.
Il est recommandé de l’oublier, même s’il sera
impossible de se la remémorer une fois oubliée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Diese Attacke kann nicht eingesetzt werden. Du solltest
dein Pokémon sie vergessen lassen. Beachte aber,
dass es sich danach nicht wieder an sie erinnern kann.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Este movimiento no se puede usar, por lo que sería
mejor olvidarlo, aunque eso implique que no se pueda
recordar posteriormente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Questa mossa non può essere usata.
È consigliabile farla dimenticare al Pokémon. Tuttavia,
una volta dimenticata, non potrà più essere ricordata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`This move can’t be used.
It’s recommended that this move is forgotten.
Once forgotten, this move can’t be remembered.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`この技は　使えません
思い出すことが　できなくなりますが
技を　忘れることを　おすすめします`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`无法使用这个招式。
虽然忘记之后就再也想不起来了，
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=386,s=[{name:"meowth",url:"https://pokeapi.co/api/v2/pokemon/52/"},{name:"mankey",url:"https://pokeapi.co/api/v2/pokemon/56/"},{name:"primeape",url:"https://pokeapi.co/api/v2/pokemon/57/"},{name:"igglybuff",url:"https://pokeapi.co/api/v2/pokemon/174/"},{name:"murkrow",url:"https://pokeapi.co/api/v2/pokemon/198/"},{name:"sneasel",url:"https://pokeapi.co/api/v2/pokemon/215/"},{name:"houndour",url:"https://pokeapi.co/api/v2/pokemon/228/"},{name:"miltank",url:"https://pokeapi.co/api/v2/pokemon/241/"},{name:"lugia",url:"https://pokeapi.co/api/v2/pokemon/249/"},{name:"ho-oh",url:"https://pokeapi.co/api/v2/pokemon/250/"},{name:"slaking",url:"https://pokeapi.co/api/v2/pokemon/289/"},{name:"sableye",url:"https://pokeapi.co/api/v2/pokemon/302/"},{name:"mawile",url:"https://pokeapi.co/api/v2/pokemon/303/"},{name:"seviper",url:"https://pokeapi.co/api/v2/pokemon/336/"},{name:"absol",url:"https://pokeapi.co/api/v2/pokemon/359/"},{name:"infernape",url:"https://pokeapi.co/api/v2/pokemon/392/"},{name:"stunky",url:"https://pokeapi.co/api/v2/pokemon/434/"},{name:"weavile",url:"https://pokeapi.co/api/v2/pokemon/461/"},{name:"arceus",url:"https://pokeapi.co/api/v2/pokemon/493/"},{name:"zorua",url:"https://pokeapi.co/api/v2/pokemon/570/"},{name:"zoroark",url:"https://pokeapi.co/api/v2/pokemon/571/"},{name:"vullaby",url:"https://pokeapi.co/api/v2/pokemon/629/"},{name:"mandibuzz",url:"https://pokeapi.co/api/v2/pokemon/630/"},{name:"landorus-incarnate",url:"https://pokeapi.co/api/v2/pokemon/645/"},{name:"tsareena",url:"https://pokeapi.co/api/v2/pokemon/763/"},{name:"type-null",url:"https://pokeapi.co/api/v2/pokemon/772/"},{name:"silvally",url:"https://pokeapi.co/api/v2/pokemon/773/"},{name:"landorus-therian",url:"https://pokeapi.co/api/v2/pokemon/10021/"},{name:"mawile-mega",url:"https://pokeapi.co/api/v2/pokemon/10052/"},{name:"absol-mega",url:"https://pokeapi.co/api/v2/pokemon/10057/"},{name:"sableye-mega",url:"https://pokeapi.co/api/v2/pokemon/10066/"},{name:"meowth-alola",url:"https://pokeapi.co/api/v2/pokemon/10107/"}],u=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="punishment",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"おしおき"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"혼내기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"懲罰"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Punition"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Strafattacke"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Castigo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Punizione"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Punishment"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"おしおき"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"惩罚"}],c=[{accuracy:null,effect_chance:null,effect_entries:[],power:60,pp:null,type:null,version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}}],m=null,h=5,k=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/23/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:t,flavor_text_entries:n,generation:r,id:i,learned_by_pokemon:s,machines:u,meta:l,name:g,names:v,past_values:c,power:m,pp:h,priority:k,stat_changes:_,super_contest_effect:d,target:f,type:x};export{w as accuracy,b as contest_combos,y as contest_effect,e as contest_type,a as damage_class,z as default,o as effect_chance,p as effect_changes,t as effect_entries,n as flavor_text_entries,r as generation,i as id,s as learned_by_pokemon,u as machines,l as meta,g as name,v as names,c as past_values,m as power,h as pp,k as priority,_ as stat_changes,d as super_contest_effect,f as target,x as type};
