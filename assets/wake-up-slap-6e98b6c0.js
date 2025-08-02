const b=100,w=null,y=null,e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,p=[],n=[{effect:"Inflicts regular damage.  If the target is sleeping, this move has double power, and the target wakes up.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"If the target is asleep, has double power and wakes it up."}],t=[{flavor_text:`This attack inflicts
high damage on a
sleeping foe. It
also wakes the foe
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`This attack inflicts
high damage on a
sleeping foe. It
also wakes the foe
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`This attack inflicts
high damage on a
sleeping foe. It
also wakes the foe
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Cette attaque inflige d’importants
dégâts à un Pokémon endormi.
Mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack inflicts big damage on a
sleeping target. It also wakes the target
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`This attack inflicts big damage on a
sleeping target. It also wakes the target
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`ねむり　じょうたいの　あいてに
おおきな　ダメージを　あたえる。
かわりに　あいては　ねむりから　さめる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`잠듦 상태의 상대에게
큰 데미지를 준다.
대신 상대는 잠에서 깬다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Cette attaque inflige d’importants dégâts à un
Pokémon endormi. Mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Richtet großen Schaden bei einem schlafenden Ziel
an, weckt es aber auch auf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Inflige gran daño a objetivos dormidos.
Sin embargo, los bofetones también los despiertan.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Questa mossa infligge un danno doppio a un
bersaglio addormentato, ma allo stesso tempo
lo risveglia.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`This attack inflicts big damage on a
sleeping target. This also wakes the target
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`眠り状態の　相手に
大きな　ダメージを　与える。
かわりに　相手は　眠りから　さめる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ねむり　じょうたいの　あいてに
おおきな　ダメージを　あたえる。
かわりに　あいては　ねむりから　さめる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`잠듦 상태의 상대에게
큰 데미지를 준다.
대신 상대는 잠에서 깬다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Cette attaque inflige d’importants dégâts à un
Pokémon endormi. Mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Richtet großen Schaden bei einem schlafenden Ziel
an, weckt es aber auch auf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Inflige gran daño a objetivos dormidos.
Sin embargo, los bofetones también los despiertan. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Questa mossa infligge un danno doppio a un
bersaglio addormentato, ma allo stesso tempo
lo risveglia.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`This attack inflicts big damage on a
sleeping target. This also wakes the target
up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`眠り状態の　相手に
大きな　ダメージを　与える。
かわりに　相手は　眠りから　さめる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ねむり　じょうたいの　あいてに
おおきな　ダメージを　あたえる。
かわりに　あいては　ねむりから　さめる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`잠듦 상태의 상대에게
큰 데미지를 준다.
대신 상대는 잠에서 깬다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`攻擊陷入睡眠狀態的對手時，
可以給予較大的傷害。
但對手也會從睡眠中醒過來。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Cette attaque inflige d’importants dégâts à un
Pokémon endormi. Mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Richtet großen Schaden bei einem schlafenden Ziel
an, weckt es aber auch auf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Inflige gran daño a objetivos dormidos.
Sin embargo, los bofetones también los despiertan. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Questa mossa infligge un danno doppio a un
bersaglio addormentato, ma allo stesso tempo
lo risveglia.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`This attack inflicts big damage on a sleeping target.
This also wakes the target up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`眠り状態の　相手に
大きな　ダメージを　与える。
かわりに　相手は　眠りから　さめる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`给予睡眠状态下的对手较大的伤害。
但相反对手会从睡眠中醒过来。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ねむり　じょうたいの　あいてに
おおきな　ダメージを　あたえる。
かわりに　あいては　ねむりから　さめる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`잠듦 상태의 상대에게
큰 데미지를 준다.
대신 상대는 잠에서 깬다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`攻擊陷入睡眠狀態的對手時，
可以給予較大的傷害。
但對手也會從睡眠中醒過來。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Cette attaque inflige d’importants dégâts à un
Pokémon endormi. Mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Richtet großen Schaden bei einem schlafenden Ziel
an, weckt es aber auch auf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Inflige gran daño a objetivos dormidos.
Sin embargo, los bofetones también los despiertan. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Questa mossa infligge un danno doppio a un
bersaglio addormentato, ma allo stesso tempo
lo risveglia.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`This attack inflicts big damage on a sleeping target.
This also wakes the target up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`眠り状態の　相手に
大きな　ダメージを　与える。
かわりに　相手は　眠りから　さめる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`给予睡眠状态下的对手较大的伤害。
但相反对手会从睡眠中醒过来。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ねむり　じょうたいの　あいてに
おおきな　ダメージを　あたえる。
かわりに　あいては　ねむりから　さめる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`잠듦 상태의 상대에게
큰 데미지를 준다.
대신 상대는 잠에서 깬다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`攻擊陷入睡眠狀態的對手時，
可以給予較大的傷害。
但對手也會從睡眠中醒過來。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Cette attaque inflige d’importants dégâts à un Pokémon
endormi, mais elle le réveille également.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Richtet großen Schaden bei einem schlafenden Ziel
an, weckt es aber auch auf.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Inflige gran daño a objetivos dormidos.
Sin embargo, los bofetones también los despiertan. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Questa mossa infligge un danno doppio a un
bersaglio addormentato, ma allo stesso tempo
lo risveglia.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`This attack inflicts big damage on a sleeping target.
This also wakes the target up, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`眠り状態の　相手に
大きな　ダメージを　与える。
かわりに　相手は　眠りから　さめる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`给予睡眠状态下的对手较大的伤害。
但相反对手会从睡眠中醒过来。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},r=358,s=[{name:"clefairy",url:"https://pokeapi.co/api/v2/pokemon/35/"},{name:"jigglypuff",url:"https://pokeapi.co/api/v2/pokemon/39/"},{name:"poliwag",url:"https://pokeapi.co/api/v2/pokemon/60/"},{name:"poliwhirl",url:"https://pokeapi.co/api/v2/pokemon/61/"},{name:"machop",url:"https://pokeapi.co/api/v2/pokemon/66/"},{name:"machoke",url:"https://pokeapi.co/api/v2/pokemon/67/"},{name:"machamp",url:"https://pokeapi.co/api/v2/pokemon/68/"},{name:"drowzee",url:"https://pokeapi.co/api/v2/pokemon/96/"},{name:"hypno",url:"https://pokeapi.co/api/v2/pokemon/97/"},{name:"tangela",url:"https://pokeapi.co/api/v2/pokemon/114/"},{name:"mr-mime",url:"https://pokeapi.co/api/v2/pokemon/122/"},{name:"jynx",url:"https://pokeapi.co/api/v2/pokemon/124/"},{name:"smoochum",url:"https://pokeapi.co/api/v2/pokemon/238/"},{name:"miltank",url:"https://pokeapi.co/api/v2/pokemon/241/"},{name:"shroomish",url:"https://pokeapi.co/api/v2/pokemon/285/"},{name:"makuhita",url:"https://pokeapi.co/api/v2/pokemon/296/"},{name:"hariyama",url:"https://pokeapi.co/api/v2/pokemon/297/"},{name:"skitty",url:"https://pokeapi.co/api/v2/pokemon/300/"},{name:"glameow",url:"https://pokeapi.co/api/v2/pokemon/431/"},{name:"mime-jr",url:"https://pokeapi.co/api/v2/pokemon/439/"},{name:"croagunk",url:"https://pokeapi.co/api/v2/pokemon/453/"},{name:"froslass",url:"https://pokeapi.co/api/v2/pokemon/478/"},{name:"timburr",url:"https://pokeapi.co/api/v2/pokemon/532/"},{name:"gurdurr",url:"https://pokeapi.co/api/v2/pokemon/533/"},{name:"conkeldurr",url:"https://pokeapi.co/api/v2/pokemon/534/"},{name:"minccino",url:"https://pokeapi.co/api/v2/pokemon/572/"},{name:"alomomola",url:"https://pokeapi.co/api/v2/pokemon/594/"},{name:"meloetta-aria",url:"https://pokeapi.co/api/v2/pokemon/648/"},{name:"solgaleo",url:"https://pokeapi.co/api/v2/pokemon/791/"},{name:"meloetta-pirouette",url:"https://pokeapi.co/api/v2/pokemon/10018/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="wake-up-slap",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"めざましビンタ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"잠깨움뺨치기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"喚醒巴掌"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Réveil Forcé"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Weckruf"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Espabila"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Svegliopacca"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Wake-Up Slap"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"めざましビンタ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"唤醒巴掌"}],m=[{accuracy:null,effect_chance:null,effect_entries:[],power:60,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],c=70,h=10,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/16/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"fighting",url:"https://pokeapi.co/api/v2/type/2/"},j={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:i,id:r,learned_by_pokemon:s,machines:l,meta:u,name:g,names:v,past_values:m,power:c,pp:h,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:x};export{b as accuracy,w as contest_combos,y as contest_effect,e as contest_type,a as damage_class,j as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,i as generation,r as id,s as learned_by_pokemon,l as machines,u as meta,g as name,v as names,m as past_values,c as power,h as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,x as type};
