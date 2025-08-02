const x=100,y=null,z=null,F=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Inflicts regular damage.  Removes the user's fire type after damage calculation.  If the user is not fire-type, this move will fail.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Removes the user's fire type after inflicting damage."}],p=[{flavor_text:`ぜんしんの　ほのおを　すべて
もやして　だいダメージを　あたえる。
じぶんの　ほのおタイプが　なくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`전신의 불꽃을 모두
태워서 큰 데미지를 준다.
자신의 불꽃타입이 없어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`燃盡全身的火焰，
給予對手巨大的傷害。
自己的火屬性將會消失。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le Pokémon se consume et les flammes de son
corps infligent des dégâts élevés à la cible.
Le lanceur perd le type Feu.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender nutzt das gesamte Feuer in seinem
Körper, um großen Schaden auszuteilen. Die restliche
Kampfdauer gehört er nicht mehr dem Typ Feuer an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Utiliza hasta el último resquicio de llamas de su
cuerpo para infligir un grave daño al oponente. Tras
el ataque, el usuario deja de ser de tipo Fuego.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca sfruttando tutta la sua potenza
incendiaria per infliggere gravi danni al bersaglio,
ma come conseguenza perde il tipo Fuoco.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`To inflict massive damage, the user burns itself out.
After using this move, the user will no longer be
Fire type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`全身の　ほのおを　すべて
燃やして　大ダメージを　与える。
自分の　ほのおタイプが　なくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将自己全身燃烧起火焰来，
给予对手大大的伤害。
自己的火属性将会消失。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ぜんしんの　ほのおを　すべて
もやして　だいダメージを　あたえる。
じぶんの　ほのおタイプが　なくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`전신의 불꽃을 모두
태워서 큰 데미지를 준다.
자신의 불꽃타입이 없어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`燃盡全身的火焰，
給予對手巨大的傷害。
自己的火屬性將會消失。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le Pokémon se consume et les flammes de son
corps infligent des dégâts élevés à la cible.
Le lanceur perd le type Feu.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender nutzt das gesamte Feuer in seinem
Körper, um großen Schaden auszuteilen. Die restliche
Kampfdauer gehört er nicht mehr dem Typ Feuer an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Utiliza hasta el último resquicio de llamas de su
cuerpo para infligir un grave daño al oponente. Tras
el ataque, el usuario deja de ser de tipo Fuego.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca sfruttando tutta la sua potenza
incendiaria per infliggere gravi danni al bersaglio,
ma come conseguenza perde il tipo Fuoco.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`To inflict massive damage, the user burns itself out.
After using this move, the user will no longer be
Fire type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`全身の　ほのおを　すべて
燃やして　大ダメージを　与える。
自分の　ほのおタイプが　なくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将自己全身燃烧起火焰来，
给予对手大大的伤害。
自己的火属性将会消失。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ぜんしんの　ほのおを　すべて
もやして　だいダメージを　あたえる。
じぶんの　ほのおタイプが　なくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`전신의 불꽃을 모두
태워서 큰 데미지를 준다.
자신의 불꽃타입이 없어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`燃盡全身的火焰，
給予對手巨大的傷害。
自己的火屬性將會消失。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le Pokémon se consume et les flammes de son
corps infligent des dégâts élevés à la cible.
Le lanceur perd le type Feu.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender nutzt das gesamte Feuer in seinem
Körper, um großen Schaden auszuteilen. Die restliche
Kampfdauer gehört er nicht mehr dem Typ Feuer an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Utiliza hasta el último resquicio de llamas de su
cuerpo para infligir un grave daño al oponente. Tras
el ataque, el usuario deja de ser de tipo Fuego.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca sfruttando tutta la sua potenza
incendiaria per infliggere gravi danni al bersaglio,
ma come conseguenza perde il tipo Fuoco.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`To inflict massive damage, the user burns itself out.
After using this move, the user will no longer be
Fire type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`全身の　ほのおを　すべて
燃やして　大ダメージを　与える。
自分の　ほのおタイプが　なくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将自己全身燃烧起火焰来，
给予对手大大的伤害。
自己的火属性将会消失。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ぜんしんの　ほのおを　すべて
もやして　だいダメージを　あたえる。
じぶんの　ほのおタイプが　なくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`전신의 불꽃을 모두
태워서 큰 데미지를 준다.
자신의 불꽃타입이 없어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`燃盡全身的火焰，
給予對手巨大的傷害。
自己的火屬性將會消失。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le Pokémon se consume et les flammes de son corps
infligent des dégâts élevés à la cible.
Le lanceur perd le type Feu.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender nutzt das gesamte Feuer in seinem
Körper, um großen Schaden auszuteilen. Die restliche
Kampfdauer gehört er nicht mehr dem Typ Feuer an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Utiliza hasta el último resquicio de llamas de su cuerpo
para infligir un grave daño al oponente. Tras el ataque,
el usuario deja de ser de tipo Fuego.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca sfruttando tutta la sua potenza
incendiaria per infliggere gravi danni al bersaglio,
ma come conseguenza perde il tipo Fuoco.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`To inflict massive damage, the user burns itself out.
After using this move, the user will no longer be
Fire type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`全身の　ほのおを　すべて
燃やして　大ダメージを　与える。
自分の　ほのおタイプが　なくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`将自己全身燃烧起火焰来，
给予对手大大的伤害。
自己的火属性将会消失。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=682,i=[{name:"growlithe",url:"https://pokeapi.co/api/v2/pokemon/58/"},{name:"arcanine",url:"https://pokeapi.co/api/v2/pokemon/59/"},{name:"moltres",url:"https://pokeapi.co/api/v2/pokemon/146/"},{name:"cyndaquil",url:"https://pokeapi.co/api/v2/pokemon/155/"},{name:"quilava",url:"https://pokeapi.co/api/v2/pokemon/156/"},{name:"typhlosion",url:"https://pokeapi.co/api/v2/pokemon/157/"},{name:"ho-oh",url:"https://pokeapi.co/api/v2/pokemon/250/"},{name:"tepig",url:"https://pokeapi.co/api/v2/pokemon/498/"},{name:"carkol",url:"https://pokeapi.co/api/v2/pokemon/838/"},{name:"coalossal",url:"https://pokeapi.co/api/v2/pokemon/839/"},{name:"sizzlipede",url:"https://pokeapi.co/api/v2/pokemon/850/"},{name:"centiskorch",url:"https://pokeapi.co/api/v2/pokemon/851/"}],u=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="burn-up",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"もえつきる"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"불사르기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"燃盡"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Flamme Ultime"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Ausbrennen"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Llama Final"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ultima Fiamma"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Burn Up"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"もえつきる"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"燃尽"}],c=[],v=130,m=5,h=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"fire",url:"https://pokeapi.co/api/v2/type/10/"},b={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:t,id:r,learned_by_pokemon:i,machines:u,meta:s,name:l,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,y as contest_combos,z as contest_effect,F as contest_type,e as damage_class,b as default,a as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,t as generation,r as id,i as learned_by_pokemon,u as machines,s as meta,l as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
