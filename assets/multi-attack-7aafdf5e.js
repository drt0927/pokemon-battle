const y=100,x=null,b=null,w=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=null,n=[],o=[{effect:`Inflicts regular damage.  If the user is holding a plate or a drive, this move's type is the type corresponding to that item.

Note: This effect is technically shared by both techno blast and judgment; however, Techno Blast is only affected by drives, and Judgment is only affected by plates.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"If the user is holding a appropriate plate or drive, the damage inflicted will match it."}],t=[{flavor_text:`たかい　エネルギーを　まといつつ
あいてに　ぶつかって　こうげきする。
メモリに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`높은 에너지를 둘러싸
상대에게 부딪쳐 공격한다.
메모리에 따라 타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`讓強大能量圍繞全身，
撞向對手進行攻擊。
招式屬性會隨著記憶碟而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le Pokémon s’entoure d’une puissante énergie
avant de foncer sur sa cible. Le type de la capacité
dépend de la ROM installée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender sammelt eine große Menge Energie
und greift das Ziel damit an. Der Typ der Attacke
hängt von dem der Disc ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El Pokémon se rodea de una potente energía con la
que golpea al rival. El tipo del movimiento depende
del disco que lleva el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa si avvolge in un potente campo
energetico e colpisce il bersaglio. Il tipo della
mossa varia in base alla ROM installata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Cloaking itself in high energy, the user slams into the
target. The memory held determines the move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`高い　エネルギーを　まといつつ
相手に　ぶつかって　攻撃する。
メモリに　より　タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`一边覆盖高能量，
一边撞向对手进行攻击。
根据存储碟不同，属性会改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`たかい　エネルギーを　まといつつ
あいてに　ぶつかって　こうげきする。
メモリに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`높은 에너지를 둘러싸
상대에게 부딪쳐 공격한다.
메모리에 따라 타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`讓強大能量圍繞全身，
撞向對手進行攻擊。
招式屬性會隨著記憶碟而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le Pokémon s’entoure d’une puissante énergie
avant de foncer sur sa cible. Le type de la capacité
dépend de la ROM installée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender sammelt eine große Menge Energie
und greift das Ziel damit an. Der Typ der Attacke
hängt von dem der Disc ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El Pokémon se rodea de una potente energía con la
que golpea al rival. El tipo del movimiento depende
del disco que lleva el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa si avvolge in un potente campo
energetico e colpisce il bersaglio. Il tipo della
mossa varia in base alla ROM installata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Cloaking itself in high energy, the user slams into the
target. The memory held determines the move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`高い　エネルギーを　まといつつ
相手に　ぶつかって　攻撃する。
メモリに　より　タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`一边覆盖高能量，
一边撞向对手进行攻击。
根据存储碟不同，属性会改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`たかい　エネルギーを　まといつつ
あいてに　ぶつかって　こうげきする。
メモリに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`높은 에너지를 둘러싸
상대에게 부딪쳐 공격한다.
메모리에 따라 타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`讓強大能量圍繞全身，
撞向對手進行攻擊。
招式屬性會隨著記憶碟而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le Pokémon s’entoure d’une puissante énergie
avant de foncer sur sa cible. Le type de la capacité
dépend de la ROM installée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender sammelt eine große Menge Energie
und greift das Ziel damit an. Der Typ der Attacke
hängt von dem der Disc ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El Pokémon se rodea de una potente energía con la
que golpea al rival. El tipo del movimiento depende
del disco que lleva el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa si avvolge in un potente campo
energetico e colpisce il bersaglio. Il tipo della
mossa varia in base alla ROM installata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Cloaking itself in high energy, the user slams into the
target. The memory held determines the move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`高い　エネルギーを　まといつつ
相手に　ぶつかって　攻撃する。
メモリに　より　タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`一边覆盖高能量，
一边撞向对手进行攻击。
根据存储碟不同，属性会改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`たかい　エネルギーを　まといつつ
あいてに　ぶつかって　こうげきする。
メモリに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`높은 에너지를 둘러싸
상대에게 부딪쳐 공격한다.
메모리에 따라 타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`讓強大能量圍繞全身，
撞向對手進行攻擊。
招式屬性會隨著記憶碟而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le Pokémon s’entoure d’une puissante énergie
avant de foncer sur sa cible. Le type de la capacité
dépend de la ROM installée.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender sammelt eine große Menge Energie und
greift das Ziel damit an. Der Typ der Attacke hängt von
dem der Disc ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El Pokémon se rodea de una potente energía con la
que golpea al rival. El tipo del movimiento depende
del disco que lleva el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa si avvolge in un potente campo
energetico e colpisce il bersaglio. Il tipo della
mossa varia in base alla ROM installata.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Cloaking itself in high energy, the user slams into the
target. The memory held determines the move’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`高い　エネルギーを　まといつつ
相手に　ぶつかって　攻撃する。
メモリに　より　タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`一边覆盖高能量，
一边撞向对手进行攻击。
根据存储碟不同，属性会改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},i=718,l=[{name:"silvally",url:"https://pokeapi.co/api/v2/pokemon/773/"}],r=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="multi-attack",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"マルチアタック"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"멀티어택"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"多屬性攻擊"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Coup Varia-Type"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Multi-Angriff"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Multiataque"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Multiattacco"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Multi-Attack"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"マルチアタック"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"多属性攻击"}],v=[{accuracy:null,effect_chance:null,effect_entries:[],power:90,pp:null,type:null,version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],c=120,m=10,h=0,d=[],k=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},M={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:n,effect_entries:o,flavor_text_entries:t,generation:p,id:i,learned_by_pokemon:l,machines:r,meta:s,name:u,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:d,super_contest_effect:k,target:_,type:f};export{y as accuracy,x as contest_combos,b as contest_effect,w as contest_type,e as damage_class,M as default,a as effect_chance,n as effect_changes,o as effect_entries,t as flavor_text_entries,p as generation,i as id,l as learned_by_pokemon,r as machines,s as meta,u as name,g as names,v as past_values,c as power,m as pp,h as priority,d as stat_changes,k as super_contest_effect,_ as target,f as type};
