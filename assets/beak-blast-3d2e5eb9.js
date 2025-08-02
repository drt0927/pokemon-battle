const b=100,x=null,w=null,y=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=null,n=[],t=[{effect:"Begins charging at the start of the turn, then attacks as normal.  Any Pokémon that makes contact with the user while charging is burned.  The charging is not affected by accuracy, sleep, paralysis, or any other effect that would interfere with a move.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts a burn on any Pokémon that makes contact before the attack."}],o=[{flavor_text:`さいしょに　クチバシを　かねつしてから
こうげきを　くりだす。
かねつちゅうに　さわると　やけどする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`먼저 부리를 가열시킨 다음
공격을 날린다.
가열 중에 만지면 화상을 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`先加熱鳥嘴後再進行攻擊。
若對手在加熱時觸碰的話，
就會灼傷。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur fait chauffer son bec avant d’attaquer.
S’il subit une attaque directe pendant la montée
en température, l’attaquant sera brûlé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender erhitzt zuerst seinen Schnabel und
greift dann an. Pokémon, die ihn während des
Erhitzens berühren, erleiden Verbrennungen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Primero aumenta la temperatura de su pico y luego
ejecuta un ataque. Quema al rival si este le propina
un ataque físico mientras está calentando el pico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa arroventa il proprio becco e poi attacca.
Se un Pokémon lo colpisce con un attacco diretto
mentre sta accumulando calore, resta scottato.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user first heats up its beak, and then it attacks
the target. Making direct contact with the Pokémon
while it’s heating up its beak results in a burn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`最初に　クチバシを　加熱してから
攻撃を　くりだす。
加熱中に　さわると　やけどする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`先加热鸟嘴后再进行攻击。
鸟嘴在加热时对手触碰的话，
就会使其灼伤。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`さいしょに　クチバシを　かねつしてから
こうげきを　くりだす。
かねつちゅうに　さわると　やけどする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`먼저 부리를 가열시킨 다음
공격을 날린다.
가열 중에 만지면 화상을 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`先加熱鳥嘴後再進行攻擊。
若對手在加熱時觸碰的話，
就會灼傷。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur fait chauffer son bec avant d’attaquer.
S’il subit une attaque directe pendant la montée
en température, l’attaquant sera brûlé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender erhitzt zuerst seinen Schnabel und
greift dann an. Pokémon, die ihn während des
Erhitzens berühren, erleiden Verbrennungen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Primero aumenta la temperatura de su pico y luego
ejecuta un ataque. Quema al rival si este le propina
un ataque físico mientras está calentando el pico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa arroventa il proprio becco e poi attacca.
Se un Pokémon lo colpisce con un attacco diretto
mentre sta accumulando calore, resta scottato.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user first heats up its beak, and then it attacks
the target. Making direct contact with the Pokémon
while it’s heating up its beak results in a burn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`最初に　クチバシを　加熱してから
攻撃を　くりだす。
加熱中に　さわると　やけどする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`先加热鸟嘴后再进行攻击。
鸟嘴在加热时对手触碰的话，
就会使其灼伤。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`さいしょに　クチバシを　かねつしてから
こうげきを　くりだす。
かねつちゅうに　さわると　やけどする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`먼저 부리를 가열시킨 다음
공격을 날린다.
가열 중에 만지면 화상을 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`先加熱鳥嘴後再進行攻擊。
若對手在加熱時觸碰的話，
就會灼傷。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur fait chauffer son bec avant d’attaquer.
S’il subit une attaque directe pendant la montée
en température, l’attaquant sera brûlé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender erhitzt zuerst seinen Schnabel und
greift dann an. Pokémon, die ihn während des
Erhitzens berühren, erleiden Verbrennungen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Primero aumenta la temperatura de su pico y luego
ejecuta un ataque. Quema al rival si este le propina
un ataque físico mientras está calentando el pico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa arroventa il proprio becco e poi attacca.
Se un Pokémon lo colpisce con un attacco diretto
mentre sta accumulando calore, resta scottato.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user first heats up its beak, and then it attacks
the target. Making direct contact with the Pokémon
while it’s heating up its beak results in a burn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`最初に　クチバシを　加熱してから
攻撃を　くりだす。
加熱中に　さわると　やけどする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`先加热鸟嘴后再进行攻击。
鸟嘴在加热时对手触碰的话，
就会使其灼伤。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`さいしょに　クチバシを　かねつしてから
こうげきを　くりだす。
かねつちゅうに　さわると　やけどする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`먼저 부리를 가열시킨 다음
공격을 날린다.
가열 중에 만지면 화상을 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`先加熱鳥嘴後再進行攻擊。
若對手在加熱時觸碰的話，
就會灼傷。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur fait chauffer son bec avant d’attaquer.
S’il subit une attaque directe pendant la montée
en température, l’attaquant sera brûlé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender erhitzt zuerst seinen Schnabel und greift
dann an. Pokémon, die ihn während des Erhitzens
berühren, erleiden Verbrennungen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Primero aumenta la temperatura de su pico y luego
ejecuta un ataque. Quema al rival si este le propina
un ataque físico mientras está calentando el pico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa arroventa il proprio becco e poi attacca.
Se un Pokémon lo colpisce con un attacco diretto
mentre sta accumulando calore, resta scottato.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user first heats up its beak, and then it attacks
the target. Making direct contact with the Pokémon
while it’s heating up its beak results in a burn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`最初に　クチバシを　加熱してから
攻撃を　くりだす。
加熱中に　さわると　やけどする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`先加热鸟嘴后再进行攻击。
鸟嘴在加热时对手触碰的话，
就会使其灼伤。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user first heats up its beak, and then it attacks the target. Making direct contact with the user while it's heating up its beak results in a burn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=690,i=[{name:"toucannon",url:"https://pokeapi.co/api/v2/pokemon/733/"}],u=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="beak-blast",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"くちばしキャノン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"부리캐논"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"鳥嘴加農炮"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Bec-Canon"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schnabelkanone"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Pico Cañón"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Cannonbecco"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Beak Blast"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"くちばしキャノン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"鸟嘴加农炮"}],c=[],v=100,h=15,m=-3,k=[],_=null,f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},d={name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:n,effect_entries:t,flavor_text_entries:o,generation:p,id:r,learned_by_pokemon:i,machines:u,meta:s,name:l,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:f,type:d};export{b as accuracy,x as contest_combos,w as contest_effect,y as contest_type,e as damage_class,z as default,a as effect_chance,n as effect_changes,t as effect_entries,o as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,u as machines,s as meta,l as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
