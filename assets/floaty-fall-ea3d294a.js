const b=95,x=null,y=null,w=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=30,o=[],n=[{effect:"Inflicts regular damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts regular damage with no additional effect."}],t=[{flavor_text:`ふんわりと　うかび　あがり
いっきに　きゅうこうか　して　こうげき。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`두둥실 떠오른 다음
단숨에 급강하해서 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`輕飄飄地浮起，
然後急速墜落，進行攻擊。
有時會讓對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Pikachu prend de la hauteur avant de fondre sur
son adversaire. Peut aussi apeurer l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Pikachu schwebt nach oben und stürzt dann unvermittelt
auf das Ziel herab. Das Ziel schreckt eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se suspende en el aire para, a continuación,
abalanzarse súbitamente sobre el rival. Puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa si libra in aria per poi piombare addosso
al bersaglio. Può anche far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user floats in the air, and then dives at a steep
angle to attack the target. This may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ふんわりと　浮かび　あがり
一気に　急降下して　攻撃。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`轻飘飘地浮起来后，
再猛地俯冲下去进行攻击。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},s=731,i=[{name:"pikachu-starter",url:"https://pokeapi.co/api/v2/pokemon/10158/"}],r=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:30,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="floaty-fall",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ふわふわフォール"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"둥실둥실폴"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"飄飄墜落"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Pika-Piqué"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schwebesturz"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Pikapicado"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Piombaflap"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Floaty Fall"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ふわふわフォール"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"飘飘坠落"}],c=[],v=90,m=15,h=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},P={accuracy:95,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:s,learned_by_pokemon:i,machines:r,meta:l,name:u,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:d,type:f};export{b as accuracy,x as contest_combos,y as contest_effect,w as contest_type,e as damage_class,P as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,s as id,i as learned_by_pokemon,r as machines,l as meta,u as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
