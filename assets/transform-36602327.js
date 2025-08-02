const y=null,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/17/"},a={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},o={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},n=null,t=[],p=[{effect:`User copies the target's species, weight, type, ability, calculated stats (except HP), and moves.  Copied moves will all have 5 PP remaining.  IVs are copied for the purposes of hidden power, but stats are not recalculated.

choice band, choice scarf, and choice specs stay in effect, and the user must select a new move.

This move cannot be copied by mirror move, nor forced by encore.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User becomes a copy of the target until it leaves battle."}],r=[{flavor_text:`The user assumes
the foe's guise.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`The user assumes
the foe's guise.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Alters the user’s cells to
become a copy of the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Alters the user’s cells to
become a copy of the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The user transforms
into a copy of the
foe with even the
same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user transforms
into a copy of the
foe right down to
having the same move
set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user transforms
into a copy of the
foe right down to
having the same move
set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user transforms
into a copy of the
foe right down to
having the same move
set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur devient une copie de sa cible
et obtient la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user transforms into a copy of the
target right down to having
the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user transforms into a copy of the
target right down to having
the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur devient une copie de sa cible et obtient
la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles
und kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario se transforma en una copia del objetivo,
con los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le caratteristiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user transforms into a copy of the
target right down to having
the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur devient une copie de sa cible et obtient
la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles
und kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario se transforma en una copia del objetivo, 
con los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le caratteristiche.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user transforms into a copy of the
target right down to having
the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`變身成對手寶可夢的樣子，
能夠使用和對手
完全相同的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur devient une copie de sa cible et obtient
la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles
und kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario se transforma en una copia del objetivo, 
con los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user transforms into a copy of the target right
down to having the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`变身成对手宝可梦的样子，
能够使用和对手
完全相同的招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`變身成對手寶可夢的樣子，
能夠使用和對手
完全相同的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur devient une copie de sa cible et obtient
la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles
und kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario se transforma en una copia del objetivo, 
con los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user transforms into a copy of the target right
down to having the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`变身成对手宝可梦的样子，
能够使用和对手
完全相同的招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`變身成對手寶可夢的樣子，
能夠使用和對手
完全相同的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur devient une copie de sa cible
et obtient la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles
und kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se transforma en una copia del objetivo, 
con los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user transforms into a copy of the target right
down to having the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`变身成对手宝可梦的样子，
能够使用和对手
完全相同的招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいての　ポケモンに　へんしん
することで　あいてと　まったく
おなじ　わざが　つかえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대 포켓몬으로 변신하여
상대와 완전히 똑같은
기술을 사용할 수 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`變身成對手寶可夢的樣子，
能夠使用和對手
完全相同的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur devient une copie de sa cible et obtient
la même palette de capacités.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender verwandelt sich in ein Abbild des Zieles und
kann so auf die gleichen Attacken zugreifen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario se transforma en una copia del objetivo, con
los mismos movimientos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa si trasforma in una copia esatta
del bersaglio per sfruttarne le mosse.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user transforms into a copy of the target right
down to having the same move set.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　ポケモンに　変身することで
相手と　まったく
同じ　技が　使える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`变身成对手宝可梦的样子，
能够使用和对手
完全相同的招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user transforms into a copy of the target right down to having the same move set.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user transforms into a copy of the target, right down to having the same move set.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},s=144,u=[{name:"ditto",url:"https://pokeapi.co/api/v2/pokemon/132/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="transform",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"へんしん"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"변신"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"變身"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Morphing"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Wandler"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Transformación"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Trasformazione"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Transform"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"へんしん"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"变身"}],m=[],h=null,k=10,f=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/23/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},b={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},j={accuracy:null,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:t,effect_entries:p,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:f,stat_changes:_,super_contest_effect:d,target:x,type:b};export{y as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,j as default,n as effect_chance,t as effect_changes,p as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,f as priority,_ as stat_changes,d as super_contest_effect,x as target,b as type};
