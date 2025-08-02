const x=null,y=null,w=null,P=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],n=[{effect:"Grants the user protection for the rest of the turn.  If a Pokémon attempts to use a move that makes contact with the user, that Pokémon will be poisoned.  This move's chance of success halves every time it's used consecutively with any other protection move.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Grants the user protection for the rest of the turn and poisons any Pokémon that tries to use a contact move on it."}],t=[{flavor_text:`あいての　こうげきを　ふせぐと
どうじに　ふれた　あいてに
どくを　あたえて　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대의 공격을 막음과
동시에 접촉한 상대에게
독을 퍼뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`防住對手攻擊的同時，
讓碰觸到自己的對手中毒。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Protège le lanceur contre les attaques de l’ennemi
et empoisonne ce dernier s’il utilise une attaque
directe sur le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender wird vor Angriffen geschützt.
Gleichzeitig werden alle Pokémon, die mit ihm in
Berührung kommen, vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Protege de los ataques y, al mismo tiempo, envenena
al Pokémon que use un movimiento de contacto
contra el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Protegge dagli attacchi e avvelena i Pokémon
che lanciano un attacco diretto su chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`In addition to protecting the user from attacks, this
move also poisons any attacker that makes
direct contact.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手の　攻撃を　防ぐと
同時に　触れた　相手に
毒を　与えてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`防住对手攻击的同时，
让接触到自己的对手中毒。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいての　こうげきを　ふせぐと
どうじに　ふれた　あいてに
どくを　あたえて　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대의 공격을 막음과
동시에 접촉한 상대에게
독을 퍼뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`防住對手攻擊的同時，
讓碰觸到自己的對手中毒。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Protège le lanceur contre les attaques de l’ennemi
et empoisonne ce dernier s’il utilise une attaque
directe sur le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender wird vor Angriffen geschützt.
Gleichzeitig werden alle Pokémon, die mit ihm in
Berührung kommen, vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Protege de los ataques y, al mismo tiempo, envenena
al Pokémon que use un movimiento de contacto
contra el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Protegge dagli attacchi e avvelena i Pokémon
che lanciano un attacco diretto su chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`In addition to protecting the user from attacks, this
move also poisons any attacker that makes
direct contact.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手の　攻撃を　防ぐと
同時に　触れた　相手に
毒を　与えてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`防住对手攻击的同时，
让接触到自己的对手中毒。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいての　こうげきを　ふせぐと
どうじに　ふれた　あいてに
どくを　あたえて　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대의 공격을 막음과
동시에 접촉한 상대에게
독을 퍼뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`防住對手攻擊的同時，
讓碰觸到自己的對手中毒。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Protège le lanceur contre les attaques de l’ennemi
et empoisonne ce dernier s’il utilise une attaque directe
sur le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender wird vor Angriffen geschützt.
Gleichzeitig werden alle Pokémon, die mit ihm in
Berührung kommen, vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Protege de los ataques y, al mismo tiempo, envenena
al Pokémon que use un movimiento de contacto
contra el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Protegge dagli attacchi e avvelena i Pokémon
che lanciano un attacco diretto su chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`In addition to protecting the user from attacks, this
move also poisons any attacker that makes
direct contact.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手の　攻撃を　防ぐと
同時に　触れた　相手に
毒を　与えてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`防住对手攻击的同时，
让接触到自己的对手中毒。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいての　こうげきを　ふせぐと
どうじに　ふれた　あいてに
どくを　あたえて　しまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대의 공격을 막음과
동시에 접촉한 상대에게
독을 퍼뜨린다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`防住對手攻擊的同時，
讓碰觸到自己的對手中毒。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Protège le lanceur contre les attaques de l’ennemi
et empoisonne ce dernier s’il utilise une attaque directe
sur le lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender wird vor Angriffen geschützt.
Gleichzeitig werden alle Pokémon, die mit ihm
in Berührung kommen, vergiftet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Protege de los ataques y, al mismo tiempo, envenena
al Pokémon que use un movimiento de contacto contra
el usuario.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Protegge dagli attacchi e avvelena i Pokémon
che lanciano un attacco diretto su chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`In addition to protecting the user from attacks, this
move also poisons any attacker that makes
direct contact.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　攻撃を　防ぐと
同時に　触れた　相手に
毒を　与えてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`防住对手攻击的同时，
让接触到自己的对手中毒。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=661,i=[{name:"toxapex",url:"https://pokeapi.co/api/v2/pokemon/748/"}],u=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="baneful-bunker",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"トーチカ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"토치카"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"碉堡"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Blockhaus"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Bunker"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Búnker"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Fortino"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Baneful Bunker"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"トーチカ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"碉堡"}],c=[],v=null,m=10,h=4,k=[],_=null,f={name:"user",url:"https://pokeapi.co/api/v2/move-target/7/"},d={name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},z={accuracy:null,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:i,machines:u,meta:s,name:l,names:g,past_values:c,power:v,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:f,type:d};export{x as accuracy,y as contest_combos,w as contest_effect,P as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,u as machines,s as meta,l as name,g as names,c as past_values,v as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
