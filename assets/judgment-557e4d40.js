const x=100,b=null,T=null,e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},a={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},o=null,n=[],t=[{effect:`Inflicts regular damage.  If the user is holding a plate or a drive, this move's type is the type corresponding to that item.

Note: This effect is technically shared by both techno blast and judgment; however, Techno Blast is only affected by drives, and Judgment is only affected by plates.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"If the user is holding a appropriate plate or drive, the damage inflicted will match it."}],p=[{flavor_text:`The user releases
countless shots of
light. Its type varies
with the kind of Plate
the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user releases
countless shots of
light. Its type varies
with the kind of Plate
the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user releases
countless shots of
light. Its type varies
with the kind of Plate
the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur libère une myriade de rayons de
lumière. Le type varie selon la Plaque
que tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user releases countless shots of
light at the target. Its type varies with
the kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user releases countless shots of
light at the target. Its type varies with
the kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur libère une myriade de rayons de
lumière. Le type varie selon la Plaque que
tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab.
Deren Typ hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Emite incontables haces de luz. Varía según el tipo
de tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user releases countless shots of
light at the target. This move’s type varies
depending on the kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur libère une myriade de rayons de
lumière. Le type varie selon la Plaque que
tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab.
Deren Typ hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Emite incontables haces de luz. Varía según el tipo 
de tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user releases countless shots of
light at the target. This move’s type varies
depending on the kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手放出無數的光彈。
招式的屬性會隨著自己
攜帶的石板不同而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur libère une myriade de rayons de lumière.
Le type varie selon la Plaque que tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab.
Deren Typ hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Emite incontables haces de luz. Varía según el tipo 
de tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user releases countless shots of light at the
target. This move’s type varies depending on the
kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向对手放出无数的光弹。
属性会根据自己
携带的石板不同而改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手放出無數的光彈。
招式的屬性會隨著自己
攜帶的石板不同而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur libère une myriade de rayons de lumière.
Le type varie selon la Plaque que tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab.
Deren Typ hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Emite incontables haces de luz. Varía según el tipo 
de tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user releases countless shots of light at the
target. This move’s type varies depending on the
kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向对手放出无数的光弹。
属性会根据自己
携带的石板不同而改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手放出無數的光彈。
招式的屬性會隨著自己
攜帶的石板不同而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur libère une myriade de rayons de lumière.
Le type varie selon la Plaque que tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab.
Deren Typ hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Emite incontables haces de luz. El tipo del movimiento 
varía según la tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user releases countless shots of light at the
target. This move’s type varies depending on the
kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向对手放出无数的光弹。
属性会根据自己
携带的石板不同而改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`むすうの　こうだんを　あいてに
ほうしゅつする。じぶんの　もつ
プレートに　より　タイプが　かわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`무수한 광탄을 상대에게 방출한다.
자신이 가지고 있는 플레이트에 따라
타입이 바뀐다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向對手放出無數的光彈。
招式的屬性會隨著自己
攜帶的石板不同而改變。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur libère une myriade de rayons de lumière.
Le type varie selon la Plaque que tient le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender feuert unzählige Lichtstrahlen ab. Deren Typ
hängt von der gehaltenen Tafel ab.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Emite incontables haces de luz. El tipo del movimiento 
varía según la tabla que lleve el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa rilascia numerosi colpi di luce. Il tipo
varia a seconda della lastra che ha.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user releases countless shots of light at the
target. This move’s type varies depending on the
kind of Plate the user is holding.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`無数の　光弾を　相手に　放出する。
自分の　持つ　プレートに　より
タイプが　変わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向对手放出无数的光弹。
属性会根据自己
携带的石板不同而改变。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user releases countless shots of light at the target. This move's type varies depending on the kind of Plate the user last interacted with.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user releases countless shots of light at the target. This move's type changes depending on the kind of plate held by the user.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=449,l=[{name:"arceus",url:"https://pokeapi.co/api/v2/pokemon/493/"}],s=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="judgment",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"さばきのつぶて"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"심판의뭉치"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"制裁光礫"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Jugement"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Urteilskraft"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Sentencia"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Giudizio"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Judgment"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"さばきのつぶて"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"制裁光砾"}],h=[],c=100,m=10,k=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/14/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:n,effect_entries:t,flavor_text_entries:p,generation:r,id:i,learned_by_pokemon:l,machines:s,meta:u,name:g,names:v,past_values:h,power:c,pp:m,priority:k,stat_changes:_,super_contest_effect:d,target:f,type:y};export{x as accuracy,b as contest_combos,T as contest_effect,e as contest_type,a as damage_class,w as default,o as effect_chance,n as effect_changes,t as effect_entries,p as flavor_text_entries,r as generation,i as id,l as learned_by_pokemon,s as machines,u as meta,g as name,v as names,h as past_values,c as power,m as pp,k as priority,_ as stat_changes,d as super_contest_effect,f as target,y as type};
