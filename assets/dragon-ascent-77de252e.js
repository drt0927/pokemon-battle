const b=100,D=null,x=null,y=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=100,o=[],t=[{effect:"Inflicts regular damage, then lowers the user's Defense and Special Defense by one stage each.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Lowers the user's Defense and Special Defense by one stage after inflicting damage."}],n=[{flavor_text:`おおぞらから　きゅうそくらっか　して
あいてを　こうげきする。
じぶんの　ぼうぎょと　とくぼうが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`넓은 하늘에서 급속으로 강하하여
상대를 공격한다.
자신의 방어와 특수방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le Pokémon s’abat à toute vitesse sur la cible
depuis les hautes couches de l’atmosphère.
Baisse la Défense et la Défense Spéciale du lanceur. `,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender greift das Ziel aus atemberaubender
Höhe im Sturzflug an. Senkt Verteidigung und
Spezial-Verteidigung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario se precipita desde el cielo a una velocidad 
de vértigo para atacar al objetivo, pero hace que
bajen la Defensa y la Defensa Especial del usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Permette di proiettarsi in aria e fiondarsi
sul bersaglio attaccando ad altissima velocità.
Riduce la Difesa e la Difesa Speciale di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`After soaring upward, the user attacks its target by
dropping out of the sky at high speeds, although it
lowers its own Defense and Sp. Def in the process.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`大空から　急速落下　して
相手を　攻撃する。
自分の　防御と　特防が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`おおぞらから　きゅうそくらっか　して
あいてを　こうげきする。
じぶんの　ぼうぎょと　とくぼうが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`넓은 하늘에서 급속으로 강하하여
상대를 공격한다.
자신의 방어와 특수방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`從天空中急速下降攻擊對手。
自己的防禦和特防會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le Pokémon s’abat à toute vitesse sur la cible
depuis les hautes couches de l’atmosphère.
Baisse la Défense et la Défense Spéciale du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender greift das Ziel aus atemberaubender
Höhe im Sturzflug an. Senkt Verteidigung und
Spezial-Verteidigung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario se precipita desde el cielo a una velocidad 
de vértigo para atacar al objetivo, pero hace que
bajen la Defensa y la Defensa Especial del usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Permette di proiettarsi in aria e fiondarsi
sul bersaglio attaccando ad altissima velocità.
Riduce la Difesa e la Difesa Speciale di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`After soaring upward, the user attacks its target by
dropping out of the sky at high speeds. But it lowers
its own Defense and Sp. Def stats in the process.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`大空から　急速落下　して
相手を　攻撃する。
自分の　防御と　特防が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`从天空中急速下降攻击对手。
自己的防御和特防会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`おおぞらから　きゅうそくらっか　して
あいてを　こうげきする。
じぶんの　ぼうぎょと　とくぼうが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`넓은 하늘에서 급속으로 강하하여
상대를 공격한다.
자신의 방어와 특수방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`從天空中急速下降攻擊對手。
自己的防禦和特防會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le Pokémon s’abat à toute vitesse sur la cible
depuis les hautes couches de l’atmosphère.
Baisse la Défense et la Défense Spéciale du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender greift das Ziel aus atemberaubender
Höhe im Sturzflug an. Senkt Verteidigung und
Spezial-Verteidigung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario se precipita desde el cielo a una velocidad 
de vértigo para atacar al objetivo, pero hace que
bajen la Defensa y la Defensa Especial del usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Permette di proiettarsi in aria e fiondarsi
sul bersaglio attaccando ad altissima velocità.
Riduce la Difesa e la Difesa Speciale di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`After soaring upward, the user attacks its target by
dropping out of the sky at high speeds. But it lowers
its own Defense and Sp. Def stats in the process.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`大空から　急速落下　して
相手を　攻撃する。
自分の　防御と　特防が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`从天空中急速下降攻击对手。
自己的防御和特防会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`おおぞらから　きゅうそくらっか　して
あいてを　こうげきする。
じぶんの　ぼうぎょと　とくぼうが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`넓은 하늘에서 급속으로 강하하여
상대를 공격한다.
자신의 방어와 특수방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`從天空中急速下降攻擊對手。
自己的防禦和特防會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le Pokémon s’abat à toute vitesse sur la cible
depuis les hautes couches de l’atmosphère.
Baisse la Défense et la Défense Spéciale du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender greift das Ziel aus atemberaubender
Höhe im Sturzflug an. Senkt Verteidigung und
Spezial-Verteidigung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se precipita desde el cielo a una velocidad 
de vértigo para atacar al objetivo, pero hace que
bajen la Defensa y la Defensa Especial del usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Permette di proiettarsi in aria e fiondarsi
sul bersaglio attaccando ad altissima velocità.
Riduce la Difesa e la Difesa Speciale di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`After soaring upward, the user attacks its target by
dropping out of the sky at high speeds. But it lowers
its own Defense and Sp. Def stats in the process.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`大空から　急速落下　して
相手を　攻撃する。
自分の　防御と　特防が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`从天空中急速下降攻击对手。
自己的防御和特防会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`おおぞらから　きゅうそくらっか　して
あいてを　こうげきする。
じぶんの　ぼうぎょと　とくぼうが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`넓은 하늘에서 급속으로 강하하여
상대를 공격한다.
자신의 방어와 특수방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`從天空中急速下降攻擊對手。
自己的防禦和特防會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le Pokémon s’abat à toute vitesse sur la cible
depuis les hautes couches de l’atmosphère.
Baisse la Défense et la Défense Spéciale du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender greift das Ziel aus atemberaubender
Höhe im Sturzflug an. Senkt Verteidigung und
Spezial-Verteidigung des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario se precipita desde el cielo a una velocidad
de vértigo para atacar al objetivo, pero hace que bajen
la Defensa y la Defensa Especial del usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Permette di proiettarsi in aria e fiondarsi
sul bersaglio attaccando ad altissima velocità.
Riduce la Difesa e la Difesa Speciale di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`After soaring upward, the user attacks its target by
dropping out of the sky at high speeds. But it lowers
its own Defense and Sp. Def stats in the process.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`大空から　急速落下　して
相手を　攻撃する。
自分の　防御と　特防が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`从天空中急速下降攻击对手。
自己的防御和特防会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"After soaring upward, the user attacks its target by dropping out of the sky at high speeds. But it lowers its own Defense and Sp. Def stats in the process.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user attacks the target by dropping out of the sky at high speed. This also lowers the user's Defense and Sp. Def stats.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},s=620,r=[{name:"rayquaza",url:"https://pokeapi.co/api/v2/pokemon/384/"},{name:"rayquaza-mega",url:"https://pokeapi.co/api/v2/pokemon/10079/"}],i=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+raise",url:"https://pokeapi.co/api/v2/move-category/7/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},l="dragon-ascent",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ガリョウテンセイ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"화룡점정"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"畫龍點睛"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Draco-Ascension"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Zenitstürmer"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Ascenso Draco"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ascesa del Drago"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Dragon Ascent"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ガリョウテンセイ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"画龙点睛"}],c=[],v=120,h=5,m=0,d=[{change:-1,stat:{name:"defense",url:"https://pokeapi.co/api/v2/stat/3/"}},{change:-1,stat:{name:"special-defense",url:"https://pokeapi.co/api/v2/stat/5/"}}],k=null,f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},_={name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:t,flavor_text_entries:n,generation:p,id:s,learned_by_pokemon:r,machines:i,meta:u,name:l,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:d,super_contest_effect:k,target:f,type:_};export{b as accuracy,D as contest_combos,x as contest_effect,y as contest_type,e as damage_class,w as default,a as effect_chance,o as effect_changes,t as effect_entries,n as flavor_text_entries,p as generation,s as id,r as learned_by_pokemon,i as machines,u as meta,l as name,g as names,c as past_values,v as power,h as pp,m as priority,d as stat_changes,k as super_contest_effect,f as target,_ as type};
