const y=100,x=null,z=null,b=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Inflicts regular damage.  This move's type matches the user's first type, if any; otherwise, it's typeless.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has the same type as the user."}],t=[{flavor_text:`ぜんりょくで　おどって　こうげきする。
この　わざの　タイプは
じぶんの　タイプと　おなじに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`전력으로 춤추며 공격한다.
이 기술의 타입은
자신의 타입과 같아진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`全力跳舞進行攻擊。
此招式的屬性將
變得和自己的屬性相同。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque en dansant avec enthousiasme.
Le type de la capacité est le même que celui
du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender tanzt und greift dabei das Ziel mit
voller Kraft an. Die Attacke hat denselben Typ wie
das Pokémon, das sie einsetzt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataque que consiste en un baile muy enérgico. El tipo
de este ataque se corresponde con el del Pokémon
que lo ejecuta.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa si lancia in una danza e attacca il nemico
con tutte le sue forze. Il tipo della mossa corrisponde
al tipo del Pokémon che la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks the target by dancing very hard.
The user’s type determines the type of this move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`全力で　踊って　攻撃する。
この　技の　タイプは
自分の　タイプと　同じになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`全力跳舞进行攻击。
此招式的属性将
变得和自己的属性相同。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ぜんりょくで　おどって　こうげきする。
この　わざの　タイプは
じぶんの　タイプと　おなじに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`전력으로 춤추며 공격한다.
이 기술의 타입은
자신의 타입과 같아진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`全力跳舞進行攻擊。
此招式的屬性將
變得和自己的屬性相同。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque en dansant avec enthousiasme.
Le type de la capacité est le même que celui
du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender tanzt und greift dabei das Ziel mit
voller Kraft an. Die Attacke hat denselben Typ wie
das Pokémon, das sie einsetzt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataque que consiste en un baile muy enérgico. El tipo
de este ataque se corresponde con el del Pokémon
que lo ejecuta.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa si lancia in una danza e attacca il nemico
con tutte le sue forze. Il tipo della mossa corrisponde
al tipo del Pokémon che la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks the target by dancing very hard.
The user’s type determines the type of this move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`全力で　踊って　攻撃する。
この　技の　タイプは
自分の　タイプと　同じになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`全力跳舞进行攻击。
此招式的属性将
变得和自己的属性相同。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ぜんりょくで　おどって　こうげきする。
この　わざの　タイプは
じぶんの　タイプと　おなじに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`전력으로 춤추며 공격한다.
이 기술의 타입은
자신의 타입과 같아진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`全力跳舞進行攻擊。
此招式的屬性將
變得和自己的屬性相同。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque en dansant avec enthousiasme.
Le type de la capacité est le même que celui du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender tanzt und greift dabei das Ziel mit
voller Kraft an. Die Attacke hat denselben Typ wie
das Pokémon, das sie einsetzt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataque que consiste en un baile muy enérgico. El tipo
de este ataque se corresponde con el del Pokémon
que lo ejecuta.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa si lancia in una danza e attacca il nemico
con tutte le sue forze. Il tipo della mossa corrisponde
al tipo del Pokémon che la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks the target by dancing very hard.
The user’s type determines the type of this move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`全力で　踊って　攻撃する。
この　技の　タイプは
自分の　タイプと　同じになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`全力跳舞进行攻击。
此招式的属性将
变得和自己的属性相同。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ぜんりょくで　おどって　こうげきする。
この　わざの　タイプは
じぶんの　タイプと　おなじに　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`전력으로 춤추며 공격한다.
이 기술의 타입은
자신의 타입과 같아진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`全力跳舞進行攻擊。
此招式的屬性將
變得和自己的屬性相同。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque en dansant avec enthousiasme.
Le type de la capacité est le même que celui du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender tanzt und greift dabei das Ziel mit voller
Kraft an. Die Attacke hat denselben Typ wie das
Pokémon, das sie einsetzt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataque que consiste en un baile muy enérgico. El tipo
de este ataque se corresponde con el del Pokémon que
lo ejecuta.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa si lancia in una danza e attacca il nemico
con tutte le sue forze. Il tipo della mossa corrisponde
al tipo del Pokémon che la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks the target by dancing very hard.
The user’s type determines the type of this move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`全力で　踊って　攻撃する。
この　技の　タイプは
自分の　タイプと　同じになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`全力跳舞进行攻击。
此招式的属性将
变得和自己的属性相同。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user attacks the target by dancing very hard. The user's type determines the type of this move.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user attacks the target by dancing with all its might. This move becomes the same type as the user's type.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=686,i=[{name:"oricorio-baile",url:"https://pokeapi.co/api/v2/pokemon/741/"},{name:"oricorio-pom-pom",url:"https://pokeapi.co/api/v2/pokemon/10123/"},{name:"oricorio-pau",url:"https://pokeapi.co/api/v2/pokemon/10124/"},{name:"oricorio-sensu",url:"https://pokeapi.co/api/v2/pokemon/10125/"}],s=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="revelation-dance",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"めざめるダンス"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"잠재댄스"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"覺醒之舞"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Danse Éveil"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Wecktanz"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Danza Despertar"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Mutadanza"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Revelation Dance"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"めざめるダンス"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"觉醒之舞"}],c=[],v=90,m=15,h=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},q={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:i,machines:s,meta:u,name:l,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:d,type:f};export{y as accuracy,x as contest_combos,z as contest_effect,b as contest_type,e as damage_class,q as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,s as machines,u as meta,l as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
