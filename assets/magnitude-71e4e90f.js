const w=100,y=null,e={url:"https://pokeapi.co/api/v2/contest-effect/11/"},a={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=null,p=[],t=[{effect:`Inflicts regular damage.  Power is selected at random between 10 and 150, with an average of 71:

Magnitude | Power | Chance
--------: | ----: | -----:
        4 |    10 |     5%
        5 |    30 |    10%
        6 |    50 |    20%
        7 |    70 |    30%
        8 |    90 |    20%
        9 |   110 |    10%
       10 |   150 |     5%

This move has double power against Pokémon currently underground due to dig.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Power varies randomly from 10 to 150."}],r=[{flavor_text:`A ground attack
with random power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`A ground attack
with random power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A ground-shaking attack
of random intensity.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A ground-shaking attack
of random intensity.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`A ground-shaking
attack against all
standing POKéMON.
Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user looses a
ground-shaking quake
affecting everyone in
battle. Its power
varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user looses a
ground-shaking quake
affecting everyone in
battle. Its power
varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user looses a
ground-shaking quake
affecting everyone in
battle. Its power
varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un tremblement de terre d’intensité
variable qui affecte tous les Pokémon
alentour. L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user looses a ground-shaking quake
affecting everyone around the user.
Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user looses a ground-shaking quake
affecting everyone around the user.
Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`じめんを　ゆらして　じぶんの
まわりに　いるものを　こうげきする。
わざの　いりょくは　いろいろ　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`땅을 흔들어서 자신의
주위에 있는 포켓몬을 공격한다.
기술의 위력이 여러모로 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Provoque un tremblement de terre d’intensité
variable qui affecte tous les Pokémon alentour.
L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Erdbebenartiger Angriff von zufälliger Stärke gegen
andere Pokémon in der Umgebung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Sacudida sísmica de intensidad variable que afecta
a todos los Pokémon a su alrededor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa scatena un terremoto d’intensità
variabile che danneggia i Pokémon che ha intorno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user attacks everything around it
with a ground-shaking quake.
Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`地面を　揺らして　自分の
周りに　いるものを　攻撃する。
技の　威力は　いろいろ　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`じめんを　ゆらして　じぶんの
まわりに　いるものを　こうげきする。
わざの　いりょくは　いろいろ　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`땅을 흔들어서 자신의
주위에 있는 포켓몬을 공격한다.
기술의 위력이 여러모로 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Provoque un tremblement de terre d’intensité
variable qui affecte tous les Pokémon alentour.
L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Erdbebenartiger Angriff von zufälliger Stärke
gegen andere Pokémon in der Umgebung
des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Sacudida sísmica de intensidad variable que afecta 
a todos los Pokémon a su alrededor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa scatena un terremoto d’intensità
variabile che danneggia i Pokémon che ha intorno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user attacks everything around it
with a ground-shaking quake.
Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`地面を　揺らして　自分の
周りに　いるものを　攻撃する。
技の　威力は　いろいろ　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`じめんを　ゆらして　じぶんの
まわりに　いるものを　こうげきする。
わざの　いりょくは　いろいろ　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`땅을 흔들어서 자신의
주위에 있는 포켓몬을 공격한다.
기술의 위력이 여러모로 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`晃動地面，攻擊自己
周圍所有的寶可夢。
招式的威力有多種變化。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Provoque un tremblement de terre d’intensité
variable qui affecte tous les Pokémon alentour.
L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Erdbebenartiger Angriff von zufälliger Stärke gegen
andere Pokémon in der Umgebung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Sacudida sísmica de intensidad variable que afecta 
a todos los Pokémon a su alrededor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa scatena un terremoto d’intensità
variabile che danneggia i Pokémon che ha intorno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks everything around it with a
ground-shaking quake. Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`地面を　揺らして　自分の
周りに　いるものを　攻撃する。
技の　威力は　いろいろ　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`晃动地面，攻击自己
周围所有的宝可梦。
招式的威力会有各种变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`じめんを　ゆらして　じぶんの
まわりに　いるものを　こうげきする。
わざの　いりょくは　いろいろ　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`땅을 흔들어서 자신의
주위에 있는 포켓몬을 공격한다.
기술의 위력이 여러모로 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`晃動地面，攻擊自己
周圍所有的寶可夢。
招式的威力有多種變化。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Provoque un tremblement de terre d’intensité
variable qui affecte tous les Pokémon alentour.
L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Erdbebenartiger Angriff von zufälliger Stärke gegen
andere Pokémon in der Umgebung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Sacudida sísmica de intensidad variable que afecta 
a todos los Pokémon a su alrededor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa scatena un terremoto d’intensità
variabile che danneggia i Pokémon che ha intorno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks everything around it with a
ground-shaking quake. Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`地面を　揺らして　自分の
周りに　いるものを　攻撃する。
技の　威力は　いろいろ　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`晃动地面，攻击自己
周围所有的宝可梦。
招式的威力会有各种变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`じめんを　ゆらして　じぶんの
まわりに　いるものを　こうげきする。
わざの　いりょくは　いろいろ　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`땅을 흔들어서 자신의
주위에 있는 포켓몬을 공격한다.
기술의 위력이 여러모로 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`晃動地面，攻擊自己
周圍所有的寶可夢。
招式的威力有多種變化。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Provoque un tremblement de terre d’intensité
variable qui affecte tous les Pokémon alentour.
L’efficacité varie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Erdbebenartiger Angriff von zufälliger Stärke gegen
andere Pokémon in der Umgebung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Sacudida sísmica de intensidad variable que afecta 
a todos los Pokémon a su alrededor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa scatena un terremoto d’intensità
variabile che danneggia i Pokémon che ha intorno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks everything around it with a
ground-shaking quake. Its power varies.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`地面を　揺らして　自分の
周りに　いるものを　攻撃する。
技の　威力は　いろいろ　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`晃动地面，攻击自己
周围所有的宝可梦。
招式的威力会有各种变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-ii",url:"https://pokeapi.co/api/v2/generation/2/"},u=222,s=[{name:"sandshrew",url:"https://pokeapi.co/api/v2/pokemon/27/"},{name:"sandslash",url:"https://pokeapi.co/api/v2/pokemon/28/"},{name:"diglett",url:"https://pokeapi.co/api/v2/pokemon/50/"},{name:"dugtrio",url:"https://pokeapi.co/api/v2/pokemon/51/"},{name:"geodude",url:"https://pokeapi.co/api/v2/pokemon/74/"},{name:"graveler",url:"https://pokeapi.co/api/v2/pokemon/75/"},{name:"golem",url:"https://pokeapi.co/api/v2/pokemon/76/"},{name:"lickitung",url:"https://pokeapi.co/api/v2/pokemon/108/"},{name:"rhyhorn",url:"https://pokeapi.co/api/v2/pokemon/111/"},{name:"donphan",url:"https://pokeapi.co/api/v2/pokemon/232/"},{name:"nosepass",url:"https://pokeapi.co/api/v2/pokemon/299/"},{name:"numel",url:"https://pokeapi.co/api/v2/pokemon/322/"},{name:"camerupt",url:"https://pokeapi.co/api/v2/pokemon/323/"},{name:"barboach",url:"https://pokeapi.co/api/v2/pokemon/339/"},{name:"whiscash",url:"https://pokeapi.co/api/v2/pokemon/340/"},{name:"relicanth",url:"https://pokeapi.co/api/v2/pokemon/369/"},{name:"tepig",url:"https://pokeapi.co/api/v2/pokemon/498/"},{name:"roggenrola",url:"https://pokeapi.co/api/v2/pokemon/524/"},{name:"golett",url:"https://pokeapi.co/api/v2/pokemon/622/"},{name:"golurk",url:"https://pokeapi.co/api/v2/pokemon/623/"},{name:"mudbray",url:"https://pokeapi.co/api/v2/pokemon/749/"},{name:"camerupt-mega",url:"https://pokeapi.co/api/v2/pokemon/10087/"},{name:"diglett-alola",url:"https://pokeapi.co/api/v2/pokemon/10105/"},{name:"dugtrio-alola",url:"https://pokeapi.co/api/v2/pokemon/10106/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="magnitude",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"マグニチュード"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"매그니튜드"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"震級"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Ampleur"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Intensität"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Magnitud"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Magnitudo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Magnitude"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"マグニチュード"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"震级"}],m=[],h=null,k=30,d=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/18/"},x={name:"all-other-pokemon",url:"https://pokeapi.co/api/v2/move-target/9/"},b={name:"ground",url:"https://pokeapi.co/api/v2/type/5/"},P={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:r,generation:i,id:u,learned_by_pokemon:s,machines:l,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:d,stat_changes:_,super_contest_effect:f,target:x,type:b};export{w as accuracy,y as contest_combos,e as contest_effect,a as contest_type,o as damage_class,P as default,n as effect_chance,p as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,u as id,s as learned_by_pokemon,l as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,d as priority,_ as stat_changes,f as super_contest_effect,x as target,b as type};
