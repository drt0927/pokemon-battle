const x=100,y=null,b=null,z=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,o=[],n=[{effect:"Explodes if the target uses a fire move this turn, damaging it for 1/4 its max HP and preventing the move.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Explodes if the target uses a fire move this turn, damaging it for 1/4 its max HP and preventing the move."}],p=[{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même
tour, le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder
in derselben Runde eine Feuer-Attacke ein,
kommt es zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Esparce un polvo sobre el Pokémon objetivo.
Si este usa un movimiento de tipo Fuego en el
mismo turno, el polvo explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user covers the target in a powder
that explodes and damages the target
if it uses a Fire-type move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même
tour, le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder
in derselben Runde eine Feuer-Attacke ein,
kommt es zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Esparce un polvo sobre el Pokémon objetivo.
Si este usa un movimiento de tipo Fuego en el
mismo turno, el polvo explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user covers the target in a powder
that explodes and damages the target
if it uses a Fire-type move.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`被撒到粉塵的對手
使用火屬性招式時，
會發生爆炸並受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même
tour, le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder in
derselben Runde eine Feuer-Attacke ein, kommt es
zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Esparce un polvo sobre el objetivo. Si este usa un
movimiento de tipo Fuego en el mismo turno, el polvo
explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user covers the target in a combustible powder.
If the target uses a Fire-type move, the powder
explodes and damages the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`如果被撒到粉尘的对手
使用火招式，
则会爆炸并给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`被撒到粉塵的對手
使用火屬性招式時，
會發生爆炸並受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même
tour, le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder in
derselben Runde eine Feuer-Attacke ein, kommt es
zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Esparce un polvo sobre el objetivo. Si este usa un
movimiento de tipo Fuego en el mismo turno, el polvo
explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user covers the target in a combustible powder.
If the target uses a Fire-type move, the powder
explodes and damages the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`如果被撒到粉尘的对手
使用火招式，
则会爆炸并给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`被撒到粉塵的對手
使用火屬性招式時，
會發生爆炸並受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même tour,
le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder in
derselben Runde eine Feuer-Attacke ein, kommt es
zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Esparce un polvo sobre el objetivo. Si este usa un
movimiento de tipo Fuego en el mismo turno, el polvo
explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user covers the target in a combustible powder.
If the target uses a Fire-type move, the powder
explodes and damages the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`如果被撒到粉尘的对手
使用火招式，
则会爆炸并给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ふんじんを　あびせた　あいてが
ほのおわざを　つかうと
ばくはつして　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`분진을 뒤집어쓴 상대가
불꽃 기술을 쓰면
폭발하여 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`被撒到粉塵的對手
使用火屬性招式時，
會發生爆炸並受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`L’ennemi est pris dans un nuage de poudre.
S’il utilise une capacité de type Feu lors du même tour,
le nuage explose et lui inflige des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Setzt das Ziel nach Einsatz von Pulverschleuder in
derselben Runde eine Feuer-Attacke ein, kommt es
zu einer Explosion, die ihm schadet.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Esparce un polvo sobre el objetivo. Si este usa un
movimiento de tipo Fuego en el mismo turno, el polvo
explota y le inflige daño.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il bersaglio viene coperto da un pulviscolo che
esplode danneggiandolo se questi utilizza
una mossa di tipo Fuoco nello stesso turno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user covers the target in a combustible powder.
If the target uses a Fire-type move, the powder
explodes and damages the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`ふんじんを　浴びせた　相手が
ほのお技を　使うと
爆発して　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`如果被撒到粉尘的对手
使用火招式，
则会爆炸并给予伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],t={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},i=600,r=[{name:"vivillon",url:"https://pokeapi.co/api/v2/pokemon/666/"},{name:"cutiefly",url:"https://pokeapi.co/api/v2/pokemon/742/"}],u=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="powder",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ふんじん"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"분진"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"粉塵"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Nuée de Poudre"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Pulverschleuder"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Polvo Explosivo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Pulviscoppio"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Powder"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ふんじん"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"粉尘"}],v=[],c=null,m=20,h=1,d=[],k=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"bug",url:"https://pokeapi.co/api/v2/type/7/"},F={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:t,id:i,learned_by_pokemon:r,machines:u,meta:s,name:l,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:d,super_contest_effect:k,target:_,type:f};export{x as accuracy,y as contest_combos,b as contest_effect,z as contest_type,e as damage_class,F as default,a as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,t as generation,i as id,r as learned_by_pokemon,u as machines,s as meta,l as name,g as names,v as past_values,c as power,m as pp,h as priority,d as stat_changes,k as super_contest_effect,_ as target,f as type};
