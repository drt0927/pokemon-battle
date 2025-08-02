const b=100,w=null,a={url:"https://pokeapi.co/api/v2/contest-effect/9/"},e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=null,n=[],t=[{effect:"Inflicts regular damage.  If the target is paralyzed, this move has double power, and the target is cured of its paralysis.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"If the target is paralyzed, inflicts double damage and cures the paralysis."}],r=[{flavor_text:`Powerful against paralyzed
foes, but also heals them.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Powerful against paralyzed
foes, but also heals them.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`Doubly effective on
a paralyzed foe,
but it also cures
the foe’s paralysis.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`This attack inflicts
double damage on a
paralyzed foe. It
also cures the foe’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`This attack inflicts
double damage on a
paralyzed foe. It
also cures the foe’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`This attack inflicts
double damage on a
paralyzed foe. It
also cures the foe’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Cette attaque est doublement efficace
sur les Pokémon paralysés, mais elle
soigne leur paralysie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack inflicts double damage on a
target with paralysis. It also cures the
target’s paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack inflicts double damage on a
target with paralysis. It also cures the
target’s paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`まひ　じょうたいの　あいてには
いりょくが　２ばいに　なるが
かわりに　あいての　まひが　なおる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`마비 상태의 상대에게는
위력이 2배가 되지만
대신 상대의 마비가 풀린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Cette attaque est doublement efficace sur les
Pokémon paralysés, mais elle soigne leur paralysie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Doppelt wirksam gegen paralysierte Ziele,
heilt sie aber auch von der Paralyse.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Hace el doble de daño a objetivos paralizados,
pero también cura la parálisis.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Infligge un danno doppio a un bersaglio
paralizzato, ma ne cura anche la paralisi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`This attack inflicts double damage on a
target with paralysis. This also cures the
target’s paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`まひ状態の　相手には
威力が　２倍に　なるが
かわりに　相手の　まひが　治る。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`まひ　じょうたいの　あいてには
いりょくが　２ばいに　なるが
かわりに　あいての　まひが　なおる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`마비 상태의 상대에게는
위력이 2배가 되지만
대신 상대의 마비가 풀린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Cette attaque est doublement efficace sur les
Pokémon paralysés, mais elle soigne leur paralysie. `,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Doppelt wirksam gegen paralysierte Ziele,
heilt sie aber auch von der Paralyse.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Hace el doble de daño a objetivos paralizados, 
pero también cura la parálisis.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Infligge un danno doppio a un bersaglio
paralizzato, ma ne cura anche la paralisi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`This attack inflicts double damage on a
target with paralysis. This also cures the
target’s paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`まひ状態の　相手には
威力が　２倍に　なるが
かわりに　相手の　まひが　治る。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`まひ　じょうたいの　あいてには
いりょくが　２ばいに　なるが
かわりに　あいての　まひが　なおる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`마비 상태의 상대에게는
위력이 2배가 되지만
대신 상대의 마비가 풀린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`攻擊陷入麻痺狀態的對手時，
威力會變成２倍。
但也會治癒對手的麻痺。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Cette attaque est doublement efficace sur les
Pokémon paralysés, mais elle soigne leur paralysie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Doppelt wirksam gegen paralysierte Ziele, heilt sie
aber auch von der Paralyse.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Hace el doble de daño a objetivos paralizados, 
pero también cura la parálisis.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Infligge un danno doppio a un bersaglio
paralizzato, ma ne cura anche la paralisi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`This attack’s power is doubled when used on a
target with paralysis. This also cures the target’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`まひ状態の　相手には
威力が　２倍に　なるが
かわりに　相手の　まひが　治る。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`对于麻痹状态下的对手，
威力会变成２倍。
但相反对手的麻痹也会被治愈。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`まひ　じょうたいの　あいてには
いりょくが　２ばいに　なるが
かわりに　あいての　まひが　なおる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`마비 상태의 상대에게는
위력이 2배가 되지만
대신 상대의 마비가 풀린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`攻擊陷入麻痺狀態的對手時，
威力會變成２倍。
但也會治癒對手的麻痺。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Cette attaque est doublement efficace sur les
Pokémon paralysés, mais elle soigne leur paralysie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Doppelt wirksam gegen paralysierte Ziele, heilt sie
aber auch von der Paralyse.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Hace el doble de daño a objetivos paralizados, 
pero también cura la parálisis.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Infligge un danno doppio a un bersaglio
paralizzato, ma ne cura anche la paralisi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`This attack’s power is doubled when used on a
target with paralysis. This also cures the target’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`まひ状態の　相手には
威力が　２倍に　なるが
かわりに　相手の　まひが　治る。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`对于麻痹状态下的对手，
威力会变成２倍。
但相反对手的麻痹也会被治愈。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`まひ　じょうたいの　あいてには
いりょくが　２ばいに　なるが
かわりに　あいての　まひが　なおる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`마비 상태의 상대에게는
위력이 2배가 되지만
대신 상대의 마비가 풀린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`攻擊陷入麻痺狀態的對手時，
威力會變成２倍。
但也會治癒對手的麻痺。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Cette attaque est doublement efficace sur les Pokémon
paralysés, mais elle soigne leur paralysie.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Doppelt wirksam gegen paralysierte Ziele, heilt sie
aber auch von der Paralyse.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Hace el doble de daño a objetivos paralizados, 
pero también cura la parálisis.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Infligge un danno doppio a un bersaglio
paralizzato, ma ne cura anche la paralisi.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`This attack’s power is doubled when used on a
target with paralysis. This also cures the target’s
paralysis, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`まひ状態の　相手には
威力が　２倍に　なるが
かわりに　相手の　まひが　治る。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`对于麻痹状态下的对手，
威力会变成２倍。
但相反对手的麻痹也会被治愈。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},s=265,l=[{name:"mankey",url:"https://pokeapi.co/api/v2/pokemon/56/"},{name:"machop",url:"https://pokeapi.co/api/v2/pokemon/66/"},{name:"lickitung",url:"https://pokeapi.co/api/v2/pokemon/108/"},{name:"snubbull",url:"https://pokeapi.co/api/v2/pokemon/209/"},{name:"torchic",url:"https://pokeapi.co/api/v2/pokemon/255/"},{name:"whismur",url:"https://pokeapi.co/api/v2/pokemon/293/"},{name:"makuhita",url:"https://pokeapi.co/api/v2/pokemon/296/"},{name:"hariyama",url:"https://pokeapi.co/api/v2/pokemon/297/"},{name:"aron",url:"https://pokeapi.co/api/v2/pokemon/304/"},{name:"spinda",url:"https://pokeapi.co/api/v2/pokemon/327/"},{name:"cacnea",url:"https://pokeapi.co/api/v2/pokemon/331/"},{name:"croagunk",url:"https://pokeapi.co/api/v2/pokemon/453/"},{name:"timburr",url:"https://pokeapi.co/api/v2/pokemon/532/"},{name:"mienfoo",url:"https://pokeapi.co/api/v2/pokemon/619/"}],u=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="smelling-salts",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"きつけ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"정신차리기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"清醒"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Stimulant"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Riechsalz"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Estímulo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Maniereforti"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Smelling Salts"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"きつけ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"清醒"}],m=[{accuracy:null,effect_chance:null,effect_entries:[],power:60,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],h=70,k=10,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/16/"},y={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:100,contest_combos:null,contest_effect:a,contest_type:e,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:l,machines:u,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:y,type:x};export{b as accuracy,w as contest_combos,a as contest_effect,e as contest_type,o as damage_class,z as default,p as effect_chance,n as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,s as id,l as learned_by_pokemon,u as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,y as target,x as type};
