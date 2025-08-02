const A=90,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/12/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=20,t=[],n=[{effect:"Inflicts regular damage. Has a 20% chance to raise the user's Attack one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has a 20% chance to raise the user's Attack by one stage."}],r=[{flavor_text:`Fires a meteor-like punch.
May raise ATTACK.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Fires a meteor-like punch.
May raise ATTACK.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is hit with
a hard, fast punch.
It may also raise
the user’s ATTACK.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is hit with a
hard punch fired
like a meteor.
It may also raise
the user’s Attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is hit with a
hard punch fired
like a meteor.
It may also raise
the user’s Attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is hit with a
hard punch fired
like a meteor.
It may also raise
the user’s Attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un
météore. Peut aussi augmenter l’Attaque
du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with a hard punch fired
like a meteor. It may also raise
the user’s Attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is hit with a hard punch fired
like a meteor. It may also raise
the user’s Attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag.
Erhöht eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede
subir el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is hit with a hard punch fired
like a meteor. This may also raise
the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag.
Erhöht eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede 
subir el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is hit with a hard punch fired
like a meteor. This may also raise
the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。　じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`使出如同彗星般的拳頭攻擊對手。
有時會提高自己的攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag.
Erhöht eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede 
subir el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is hit with a hard punch fired like a
meteor. This may also raise the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。　自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`使出彗星般的拳头攻击对手。
有时会提高自己的攻击。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。　じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`使出如同彗星般的拳頭攻擊對手。
有時會提高自己的攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag.
Erhöht eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede 
subir el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is hit with a hard punch fired like a
meteor. This may also raise the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。　自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`使出彗星般的拳头攻击对手。
有时会提高自己的攻击。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。　じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`使出如同彗星般的拳頭攻擊對手。
有時會提高自己的攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag.
Erhöht eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede 
subir el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is hit with a hard punch fired like a
meteor. This may also raise the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。　自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`使出彗星般的拳头攻击对手。
有时会提高自己的攻击。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すいせいの　ごとく　パンチを　くりだして
あいてを　こうげきする。　じぶんの
こうげきが　あがることが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`혜성과 같은 펀치를 날려서
상대를 공격한다. 자신의
공격이 올라갈 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`使出如同彗星般的拳頭攻擊對手。
有時會提高自己的攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Un coup de poing lancé à la vitesse d’un météore.
Peut aussi augmenter l’Attaque du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Angriff mit einem harten, schnellen Schlag. Erhöht
eventuell Angriffs-Wert des Anwenders.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Puñetazo que impacta como un meteorito y puede subir
el Ataque del agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Colpisce il bersaglio con un pugno veloce come
una meteora. Può far salire l’Attacco di chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The target is hit with a hard punch fired like a
meteor. This may also raise the user’s Attack stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`すい星の　ごとく　パンチを　くりだして
相手を　攻撃する。　自分の
攻撃が　あがることが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`使出彗星般的拳头攻击对手。
有时会提高自己的攻击。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The target is hit with a hard punch fired like a meteor. This may also raise the user's Attack stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The target is hit with a hard punch fired like a meteor. This may also boost the user’s Attack stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},u=309,s=[{name:"clefairy",url:"https://pokeapi.co/api/v2/pokemon/35/"},{name:"clefable",url:"https://pokeapi.co/api/v2/pokemon/36/"},{name:"metang",url:"https://pokeapi.co/api/v2/pokemon/375/"},{name:"metagross",url:"https://pokeapi.co/api/v2/pokemon/376/"},{name:"jirachi",url:"https://pokeapi.co/api/v2/pokemon/385/"},{name:"riolu",url:"https://pokeapi.co/api/v2/pokemon/447/"},{name:"lucario",url:"https://pokeapi.co/api/v2/pokemon/448/"},{name:"metagross-mega",url:"https://pokeapi.co/api/v2/pokemon/10076/"},{name:"pikachu-rock-star",url:"https://pokeapi.co/api/v2/pokemon/10080/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+raise",url:"https://pokeapi.co/api/v2/move-category/7/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:20},c="meteor-mash",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"コメットパンチ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"코멧펀치"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"彗星拳"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Poing Météore"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Sternenhieb"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Puño Meteoro"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Meteorpugno"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Meteor Mash"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"コメットパンチ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"彗星拳"}],h=[{accuracy:85,effect_chance:null,effect_entries:[],power:100,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],m=90,k=10,_=0,f=[{change:1,stat:{name:"attack",url:"https://pokeapi.co/api/v2/stat/2/"}}],d={url:"https://pokeapi.co/api/v2/super-contest-effect/18/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"steel",url:"https://pokeapi.co/api/v2/type/9/"},b={accuracy:90,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:t,effect_entries:n,flavor_text_entries:r,generation:i,id:u,learned_by_pokemon:s,machines:l,meta:g,name:c,names:v,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:x,type:y};export{A as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,b as default,p as effect_chance,t as effect_changes,n as effect_entries,r as flavor_text_entries,i as generation,u as id,s as learned_by_pokemon,l as machines,g as meta,c as name,v as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,x as target,y as type};
