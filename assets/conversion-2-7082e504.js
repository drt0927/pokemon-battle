const b=null,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/12/"},a={name:"beauty",url:"https://pokeapi.co/api/v2/contest-type/2/"},t={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},o=null,p=[],n=[{effect:"Changes the user's type to a type either resistant or immune to the last damaging move that hit it.  The new type is selected at random and cannot be a type the user already is.  If there is no eligible new type, this move will fail.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Changes the user's type to a random type either resistant or immune to the last move used against it."}],r=[{flavor_text:`The user's type is
made resistant.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`The user's type is
made resistant.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Makes the user resistant
to the last attack’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Makes the user resistant
to the last attack’s type.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The user changes
type to make itself
resistant to the
last attack it took.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user changes its
type to make itself
resistant to the type
of the attack it
last took.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user changes its
type to make itself
resistant to the type
of the attack it
last took.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user changes its
type to make itself
resistant to the type
of the attack it
last took.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur change de type pour être
résistant au type de la dernière
attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user changes its type to make itself
resistant to the type of the attack the
opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user changes its type to make itself
resistant to the type of the attack the
opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur change de type pour être résistant au
type de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender ändert Typ und wird gegen
letzten Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente
al último tipo de movimiento usado por el objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user changes its type to make itself
resistant to the type of the attack the
opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur change de type pour être résistant au
type de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender ändert Typ und wird gegen
letzten Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente 
al último tipo de movimiento usado por el objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user changes its type to make itself
resistant to the type of the attack the
opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`改變屬性，
讓自己能夠抵抗對手
最近一次使出的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur change de type pour être résistant au
type de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender ändert Typ und wird gegen letzten
Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente 
al último tipo de movimiento usado por el objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user changes its type to make itself resistant to
the type of the attack the opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`为了可以抵抗对手
最后使用的招式，
从而使自己的属性发生变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`改變屬性，
讓自己能夠抵抗對手
最近一次使出的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur change de type pour être résistant au
type de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender ändert Typ und wird gegen letzten
Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente 
al último tipo de movimiento usado por el objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user changes its type to make itself resistant to
the type of the attack the opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`为了可以抵抗对手
最后使用的招式，
从而使自己的属性发生变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`改變屬性，
讓自己能夠抵抗對手
最近一次使出的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur change de type pour être résistant au type
de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender ändert Typ und wird gegen letzten
Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente 
al último tipo de movimiento usado por el objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user changes its type to make itself resistant to
the type of the attack the opponent used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`为了可以抵抗对手
最后使用的招式，
从而使自己的属性发生变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてが　さいごに　つかった　わざに
ていこう　できる　ように
じぶんの　タイプを　へんか　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대가 마지막으로 쓴 기술에
저항할 수 있도록
자신의 타입을 변화시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`改變屬性，
讓自己能夠抵抗對手
最近一次使出的招式。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur change de type pour être résistant au type
de la dernière attaque lancée par sa cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender ändert Typ und wird gegen letzten
Angriffstyp resistent.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario cambia de tipo para hacerse resistente al
último tipo de movimiento usado por el objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa cambia tipo per rendersi resistente
al tipo dell’ultima mossa usata dal bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user changes its type to make itself resistant to
the type of the attack the target used last.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手が　最後に　使った技に
抵抗できる　ように
自分の　タイプを　変化させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`为了可以抵抗对手
最后使用的招式，
从而使自己的属性发生变化。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user changes its type to make itself resistant to the type of the attack the target used last.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user changes its type to make itself resistant to the type of the move the target used last.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-ii",url:"https://pokeapi.co/api/v2/generation/2/"},s=176,u=[{name:"porygon",url:"https://pokeapi.co/api/v2/pokemon/137/"},{name:"porygon2",url:"https://pokeapi.co/api/v2/pokemon/233/"},{name:"porygon-z",url:"https://pokeapi.co/api/v2/pokemon/474/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="conversion-2",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"テクスチャー２"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"텍스처2"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"紋理２"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Conversion 2"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Umwandlung2"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Conversión2"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Conversione2"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Conversion 2"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"テクスチャー２"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"纹理２"}],h=[],m=null,k=30,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/23/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},T={accuracy:null,contest_combos:null,contest_effect:e,contest_type:a,damage_class:t,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:y,type:x};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,t as damage_class,T as default,o as effect_chance,p as effect_changes,n as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,y as target,x as type};
