const w=100,y=null,b=null,e={name:"beauty",url:"https://pokeapi.co/api/v2/contest-type/2/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,p=[],n=[{effect:"Targets the last opposing Pokémon to hit the user with a damaging move this turn.  Inflicts 1.5× the damage that move did to the user.  If there is no eligible target, this move will fail.  Type immunity applies, but other type effects are ignored.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Strikes back at the last Pokémon to hit the user this turn with 1.5× the damage."}],t=[{flavor_text:`The user retaliates
against the foe that
last inflicted damage
on it with much
greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user retaliates
against the foe that
last inflicted damage
on it with much
greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user retaliates
against the foe that
last inflicted damage
on it with much
greater power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur attaque le dernier ennemi
l’ayant blessé durant le même tour
en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user retaliates with much greater
power against the target
that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user retaliates with much greater
power against the target
that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Attacke mit großer Kraft gegen das Ziel,
das dem Anwender in derselben Runde
zuletzt Schaden zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Devuelve al objetivo el último ataque recibido,
pero con mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user retaliates with much greater
power against the target
that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attacke mit großer Kraft gegen den Gegner,
der dem Anwender in derselben Runde
zuletzt Schaden zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Devuelve al rival el último ataque recibido, pero con 
mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user retaliates with much greater
power against the opponent
that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將發動攻擊前
最後受到的招式傷害放大，
向對手進行反擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attacke mit großer Kraft gegen den Gegner, der dem
Anwender in derselben Runde zuletzt Schaden
zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Devuelve al rival el último ataque recibido, pero con 
mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user retaliates with much greater force against
the opponent that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`使出招式前，
将最后受到的招式的伤害
大力返还给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將發動攻擊前
最後受到的招式傷害放大，
向對手進行反擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacke mit großer Kraft gegen den Gegner, der dem
Anwender in derselben Runde zuletzt Schaden
zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Devuelve al rival el último ataque recibido, pero con 
mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user retaliates with much greater force against
the opponent that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`使出招式前，
将最后受到的招式的伤害
大力返还给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將發動攻擊前
最後受到的招式傷害放大，
向對手進行反擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacke mit großer Kraft gegen den Gegner, der dem
Anwender in derselben Runde zuletzt Schaden
zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Devuelve al rival el último ataque recibido, pero con 
mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user retaliates with much greater force against
the opponent that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`使出招式前，
将最后受到的招式的伤害
大力返还给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`わざを　だすまえに
さいごに　うけた　わざの　ダメージを
おおきくして　だした　あいてに　かえす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`기술을 쓰기 전에
마지막으로 받은 기술의 데미지를
늘려서 기술을 쓴 상대에게 돌려준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`將發動攻擊前
最後受到的招式傷害放大，
向對手進行反擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque le dernier ennemi l’ayant blessé
durant le même tour en frappant plus fort.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacke mit großer Kraft gegen den Gegner, der dem
Anwender in derselben Runde zuletzt Schaden zufügte.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Devuelve al rival el último ataque recibido, pero con 
mucha más fuerza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa si vendica sul nemico che l’ha appena
ferito con una mossa anche più potente.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user retaliates with much greater force against
the opponent that last inflicted damage on it.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`技を　だす前に
最後に　受けた　技の　ダメージを
大きくして　だした　相手に　返す。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`使出招式前，
将最后受到的招式的伤害
大力返还给对手。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user retaliates with much greater force against the opponent that last inflicted damage on it.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user retaliates with much greater force against the opponent that last inflicted damage on it.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=368,u=[{name:"rhyhorn",url:"https://pokeapi.co/api/v2/pokemon/111/"},{name:"rhydon",url:"https://pokeapi.co/api/v2/pokemon/112/"},{name:"sableye",url:"https://pokeapi.co/api/v2/pokemon/302/"},{name:"mawile",url:"https://pokeapi.co/api/v2/pokemon/303/"},{name:"aron",url:"https://pokeapi.co/api/v2/pokemon/304/"},{name:"lairon",url:"https://pokeapi.co/api/v2/pokemon/305/"},{name:"aggron",url:"https://pokeapi.co/api/v2/pokemon/306/"},{name:"shieldon",url:"https://pokeapi.co/api/v2/pokemon/410/"},{name:"bastiodon",url:"https://pokeapi.co/api/v2/pokemon/411/"},{name:"rhyperior",url:"https://pokeapi.co/api/v2/pokemon/464/"},{name:"dialga",url:"https://pokeapi.co/api/v2/pokemon/483/"},{name:"escavalier",url:"https://pokeapi.co/api/v2/pokemon/589/"},{name:"bisharp",url:"https://pokeapi.co/api/v2/pokemon/625/"},{name:"durant",url:"https://pokeapi.co/api/v2/pokemon/632/"},{name:"cobalion",url:"https://pokeapi.co/api/v2/pokemon/638/"},{name:"solgaleo",url:"https://pokeapi.co/api/v2/pokemon/791/"},{name:"perrserker",url:"https://pokeapi.co/api/v2/pokemon/863/"},{name:"duraludon",url:"https://pokeapi.co/api/v2/pokemon/884/"},{name:"zamazenta",url:"https://pokeapi.co/api/v2/pokemon/889/"},{name:"orthworm",url:"https://pokeapi.co/api/v2/pokemon/968/"},{name:"kingambit",url:"https://pokeapi.co/api/v2/pokemon/983/"},{name:"archaludon",url:"https://pokeapi.co/api/v2/pokemon/1018/"},{name:"iron-crown",url:"https://pokeapi.co/api/v2/pokemon/1023/"},{name:"wormadam-trash",url:"https://pokeapi.co/api/v2/pokemon/10005/"},{name:"mawile-mega",url:"https://pokeapi.co/api/v2/pokemon/10052/"},{name:"aggron-mega",url:"https://pokeapi.co/api/v2/pokemon/10053/"},{name:"sableye-mega",url:"https://pokeapi.co/api/v2/pokemon/10066/"},{name:"sandslash-alola",url:"https://pokeapi.co/api/v2/pokemon/10102/"},{name:"zamazenta-crowned",url:"https://pokeapi.co/api/v2/pokemon/10189/"},{name:"dialga-origin",url:"https://pokeapi.co/api/v2/pokemon/10245/"}],l=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="metal-burst",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"メタルバースト"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"메탈버스트"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"金屬爆炸"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Fulmifer"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Metallstoß"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Represión Metal"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Metalscoppio"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Metal Burst"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"メタルバースト"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"金属爆炸"}],c=[],m=null,h=10,k=0,f=[],_={url:"https://pokeapi.co/api/v2/super-contest-effect/15/"},d={name:"specific-move",url:"https://pokeapi.co/api/v2/move-target/1/"},x={name:"steel",url:"https://pokeapi.co/api/v2/type/9/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:r,id:i,learned_by_pokemon:u,machines:l,meta:s,name:g,names:v,past_values:c,power:m,pp:h,priority:k,stat_changes:f,super_contest_effect:_,target:d,type:x};export{w as accuracy,y as contest_combos,b as contest_effect,e as contest_type,a as damage_class,z as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,r as generation,i as id,u as learned_by_pokemon,l as machines,s as meta,g as name,v as names,c as past_values,m as power,h as pp,k as priority,f as stat_changes,_ as super_contest_effect,d as target,x as type};
