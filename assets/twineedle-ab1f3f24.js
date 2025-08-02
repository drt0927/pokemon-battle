const w=100,y=null,e={url:"https://pokeapi.co/api/v2/contest-effect/9/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=20,p=[],t=[{effect:"Inflicts regular damage.  Hits twice in the same turn.  Has a 20% chance to poison the target.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Hits twice in the same turn.  Has a 20% chance to poison the target."}],i=[{flavor_text:`Jabs the foe twice
using stingers.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Jabs the foe twice
using stingers.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Stingers on the forelegs
jab the foe twice.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Stingers on the forelegs
jab the foe twice.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is stabbed
twice with foreleg
stingers. It may
poison the foe.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is stabbed
twice by a pair of
stingers.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is stabbed
twice by a pair of
stingers.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is stabbed
twice by a pair of
stingers.
It may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Un double coup de dard qui
transperce l’ennemi 2 fois d’affilée.
Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user damages the target twice in
succession by jabbing it with two spikes.
It may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user damages the target twice in
succession by jabbing it with two spikes.
It may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`２ほんの　ハリを　あいてに　つきさし
２かい　れんぞくで　ダメージ。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`2개의 침을 상대에게 꿰찔러
2회 연속으로 데미지를 준다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Un double coup de dard qui transperce l’ennemi
deux fois d’affilée. Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Stacheln an den Vorderbeinen treffen das Ziel
zweimal. Ziel wird eventuell vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Pincha dos veces con dos espinas. Puede
envenenar.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Colpisce il bersaglio due volte di seguito con
un paio di aghi. Può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user damages the target twice in
succession by jabbing it with two spikes.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`２本の　ハリを　相手に　突き刺し
２回連続で　ダメージ。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`２ほんの　ハリを　あいてに　つきさし
２かい　れんぞくで　ダメージ。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`2개의 침을 상대에게 꿰찔러
2회 연속으로 데미지를 준다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Un double coup de dard qui transperce l’ennemi
deux fois d’affilée. Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Stacheln treffen das Ziel zweimal.
Das Ziel wird eventuell vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Pincha dos veces con dos espinas. Puede envenenar. ",language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Colpisce il bersaglio due volte di seguito con
un paio di aghi. Può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user damages the target twice in
succession by jabbing it with two spikes.
This may also poison the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`２本の　ハリを　相手に　突き刺し
２回連続で　ダメージ。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`２ほんの　ハリを　あいてに　つきさし
２かい　れんぞくで　ダメージ。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`2개의 침을 상대에게 꿰찔러
2회 연속으로 데미지를 준다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將２根針刺進對手，
連續２次給予傷害。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Un double coup de dard qui transperce l’ennemi
deux fois d’affilée. Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Stacheln treffen das Ziel zweimal. Das Ziel wird
eventuell vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Pincha dos veces con dos espinas. Puede
envenenar. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Colpisce il bersaglio due volte di seguito con
due spine. Può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user damages the target twice in succession
by jabbing it with two spikes. This may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`２本の　ハリを　相手に　突き刺し
２回連続で　ダメージ。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将２根针刺入对手，
连续２次给予伤害。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`２ほんの　ハリを　あいてに　つきさし
２かい　れんぞくで　ダメージ。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`2개의 침을 상대에게 꿰찔러
2회 연속으로 데미지를 준다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將２根針刺進對手，
連續２次給予傷害。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Un double coup de dard qui transperce l’ennemi
deux fois d’affilée. Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Stacheln treffen das Ziel zweimal. Das Ziel wird
eventuell vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Pincha dos veces con dos espinas. Puede
envenenar. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Colpisce il bersaglio due volte di seguito con
due spine. Può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user damages the target twice in succession
by jabbing it with two spikes. This may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`２本の　ハリを　相手に　突き刺し
２回連続で　ダメージ。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将２根针刺入对手，
连续２次给予伤害。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`２ほんの　ハリを　あいてに　つきさし
２かい　れんぞくで　ダメージ。
どく　じょうたいに　することが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`2개의 침을 상대에게 꿰찔러
2회 연속으로 데미지를 준다.
독 상태로 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將２根針刺進對手，
連續２次給予傷害。
有時會讓對手陷入中毒狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Un double coup de dard qui transperce l’ennemi
deux fois d’affilée. Peut aussi l’empoisonner.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Stacheln treffen das Ziel zweimal. Das Ziel wird
eventuell vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Pincha dos veces con dos espinas. Puede
envenenar. `,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Colpisce il bersaglio due volte di seguito con
due spine. Può anche avvelenarlo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user damages the target twice in succession
by jabbing it with two spikes. This may also poison
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`２本の　ハリを　相手に　突き刺し
２回連続で　ダメージ。
毒状態に　することが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将２根针刺入对手，
连续２次给予伤害。
有时会让对手陷入中毒状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`このわざは　つかえません
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
但还是建议忘记这个招式。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},s=41,u=[{name:"beedrill",url:"https://pokeapi.co/api/v2/pokemon/15/"},{name:"shellder",url:"https://pokeapi.co/api/v2/pokemon/90/"},{name:"cloyster",url:"https://pokeapi.co/api/v2/pokemon/91/"},{name:"spinarak",url:"https://pokeapi.co/api/v2/pokemon/167/"},{name:"skorupi",url:"https://pokeapi.co/api/v2/pokemon/451/"},{name:"venipede",url:"https://pokeapi.co/api/v2/pokemon/543/"},{name:"escavalier",url:"https://pokeapi.co/api/v2/pokemon/589/"},{name:"togedemaru",url:"https://pokeapi.co/api/v2/pokemon/777/"},{name:"beedrill-mega",url:"https://pokeapi.co/api/v2/pokemon/10090/"},{name:"togedemaru-totem",url:"https://pokeapi.co/api/v2/pokemon/10154/"}],l=[],g={ailment:{name:"poison",url:"https://pokeapi.co/api/v2/move-ailment/5/"},ailment_chance:20,category:{name:"damage+ailment",url:"https://pokeapi.co/api/v2/move-category/4/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:2,max_turns:null,min_hits:2,min_turns:null,stat_chance:0},v="twineedle",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ダブルニードル"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"더블니들"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"雙針"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Double Dard"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Duonadel"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Doble Ataque"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Doppio Ago"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Twineedle"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ダブルニードル"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"双针"}],h=[],m=25,k=20,_=0,d=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/7/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},b={name:"bug",url:"https://pokeapi.co/api/v2/type/7/"},j={accuracy:100,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:i,generation:r,id:s,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:d,super_contest_effect:f,target:x,type:b};export{w as accuracy,y as contest_combos,e as contest_effect,a as contest_type,o as damage_class,j as default,n as effect_chance,p as effect_changes,t as effect_entries,i as flavor_text_entries,r as generation,s as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,d as stat_changes,f as super_contest_effect,x as target,b as type};
