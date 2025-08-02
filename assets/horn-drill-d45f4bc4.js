const w=30,e={normal:{use_after:[{name:"horn-attack",url:"https://pokeapi.co/api/v2/move/30/"}],use_before:null},super:{use_after:null,use_before:null}},a={url:"https://pokeapi.co/api/v2/contest-effect/14/"},o={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},t={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=null,p=[],r=[{effect:`Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.

Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting.

The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Causes a one-hit KO."}],i=[{flavor_text:`A one-hit KO,
drill attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`A one-hit KO,
drill attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A one-hit KO attack that
uses a horn like a drill.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A one-hit KO attack that
uses a horn like a drill.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The horn is rotated
like a drill to ram.
The foe will faint
if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is stabbed
with a horn rotating
like a drill.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is stabbed
with a horn rotating
like a drill.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is stabbed
with a horn rotating
like a drill.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un coup de corne en vrille qui empale
l’ennemi, le mettant K.O. sur le coup
s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user stabs the target with a horn
that rotates like a drill.
If it hits, the target faints instantly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user stabs the target with a horn
that rotates like a drill.
If it hits, the target faints instantly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`K.O.-Attacke, bei der ein Horn als Bohrer
eingesetzt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataque con taladro que fulmina en un golpe al
objetivo si le toca.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante come
un trapano. Se il colpo va a segno, il Pokémon
colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user stabs the target with a horn
that rotates like a drill. The target
faints instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`K.O.-Attacke, bei der ein Horn als Bohrer
eingesetzt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataque con taladro que fulmina en un golpe al
objetivo si le toca.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante
come un trapano. Se il colpo va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user stabs the target with a horn
that rotates like a drill. The target
faints instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用旋轉的角
刺進對手進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attacke, bei der ein Horn als Bohrer eingesetzt wird.
Ist sie erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataque con un cuerno giratorio que fulmina de un
solo golpe al objetivo si lo alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante
come un trapano. Se il colpo va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user stabs the target with a horn that rotates
like a drill. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用旋转的角
刺入对手进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用旋轉的角
刺進對手進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacke, bei der ein Horn als Bohrer eingesetzt wird.
Ist sie erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataque con un cuerno giratorio que fulmina de un
solo golpe al objetivo si lo alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante
come un trapano. Se il colpo va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user stabs the target with a horn that rotates
like a drill. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用旋转的角
刺入对手进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用旋轉的角
刺進對手進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacke, bei der ein Horn als Bohrer eingesetzt wird.
Ist sie erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataque con un cuerno giratorio que fulmina de un
solo golpe al objetivo si lo alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante
come un trapano. Se il colpo va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user stabs the target with a horn that rotates
like a drill. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用旋转的角
刺入对手进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`かいてんする　つのを
あいてに　つきさして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`회전하는 뿔을
상대에게 꿰찔러서 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用旋轉的角
刺進對手進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Un coup de corne en vrille qui empale l’ennemi,
le mettant K.O. sur le coup s’il est touché.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacke, bei der ein Horn als Bohrer eingesetzt wird.
Ist sie erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataque con un cuerno giratorio que fulmina de un solo
golpe al objetivo si lo alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Colpisce il bersaglio con un corno perforante
come un trapano. Se il colpo va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user stabs the target with a horn that rotates
like a drill. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`回転する　つのを
相手に　突き刺して　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用旋转的角
刺入对手进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],l={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},s=32,u=[{name:"nidorina",url:"https://pokeapi.co/api/v2/pokemon/30/"},{name:"nidoqueen",url:"https://pokeapi.co/api/v2/pokemon/31/"},{name:"nidoran-m",url:"https://pokeapi.co/api/v2/pokemon/32/"},{name:"nidorino",url:"https://pokeapi.co/api/v2/pokemon/33/"},{name:"nidoking",url:"https://pokeapi.co/api/v2/pokemon/34/"},{name:"ponyta",url:"https://pokeapi.co/api/v2/pokemon/77/"},{name:"rapidash",url:"https://pokeapi.co/api/v2/pokemon/78/"},{name:"seel",url:"https://pokeapi.co/api/v2/pokemon/86/"},{name:"dewgong",url:"https://pokeapi.co/api/v2/pokemon/87/"},{name:"rhyhorn",url:"https://pokeapi.co/api/v2/pokemon/111/"},{name:"rhydon",url:"https://pokeapi.co/api/v2/pokemon/112/"},{name:"goldeen",url:"https://pokeapi.co/api/v2/pokemon/118/"},{name:"seaking",url:"https://pokeapi.co/api/v2/pokemon/119/"},{name:"tauros",url:"https://pokeapi.co/api/v2/pokemon/128/"},{name:"lapras",url:"https://pokeapi.co/api/v2/pokemon/131/"},{name:"omastar",url:"https://pokeapi.co/api/v2/pokemon/139/"},{name:"dragonair",url:"https://pokeapi.co/api/v2/pokemon/148/"},{name:"dragonite",url:"https://pokeapi.co/api/v2/pokemon/149/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"rhyperior",url:"https://pokeapi.co/api/v2/pokemon/464/"},{name:"excadrill",url:"https://pokeapi.co/api/v2/pokemon/530/"},{name:"tyrunt",url:"https://pokeapi.co/api/v2/pokemon/696/"},{name:"tyrantrum",url:"https://pokeapi.co/api/v2/pokemon/697/"},{name:"ponyta-galar",url:"https://pokeapi.co/api/v2/pokemon/10162/"}],g=[{machine:{url:"https://pokeapi.co/api/v2/machine/122/"},version_group:{name:"red-blue",url:"https://pokeapi.co/api/v2/version-group/1/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/123/"},version_group:{name:"yellow",url:"https://pokeapi.co/api/v2/version-group/2/"}}],v={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"ohko",url:"https://pokeapi.co/api/v2/move-category/9/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},h="horn-drill",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"つのドリル"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"뿔드릴"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"角鑽"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Empal’Korne"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Hornbohrer"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Perforador"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Perforcorno"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Horn Drill"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"つのドリル"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"角钻"}],m=[],k=null,f=5,_=0,d=[],x={url:"https://pokeapi.co/api/v2/super-contest-effect/9/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},b={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},T={accuracy:30,contest_combos:e,contest_effect:a,contest_type:o,damage_class:t,effect_chance:n,effect_changes:p,effect_entries:r,flavor_text_entries:i,generation:l,id:s,learned_by_pokemon:u,machines:g,meta:v,name:h,names:c,past_values:m,power:k,pp:f,priority:_,stat_changes:d,super_contest_effect:x,target:y,type:b};export{w as accuracy,e as contest_combos,a as contest_effect,o as contest_type,t as damage_class,T as default,n as effect_chance,p as effect_changes,r as effect_entries,i as flavor_text_entries,l as generation,s as id,u as learned_by_pokemon,g as machines,v as meta,h as name,c as names,m as past_values,k as power,f as pp,_ as priority,d as stat_changes,x as super_contest_effect,y as target,b as type};
