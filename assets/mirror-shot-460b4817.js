const y=85,b=null,w=null,e={name:"cute",url:"https://pokeapi.co/api/v2/contest-type/3/"},a={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},o=30,p=[],n=[{effect:"Inflicts regular damage.  Has a 30% chance to lower the target's accuracy by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 30% chance to lower the target's accuracy by one stage."}],r=[{flavor_text:`The user looses a
flash of energy from
its polished body.
It may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user looses a
flash of energy from
its polished body.
It may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user looses a
flash of energy from
its polished body.
It may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le corps poli du lanceur libère un
éclair d’énergie. Peut aussi baisser
la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user looses a flash of energy at
the target from its polished body.
It may also lower the target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user looses a flash of energy at
the target from its polished body.
It may also lower the target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`みがき　あげられた　からだから
せんこうの　ちからを　あいてに　はなつ。
めいちゅうりつを　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`갈고 닦은 몸에서
섬광의 힘을 상대에게 쏜다.
명중률을 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le corps poli du lanceur libère un éclair d’énergie.
Peut aussi baisser la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender feuert Energiestrahl aus seinem Körper
ab. Senkt eventuell Genauigkeit des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario libera un haz de energía desde su
pulido cuerpo. Puede bajar la Precisión.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa rilascia fasci d’energia dal corpo
levigato. Può anche ridurre la precisione
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user lets loose a flash of energy at
the target from its polished body.
This may also lower the target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`磨きあげられた　体から
せん光の　力を　相手に　放つ。
命中率を　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:` がき　あげられた　からだから
せんこうの　ちからを　あいてに　はなつ。
めいちゅうりつを　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`갈고닦은 몸에서
섬광의 힘을 상대에게 쏜다.
명중률을 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le corps poli du lanceur libère un éclair d’énergie.
Peut aussi baisser la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender feuert Energiestrahl aus seinem Körper
ab. Senkt eventuell Genauigkeit des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario libera un haz de energía desde su pulido 
cuerpo. Puede bajar la Precisión.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa rilascia fasci d’energia dal corpo
levigato. Può anche ridurre la precisione
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user lets loose a flash of energy at
the target from its polished body.
This may also lower the target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`磨きあげられた　体から
せん光の　力を　相手に　放つ。
命中率を　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`みがき　あげられた　からだから
せんこうの　ちからを　あいてに　はなつ。
めいちゅうりつを　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`갈고닦은 몸에서
섬광의 힘을 상대에게 쏜다.
명중률을 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用磨得亮晶晶的身體
向對手放出閃光之力進行攻擊。
有時會降低對手的命中率。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le corps poli du lanceur libère un éclair d’énergie.
Peut aussi baisser la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender feuert Energiestrahl aus seinem Körper
ab. Senkt eventuell Genauigkeit des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario libera un haz de energía desde su pulido 
cuerpo. Puede bajar la Precisión.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa rilascia fasci d’energia dal corpo
levigato. Può anche ridurre la precisione
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user lets loose a flash of energy at the target
from its polished body. This may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`磨きあげられた　体から
せん光の　力を　相手に　放つ。
命中率を　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`抛光自己的身体，
向对手释放出闪光之力。
有时会降低对手的命中率。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`みがき　あげられた　からだから
せんこうの　ちからを　あいてに　はなつ。
めいちゅうりつを　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`갈고닦은 몸에서
섬광의 힘을 상대에게 쏜다.
명중률을 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用磨得亮晶晶的身體
向對手放出閃光之力進行攻擊。
有時會降低對手的命中率。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le corps poli du lanceur libère un éclair d’énergie.
Peut aussi baisser la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender feuert Energiestrahl aus seinem Körper
ab. Senkt eventuell Genauigkeit des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario libera un haz de energía desde su pulido 
cuerpo. Puede bajar la Precisión.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa rilascia fasci d’energia dal corpo
levigato. Può anche ridurre la precisione
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user lets loose a flash of energy at the target
from its polished body. This may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`磨きあげられた　体から
せん光の　力を　相手に　放つ。
命中率を　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`抛光自己的身体，
向对手释放出闪光之力。
有时会降低对手的命中率。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`みがき　あげられた　からだから
せんこうの　ちからを　あいてに　はなつ。
めいちゅうりつを　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`갈고닦은 몸에서
섬광의 힘을 상대에게 쏜다.
명중률을 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用磨得亮晶晶的身體
向對手放出閃光之力進行攻擊。
有時會降低對手的命中率。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le corps poli du lanceur libère un éclair d’énergie.
Peut aussi baisser la Précision de l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender feuert Energiestrahl aus seinem Körper
ab. Senkt eventuell Genauigkeit des Zieles.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario libera un haz de energía desde su pulido 
cuerpo. Puede bajar la Precisión.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa rilascia fasci d’energia dal corpo
levigato. Può anche ridurre la precisione
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user lets loose a flash of energy at the target
from its polished body. This may also lower the
target’s accuracy.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`磨きあげられた　体から
せん光の　力を　相手に　放つ。
命中率を　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`抛光自己的身体，
向对手释放出闪光之力。
有时会降低对手的命中率。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=429,s=[{name:"magnemite",url:"https://pokeapi.co/api/v2/pokemon/81/"},{name:"magneton",url:"https://pokeapi.co/api/v2/pokemon/82/"},{name:"forretress",url:"https://pokeapi.co/api/v2/pokemon/205/"},{name:"magnezone",url:"https://pokeapi.co/api/v2/pokemon/462/"},{name:"vanillite",url:"https://pokeapi.co/api/v2/pokemon/582/"},{name:"vanillish",url:"https://pokeapi.co/api/v2/pokemon/583/"},{name:"vanilluxe",url:"https://pokeapi.co/api/v2/pokemon/584/"},{name:"ferroseed",url:"https://pokeapi.co/api/v2/pokemon/597/"},{name:"ferrothorn",url:"https://pokeapi.co/api/v2/pokemon/598/"},{name:"klink",url:"https://pokeapi.co/api/v2/pokemon/599/"},{name:"klang",url:"https://pokeapi.co/api/v2/pokemon/600/"},{name:"klinklang",url:"https://pokeapi.co/api/v2/pokemon/601/"},{name:"klefki",url:"https://pokeapi.co/api/v2/pokemon/707/"},{name:"necrozma",url:"https://pokeapi.co/api/v2/pokemon/800/"},{name:"magearna",url:"https://pokeapi.co/api/v2/pokemon/801/"},{name:"wormadam-trash",url:"https://pokeapi.co/api/v2/pokemon/10005/"},{name:"magearna-original",url:"https://pokeapi.co/api/v2/pokemon/10147/"},{name:"necrozma-dusk",url:"https://pokeapi.co/api/v2/pokemon/10155/"},{name:"necrozma-dawn",url:"https://pokeapi.co/api/v2/pokemon/10156/"},{name:"necrozma-ultra",url:"https://pokeapi.co/api/v2/pokemon/10157/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+lower",url:"https://pokeapi.co/api/v2/move-category/6/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:30},g="mirror-shot",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ミラーショット"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"미러숏"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"鏡光射擊"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Miroi-Tir"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Spiegelsalve"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Disparo Espejo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Cristalcolpo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Mirror Shot"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ミラーショット"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"镜光射击"}],v=[],h=65,m=10,k=0,_=[{change:-1,stat:{name:"accuracy",url:"https://pokeapi.co/api/v2/stat/7/"}}],d={url:"https://pokeapi.co/api/v2/super-contest-effect/17/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"steel",url:"https://pokeapi.co/api/v2/type/9/"},P={accuracy:85,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:r,generation:t,id:i,learned_by_pokemon:s,machines:l,meta:u,name:g,names:c,past_values:v,power:h,pp:m,priority:k,stat_changes:_,super_contest_effect:d,target:f,type:x};export{y as accuracy,b as contest_combos,w as contest_effect,e as contest_type,a as damage_class,P as default,o as effect_chance,p as effect_changes,n as effect_entries,r as flavor_text_entries,t as generation,i as id,s as learned_by_pokemon,l as machines,u as meta,g as name,c as names,v as past_values,h as power,m as pp,k as priority,_ as stat_changes,d as super_contest_effect,f as target,x as type};
