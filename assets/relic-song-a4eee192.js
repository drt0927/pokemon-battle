const x=100,y=null,P=null,b=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=10,n=[],o=[{effect:`Inflicts regular damage.  Has a 10% chance to put the target to sleep.
If the user is a meloetta, it will toggle between Aria and Pirouette Forme.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 10% chance to put the target to sleep."}],t=[{flavor_text:`Le lanceur attaque l’ennemi en lui
chantant une chanson d’un autre temps.
Peut endormir l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user sings an ancient song and attacks
by appealing to the hearts of those
listening. It may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user sings an ancient song and attacks
by appealing to the hearts of those
listening. It may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`옛노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une
chanson d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender greift mit Urgesang an, der Ziele
in der Nähe im tiefsten Inneren anspricht.
Diese schlafen eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con
un antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user sings an ancient song and attacks
by appealing to the hearts of the listening
opposing Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`옛 노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une
chanson d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender greift mit Urgesang an, der Ziele
in der Nähe im tiefsten Inneren anspricht.
Diese schlafen eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con 
un antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user sings an ancient song and attacks
by appealing to the hearts of the listening
opposing Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`옛 노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`唱出古老之歌，
打動對手的心進行攻擊。
有時會讓對手陷入睡眠狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une
chanson d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender greift mit Urgesang an, der Ziele in der
Nähe im tiefsten Inneren anspricht. Diese schlafen
eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con 
un antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user sings an ancient song and attacks by
appealing to the hearts of the listening opposing
Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`让对手听古老之歌，
打动对手的内心进行攻击。
有时会让对手陷入睡眠状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`옛 노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`唱出古老之歌，
打動對手的心進行攻擊。
有時會讓對手陷入睡眠狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une
chanson d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender greift mit Urgesang an, der Ziele in der
Nähe im tiefsten Inneren anspricht. Diese schlafen
eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con 
un antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user sings an ancient song and attacks by
appealing to the hearts of the listening opposing
Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`让对手听古老之歌，
打动对手的内心进行攻击。
有时会让对手陷入睡眠状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`옛 노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`唱出古老之歌，
打動對手的心進行攻擊。
有時會讓對手陷入睡眠狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une chanson
d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender greift mit Urgesang an, der Ziele in der
Nähe im tiefsten Inneren anspricht. Diese schlafen
eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con 
un antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user sings an ancient song and attacks by
appealing to the hearts of the listening opposing
Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`让对手听古老之歌，
打动对手的内心进行攻击。
有时会让对手陷入睡眠状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`いにしえのうたを　あいてに　きかせて
こころに　うったえて　こうげきする。
ねむり　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`옛 노래를 상대에게 들려주고
마음에 호소하여 공격한다.
잠듦 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`唱出古老之歌，
打動對手的心進行攻擊。
有時會讓對手陷入睡眠狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque l’ennemi en lui chantant une chanson
d’un autre temps. Peut l’endormir.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender greift mit Urgesang an, der gegnerische
Pokémon im tiefsten Inneren anspricht. Diese schlafen
eventuell ein.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca conmoviendo a los rivales de alrededor con un
antiguo canto. Puede dormirlos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca i nemici intorno a sé
intonando un’antica melodia che colpisce
il loro spirito. Può anche farli addormentare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user sings an ancient song and attacks by
appealing to the hearts of the listening opposing
Pokémon. This may also induce sleep.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`いにしえのうたを　相手に　聞かせて
心に　うったえて　攻撃する。
眠り状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`让对手听古老之歌，
打动对手的内心进行攻击。
有时会让对手陷入睡眠状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-v",url:"https://pokeapi.co/api/v2/generation/5/"},i=547,r=[{name:"meloetta-aria",url:"https://pokeapi.co/api/v2/pokemon/648/"},{name:"meloetta-pirouette",url:"https://pokeapi.co/api/v2/pokemon/10018/"}],s=[],l={ailment:{name:"sleep",url:"https://pokeapi.co/api/v2/move-ailment/2/"},ailment_chance:10,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:4,min_hits:null,min_turns:2,stat_chance:0},u="relic-song",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"いにしえのうた"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"옛노래"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"古老之歌"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Chant Antique"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Urgesang"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Canto Arcaico"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Cantoantico"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Relic Song"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"いにしえのうた"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"古老之歌"}],c=[],v=75,h=10,m=0,k=[],_=null,d={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},f={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:n,effect_entries:o,flavor_text_entries:t,generation:p,id:i,learned_by_pokemon:r,machines:s,meta:l,name:u,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,y as contest_combos,P as contest_effect,b as contest_type,e as damage_class,w as default,a as effect_chance,n as effect_changes,o as effect_entries,t as flavor_text_entries,p as generation,i as id,r as learned_by_pokemon,s as machines,l as meta,u as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
