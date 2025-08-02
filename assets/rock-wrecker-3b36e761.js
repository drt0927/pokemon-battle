const b=90,w=null,y=null,e={name:"tough",url:"https://pokeapi.co/api/v2/contest-type/5/"},a={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},o=null,n=[],t=[{effect:'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User foregoes its next turn to recharge."}],r=[{flavor_text:`The user launches a
huge boulder at the
foe to attack.
It must rest on the
next turn, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The user launches a
huge boulder at the
foe to attack.
It must rest on the
next turn, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The user launches a
huge boulder at the
foe to attack.
It must rest on the
next turn, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Le lanceur attaque en projetant un
gros rocher sur l’ennemi. Il doit se
reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user launches a huge boulder at the
target to attack. It must rest on the
next turn, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user launches a huge boulder at the
target to attack. It must rest on the
next turn, however.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher sur
l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero
tiene que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user launches a huge boulder at the
target to attack.
The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher sur
l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero 
tiene que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user launches a huge boulder at the
target to attack.
The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向對手發射
巨大的岩石進行攻擊。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher sur
l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero 
tiene que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user launches a huge boulder at the target to
attack. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`向对手发射
巨大的岩石进行攻击。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向對手發射
巨大的岩石進行攻擊。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher sur
l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero 
tiene que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user launches a huge boulder at the target to
attack. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`向对手发射
巨大的岩石进行攻击。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向對手發射
巨大的岩石進行攻擊。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher
sur l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero 
tiene que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user launches a huge boulder at the target to
attack. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`向对手发射
巨大的岩石进行攻击。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`きょだいな　いわを
あいてに　はっしゃして　こうげきする。
つぎの　ターンは　うごけなく　なる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`거대한 바위를
상대에게 발사하여 공격한다.
다음 턴은 움직일 수 없게 된다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向對手發射
巨大的岩石進行攻擊。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur attaque en projetant un gros rocher
sur l’ennemi. Il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender wirft einen riesigen Felsen auf das Ziel.
In der nächsten Runde muss der Anwender ruhen.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Lanza una piedra enorme contra el objetivo, pero tiene
que descansar el siguiente turno.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca il bersaglio con un enorme
masso, ma si deve riposare al turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user launches a huge boulder at the target to
attack. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`巨大な　岩を
相手に　発射して　攻撃する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`向对手发射
巨大的岩石进行攻击。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user launches a huge boulder at the target to attack. The user can't move on the next turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user launches a huge boulder at the target to attack. The user can't move on the next turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-iv",url:"https://pokeapi.co/api/v2/generation/4/"},u=439,s=[{name:"rhyperior",url:"https://pokeapi.co/api/v2/pokemon/464/"},{name:"dwebble",url:"https://pokeapi.co/api/v2/pokemon/557/"},{name:"crustle",url:"https://pokeapi.co/api/v2/pokemon/558/"}],i=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},g="rock-wrecker",v=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"がんせきほう"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"암석포"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"岩石炮"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Roc-Boulet"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Felswerfer"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Romperrocas"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Devastomasso"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Rock Wrecker"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"がんせきほう"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"岩石炮"}],c=[],h=150,m=5,k=0,_=[],f={url:"https://pokeapi.co/api/v2/super-contest-effect/22/"},d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},x={name:"rock",url:"https://pokeapi.co/api/v2/type/6/"},j={accuracy:90,contest_combos:null,contest_effect:null,contest_type:e,damage_class:a,effect_chance:o,effect_changes:n,effect_entries:t,flavor_text_entries:r,generation:p,id:u,learned_by_pokemon:s,machines:i,meta:l,name:g,names:v,past_values:c,power:h,pp:m,priority:k,stat_changes:_,super_contest_effect:f,target:d,type:x};export{b as accuracy,w as contest_combos,y as contest_effect,e as contest_type,a as damage_class,j as default,o as effect_chance,n as effect_changes,t as effect_entries,r as flavor_text_entries,p as generation,u as id,s as learned_by_pokemon,i as machines,l as meta,g as name,v as names,c as past_values,h as power,m as pp,k as priority,_ as stat_changes,f as super_contest_effect,d as target,x as type};
