const x=100,w=null,y=null,b=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=100,o=[],n=[{effect:"Poisons the target and lowers its Speed by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Poisons the target and lowers its Speed by one stage."}],t=[{flavor_text:`どくの　まじった　いとを　ふきつける。
あいてを　どくにして
すばやさを　さげる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`독이 섞인 실을 뿜어낸다.
상대를 독 상태로 만들고
스피드를 떨어뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`將混有毒的絲吐向對手。
使其中毒，
進而降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Tisse un fil imprégné de venin. Empoisonne la cible
et baisse sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender schießt giftige Fäden auf das Ziel,
das dadurch vergiftet wird. Außerdem sinkt seine
Initiative.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Ataca al oponente con hilillos venenosos que
reducen su Velocidad y lo envenenan.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Avvelena il bersaglio avvolgendolo con filamenti
tossici e ne riduce la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user shoots poisonous threads to poison the
target and lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`毒の　混じった　糸を　吹き付ける。
相手を　毒にして
素早さを　さげる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`将混有毒的丝吐向对手。
使其中毒，
从而降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`どくの　まじった　いとを　ふきつける。
あいてを　どくにして
すばやさを　さげる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`독이 섞인 실을 뿜어낸다.
상대를 독 상태로 만들고
스피드를 떨어뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`將混有毒的絲吐向對手。
使其中毒，
進而降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Tisse un fil imprégné de venin. Empoisonne la cible
et baisse sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender schießt giftige Fäden auf das Ziel,
das dadurch vergiftet wird. Außerdem sinkt seine
Initiative.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ataca al oponente con hilillos venenosos que
reducen su Velocidad y lo envenenan.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Avvelena il bersaglio avvolgendolo con filamenti
tossici e ne riduce la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user shoots poisonous threads to poison the
target and lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`毒の　混じった　糸を　吹き付ける。
相手を　毒にして
素早さを　さげる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`将混有毒的丝吐向对手。
使其中毒，
从而降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`どくの　まじった　いとを　ふきつける。
あいてを　どくにして
すばやさを　さげる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`독이 섞인 실을 뿜어낸다.
상대를 독 상태로 만들고
스피드를 떨어뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`將混有毒的絲吐向對手。
使其中毒，
進而降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Tisse un fil imprégné de venin. Empoisonne la cible
et baisse sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender schießt giftige Fäden auf das Ziel,
das dadurch vergiftet wird. Außerdem sinkt seine
Initiative.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ataca al oponente con hilillos venenosos que
reducen su Velocidad y lo envenenan.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Avvelena il bersaglio avvolgendolo con filamenti
tossici e ne riduce la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user shoots poisonous threads to poison the
target and lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`毒の　混じった　糸を　吹き付ける。
相手を　毒にして
素早さを　さげる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`将混有毒的丝吐向对手。
使其中毒，
从而降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`どくの　まじった　いとを　ふきつける。
あいてを　どくにして
すばやさを　さげる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`독이 섞인 실을 뿜어낸다.
상대를 독 상태로 만들고
스피드를 떨어뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`將混有毒的絲吐向對手。
使其中毒，
進而降低對手的速度。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Tisse un fil imprégné de venin. Empoisonne la cible
et baisse sa Vitesse.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender schießt giftige Fäden auf das Ziel,
das dadurch vergiftet wird. Außerdem sinkt seine
Initiative.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ataca al oponente con hilillos venenosos que reducen
su Velocidad y lo envenenan.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Avvelena il bersaglio avvolgendolo con filamenti
tossici e ne riduce la Velocità.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user shoots poisonous threads to poison the
target and lower the target’s Speed stat.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`毒の　混じった　糸を　吹き付ける。
相手を　毒にして
素早さを　さげる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`将混有毒的丝吐向对手。
使其中毒，
从而降低对手的速度。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user shoots poisonous threads to poison the target and lower the target's Speed stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user shoots poisonous threads to poison the target and lower the target's Speed stat.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},i=672,s=[{name:"spinarak",url:"https://pokeapi.co/api/v2/pokemon/167/"},{name:"ariados",url:"https://pokeapi.co/api/v2/pokemon/168/"}],r=[],l={ailment:{name:"poison",url:"https://pokeapi.co/api/v2/move-ailment/5/"},ailment_chance:100,category:{name:"swagger",url:"https://pokeapi.co/api/v2/move-category/5/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},u="toxic-thread",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"どくのいと"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"독실"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"毒絲"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Fil Toxique"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Giftfaden"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Hilo Venenoso"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Velenotela"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Toxic Thread"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"どくのいと"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"毒丝"}],v=[],c=null,h=20,m=0,k=[{change:-1,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}}],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},A={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:i,learned_by_pokemon:s,machines:r,meta:l,name:u,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,w as contest_combos,y as contest_effect,b as contest_type,e as damage_class,A as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,i as id,s as learned_by_pokemon,r as machines,l as meta,u as name,g as names,v as past_values,c as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
