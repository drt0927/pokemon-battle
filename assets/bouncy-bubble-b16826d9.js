const b=100,x=null,y=null,w=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Inflicts regular damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts regular damage with no additional effect."}],t=[{flavor_text:`みずの　かたまりを　ぶつけて　こうげき。
みずを　すいとり　ダメージの
はんぶんの　HPを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`물덩어리를 부딪쳐서 공격한다.
물을 흡수하여 데미지의
절반만큼 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`投擲水球進行攻擊。
攻擊後吸水並回復
給予對手傷害的一半HP。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Évoli frappe l’adversaire avec des bulles d’eau qu’il
absorbe ensuite pour récupérer un nombre de PV égal
à la moitié des dégâts infligés à l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Evoli greift mit Wasserblasen an. Evolis KP werden
um die Hälfte des vom Wasser angerichteten Schadens
geheilt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca lanzando proyectiles de agua y recupera una
cantidad de PS equivalente a la mitad del daño
causado.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa colpisce il bersaglio con una raffica di bolle,
per poi assorbirle e recuperare una quantità di PS
pari alla metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks by shooting water bubbles at the
target. It then absorbs water and restores its HP by half
the damage taken by the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`水のかたまりを　ぶつけて　攻撃。
水を　吸いとり　ダメージの
半分の　HPを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`投掷水球进行攻击。
吸水后能回复等同于
造成的伤害一半的HP。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},s=733,r=[{name:"eevee-starter",url:"https://pokeapi.co/api/v2/pokemon/10159/"}],i=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+heal",url:"https://pokeapi.co/api/v2/move-category/8/"},crit_rate:0,drain:100,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="bouncy-bubble",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"いきいきバブル"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"생생버블"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"活活氣泡"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Évo-Thalasso"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Blubbsauger"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Vapodrenaje"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Bollaslurp"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Bouncy Bubble"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"いきいきバブル"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"活活气泡"}],c=[{accuracy:null,effect_chance:null,effect_entries:[],power:90,pp:15,type:null,version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],v=60,m=20,h=0,k=[],d=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"water",url:"https://pokeapi.co/api/v2/type/11/"},H={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:s,learned_by_pokemon:r,machines:i,meta:l,name:u,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:d,target:_,type:f};export{b as accuracy,x as contest_combos,y as contest_effect,w as contest_type,e as damage_class,H as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,s as id,r as learned_by_pokemon,i as machines,l as meta,u as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,d as super_contest_effect,_ as target,f as type};
