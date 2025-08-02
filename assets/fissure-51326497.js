const w=30,e={normal:{use_after:[{name:"earthquake",url:"https://pokeapi.co/api/v2/move/89/"}],use_before:null},super:{use_after:null,use_before:null}},a={url:"https://pokeapi.co/api/v2/contest-effect/14/"},o={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},p={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=null,t=[],i=[{effect:`Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.

Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting.

The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Causes a one-hit KO."}],r=[{flavor_text:`A ground-type,
one-hit KO attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`A ground-type,
one-hit KO attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A one-hit KO move that
drops the foe in a fissure.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A one-hit KO move that
drops the foe in a fissure.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is dropped
into a fissure.
The foe faints if it
hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user opens up a
fissure in the ground
and drops the foe in.
The target instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user opens up a
fissure in the ground
and drops the foe in.
The target instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user opens up a
fissure in the ground
and drops the foe in.
The target instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une
crevasse. Si cette attaque réussit,
elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user opens up a fissure in the ground
and drops the target in.
The target instantly faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user opens up a fissure in the ground
and drops the target in.
The target instantly faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen.
Ist die Attacke erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en
ella. Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user opens up a fissure in the ground
and drops the target in.
The target faints instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen.
Ist die Attacke erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en ella. 
Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user opens up a fissure in the ground
and drops the target in.
The target faints instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`讓對手掉進地面的
裂縫中進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen. Ist die
Attacke erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en ella. 
Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user opens up a fissure in the ground and drops
the target in. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`让对手掉落于地裂的
裂缝中进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`讓對手掉進地面的
裂縫中進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen. Ist die
Attacke erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en ella. 
Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user opens up a fissure in the ground and drops
the target in. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`让对手掉落于地裂的
裂缝中进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`讓對手掉進地面的
裂縫中進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen. Ist die
Attacke erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en ella. 
Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user opens up a fissure in the ground and drops
the target in. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`让对手掉落于地裂的
裂缝中进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`じわれの　さけめに
あいてを　おとして　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`땅이 갈라진 곳에
상대를 떨어뜨려 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`讓對手掉進地面的
裂縫中進行攻擊。
只要命中就會一擊瀕死。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur fait tomber l’ennemi dans une crevasse.
Si cette attaque réussit, elle met K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Das Ziel wird in eine Erdspalte geworfen. Ist die Attacke
erfolgreich, führt sie zu einem K.O.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Abre una grieta en el suelo y mete al objetivo en ella. 
Fulmina en un golpe.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa crea una spaccatura nel terreno e cerca
di gettarvici dentro il bersaglio. Se va a segno,
il Pokémon colpito va KO.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user opens up a fissure in the ground and drops
the target in. The target faints instantly if this
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`地割れの　裂け目に
相手を　落として　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`让对手掉落于地裂的
裂缝中进行攻击。
只要命中就会一击濒死。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],s={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},u=90,l=[{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},{name:"blastoise",url:"https://pokeapi.co/api/v2/pokemon/9/"},{name:"ekans",url:"https://pokeapi.co/api/v2/pokemon/23/"},{name:"arbok",url:"https://pokeapi.co/api/v2/pokemon/24/"},{name:"sandshrew",url:"https://pokeapi.co/api/v2/pokemon/27/"},{name:"sandslash",url:"https://pokeapi.co/api/v2/pokemon/28/"},{name:"nidoqueen",url:"https://pokeapi.co/api/v2/pokemon/31/"},{name:"nidoking",url:"https://pokeapi.co/api/v2/pokemon/34/"},{name:"diglett",url:"https://pokeapi.co/api/v2/pokemon/50/"},{name:"dugtrio",url:"https://pokeapi.co/api/v2/pokemon/51/"},{name:"poliwhirl",url:"https://pokeapi.co/api/v2/pokemon/61/"},{name:"poliwrath",url:"https://pokeapi.co/api/v2/pokemon/62/"},{name:"machop",url:"https://pokeapi.co/api/v2/pokemon/66/"},{name:"machoke",url:"https://pokeapi.co/api/v2/pokemon/67/"},{name:"machamp",url:"https://pokeapi.co/api/v2/pokemon/68/"},{name:"geodude",url:"https://pokeapi.co/api/v2/pokemon/74/"},{name:"graveler",url:"https://pokeapi.co/api/v2/pokemon/75/"},{name:"golem",url:"https://pokeapi.co/api/v2/pokemon/76/"},{name:"slowpoke",url:"https://pokeapi.co/api/v2/pokemon/79/"},{name:"slowbro",url:"https://pokeapi.co/api/v2/pokemon/80/"},{name:"onix",url:"https://pokeapi.co/api/v2/pokemon/95/"},{name:"cubone",url:"https://pokeapi.co/api/v2/pokemon/104/"},{name:"marowak",url:"https://pokeapi.co/api/v2/pokemon/105/"},{name:"lickitung",url:"https://pokeapi.co/api/v2/pokemon/108/"},{name:"rhyhorn",url:"https://pokeapi.co/api/v2/pokemon/111/"},{name:"rhydon",url:"https://pokeapi.co/api/v2/pokemon/112/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"tauros",url:"https://pokeapi.co/api/v2/pokemon/128/"},{name:"lapras",url:"https://pokeapi.co/api/v2/pokemon/131/"},{name:"snorlax",url:"https://pokeapi.co/api/v2/pokemon/143/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"swinub",url:"https://pokeapi.co/api/v2/pokemon/220/"},{name:"piloswine",url:"https://pokeapi.co/api/v2/pokemon/221/"},{name:"phanpy",url:"https://pokeapi.co/api/v2/pokemon/231/"},{name:"wailmer",url:"https://pokeapi.co/api/v2/pokemon/320/"},{name:"camerupt",url:"https://pokeapi.co/api/v2/pokemon/323/"},{name:"torkoal",url:"https://pokeapi.co/api/v2/pokemon/324/"},{name:"trapinch",url:"https://pokeapi.co/api/v2/pokemon/328/"},{name:"vibrava",url:"https://pokeapi.co/api/v2/pokemon/329/"},{name:"flygon",url:"https://pokeapi.co/api/v2/pokemon/330/"},{name:"barboach",url:"https://pokeapi.co/api/v2/pokemon/339/"},{name:"whiscash",url:"https://pokeapi.co/api/v2/pokemon/340/"},{name:"spheal",url:"https://pokeapi.co/api/v2/pokemon/363/"},{name:"groudon",url:"https://pokeapi.co/api/v2/pokemon/383/"},{name:"shieldon",url:"https://pokeapi.co/api/v2/pokemon/410/"},{name:"bastiodon",url:"https://pokeapi.co/api/v2/pokemon/411/"},{name:"shellos",url:"https://pokeapi.co/api/v2/pokemon/422/"},{name:"munchlax",url:"https://pokeapi.co/api/v2/pokemon/446/"},{name:"hippopotas",url:"https://pokeapi.co/api/v2/pokemon/449/"},{name:"hippowdon",url:"https://pokeapi.co/api/v2/pokemon/450/"},{name:"mamoswine",url:"https://pokeapi.co/api/v2/pokemon/473/"},{name:"drilbur",url:"https://pokeapi.co/api/v2/pokemon/529/"},{name:"excadrill",url:"https://pokeapi.co/api/v2/pokemon/530/"},{name:"stunfisk",url:"https://pokeapi.co/api/v2/pokemon/618/"},{name:"landorus-incarnate",url:"https://pokeapi.co/api/v2/pokemon/645/"},{name:"mudbray",url:"https://pokeapi.co/api/v2/pokemon/749/"},{name:"cufant",url:"https://pokeapi.co/api/v2/pokemon/878/"},{name:"nacli",url:"https://pokeapi.co/api/v2/pokemon/932/"},{name:"dondozo",url:"https://pokeapi.co/api/v2/pokemon/977/"},{name:"ting-lu",url:"https://pokeapi.co/api/v2/pokemon/1003/"},{name:"wormadam-sandy",url:"https://pokeapi.co/api/v2/pokemon/10004/"},{name:"landorus-therian",url:"https://pokeapi.co/api/v2/pokemon/10021/"},{name:"groudon-primal",url:"https://pokeapi.co/api/v2/pokemon/10078/"},{name:"camerupt-mega",url:"https://pokeapi.co/api/v2/pokemon/10087/"},{name:"diglett-alola",url:"https://pokeapi.co/api/v2/pokemon/10105/"},{name:"dugtrio-alola",url:"https://pokeapi.co/api/v2/pokemon/10106/"},{name:"stunfisk-galar",url:"https://pokeapi.co/api/v2/pokemon/10180/"}],g=[{machine:{url:"https://pokeapi.co/api/v2/machine/522/"},version_group:{name:"red-blue",url:"https://pokeapi.co/api/v2/version-group/1/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/523/"},version_group:{name:"yellow",url:"https://pokeapi.co/api/v2/version-group/2/"}}],v={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"ohko",url:"https://pokeapi.co/api/v2/move-category/9/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},c="fissure",h=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"じわれ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"땅가르기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"地裂"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Abîme"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Geofissur"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Fisura"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Abisso"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Fissure"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"じわれ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"地裂"}],m=[],k=null,f=5,_=0,d=[],x={url:"https://pokeapi.co/api/v2/super-contest-effect/9/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},b={name:"ground",url:"https://pokeapi.co/api/v2/type/5/"},T={accuracy:30,contest_combos:e,contest_effect:a,contest_type:o,damage_class:p,effect_chance:n,effect_changes:t,effect_entries:i,flavor_text_entries:r,generation:s,id:u,learned_by_pokemon:l,machines:g,meta:v,name:c,names:h,past_values:m,power:k,pp:f,priority:_,stat_changes:d,super_contest_effect:x,target:y,type:b};export{w as accuracy,e as contest_combos,a as contest_effect,o as contest_type,p as damage_class,T as default,n as effect_chance,t as effect_changes,i as effect_entries,r as flavor_text_entries,s as generation,u as id,l as learned_by_pokemon,g as machines,v as meta,c as name,h as names,m as past_values,k as power,f as pp,_ as priority,d as stat_changes,x as super_contest_effect,y as target,b as type};
