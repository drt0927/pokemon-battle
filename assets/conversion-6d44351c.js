const b=null,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/12/"},a={name:"beauty",url:"https://pokeapi.co/api/v2/contest-type/2/"},o={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},p=null,n=[],t=[{effect:"User's type changes to the type of one of its moves, selected at random.  hidden power and weather ball are treated as normal.  Only moves with a different type are eligible, and curse is never eligible.  If the user has no suitable moves, this move will fail.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User's type changes to the type of one of its moves at random."}],r=[{flavor_text:`Change user's type
to a move's type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Change user's type
to a move's type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Changes the user’s type
into an own move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Changes the user’s type
into a known move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The user changes
its type to match
the type of one of
its moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user changes its
type to become the
same type as one of
its moves.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user changes its
type to become the
same type as one of
its moves.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user changes its
type to become the
same type as one of
its moves.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur change de type pour prendre
celui de l’une de ses capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user changes its type to become the
same type as one of its moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user changes its type to become the
same type as one of its moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ
der ersten Attacke des Anwenders um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de
sus movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user changes its type to become the
same type as the move at the top of the
list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ
der ersten Attacke des Anwenders um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de sus 
movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user changes its type to become the
same type as the move at the top of the
list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將自己的屬性轉換成
與已學會的招式中
第１個招式相同的屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ der
ersten Attacke des Anwenders um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de sus 
movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user changes its type to become the same type
as the move at the top of the list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将自己的属性转换成
和已学会的招式中
第一个招式相同的属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將自己的屬性轉換成
與已學會的招式中
第１個招式相同的屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ der
ersten Attacke des Anwenders um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de sus 
movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user changes its type to become the same type
as the move at the top of the list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将自己的属性转换成
和已学会的招式中
第一个招式相同的属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將自己的屬性轉換成
與已學會的招式中
第１個招式相同的屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ der
ersten Attacke des Anwenders um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de sus 
movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user changes its type to become the same type
as the move at the top of the list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将自己的属性转换成
和已学会的招式中
第一个招式相同的属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`じぶんの　タイプを
おぼえている　わざで　いちばん　うえの
わざと　おなじ　タイプに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`자신의 타입을 배운 기술 중
가장 위에 있는 기술과
같은 타입으로 바꾼다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`將自己的屬性轉換成
與已學會的招式中
第１個招式相同的屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur change de type pour prendre celui
de la première capacité de sa liste.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Wandelt den Typ des Anwenders in den Typ seiner
ersten Attacke um.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Cambia el tipo del usuario por el del primero de sus 
movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il tipo di chi la usa muta in quello della prima
mossa nella lista delle sue mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user changes its type to become the same type
as the move at the top of the list of moves it knows.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`自分の　タイプを
おぼえている　技で　一番　上の
技と　同じ　タイプに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`将自己的属性转换成
和已学会的招式中
第一个招式相同的属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user changes its type to become the same type as the move at the top of the list of moves it knows.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user changes its type to become the same type as the move at the top of the list of moves it knows.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],s={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},i=160,l=[{name:"porygon",url:"https://pokeapi.co/api/v2/pokemon/137/"},{name:"porygon2",url:"https://pokeapi.co/api/v2/pokemon/233/"},{name:"porygon-z",url:"https://pokeapi.co/api/v2/pokemon/474/"}],u=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="conversion",m=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"テクスチャー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"텍스처"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"紋理"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Conversion"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Umwandlung"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Conversión"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Conversione"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Conversion"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"テクスチャー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"纹理"}],c=[],h=null,k=30,_=0,d=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/23/"},y={name:"user",url:"https://pokeapi.co/api/v2/move-target/7/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},T={accuracy:null,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:r,generation:s,id:i,learned_by_pokemon:l,machines:u,meta:g,name:v,names:m,past_values:c,power:h,pp:k,priority:_,stat_changes:d,super_contest_effect:f,target:y,type:x};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,T as default,p as effect_chance,n as effect_changes,t as effect_entries,r as flavor_text_entries,s as generation,i as id,l as learned_by_pokemon,u as machines,g as meta,v as name,m as names,c as past_values,h as power,k as pp,_ as priority,d as stat_changes,f as super_contest_effect,y as target,x as type};
