const b=100,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/4/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=20,p=[],t=[{effect:"Inflicts regular damage.  Has a 20% chance to confuse the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 20% chance to confuse the target."}],r=[{flavor_text:"Rítmicos puñetazos que pueden causar confusión. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`An attack that may
cause confusion.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`An attack that may
cause confusion.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A rhythmic punch that may
confuse the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A rhythmic punch that may
confuse the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is hit with
a rhythmic punch
that may leave it
confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is hit with a
rhythmically launched
punch that may also
leave it confused.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is hit with
rhythmically launched
punches that may also
leave it confused.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is hit with
rhythmically launched
punches that may also
leave it confused.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un enchaînement de coups de poing
cadencés. Peut aussi rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with rhythmically
launched punches that may also
leave it confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with rhythmically
launched punches that may also
leave it confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`リズミカルに　パンチを　くりだして
あいてを　こうげきする。
こんらん　させることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`리드미컬한 펀치를 날려
상대를 공격한다.
혼란시킬 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un enchaînement de coups de poing cadencés
frappe l’ennemi. Peut aussi le rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Rhythmische Schläge, die das Ziel
verwirren können.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Rítmicos puñetazos que pueden causar confusión.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con una sequenza di pugni
che può anche confonderlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is hit with rhythmically
launched punches. This may also
leave the target confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`リズミカルに　パンチを　くりだして
相手を　攻撃する。
混乱させることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`リズミカルに　パンチを　くりだして
あいてを　こうげきする。
こんらん　させることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`리드미컬한 펀치를 날려
상대를 공격한다.
혼란시킬 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un enchaînement de coups de poing cadencés
frappe l’ennemi. Peut aussi le rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Rhythmische Schläge, die das Ziel
verwirren können.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Rítmicos puñetazos que pueden causar confusión. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con una sequenza di pugni
che può anche confonderlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is hit with rhythmically
launched punches. This may also
leave the target confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`リズミカルに　パンチを　くりだして
相手を　攻撃する。
混乱させることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`リズミカルに　パンチを　くりだして
あいてを　こうげきする。
こんらん　させることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`리드미컬한 펀치를 날려
상대를 공격한다.
혼란시킬 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`有節奏地出拳攻擊對手。
有時會使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un enchaînement de coups de poing cadencés
frappe l’ennemi. Peut aussi le rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"Rhythmische Schläge, die das Ziel verwirren können.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con una sequenza di pugni
che può anche confonderlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is hit with rhythmically launched
punches. This may also leave the target confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`リズミカルに　パンチを　くりだして
相手を　攻撃する。
混乱させることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`有节奏地出拳攻击对手。
有时会使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`リズミカルに　パンチを　くりだして
あいてを　こうげきする。
こんらん　させることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`리드미컬한 펀치를 날려
상대를 공격한다.
혼란시킬 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`有節奏地出拳攻擊對手。
有時會使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un enchaînement de coups de poing cadencés
frappe l’ennemi. Peut aussi le rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Rhythmische Schläge, die das Ziel verwirren können.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Rítmicos puñetazos que pueden causar confusión. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con una sequenza di pugni
che può anche confonderlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is hit with rhythmically launched
punches. This may also leave the target confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`リズミカルに　パンチを　くりだして
相手を　攻撃する。
混乱させることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`有节奏地出拳攻击对手。
有时会使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`リズミカルに　パンチを　くりだして
あいてを　こうげきする。
こんらん　させることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`리드미컬한 펀치를 날려
상대를 공격한다.
혼란시킬 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`有節奏地出拳攻擊對手。
有時會使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un enchaînement de coups de poing cadencés
frappe l’ennemi. Peut aussi le rendre confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Rhythmische Schläge, die das Ziel verwirren können.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Rítmicos puñetazos que pueden causar confusión. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con una sequenza di pugni
che può anche confonderlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is hit with rhythmically launched
punches. This may also leave the target confused.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`リズミカルに　パンチを　くりだして
相手を　攻撃する。
混乱させることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`有节奏地出拳攻击对手。
有时会使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},u=146,s=[{name:"hitmonchan",url:"https://pokeapi.co/api/v2/pokemon/107/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"ledyba",url:"https://pokeapi.co/api/v2/pokemon/165/"},{name:"miltank",url:"https://pokeapi.co/api/v2/pokemon/241/"},{name:"volbeat",url:"https://pokeapi.co/api/v2/pokemon/313/"},{name:"spinda",url:"https://pokeapi.co/api/v2/pokemon/327/"},{name:"kecleon",url:"https://pokeapi.co/api/v2/pokemon/352/"},{name:"buneary",url:"https://pokeapi.co/api/v2/pokemon/427/"},{name:"lopunny",url:"https://pokeapi.co/api/v2/pokemon/428/"},{name:"regigigas",url:"https://pokeapi.co/api/v2/pokemon/486/"},{name:"reuniclus",url:"https://pokeapi.co/api/v2/pokemon/579/"},{name:"crabrawler",url:"https://pokeapi.co/api/v2/pokemon/739/"},{name:"crabominable",url:"https://pokeapi.co/api/v2/pokemon/740/"},{name:"kangaskhan-mega",url:"https://pokeapi.co/api/v2/pokemon/10039/"},{name:"lopunny-mega",url:"https://pokeapi.co/api/v2/pokemon/10088/"}],l=[],g={ailment:{name:"confusion",url:"https://pokeapi.co/api/v2/move-ailment/6/"},ailment_chance:20,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:5,min_hits:null,min_turns:2,stat_chance:0},c="dizzy-punch",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ピヨピヨパンチ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"잼잼펀치"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"迷昏拳"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Uppercut"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Irrschlag"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Puño Mareo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Stordipugno"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Dizzy Punch"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ピヨピヨパンチ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"迷昏拳"}],h=[{accuracy:null,effect_chance:null,effect_entries:[],power:null,pp:null,type:null,version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}}],m=70,k=10,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/16/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:r,generation:i,id:u,learned_by_pokemon:s,machines:l,meta:g,name:c,names:v,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:y,type:x};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,z as default,n as effect_chance,p as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,u as id,s as learned_by_pokemon,l as machines,g as meta,c as name,v as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,y as target,x as type};
