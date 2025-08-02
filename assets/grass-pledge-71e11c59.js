const x=100,w=null,b=null,y=null,a={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},e=null,o=[],n=[{effect:"Inflicts regular damage.  If a friendly Pokémon used fire pledge earlier this turn, all opposing Pokémon will take 1/8 their max HP in damage at the end of every turn for four turns (including this one).",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"With Fire Pledge, damages opposing Pokémon for 1/8 their max HP every turn for four turns."}],p=[{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet
augmente et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A column of grass hits opposing Pokémon.
When used with its water equivalent, its
damage increases into a vast swamp.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A column of grass hits opposing Pokémon.
When used with its water equivalent, its
damage increases into a vast swamp.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`くさの　はしらで　こうげきする。
みずと　くみあわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ein Angriff mit Pflanzsäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con
Voto Agua, crea un pantano y aumenta su
potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its damage increases and
a vast swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`草の柱で　攻撃する。
みずと　組みあわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`くさの　はしらで　こうげきする。
 ずと　く あわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ein Angriff mit Pflanzsäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con 
Voto Agua, crea un pantano y aumenta su
potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its damage increases and
a vast swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`草の柱で　攻撃する。
 ずと　組 あわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`くさの　はしらで　こうげきする。
みずと　くみあわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用草柱進行攻擊。
和水之誓約同時使用時，威力會提高，
周圍會變成濕地。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ein Angriff mit Pflanzensäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con 
Voto Agua, crea un pantano y aumenta su
potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its power increases and a vast
swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`草の柱で　攻撃する。
みずと　組みあわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用草柱进行攻击。
如果和水组合，威力就会提高，
周围会变成湿地。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`くさの　はしらで　こうげきする。
みずと　くみあわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用草柱進行攻擊。
和水之誓約同時使用時，威力會提高，
周圍會變成濕地。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ein Angriff mit Pflanzensäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con 
Voto Agua, crea un pantano y aumenta su
potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its power increases and a vast
swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`草の柱で　攻撃する。
みずと　組みあわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用草柱进行攻击。
如果和水组合，威力就会提高，
周围会变成湿地。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`くさの　はしらで　こうげきする。
みずと　くみあわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用草柱進行攻擊。
和水之誓約同時使用時，威力會提高，
周圍會變成濕地。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ein Angriff mit Pflanzensäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con 
Voto Agua, crea un pantano y aumenta su
potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its power increases and a vast
swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`草の柱で　攻撃する。
みずと　組みあわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用草柱进行攻击。
如果和水组合，威力就会提高，
周围会变成湿地。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`くさの　はしらで　こうげきする。
みずと　くみあわせると　いりょくが
あがって　あたりが　しつげんに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`풀기둥으로 공격한다.
물과 조합하면 위력이
올라가고 주변이 습지초원이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用草柱進行攻擊。
和水之誓約同時使用時，威力會提高，
周圍會變成濕地。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Une masse végétale s’abat sur l’ennemi.
En l’utilisant avec Aire d’Eau, l’effet augmente
et un marécage apparaît.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ein Angriff mit Pflanzensäulen. Mit Wassersäulen
kombiniert steigt die Wirkung und die Umgebung
wird zu einem Sumpf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca con columnas de hojas. Combinado con
Voto Agua, crea un pantano y aumenta su potencia.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacca il bersaglio con una colonna d’erba.
Se usata con Acquapatto, gli effetti aumentano
e il campo diventa una palude.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`A column of grass hits the target. When used with
its water equivalent, its power increases and a vast
swamp appears.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`草の柱で　攻撃する。
みずと　組みあわせると　威力が
あがって　あたりが　湿原に　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用草柱进行攻击。
如果和水组合，威力就会提高，
周围会变成湿地。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"A column of grass hits the target. When used with its water equivalent, its power increases and a vast swamp appears.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"A column of grass hits the target. When used with its water counterpart, this move's power is boosted and a vast swamp appears.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],t={name:"generation-v",url:"https://pokeapi.co/api/v2/generation/5/"},i=520,r=[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"chikorita",url:"https://pokeapi.co/api/v2/pokemon/152/"},{name:"bayleef",url:"https://pokeapi.co/api/v2/pokemon/153/"},{name:"meganium",url:"https://pokeapi.co/api/v2/pokemon/154/"},{name:"treecko",url:"https://pokeapi.co/api/v2/pokemon/252/"},{name:"grovyle",url:"https://pokeapi.co/api/v2/pokemon/253/"},{name:"sceptile",url:"https://pokeapi.co/api/v2/pokemon/254/"},{name:"turtwig",url:"https://pokeapi.co/api/v2/pokemon/387/"},{name:"grotle",url:"https://pokeapi.co/api/v2/pokemon/388/"},{name:"torterra",url:"https://pokeapi.co/api/v2/pokemon/389/"},{name:"snivy",url:"https://pokeapi.co/api/v2/pokemon/495/"},{name:"servine",url:"https://pokeapi.co/api/v2/pokemon/496/"},{name:"serperior",url:"https://pokeapi.co/api/v2/pokemon/497/"},{name:"pansage",url:"https://pokeapi.co/api/v2/pokemon/511/"},{name:"simisage",url:"https://pokeapi.co/api/v2/pokemon/512/"},{name:"chespin",url:"https://pokeapi.co/api/v2/pokemon/650/"},{name:"quilladin",url:"https://pokeapi.co/api/v2/pokemon/651/"},{name:"chesnaught",url:"https://pokeapi.co/api/v2/pokemon/652/"},{name:"rowlet",url:"https://pokeapi.co/api/v2/pokemon/722/"},{name:"dartrix",url:"https://pokeapi.co/api/v2/pokemon/723/"},{name:"decidueye",url:"https://pokeapi.co/api/v2/pokemon/724/"},{name:"silvally",url:"https://pokeapi.co/api/v2/pokemon/773/"},{name:"grookey",url:"https://pokeapi.co/api/v2/pokemon/810/"},{name:"thwackey",url:"https://pokeapi.co/api/v2/pokemon/811/"},{name:"rillaboom",url:"https://pokeapi.co/api/v2/pokemon/812/"},{name:"sprigatito",url:"https://pokeapi.co/api/v2/pokemon/906/"},{name:"floragato",url:"https://pokeapi.co/api/v2/pokemon/907/"},{name:"meowscarada",url:"https://pokeapi.co/api/v2/pokemon/908/"},{name:"venusaur-mega",url:"https://pokeapi.co/api/v2/pokemon/10033/"},{name:"sceptile-mega",url:"https://pokeapi.co/api/v2/pokemon/10065/"},{name:"decidueye-hisui",url:"https://pokeapi.co/api/v2/pokemon/10244/"}],u=[{machine:{url:"https://pokeapi.co/api/v2/machine/1851/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}},{machine:{url:"https://pokeapi.co/api/v2/machine/2042/"},version_group:{name:"the-indigo-disk",url:"https://pokeapi.co/api/v2/version-group/27/"}}],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="grass-pledge",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"くさのちかい"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"풀의맹세"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"草之誓約"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Aire d’Herbe"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Pflanzensäulen"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Voto Planta"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Erbapatto"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Grass Pledge"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"くさのちかい"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"草之誓约"}],v=[{accuracy:null,effect_chance:null,effect_entries:[],power:50,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],c=80,m=10,h=0,k=[],f=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},d={name:"grass",url:"https://pokeapi.co/api/v2/type/12/"},A={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:a,effect_chance:e,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:t,id:i,learned_by_pokemon:r,machines:u,meta:s,name:l,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:k,super_contest_effect:f,target:_,type:d};export{x as accuracy,w as contest_combos,b as contest_effect,y as contest_type,a as damage_class,A as default,e as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,t as generation,i as id,r as learned_by_pokemon,u as machines,s as meta,l as name,g as names,v as past_values,c as power,m as pp,h as priority,k as stat_changes,f as super_contest_effect,_ as target,d as type};
