const A=100,x=null,y=null,w=null,a={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},e=100,o=[],n=[{effect:"Lowers all targets' Attack and Special Attack by one stage.  Makes the user switch out.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Lowers all targets' Attack and Special Attack by one stage.  Makes the user switch out."}],t=[{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su
equipo, pero antes amedrenta a su oponente y
hace que disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio,
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`With a parting threat, the user lowers
the target’s Attack and Sp. Atk stats.
Then it switches with a party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su equipo, 
pero antes amedrenta a su oponente y hace que
disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio, 
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`With a parting threat, the user lowers
the target’s Attack and Sp. Atk stats.
Then it switches with a party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`拋下狠話恐嚇對手，
降低對手的攻擊和特攻後，
和後備寶可夢進行替換。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su equipo, 
pero antes amedrenta a su oponente y hace que
disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio, 
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`With a parting threat, the user lowers the target’s
Attack and Sp. Atk stats. Then it switches with a
party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`抛下狠话威吓对手，
降低攻击和特攻后，
和后备宝可梦进行替换。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`拋下狠話恐嚇對手，
降低對手的攻擊和特攻後，
和後備寶可夢進行替換。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su equipo, 
pero antes amedrenta a su oponente y hace que
disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio, 
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`With a parting threat, the user lowers the target’s
Attack and Sp. Atk stats. Then it switches with a
party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`抛下狠话威吓对手，
降低攻击和特攻后，
和后备宝可梦进行替换。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`拋下狠話恐嚇對手，
降低對手的攻擊和特攻後，
和後備寶可夢進行替換。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su equipo, 
pero antes amedrenta a su oponente y hace que
disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio,
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`With a parting threat, the user lowers the target’s
Attack and Sp. Atk stats. Then it switches with a
party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`抛下狠话威吓对手，
降低攻击和特攻后，
和后备宝可梦进行替换。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すてゼリフで　あいてを　いかくし
こうげきと　とくこうを　さげたのち
ひかえの　ポケモンと　いれかわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`막말을 내뱉어 상대를 위협하여
공격과 특수공격을 떨어뜨린 후
교대 포켓몬과 교체한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`拋下狠話恐嚇對手，
降低對手的攻擊和特攻後，
和後備寶可夢進行替換。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Menace l’ennemi dans une ultime tirade avant
de changer de place avec un autre Pokémon.
Réduit l’Attaque et l’Attaque Spéciale de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Schüchtert das Ziel mit einer Abgangstirade ein,
sodass dessen Angriffs- und Spezial-Angriffs-Wert
sinken. Danach wird der Anwender ausgewechselt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario se cambia por otro Pokémon de su equipo,
pero antes amedrenta a su oponente y hace que
disminuyan su Ataque y Ataque Especial.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa lancia un monito intimidatorio al bersaglio,
riducendone l’Attacco e l’Attacco Speciale, e si fa
sostituire da un altro Pokémon della squadra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`With a parting threat, the user lowers the target’s
Attack and Sp. Atk stats. Then it switches with a
party Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`すてゼリフで　相手を　いかくし
攻撃と　特攻を　さげたのち
控えの　ポケモンと　入れ替わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`抛下狠话威吓对手，
降低攻击和特攻后，
和后备宝可梦进行替换。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pokémon.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches places with a party Pokémon in waiting.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},i=575,r=[{name:"chatot",url:"https://pokeapi.co/api/v2/pokemon/441/"},{name:"pancham",url:"https://pokeapi.co/api/v2/pokemon/674/"},{name:"pangoro",url:"https://pokeapi.co/api/v2/pokemon/675/"},{name:"litten",url:"https://pokeapi.co/api/v2/pokemon/725/"},{name:"torracat",url:"https://pokeapi.co/api/v2/pokemon/726/"},{name:"incineroar",url:"https://pokeapi.co/api/v2/pokemon/727/"},{name:"silvally",url:"https://pokeapi.co/api/v2/pokemon/773/"},{name:"thievul",url:"https://pokeapi.co/api/v2/pokemon/828/"},{name:"impidimp",url:"https://pokeapi.co/api/v2/pokemon/859/"},{name:"morpeko-full-belly",url:"https://pokeapi.co/api/v2/pokemon/877/"},{name:"squawkabilly-green-plumage",url:"https://pokeapi.co/api/v2/pokemon/931/"},{name:"shroodle",url:"https://pokeapi.co/api/v2/pokemon/944/"},{name:"bombirdier",url:"https://pokeapi.co/api/v2/pokemon/962/"},{name:"varoom",url:"https://pokeapi.co/api/v2/pokemon/965/"},{name:"munkidori",url:"https://pokeapi.co/api/v2/pokemon/1015/"},{name:"pecharunt",url:"https://pokeapi.co/api/v2/pokemon/1025/"},{name:"meowth-alola",url:"https://pokeapi.co/api/v2/pokemon/10107/"},{name:"zigzagoon-galar",url:"https://pokeapi.co/api/v2/pokemon/10174/"},{name:"morpeko-hangry",url:"https://pokeapi.co/api/v2/pokemon/10187/"},{name:"squawkabilly-blue-plumage",url:"https://pokeapi.co/api/v2/pokemon/10260/"},{name:"squawkabilly-yellow-plumage",url:"https://pokeapi.co/api/v2/pokemon/10261/"},{name:"squawkabilly-white-plumage",url:"https://pokeapi.co/api/v2/pokemon/10262/"}],s=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"net-good-stats",url:"https://pokeapi.co/api/v2/move-category/2/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},l="parting-shot",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"すてゼリフ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"막말내뱉기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"拋下狠話"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Dernier Mot"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Abgangstirade"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Última Palabra"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Monito"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Parting Shot"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"すてゼリフ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"抛下狠话"}],c=[],v=null,m=20,h=0,k=[{change:-1,stat:{name:"attack",url:"https://pokeapi.co/api/v2/stat/2/"}},{change:-1,stat:{name:"special-attack",url:"https://pokeapi.co/api/v2/stat/4/"}}],d=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},q={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:a,effect_chance:e,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:i,learned_by_pokemon:r,machines:s,meta:u,name:l,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:d,target:_,type:f};export{A as accuracy,x as contest_combos,y as contest_effect,w as contest_type,a as damage_class,q as default,e as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,i as id,r as learned_by_pokemon,s as machines,u as meta,l as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,d as super_contest_effect,_ as target,f as type};
