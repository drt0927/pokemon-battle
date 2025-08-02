const w=null,y=null,b=null,e={name:"cute",url:"https://pokeapi.co/api/v2/contest-type/3/"},a={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},o=null,p=[],t=[{effect:`If the target has selected a damaging move this turn, the user will copy that move and use it against the target, with a 50% increase in power.

If the target moves before the user, this move will fail.

This move cannot be copied by mirror move, nor selected by assist, metronome, or sleep talk.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Uses the target's move against it before it attacks, with power increased by half."}],n=[{flavor_text:`Se chi la usa è più veloce del nemico, gli ruba
la mossa e gliela ritorce contro con potenza
persino maggiore.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user tries to cut
ahead of the foe to
steal and use the
foe’s intended move
with greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user tries to cut
ahead of the foe to
steal and use the
foe’s intended move
with greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user tries to cut
ahead of the foe to
steal and use the
foe’s intended move
with greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur vole la capacité prévue par
l’ennemi et l’utilise en faisant plus de
dégâts. Il doit frapper en premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user tries to cut ahead of the target
to steal and use the target’s intended
move with greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user tries to cut ahead of the target
to steal and use the target’s intended
move with greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`いりょくを　あげて　あいてが
だそうとする　わざを　さきにだす。
さきに　だせないと　しっぱい　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`위력을 올려 상대가
쓰려고 하는 기술을 먼저 쓴다.
먼저 쓰지 않으면 실패한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur vole la capacité prévue par l’ennemi et
l’utilise en faisant plus de dégâts. Il doit frapper en
premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender stiehlt und führt die Attacke eines
langsameren Zieles zuerst und mit größerer
Kraft aus.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Se adelanta al movimiento que pretende usar el
objetivo y lo lanza antes con más fuerza. Si el
usuario es más lento, falla.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Se chi la usa è più veloce del nemico, gli ruba
la mossa e gliela ritorce contro con potenza
persino maggiore.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user cuts ahead of the target to steal and
use the target’s intended move with greater power.
This move fails if it isn’t used first.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`威力を　あげて　相手が
だそうとする　技を　先にだす。
先に　だせないと　失敗する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`いりょくを　あげて　あいてが
だそうとする　わざを　さきにだす。
さきに　だせないと　しっぱい　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`위력을 올려 상대가
쓰려고 하는 기술을 먼저 쓴다.
먼저 쓰지 않으면 실패한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur vole la capacité prévue par l’ennemi et
l’utilise en faisant plus de dégâts. Il doit frapper en
premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender stiehlt und führt die Attacke eines
langsameren Zieles zuerst und mit größerer
Kraft aus.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Se adelanta al movimiento que pretende usar el 
objetivo y lo lanza antes con más fuerza. Si el
usuario es más lento, falla.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Se chi la usa è più veloce del nemico, gli ruba
la mossa e gliela ritorce contro con potenza
persino maggiore.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user cuts ahead of the target to steal and
use the target’s intended move with greater power.
This move fails if it isn’t used first.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`威力を　あげて　相手が
だそうとする　技を　先にだす。
先に　だせないと　失敗する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`いりょくを　あげて　あいてが
だそうとする　わざを　さきにだす。
さきに　だせないと　しっぱい　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`위력을 올려 상대가
쓰려고 하는 기술을 먼저 쓴다.
먼저 쓰지 않으면 실패한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`以更高的威力，搶先發動
對手準備使出的招式。
若行動順序在對手之後則會失敗。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur vole la capacité prévue par l’ennemi et
l’utilise en faisant plus de dégâts. Il doit frapper en
premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender führt die Attacke des Zieles zuerst und
mit höherer Stärke aus. Dies schlägt fehl, falls der
Anwender nicht vor dem Ziel zum Zug kommt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Se adelanta al movimiento que pretende usar el 
objetivo y lo lanza antes con más fuerza. Si el
usuario es más lento, falla.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user cuts ahead of the target to copy and use
the target’s intended move with greater power.
This move fails if it isn’t used first.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`威力を　あげて　相手が
だそうとする　技を　先にだす。
先に　だせないと　失敗する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`提高威力，抢先使出
对手想要使出的招式。
如果不先使出则会失败。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`いりょくを　あげて　あいてが
だそうとする　わざを　さきにだす。
さきに　だせないと　しっぱい　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`위력을 올려 상대가
쓰려고 하는 기술을 먼저 쓴다.
먼저 쓰지 않으면 실패한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`以更高的威力，搶先發動
對手準備使出的招式。
若行動順序在對手之後則會失敗。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur vole la capacité prévue par l’ennemi et
l’utilise en faisant plus de dégâts. Il doit frapper en
premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender führt die Attacke des Zieles zuerst und
mit höherer Stärke aus. Dies schlägt fehl, falls der
Anwender nicht vor dem Ziel zum Zug kommt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Se adelanta al movimiento que pretende usar el 
objetivo y lo lanza antes con más fuerza. Si el
usuario es más lento, falla.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Se chi la usa è più veloce del nemico, gli ruba
la mossa e gliela ritorce contro con potenza
persino maggiore.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user cuts ahead of the target to copy and use
the target’s intended move with greater power.
This move fails if it isn’t used first.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`威力を　あげて　相手が
だそうとする　技を　先にだす。
先に　だせないと　失敗する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`提高威力，抢先使出
对手想要使出的招式。
如果不先使出则会失败。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`いりょくを　あげて　あいてが
だそうとする　わざを　さきにだす。
さきに　だせないと　しっぱい　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`위력을 올려 상대가
쓰려고 하는 기술을 먼저 쓴다.
먼저 쓰지 않으면 실패한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`以更高的威力，搶先發動
對手準備使出的招式。
若行動順序在對手之後則會失敗。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur vole la capacité prévue par l’ennemi
et l’utilise en faisant plus de dégâts. Il doit frapper
en premier.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender führt die Attacke des Zieles zuerst und
mit höherer Stärke aus. Dies schlägt fehl, falls der
Anwender nicht vor dem Ziel zum Zug kommt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Se adelanta al movimiento que pretende usar el 
objetivo y lo lanza antes con más fuerza. Si el
usuario es más lento, falla.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Se chi la usa è più veloce del nemico, gli ruba
la mossa e gliela ritorce contro con potenza
persino maggiore.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user cuts ahead of the target to copy and use
the target’s intended move with greater power.
This move fails if it isn’t used first.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`威力を　あげて　相手が
だそうとする　技を　先にだす。
先に　だせないと　失敗する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`提高威力，抢先使出
对手想要使出的招式。
如果不先使出则会失败。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=382,s=[{name:"rattata",url:"https://pokeapi.co/api/v2/pokemon/19/"},{name:"golduck",url:"https://pokeapi.co/api/v2/pokemon/55/"},{name:"slowpoke",url:"https://pokeapi.co/api/v2/pokemon/79/"},{name:"lickitung",url:"https://pokeapi.co/api/v2/pokemon/108/"},{name:"pinsir",url:"https://pokeapi.co/api/v2/pokemon/127/"},{name:"mewtwo",url:"https://pokeapi.co/api/v2/pokemon/150/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"sentret",url:"https://pokeapi.co/api/v2/pokemon/161/"},{name:"furret",url:"https://pokeapi.co/api/v2/pokemon/162/"},{name:"natu",url:"https://pokeapi.co/api/v2/pokemon/177/"},{name:"xatu",url:"https://pokeapi.co/api/v2/pokemon/178/"},{name:"misdreavus",url:"https://pokeapi.co/api/v2/pokemon/200/"},{name:"stantler",url:"https://pokeapi.co/api/v2/pokemon/234/"},{name:"poochyena",url:"https://pokeapi.co/api/v2/pokemon/261/"},{name:"absol",url:"https://pokeapi.co/api/v2/pokemon/359/"},{name:"buizel",url:"https://pokeapi.co/api/v2/pokemon/418/"},{name:"lucario",url:"https://pokeapi.co/api/v2/pokemon/448/"},{name:"croagunk",url:"https://pokeapi.co/api/v2/pokemon/453/"},{name:"lickilicky",url:"https://pokeapi.co/api/v2/pokemon/463/"},{name:"blitzle",url:"https://pokeapi.co/api/v2/pokemon/522/"},{name:"sewaddle",url:"https://pokeapi.co/api/v2/pokemon/540/"},{name:"sandile",url:"https://pokeapi.co/api/v2/pokemon/551/"},{name:"ducklett",url:"https://pokeapi.co/api/v2/pokemon/580/"},{name:"accelgor",url:"https://pokeapi.co/api/v2/pokemon/617/"},{name:"stunfisk",url:"https://pokeapi.co/api/v2/pokemon/618/"},{name:"mienfoo",url:"https://pokeapi.co/api/v2/pokemon/619/"},{name:"fletchling",url:"https://pokeapi.co/api/v2/pokemon/661/"},{name:"fletchinder",url:"https://pokeapi.co/api/v2/pokemon/662/"},{name:"talonflame",url:"https://pokeapi.co/api/v2/pokemon/663/"},{name:"pancham",url:"https://pokeapi.co/api/v2/pokemon/674/"},{name:"hawlucha",url:"https://pokeapi.co/api/v2/pokemon/701/"},{name:"pheromosa",url:"https://pokeapi.co/api/v2/pokemon/795/"},{name:"meowstic-female",url:"https://pokeapi.co/api/v2/pokemon/10025/"},{name:"pinsir-mega",url:"https://pokeapi.co/api/v2/pokemon/10040/"},{name:"mewtwo-mega-x",url:"https://pokeapi.co/api/v2/pokemon/10043/"},{name:"mewtwo-mega-y",url:"https://pokeapi.co/api/v2/pokemon/10044/"},{name:"absol-mega",url:"https://pokeapi.co/api/v2/pokemon/10057/"},{name:"lucario-mega",url:"https://pokeapi.co/api/v2/pokemon/10059/"},{name:"rattata-alola",url:"https://pokeapi.co/api/v2/pokemon/10091/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="me-first",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"さきどり"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"선취"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"搶先一步"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Moi d’Abord"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Egotrip"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Yo Primero"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Precedenza"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Me First"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"さきどり"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"抢先一步"}],m=[{accuracy:null,effect_chance:null,effect_entries:[],power:0,pp:null,type:null,version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}}],c=null,h=20,k=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/1/"},_={name:"selected-pokemon-me-first",url:"https://pokeapi.co/api/v2/move-target/2/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:null,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:t,flavor_text_entries:n,generation:r,id:i,learned_by_pokemon:s,machines:l,meta:u,name:g,names:v,past_values:m,power:c,pp:h,priority:k,stat_changes:f,super_contest_effect:d,target:_,type:x};export{w as accuracy,y as contest_combos,b as contest_effect,e as contest_type,a as damage_class,z as default,o as effect_chance,p as effect_changes,t as effect_entries,n as flavor_text_entries,r as generation,i as id,s as learned_by_pokemon,l as machines,u as meta,g as name,v as names,m as past_values,c as power,h as pp,k as priority,f as stat_changes,d as super_contest_effect,_ as target,x as type};
