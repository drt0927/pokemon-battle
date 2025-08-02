const w=100,b=null,e={url:"https://pokeapi.co/api/v2/contest-effect/9/"},a={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=10,t=[],p=[{effect:"Inflicts regular damage.  Has a 10% chance to lower the target's Speed by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 10% chance to lower the target's Speed by one stage."}],i=[{flavor_text:`An attack that may
lower SPEED.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`An attack that may
lower SPEED.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Constricts to inflict pain.
May lower SPEED.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Constricts to inflict pain.
May lower SPEED.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is attacked
with long tentacles
or vines. It may
lower SPEED.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is attacked
with long, creeping
tentacles or vines.
It may also lower the
target’s Speed.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is attacked
with long, creeping
tentacles or vines.
It may also lower the
target’s Speed.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is attacked
with long, creeping
tentacles or vines.
It may also lower the
target’s Speed.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`De longs tentacules ou lianes attaquent
l’ennemi. Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with long, creeping
tentacles or vines.
It may also lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with long, creeping
tentacles or vines.
It may also lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`しょくしゅや　ツタ　などを　からみつけて
こうげきする。あいての　すばやさを
さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`촉수나 덩굴 등을 휘감아서
공격한다. 상대의 스피드를
떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`De longs tentacules ou lianes attaquent l’ennemi.
Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Angriff mit langen Tentakeln oder Ranken.
Senkt eventuell den Initiative-Wert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Constriñe para herir y puede bajar la Velocidad.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con lunghi tentacoli o piante
rampicanti. Può anche ridurne la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is attacked with long, creeping
tentacles or vines.
This may also lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`触手や　ツタなどを　からみつけて
攻撃する。相手の　素早さを
さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`しょくしゅや　ツタ　などを　から つけて
こうげきする。あいての　すばやさを
さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`촉수나 덩굴 등을 휘감아서
공격한다. 상대의 스피드를
떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`De longs tentacules ou lianes attaquent l’ennemi.
Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Angriff mit langen Tentakeln oder Ranken.
Senkt eventuell den Initiative-Wert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Constriñe para herir y puede bajar la Velocidad. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con lunghi tentacoli o piante
rampicanti. Può anche ridurne la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is attacked with long, creeping
tentacles or vines.
This may also lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`触手や　ツタなどを　から つけて
攻撃する。相手の　素早さを
さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`しょくしゅや　ツタ　などを　からみつけて
こうげきする。あいての　すばやさを
さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`촉수나 덩굴 등을 휘감아서
공격한다. 상대의 스피드를
떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用觸手或青藤等纏繞對手進行攻擊。
有時會降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`De longs tentacules ou lianes attaquent l’ennemi.
Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Angriff mit langen Tentakeln oder Ranken.
Senkt eventuell den Initiative-Wert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca con largos tentáculos o zarcillos que pueden
bajar la Velocidad. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con lunghi tentacoli o piante
rampicanti. Può anche ridurne la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is attacked with long, creeping tentacles,
vines, or the like. This may also lower the target’s 
Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`触手や　ツタなどを　からみつけて
攻撃する。相手の　素早さを
さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用触手或青藤等缠绕进行攻击。
有时会降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`しょくしゅや　ツタ　などを　からみつけて
こうげきする。あいての　すばやさを
さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`촉수나 덩굴 등을 휘감아서
공격한다. 상대의 스피드를
떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用觸手或青藤等纏繞對手進行攻擊。
有時會降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`De longs tentacules ou lianes attaquent l’ennemi.
Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Angriff mit langen Tentakeln oder Ranken.
Senkt eventuell den Initiative-Wert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca con largos tentáculos o zarcillos que pueden
bajar la Velocidad. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con lunghi tentacoli o piante
rampicanti. Può anche ridurne la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is attacked with long, creeping tentacles,
vines, or the like. This may also lower the target’s 
Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`触手や　ツタなどを　からみつけて
攻撃する。相手の　素早さを
さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用触手或青藤等缠绕进行攻击。
有时会降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`しょくしゅや　ツタ　などを　からみつけて
こうげきする。あいての　すばやさを
さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`촉수나 덩굴 등을 휘감아서
공격한다. 상대의 스피드를
떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用觸手或青藤等纏繞對手進行攻擊。
有時會降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`De longs tentacules ou lianes attaquent l’ennemi.
Peut aussi baisser sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Angriff mit langen Tentakeln oder Ranken.
Senkt eventuell den Initiative-Wert.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca con largos tentáculos o zarcillos que pueden
bajar la Velocidad. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con lunghi tentacoli o piante
rampicanti. Può anche ridurne la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is attacked with long, creeping tentacles,
vines, or the like. This may also lower the target’s
Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`触手や　ツタなどを　からみつけて
攻撃する。相手の　素早さを
さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用触手或青藤等缠绕进行攻击。
有时会降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},l=132,s=[{name:"tentacool",url:"https://pokeapi.co/api/v2/pokemon/72/"},{name:"tentacruel",url:"https://pokeapi.co/api/v2/pokemon/73/"},{name:"tangela",url:"https://pokeapi.co/api/v2/pokemon/114/"},{name:"omanyte",url:"https://pokeapi.co/api/v2/pokemon/138/"},{name:"omastar",url:"https://pokeapi.co/api/v2/pokemon/139/"},{name:"spinarak",url:"https://pokeapi.co/api/v2/pokemon/167/"},{name:"ariados",url:"https://pokeapi.co/api/v2/pokemon/168/"},{name:"shuckle",url:"https://pokeapi.co/api/v2/pokemon/213/"},{name:"octillery",url:"https://pokeapi.co/api/v2/pokemon/224/"},{name:"lileep",url:"https://pokeapi.co/api/v2/pokemon/345/"},{name:"cradily",url:"https://pokeapi.co/api/v2/pokemon/346/"},{name:"drifloon",url:"https://pokeapi.co/api/v2/pokemon/425/"},{name:"drifblim",url:"https://pokeapi.co/api/v2/pokemon/426/"},{name:"tangrowth",url:"https://pokeapi.co/api/v2/pokemon/465/"},{name:"frillish",url:"https://pokeapi.co/api/v2/pokemon/592/"},{name:"inkay",url:"https://pokeapi.co/api/v2/pokemon/686/"},{name:"malamar",url:"https://pokeapi.co/api/v2/pokemon/687/"},{name:"nihilego",url:"https://pokeapi.co/api/v2/pokemon/793/"}],u=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+lower",url:"https://pokeapi.co/api/v2/move-category/6/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:10},v="constrict",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"からみつく"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"휘감기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"纏繞"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Constriction"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Umklammerung"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Restricción"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Limitazione"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Constrict"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"からみつく"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"缠绕"}],m=[],h=10,k=35,_=0,f=[{change:-1,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}}],d={url:"https://pokeapi.co/api/v2/super-contest-effect/21/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},T={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:t,effect_entries:p,flavor_text_entries:i,generation:r,id:l,learned_by_pokemon:s,machines:u,meta:g,name:v,names:c,past_values:m,power:h,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:x,type:y};export{w as accuracy,b as contest_combos,e as contest_effect,a as contest_type,o as damage_class,T as default,n as effect_chance,t as effect_changes,p as effect_entries,i as flavor_text_entries,r as generation,l as id,s as learned_by_pokemon,u as machines,g as meta,v as name,c as names,m as past_values,h as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,x as target,y as type};
