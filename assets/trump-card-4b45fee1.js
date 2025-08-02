const x=null,w=null,y=null,e={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},a={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},o=null,p=[],n=[{effect:`Inflicts regular damage.  Power is determined by the PP remaining for this move, after its PP cost is deducted.  Ignores accuracy and evasion modifiers.

PP remaining | Power
------------ | ----:
4 or more    |    40
3            |    50
2            |    60
1            |    80
0            |   200

If this move is activated by another move, the activating move's PP is used to calculate power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Power increases when this move has less PP, up to a maximum of 200."}],t=[{flavor_text:`The fewer PP this
move has, the more
power it has for
attack.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The fewer PP this
move has, the more
power it has for
attack.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The fewer PP this
move has, the more
power it has for
attack.
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Moins cette capacité possède de PP,
plus elle est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The fewer PP this move has, the greater
its attack power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The fewer PP this move has, the greater
its attack power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`きりふだの　のこり　ＰＰが
すくなければ　すくないほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`마지막수단의 남은 PP가
적으면 적을수록
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Moins cette capacité possède de PP, plus elle est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Je weniger AP diese Attacke hat,
desto mehr Angriffskraft besitzt sie.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Cuantos menos PP tenga el movimiento, mayor
será la fuerza para atacar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`La potenza di questa mossa aumenta man mano
che i suoi PP diminuiscono.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The fewer PP this move has,
the greater its power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`きりふだの　残り　ＰＰが
少なければ　少ないほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`きりふだの　のこり　ＰＰが
すくなければ　すくないほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`마지막수단의 남은 PP가
적으면 적을수록
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Moins cette capacité possède de PP, plus elle est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Je weniger AP diese Attacke hat,
desto mehr Angriffskraft besitzt sie.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Cuantos menos PP tenga el movimiento, mayor será 
la fuerza para atacar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`La potenza di questa mossa aumenta man mano
che i suoi PP diminuiscono.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The fewer PP this move has,
the greater its power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`きりふだの　残り　ＰＰが
少なければ　少ないほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`きりふだの　のこり　ＰＰが
すくなければ　すくないほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`마지막수단의 남은 PP가
적으면 적을수록
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`這個招式的
剩餘ＰＰ越少，
威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Moins cette capacité possède de PP, plus elle est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Je weniger AP diese Attacke hat, desto höher fällt
ihre Stärke aus.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Cuantos menos PP tenga el movimiento, mayor será 
la fuerza para atacar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`La potenza di questa mossa aumenta man mano
che i suoi PP diminuiscono.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"The fewer PP this move has, the greater its power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`きりふだの　残り　ＰＰが
少なければ　少ないほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`王牌招式的
剩余ＰＰ越少，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`きりふだの　のこり　ＰＰが
すくなければ　すくないほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`마지막수단의 남은 PP가
적으면 적을수록
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`這個招式的
剩餘ＰＰ越少，
威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Moins cette capacité possède de PP, plus elle est
puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Je weniger AP diese Attacke hat, desto höher fällt
ihre Stärke aus.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Cuantos menos PP tenga el movimiento, mayor será 
la fuerza para atacar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`La potenza di questa mossa aumenta man mano
che i suoi PP diminuiscono.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"The fewer PP this move has, the greater its power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`きりふだの　残り　ＰＰが
少なければ　少ないほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`王牌招式的
剩余ＰＰ越少，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`きりふだの　のこり　ＰＰが
すくなければ　すくないほど
わざの　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`마지막수단의 남은 PP가
적으면 적을수록
기술의 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`這個招式的
剩餘PP越少，
威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Moins cette capacité possède de PP,
plus elle est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Je weniger AP diese Attacke hat, desto höher fällt
ihre Stärke aus.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Cuantos menos PP tenga el movimiento, mayor será 
la fuerza para atacar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`La potenza di questa mossa aumenta man mano
che i suoi PP diminuiscono.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"The fewer PP this move has, the greater its power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`きりふだの　残り　ＰＰが
少なければ　少ないほど
技の　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`王牌招式的
剩余PP越少，
招式的威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=376,s=[{name:"farfetchd",url:"https://pokeapi.co/api/v2/pokemon/83/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"eevee",url:"https://pokeapi.co/api/v2/pokemon/133/"},{name:"slowking",url:"https://pokeapi.co/api/v2/pokemon/199/"},{name:"dunsparce",url:"https://pokeapi.co/api/v2/pokemon/206/"},{name:"minun",url:"https://pokeapi.co/api/v2/pokemon/312/"},{name:"corphish",url:"https://pokeapi.co/api/v2/pokemon/341/"},{name:"shellos",url:"https://pokeapi.co/api/v2/pokemon/422/"},{name:"oshawott",url:"https://pokeapi.co/api/v2/pokemon/501/"},{name:"magearna",url:"https://pokeapi.co/api/v2/pokemon/801/"},{name:"kangaskhan-mega",url:"https://pokeapi.co/api/v2/pokemon/10039/"},{name:"magearna-original",url:"https://pokeapi.co/api/v2/pokemon/10147/"}],u=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="trump-card",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"きりふだ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"마지막수단"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"王牌"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Atout"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Trumpfkarte"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"As Oculto"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Asso"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Trump Card"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"きりふだ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"王牌"}],m=[],c=null,h=5,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/21/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},P={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},b={accuracy:null,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:r,id:i,learned_by_pokemon:s,machines:u,meta:l,name:g,names:v,past_values:m,power:c,pp:h,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:P};export{x as accuracy,w as contest_combos,y as contest_effect,e as contest_type,a as damage_class,b as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,r as generation,i as id,s as learned_by_pokemon,u as machines,l as meta,g as name,v as names,m as past_values,c as power,h as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,P as type};
