const x=100,w=null,z=null,y=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User foregoes its next turn to recharge."}],t=[{flavor_text:`プリズムの　ちからで　きょうりょくな
こうせんを　はっしゃする。
つぎの　ターンは　うごけなくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`프리즘의 힘으로 강력한
광선을 발사한다.
다음 턴은 움직일 수 없다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用稜鏡的力量發射強烈光線。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur utilise la puissance d’un prisme
pour envoyer un laser destructeur, mais il doit
se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender feuert mithilfe von Prisma-Kraft
mächtige Lichtstrahlen ab. In der nächsten Runde
kann er nicht handeln.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario utiliza un prisma para emitir un rayo de
gran potencia, pero no puede moverse en el turno
siguiente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa proietta dei potenti raggi di luce
grazie alla potenza del suo prisma, ma non
può agire nel turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user shoots powerful lasers using the power of
a prism. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`プリズムの　力で　強力な
光線を　発射する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`用棱镜的力量发射强烈光线。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`プリズムの　ちからで　きょうりょくな
こうせんを　はっしゃする。
つぎの　ターンは　うごけなくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`프리즘의 힘으로 강력한
광선을 발사한다.
다음 턴은 움직일 수 없다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用稜鏡的力量發射強烈光線。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur utilise la puissance d’un prisme
pour envoyer un laser destructeur, mais il doit
se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender feuert mithilfe von Prisma-Kraft
mächtige Lichtstrahlen ab. In der nächsten Runde
kann er nicht handeln.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario utiliza un prisma para emitir un rayo de
gran potencia, pero no puede moverse en el turno
siguiente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa proietta dei potenti raggi di luce
grazie alla potenza del suo prisma, ma non
può agire nel turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user shoots powerful lasers using the power of
a prism. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`プリズムの　力で　強力な
光線を　発射する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用棱镜的力量发射强烈光线。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`プリズムの　ちからで　きょうりょくな
こうせんを　はっしゃする。
つぎの　ターンは　うごけなくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`프리즘의 힘으로 강력한
광선을 발사한다.
다음 턴은 움직일 수 없다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用稜鏡的力量發射強烈光線。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur utilise la puissance d’un prisme pour envoyer
un laser destructeur, mais il doit se reposer au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender feuert mithilfe von Prisma-Kraft
mächtige Lichtstrahlen ab. In der nächsten Runde
kann er nicht handeln.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario utiliza un prisma para emitir un rayo de
gran potencia, pero no puede moverse en el turno
siguiente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa proietta dei potenti raggi di luce
grazie alla potenza del suo prisma, ma non
può agire nel turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user shoots powerful lasers using the power of
a prism. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`プリズムの　力で　強力な
光線を　発射する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用棱镜的力量发射强烈光线。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`プリズムの　ちからで　きょうりょくな
こうせんを　はっしゃする。
つぎの　ターンは　うごけなくなる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`프리즘의 힘으로 강력한
광선을 발사한다.
다음 턴은 움직일 수 없다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用稜鏡的力量發射強烈光線。
下一回合自己將無法動彈。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur utilise la puissance d’un prisme pour envoyer
un laser destructeur, mais il doit se reposer
au tour suivant.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender feuert mithilfe von Prisma-Kraft mächtige
Lichtstrahlen ab. In der nächsten Runde kann er nicht
handeln.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario utiliza un prisma para emitir un rayo de
gran potencia, pero no puede moverse en el turno
siguiente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa proietta dei potenti raggi di luce
grazie alla potenza del suo prisma, ma non
può agire nel turno successivo.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user shoots powerful lasers using the power of
a prism. The user can’t move on the next turn.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`プリズムの　力で　強力な
光線を　発射する。
次の　ターンは　動けなくなる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用棱镜的力量发射强烈光线。
下一回合自己将无法动弹。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=711,u=[{name:"necrozma",url:"https://pokeapi.co/api/v2/pokemon/800/"},{name:"necrozma-dusk",url:"https://pokeapi.co/api/v2/pokemon/10155/"},{name:"necrozma-dawn",url:"https://pokeapi.co/api/v2/pokemon/10156/"},{name:"necrozma-ultra",url:"https://pokeapi.co/api/v2/pokemon/10157/"}],i=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="prismatic-laser",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"プリズムレーザー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"프리즘레이저"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"稜鏡鐳射"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Laser Prisme"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Prisma-Laser"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Láser Prisma"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Prismalaser"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Prismatic Laser"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"プリズムレーザー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"棱镜镭射"}],v=[],c=160,m=10,h=0,k=[],_=null,f={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},d={name:"psychic",url:"https://pokeapi.co/api/v2/type/14/"},H={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:u,machines:i,meta:s,name:l,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:k,super_contest_effect:_,target:f,type:d};export{x as accuracy,w as contest_combos,z as contest_effect,y as contest_type,e as damage_class,H as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,u as learned_by_pokemon,i as machines,s as meta,l as name,g as names,v as past_values,c as power,m as pp,h as priority,k as stat_changes,_ as super_contest_effect,f as target,d as type};
