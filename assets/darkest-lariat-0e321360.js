const b=100,x=null,w=null,y=null,a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},e=null,o=[],n=[{effect:"Inflicts regular damage.  Damage calculation ignores the target's stat modifiers, including evasion.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Ignores the target's stat modifiers."}],t=[{flavor_text:`りょううでを　まわし　あいてに　あてる。
あいての　のうりょく　へんかに
かんけいなく　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`양팔을 돌려 상대에 부딪친다.
상대의 능력 변화에
상관없이 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`旋轉雙臂並打向對手。
可不顧對手的能力變化
給予傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le Pokémon étend les bras et frappe l’adversaire
en tournant violemment. Inflige des dégâts et ignore
les changements de stats de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender wirbelt mit beiden Armen und prallt
so auf das Ziel. Richtet unabhängig von den
Statusveränderungen des Zieles Schaden an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Gira sobre sí mismo y golpea al oponente con ambos
brazos. Ignora los cambios en las características del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca il bersaglio mulinando gli arti.
Il danno inflitto ignora le modifiche alle statistiche
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user swings both arms and hits the target.
The target’s stat changes don’t affect this
attack’s damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`両腕を　回し　相手に　当てる。
相手の　能力変化に
関係なく　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`旋转双臂打向对手。
无视对手的能力变化，
直接给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`りょううでを　まわし　あいてに　あてる。
あいての　のうりょく　へんかに
かんけいなく　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`양팔을 돌려 상대에 부딪친다.
상대의 능력 변화에
상관없이 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`旋轉雙臂並打向對手。
可不顧對手的能力變化
給予傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le Pokémon étend les bras et frappe l’adversaire
en tournant violemment. Inflige des dégâts et ignore
les changements de stats de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender wirbelt mit beiden Armen und prallt
so auf das Ziel. Richtet unabhängig von den
Statusveränderungen des Zieles Schaden an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Gira sobre sí mismo y golpea al oponente con ambos
brazos. Ignora los cambios en las características del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca il bersaglio mulinando gli arti.
Il danno inflitto ignora le modifiche alle statistiche
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user swings both arms and hits the target.
The target’s stat changes don’t affect this
attack’s damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`両腕を　回し　相手に　当てる。
相手の　能力変化に
関係なく　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`旋转双臂打向对手。
无视对手的能力变化，
直接给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`りょううでを　まわし　あいてに　あてる。
あいての　のうりょく　へんかに
かんけいなく　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`양팔을 돌려 상대에 부딪친다.
상대의 능력 변화에
상관없이 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`旋轉雙臂並打向對手。
可不顧對手的能力變化
給予傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le Pokémon étend les bras et frappe l’adversaire
en tournant violemment. Inflige des dégâts et ignore
les changements de stats de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender wirbelt mit beiden Armen und prallt
so auf das Ziel. Richtet unabhängig von den
Statusveränderungen des Zieles Schaden an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Gira sobre sí mismo y golpea al oponente con ambos
brazos. Ignora los cambios en las características del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca il bersaglio mulinando gli arti.
Il danno inflitto ignora le modifiche alle statistiche
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user swings both arms and hits the target.
The target’s stat changes don’t affect this
attack’s damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`両腕を　回し　相手に　当てる。
相手の　能力変化に
関係なく　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`旋转双臂打向对手。
无视对手的能力变化，
直接给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`りょううでを　まわし　あいてに　あてる。
あいての　のうりょく　へんかに
かんけいなく　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`양팔을 돌려 상대에게 부딪친다.
상대의 능력 변화에
상관없이 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`旋轉雙臂並打向對手。
可不顧對手的能力變化
給予傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le Pokémon étend les bras et frappe l’adversaire
en tournant violemment. Inflige des dégâts et ignore
les changements de stats de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender wirbelt mit beiden Armen und prallt
so auf das Ziel. Richtet unabhängig von den
Statusveränderungen des Zieles Schaden an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Gira sobre sí mismo y golpea al oponente con ambos
brazos. Ignora los cambios en las características del
objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca il bersaglio mulinando gli arti.
Il danno inflitto ignora le modifiche alle statistiche
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user swings both arms and hits the target.
The target’s stat changes don’t affect this
attack’s damage.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`両腕を　回し　相手に　当てる。
相手の　能力変化に
関係なく　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`旋转双臂打向对手。
无视对手的能力变化，
直接给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user swings both arms and hits the target. The target's stat changes don't affect this attack's damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user swings both arms and hits the target. The target's stat changes don't affect the damage inflicted by this move.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=663,i=[{name:"poliwrath",url:"https://pokeapi.co/api/v2/pokemon/62/"},{name:"machamp",url:"https://pokeapi.co/api/v2/pokemon/68/"},{name:"snorlax",url:"https://pokeapi.co/api/v2/pokemon/143/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"swampert",url:"https://pokeapi.co/api/v2/pokemon/260/"},{name:"electivire",url:"https://pokeapi.co/api/v2/pokemon/466/"},{name:"dusknoir",url:"https://pokeapi.co/api/v2/pokemon/477/"},{name:"regigigas",url:"https://pokeapi.co/api/v2/pokemon/486/"},{name:"krookodile",url:"https://pokeapi.co/api/v2/pokemon/553/"},{name:"golurk",url:"https://pokeapi.co/api/v2/pokemon/623/"},{name:"pangoro",url:"https://pokeapi.co/api/v2/pokemon/675/"},{name:"incineroar",url:"https://pokeapi.co/api/v2/pokemon/727/"},{name:"bewear",url:"https://pokeapi.co/api/v2/pokemon/760/"},{name:"tapu-bulu",url:"https://pokeapi.co/api/v2/pokemon/787/"},{name:"buzzwole",url:"https://pokeapi.co/api/v2/pokemon/794/"},{name:"melmetal",url:"https://pokeapi.co/api/v2/pokemon/809/"},{name:"rillaboom",url:"https://pokeapi.co/api/v2/pokemon/812/"},{name:"grimmsnarl",url:"https://pokeapi.co/api/v2/pokemon/861/"},{name:"urshifu-single-strike",url:"https://pokeapi.co/api/v2/pokemon/892/"},{name:"zarude",url:"https://pokeapi.co/api/v2/pokemon/893/"},{name:"zarude-dada",url:"https://pokeapi.co/api/v2/pokemon/10192/"}],s=[{machine:{url:"https://pokeapi.co/api/v2/machine/1682/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="darkest-lariat",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ＤＤラリアット"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"DD래리어트"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"ＤＤ金勾臂"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Dark Lariat"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Dark Lariat"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Lariat Oscuro"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Braccioteso"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Darkest Lariat"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ＤＤラリアット"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"ＤＤ金勾臂"}],c=[],v=85,m=10,h=0,k=[],d=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:a,effect_chance:e,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:i,machines:s,meta:l,name:u,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:d,target:_,type:f};export{b as accuracy,x as contest_combos,w as contest_effect,y as contest_type,a as damage_class,z as default,e as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,s as machines,l as meta,u as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,d as super_contest_effect,_ as target,f as type};
