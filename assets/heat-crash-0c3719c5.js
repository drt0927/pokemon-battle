const x=100,w=null,y=null,b=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=null,o=[],p=[{effect:`Inflicts regular damage.  The greater the user's weight compared to the target's, the higher power this move has, to a maximum of 120.

User's weight                    | Power
-------------------------------- | ----:
Up to 2× the target's weight     |    40
Up to 3× the target's weight     |    60
Up to 4× the target's weight     |    80
Up to 5× the target's weight     |   100
More than 5× the target's weight |   120
`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Power is higher when the user weighs more than the target, up to a maximum of 120."}],t=[{flavor_text:`Le lanceur projette son corps enflammé
contre l’ennemi. S’il est plus lourd que
l’ennemi, l’effet augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user slams its target with its flame-
covered body. The more the user outweighs
the target, the greater the damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user slams its target with its flame-
covered body. The more the user outweighs
the target, the greater the damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur projette son corps enflammé contre
l’ennemi. S’il est plus lourd que l’ennemi, l’effet
augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Rempelattacke mit brennendem Körper.
Je schwerer der Anwender im Vergleich
zum Ziel ist, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto
mayor sea su peso comparado con el del objetivo,
más daño causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio e più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user slams its target with its flame-
covered body. The more the user outweighs
the target, the greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur projette son corps enflammé contre
l’ennemi. S’il est plus lourd que l’ennemi, l’effet
augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Rempelattacke mit brennendem Körper.
Je schwerer der Anwender im Vergleich
zum Ziel ist, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto
mayor sea su peso comparado con el del objetivo, 
más daño causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio e più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user slams its target with its flame-
covered body. The more the user outweighs
the target, the greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。　じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用燃燒的身體重壓對手
進行攻擊。體重比對手
重越多，威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur projette son corps enflammé contre
l’ennemi. S’il est plus lourd que l’ennemi, l’effet
augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Rempelattacke mit brennendem Körper. Je schwerer
der Anwender im Vergleich zum Ziel ist, desto
stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto
mayor sea su peso comparado con el del objetivo, 
más daño causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio, più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user slams its target with its flame-covered
body. The more the user outweighs the target, the
greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。　自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用燃烧的身体撞向对手进行攻击。
自己比对手越重，威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。　じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用燃燒的身體重壓對手
進行攻擊。體重比對手
重越多，威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur projette son corps enflammé contre
l’ennemi. S’il est plus lourd que l’ennemi, l’effet
augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Rempelattacke mit brennendem Körper. Je schwerer
der Anwender im Vergleich zum Ziel ist, desto
stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto
mayor sea su peso comparado con el del objetivo, 
más daño causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio, più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user slams its target with its flame-covered
body. The more the user outweighs the target, the
greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。　自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用燃烧的身体撞向对手进行攻击。
自己比对手越重，威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。　じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用燃燒的身體重壓對手
進行攻擊。體重比對手
重越多，威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur projette son corps enflammé contre
l’ennemi. S’il est plus lourd que l’ennemi, l’effet
augmente en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Rempelattacke mit brennendem Körper. Je schwerer
der Anwender im Vergleich zum Ziel ist, desto
stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto
mayor sea su peso comparado con el del objetivo, 
más daño causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio, più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user slams its target with its flame-covered
body. The more the user outweighs the target, the
greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。　自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用燃烧的身体撞向对手进行攻击。
自己比对手越重，威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`もえる　からだで　あいてに　ぶつかって
こうげきする。　じぶんが　あいてより
おもいほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`불타는 몸으로 상대에게 부딪쳐서
공격한다. 자신이 상대보다
무거울수록 위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用燃燒的身體重壓對手
進行攻擊。體重比對手
重越多，威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur projette son corps enflammé contre l’ennemi.
S’il est plus lourd que l’ennemi, l’effet augmente
en conséquence.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Rempelattacke mit brennendem Körper. Je schwerer
der Anwender im Vergleich zum Ziel ist, desto stärker
die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario ataca con su cuerpo ardiente. Cuanto mayor
sea su peso comparado con el del objetivo, más daño
causará.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa carica con il suo corpo rovente. Più è
pesante rispetto al bersaglio, più danni causa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user slams its target with its flame-covered
body. The more the user outweighs the target, the
greater the move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`燃える　体で　相手に　ぶつかって
攻撃する。　自分が　相手より
重いほど　威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用燃烧的身体撞向对手进行攻击。
自己比对手越重，威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user slams into the target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],n={name:"generation-v",url:"https://pokeapi.co/api/v2/generation/5/"},r=535,i=[{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},{name:"arcanine",url:"https://pokeapi.co/api/v2/pokemon/59/"},{name:"rhydon",url:"https://pokeapi.co/api/v2/pokemon/112/"},{name:"magmar",url:"https://pokeapi.co/api/v2/pokemon/126/"},{name:"snorlax",url:"https://pokeapi.co/api/v2/pokemon/143/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"slugma",url:"https://pokeapi.co/api/v2/pokemon/218/"},{name:"magcargo",url:"https://pokeapi.co/api/v2/pokemon/219/"},{name:"blaziken",url:"https://pokeapi.co/api/v2/pokemon/257/"},{name:"numel",url:"https://pokeapi.co/api/v2/pokemon/322/"},{name:"camerupt",url:"https://pokeapi.co/api/v2/pokemon/323/"},{name:"torkoal",url:"https://pokeapi.co/api/v2/pokemon/324/"},{name:"groudon",url:"https://pokeapi.co/api/v2/pokemon/383/"},{name:"rhyperior",url:"https://pokeapi.co/api/v2/pokemon/464/"},{name:"magmortar",url:"https://pokeapi.co/api/v2/pokemon/467/"},{name:"heatran",url:"https://pokeapi.co/api/v2/pokemon/485/"},{name:"regigigas",url:"https://pokeapi.co/api/v2/pokemon/486/"},{name:"tepig",url:"https://pokeapi.co/api/v2/pokemon/498/"},{name:"pignite",url:"https://pokeapi.co/api/v2/pokemon/499/"},{name:"emboar",url:"https://pokeapi.co/api/v2/pokemon/500/"},{name:"golurk",url:"https://pokeapi.co/api/v2/pokemon/623/"},{name:"reshiram",url:"https://pokeapi.co/api/v2/pokemon/643/"},{name:"volcanion",url:"https://pokeapi.co/api/v2/pokemon/721/"},{name:"incineroar",url:"https://pokeapi.co/api/v2/pokemon/727/"},{name:"turtonator",url:"https://pokeapi.co/api/v2/pokemon/776/"},{name:"solgaleo",url:"https://pokeapi.co/api/v2/pokemon/791/"},{name:"guzzlord",url:"https://pokeapi.co/api/v2/pokemon/799/"},{name:"stakataka",url:"https://pokeapi.co/api/v2/pokemon/805/"},{name:"rolycoly",url:"https://pokeapi.co/api/v2/pokemon/837/"},{name:"carkol",url:"https://pokeapi.co/api/v2/pokemon/838/"},{name:"coalossal",url:"https://pokeapi.co/api/v2/pokemon/839/"},{name:"sizzlipede",url:"https://pokeapi.co/api/v2/pokemon/850/"},{name:"centiskorch",url:"https://pokeapi.co/api/v2/pokemon/851/"},{name:"stonjourner",url:"https://pokeapi.co/api/v2/pokemon/874/"},{name:"copperajah",url:"https://pokeapi.co/api/v2/pokemon/879/"},{name:"skeledirge",url:"https://pokeapi.co/api/v2/pokemon/911/"},{name:"slither-wing",url:"https://pokeapi.co/api/v2/pokemon/988/"},{name:"koraidon",url:"https://pokeapi.co/api/v2/pokemon/1007/"},{name:"gouging-fire",url:"https://pokeapi.co/api/v2/pokemon/1020/"},{name:"terapagos",url:"https://pokeapi.co/api/v2/pokemon/1024/"},{name:"arcanine-hisui",url:"https://pokeapi.co/api/v2/pokemon/10230/"},{name:"koraidon-limited-build",url:"https://pokeapi.co/api/v2/pokemon/10264/"},{name:"koraidon-sprinting-build",url:"https://pokeapi.co/api/v2/pokemon/10265/"},{name:"koraidon-swimming-build",url:"https://pokeapi.co/api/v2/pokemon/10266/"},{name:"koraidon-gliding-build",url:"https://pokeapi.co/api/v2/pokemon/10267/"},{name:"terapagos-terastal",url:"https://pokeapi.co/api/v2/pokemon/10276/"},{name:"terapagos-stellar",url:"https://pokeapi.co/api/v2/pokemon/10277/"}],s=[{machine:{url:"https://pokeapi.co/api/v2/machine/1677/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/1894/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/1957/"},version_group:{name:"the-teal-mask",url:"https://pokeapi.co/api/v2/version-group/26/"}}],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="heat-crash",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ヒートスタンプ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"히트스탬프"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"高溫重壓"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Tacle Feu"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Brandstempel"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Golpe Calor"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Marchiafuoco"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Heat Crash"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ヒートスタンプ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"高温重压"}],m=[],c=null,v=10,h=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"fire",url:"https://pokeapi.co/api/v2/type/10/"},j={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:p,flavor_text_entries:t,generation:n,id:r,learned_by_pokemon:i,machines:s,meta:u,name:l,names:g,past_values:m,power:c,pp:v,priority:h,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,w as contest_combos,y as contest_effect,b as contest_type,e as damage_class,j as default,a as effect_chance,o as effect_changes,p as effect_entries,t as flavor_text_entries,n as generation,r as id,i as learned_by_pokemon,s as machines,u as meta,l as name,g as names,m as past_values,c as power,v as pp,h as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
