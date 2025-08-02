const b=100,w=null,y=null,e={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,n=[],t=[{effect:`Inflicts regular damage.  User vanishes for one turn, becoming immune to attack, and hits on the second turn.

This move ignores the effects of detect and protect.

This move cannot be selected by sleep talk.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User vanishes, dodging all attacks, and hits next turn.  Hits through Protect and Detect."}],p=[{flavor_text:`The user disappears,
then strikes the foe
on the second turn.
It hits even if the
foe used Protect.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user disappears,
then strikes the foe
on the second turn.
It hits even if the
foe used Protect.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user disappears,
then strikes the foe
on the second turn.
It hits even if the
foe protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi
au second tour. Fonctionne même si
l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user disappears, then strikes the
target on the second turn.
It hits even if the target protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user disappears, then strikes the
target on the second turn.
It hits even if the target protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second
tour. Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender verschwindet in Runde 1
und attackiert in Runde 2. Trifft auch,
wenn sich das Ziel selbst schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`En el primer turno, desaparece. En el segundo,
golpea al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione o Individua.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user disappears, then strikes the
target on the next turn.
This move hits even if the target protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second
tour. Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender verschwindet in Runde 1
und attackiert in Runde 2. Trifft auch,
wenn sich das Ziel selbst schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`En el primer turno, desaparece. En el segundo, 
golpea al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione o Individua.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user disappears, then strikes the
target on the next turn.
This move hits even if the target protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`使用後的第１回合消失身影，
並於第２回合攻擊對手。
處於守護的對手也能擊中。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second
tour. Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender verschwindet in Runde 1 und attackiert
in Runde 2. Trifft auch, wenn sich das Ziel selbst
schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`En el primer turno, desaparece. En el segundo, 
golpea al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione, Individua o simili.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user disappears, then strikes the target on the
next turn. This move hits even if the target
protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`第１回合消失踪影，
第２回合攻击对手。
即使对手正受保护，也能击中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`使用後的第１回合消失身影，
並於第２回合攻擊對手。
處於守護的對手也能擊中。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second
tour. Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender verschwindet in Runde 1 und attackiert
in Runde 2. Trifft auch, wenn sich das Ziel selbst
schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`En el primer turno, desaparece. En el segundo, 
golpea al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione, Individua o simili.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user disappears, then strikes the target on the
next turn. This move hits even if the target
protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`第１回合消失踪影，
第２回合攻击对手。
即使对手正受保护，也能击中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`使用後的第１回合消失身影，
並於第２回合攻擊對手。
處於守護的對手也能擊中。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second tour.
Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender verschwindet in Runde 1 und attackiert
in Runde 2. Trifft auch, wenn sich das Ziel selbst
schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`En el primer turno, desaparece. En el segundo, 
golpea al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione, Individua o simili.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user disappears, then strikes the target on the
next turn. This move hits even if the target
protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`第１回合消失踪影，
第２回合攻击对手。
即使对手正受保护，也能击中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`１ターンめで　すがたを　けして
２ターンめに　あいてを　こうげきする。
まもっていても　こうげきは　あたる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`1턴째에 모습을 감춰
2턴째에 상대를 공격한다.
방어하고 있어도 공격은 맞는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`使用後的第１回合消失身影，
並於第２回合攻擊對手。
處於守護的對手也能擊中。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur disparaît et frappe l’ennemi au second tour.
Fonctionne même si l’ennemi se protège.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender verschwindet in Runde 1 und attackiert in
Runde 2. Trifft auch, wenn sich das Ziel selbst schützt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`En el primer turno, desaparece. En el segundo, golpea
al objetivo aunque se esté protegiendo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa sparisce e poi colpisce il bersaglio
al turno successivo. Colpisce anche un Pokémon
che ha usato Protezione, Individua o simili.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user disappears, then strikes the target on the
next turn. This move hits even if the target
protects itself.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`１ターン目で　姿を　消して
２ターン目に　相手を　攻撃する。
守っていても　攻撃は　当たる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`第１回合消失踪影，
第２回合攻击对手。
即使对手正受保护，也能击中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user cloaks itself in darkness as it attacks. Incoming moves also become more likely to miss.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user disappears on the first turn, then attacks on the next turn. This move hits even if the target protects itself.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=467,s=[{name:"giratina-altered",url:"https://pokeapi.co/api/v2/pokemon/487/"},{name:"giratina-origin",url:"https://pokeapi.co/api/v2/pokemon/10007/"}],u=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="shadow-force",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"シャドーダイブ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"섀도다이브"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"暗影潛襲"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Revenant"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schemenkraft"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Golpe Umbrío"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Oscurotuffo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Shadow Force"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"シャドーダイブ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"暗影潜袭"}],c=[],h=120,m=5,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/22/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"ghost",url:"https://pokeapi.co/api/v2/type/8/"},T={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:n,effect_entries:t,flavor_text_entries:p,generation:r,id:i,learned_by_pokemon:s,machines:u,meta:l,name:g,names:v,past_values:c,power:h,pp:m,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:x};export{b as accuracy,w as contest_combos,y as contest_effect,e as contest_type,a as damage_class,T as default,o as effect_chance,n as effect_changes,t as effect_entries,p as flavor_text_entries,r as generation,i as id,s as learned_by_pokemon,u as machines,l as meta,g as name,v as names,c as past_values,h as power,m as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,x as type};
