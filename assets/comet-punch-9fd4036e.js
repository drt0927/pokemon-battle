const y=85,b=null,e={url:"https://pokeapi.co/api/v2/contest-effect/12/"},a={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=null,n=[],t=[{effect:`Inflicts regular damage.  Hits 2–5 times in one turn.

Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Hits 2-5 times in one turn."}],i=[{flavor_text:`Repeatedly punches
2-5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Repeatedly punches
2-5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Repeatedly punches the foe
2 to 5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Repeatedly punches the foe
2 to 5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is hit with
a flurry of punches
that strike two to
five times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is hit with
a flurry of punches
that strike two to
five times in a row.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is hit with
a flurry of punches
that strike two to
five times in a row.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is hit with
a flurry of punches
that strike two to
five times in a row.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Une tornade de coups de poing
qui frappe de 2 à 5 fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with a flurry of punches
that strike two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with a flurry of punches
that strike two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`どとうの　パンチで
あいてを　なぐりつけて　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`노도 같은 펀치로
상대를 세게 때려서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une tornade de coups de poing qui frappe de
deux à cinq fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Trifft das Ziel zwei- bis fünfmal hintereinander
mit kräftigen Hieben.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Pega de dos a cinco veces seguidas.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con una scarica di pugni
da due a cinque volte di fila.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is hit with a flurry of punches
that strike two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`どとうの　パンチで
相手を　なぐりつけて　攻撃する。
２ー５回の　あいだ　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`どとうの　パンチで
あいてを　なぐりつけて　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`노도 같은 펀치로
상대를 세게 때려서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une tornade de coups de poing qui frappe de
deux à cinq fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Trifft das Ziel zwei- bis fünfmal hintereinander
mit kräftigen Hieben.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Pega de dos a cinco veces seguidas.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con una scarica di pugni
da due a cinque volte di fila.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is hit with a flurry of punches
that strike two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`どとうの　パンチで
相手を　なぐりつけて　攻撃する。
２ー５回の　あいだ　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`どとうの　パンチで
あいてを　なぐりつけて　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`노도 같은 펀치로
상대를 세게 때려서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用怒濤般的拳頭
毆打對手進行攻擊。
連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une tornade de coups de poing qui frappe de
deux à cinq fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Trifft das Ziel zwei- bis fünfmal hintereinander mit
kräftigen Hieben.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"Pega de dos a cinco veces seguidas.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con una scarica di pugni
da due a cinque volte di fila.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is hit with a flurry of punches that strike
two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`どとうの　パンチで
相手を　なぐりつけて　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用拳头怒涛般的
殴打对手进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`どとうの　パンチで
あいてを　なぐりつけて　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`노도 같은 펀치로
상대를 세게 때려서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用怒濤般的拳頭
毆打對手進行攻擊。
連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une tornade de coups de poing qui frappe de
deux à cinq fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Trifft das Ziel zwei- bis fünfmal hintereinander mit
kräftigen Hieben.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Pega de dos a cinco veces seguidas.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con una scarica di pugni
da due a cinque volte di fila.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is hit with a flurry of punches that strike
two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`どとうの　パンチで
相手を　なぐりつけて　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用拳头怒涛般的
殴打对手进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`どとうの　パンチで
あいてを　なぐりつけて　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`노도 같은 펀치로
상대를 세게 때려서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用怒濤般的拳頭
毆打對手進行攻擊。
連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une tornade de coups de poing qui frappe de
deux à cinq fois d’affilée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Trifft das Ziel zwei- bis fünfmal hintereinander mit
kräftigen Hieben.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Pega de dos a cinco veces seguidas.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con una scarica di pugni
da due a cinque volte di fila.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is hit with a flurry of punches that strike
two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`どとうの　パンチで
相手を　なぐりつけて　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用拳头怒涛般的
殴打对手进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},u=4,s=[{name:"hitmonchan",url:"https://pokeapi.co/api/v2/pokemon/107/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"ledyba",url:"https://pokeapi.co/api/v2/pokemon/165/"},{name:"ledian",url:"https://pokeapi.co/api/v2/pokemon/166/"},{name:"timburr",url:"https://pokeapi.co/api/v2/pokemon/532/"},{name:"pancham",url:"https://pokeapi.co/api/v2/pokemon/674/"},{name:"pangoro",url:"https://pokeapi.co/api/v2/pokemon/675/"},{name:"buzzwole",url:"https://pokeapi.co/api/v2/pokemon/794/"},{name:"kangaskhan-mega",url:"https://pokeapi.co/api/v2/pokemon/10039/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:5,max_turns:null,min_hits:2,min_turns:null,stat_chance:0},v="comet-punch",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"れんぞくパンチ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"연속펀치"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"連續拳"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Poing Comète"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Kometenhieb"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Puño Cometa"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Cometapugno"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Comet Punch"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"れんぞくパンチ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"连续拳"}],h=[],m=18,k=15,f=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/7/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},w={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},H={accuracy:85,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:i,generation:r,id:u,learned_by_pokemon:s,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:f,stat_changes:_,super_contest_effect:d,target:x,type:w};export{y as accuracy,b as contest_combos,e as contest_effect,a as contest_type,o as damage_class,H as default,p as effect_chance,n as effect_changes,t as effect_entries,i as flavor_text_entries,r as generation,u as id,s as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,f as priority,_ as stat_changes,d as super_contest_effect,x as target,w as type};
