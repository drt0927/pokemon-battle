const b=85,y=null,w=null,e={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},a={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},o=40,p=[],n=[{effect:"Inflicts regular damage.  Has a 40% chance to lower the target's Special Defense by two stages.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 40% chance to lower the target's Special Defense by two stages."}],t=[{flavor_text:`The user generates
a shock wave from
within its body.
It may also lower the
target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user generates
a shock wave from
within its body.
It may also lower the
target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user generates
a shock wave from
within its body.
It may also lower the
target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le corps du lanceur émet une onde de
choc. Peut aussi baisser grandement
la Défense Spéciale de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user emits a shock wave from
its body to attack its target. It may
harshly lower the target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user emits a shock wave from
its body to attack its target. It may
harshly lower the target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi baisser grandement la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede
bajar mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user emits a shock wave from
its body to attack its target. This may
also harshly lower the target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi baisser fortement la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede 
bajar mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user emits a shock wave from
its body to attack its target. This may
also harshly lower the target’s Sp. Def.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`從身體裡發出衝擊波攻擊對手。
有時會大幅降低對手的特防。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi beaucoup baisser la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird
eventuell stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede 
bajar mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user emits a shock wave from its body to attack
its target. This may also harshly lower the target’s
Sp. Def stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`从身体里产生冲击波。
有时会大幅降低对手的特防。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`從身體裡發出衝擊波攻擊對手。
有時會大幅降低對手的特防。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi beaucoup baisser la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird
eventuell stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede 
bajar mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user emits a shock wave from its body to attack
its target. This may also harshly lower the target’s
Sp. Def stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`从身体里产生冲击波。
有时会大幅降低对手的特防。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`從身體裡發出衝擊波攻擊對手。
有時會大幅降低對手的特防。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi beaucoup baisser la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird
eventuell stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede 
bajar mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user emits a shock wave from its body to attack
its target. This may also harshly lower the target’s
Sp. Def stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`从身体里产生冲击波。
有时会大幅降低对手的特防。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`からだの　なかから　しょうげきはを
はっせい　させる。あいての　とくぼうを
がくっと　さげることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`몸속에서 충격파를
발생시킨다. 상대의 특수방어를
크게 떨어뜨릴 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`從身體裡發出衝擊波攻擊對手。
有時會大幅降低對手的特防。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le corps du lanceur émet une onde de choc.
Peut aussi beaucoup baisser la Défense Spéciale
de la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender erzeugt eine Schockwelle.
Spezial-Verteidigung des Zieles wird
eventuell stark gesenkt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Una onda de choque se libera del cuerpo. Puede bajar
mucho la Defensa Especial del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa genera un’onda d’urto dal suo corpo.
Può anche ridurre di molto la Difesa Speciale
del bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user emits a shock wave from its body to attack
its target. This may also harshly lower the target’s
Sp. Def stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`体の　中から　衝撃波を
発生させる。相手の　特防を
がくっと　さげることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`从身体里产生冲击波。
有时会大幅降低对手的特防。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user emits a shock wave from its body to attack its target. This may also lower the target’s defensive stats.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},s=465,i=[{name:"shaymin-land",url:"https://pokeapi.co/api/v2/pokemon/492/"},{name:"shaymin-sky",url:"https://pokeapi.co/api/v2/pokemon/10006/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+lower",url:"https://pokeapi.co/api/v2/move-category/6/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:40},g="seed-flare",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"シードフレア"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"시드플레어"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"種子閃光"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Fulmigraine"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schocksamen"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Fogonazo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Infuriaseme"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Seed Flare"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"シードフレア"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"种子闪光"}],v=[],h=120,m=5,k=0,d=[{change:-2,stat:{name:"special-defense",url:"https://pokeapi.co/api/v2/stat/5/"}}],_={url:"https://pokeapi.co/api/v2/super-contest-effect/22/"},f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"grass",url:"https://pokeapi.co/api/v2/type/12/"},S={accuracy:85,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:r,id:s,learned_by_pokemon:i,machines:l,meta:u,name:g,names:c,past_values:v,power:h,pp:m,priority:k,stat_changes:d,super_contest_effect:_,target:f,type:x};export{b as accuracy,y as contest_combos,w as contest_effect,e as contest_type,a as damage_class,S as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,r as generation,s as id,i as learned_by_pokemon,l as machines,u as meta,g as name,c as names,v as past_values,h as power,m as pp,k as priority,d as stat_changes,_ as super_contest_effect,f as target,x as type};
