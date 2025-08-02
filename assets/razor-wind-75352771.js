const y=100,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/2/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},p=null,n=[],t=[{effect:`Inflicts regular damage.  User's critical hit rate is one level higher when using this move.  User charges for one turn before attacking.

This move cannot be selected by sleep talk.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Requires a turn to charge before attacking."}],r=[{flavor_text:`1st turn: Prepare
2nd turn: Attack`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`1st turn: Prepare
2nd turn: Attack`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A 2-turn move that strikes
the foe on the 2nd turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A 2-turn move that strikes
the foe on the 2nd turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`Blades of wind hit
the foe on the 2nd
turn. It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`A two-turn attack.
Blades of wind hit the
foe on the second
turn. It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`A two-turn attack.
Blades of wind hit the
foe on the second
turn. It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`A two-turn attack.
Blades of wind hit the
foe on the second
turn. It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Attaque en 2 tours.
Des lames de vent frappent l’ennemi au
2è tour. Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A two-turn attack. Blades of wind hit
opposing Pokémon on the second turn.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A two-turn attack. Blades of wind hit
opposing Pokémon on the second turn.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`かぜの　やいばを　つくり
２ターンめに　あいてを　こうげきする。
きゅうしょに　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`바람의 칼날을 만들어
2턴째에 상대를 공격한다.
급소에 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Attaque en deux tours.
Des lames de vent frappent l’ennemi au second
tour. Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Eine Attacke, die über zwei Runden geht.
Hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Primero se prepara y en el segundo turno ataca
al oponente con ráfagas de viento cortante. Alta
probabilidad de ser crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa genera un turbine al primo turno
e attacca al secondo. Probabile brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`A two-turn attack. Blades of wind hit
opposing Pokémon on the second turn.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`風の　刃を　つくり
２ターン目に　相手を　攻撃する。
急所に　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`かぜの　やいばを　つくり
２ターンめに　あいてを　こうげきする。
きゅうしょに　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`바람의 칼날을 만들어
2턴째에 상대를 공격한다.
급소에 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attaque en deux tours.
Des lames de vent frappent l’ennemi au second
tour. Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Eine Attacke, die über zwei Runden geht.
Hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Primero se prepara y en el segundo turno
ataca al oponente con ráfagas de viento
cortante. Alta probabilidad de ser crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa genera un turbine al primo turno
e attacca al secondo. Probabile brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`A two-turn attack. Blades of wind hit
opposing Pokémon on the second turn.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`風の　刃を　つくり
２ターン目に　相手を　攻撃する。
急所に　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`かぜの　やいばを　つくり
２ターンめに　あいてを　こうげきする。
きゅうしょに　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`바람의 칼날을 만들어
2턴째에 상대를 공격한다.
급소에 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`製造出風之刃，
在下一回合攻擊對手。
容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attaque en deux tours.
Des lames de vent frappent l’ennemi au second
tour. Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Eine Attacke, die über zwei Runden geht.
Hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Primero se prepara y en el segundo turno
ataca al oponente con ráfagas de viento
cortante. Alta probabilidad de ser crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa genera un turbine al primo turno
e attacca al secondo. Probabile brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`In this two-turn attack, blades of wind hit opposing
Pokémon on the second turn. Critical hits land
more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`風の　刃を　つくり
２ターン目に　相手を　攻撃する。
急所に　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`制造风之刃，
于第２回合攻击对手。
容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`かぜの　やいばを　つくり
２ターンめに　あいてを　こうげきする。
きゅうしょに　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`바람의 칼날을 만들어
2턴째에 상대를 공격한다.
급소에 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`製造出風之刃，
在下一回合攻擊對手。
容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attaque en deux tours.
Des lames de vent frappent l’ennemi au second
tour. Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Eine Attacke, die über zwei Runden geht.
Hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Primero se prepara y en el segundo turno
ataca al oponente con ráfagas de viento
cortante. Alta probabilidad de ser crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa genera un turbine al primo turno
e attacca al secondo. Probabile brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`In this two-turn attack, blades of wind hit opposing
Pokémon on the second turn. Critical hits land
more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`風の　刃を　つくり
２ターン目に　相手を　攻撃する。
急所に　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`制造风之刃，
于第２回合攻击对手。
容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`かぜの　やいばを　つくり
２ターンめに　あいてを　こうげきする。
きゅうしょに　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`바람의 칼날을 만들어
2턴째에 상대를 공격한다.
급소에 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`製造出風之刃，
在下一回合攻擊對手。
容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attaque en deux tours.
Des lames de vent frappent l’ennemi au second tour.
Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Eine Attacke, die über zwei Runden geht.
Hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Primero se prepara y en el segundo turno
ataca al oponente con ráfagas de viento
cortante. Alta probabilidad de ser crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa genera un turbine al primo turno
e attacca al secondo. Probabile brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`In this two-turn attack, blades of wind hit opposing
Pokémon on the second turn. Critical hits land
more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`風の　刃を　つくり
２ターン目に　相手を　攻撃する。
急所に　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`制造风之刃，
于第２回合攻击对手。
容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},u=13,l=[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"butterfree",url:"https://pokeapi.co/api/v2/pokemon/12/"},{name:"pidgey",url:"https://pokeapi.co/api/v2/pokemon/16/"},{name:"pidgeotto",url:"https://pokeapi.co/api/v2/pokemon/17/"},{name:"pidgeot",url:"https://pokeapi.co/api/v2/pokemon/18/"},{name:"spearow",url:"https://pokeapi.co/api/v2/pokemon/21/"},{name:"fearow",url:"https://pokeapi.co/api/v2/pokemon/22/"},{name:"zubat",url:"https://pokeapi.co/api/v2/pokemon/41/"},{name:"golbat",url:"https://pokeapi.co/api/v2/pokemon/42/"},{name:"venomoth",url:"https://pokeapi.co/api/v2/pokemon/49/"},{name:"farfetchd",url:"https://pokeapi.co/api/v2/pokemon/83/"},{name:"horsea",url:"https://pokeapi.co/api/v2/pokemon/116/"},{name:"scyther",url:"https://pokeapi.co/api/v2/pokemon/123/"},{name:"kabutops",url:"https://pokeapi.co/api/v2/pokemon/141/"},{name:"aerodactyl",url:"https://pokeapi.co/api/v2/pokemon/142/"},{name:"articuno",url:"https://pokeapi.co/api/v2/pokemon/144/"},{name:"zapdos",url:"https://pokeapi.co/api/v2/pokemon/145/"},{name:"moltres",url:"https://pokeapi.co/api/v2/pokemon/146/"},{name:"dragonite",url:"https://pokeapi.co/api/v2/pokemon/149/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"totodile",url:"https://pokeapi.co/api/v2/pokemon/158/"},{name:"girafarig",url:"https://pokeapi.co/api/v2/pokemon/203/"},{name:"gligar",url:"https://pokeapi.co/api/v2/pokemon/207/"},{name:"scizor",url:"https://pokeapi.co/api/v2/pokemon/212/"},{name:"treecko",url:"https://pokeapi.co/api/v2/pokemon/252/"},{name:"seedot",url:"https://pokeapi.co/api/v2/pokemon/273/"},{name:"nuzleaf",url:"https://pokeapi.co/api/v2/pokemon/274/"},{name:"zangoose",url:"https://pokeapi.co/api/v2/pokemon/335/"},{name:"tropius",url:"https://pokeapi.co/api/v2/pokemon/357/"},{name:"absol",url:"https://pokeapi.co/api/v2/pokemon/359/"},{name:"buizel",url:"https://pokeapi.co/api/v2/pokemon/418/"},{name:"floatzel",url:"https://pokeapi.co/api/v2/pokemon/419/"},{name:"pidove",url:"https://pokeapi.co/api/v2/pokemon/519/"},{name:"tranquill",url:"https://pokeapi.co/api/v2/pokemon/520/"},{name:"unfezant",url:"https://pokeapi.co/api/v2/pokemon/521/"},{name:"sewaddle",url:"https://pokeapi.co/api/v2/pokemon/540/"},{name:"axew",url:"https://pokeapi.co/api/v2/pokemon/610/"},{name:"fletchling",url:"https://pokeapi.co/api/v2/pokemon/661/"},{name:"fletchinder",url:"https://pokeapi.co/api/v2/pokemon/662/"},{name:"talonflame",url:"https://pokeapi.co/api/v2/pokemon/663/"},{name:"helioptile",url:"https://pokeapi.co/api/v2/pokemon/694/"},{name:"heliolisk",url:"https://pokeapi.co/api/v2/pokemon/695/"},{name:"noibat",url:"https://pokeapi.co/api/v2/pokemon/714/"},{name:"noivern",url:"https://pokeapi.co/api/v2/pokemon/715/"},{name:"yveltal",url:"https://pokeapi.co/api/v2/pokemon/717/"},{name:"type-null",url:"https://pokeapi.co/api/v2/pokemon/772/"},{name:"silvally",url:"https://pokeapi.co/api/v2/pokemon/773/"},{name:"drampa",url:"https://pokeapi.co/api/v2/pokemon/780/"},{name:"scizor-mega",url:"https://pokeapi.co/api/v2/pokemon/10046/"},{name:"absol-mega",url:"https://pokeapi.co/api/v2/pokemon/10057/"},{name:"pidgeot-mega",url:"https://pokeapi.co/api/v2/pokemon/10073/"}],s=[{machine:{url:"https://pokeapi.co/api/v2/machine/22/"},version_group:{name:"red-blue",url:"https://pokeapi.co/api/v2/version-group/1/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/23/"},version_group:{name:"yellow",url:"https://pokeapi.co/api/v2/version-group/2/"}}],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:1,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="razor-wind",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"かまいたち"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"칼바람"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"旋風刀"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Coupe-Vent"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Klingensturm"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Viento Cortante"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ventagliente"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Razor Wind"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"かまいたち"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"旋风刀"}],m=[{accuracy:75,effect_chance:null,effect_entries:[],power:null,pp:null,type:null,version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}}],h=80,k=10,d=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/6/"},x={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},b={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:r,generation:i,id:u,learned_by_pokemon:l,machines:s,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:d,stat_changes:_,super_contest_effect:f,target:x,type:b};export{y as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,z as default,p as effect_chance,n as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,u as id,l as learned_by_pokemon,s as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,d as priority,_ as stat_changes,f as super_contest_effect,x as target,b as type};
