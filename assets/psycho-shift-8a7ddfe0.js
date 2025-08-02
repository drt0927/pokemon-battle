const b=100,y=null,w=null,e={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},a={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},o=null,p=[],t=[{effect:"If the user has a major status effect and the target does not, the user's status is transferred to the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Transfers the user's major status effect to the target."}],n=[{flavor_text:`Using its psychic
power of suggestion,
the user transfers
its status problems
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`Using its psychic
power of suggestion,
the user transfers
its status problems
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`Using its psychic
power of suggestion,
the user transfers
its status problems
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur transfère ses problèmes de
statut à l’ennemi grâce à son pouvoir
de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Using its psychic power of suggestion,
the user transfers its status problems
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Using its psychic power of suggestion,
the user transfers its status problems
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut à
l’ennemi grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Using its psychic power of suggestion,
the user transfers its status conditions
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut à
l’ennemi grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus 
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Using its psychic power of suggestion,
the user transfers its status conditions
to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用超能力施加暗示，
將自己的異常狀態
轉移給對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut
à l’ennemi grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus 
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Using its psychic power of suggestion, the user
transfers its status conditions to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`利用超能力施以暗示，
从而将自己受到的异常状态
转移给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用超能力施加暗示，
將自己的異常狀態
轉移給對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut
à l’ennemi grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus 
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Using its psychic power of suggestion, the user
transfers its status conditions to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`利用超能力施以暗示，
从而将自己受到的异常状态
转移给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用超能力施加暗示，
將自己的異常狀態
轉移給對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut
à l’ennemi grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus 
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Using its psychic power of suggestion, the user
transfers its status conditions to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`利用超能力施以暗示，
从而将自己受到的异常状态
转移给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ちょうのうりょくで　あんじを　かけて
じぶんの　うけている　じょうたい
いじょうを　あいてに　うつす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`초능력으로 암시를 걸어서
자신에게 걸려 있는 상태 이상을
상대에게 옮긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用超能力施加暗示，
將自己的異常狀態
轉移給對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur transfère ses problèmes de statut à l’ennemi
grâce à son pouvoir de suggestion.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender nutzt seine Suggestivkräfte, um eigene
Statusprobleme auf das Ziel zu transferieren.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Usa su poder mental para transferir al objetivo sus 
problemas de estado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Con la forza psichica e la suggestione, chi la usa
può trasferire i suoi problemi di stato al Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Using its psychic power of suggestion, the user
transfers its status conditions to the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`超能力で　暗示を　かけて
自分の　受けている　状態異常を
相手に　うつす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`利用超能力施以暗示，
从而将自己受到的异常状态
转移给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},s=375,i=[{name:"abra",url:"https://pokeapi.co/api/v2/pokemon/63/"},{name:"hoothoot",url:"https://pokeapi.co/api/v2/pokemon/163/"},{name:"noctowl",url:"https://pokeapi.co/api/v2/pokemon/164/"},{name:"togepi",url:"https://pokeapi.co/api/v2/pokemon/175/"},{name:"natu",url:"https://pokeapi.co/api/v2/pokemon/177/"},{name:"xatu",url:"https://pokeapi.co/api/v2/pokemon/178/"},{name:"murkrow",url:"https://pokeapi.co/api/v2/pokemon/198/"},{name:"spinda",url:"https://pokeapi.co/api/v2/pokemon/327/"},{name:"latias",url:"https://pokeapi.co/api/v2/pokemon/380/"},{name:"latios",url:"https://pokeapi.co/api/v2/pokemon/381/"},{name:"deoxys-normal",url:"https://pokeapi.co/api/v2/pokemon/386/"},{name:"cresselia",url:"https://pokeapi.co/api/v2/pokemon/488/"},{name:"woobat",url:"https://pokeapi.co/api/v2/pokemon/527/"},{name:"sigilyph",url:"https://pokeapi.co/api/v2/pokemon/561/"},{name:"deoxys-attack",url:"https://pokeapi.co/api/v2/pokemon/10001/"},{name:"deoxys-defense",url:"https://pokeapi.co/api/v2/pokemon/10002/"},{name:"deoxys-speed",url:"https://pokeapi.co/api/v2/pokemon/10003/"},{name:"latias-mega",url:"https://pokeapi.co/api/v2/pokemon/10062/"},{name:"latios-mega",url:"https://pokeapi.co/api/v2/pokemon/10063/"},{name:"articuno-galar",url:"https://pokeapi.co/api/v2/pokemon/10169/"},{name:"indeedee-female",url:"https://pokeapi.co/api/v2/pokemon/10186/"}],u=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="psycho-shift",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"サイコシフト"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"사이코시프트"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"精神轉移"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Échange Psy"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Psybann"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Psicocambio"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Psicotransfer"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Psycho Shift"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"サイコシフト"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"精神转移"}],c=[{accuracy:90,effect_chance:null,effect_entries:[],power:null,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],m=null,h=10,k=0,f=[],_={url:"https://pokeapi.co/api/v2/super-contest-effect/16/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"psychic",url:"https://pokeapi.co/api/v2/type/14/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:t,flavor_text_entries:n,generation:r,id:s,learned_by_pokemon:i,machines:u,meta:l,name:g,names:v,past_values:c,power:m,pp:h,priority:k,stat_changes:f,super_contest_effect:_,target:d,type:x};export{b as accuracy,y as contest_combos,w as contest_effect,e as contest_type,a as damage_class,z as default,o as effect_chance,p as effect_changes,t as effect_entries,n as flavor_text_entries,r as generation,s as id,i as learned_by_pokemon,u as machines,l as meta,g as name,v as names,c as past_values,m as power,h as pp,k as priority,f as stat_changes,_ as super_contest_effect,d as target,x as type};
