const b=100,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/4/"},a={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=30,p=[],t=[{effect:"Inflicts regular damage.  Has a 30% chance to make the target flinch.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 30% chance to make the target flinch."}],r=[{flavor_text:`Attacks with thorny arms.
May cause flinching.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Attacks with thorny arms.
May cause flinching.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`An attack using
thorny arms.
It may make the
foe flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user attacks by
wildly swinging its
thorny arms.
It may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user attacks by
wildly swinging its
thorny arms.
It may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user attacks by
wildly swinging its
thorny arms.
It may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi
de ses bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks by wildly swinging its
thorny arms. It may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks by wildly swinging its
thorny arms. It may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`トゲの　うでを
はげしく　ふるって　こうげきする。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`바늘팔을
세차게 흔들어 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi de ses
bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Angriff mit dornigen Armen.
Das Ziel schreckt eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Pega con brazos de pinchos y puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca colpendo il bersaglio con i suoi
arti pieni di spine. Può far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user attacks by wildly swinging its
thorny arms. This may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`トゲの　腕を
激しく　ふるって　攻撃する。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`トゲの　うでを
はげしく　ふるって　こうげきする。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`바늘팔을
세차게 흔들어 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi de ses
bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Angriff mit dornigen Armen.
Das Ziel schreckt eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Pega con brazos de pinchos y puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca colpendo il bersaglio con i suoi
arti pieni di spine. Può far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user attacks by wildly swinging its
thorny arms. This may also make the
target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`トゲの　腕を
激しく　ふるって　攻撃する。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`トゲの　うでを
はげしく　ふるって　こうげきする。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`바늘팔을
세차게 흔들어 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用帶刺的手臂
猛烈揮打進行攻擊。
有時會使對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi de ses
bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Angriff mit dornigen Armen. Das Ziel schreckt
eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Pega con brazos de pinchos y puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca colpendo il bersaglio con i suoi
arti pieni di spine. Può far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks by wildly swinging its thorny arms.
This may also make the target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`トゲの　腕を
激しく　ふるって　攻撃する。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用带刺的手臂
猛烈地挥舞进行攻击。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`トゲの　うでを
はげしく　ふるって　こうげきする。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`바늘팔을
세차게 흔들어 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用帶刺的手臂
猛烈揮打進行攻擊。
有時會使對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi de ses
bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Angriff mit dornigen Armen. Das Ziel schreckt
eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Pega con brazos de pinchos y puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca colpendo il bersaglio con i suoi
arti pieni di spine. Può far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks by wildly swinging its thorny arms.
This may also make the target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`トゲの　腕を
激しく　ふるって　攻撃する。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用带刺的手臂
猛烈地挥舞进行攻击。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`トゲの　うでを
はげしく　ふるって　こうげきする。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`바늘팔을
세차게 흔들어 공격한다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用帶刺的手臂
猛烈揮打進行攻擊。
有時會使對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque en fouettant l’ennemi
de ses bras épineux. Peut aussi l’apeurer.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Angriff mit dornigen Armen. Das Ziel schreckt
eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Pega con brazos de pinchos y puede hacer
retroceder al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca colpendo il bersaglio con i suoi
arti pieni di spine. Può far tentennare il Pokémon
colpito.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks by wildly swinging its thorny arms.
This may also make the target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`トゲの　腕を
激しく　ふるって　攻撃する。
相手を　ひるませることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用带刺的手臂
猛烈地挥舞进行攻击。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],i={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},s=302,u=[{name:"cacnea",url:"https://pokeapi.co/api/v2/pokemon/331/"},{name:"cacturne",url:"https://pokeapi.co/api/v2/pokemon/332/"},{name:"maractus",url:"https://pokeapi.co/api/v2/pokemon/556/"},{name:"quilladin",url:"https://pokeapi.co/api/v2/pokemon/651/"},{name:"chesnaught",url:"https://pokeapi.co/api/v2/pokemon/652/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:30,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="needle-arm",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ニードルアーム"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"바늘팔"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"尖刺臂"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Poing Dard"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Nietenranke"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Brazo Pincho"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Pugnospine"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Needle Arm"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ニードルアーム"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"尖刺臂"}],m=[],h=60,k=15,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/5/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"grass",url:"https://pokeapi.co/api/v2/type/12/"},P={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:r,generation:i,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:x,type:y};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,P as default,n as effect_chance,p as effect_changes,t as effect_entries,r as flavor_text_entries,i as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,x as target,y as type};
