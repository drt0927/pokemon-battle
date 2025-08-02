const b=95,x=null,y=null,w=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Inflicts regular damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts regular damage with no additional effect."}],t=[{flavor_text:`わるさを　アピールして　こうげき。
あいての　ぶつりこうげきを　よわめる
ふしぎな　かべを　つくりだす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`악함을 어필해서 공격한다.
상대의 물리공격을 약하게 만드는
이상한 장막을 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`惡形惡狀地進行攻擊，
造出一道能夠減弱對手
物理攻擊的神奇牆壁。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Évoli fait appel à son côté sombre pour attaquer
l’adversaire et créer un mur fabuleux qui réduit les
dégâts causés par les attaques physiques de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Evoli zeigt sich von seiner dunklen Seite und greift an.
Dabei wird eine geheimnisvolle Wand erzeugt, die
physische Attacken des Ziels abschwächt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Lanza un ataque haciendo gala de su faceta más umbría
y alza un extraño muro que mitiga los ataques físicos
del adversario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa scatena l’oscurità che ha dentro, colpendo
il bersaglio e innalzando una barriera fantastica che
riduce i danni degli attacchi fisici nemici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user acts bad and attacks the target.
A wondrous wall of light is put up to weaken the power
of the opposing Pokémon’s physical moves.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`わるさを　アピールして　攻撃。
相手の　物理攻撃を　弱める
不思議な　かべを　つくりだす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`恶行恶相地进行攻击。
制造一道能减弱对手
物理攻击的神奇墙壁。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
おもいだすことが　できなくなりますが
わざを　わすれることを　おすすめします`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`사용할 수 없는 기술입니다.
다시 배우게 할 수 없지만
기술을 잊게 하는 것을 권장합니다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`無法使用此招式。
雖然忘記後將無法再想起來，
但還是建議忘記此招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Cette capacité ne peut pas être utilisée.
Il est recommandé de l’oublier, même s’il sera
impossible de se la remémorer une fois oubliée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Diese Attacke kann nicht eingesetzt werden. Du solltest
dein Pokémon sie vergessen lassen. Beachte aber,
dass es sich danach nicht wieder an sie erinnern kann.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Este movimiento no se puede usar, por lo que sería
mejor olvidarlo, aunque eso implique que no se pueda
recordar posteriormente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Questa mossa non può essere usata.
È consigliabile farla dimenticare al Pokémon. Tuttavia,
una volta dimenticata, non potrà più essere ricordata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`This move can’t be used.
It’s recommended that this move is forgotten.
Once forgotten, this move can’t be remembered.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`この技は　使えません
思い出すことが　できなくなりますが
技を　忘れることを　おすすめします`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`无法使用这个招式。
虽然忘记之后就再也想不起来了，
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},s=737,i=[{name:"eevee-starter",url:"https://pokeapi.co/api/v2/pokemon/10159/"}],r=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="baddy-bad",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"わるわるゾーン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"아그아그존"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"壞壞領域"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Évo-Ténébro"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Quälzone"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Umbreozona"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Zona Buiabuia"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Baddy Bad"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"わるわるゾーン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"坏坏领域"}],c=[{accuracy:100,effect_chance:null,effect_entries:[],power:90,pp:null,type:null,version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],v=80,m=15,h=0,d=[],k=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},z={accuracy:95,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:s,learned_by_pokemon:i,machines:r,meta:l,name:u,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:d,super_contest_effect:k,target:_,type:f};export{b as accuracy,x as contest_combos,y as contest_effect,w as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,s as id,i as learned_by_pokemon,r as machines,l as meta,u as name,g as names,c as past_values,v as power,m as pp,h as priority,d as stat_changes,k as super_contest_effect,_ as target,f as type};
