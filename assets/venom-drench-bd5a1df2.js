const x=100,A=null,y=null,S=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=100,o=[],p=[{effect:"Lowers the target's Attack, Special Attack, and Speed by one stage if it is poisoned.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Lowers the target's Attack, Special Attack, and Speed by one stage if it is poisoned."}],n=[{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-
Angriff und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso
que disminuye el Ataque, el At. Esp. y la Velocidad.
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack,
Sp. Atk, and Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-
Angriff und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso que 
disminuye el Ataque, el At. Esp. y la Velocidad. 
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack,
Sp. Atk, and Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手發射特殊的毒液。
陷入中毒狀態的對手
攻擊、特攻和速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-Angriff
und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso que 
disminuye el Ataque, el At. Esp. y la Velocidad. 
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack, Sp. Atk, and
Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将特殊的毒液泼向对手。
对处于中毒状态的对手，
其攻击、特攻和速度都会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手發射特殊的毒液。
陷入中毒狀態的對手
攻擊、特攻和速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-Angriff
und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso que 
disminuye el Ataque, el At. Esp. y la Velocidad. 
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack, Sp. Atk, and
Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将特殊的毒液泼向对手。
对处于中毒状态的对手，
其攻击、特攻和速度都会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手發射特殊的毒液。
陷入中毒狀態的對手
攻擊、特攻和速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-Angriff
und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso que 
disminuye el Ataque, el At. Esp. y la Velocidad. 
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack, Sp. Atk, and
Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将特殊的毒液泼向对手。
对处于中毒状态的对手，
其攻击、特攻和速度都会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`とくしゅな　どくえきを　あびせかける。
どく　じょうたいの　あいては
こうげき　とくこう　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`특수한 독액을 끼얹는다.
독 상태인 상대는
공격, 특수공격, 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向對手發射特殊的毒液。
陷入中毒狀態的對手
攻擊、特攻和速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Sécrète un liquide empoisonné.
Diminue l’Attaque, l’Attaque Spéciale et la Vitesse
de l’ennemi empoisonné.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender bespritzt das Ziel mit einer speziellen
Giftflüssigkeit. Senkt den Angriff, den Spezial-Angriff
und die Initiative von vergifteten Zielen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Impregna a su objetivo con un líquido venenoso que
disminuye el Ataque, el Ataque Especial y la Velocidad.
Solo afecta a Pokémon ya envenenados.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Emette un liquido particolare che riduce
l’Attacco, l’Attacco Speciale e la Velocità
dei nemici avvelenati intorno a chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Opposing Pokémon are drenched in an odd
poisonous liquid. This lowers the Attack, Sp. Atk, and
Speed stats of a poisoned target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`特殊な　毒液を　浴びせかける。
毒状態の　相手は
攻撃　特攻　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`将特殊的毒液泼向对手。
对处于中毒状态的对手，
其攻击、特攻和速度都会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},i=599,r=[{name:"nidoran-f",url:"https://pokeapi.co/api/v2/pokemon/29/"},{name:"nidorina",url:"https://pokeapi.co/api/v2/pokemon/30/"},{name:"nidoqueen",url:"https://pokeapi.co/api/v2/pokemon/31/"},{name:"nidoran-m",url:"https://pokeapi.co/api/v2/pokemon/32/"},{name:"nidorino",url:"https://pokeapi.co/api/v2/pokemon/33/"},{name:"nidoking",url:"https://pokeapi.co/api/v2/pokemon/34/"},{name:"zubat",url:"https://pokeapi.co/api/v2/pokemon/41/"},{name:"golbat",url:"https://pokeapi.co/api/v2/pokemon/42/"},{name:"tentacruel",url:"https://pokeapi.co/api/v2/pokemon/73/"},{name:"muk",url:"https://pokeapi.co/api/v2/pokemon/89/"},{name:"koffing",url:"https://pokeapi.co/api/v2/pokemon/109/"},{name:"weezing",url:"https://pokeapi.co/api/v2/pokemon/110/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"ariados",url:"https://pokeapi.co/api/v2/pokemon/168/"},{name:"crobat",url:"https://pokeapi.co/api/v2/pokemon/169/"},{name:"qwilfish",url:"https://pokeapi.co/api/v2/pokemon/211/"},{name:"gulpin",url:"https://pokeapi.co/api/v2/pokemon/316/"},{name:"swalot",url:"https://pokeapi.co/api/v2/pokemon/317/"},{name:"seviper",url:"https://pokeapi.co/api/v2/pokemon/336/"},{name:"roserade",url:"https://pokeapi.co/api/v2/pokemon/407/"},{name:"stunky",url:"https://pokeapi.co/api/v2/pokemon/434/"},{name:"skuntank",url:"https://pokeapi.co/api/v2/pokemon/435/"},{name:"drapion",url:"https://pokeapi.co/api/v2/pokemon/452/"},{name:"croagunk",url:"https://pokeapi.co/api/v2/pokemon/453/"},{name:"toxicroak",url:"https://pokeapi.co/api/v2/pokemon/454/"},{name:"woobat",url:"https://pokeapi.co/api/v2/pokemon/527/"},{name:"swoobat",url:"https://pokeapi.co/api/v2/pokemon/528/"},{name:"tympole",url:"https://pokeapi.co/api/v2/pokemon/535/"},{name:"palpitoad",url:"https://pokeapi.co/api/v2/pokemon/536/"},{name:"seismitoad",url:"https://pokeapi.co/api/v2/pokemon/537/"},{name:"venipede",url:"https://pokeapi.co/api/v2/pokemon/543/"},{name:"whirlipede",url:"https://pokeapi.co/api/v2/pokemon/544/"},{name:"scolipede",url:"https://pokeapi.co/api/v2/pokemon/545/"},{name:"trubbish",url:"https://pokeapi.co/api/v2/pokemon/568/"},{name:"garbodor",url:"https://pokeapi.co/api/v2/pokemon/569/"},{name:"accelgor",url:"https://pokeapi.co/api/v2/pokemon/617/"},{name:"skrelp",url:"https://pokeapi.co/api/v2/pokemon/690/"},{name:"dragalge",url:"https://pokeapi.co/api/v2/pokemon/691/"},{name:"phantump",url:"https://pokeapi.co/api/v2/pokemon/708/"},{name:"trevenant",url:"https://pokeapi.co/api/v2/pokemon/709/"},{name:"mareanie",url:"https://pokeapi.co/api/v2/pokemon/747/"},{name:"toxapex",url:"https://pokeapi.co/api/v2/pokemon/748/"},{name:"salandit",url:"https://pokeapi.co/api/v2/pokemon/757/"},{name:"salazzle",url:"https://pokeapi.co/api/v2/pokemon/758/"},{name:"pyukumuku",url:"https://pokeapi.co/api/v2/pokemon/771/"},{name:"nihilego",url:"https://pokeapi.co/api/v2/pokemon/793/"},{name:"poipole",url:"https://pokeapi.co/api/v2/pokemon/803/"},{name:"naganadel",url:"https://pokeapi.co/api/v2/pokemon/804/"},{name:"pincurchin",url:"https://pokeapi.co/api/v2/pokemon/871/"},{name:"eternatus",url:"https://pokeapi.co/api/v2/pokemon/890/"},{name:"pikachu-kalos-cap",url:"https://pokeapi.co/api/v2/pokemon/10098/"},{name:"muk-alola",url:"https://pokeapi.co/api/v2/pokemon/10113/"},{name:"salazzle-totem",url:"https://pokeapi.co/api/v2/pokemon/10129/"},{name:"weezing-galar",url:"https://pokeapi.co/api/v2/pokemon/10167/"},{name:"slowking-galar",url:"https://pokeapi.co/api/v2/pokemon/10172/"},{name:"toxtricity-low-key",url:"https://pokeapi.co/api/v2/pokemon/10184/"},{name:"eternatus-eternamax",url:"https://pokeapi.co/api/v2/pokemon/10190/"}],l=[{machine:{url:"https://pokeapi.co/api/v2/machine/1680/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"net-good-stats",url:"https://pokeapi.co/api/v2/move-category/2/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},s="venom-drench",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ベノムトラップ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"베놈트랩"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"毒液陷阱"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Piège de Venin"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Giftfalle"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Trampa Venenosa"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Velenotrappola"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Venom Drench"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ベノムトラップ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"毒液陷阱"}],v=[],c=null,m=20,k=0,h=[{change:-1,stat:{name:"attack",url:"https://pokeapi.co/api/v2/stat/2/"}},{change:-1,stat:{name:"special-attack",url:"https://pokeapi.co/api/v2/stat/4/"}},{change:-1,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}}],d=null,f={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},_={name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},q={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:p,flavor_text_entries:n,generation:t,id:i,learned_by_pokemon:r,machines:l,meta:u,name:s,names:g,past_values:v,power:c,pp:m,priority:k,stat_changes:h,super_contest_effect:d,target:f,type:_};export{x as accuracy,A as contest_combos,y as contest_effect,S as contest_type,e as damage_class,q as default,a as effect_chance,o as effect_changes,p as effect_entries,n as flavor_text_entries,t as generation,i as id,r as learned_by_pokemon,l as machines,u as meta,s as name,g as names,v as past_values,c as power,m as pp,k as priority,h as stat_changes,d as super_contest_effect,f as target,_ as type};
