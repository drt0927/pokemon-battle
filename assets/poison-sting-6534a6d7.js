const y=100,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/9/"},a={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=30,n=[],t=[{effect:"Inflicts regular damage.  Has a 30% chance to poison the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 30% chance to poison the target."}],i=[{flavor_text:`An attack that may
poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`An attack that may
poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A toxic attack with barbs,
etc., that may poison.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A toxic attack with barbs,
etc., that may poison.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is stabbed
with a toxic barb,
etc. It may poison
the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is stabbed
with a poisonous
barb of some sort.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is stabbed
with a poisonous
barb of some sort.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is stabbed
with a poisonous
barb of some sort.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user stabs the target
with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user stabs the target
with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Angriff mit Giftstachel. Das Ziel wird eventuell
vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar
al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user stabs the target
with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Angriff mit Giftstachel. Das Ziel wird eventuell
vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar al 
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user stabs the target
with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將有毒的針
刺進對手進行攻擊。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Angriff mit Giftstachel. Das Ziel wird eventuell
vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar al 
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user stabs the target with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将有毒的针
刺入对手进行攻击。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將有毒的針
刺進對手進行攻擊。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Angriff mit Giftstachel. Das Ziel wird eventuell
vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar al 
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user stabs the target with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将有毒的针
刺入对手进行攻击。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將有毒的針
刺進對手進行攻擊。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Angriff mit Giftstachel. Das Ziel wird eventuell
vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar al 
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user stabs the target with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将有毒的针
刺入对手进行攻击。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`どくの　ある　ハリを
あいてに　つきさして　こうげきする。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`독이 있는 침을
상대에게 꿰찔러서 공격한다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`將有毒的針
刺進對手進行攻擊。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Un dard toxique qui transperce l’ennemi.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"Angriff mit Giftstachel. Das Ziel wird eventuell vergiftet.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Lanza un aguijón tóxico que puede envenenar al 
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Colpisce il bersaglio con un aculeo tossico
che può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user stabs the target with a poisonous stinger.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`毒の　ある　ハリを
相手に　突き刺して　攻撃する。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`将有毒的针
刺入对手进行攻击。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user stabs the target with a poisonous stinger. This may also poison the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user stabs the target with a poisonous stinger to inflict damage. This may also poison the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},s=40,u=[{name:"weedle",url:"https://pokeapi.co/api/v2/pokemon/13/"},{name:"beedrill",url:"https://pokeapi.co/api/v2/pokemon/15/"},{name:"ekans",url:"https://pokeapi.co/api/v2/pokemon/23/"},{name:"arbok",url:"https://pokeapi.co/api/v2/pokemon/24/"},{name:"sandshrew",url:"https://pokeapi.co/api/v2/pokemon/27/"},{name:"sandslash",url:"https://pokeapi.co/api/v2/pokemon/28/"},{name:"nidoran-f",url:"https://pokeapi.co/api/v2/pokemon/29/"},{name:"nidorina",url:"https://pokeapi.co/api/v2/pokemon/30/"},{name:"nidoqueen",url:"https://pokeapi.co/api/v2/pokemon/31/"},{name:"nidoran-m",url:"https://pokeapi.co/api/v2/pokemon/32/"},{name:"nidorino",url:"https://pokeapi.co/api/v2/pokemon/33/"},{name:"nidoking",url:"https://pokeapi.co/api/v2/pokemon/34/"},{name:"tentacool",url:"https://pokeapi.co/api/v2/pokemon/72/"},{name:"tentacruel",url:"https://pokeapi.co/api/v2/pokemon/73/"},{name:"spinarak",url:"https://pokeapi.co/api/v2/pokemon/167/"},{name:"ariados",url:"https://pokeapi.co/api/v2/pokemon/168/"},{name:"gligar",url:"https://pokeapi.co/api/v2/pokemon/207/"},{name:"qwilfish",url:"https://pokeapi.co/api/v2/pokemon/211/"},{name:"wurmple",url:"https://pokeapi.co/api/v2/pokemon/265/"},{name:"silcoon",url:"https://pokeapi.co/api/v2/pokemon/266/"},{name:"beautifly",url:"https://pokeapi.co/api/v2/pokemon/267/"},{name:"cascoon",url:"https://pokeapi.co/api/v2/pokemon/268/"},{name:"dustox",url:"https://pokeapi.co/api/v2/pokemon/269/"},{name:"roselia",url:"https://pokeapi.co/api/v2/pokemon/315/"},{name:"cacnea",url:"https://pokeapi.co/api/v2/pokemon/331/"},{name:"cacturne",url:"https://pokeapi.co/api/v2/pokemon/332/"},{name:"budew",url:"https://pokeapi.co/api/v2/pokemon/406/"},{name:"roserade",url:"https://pokeapi.co/api/v2/pokemon/407/"},{name:"vespiquen",url:"https://pokeapi.co/api/v2/pokemon/416/"},{name:"skorupi",url:"https://pokeapi.co/api/v2/pokemon/451/"},{name:"drapion",url:"https://pokeapi.co/api/v2/pokemon/452/"},{name:"croagunk",url:"https://pokeapi.co/api/v2/pokemon/453/"},{name:"toxicroak",url:"https://pokeapi.co/api/v2/pokemon/454/"},{name:"gliscor",url:"https://pokeapi.co/api/v2/pokemon/472/"},{name:"venipede",url:"https://pokeapi.co/api/v2/pokemon/543/"},{name:"whirlipede",url:"https://pokeapi.co/api/v2/pokemon/544/"},{name:"scolipede",url:"https://pokeapi.co/api/v2/pokemon/545/"},{name:"frillish",url:"https://pokeapi.co/api/v2/pokemon/592/"},{name:"jellicent",url:"https://pokeapi.co/api/v2/pokemon/593/"},{name:"joltik",url:"https://pokeapi.co/api/v2/pokemon/595/"},{name:"galvantula",url:"https://pokeapi.co/api/v2/pokemon/596/"},{name:"mareanie",url:"https://pokeapi.co/api/v2/pokemon/747/"},{name:"toxapex",url:"https://pokeapi.co/api/v2/pokemon/748/"},{name:"overqwil",url:"https://pokeapi.co/api/v2/pokemon/904/"},{name:"clodsire",url:"https://pokeapi.co/api/v2/pokemon/980/"},{name:"qwilfish-hisui",url:"https://pokeapi.co/api/v2/pokemon/10234/"}],l=[],g={ailment:{name:"poison",url:"https://pokeapi.co/api/v2/move-ailment/5/"},ailment_chance:30,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="poison-sting",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"どくばり"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"독침"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"毒針"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Dard-Venin"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Giftstachel"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Picotazo Veneno"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Velenospina"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Poison Sting"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"どくばり"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"毒针"}],h=[{accuracy:null,effect_chance:null,effect_entries:[],power:null,pp:null,type:null,version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}}],m=15,k=35,_=0,f=[],x={url:"https://pokeapi.co/api/v2/super-contest-effect/19/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},b={name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},j={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:i,generation:r,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:x,target:d,type:b};export{y as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,j as default,p as effect_chance,n as effect_changes,t as effect_entries,i as flavor_text_entries,r as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,x as super_contest_effect,d as target,b as type};
