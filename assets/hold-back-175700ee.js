const x=100,b=null,P=null,y=null,a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},e=null,o=[],n=[{effect:"Inflicts regular damage.  Will not reduce the target's HP below 1.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Cannot lower the target's HP below 1."}],p=[{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse
l’ennemi à 1 PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück
und sorgt auf diese Weise dafür, dass dem
Ziel danach mindestens 1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja
al Pokémon objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user holds back when it attacks
and the target is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse
l’ennemi à 1 PV.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück
und sorgt auf diese Weise dafür, dass dem
Ziel danach mindestens 1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja 
al Pokémon objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user holds back when it attacks
and the target is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`在攻擊的時候手下留情，
讓對手的ＨＰ一定會剩下１。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse
au moins 1 PV à l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück und
sorgt auf diese Weise dafür, dass dem Ziel danach
mindestens 1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja
al objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user holds back when it attacks, and the target
is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`在攻击的时候手下留情，
从而使对手的ＨＰ
至少会留下１ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`在攻擊的時候手下留情，
讓對手的ＨＰ一定會剩下１。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse
au moins 1 PV à l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück und
sorgt auf diese Weise dafür, dass dem Ziel danach
mindestens 1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja
al objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user holds back when it attacks, and the target
is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`在攻击的时候手下留情，
从而使对手的ＨＰ
至少会留下１ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`在攻擊的時候手下留情，
讓對手的HP一定會剩下１。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse au moins 1 PV
à l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück und
sorgt auf diese Weise dafür, dass dem Ziel danach
mindestens 1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja
al objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user holds back when it attacks, and the target
is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`在攻击的时候手下留情，
从而使对手的HP
至少会留下１HP。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`てかげん　した　こうげきで
あいての　ＨＰを
かならず　１だけ　のこす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`적당히 공격하여
상대의 HP를
반드시 1은 남긴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`在攻擊的時候手下留情，
讓對手的ＨＰ一定會剩下１。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque avec retenue, et laisse au moins
1 PV à l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender hält sich beim Angriff zurück und sorgt
auf diese Weise dafür, dass dem Ziel danach mindestens
1 KP verbleibt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario se contiene a la hora de atacar y deja al
objetivo con al menos 1 PS.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca il bersaglio, modulando il colpo
in modo da lasciargli almeno un PS.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user holds back when it attacks, and the target
is left with at least 1 HP.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`手加減　した　攻撃で
相手の　ＨＰを
必ず　１だけ　残す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`在攻击的时候手下留情，
从而使对手的ＨＰ
至少会留下１ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},r=610,i=[],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},s="hold-back",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"てかげん"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"적당히손봐주기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"手下留情"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Retenue"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Zurückhaltung"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Clemencia"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Riguardo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Hold Back"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"てかげん"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"手下留情"}],v=[],c=40,h=40,m=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},H={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:a,effect_chance:e,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:t,id:r,learned_by_pokemon:i,machines:l,meta:u,name:s,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,b as contest_combos,P as contest_effect,y as contest_type,a as damage_class,H as default,e as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,t as generation,r as id,i as learned_by_pokemon,l as machines,u as meta,s as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
