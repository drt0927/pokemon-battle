const b=null,e={normal:{use_after:null,use_before:[{name:"mega-punch",url:"https://pokeapi.co/api/v2/move/5/"},{name:"mega-kick",url:"https://pokeapi.co/api/v2/move/25/"},{name:"jump-kick",url:"https://pokeapi.co/api/v2/move/26/"},{name:"submission",url:"https://pokeapi.co/api/v2/move/66/"},{name:"high-jump-kick",url:"https://pokeapi.co/api/v2/move/136/"},{name:"dynamic-punch",url:"https://pokeapi.co/api/v2/move/223/"}]},super:{use_after:null,use_before:null}},a={url:"https://pokeapi.co/api/v2/contest-effect/24/"},o={name:"smart",url:"https://pokeapi.co/api/v2/contest-type/4/"},t={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},n=null,p=[],s=[{effect:`If the user targets the same target again before the end of the next turn, the move it uses is guaranteed to hit.  This move itself also ignores accuracy and evasion modifiers.

One-hit KO moves are also guaranteed to hit, as long as the user is equal or higher level than the target.  This effect also allows the user to hit Pokémon that are off the field due to moves such as dig or fly.

If the target uses detect or protect while under the effect of this move, the user is not guaranteed to hit, but has a (100 - accuracy)% chance to break through the protection.

This effect is passed on by baton pass.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Ensures that the user's next move will hit the target."}],i=[{flavor_text:`Ensures the next
attack will hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Ensures the next
attack will hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Senses the foe’s action to
ensure the next move’s hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Senses the foe’s action to
ensure the next move’s hit.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The user predicts
the foe’s action to
ensure its next
attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The user senses the
foe’s movements
with its mind to
ensure its next
attack does not miss.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user senses the
foe’s movements
with its mind to
ensure its next
attack does not miss.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user senses the
foe’s movements
with its mind to
ensure its next
attack does not miss.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur analyse les mouvements de
l’ennemi pour être sûr de toucher
au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user senses the target’s movements
with its mind to ensure its next
attack does not miss the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user senses the target’s movements
with its mind to ensure its next
attack does not miss the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus,
um zu gewährleisten, dass die nächste
eigene Attacke trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario adivina los movimientos del objetivo
para hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user senses the target’s movements
with its mind to ensure its next
attack does not miss the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus,
um zu gewährleisten, dass die nächste
eigene Attacke trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario adivina los movimientos del objetivo para 
hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user senses the target’s movements
with its mind to ensure its next
attack does not miss the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用心感受對手的行動模式，
下次攻擊時必定
會命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus, um zu
gewährleisten, dass die nächste eigene Attacke
trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario adivina los movimientos del objetivo para 
hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user senses the target’s movements with its
mind to ensure its next attack does not miss
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用心感受对手的行动，
下次攻击必定
会击中对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用心感受對手的行動模式，
下次攻擊時必定
會命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus, um zu
gewährleisten, dass die nächste eigene Attacke
trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario adivina los movimientos del objetivo para 
hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user senses the target’s movements with its
mind to ensure its next attack does not miss
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用心感受对手的行动，
下次攻击必定
会击中对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用心感受對手的行動模式，
下次攻擊時必定
會命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus, um zu
gewährleisten, dass die nächste eigene Attacke
trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario adivina los movimientos del objetivo para 
hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user senses the target’s movements with its
mind to ensure its next attack does not miss
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用心感受对手的行动，
下次攻击必定
会击中对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいての　うごきを　こころで　かんじて
つぎの　こうげきが　かならず
あいてに　あたるように　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대의 움직임을 마음으로 읽고
다음 공격이 반드시
상대에게 명중되게 한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用心感受對手的行動模式，
下次攻擊時必定
會命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur analyse les mouvements de l’ennemi
pour être sûr de toucher au coup suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ahnt Bewegungen des Zieles voraus, um zu
gewährleisten, dass die nächste eigene Attacke
trifft.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario adivina los movimientos del objetivo para 
hacer que su siguiente ataque no falle.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa prevede i movimenti del bersaglio
per mandare a segno l’attacco successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user senses the target’s movements with its
mind to ensure its next attack does not miss
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　動きを　心で　感じて
次の　攻撃が　必ず
相手に　当たるように　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用心感受对手的行动，
下次攻击必定
会击中对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-ii",url:"https://pokeapi.co/api/v2/generation/2/"},u=170,l=[{name:"poliwag",url:"https://pokeapi.co/api/v2/pokemon/60/"},{name:"poliwrath",url:"https://pokeapi.co/api/v2/pokemon/62/"},{name:"drowzee",url:"https://pokeapi.co/api/v2/pokemon/96/"},{name:"hypno",url:"https://pokeapi.co/api/v2/pokemon/97/"},{name:"hitmonlee",url:"https://pokeapi.co/api/v2/pokemon/106/"},{name:"articuno",url:"https://pokeapi.co/api/v2/pokemon/144/"},{name:"tyrogue",url:"https://pokeapi.co/api/v2/pokemon/236/"},{name:"surskit",url:"https://pokeapi.co/api/v2/pokemon/283/"},{name:"breloom",url:"https://pokeapi.co/api/v2/pokemon/286/"},{name:"nincada",url:"https://pokeapi.co/api/v2/pokemon/290/"},{name:"ninjask",url:"https://pokeapi.co/api/v2/pokemon/291/"},{name:"shedinja",url:"https://pokeapi.co/api/v2/pokemon/292/"},{name:"meditite",url:"https://pokeapi.co/api/v2/pokemon/307/"},{name:"medicham",url:"https://pokeapi.co/api/v2/pokemon/308/"},{name:"roselia",url:"https://pokeapi.co/api/v2/pokemon/315/"},{name:"budew",url:"https://pokeapi.co/api/v2/pokemon/406/"},{name:"riolu",url:"https://pokeapi.co/api/v2/pokemon/447/"},{name:"sewaddle",url:"https://pokeapi.co/api/v2/pokemon/540/"},{name:"shelmet",url:"https://pokeapi.co/api/v2/pokemon/616/"},{name:"froakie",url:"https://pokeapi.co/api/v2/pokemon/656/"},{name:"magearna",url:"https://pokeapi.co/api/v2/pokemon/801/"},{name:"medicham-mega",url:"https://pokeapi.co/api/v2/pokemon/10054/"},{name:"magearna-original",url:"https://pokeapi.co/api/v2/pokemon/10147/"},{name:"articuno-galar",url:"https://pokeapi.co/api/v2/pokemon/10169/"}],g=[],v={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},m="mind-reader",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"こころのめ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"마음의눈"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"心之眼"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Lire-Esprit"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Willensleser"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Telépata"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Leggimente"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Mind Reader"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"こころのめ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"心之眼"}],h=[{accuracy:null,effect_chance:null,effect_entries:[],power:null,pp:40,type:null,version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}}],k=null,_=5,f=0,d=[],x={url:"https://pokeapi.co/api/v2/super-contest-effect/20/"},w={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},j={accuracy:null,contest_combos:e,contest_effect:a,contest_type:o,damage_class:t,effect_chance:n,effect_changes:p,effect_entries:s,flavor_text_entries:i,generation:r,id:u,learned_by_pokemon:l,machines:g,meta:v,name:m,names:c,past_values:h,power:k,pp:_,priority:f,stat_changes:d,super_contest_effect:x,target:w,type:y};export{b as accuracy,e as contest_combos,a as contest_effect,o as contest_type,t as damage_class,j as default,n as effect_chance,p as effect_changes,s as effect_entries,i as flavor_text_entries,r as generation,u as id,l as learned_by_pokemon,g as machines,v as meta,m as name,c as names,h as past_values,k as power,_ as pp,f as priority,d as stat_changes,x as super_contest_effect,w as target,y as type};
