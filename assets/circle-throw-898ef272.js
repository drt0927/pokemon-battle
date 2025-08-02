const b=90,x=null,w=null,P=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=null,o=[],n=[{effect:`Inflicts regular damage, then switches the target out for another of its trainer's Pokémon, selected at random.

If the target is under the effect of ingrain or suction cups, or it has a substitute, or its Trainer has no more usable Pokémon, it will not be switched out.  If the target is a wild Pokémon, the battle ends instead.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Ends wild battles.  Forces trainers to switch Pokémon."}],t=[{flavor_text:`Projette le Pokémon ennemi et le
remplace par un autre. Dans la
nature, met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The user throws the target and drags out
another Pokémon in its party.
In the wild, the battle ends.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is thrown and switched.
In the wild, a battle against a single
Pokémon ends.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par
un autre. Dans la nature, met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit,
dass ein anderes Pokémon eingewechselt wird.
Beendet Kämpfe gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga
otro Pokémon. Si es uno salvaje, acaba el
combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is thrown, and a different
Pokémon is dragged out. In the wild,
this ends a battle against a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par
un autre. Dans la nature, met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit,
dass ein anderes Pokémon eingewechselt wird.
Beendet Kämpfe gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga otro 
Pokémon. Si es uno salvaje, acaba el combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is thrown, and a different
Pokémon is dragged out. In the wild,
this ends a battle against a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`摔飛對手，
強制讓後備寶可夢上場。
對手為野生寶可夢時，戰鬥將直接結束。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par
un autre. Lors d’un combat contre un Pokémon
sauvage seul, met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit,
dass ein anderes Pokémon eingewechselt wird.
Beendet Kämpfe gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga otro 
Pokémon. Si es uno salvaje, acaba el combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target is thrown, and a different Pokémon is
dragged out. In the wild, this ends a battle against
a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`扔飞对手，强制拉后备宝可梦上场。
如果对手为野生宝可梦，
战斗将直接结束。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`摔飛對手，
強制讓後備寶可夢上場。
對手為野生寶可夢時，戰鬥將直接結束。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par
un autre. Lors d’un combat contre un Pokémon
sauvage seul, met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit,
dass ein anderes Pokémon eingewechselt wird.
Beendet Kämpfe gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga otro 
Pokémon. Si es uno salvaje, acaba el combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target is thrown, and a different Pokémon is
dragged out. In the wild, this ends a battle against
a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`扔飞对手，强制拉后备宝可梦上场。
如果对手为野生宝可梦，
战斗将直接结束。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`摔飛對手，
強制讓後備寶可夢上場。
對手為野生寶可夢時，戰鬥將直接結束。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par un autre.
Lors d’un combat contre un Pokémon sauvage seul,
met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit,
dass ein anderes Pokémon eingewechselt wird.
Beendet Kämpfe gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga otro 
Pokémon. Si es uno salvaje, acaba el combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target is thrown, and a different Pokémon is
dragged out. In the wild, this ends a battle against
a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`扔飞对手，强制拉后备宝可梦上场。
如果对手为野生宝可梦，
战斗将直接结束。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてを　なげとばして
ひかえの　ポケモンを　ひきずりだす。
やせいの　ばあいは　せんとうが　おわる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대를 내던져서
교대할 포켓몬을 끌어낸다.
야생의 경우에는 배틀이 끝난다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`摔飛對手，
強制讓後備寶可夢上場。
對手為野生寶可夢時，戰鬥將直接結束。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Projette le Pokémon ennemi et le remplace par un autre.
Lors d’un combat contre un Pokémon sauvage seul,
met fin au combat.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Schleudert das Ziel davon und bewirkt damit, dass ein
anderes Pokémon eingewechselt wird. Beendet Kämpfe
gegen wilde Pokémon.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Lanza por los aires al objetivo y hace que salga otro 
Pokémon. Si es uno salvaje, acaba el combate.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il bersaglio è scaraventato via ed è costretto
a lasciare il posto a un altro. Mette fine alle lotte
contro singoli Pokémon selvatici.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The target is thrown, and a different Pokémon is
dragged out. In the wild, this ends a battle against
a single Pokémon.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手を　投げとばして
控えの　ポケモンを　ひきずりだす。
野生の　場合は　戦闘が　終わる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`扔飞对手，强制拉后备宝可梦上场。
如果对手为野生宝可梦，
战斗将直接结束。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-v",url:"https://pokeapi.co/api/v2/generation/5/"},r=509,i=[{name:"poliwrath",url:"https://pokeapi.co/api/v2/pokemon/62/"},{name:"kangaskhan",url:"https://pokeapi.co/api/v2/pokemon/115/"},{name:"whismur",url:"https://pokeapi.co/api/v2/pokemon/293/"},{name:"buneary",url:"https://pokeapi.co/api/v2/pokemon/427/"},{name:"riolu",url:"https://pokeapi.co/api/v2/pokemon/447/"},{name:"throh",url:"https://pokeapi.co/api/v2/pokemon/538/"},{name:"pancham",url:"https://pokeapi.co/api/v2/pokemon/674/"},{name:"pangoro",url:"https://pokeapi.co/api/v2/pokemon/675/"},{name:"clobbopus",url:"https://pokeapi.co/api/v2/pokemon/852/"},{name:"tarountula",url:"https://pokeapi.co/api/v2/pokemon/917/"},{name:"spidops",url:"https://pokeapi.co/api/v2/pokemon/918/"},{name:"kangaskhan-mega",url:"https://pokeapi.co/api/v2/pokemon/10039/"}],l=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="circle-throw",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ともえなげ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"배대뒤치기"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"巴投"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Projection"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Überkopfwurf"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Llave Giro"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ribaltiro"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Circle Throw"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ともえなげ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"巴投"}],v=[],c=60,m=10,h=-6,k=[],d=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"fighting",url:"https://pokeapi.co/api/v2/type/2/"},y={accuracy:90,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:i,machines:l,meta:s,name:u,names:g,past_values:v,power:c,pp:m,priority:h,stat_changes:k,super_contest_effect:d,target:_,type:f};export{b as accuracy,x as contest_combos,w as contest_effect,P as contest_type,e as damage_class,y as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,i as learned_by_pokemon,l as machines,s as meta,u as name,g as names,v as past_values,c as power,m as pp,h as priority,k as stat_changes,d as super_contest_effect,_ as target,f as type};
