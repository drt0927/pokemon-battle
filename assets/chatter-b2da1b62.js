const w=100,b=null,y=null,a={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},o=100,n=[],t=[{effect:`Inflicts regular damage.  Has either a 1%, 11%, or 31% chance to confuse the target, based on the volume of the recording made for this move; louder recordings increase the chance of confusion.  If the user is not a chatot, this move will not cause confusion.

This move cannot be copied by mimic, mirror move, or sketch, nor selected by assist, metronome, or sleep talk.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a higher chance to confuse the target when the recorded sound is louder."}],p=[{flavor_text:`The user attacks
using a sound wave
based on words it has
learned. It may also
confuse the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user attacks
using a sound wave
based on words it has
learned. It may also
confuse the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user attacks
using a sound wave
based on words it has
learned. It may also
confuse the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur envoie une onde musicale en
récitant des mots. Peut aussi rendre
l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks using a sound wave
based on words it has learned.
It may also confuse the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user attacks using a sound wave
based on words it has learned.
It may also confuse the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`おぼえた　ことばで
おんぱを　おこして　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`기억한 말로
음파를 일으켜서 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur envoie une onde musicale en récitant
des mots. Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Attacke mit Schallwellen. Verwirrt das Ziel.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataca con una onda sónica compuesta por
palabras que ha aprendido y confunde al objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
con le parole imparate e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user attacks using a sound wave
based on words it has learned.
This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`おぼえた　言葉で
音波を　おこして　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`とても　うるさい　おしゃべりの
おんぱで　あいてを　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`매우 시끄럽고 수다스러운
음파로 상대를 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attaque avec les ondes sonores assourdissantes
qu’il émet en prononçant des mots au hasard.
Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender labert das Ziel zu und greift es
mit den dadurch entstehenden Schallwellen an,
wodurch das Ziel verwirrt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataca con una onda de sonido muy ruidosa
compuesta  por palabras y confunde al objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
di parole a vanvera e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user attacks the target with
sound waves of deafening chatter.
This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`とても　うるさい　おしゃべりの
音波で　相手を　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`とても　うるさい　おしゃべりの
おんぱで　あいてを　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`매우 시끄럽고 수다스러운
음파로 상대를 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用非常煩人且喋喋不休的
音波攻擊對手。
使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attaque avec les ondes sonores assourdissantes
qu’il émet en bavardant. Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender labert das Ziel zu und greift es mit
den dadurch entstehenden Schallwellen an, wodurch
das Ziel verwirrt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca con una onda de sonido muy ruidosa
compuesta por palabras y confunde al objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
di parole a vanvera e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user attacks the target with sound waves of
deafening chatter. This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`とても　うるさい　おしゃべりの
音波で　相手を　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用非常烦人的，
喋喋不休的音波攻击对手。
使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`とても　うるさい　おしゃべりの
おんぱで　あいてを　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`매우 시끄럽고 수다스러운
음파로 상대를 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用非常煩人且喋喋不休的
音波攻擊對手。
使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attaque avec les ondes sonores assourdissantes
qu’il émet en bavardant. Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender labert das Ziel zu und greift es mit
den dadurch entstehenden Schallwellen an, wodurch
das Ziel verwirrt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca con una onda de sonido muy ruidosa
compuesta por palabras y confunde al objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
di parole a vanvera e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks the target with sound waves of
deafening chatter. This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`とても　うるさい　おしゃべりの
音波で　相手を　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用非常烦人的，
喋喋不休的音波攻击对手。
使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`とても　うるさい　おしゃべりの
おんぱで　あいてを　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`매우 시끄럽고 수다스러운
음파로 상대를 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用非常煩人且喋喋不休的
音波攻擊對手。
使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attaque avec les ondes sonores assourdissantes
qu’il émet en bavardant. Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender labert das Ziel zu und greift es mit
den dadurch entstehenden Schallwellen an, wodurch
das Ziel verwirrt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca con una onda de sonido muy ruidosa
compuesta por palabras y confunde al objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
di parole a vanvera e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks the target with sound waves of
deafening chatter. This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`とても　うるさい　おしゃべりの
音波で　相手を　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用非常烦人的，
喋喋不休的音波攻击对手。
使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`とても　うるさい　おしゃべりの
おんぱで　あいてを　こうげきする。
あいてを　こんらん　させる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`매우 시끄럽고 수다스러운
음파로 상대를 공격한다.
상대를 혼란시킨다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用非常煩人且喋喋不休的
音波攻擊對手。
使對手混亂。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attaque avec les ondes sonores assourdissantes
qu’il émet en bavardant. Rend l’ennemi confus.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender labert das Ziel zu und greift es mit den
dadurch entstehenden Schallwellen an, wodurch das
Ziel verwirrt wird.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca con una onda de sonido muy ruidosa compuesta
por palabras y confunde al objetivo. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca creando un’onda sonora
di parole a vanvera e confonde il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks the target with sound waves of
deafening chatter. This confuses the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`とても　うるさい　おしゃべりの
音波で　相手を　攻撃する。
相手を　混乱させる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用非常烦人的，
喋喋不休的音波攻击对手。
使对手混乱。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},s=448,u=[{name:"chatot",url:"https://pokeapi.co/api/v2/pokemon/441/"}],i=[],l={ailment:{name:"confusion",url:"https://pokeapi.co/api/v2/move-ailment/6/"},ailment_chance:100,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:5,min_hits:null,min_turns:2,stat_chance:0},g="chatter",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"おしゃべり"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"수다"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"喋喋不休"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Babil"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Geschwätz"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Cháchara"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Schiamazzo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Chatter"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"おしゃべり"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"喋喋不休"}],c=[{accuracy:null,effect_chance:null,effect_entries:[],power:60,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],h=65,m=20,d=0,k=[],_={url:"https://pokeapi.co/api/v2/super-contest-effect/23/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},j={accuracy:100,contest_combos:null,contest_effect:null,contest_type:a,damage_class:e,effect_chance:o,effect_changes:n,effect_entries:t,flavor_text_entries:p,generation:r,id:s,learned_by_pokemon:u,machines:i,meta:l,name:g,names:v,past_values:c,power:h,pp:m,priority:d,stat_changes:k,super_contest_effect:_,target:f,type:x};export{w as accuracy,b as contest_combos,y as contest_effect,a as contest_type,e as damage_class,j as default,o as effect_chance,n as effect_changes,t as effect_entries,p as flavor_text_entries,r as generation,s as id,u as learned_by_pokemon,i as machines,l as meta,g as name,v as names,c as past_values,h as power,m as pp,d as priority,k as stat_changes,_ as super_contest_effect,f as target,x as type};
