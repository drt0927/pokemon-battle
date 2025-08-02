const x=100,b=null,y=null,z=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],p=[{effect:"Adds grass to the target's types.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Adds grass to the target's types."}],n=[{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem
Waldesfluch, durch den dieses zusätzlich
den Typ Pflanze annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El objetivo es presa de la maldición del bosque,
por lo que pasa a ser un Pokémon de tipo Planta,
además de conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user puts a forest curse on the target.
Afflicted targets are now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem
Waldesfluch, durch den dieses zusätzlich
den Typ Pflanze annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El objetivo es presa de la maldición del bosque,
por lo que pasa a ser un Pokémon de tipo Planta, 
además de conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user puts a forest curse on the target.
Afflicted targets are now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手施加森林詛咒。
中了詛咒的對手
會被追加草屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem Waldesfluch,
durch den dieses zusätzlich den Typ Pflanze
annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El objetivo es presa de la maldición del bosque,
por lo que pasa a ser un Pokémon de tipo Planta, 
además de conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user puts a forest curse on the target.
The target is now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向对手施加森林诅咒。
中了诅咒的对手
会被追加草属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手施加森林詛咒。
中了詛咒的對手
會被追加草屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem Waldesfluch,
durch den dieses zusätzlich den Typ Pflanze
annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El objetivo es presa de la maldición del bosque,
por lo que pasa a ser un Pokémon de tipo Planta, 
además de conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user puts a forest curse on the target.
The target is now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向对手施加森林诅咒。
中了诅咒的对手
会被追加草属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手施加森林詛咒。
中了詛咒的對手
會被追加草屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem Waldesfluch,
durch den dieses zusätzlich den Typ Pflanze
annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El objetivo es presa de la maldición del bosque,
por lo que pasa a ser un Pokémon de tipo Planta, 
además de conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user puts a forest curse on the target.
The target is now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向对手施加森林诅咒。
中了诅咒的对手
会被追加草属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてに　もりののろいを　かける。
のろいを　かけられた　あいては
タイプに　くさタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대에게 숲의 저주를 건다.
저주에 걸린 상대는
타입에 풀타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向對手施加森林詛咒。
中了詛咒的對手
會被追加草屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`La cible est charmée par l’esprit de la forêt.
Le type Plante est ajouté à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender belegt das Ziel mit einem Waldesfluch,
durch den dieses zusätzlich den Typ Pflanze annimmt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El objetivo es presa de la maldición del bosque, por lo
que pasa a ser un Pokémon de tipo Planta, además de
conservar sus tipos habituales.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa invoca la maledizione del bosco sul
bersaglio, che acquisisce così anche il tipo Erba.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user puts a forest curse on the target.
The target is now Grass type as well.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手に　森ののろいを　かける。
のろいを　かけられた　相手は
タイプに　くさタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向对手施加森林诅咒。
中了诅咒的对手
会被追加草属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user puts a forest curse on the target. The target is now Grass type as well.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user puts a forest curse on the target. This adds Grass type to the target's type.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],t={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},s=571,r=[{name:"phantump",url:"https://pokeapi.co/api/v2/pokemon/708/"},{name:"trevenant",url:"https://pokeapi.co/api/v2/pokemon/709/"}],i=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="forests-curse",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"もりののろい"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"숲의저주"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"森林詛咒"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Maléfice Sylvain"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Waldesfluch"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Condena Silvana"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Boscomalocchio"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Forest’s Curse"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"もりののろい"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"森林诅咒"}],v=[],c=null,h=20,m=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"grass",url:"https://pokeapi.co/api/v2/type/12/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:p,flavor_text_entries:n,generation:t,id:s,learned_by_pokemon:r,machines:i,meta:l,name:u,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,b as contest_combos,y as contest_effect,z as contest_type,e as damage_class,w as default,a as effect_chance,o as effect_changes,p as effect_entries,n as flavor_text_entries,t as generation,s as id,r as learned_by_pokemon,i as machines,l as meta,u as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
