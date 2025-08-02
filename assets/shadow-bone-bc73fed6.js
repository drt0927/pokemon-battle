const x=100,b=null,w=null,y=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=20,o=[],n=[{effect:"Inflicts regular damage.  Has a 20% chance to lower the target's Defense by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 20% chance to lower the target's Defense by one stage."}],t=[{flavor_text:`たましいの　やどった　ホネで
あいてを　なぐりつけて　こうげきする。
あいての　ぼうぎょを　さげる　ことがある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`영혼이 머물고 있는 뼈로
상대를 세게 때려서 공격한다.
상대의 방어를 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用寄宿了靈魂的骨頭
毆打對手進行攻擊。
有時會降低對手的防禦。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur frappe avec un os possédé par
l’âme d’un défunt. Peut aussi baisser la Défense
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender greift das Ziel mit einem Knochen an,
in dem eine Seele haust. Senkt eventuell die
Verteidigung des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca al oponente golpeándole con un hueso poseído
por un espíritu. Puede reducir la Defensa del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa colpisce il bersaglio con un osso
in cui alberga uno spirito. Può anche ridurne
la Difesa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks by beating the target with a
bone that contains a spirit. This may also lower
the target’s Defense stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`魂の　宿った　ホネで
相手を　なぐりつけて　攻撃する。
相手の　防御を　さげる　ことがある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用附有灵魂的骨头
殴打对手进行攻击。
有时会降低对手的防御。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`たましいの　やどった　ホネで
あいてを　なぐりつけて　こうげきする。
あいての　ぼうぎょを　さげる　ことがある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`영혼이 머물고 있는 뼈로
상대를 세게 때려서 공격한다.
상대의 방어를 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用寄宿了靈魂的骨頭
毆打對手進行攻擊。
有時會降低對手的防禦。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur frappe avec un os possédé par
l’âme d’un défunt. Peut aussi baisser la Défense
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender greift das Ziel mit einem Knochen an,
in dem eine Seele haust. Senkt eventuell die
Verteidigung des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca al oponente golpeándole con un hueso poseído
por un espíritu. Puede reducir la Defensa del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa colpisce il bersaglio con un osso
in cui alberga uno spirito. Può anche ridurne
la Difesa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks by beating the target with a
bone that contains a spirit. This may also lower
the target’s Defense stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`魂の　宿った　ホネで
相手を　なぐりつけて　攻撃する。
相手の　防御を　さげる　ことがある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用附有灵魂的骨头
殴打对手进行攻击。
有时会降低对手的防御。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`たましいの　やどった　ホネで
あいてを　なぐりつけて　こうげきする。
あいての　ぼうぎょを　さげる　ことがある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`영혼이 머물고 있는 뼈로
상대를 세게 때려서 공격한다.
상대의 방어를 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用寄宿了靈魂的骨頭
毆打對手進行攻擊。
有時會降低對手的防禦。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur frappe avec un os possédé par l’âme
d’un défunt. Peut aussi baisser la Défense de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender greift das Ziel mit einem Knochen an,
in dem eine Seele haust. Senkt eventuell die
Verteidigung des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca al oponente golpeándole con un hueso poseído
por un espíritu. Puede reducir la Defensa del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa colpisce il bersaglio con un osso
in cui alberga uno spirito. Può anche ridurne
la Difesa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks by beating the target with a
bone that contains a spirit. This may also lower
the target’s Defense stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`魂の　宿った　ホネで
相手を　なぐりつけて　攻撃する。
相手の　防御を　さげる　ことがある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用附有灵魂的骨头
殴打对手进行攻击。
有时会降低对手的防御。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`たましいの　やどった　ホネで
あいてを　なぐりつけて　こうげきする。
あいての　ぼうぎょを　さげる　ことがある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`영혼이 머물고 있는 뼈로
상대를 세게 때려서 공격한다.
상대의 방어를 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用寄宿了靈魂的骨頭
毆打對手進行攻擊。
有時會降低對手的防禦。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur frappe avec un os possédé par l’âme
d’un défunt. Peut aussi baisser la Défense de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender greift das Ziel mit einem Knochen an,
in dem eine Seele haust. Senkt eventuell die
Verteidigung des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca al oponente golpeándole con un hueso poseído
por un espíritu. Puede reducir la Defensa del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa colpisce il bersaglio con un osso
in cui alberga uno spirito. Può anche ridurne
la Difesa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks by beating the target with a
bone that contains a spirit. This may also lower
the target’s Defense stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`魂の　宿った　ホネで
相手を　なぐりつけて　攻撃する。
相手の　防御を　さげる　ことがある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用附有灵魂的骨头
殴打对手进行攻击。
有时会降低对手的防御。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=708,s=[{name:"marowak-alola",url:"https://pokeapi.co/api/v2/pokemon/10115/"},{name:"marowak-totem",url:"https://pokeapi.co/api/v2/pokemon/10149/"}],i=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+lower",url:"https://pokeapi.co/api/v2/move-category/6/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:20},l="shadow-bone",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"シャドーボーン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"섀도본"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"暗影之骨"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Os Ombre"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schattenknochen"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Hueso Sombrío"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ossotetro"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Shadow Bone"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"シャドーボーン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"暗影之骨"}],c=[],v=85,h=10,m=0,k=[{change:-1,stat:{name:"defense",url:"https://pokeapi.co/api/v2/stat/3/"}}],_=null,f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},d={name:"ghost",url:"https://pokeapi.co/api/v2/type/8/"},D={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:s,machines:i,meta:u,name:l,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:f,type:d};export{x as accuracy,b as contest_combos,w as contest_effect,y as contest_type,e as damage_class,D as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,s as learned_by_pokemon,i as machines,u as meta,l as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
