const w=100,b=null,e={url:"https://pokeapi.co/api/v2/contest-effect/10/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},p=null,n=[],t=[{effect:`Inflicts regular damage.  Hits 2–5 times in one turn.

Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Hits 2-5 times in one turn."}],i=[{flavor_text:`Fires spikes to
hit 2-5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Fires spikes to
hit 2-5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Launches sharp spikes that
strike 2 to 5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Launches sharp spikes that
strike 2 to 5 times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`Sharp spikes are
fired at the foe to
strike two to five
times.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`Sharp spikes are
fired at the foe to
strike two to five
times in rapid
succession.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`Sharp spikes are
fired at the foe to
strike two to five
times in rapid
succession.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`Sharp spikes are
fired at the foe to
strike two to five
times in rapid
succession.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Envoie une rafale de dards. 
Peut toucher de 2 à 5 fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Sharp spikes are shot at the target
in rapid succession.
They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`Sharp spikes are shot at the target
in rapid succession.
They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`するどい　ハリを
あいてに　はっしゃして　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`날카로운 침을
상대에게 발사해서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Envoie une rafale de dards.
Peut toucher de deux à cinq fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Spitze Nadeln treffen das Ziel zwei- bis fünfmal
hintereinander.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Lanza finas púas que hieren de dos a cinco veces.",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Il bersaglio viene colpito da due a cinque volte
con spilli appuntiti in rapida successione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Sharp spikes are shot at the target
in rapid succession.
They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`鋭い　ハリを
相手に　発射して　攻撃する。
２ー５回の　あいだ　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`するどい　ハリを
あいてに　はっしゃして　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`날카로운 침을
상대에게 발사해서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Envoie une rafale de dards.
Peut toucher de deux à cinq fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Spitze Nadeln treffen das Ziel zwei- bis fünfmal
hintereinander.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Lanza finas púas que hieren de dos a cinco veces. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Il bersaglio viene colpito da due a cinque volte
con spilli appuntiti in rapida successione.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Sharp spikes are shot at the target
in rapid succession.
They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`鋭い　ハリを
相手に　発射して　攻撃する。
２ー５回の　あいだ　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`するどい　ハリを
あいてに　はっしゃして　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`날카로운 침을
상대에게 발사해서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手發射
銳利的針進行攻擊。
可連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Envoie une rafale de dards.
Peut toucher de deux à cinq fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Spitze Nadeln treffen das Ziel zwei- bis fünfmal
hintereinander.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"Lanza finas púas que hieren de dos a cinco veces. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio viene colpito da due a cinque volte
in rapida successione con delle spine.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Sharp spikes are shot at the target in rapid
succession. They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`鋭い　ハリを
相手に　発射して　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向对手发射
锐针进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`するどい　ハリを
あいてに　はっしゃして　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`날카로운 침을
상대에게 발사해서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手發射
銳利的針進行攻擊。
可連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Envoie une rafale de dards.
Peut toucher de deux à cinq fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Spitze Nadeln treffen das Ziel zwei- bis fünfmal
hintereinander.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Lanza finas púas que hieren de dos a cinco veces. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio viene colpito da due a cinque volte
in rapida successione con delle spine.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Sharp spikes are shot at the target in rapid
succession. They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`鋭い　ハリを
相手に　発射して　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向对手发射
锐针进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`するどい　ハリを
あいてに　はっしゃして　こうげきする。
２ー５かいの　あいだ　れんぞくで　だす。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`날카로운 침을
상대에게 발사해서 공격한다.
2-5회 동안 연속으로 쓴다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手發射
銳利的針進行攻擊。
可連續攻擊２～５次。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Envoie une rafale de dards.
Peut toucher de deux à cinq fois.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Spitze Nadeln treffen das Ziel zwei- bis fünfmal
hintereinander.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Lanza finas púas que hieren de dos a cinco veces. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio viene colpito da due a cinque volte
in rapida successione con delle spine.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Sharp spikes are shot at the target in rapid
succession. They hit two to five times in a row.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`鋭い　ハリを
相手に　発射して　攻撃する。
２ー５回の　間　連続で　だす。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向对手发射
锐针进行攻击。
连续攻击２～５次。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},s=131,u=[{name:"cloyster",url:"https://pokeapi.co/api/v2/pokemon/91/"},{name:"omanyte",url:"https://pokeapi.co/api/v2/pokemon/138/"},{name:"omastar",url:"https://pokeapi.co/api/v2/pokemon/139/"},{name:"corsola",url:"https://pokeapi.co/api/v2/pokemon/222/"},{name:"mareanie",url:"https://pokeapi.co/api/v2/pokemon/747/"},{name:"toxapex",url:"https://pokeapi.co/api/v2/pokemon/748/"}],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:5,max_turns:null,min_hits:2,min_turns:null,stat_chance:0},v="spike-cannon",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"とげキャノン"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"가시대포"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"尖刺加農炮"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Picanon"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Dornkanone"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Clavo Cañón"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Sparalance"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Spike Cannon"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"とげキャノン"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"尖刺加农炮"}],h=[],m=20,k=15,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/7/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:p,effect_changes:n,effect_entries:t,flavor_text_entries:i,generation:r,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:x,type:y};export{w as accuracy,b as contest_combos,e as contest_effect,a as contest_type,o as damage_class,z as default,p as effect_chance,n as effect_changes,t as effect_entries,i as flavor_text_entries,r as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,x as target,y as type};
