const b=null,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/25/"},a={name:"cute",url:"https://pokeapi.co/api/v2/contest-type/3/"},o={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},n=null,p=[],t=[{effect:`Uses a move from another Pokémon in the user's party, both selected at random.  Moves from fainted Pokémon can be used.  If there are no eligible Pokémon or moves, this move will fail.

This move will not select assist, chatter, circle throw, copycat, counter, covet, destiny bond, detect, dig, dive, dragon tail, endure, feint, fly focus punch, follow me, helping hand, me first, metronome, mimic, mirror coat, mirror move, phantom force protect, quick guard, roar shadow force, sketch, sleep talk, snatch, struggle, switcheroo, thief, trick, whirlwind, or wide guard.

This move cannot be copied by mirror move, nor selected by metronome or sleep talk.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Randomly selects and uses one of the trainer's other Pokémon's moves."}],r=[{flavor_text:`Attacks randomly with one
of the partner’s moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Attacks randomly with one
of the partner’s moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The user randomly
picks and uses a
move of an allied
POKéMON.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user hurriedly
and randomly uses a
move among those
known by other
Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user hurriedly
and randomly uses a
move among those
known by other
Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user hurriedly
and randomly uses a
move among those
known by other
Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une
capacité au hasard parmi celles des
Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user hurriedly and randomly uses a
move among those known by other
Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user hurriedly and randomly uses a
move among those known by other
Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`おおいそぎで　みかたの　たすけを　かりて
ひかえの　ポケモンが　おぼえている
わざを　どれか　１つ　つかう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`서둘러서 같은 편의 도움을 받아
교대 포켓몬이 기억하고 있는
기술 중 하나를 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une capacité au
hasard parmi celles des Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Greift zufällig mit einer Attacke
eines Teampartners an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Usa un movimiento de un miembro del equipo
elegido al azar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa utilizza in fretta e a caso una
delle mosse degli altri Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user hurriedly and randomly
uses a move among those known
by other Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`大急ぎで　味方の　助けを　かりて
控えの　ポケモンが　おぼえている
技を　どれか　１つ　使う。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`おおいそぎで　 かたの　たすけを　かりて
ひかえの　ポケモンが　おぼえている
わざを　どれか　１つ　つかう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`서둘러서 같은 편의 도움을 받아
교대 포켓몬이 기억하고 있는
기술 중 하나를 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une capacité au
hasard parmi celles des Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Greift zufällig mit einer Attacke
eines Teampartners an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Usa un movimiento de un miembro del equipo 
elegido al azar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa utilizza in fretta e a caso una
delle mosse degli altri Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user hurriedly and randomly
uses a move among those known
by other Pokémon in the party.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`大急ぎで　味方の　助けを　かりて
控えの　ポケモンが　おぼえている
技を　どれか　１つ　使う。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`おおいそぎで　みかたの　たすけを　かりて
みかたの　ポケモンが　おぼえている
わざを　どれか　１つ　つかう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`서둘러서 같은 편의 도움을 받아
같은 편 포켓몬이 기억하고 있는
기술 중 하나를 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`緊急向同伴求救，
從我方寶可夢已學會的招式中
隨機選出１個使用。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une capacité au
hasard parmi celles des Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"Greift zufällig mit einer Attacke eines Mitstreiters an.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Usa un movimiento de un miembro del equipo 
elegido al azar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa utilizza in fretta e a caso una
delle mosse degli altri Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user hurriedly and randomly uses a move among
those known by ally Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`大急ぎで　味方の　助けを　かりて
味方の　ポケモンが　おぼえている
技を　どれか　１つ　使う。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向我方紧急求助，
从我方宝可梦已学会的
招式中随机使用１个。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`おおいそぎで　みかたの　たすけを　かりて
みかたの　ポケモンが　おぼえている
わざを　どれか　１つ　つかう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`서둘러서 같은 편의 도움을 받아
같은 편 포켓몬이 기억하고 있는
기술 중 하나를 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`緊急向同伴求救，
從我方寶可夢已學會的招式中
隨機選出１個使用。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une capacité au
hasard parmi celles des Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Greift zufällig mit einer Attacke eines Mitstreiters an.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Usa un movimiento de un miembro del equipo 
elegido al azar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa utilizza in fretta e a caso una
delle mosse degli altri Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user hurriedly and randomly uses a move among
those known by ally Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`大急ぎで　味方の　助けを　かりて
味方の　ポケモンが　おぼえている
技を　どれか　１つ　使う。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向我方紧急求助，
从我方宝可梦已学会的
招式中随机使用１个。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`おおいそぎで　みかたの　たすけを　かりて
みかたの　ポケモンが　おぼえている
わざを　どれか　１つ　つかう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`서둘러서 같은 편의 도움을 받아
같은 편 포켓몬이 기억하고 있는
기술 중 하나를 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`緊急向同伴求救，
從我方寶可夢已學會的招式中
隨機選出１個使用。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur se dépêche d’utiliser une capacité au hasard
parmi celles des Pokémon de l’équipe.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Greift zufällig mit einer Attacke eines Mitstreiters an.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Usa un movimiento de un miembro del equipo 
elegido al azar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa utilizza in fretta e a caso una
delle mosse degli altri Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user hurriedly and randomly uses a move among
those known by ally Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`大急ぎで　味方の　助けを　かりて
味方の　ポケモンが　おぼえている
技を　どれか　１つ　使う。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向同伴紧急求助，
从我方宝可梦已学会的
招式中随机使用１个。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},s=274,u=[{name:"meowth",url:"https://pokeapi.co/api/v2/pokemon/52/"},{name:"drowzee",url:"https://pokeapi.co/api/v2/pokemon/96/"},{name:"sentret",url:"https://pokeapi.co/api/v2/pokemon/161/"},{name:"sneasel",url:"https://pokeapi.co/api/v2/pokemon/215/"},{name:"skitty",url:"https://pokeapi.co/api/v2/pokemon/300/"},{name:"spinda",url:"https://pokeapi.co/api/v2/pokemon/327/"},{name:"chimchar",url:"https://pokeapi.co/api/v2/pokemon/390/"},{name:"glameow",url:"https://pokeapi.co/api/v2/pokemon/431/"},{name:"purugly",url:"https://pokeapi.co/api/v2/pokemon/432/"},{name:"purrloin",url:"https://pokeapi.co/api/v2/pokemon/509/"},{name:"liepard",url:"https://pokeapi.co/api/v2/pokemon/510/"},{name:"espurr",url:"https://pokeapi.co/api/v2/pokemon/677/"},{name:"meowth-alola",url:"https://pokeapi.co/api/v2/pokemon/10107/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="assist",m=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ねこのて"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"조수"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"借助"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Assistance"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Zuschuss"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Ayuda"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Assistente"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Assist"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ねこのて"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"借助"}],c=[],h=null,k=20,d=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/14/"},y={name:"user",url:"https://pokeapi.co/api/v2/move-target/7/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:null,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:m,past_values:c,power:h,pp:k,priority:d,stat_changes:_,super_contest_effect:f,target:y,type:x};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,z as default,n as effect_chance,p as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,m as names,c as past_values,h as power,k as pp,d as priority,_ as stat_changes,f as super_contest_effect,y as target,x as type};
