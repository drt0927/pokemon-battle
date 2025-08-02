const x=100,y=null,P=null,b=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=100,o=[],n=[{effect:"Inflicts regular damage.  Grounds the target until it leaves battle.  Ignores levitation effects and the immunity of flying-type Pokémon.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Grounds the target, and hits even Flying-type or levitating Pokémon."}],p=[{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Die Attacke erfasst auch schwebende Pokémon.
Erfasst sie ein Pokémon im Schwebe-Zustand,
fällt es zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire
y los hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce anche i Pokémon che fluttuano in aria.
I nemici nei paraggi vengono scaraventati a terra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`This move also hits opposing Pokémon
that are in the air. Those Pokémon are
knocked down to the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Die Attacke erfasst auch schwebende Pokémon.
Erfasst sie ein Pokémon im Schwebe-Zustand,
fällt es zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire y 
los hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce anche i Pokémon che fluttuano in aria.
I nemici nei paraggi vengono scaraventati a terra.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`This move also hits opposing Pokémon
that are in the air. Those Pokémon are
knocked down to the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`能夠命中飄浮在空中的寶可夢。
飄浮在空中的對手
會被擊落掉到地面。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Die Attacke erfasst auch fliegende und schwebende
Pokémon. Werden sie getroffen, fallen sie zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire y 
los hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce i nemici intorno scaraventando
a terra quelli che si trovano in aria.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`This move also hits opposing Pokémon that are in
the air. Those Pokémon are knocked down to
the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`可以击中浮在空中的宝可梦。
空中的对手被击落后，
会掉到地面。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`能夠命中飄浮在空中的寶可夢。
飄浮在空中的對手
會被擊落掉到地面。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Die Attacke erfasst auch fliegende und schwebende
Pokémon. Werden sie getroffen, fallen sie zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire y 
los hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce i nemici intorno scaraventando
a terra quelli che si trovano in aria.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`This move also hits opposing Pokémon that are in
the air. Those Pokémon are knocked down to
the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`可以击中浮在空中的宝可梦。
空中的对手被击落后，
会掉到地面。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`能夠命中飄浮在空中的寶可夢。
飄浮在空中的對手
會被擊落掉到地面。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Die Attacke erfasst auch fliegende und schwebende
Pokémon. Werden sie getroffen, fallen sie zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire y 
los hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce i nemici intorno scaraventando
a terra quelli che si trovano in aria.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`This move also hits opposing Pokémon that are in
the air. Those Pokémon are knocked down to
the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`可以击中浮在空中的宝可梦。
空中的对手被击落后，
会掉到地面。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ういている　ポケモンにも　あたる。
ういていた　あいては
うちおとされて　じめんに　おちる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`떠 있는 포켓몬도 맞힐 수 있다.
떠 있던 상대는
맞아서 땅에 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`能夠命中飄浮在空中的寶可夢。
飄浮在空中的對手
會被擊落掉到地面。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Touche même les Pokémon dans les airs.
Dans ce cas, la cible retombe au sol.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Die Attacke erfasst auch fliegende und schwebende
Pokémon. Werden sie getroffen, fallen sie zu Boden.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Acierta incluso a Pokémon que estén en el aire y los
hace caer al suelo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Colpisce i nemici intorno scaraventando
a terra quelli che si trovano in aria.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`This move also hits opposing Pokémon that are in
the air. Those Pokémon are knocked down to
the ground.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`浮いている　ポケモンにも　当たる。
浮いていた　相手は
撃ち落とされて　地面に　落ちる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`可以击中浮在空中的宝可梦。
空中的对手被击落后，
会掉到地面。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},r=614,i=[{name:"zygarde-50",url:"https://pokeapi.co/api/v2/pokemon/718/"},{name:"zygarde-10-power-construct",url:"https://pokeapi.co/api/v2/pokemon/10118/"},{name:"zygarde-50-power-construct",url:"https://pokeapi.co/api/v2/pokemon/10119/"},{name:"zygarde-complete",url:"https://pokeapi.co/api/v2/pokemon/10120/"},{name:"zygarde-10",url:"https://pokeapi.co/api/v2/pokemon/10181/"}],s=[],u={ailment:{name:"unknown",url:"https://pokeapi.co/api/v2/move-ailment/-1/"},ailment_chance:100,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="thousand-arrows",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"サウザンアロー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"사우전드애로"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"千箭齊發"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Myria-Flèches"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Tausend Pfeile"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Mil Flechas"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Mille Frecce"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Thousand Arrows"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"サウザンアロー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"千箭齐发"}],v=[],c=90,m=10,h=0,k=[],_=null,f={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},d={name:"ground",url:"https://pokeapi.co/api/v2/type/5/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:t,id:r,learned_by_pokemon:i,machines:s,meta:u,name:l,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:f,type:d};export{x as accuracy,y as contest_combos,P as contest_effect,b as contest_type,e as damage_class,w as default,a as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,t as generation,r as id,i as learned_by_pokemon,s as machines,u as meta,l as name,g as names,v as past_values,c as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
