const P=100,w=null,H=null,e={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,t=[],p=[{effect:"Inflicts regular damage.  Power directly relates to the target's relative remaining HP, given by `1 + 120 * current HP / max HP`, to a maximum of 121.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Power increases against targets with more HP remaining, up to a maximum of 121 power."}],r=[{flavor_text:`The foe is crushed
with great force.
The attack is more
powerful the more HP
the foe has left.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is crushed
with great force.
The attack is more
powerful the more HP
the foe has left.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is crushed
with great force.
The attack is more
powerful the more HP
the foe has left.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Une force puissante écrase l’ennemi.
Plus il lui reste de PV et plus l’attaque
est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is crushed with great force.
The attack is more powerful the more
HP the target has left.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is crushed with great force.
The attack is more powerful the more
HP the target has left.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui
reste de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher
die KP des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más
PS le queden al objetivo, más fuerte será el
ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is crushed with great force.
The more HP the target has left,
the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui
reste de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher
die KP des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más 
PS le queden al objetivo, más fuerte será el
ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is crushed with great force.
The more HP the target has left,
the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用驚人的力量捏碎對手。
對手現有的ＨＰ越多，
招式的威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui
reste de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher die KP
des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más 
PS le queden al objetivo, más fuerte será el
ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is crushed with great force. The more HP
the target has left, the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用骇人的力量捏碎对手。
对手的ＨＰ越多，
威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用驚人的力量捏碎對手。
對手現有的ＨＰ越多，
招式的威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui
reste de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher die KP
des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más 
PS le queden al objetivo, más fuerte será el
ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is crushed with great force. The more HP
the target has left, the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用骇人的力量捏碎对手。
对手的ＨＰ越多，
威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用驚人的力量捏碎對手。
對手現有的HP越多，
招式的威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui reste
de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher die KP
des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más 
PS le queden al objetivo, más fuerte será el
ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is crushed with great force. The more HP
the target has left, the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用骇人的力量捏碎对手。
对手的HP越多，
威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`すさまじい　ちからで　あいてを　にぎり
つぶす。あいての　ＨＰが　のこっている
ほど　いりょくが　あがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`굉장한 힘으로 상대를 묵사발로
만든다. 상대의 HP가 남아 있을수록
위력이 올라간다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用驚人的力量捏碎對手。
對手現有的ＨＰ越多，
招式的威力越大。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Une force puissante écrase l’ennemi. Plus il lui reste
de PV et plus l’attaque est puissante.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ziel wird mit großer Kraft getroffen. Je höher die KP
des Zieles, desto stärker die Attacke.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Estruja al objetivo con gran fuerza. Cuantos más PS le
queden al objetivo, más fuerte será el ataque.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Colpisce il bersaglio con grande forza. Più PS
ha il Pokémon colpito, maggiore è la potenza
della mossa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The target is crushed with great force. The more HP
the target has left, the greater this move’s power.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`すさまじい　力で　相手を　にぎりつぶす。
相手の　ＨＰが　残っているほど
威力が　あがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用骇人的力量捏碎对手。
对手剩余的ＨＰ越多，
威力越大。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The target is crushed with great force. The more HP the target has left, the greater this move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The target is crushed with great force. The more HP the target has left, the greater the move's power.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],n={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},i=462,s=[{name:"regigigas",url:"https://pokeapi.co/api/v2/pokemon/486/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="crush-grip",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"にぎりつぶす"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"묵사발"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"捏碎"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Presse"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Quetschgriff"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Agarrón"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Sbriciolmano"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Crush Grip"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"にぎりつぶす"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"捏碎"}],h=[],c=null,m=5,k=0,f=[],_={url:"https://pokeapi.co/api/v2/super-contest-effect/15/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},b={accuracy:100,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:t,effect_entries:p,flavor_text_entries:r,generation:n,id:i,learned_by_pokemon:s,machines:l,meta:u,name:g,names:v,past_values:h,power:c,pp:m,priority:k,stat_changes:f,super_contest_effect:_,target:d,type:x};export{P as accuracy,w as contest_combos,H as contest_effect,e as contest_type,a as damage_class,b as default,o as effect_chance,t as effect_changes,p as effect_entries,r as flavor_text_entries,n as generation,i as id,s as learned_by_pokemon,l as machines,u as meta,g as name,v as names,h as past_values,c as power,m as pp,k as priority,f as stat_changes,_ as super_contest_effect,d as target,x as type};
