const P=100,b=null,a={url:"https://pokeapi.co/api/v2/contest-effect/14/"},e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=null,t=[{effect_entries:[{effect:"Determines damage using each participant's base Attack and the opponent's base Defense in place of calculated stats.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"}}],version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}}],n=[{effect:`Inflicts typeless regular damage.  Every Pokémon in the user's party, excepting those that have fainted or have a major status effect, attacks the target.  Calculated stats are ignored; the base stats for the target and assorted attackers are used instead.  The random factor in the damage formula is not used.  dark Pokémon still get STAB.

This effect breaks through wonder guard.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Hits once for every conscious Pokémon the trainer has."}],r=[{flavor_text:`Party POKéMON join
in the attack.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Party POKéMON join
in the attack.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Summons party POKéMON to
join in the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Summons party POKéMON to
join in the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`All party POKéMON
join in the attack.
The more allies,
the more damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user gets all the
party Pokémon to
attack the foe. The
more party Pokémon,
the more damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user gets all the
party Pokémon to
attack the foe. The
more party Pokémon,
the more damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user gets all the
party Pokémon to
attack the foe. The
more party Pokémon,
the more damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de
son équipe à attaquer. Plus ils sont
nombreux, plus il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user gets all party Pokémon to attack
the target. The more party Pokémon,
the greater the number of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user gets all party Pokémon to attack
the target. The more party Pokémon,
the greater the number of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`みかた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son
équipe à attaquer. Plus ils sont nombreux, plus
il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Das gesamte Team nimmt aktiv am Kampf teil.
Je mehr Pokémon, desto höher die Anzahl der
Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más
haya, más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della
squadra: più ce ne sono, maggiore è il numero
di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user gets all party Pokémon to attack
the target. The more party Pokémon,
the greater the number of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:` かた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son
équipe à attaquer. Plus ils sont nombreux, plus
il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Das gesamte Team nimmt aktiv am Kampf teil.
Je mehr Pokémon, desto höher die Anzahl der
Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más 
haya, más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della
squadra: più ce ne sono, maggiore è il numero
di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user gets all party Pokémon to attack
the target. The more party Pokémon,
the greater the number of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`みかた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`讓我方所有寶可夢進行攻擊。
同行的寶可夢越多，
招式的攻擊次數越多。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son
équipe à attaquer. Plus ils sont nombreux, plus
il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Das gesamte Team nimmt aktiv am Kampf teil.
Je mehr Pokémon, desto höher die Anzahl der
Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más 
haya, más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della
squadra: più ce ne sono, maggiore è il numero
di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user gets all party Pokémon to attack the target.
The more party Pokémon, the greater the number
of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`我方全员进行攻击。
同行的宝可梦越多，
招式的攻击次数越多。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`みかた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`讓我方所有寶可夢進行攻擊。
同行的寶可夢越多，
招式的攻擊次數越多。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son
équipe à attaquer. Plus ils sont nombreux, plus
il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Das gesamte Team nimmt aktiv am Kampf teil.
Je mehr Pokémon, desto höher die Anzahl der
Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más 
haya, más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della
squadra: più ce ne sono, maggiore è il numero
di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user gets all party Pokémon to attack the target.
The more party Pokémon, the greater the number
of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`我方全员进行攻击。
同行的宝可梦越多，
招式的攻击次数越多。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`みかた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`讓我方所有寶可夢進行攻擊。
同行的寶可夢越多，
招式的攻擊次數越多。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son équipe
à attaquer. Plus ils sont nombreux, plus il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Das gesamte Team nimmt aktiv am Kampf teil.
Je mehr Pokémon, desto höher die Anzahl der
Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más 
haya, más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della
squadra: più ce ne sono, maggiore è il numero
di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user gets all party Pokémon to attack the target.
The more party Pokémon, the greater the number
of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`我方全员进行攻击。
同行的宝可梦越多，
招式的攻击次数越多。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`みかた　ぜんいんで　こうげきする。
なかまの　ポケモンが　おおいほど
わざの　こうげきかいすうが　ふえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`같은 편 전원이 공격한다.
동료 포켓몬이 많을수록
기술의 공격 횟수가 증가한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`讓我方所有寶可夢進行攻擊。
同行的寶可夢越多，
招式的攻擊次數越多。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur appelle tous les Pokémon de son équipe
à attaquer. Plus ils sont nombreux, plus il y a d’attaques.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender greift zusammen mit allen Mitgliedern
seines Teams das Ziel an. Je mehr Pokémon sich im
Team befinden, desto höher die Anzahl der Angriffe.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataque de todo el equipo Pokémon. Cuantos más haya,
más veces se atacará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa chiama in aiuto i Pokémon della squadra:
più ce ne sono, maggiore è il numero di attacchi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user gets all party Pokémon to attack the target.
The more party Pokémon, the greater the number
of attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`味方　全員で　攻撃する。
仲間の　ポケモンが　多いほど
技の　攻撃回数が　増える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`我方全员进行攻击。
同行的宝可梦越多，
招式的攻击次数越多。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-ii",url:"https://pokeapi.co/api/v2/generation/2/"},s=251,u=[{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},{name:"ekans",url:"https://pokeapi.co/api/v2/pokemon/23/"},{name:"nidoran-f",url:"https://pokeapi.co/api/v2/pokemon/29/"},{name:"nidorina",url:"https://pokeapi.co/api/v2/pokemon/30/"},{name:"nidoqueen",url:"https://pokeapi.co/api/v2/pokemon/31/"},{name:"nidoran-m",url:"https://pokeapi.co/api/v2/pokemon/32/"},{name:"nidorino",url:"https://pokeapi.co/api/v2/pokemon/33/"},{name:"nidoking",url:"https://pokeapi.co/api/v2/pokemon/34/"},{name:"diglett",url:"https://pokeapi.co/api/v2/pokemon/50/"},{name:"dugtrio",url:"https://pokeapi.co/api/v2/pokemon/51/"},{name:"mankey",url:"https://pokeapi.co/api/v2/pokemon/56/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"aipom",url:"https://pokeapi.co/api/v2/pokemon/190/"},{name:"girafarig",url:"https://pokeapi.co/api/v2/pokemon/203/"},{name:"sneasel",url:"https://pokeapi.co/api/v2/pokemon/215/"},{name:"houndour",url:"https://pokeapi.co/api/v2/pokemon/228/"},{name:"houndoom",url:"https://pokeapi.co/api/v2/pokemon/229/"},{name:"seedot",url:"https://pokeapi.co/api/v2/pokemon/273/"},{name:"nuzleaf",url:"https://pokeapi.co/api/v2/pokemon/274/"},{name:"shiftry",url:"https://pokeapi.co/api/v2/pokemon/275/"},{name:"vespiquen",url:"https://pokeapi.co/api/v2/pokemon/416/"},{name:"ambipom",url:"https://pokeapi.co/api/v2/pokemon/424/"},{name:"weavile",url:"https://pokeapi.co/api/v2/pokemon/461/"},{name:"cottonee",url:"https://pokeapi.co/api/v2/pokemon/546/"},{name:"whimsicott",url:"https://pokeapi.co/api/v2/pokemon/547/"},{name:"sandile",url:"https://pokeapi.co/api/v2/pokemon/551/"},{name:"krokorok",url:"https://pokeapi.co/api/v2/pokemon/552/"},{name:"krookodile",url:"https://pokeapi.co/api/v2/pokemon/553/"},{name:"scraggy",url:"https://pokeapi.co/api/v2/pokemon/559/"},{name:"scrafty",url:"https://pokeapi.co/api/v2/pokemon/560/"},{name:"vanilluxe",url:"https://pokeapi.co/api/v2/pokemon/584/"},{name:"pawniard",url:"https://pokeapi.co/api/v2/pokemon/624/"},{name:"bisharp",url:"https://pokeapi.co/api/v2/pokemon/625/"},{name:"durant",url:"https://pokeapi.co/api/v2/pokemon/632/"},{name:"zweilous",url:"https://pokeapi.co/api/v2/pokemon/634/"},{name:"hydreigon",url:"https://pokeapi.co/api/v2/pokemon/635/"},{name:"pangoro",url:"https://pokeapi.co/api/v2/pokemon/675/"},{name:"binacle",url:"https://pokeapi.co/api/v2/pokemon/688/"},{name:"barbaracle",url:"https://pokeapi.co/api/v2/pokemon/689/"},{name:"wishiwashi-solo",url:"https://pokeapi.co/api/v2/pokemon/746/"},{name:"salandit",url:"https://pokeapi.co/api/v2/pokemon/757/"},{name:"salazzle",url:"https://pokeapi.co/api/v2/pokemon/758/"},{name:"passimian",url:"https://pokeapi.co/api/v2/pokemon/766/"},{name:"mimikyu-disguised",url:"https://pokeapi.co/api/v2/pokemon/778/"},{name:"nickit",url:"https://pokeapi.co/api/v2/pokemon/827/"},{name:"thievul",url:"https://pokeapi.co/api/v2/pokemon/828/"},{name:"falinks",url:"https://pokeapi.co/api/v2/pokemon/870/"},{name:"drakloak",url:"https://pokeapi.co/api/v2/pokemon/886/"},{name:"dragapult",url:"https://pokeapi.co/api/v2/pokemon/887/"},{name:"urshifu-single-strike",url:"https://pokeapi.co/api/v2/pokemon/892/"},{name:"tandemaus",url:"https://pokeapi.co/api/v2/pokemon/924/"},{name:"maushold-family-of-four",url:"https://pokeapi.co/api/v2/pokemon/925/"},{name:"bramblin",url:"https://pokeapi.co/api/v2/pokemon/946/"},{name:"brambleghast",url:"https://pokeapi.co/api/v2/pokemon/947/"},{name:"fezandipiti",url:"https://pokeapi.co/api/v2/pokemon/1016/"},{name:"houndoom-mega",url:"https://pokeapi.co/api/v2/pokemon/10048/"},{name:"pikachu-kalos-cap",url:"https://pokeapi.co/api/v2/pokemon/10098/"},{name:"diglett-alola",url:"https://pokeapi.co/api/v2/pokemon/10105/"},{name:"dugtrio-alola",url:"https://pokeapi.co/api/v2/pokemon/10106/"},{name:"persian-alola",url:"https://pokeapi.co/api/v2/pokemon/10108/"},{name:"wishiwashi-school",url:"https://pokeapi.co/api/v2/pokemon/10127/"},{name:"mimikyu-busted",url:"https://pokeapi.co/api/v2/pokemon/10143/"},{name:"maushold-family-of-three",url:"https://pokeapi.co/api/v2/pokemon/10257/"}],l=[{machine:{url:"https://pokeapi.co/api/v2/machine/741/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:6,max_turns:null,min_hits:6,min_turns:null,stat_chance:0},m="beat-up",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ふくろだたき"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"집단구타"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"圍攻"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Baston"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Prügler"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Paliza"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Picchiaduro"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Beat Up"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ふくろだたき"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"围攻"}],h=[{accuracy:null,effect_chance:null,effect_entries:[],power:10,pp:null,type:null,version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}}],c=null,k=10,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/7/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},q={accuracy:100,contest_combos:null,contest_effect:a,contest_type:e,damage_class:o,effect_chance:p,effect_changes:t,effect_entries:n,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:m,names:v,past_values:h,power:c,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:y,type:x};export{P as accuracy,b as contest_combos,a as contest_effect,e as contest_type,o as damage_class,q as default,p as effect_chance,t as effect_changes,n as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,m as name,v as names,h as past_values,c as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,y as target,x as type};
