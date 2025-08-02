const x=100,y=null,b=null,w=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],p=[{effect:"Adds ghost to the target's types.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Adds ghost to the target's types."}],t=[{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et
ajoute le type Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten.
Dieses nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, haciendo
que pase a ser también de tipo Fantasma además
de conservar sus propios tipos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et
ajoute le type Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten.
Dieses nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, haciendo 
que pase a ser también de tipo Fantasma además 
de conservar sus propios tipos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`邀請對手參加萬聖夜。
讓對手追加幽靈屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et
ajoute le type Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten.
Dieses nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, haciendo 
que pase a ser también de tipo Fantasma además 
de conservar sus propios tipos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`邀请对手参加万圣夜。
使对手被追加幽灵属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`邀請對手參加萬聖夜。
讓對手追加幽靈屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et
ajoute le type Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten.
Dieses nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, haciendo 
que pase a ser también de tipo Fantasma además 
de conservar sus propios tipos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`邀请对手参加万圣夜。
使对手被追加幽灵属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`邀請對手參加萬聖夜。
讓對手追加幽靈屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et ajoute
le type Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten.
Dieses nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, lo que añade 
el tipo Fantasma a sus propios tipos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`邀请对手参加万圣夜。
使对手被追加幽灵属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてを　ハロウィンに　さそう。
あいての　タイプに
ゴーストタイプが　ついかされる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대를 핼러윈으로 초대한다.
상대 타입에
고스트타입이 추가된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`邀請對手參加萬聖夜。
讓對手追加幽靈屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Insuffle à la cible l’esprit d’Halloween, et ajoute le type
Spectre à ses types actuels.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender lehrt das Ziel das Fürchten. Dieses
nimmt dadurch zusätzlich den Typ Geist an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Invita al objetivo a celebrar Halloween, lo que añade 
el tipo Fantasma a los tipos de este.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il bersaglio viene invitato a festeggiare Halloween
e aggiunge così al proprio tipo anche il tipo
Spettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user takes the target trick-or-treating.
This adds Ghost type to the target’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手を　ハロウィンに　誘う。
相手の　タイプに
ゴーストタイプが　追加される。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`邀请对手参加万圣夜。
使对手被追加幽灵属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],n={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},r=567,i=[{name:"pumpkaboo-average",url:"https://pokeapi.co/api/v2/pokemon/710/"},{name:"gourgeist-average",url:"https://pokeapi.co/api/v2/pokemon/711/"},{name:"pumpkaboo-small",url:"https://pokeapi.co/api/v2/pokemon/10027/"},{name:"pumpkaboo-large",url:"https://pokeapi.co/api/v2/pokemon/10028/"},{name:"pumpkaboo-super",url:"https://pokeapi.co/api/v2/pokemon/10029/"},{name:"gourgeist-small",url:"https://pokeapi.co/api/v2/pokemon/10030/"},{name:"gourgeist-large",url:"https://pokeapi.co/api/v2/pokemon/10031/"},{name:"gourgeist-super",url:"https://pokeapi.co/api/v2/pokemon/10032/"}],s=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="trick-or-treat",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ハロウィン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"핼러윈"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"萬聖夜"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Halloween"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Halloween"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Halloween"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Halloween"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Trick-or-Treat"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ハロウィン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"万圣夜"}],v=[],c=null,h=20,m=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"ghost",url:"https://pokeapi.co/api/v2/type/8/"},H={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:p,flavor_text_entries:t,generation:n,id:r,learned_by_pokemon:i,machines:s,meta:l,name:u,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,y as contest_combos,b as contest_effect,w as contest_type,e as damage_class,H as default,a as effect_chance,o as effect_changes,p as effect_entries,t as flavor_text_entries,n as generation,r as id,i as learned_by_pokemon,s as machines,l as meta,u as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
