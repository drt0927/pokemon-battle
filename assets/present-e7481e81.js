const P=90,y=null,e={url:"https://pokeapi.co/api/v2/contest-effect/17/"},a={name:"cute",url:"https://pokeapi.co/api/v2/contest-type/3/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=null,n=[],t=[{effect:`Randomly uses one of the following effects.

Effect                                             | Chance
-------------------------------------------------- | -----:
Inflicts regular damage with 40 power  |    40%
Inflicts regular damage with 80 power  |    30%
Inflicts regular damage with 120 power |    10%
Heals the target for 1/4 its max HP    |    20%

On average, this move inflicts regular damage with 52 power and heals the target for 1/20 its max HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Randomly inflicts damage with power from 40 to 120 or heals the target for 1/4 its max HP."}],r=[{flavor_text:`A bomb that may
restore HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`A bomb that may
restore HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`A gift in the form of a
bomb. May restore HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A gift in the form of a
bomb. May restore HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is given a
booby-trapped gift.
It restores HP
sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user attacks by
giving the foe a
booby-trapped gift.
It restores HP
sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user attacks by
giving the foe a
booby-trapped gift.
It restores HP
sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user attacks by
giving the foe a
booby-trapped gift.
It restores HP
sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau
piégé à la cible. Peut à l’inverse
restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks by giving the target a
gift with a hidden trap. It restores
HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks by giving the target a
gift with a hidden trap. It restores
HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la
cible. Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP
des Zieles wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo
con bomba trampa. Sin embargo, a veces restaura
sus PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user attacks by giving the target a
gift with a hidden trap. It restores
HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la
cible. Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP
des Zieles wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo con 
bomba trampa. Sin embargo, a veces restaura sus PS. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user attacks by giving the target a
gift with a hidden trap. It restores
HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將暗藏機關的盒子
遞給對手進行攻擊。
但也有可能回復對手的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la
cible. Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP des Zieles
wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo con
bomba trampa. Sin embargo, a veces restaura sus
PS. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks by giving the target a gift with a
hidden trap. It restores HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`递给对手设有圈套的
盒子进行攻击。
也有可能回复对手ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將暗藏機關的盒子
遞給對手進行攻擊。
但也有可能回復對手的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la
cible. Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP des Zieles
wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo con
bomba trampa. Sin embargo, a veces restaura sus
PS. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks by giving the target a gift with a
hidden trap. It restores HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`递给对手设有圈套的
盒子进行攻击。
也有可能回复对手ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將暗藏機關的盒子
遞給對手進行攻擊。
但也有可能回復對手的HP。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la cible.
Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP des Zieles
wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo con
una bomba trampa. Sin embargo, a veces restaura sus
PS. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks by giving the target a gift with a
hidden trap. It restores HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`递给对手设有圈套的
盒子进行攻击。
也有可能回复对手HP。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`わなを　しかけた　はこを
あいてに　わたして　こうげきする。ＨＰが
かいふくして　しまうことも　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`덫을 설치한 상자를
상대에게 건네어 공격한다.
HP가 회복돼버릴 때도 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`將暗藏機關的盒子
遞給對手進行攻擊。
但也有可能回復對手的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque en offrant un cadeau piégé à la cible.
Peut cependant restaurer certains de ses PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Eine Bombe als Geschenk. Kann auch KP des Zieles
wiederherstellen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Quien lo usa ataca al objetivo dándole un regalo con
una bomba trampa. Sin embargo, a veces restaura sus
PS. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa dà un regalo bomba al bersaglio.
A volte, però, può fargli recuperare PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks by giving the target a gift with a
hidden trap. It restores HP sometimes, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`わなを　しかけた　箱を
相手に　わたして　攻撃する。ＨＰが
回復して　しまうことも　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`递给对手设有圈套的
盒子进行攻击。
也有可能回复对手ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user attacks by giving the target a gift with a hidden trap. The gift restores HP sometimes, however.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-ii",url:"https://pokeapi.co/api/v2/generation/2/"},s=217,u=[{name:"clefairy",url:"https://pokeapi.co/api/v2/pokemon/35/"},{name:"clefable",url:"https://pokeapi.co/api/v2/pokemon/36/"},{name:"chansey",url:"https://pokeapi.co/api/v2/pokemon/113/"},{name:"pichu",url:"https://pokeapi.co/api/v2/pokemon/172/"},{name:"cleffa",url:"https://pokeapi.co/api/v2/pokemon/173/"},{name:"igglybuff",url:"https://pokeapi.co/api/v2/pokemon/174/"},{name:"togepi",url:"https://pokeapi.co/api/v2/pokemon/175/"},{name:"marill",url:"https://pokeapi.co/api/v2/pokemon/183/"},{name:"snubbull",url:"https://pokeapi.co/api/v2/pokemon/209/"},{name:"granbull",url:"https://pokeapi.co/api/v2/pokemon/210/"},{name:"delibird",url:"https://pokeapi.co/api/v2/pokemon/225/"},{name:"miltank",url:"https://pokeapi.co/api/v2/pokemon/241/"},{name:"blissey",url:"https://pokeapi.co/api/v2/pokemon/242/"},{name:"azurill",url:"https://pokeapi.co/api/v2/pokemon/298/"},{name:"happiny",url:"https://pokeapi.co/api/v2/pokemon/440/"},{name:"togedemaru",url:"https://pokeapi.co/api/v2/pokemon/777/"},{name:"iron-bundle",url:"https://pokeapi.co/api/v2/pokemon/991/"},{name:"togedemaru-totem",url:"https://pokeapi.co/api/v2/pokemon/10154/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="present",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"プレゼント"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"프레젠트"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"禮物"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Cadeau"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Geschenk"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Presente"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Regalino"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Present"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"プレゼント"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"礼物"}],h=[],m=null,k=15,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/16/"},b={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},w={accuracy:90,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:b,type:x};export{P as accuracy,y as contest_combos,e as contest_effect,a as contest_type,o as damage_class,w as default,p as effect_chance,n as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,b as target,x as type};
