const b=100,y=null,H=null,a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=10,p=[],n=[{effect:"Inflicts regular damage.  User's critical hit rate is one level higher when using this move. Has a 10% chance to poison the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Has an increased chance for a critical hit and a 10% chance to poison the target."}],t=[{flavor_text:`A slashing attack
that may also leave
the target poisoned.
It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`A slashing attack
that may also leave
the target poisoned.
It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`A slashing attack
that may also leave
the target poisoned.
It has a high
critical-hit ratio.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un coup tranchant qui peut empoisonner
l’ennemi. Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A slashing attack with a poisonous blade
that may also leave the target poisoned.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`A slashing attack with a poisonous blade
that may also leave the target poisoned.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell
vergiftet. Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Tajo que puede envenenar al objetivo. Suele ser
crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`A slashing attack with a poisonous blade
that may also poison the target.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell
vergiftet. Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Tajo que puede envenenar al objetivo. Suele ser 
crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`A slashing attack with a poisonous blade
that may also poison the target.
Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用毒刃劈開對手。
有時會讓對手陷入中毒狀態，
也容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell
vergiftet. Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Tajo que puede envenenar al objetivo. Suele ser 
crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`A slashing attack with a poisonous blade that may
also poison the target. Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用毒刃劈开对手。
有时会让对手陷入中毒状态，
也容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用毒刃劈開對手。
有時會讓對手陷入中毒狀態，
也容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell
vergiftet. Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Tajo que puede envenenar al objetivo. Suele ser 
crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`A slashing attack with a poisonous blade that may
also poison the target. Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用毒刃劈开对手。
有时会让对手陷入中毒状态，
也容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用毒刃劈開對手。
有時會讓對手陷入中毒狀態，
也容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critique élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell
vergiftet. Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Tajo que puede envenenar al objetivo. Suele ser 
crítico.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`A slashing attack with a poisonous blade that may
also poison the target. Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用毒刃劈开对手。
有时会让对手陷入中毒状态，
也容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`どくの　やいばで　あいてを　きりさく。
どく　じょうたいに　することが　あり
きゅうしょにも　あたりやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`독 칼날로 상대를 베어 가른다.
독 상태로 만들 때가 있고
급소에도 맞기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用毒刃劈開對手。
有時會讓對手陷入中毒狀態，
也容易擊中要害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Un coup tranchant qui peut empoisonner l’ennemi.
Taux de critiques élevé.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ein schneidender Hieb, der das Ziel eventuell vergiftet.
Hat eine hohe Volltrefferquote.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"Tajo que puede envenenar al objetivo. Suele ser crítico.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacco con zanne avvelenate che può anche
avvelenare il Pokémon colpito. Probabile
brutto colpo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`A slashing attack with a poisonous blade that may
also poison the target. Critical hits land more easily.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`毒の　刃で　相手を　切り裂く。
毒状態に　することが　あり
急所にも　当たりやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用毒刃劈开对手。
有时会让对手陷入中毒状态，
也容易击中要害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"A slashing attack with a toxic blade that may also poison the target. This move has a heightened chance of landing a critical hit.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"A slashing attack with a poisonous blade that may also poison the target. This move has a heightened chance of landing a critical hit.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],i={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},r=440,l=[{name:"zubat",url:"https://pokeapi.co/api/v2/pokemon/41/"},{name:"golbat",url:"https://pokeapi.co/api/v2/pokemon/42/"},{name:"paras",url:"https://pokeapi.co/api/v2/pokemon/46/"},{name:"parasect",url:"https://pokeapi.co/api/v2/pokemon/47/"},{name:"machamp",url:"https://pokeapi.co/api/v2/pokemon/68/"},{name:"tentacool",url:"https://pokeapi.co/api/v2/pokemon/72/"},{name:"tentacruel",url:"https://pokeapi.co/api/v2/pokemon/73/"},{name:"scyther",url:"https://pokeapi.co/api/v2/pokemon/123/"},{name:"kabutops",url:"https://pokeapi.co/api/v2/pokemon/141/"},{name:"mew",url:"https://pokeapi.co/api/v2/pokemon/151/"},{name:"spinarak",url:"https://pokeapi.co/api/v2/pokemon/167/"},{name:"ariados",url:"https://pokeapi.co/api/v2/pokemon/168/"},{name:"crobat",url:"https://pokeapi.co/api/v2/pokemon/169/"},{name:"gligar",url:"https://pokeapi.co/api/v2/pokemon/207/"},{name:"scizor",url:"https://pokeapi.co/api/v2/pokemon/212/"},{name:"sceptile",url:"https://pokeapi.co/api/v2/pokemon/254/"},{name:"anorith",url:"https://pokeapi.co/api/v2/pokemon/347/"},{name:"armaldo",url:"https://pokeapi.co/api/v2/pokemon/348/"},{name:"vespiquen",url:"https://pokeapi.co/api/v2/pokemon/416/"},{name:"skorupi",url:"https://pokeapi.co/api/v2/pokemon/451/"},{name:"drapion",url:"https://pokeapi.co/api/v2/pokemon/452/"},{name:"toxicroak",url:"https://pokeapi.co/api/v2/pokemon/454/"},{name:"gliscor",url:"https://pokeapi.co/api/v2/pokemon/472/"},{name:"scolipede",url:"https://pokeapi.co/api/v2/pokemon/545/"},{name:"garbodor",url:"https://pokeapi.co/api/v2/pokemon/569/"},{name:"joltik",url:"https://pokeapi.co/api/v2/pokemon/595/"},{name:"galvantula",url:"https://pokeapi.co/api/v2/pokemon/596/"},{name:"toxapex",url:"https://pokeapi.co/api/v2/pokemon/748/"},{name:"lurantis",url:"https://pokeapi.co/api/v2/pokemon/754/"},{name:"salazzle",url:"https://pokeapi.co/api/v2/pokemon/758/"},{name:"nihilego",url:"https://pokeapi.co/api/v2/pokemon/793/"},{name:"naganadel",url:"https://pokeapi.co/api/v2/pokemon/804/"},{name:"obstagoon",url:"https://pokeapi.co/api/v2/pokemon/862/"},{name:"eternatus",url:"https://pokeapi.co/api/v2/pokemon/890/"},{name:"shroodle",url:"https://pokeapi.co/api/v2/pokemon/944/"},{name:"fezandipiti",url:"https://pokeapi.co/api/v2/pokemon/1016/"},{name:"eternatus-eternamax",url:"https://pokeapi.co/api/v2/pokemon/10190/"}],s=[{machine:{url:"https://pokeapi.co/api/v2/machine/1241/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],u={ailment:{name:"poison",url:"https://pokeapi.co/api/v2/move-ailment/5/"},ailment_chance:10,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:1,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="cross-poison",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"クロスポイズン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"크로스포이즌"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"十字毒刃"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Poison Croix"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Giftstreich"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Veneno X"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Velenocroce"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Cross Poison"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"クロスポイズン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"十字毒刃"}],c=[],h=70,m=20,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/5/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},w={accuracy:100,contest_combos:null,contest_effect:null,contest_type:a,damage_class:e,effect_chance:o,effect_changes:p,effect_entries:n,flavor_text_entries:t,generation:i,id:r,learned_by_pokemon:l,machines:s,meta:u,name:g,names:v,past_values:c,power:h,pp:m,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:x};export{b as accuracy,y as contest_combos,H as contest_effect,a as contest_type,e as damage_class,w as default,o as effect_chance,p as effect_changes,n as effect_entries,t as flavor_text_entries,i as generation,r as id,l as learned_by_pokemon,s as machines,u as meta,g as name,v as names,c as past_values,h as power,m as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,x as type};
