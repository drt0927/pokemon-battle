const x=100,b=null,y=null,H=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Inflicts regular damage.  If the target has already moved this turn, its ability is nullified.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Nullifies the target's ability if it moves earlier."}],t=[{flavor_text:`ダメージを　あたえた　あいてが
すでに　こうどうを　おえて　いたら
あいての　とくせいを　けして　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`데미지를 준 상대가
이미 행동을 끝냈다면
상대의 특성을 없애버린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`如果攻擊的對手在該回合
已經結束行動，
對手的特性就會被消除。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`La cible subit des dégâts et, si elle a déjà agi
à ce tour, elle perd aussi son talent.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Hat das Pokémon, das durch diese Attacke Schaden
genommen hat, in dieser Runde bereits gehandelt,
verliert es seine Fähigkeit.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Inflige daño al rival, y si este ya ha hecho uso de
algún movimiento, pierde su habilidad.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio subisce dei danni e, se ha già agito
nel turno, perde la sua abilità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`If the Pokémon the user has inflicted damage on
have already used their moves, this move eliminates
the effect of the target’s Ability.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ダメージを　与えた　相手が
すでに　行動を　終えていたら
相手の　特性を　消してしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`如果给予过伤害的对手
已经结束行动，
其特性就会被消除。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ダメージを　あたえた　あいてが
すでに　こうどうを　おえて　いたら
あいての　とくせいを　けして　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`데미지를 준 상대가
이미 행동을 끝냈다면
상대의 특성을 없애버린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`如果攻擊的對手在該回合
已經結束行動，
對手的特性就會被消除。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`La cible subit des dégâts et, si elle a déjà agi
à ce tour, elle perd aussi son talent.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Hat das Pokémon, das durch diese Attacke Schaden
genommen hat, in dieser Runde bereits gehandelt,
verliert es seine Fähigkeit.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Inflige daño al rival, y si este ya ha hecho uso de
algún movimiento, pierde su habilidad.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio subisce dei danni e, se ha già agito
nel turno, perde la sua abilità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`If the Pokémon the user has inflicted damage on
have already used their moves, this move eliminates
the effect of the target’s Ability.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ダメージを　与えた　相手が
すでに　行動を　終えていたら
相手の　特性を　消してしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`如果给予过伤害的对手
已经结束行动，
其特性就会被消除。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ダメージを　あたえた　あいてが
すでに　こうどうを　おえて　いたら
あいての　とくせいを　けして　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`데미지를 준 상대가
이미 행동을 끝냈다면
상대의 특성을 없애버린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`如果攻擊的對手在該回合
已經結束行動，
對手的特性就會被消除。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`La cible subit des dégâts et, si elle a déjà agi à ce tour,
elle perd aussi son talent.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Hat das Pokémon, das durch diese Attacke Schaden
genommen hat, in dieser Runde bereits gehandelt,
verliert es seine Fähigkeit.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Inflige daño al rival, y si este ya ha hecho uso de
algún movimiento, pierde su habilidad.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio subisce dei danni e, se ha già agito
nel turno, perde la sua abilità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`If the Pokémon the user has inflicted damage on
have already used their moves, this move eliminates
the effect of the target’s Ability.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ダメージを　与えた　相手が
すでに　行動を　終えていたら
相手の　特性を　消してしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`如果给予过伤害的对手
已经结束行动，
其特性就会被消除。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ダメージを　あたえた　あいてが
すでに　こうどうを　おえて　いたら
あいての　とくせいを　けして　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`데미지를 준 상대가
이미 행동을 끝냈다면
상대의 특성을 없애버린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`如果攻擊的對手在該回合
已經結束行動，
對手的特性就會被消除。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`La cible subit des dégâts et, si elle a déjà agi à ce tour,
elle perd aussi son talent.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Hat das gegnerische Pokémon, das durch diese Attacke
Schaden genommen hat, in dieser Runde bereits
gehandelt, verliert es seine Fähigkeit.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Inflige daño al rival, y si este ya ha hecho uso de algún
movimiento, pierde su habilidad.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il bersaglio subisce dei danni e, se ha già agito
nel turno, perde la sua abilità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`If the Pokémon the user has inflicted damage on
have already used their moves, this move eliminates
the effect of the target’s Ability.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`ダメージを　与えた　相手が
すでに　行動を　終えていたら
相手の　特性を　消してしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`如果给予过伤害的对手
已经结束行动，
其特性就会被消除。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},i=687,r=[{name:"zygarde-50",url:"https://pokeapi.co/api/v2/pokemon/718/"},{name:"zygarde-10-power-construct",url:"https://pokeapi.co/api/v2/pokemon/10118/"},{name:"zygarde-50-power-construct",url:"https://pokeapi.co/api/v2/pokemon/10119/"},{name:"zygarde-complete",url:"https://pokeapi.co/api/v2/pokemon/10120/"},{name:"zygarde-10",url:"https://pokeapi.co/api/v2/pokemon/10181/"}],s=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="core-enforcer",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"コアパニッシャー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"코어퍼니셔"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"核心懲罰者"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Sanction Suprême"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Sanktionskern"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Núcleo Castigo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Nucleocastigo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Core Enforcer"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"コアパニッシャー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"核心惩罚者"}],v=[],c=100,h=10,m=0,k=[],d=null,_={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},f={name:"dragon",url:"https://pokeapi.co/api/v2/type/16/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:i,learned_by_pokemon:r,machines:s,meta:l,name:u,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:d,target:_,type:f};export{x as accuracy,b as contest_combos,y as contest_effect,H as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,i as id,r as learned_by_pokemon,s as machines,l as meta,u as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,d as super_contest_effect,_ as target,f as type};
