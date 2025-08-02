const x=90,w=null,y=null,H=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=100,o=[],n=[{effect:"Inflicts regular damage, then lowers the user's Speed by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Lowers user's Speed by one stage."}],t=[{flavor_text:`つよくて　おもい　こぶしを
ふるって　ダメージを　あたえる。
じぶんの　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`강하고 무거운 주먹을
휘둘러 데미지를 준다.
자신의 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`揮舞強力而沉重的拳頭，
給予對手傷害。
自己的速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur donne un puissant coup de poing à
l’ennemi. Réduit la Vitesse du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender trifft mit einem starken Hieb.
Senkt Initiative des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un terrible puño golpea al contrincante, pero la
Velocidad del usuario se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Infligge danni al bersaglio colpendolo con
un pugno molto potente. Riduce la Velocità
di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user swings and hits with its strong, heavy fist.
It lowers the user’s Speed, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`強くて　重い　こぶしを
ふるって　ダメージを　与える。
自分の　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`挥舞强力而沉重的拳头，
给予对手伤害。
自己的速度会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`つよくて　おもい　こぶしを
ふるって　ダメージを　あたえる。
じぶんの　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`강하고 무거운 주먹을
휘둘러 데미지를 준다.
자신의 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`揮舞強力而沉重的拳頭，
給予對手傷害。
自己的速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur donne un puissant coup de poing à
l’ennemi. Réduit la Vitesse du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender trifft mit einem starken Hieb.
Senkt Initiative des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un terrible puño golpea al contrincante, pero la
Velocidad del usuario se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Infligge danni al bersaglio colpendolo con
un pugno molto potente. Riduce la Velocità
di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user swings and hits with its strong, heavy fist.
It lowers the user’s Speed, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`強くて　重い　こぶしを
ふるって　ダメージを　与える。
自分の　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`挥舞强力而沉重的拳头，
给予对手伤害。
自己的速度会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`つよくて　おもい　こぶしを
ふるって　ダメージを　あたえる。
じぶんの　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`강하고 무거운 주먹을
휘둘러 데미지를 준다.
자신의 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`揮舞強力而沉重的拳頭，
給予對手傷害。
自己的速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur donne un puissant coup de poing à l’ennemi.
Réduit la Vitesse du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender trifft mit einem starken Hieb.
Senkt Initiative des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un terrible puño golpea al contrincante, pero la
Velocidad del usuario se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Infligge danni al bersaglio colpendolo con
un pugno molto potente. Riduce la Velocità
di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user swings and hits with its strong, heavy fist.
It lowers the user’s Speed, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`強くて　重い　こぶしを
ふるって　ダメージを　与える。
自分の　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`挥舞强力而沉重的拳头，
给予对手伤害。
自己的速度会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`つよくて　おもい　こぶしを
ふるって　ダメージを　あたえる。
じぶんの　すばやさが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`강하고 무거운 주먹을
휘둘러 데미지를 준다.
자신의 스피드가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`揮出強力而沉重的拳頭，
給予對手傷害。
自己的速度會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur donne un puissant coup de poing à l’ennemi.
Réduit la Vitesse du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender trifft mit einem starken Hieb. Senkt Initiative
des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Un terrible puño golpea al contrincante, pero la
Velocidad del usuario se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Infligge danni al bersaglio colpendolo con
un pugno molto potente. Riduce la Velocità
di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user swings and hits with its strong, heavy fist.
It lowers the user’s Speed, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`強くて　重い　こぶしを
ふるって　ダメージを　与える。
自分の　素早さが　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`挥舞强力而沉重的拳头，
给予对手伤害。
自己的速度会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user swings its strong, heavy fist at the target to inflict damage. This also lowers the user's Speed stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=665,i=[{name:"crabominable",url:"https://pokeapi.co/api/v2/pokemon/740/"},{name:"tinkatink",url:"https://pokeapi.co/api/v2/pokemon/957/"}],s=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+raise",url:"https://pokeapi.co/api/v2/move-category/7/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},l="ice-hammer",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"アイスハンマー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"아이스해머"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"冰錘"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Marteau de Glace"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Eishammer"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Martillo Hielo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Martelgelo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Ice Hammer"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"アイスハンマー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"冰锤"}],v=[],c=100,h=10,m=0,k=[{change:-1,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}}],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"ice",url:"https://pokeapi.co/api/v2/type/15/"},b={accuracy:90,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:i,machines:s,meta:u,name:l,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,w as contest_combos,y as contest_effect,H as contest_type,e as damage_class,b as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,s as machines,u as meta,l as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
