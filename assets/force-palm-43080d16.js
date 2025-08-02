const x=100,w=null,b=null,a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=30,p=[],n=[{effect:"Inflicts regular damage.  Has a 30% chance to paralyze the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 30% chance to paralyze the target."}],t=[{flavor_text:`The foe is attacked
with a shock wave.
It may also leave the
target paralyzed.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is attacked
with a shock wave.
It may also leave the
target paralyzed.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is attacked
with a shock wave.
It may also leave the
target paralyzed.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with a shock wave.
It may also leave the target
with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with a shock wave.
It may also leave the target
with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataca al objetivo con una onda de choque y
puede llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is attacked with a shock wave.
This may also leave the target
with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataca al objetivo con una onda de choque y puede 
llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is attacked with a shock wave.
This may also leave the target
with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手的身體
發出衝擊波進行攻擊。
有時會讓對手陷入麻痺狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca al objetivo con una onda de choque y puede 
llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is attacked with a shock wave. This may
also leave the target with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向对手的身体
发出冲击波进行攻击。
有时会让对手陷入麻痹状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手的身體
發出衝擊波進行攻擊。
有時會讓對手陷入麻痺狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca al objetivo con una onda de choque y puede 
llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is attacked with a shock wave. This may
also leave the target with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向对手的身体
发出冲击波进行攻击。
有时会让对手陷入麻痹状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手的身體
發出衝擊波進行攻擊。
有時會讓對手陷入麻痺狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca al objetivo con una onda de choque y puede 
llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is attacked with a shock wave. This may
also leave the target with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向对手的身体
发出冲击波进行攻击。
有时会让对手陷入麻痹状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいての　からだに
しょうげきはを　あてて　こうげきする。
まひ　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대의 몸에
충격파를 부딪쳐 공격한다.
마비 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向對手的身體
發出衝擊波進行攻擊。
有時會讓對手陷入麻痺狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Une onde de choc frappe l’ennemi.
Peut aussi paralyser la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Das Ziel wird mit einer Schockwelle angegriffen,
die es eventuell paralysiert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca al objetivo con una onda de choque y puede 
llegar a paralizarlo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca con un’onda d’urto che
può anche paralizzare il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The target is attacked with a shock wave. This may
also leave the target with paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　体に
衝撃波を　当てて　攻撃する。
まひ状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向对手的身体
发出冲击波进行攻击。
有时会让对手陷入麻痹状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The target is attacked with a shock wave. This may also leave the target with paralysis.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The target is attacked with a shock wave. This may also leave the target with paralysis.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=395,l=[{name:"breloom",url:"https://pokeapi.co/api/v2/pokemon/286/"},{name:"makuhita",url:"https://pokeapi.co/api/v2/pokemon/296/"},{name:"hariyama",url:"https://pokeapi.co/api/v2/pokemon/297/"},{name:"meditite",url:"https://pokeapi.co/api/v2/pokemon/307/"},{name:"medicham",url:"https://pokeapi.co/api/v2/pokemon/308/"},{name:"riolu",url:"https://pokeapi.co/api/v2/pokemon/447/"},{name:"lucario",url:"https://pokeapi.co/api/v2/pokemon/448/"},{name:"timburr",url:"https://pokeapi.co/api/v2/pokemon/532/"},{name:"mienfoo",url:"https://pokeapi.co/api/v2/pokemon/619/"},{name:"mienshao",url:"https://pokeapi.co/api/v2/pokemon/620/"},{name:"stufful",url:"https://pokeapi.co/api/v2/pokemon/759/"},{name:"marshadow",url:"https://pokeapi.co/api/v2/pokemon/802/"},{name:"iron-hands",url:"https://pokeapi.co/api/v2/pokemon/992/"},{name:"okidogi",url:"https://pokeapi.co/api/v2/pokemon/1014/"},{name:"medicham-mega",url:"https://pokeapi.co/api/v2/pokemon/10054/"}],u=[],s={ailment:{name:"paralysis",url:"https://pokeapi.co/api/v2/move-ailment/1/"},ailment_chance:30,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="force-palm",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"はっけい"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"발경"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"發勁"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Forte-Paume"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Kraftwelle"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Palmeo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Palmoforza"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Force Palm"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"はっけい"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"发劲"}],c=[],h=60,m=10,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/18/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"fighting",url:"https://pokeapi.co/api/v2/type/2/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:a,damage_class:e,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:r,id:i,learned_by_pokemon:l,machines:u,meta:s,name:g,names:v,past_values:c,power:h,pp:m,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:y};export{x as accuracy,w as contest_combos,b as contest_effect,a as contest_type,e as damage_class,z as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,r as generation,i as id,l as learned_by_pokemon,u as machines,s as meta,g as name,v as names,c as past_values,h as power,m as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,y as type};
