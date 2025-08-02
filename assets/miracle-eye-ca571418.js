const b=null,x=null,P=null,e={name:"cute",url:"https://pokeapi.co/api/v2/contest-type/3/"},a={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},o=null,n=[],t=[{effect:"Resets the target's evasion to normal and prevents any further boosting until the target leaves the field.  A dark Pokémon under this effect takes normal damage from psychic moves.  This move itself ignores accuracy and evasion modifiers.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Forces the target to have no evasion, and allows it to be hit by Psychic moves even if it's Dark."}],p=[{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. This also enables
an evasive target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Enables the user to
hit a Ghost type with
any type of move. It
also enables the user
to hit an evasive foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`Enables the user to
hit a Dark type with
any type of move. It
also enables the user
to hit an evasive foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`Enables the user to
hit a Dark type with
any type of move. It
also enables the user
to hit an evasive foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres
avec toute capacité et de toucher un
ennemi insaisissable.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. It also enables
an evasive target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. It also enables
an evasive target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あくタイプに　こうかがない　わざや
かいひりつの　たかい　あいてに
こうげきが　あたるように　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`악타입에 효과가 없는 기술이나
회피율이 높은 상대라 할지라도
공격이 맞게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres avec
les capacités de type Psy ou de toucher un ennemi
insaisissable.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Erlaubt es, Unlicht-Pokémon mit Psycho-Attacken
anzugreifen. Ignoriert den Fluchtwert des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Permite atacar con cualquier movimiento a
objetivos de tipo Siniestro y golpear a Pokémon
evasivos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa rende i Pokémon di tipo Buio vulnerabili
a qualsiasi tipo di mossa e può, inoltre, colpire
i nemici sfuggenti.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. This also enables
an evasive target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あくタイプに　効果がない　技や
回避率の　高い　相手に
攻撃が　当たるように　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あくタイプに　こうかがない　わざや
かいひりつの　たかい　あいてに
こうげきが　あたるように　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`악타입에 효과가 없는 기술이나
회피율이 높은 상대라 할지라도
공격이 맞게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres avec
les capacités de type Psy ou de toucher un ennemi 
ayant beaucoup d’esquive.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Erlaubt es, Unlicht-Pokémon mit Psycho-Attacken
anzugreifen. Ignoriert den Fluchtwert des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Permite atacar con cualquier movimiento a objetivos 
de tipo Siniestro y golpear a Pokémon evasivos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Rende i Pokémon di tipo Buio vulnerabili a qualsiasi 
tipo di mossa e, inoltre, permette di colpire i nemici 
indipendentemente dall’elusione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あくタイプに　効果がない　技や
回避率の　高い　相手に
攻撃が　当たるように　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あくタイプに　こうかがない　わざや
かいひりつの　たかい　あいてに
こうげきが　あたるように　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`악타입에 효과가 없는 기술이나
회피율이 높은 상대라 할지라도
공격이 맞게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`讓對惡屬性寶可夢無效的招式
能夠發揮效果，也可不顧對手
提高後的閃避率進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres avec
les capacités de type Psy ou de toucher un ennemi
ayant beaucoup d’esquive.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ermöglicht es, Unlicht-Pokémon mit Psycho-Attacken
anzugreifen. Ignoriert den Fluchtwert des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Permite atacar con cualquier movimiento a objetivos 
de tipo Siniestro y golpear a Pokémon evasivos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Rende i Pokémon di tipo Buio vulnerabili a qualsiasi 
tipo di mossa e, inoltre, permette di colpire i nemici 
indipendentemente dall’elusione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. This also enables an evasive
target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あくタイプに　効果がない　技や
回避率の　高い　相手に
攻撃が　当たるように　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`对恶属性宝可梦没有效果的招式
以及闪避率高的对手，
使用后变得能够打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あくタイプに　こうかがない　わざや
かいひりつの　たかい　あいてに
こうげきが　あたるように　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`악타입에 효과가 없는 기술이나
회피율이 높은 상대라 할지라도
공격이 맞게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`讓對惡屬性寶可夢無效的招式
能夠發揮效果，也可不顧對手
提高後的閃避率進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres avec
les capacités de type Psy ou de toucher un ennemi
ayant beaucoup d’esquive.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ermöglicht es, Unlicht-Pokémon mit Psycho-Attacken
anzugreifen. Ignoriert den Fluchtwert des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Permite atacar con cualquier movimiento a objetivos 
de tipo Siniestro y golpear a Pokémon evasivos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Rende i Pokémon di tipo Buio vulnerabili a qualsiasi 
tipo di mossa e, inoltre, permette di colpire i nemici 
indipendentemente dall’elusione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. This also enables an evasive
target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あくタイプに　効果がない　技や
回避率の　高い　相手に
攻撃が　当たるように　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`使出后对恶属性宝可梦没有
效果的招式以及闪避率高的对手，
变得能够打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あくタイプに　こうかがない　わざや
かいひりつの　たかい　あいてに
こうげきが　あたるように　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`악타입에 효과가 없는 기술이나
회피율이 높은 상대라 할지라도
공격이 맞게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`讓對惡屬性寶可夢無效的招式
能夠發揮效果，也可不顧對手
提高後的閃避率進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Permet de toucher un Pokémon Ténèbres avec
les capacités de type Psy ou de toucher un ennemi
ayant beaucoup d’esquive.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ermöglicht es, Unlicht-Pokémon mit Psycho-Attacken
anzugreifen. Ignoriert den Fluchtwert des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Permite atacar con cualquier movimiento a objetivos 
de tipo Siniestro y golpear a Pokémon evasivos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Rende i Pokémon di tipo Buio vulnerabili a qualsiasi
tipo di mossa e, inoltre, permette di colpire i nemici
indipendentemente dall’elusione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Enables a Dark-type target to be hit by
Psychic-type attacks. This also enables an evasive
target to be hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あくタイプに　効果がない　技や
回避率の　高い　相手に
攻撃が　当たるように　なる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`使出后对恶属性宝可梦没有
效果的招式以及闪避率高的对手，
变得能够打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},r=357,s=[{name:"kadabra",url:"https://pokeapi.co/api/v2/pokemon/64/"},{name:"alakazam",url:"https://pokeapi.co/api/v2/pokemon/65/"},{name:"mewtwo",url:"https://pokeapi.co/api/v2/pokemon/150/"},{name:"natu",url:"https://pokeapi.co/api/v2/pokemon/177/"},{name:"xatu",url:"https://pokeapi.co/api/v2/pokemon/178/"},{name:"smoochum",url:"https://pokeapi.co/api/v2/pokemon/238/"},{name:"metang",url:"https://pokeapi.co/api/v2/pokemon/375/"},{name:"metagross",url:"https://pokeapi.co/api/v2/pokemon/376/"},{name:"sigilyph",url:"https://pokeapi.co/api/v2/pokemon/561/"},{name:"gothita",url:"https://pokeapi.co/api/v2/pokemon/574/"},{name:"elgyem",url:"https://pokeapi.co/api/v2/pokemon/605/"},{name:"beheeyem",url:"https://pokeapi.co/api/v2/pokemon/606/"},{name:"meowstic-male",url:"https://pokeapi.co/api/v2/pokemon/678/"},{name:"alakazam-mega",url:"https://pokeapi.co/api/v2/pokemon/10037/"},{name:"mewtwo-mega-x",url:"https://pokeapi.co/api/v2/pokemon/10043/"},{name:"mewtwo-mega-y",url:"https://pokeapi.co/api/v2/pokemon/10044/"},{name:"metagross-mega",url:"https://pokeapi.co/api/v2/pokemon/10076/"}],u=[],l={ailment:{name:"no-type-immunity",url:"https://pokeapi.co/api/v2/move-ailment/17/"},ailment_chance:0,category:{name:"ailment",url:"https://pokeapi.co/api/v2/move-category/1/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="miracle-eye",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ミラクルアイ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"미라클아이"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"奇跡之眼"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Œil Miracle"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Wunderauge"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Gran Ojo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Miracolvista"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Miracle Eye"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ミラクルアイ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"奇迹之眼"}],c=[],m=null,h=40,k=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/20/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"psychic",url:"https://pokeapi.co/api/v2/type/14/"},w={accuracy:null,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:n,effect_entries:t,flavor_text_entries:p,generation:i,id:r,learned_by_pokemon:s,machines:u,meta:l,name:g,names:v,past_values:c,power:m,pp:h,priority:k,stat_changes:_,super_contest_effect:d,target:f,type:y};export{b as accuracy,x as contest_combos,P as contest_effect,e as contest_type,a as damage_class,w as default,o as effect_chance,n as effect_changes,t as effect_entries,p as flavor_text_entries,i as generation,r as id,s as learned_by_pokemon,u as machines,l as meta,g as name,v as names,c as past_values,m as power,h as pp,k as priority,_ as stat_changes,d as super_contest_effect,f as target,y as type};
