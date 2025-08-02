const b=100,x=null,w=null,y=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=null,t=[],o=[{effect:"Steals the target's stat increases, then inflicts regular damage.  Will not steal stat increases that would put any of the user's stats at more than +6; any excess is left on the target.  Stolen increases are affected by abilities as normal.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Steals the target's stat increases, then inflicts damage."}],n=[{flavor_text:`あいての　かげに　もぐりこみ
あいての　のうりょく　アップを
うばって　こうげきする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대의 그림자에 숨어들어
상대의 능력이 올라가는 것을
뺏어 공격한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`潛入對手的影子，
奪取對手的能力提升進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur plonge dans l’ombre de la cible,
vole ses augmentations de stats et l’attaque.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender schleicht sich in den Schatten des
Zieles, stiehlt dessen erhöhte Statuswerte und fügt
ihm Schaden zu.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario se esconde en la sombra del objetivo y lo
ataca tras robarle las mejoras en sus
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa ruba gli aumenti delle statistiche
del bersaglio, poi si nasconde nella sua ombra
e lo attacca.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user hides in the target’s shadow, steals
the target’s stat boosts, and then attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手の　影に　潜り込み
相手の　能力アップを
奪って　攻撃する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`潜入对手的影子进行攻击。
会夺取对手的能力提升。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいての　かげに　もぐりこみ
あいての　のうりょく　アップを
うばって　こうげきする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대의 그림자에 숨어들어
상대의 능력이 올라가는 것을
뺏어 공격한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`潛入對手的影子，
奪取對手的能力提升進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur plonge dans l’ombre de la cible,
vole ses augmentations de stats et l’attaque.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender schleicht sich in den Schatten des
Zieles, stiehlt dessen erhöhte Statuswerte und fügt
ihm Schaden zu.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario se esconde en la sombra del objetivo y lo
ataca tras robarle las mejoras en sus
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa ruba gli aumenti delle statistiche
del bersaglio, poi si nasconde nella sua ombra
e lo attacca.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user hides in the target’s shadow, steals
the target’s stat boosts, and then attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手の　影に　潜り込み
相手の　能力アップを
奪って　攻撃する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`潜入对手的影子进行攻击。
会夺取对手的能力提升。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいての　かげに　もぐりこみ
あいての　のうりょく　アップを
うばって　こうげきする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대의 그림자에 숨어들어
상대의 능력이 올라가는 것을
뺏어 공격한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`潛入對手的影子，
奪取對手的能力提升進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur plonge dans l’ombre de la cible,
vole ses augmentations de stats et l’attaque.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender schleicht sich in den Schatten des
Zieles, stiehlt dessen erhöhte Statuswerte und fügt
ihm Schaden zu.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se esconde en la sombra del objetivo y lo
ataca tras robarle las mejoras en sus
características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa ruba gli aumenti delle statistiche
del bersaglio, poi si nasconde nella sua ombra
e lo attacca.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user hides in the target’s shadow, steals
the target’s stat boosts, and then attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手の　影に　潜り込み
相手の　能力アップを
奪って　攻撃する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`潜入对手的影子进行攻击。
会夺取对手的能力提升。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいての　かげに　もぐりこみ
あいての　のうりょく　アップを
うばって　こうげきする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대의 그림자에 숨어들어
상대의 능력이 올라가는 것을
뺏어 공격한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`潛入對手的影子，
奪取對手的能力提升進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur plonge dans l’ombre de la cible,
vole ses augmentations de stats et l’attaque.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender schleicht sich in den Schatten des Zieles,
stiehlt dessen erhöhte Statuswerte und fügt ihm
Schaden zu.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario se esconde en la sombra del objetivo y lo
ataca tras robarle las mejoras en sus características.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa ruba gli aumenti delle statistiche
del bersaglio, poi si nasconde nella sua ombra
e lo attacca.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user hides in the target’s shadow, steals
the target’s stat boosts, and then attacks.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　影に　潜り込み
相手の　能力アップを
奪って　攻撃する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`潜入对手的影子进行攻击。
会夺取对手的能力提升。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],s={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},p=712,r=[{name:"marshadow",url:"https://pokeapi.co/api/v2/pokemon/802/"}],l=[],i={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="spectral-thief",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"シャドースチール"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"섀도스틸"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"暗影偷盜"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Clepto-Mânes"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Diebesschatten"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Robasombra"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ombrafurto"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Spectral Thief"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"シャドースチール"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"暗影偷盗"}],c=[],v=90,h=10,m=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"ghost",url:"https://pokeapi.co/api/v2/type/8/"},j={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:t,effect_entries:o,flavor_text_entries:n,generation:s,id:p,learned_by_pokemon:r,machines:l,meta:i,name:u,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{b as accuracy,x as contest_combos,w as contest_effect,y as contest_type,e as damage_class,j as default,a as effect_chance,t as effect_changes,o as effect_entries,n as flavor_text_entries,s as generation,p as id,r as learned_by_pokemon,l as machines,i as meta,u as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
