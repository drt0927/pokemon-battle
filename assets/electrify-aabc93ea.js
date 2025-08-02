const x=null,y=null,b=null,E=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],t=[{effect:"Changes the target's move's type to electric if it hasn't moved yet this turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Changes the target's move's type to electric if it hasn't moved yet this turn."}],n=[{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Si le lanceur attaque avant l’ennemi, les capacités
de ce dernier seront de type Électrik jusqu’à la fin
du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel
seine Attacke ausführt, nimmt diese für die Dauer
dieser Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Si el Pokémon objetivo queda electrificado antes
de usar un movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua mossa,
per quel turno le sue mosse saranno di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`If the target is electrified before it uses
a move during that turn, the target’s
move becomes Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Si le lanceur attaque avant la cible, les capacités
de celle-ci seront de type Électrik jusqu’à la fin
du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel
seine Attacke ausführt, nimmt diese für die Dauer
dieser Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Si el Pokémon objetivo queda electrificado antes de 
usar un movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua mossa, 
per quel turno le sue mosse saranno di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`If the target is electrified before it uses
a move during that turn, the target’s
move becomes Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`如果在對手使用招式前輸電，
該回合對手的招式會變成電屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Si le lanceur attaque avant la cible, les capacités
de celle-ci seront de type Électrik jusqu’à la fin
du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel seine
Attacke ausführt, nimmt diese für die Dauer dieser
Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Si el objetivo queda electrificado antes de usar un
movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua
mossa, per quel turno questa sarà di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`If the target is electrified before it uses a move
during that turn, the target’s move becomes
Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`对手使出招式前，
如果输电，则该回合
对手的招式变成电属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`如果在對手使用招式前輸電，
該回合對手的招式會變成電屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Si le lanceur attaque avant la cible, les capacités
de celle-ci seront de type Électrik jusqu’à la fin
du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel seine
Attacke ausführt, nimmt diese für die Dauer dieser
Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Si el objetivo queda electrificado antes de usar un
movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua
mossa, per quel turno questa sarà di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`If the target is electrified before it uses a move
during that turn, the target’s move becomes
Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`对手使出招式前，
如果输电，则该回合
对手的招式变成电属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`如果在對手使用招式前輸電，
該回合對手的招式會變成電屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Si le lanceur attaque avant la cible, les capacités
de celle-ci seront de type Électrik jusqu’à la fin du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel seine
Attacke ausführt, nimmt diese für die Dauer dieser
Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Si el objetivo queda electrificado antes de usar un
movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua
mossa, per quel turno questa sarà di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`If the target is electrified before it uses a move
during that turn, the target’s move becomes
Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`对手使出招式前，
如果输电，则该回合
对手的招式变成电属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてが　わざを　だすまえに
そうでん　すると　そのターン
あいての　わざは　でんきタイプになる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대가 기술을 쓰기 전에
송전하면 그 턴에 상대가
사용하는 기술은 전기타입이 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`如果在對手使用招式前輸電，
該回合對手的招式會變成電屬性。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Si le lanceur attaque avant la cible, les capacités
de celle-ci seront de type Électrik jusqu’à la fin du tour.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Kommt die Attacke zum Einsatz, bevor das Ziel seine
Attacke ausführt, nimmt diese für die Dauer dieser
Runde den Typ Elektro an.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Si el objetivo queda electrificado antes de usar un
movimiento, este será de tipo Eléctrico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Se si contagia il bersaglio prima che usi la sua
mossa, per quel turno questa sarà di tipo Elettro.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`If the target is electrified before it uses a move
during that turn, the target’s move becomes
Electric type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手が　技を　だす前に
そうでん　すると　そのターン
相手の　技は　でんきタイプになる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`对手使出招式前，
如果输电，则该回合
对手的招式变成电属性。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},r=582,i=[{name:"helioptile",url:"https://pokeapi.co/api/v2/pokemon/694/"},{name:"heliolisk",url:"https://pokeapi.co/api/v2/pokemon/695/"},{name:"boltund",url:"https://pokeapi.co/api/v2/pokemon/836/"}],u=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="electrify",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"そうでん"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"송전"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"輸電"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Électrisation"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Elektrifizierung"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Electrificación"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Elettrocontagio"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Electrify"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"そうでん"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"输电"}],v=[],c=null,m=20,h=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"electric",url:"https://pokeapi.co/api/v2/type/13/"},q={accuracy:null,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:t,flavor_text_entries:n,generation:p,id:r,learned_by_pokemon:i,machines:u,meta:s,name:l,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,y as contest_combos,b as contest_effect,E as contest_type,e as damage_class,q as default,a as effect_chance,o as effect_changes,t as effect_entries,n as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,u as machines,s as meta,l as name,g as names,v as past_values,c as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
