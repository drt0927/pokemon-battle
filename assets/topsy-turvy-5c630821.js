const x=null,y=null,b=null,w=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],t=[{effect:"Inverts the target's stat modifiers.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inverts the target's stat modifiers."}],p=[{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Inverse tous les changements de stats de
la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Invierte por completo los cambios en las
características del Pokémon objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`All stat changes affecting the target
turn topsy-turvy and become the
opposite of what they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Inverse tous les changements de stats de
la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Invierte por completo los cambios en las
características del Pokémon objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`All stat changes affecting the target
turn topsy-turvy and become the
opposite of what they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`讓對手身上所有的
能力變化顛倒過來，
變成和原來相反的狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Inverse tous les changements de stats de
la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Invierte por completo los cambios en las
características del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`All stat changes affecting the target turn
topsy-turvy and become the opposite of what
they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`颠倒对手身上的
所有能力变化，
变成和原来相反的状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`讓對手身上所有的
能力變化顛倒過來，
變成和原來相反的狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Inverse tous les changements de stats de
la cible.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Invierte por completo los cambios en las
características del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`All stat changes affecting the target turn
topsy-turvy and become the opposite of what
they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`颠倒对手身上的
所有能力变化，
变成和原来相反的状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`讓對手身上所有的
能力變化顛倒過來，
變成和原來相反的狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Inverse tous les changements de stats de la cible.",language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Invierte por completo los cambios en las
características del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`All stat changes affecting the target turn
topsy-turvy and become the opposite of what
they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`颠倒对手身上的
所有能力变化，
变成和原来相反的状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてに　かかっている
すべての　のうりょくへんかを
ひっくりかえして　ぎゃくにする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대에게 걸려 있는
모든 능력 변화를
뒤집어서 반대로 만든다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`讓對手身上所有的
能力變化顛倒過來，
變成和原來相反的狀態。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"Inverse tous les changements de stats de la cible.",language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"Invertiert alle Statusveränderungen des Zieles.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Invierte por completo los cambios en las características
del objetivo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Inverte tutte le modifiche alle statistiche
del Pokémon bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`All stat changes affecting the target turn
topsy-turvy and become the opposite of what
they were.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手に　かかっている
すべての　能力変化を
ひっくり返して　逆にする。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`颠倒对手身上的
所有能力变化，
变成和原来相反的状态。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],n={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},r=576,s=[{name:"inkay",url:"https://pokeapi.co/api/v2/pokemon/686/"},{name:"malamar",url:"https://pokeapi.co/api/v2/pokemon/687/"},{name:"grapploct",url:"https://pokeapi.co/api/v2/pokemon/853/"}],i=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="topsy-turvy",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ひっくりかえす"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"뒤집어엎기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"顛倒"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Renversement"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Invertigo"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Reversión"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Sottosopra"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Topsy-Turvy"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ひっくりかえす"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"颠倒"}],v=[],c=null,h=20,m=0,k=[],_=null,f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},d={name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},I={accuracy:null,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:t,flavor_text_entries:p,generation:n,id:r,learned_by_pokemon:s,machines:i,meta:l,name:u,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:f,type:d};export{x as accuracy,y as contest_combos,b as contest_effect,w as contest_type,e as damage_class,I as default,a as effect_chance,o as effect_changes,t as effect_entries,p as flavor_text_entries,n as generation,r as id,s as learned_by_pokemon,i as machines,l as meta,u as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
