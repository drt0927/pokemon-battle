const x=100,D=null,b=null,w=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=100,n=[],o=[{effect:"Inflicts regular damage.  Lowers the user's Defense by one stage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Lowers the user's Defense by one stage after inflicting damage."}],t=[{flavor_text:`ぜんしんの　うろこを　こすり
おおきな　おとを　だして　こうげきする。
こうげきご　じぶんの　ぼうぎょが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`전신의 비늘을 비벼서
큰 소리를 내 공격한다.
공격 후 자신의 방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`摩擦全身鱗片，
發出響亮的聲音並進行攻擊。
攻擊後自己的防禦會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Le lanceur déclenche un vacarme en frottant
ses écailles les unes contre les autres pour
attaquer. Baisse la Défense du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender erzeugt durch das Rasseln mit seinen
Schuppen ein lautes Geräusch und greift an.
Anschließend sinkt seine Verteidigung.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Frota todas las escamas de su cuerpo para crear un
fuerte sonido con el que ataca. Cuando el ataque
termina, su Defensa se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa attacca il bersaglio con un suono
fortissimo che genera sfregando le scaglie del corpo.
Dopo aver attaccato, la sua Difesa diminuisce.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user rubs the scales on its entire body and
makes a huge noise to attack the opposing Pokémon.
The user’s Defense stat goes down after the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`全身の　うろこを　こすり
大きな　音を　出して　攻撃する。
攻撃後　自分の　防御が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`摩擦全身鳞片，
发出响亮的声音进行攻击。
攻击后自己的防御会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ぜんしんの　うろこを　こすり
おおきな　おとを　だして　こうげきする。
こうげきご　じぶんの　ぼうぎょが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`전신의 비늘을 비벼서
큰 소리를 내 공격한다.
공격 후 자신의 방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`摩擦全身鱗片，
發出響亮的聲音並進行攻擊。
攻擊後自己的防禦會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur déclenche un vacarme en frottant
ses écailles les unes contre les autres pour
attaquer. Baisse la Défense du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender erzeugt durch das Rasseln mit seinen
Schuppen ein lautes Geräusch und greift an.
Anschließend sinkt seine Verteidigung.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Frota todas las escamas de su cuerpo para crear un
fuerte sonido con el que ataca. Cuando el ataque
termina, su Defensa se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa attacca il bersaglio con un suono
fortissimo che genera sfregando le scaglie del corpo.
Dopo aver attaccato, la sua Difesa diminuisce.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user rubs the scales on its entire body and
makes a huge noise to attack the opposing Pokémon.
The user’s Defense stat goes down after the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`全身の　うろこを　こすり
大きな　音を　出して　攻撃する。
攻撃後　自分の　防御が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`摩擦全身鳞片，
发出响亮的声音进行攻击。
攻击后自己的防御会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ぜんしんの　うろこを　こすり
おおきな　おとを　だして　こうげきする。
こうげきご　じぶんの　ぼうぎょが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`전신의 비늘을 비벼서
큰 소리를 내 공격한다.
공격 후 자신의 방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`摩擦全身鱗片，
發出響亮的聲音並進行攻擊。
攻擊後自己的防禦會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur déclenche un vacarme en frottant
ses écailles les unes contre les autres pour
attaquer. Baisse la Défense du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender erzeugt durch das Rasseln mit seinen
Schuppen ein lautes Geräusch und greift an.
Anschließend sinkt seine Verteidigung.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Frota todas las escamas de su cuerpo para crear un
fuerte sonido con el que ataca. Cuando el ataque
termina, su Defensa se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca il bersaglio con un suono
fortissimo che genera sfregando le scaglie del corpo.
Dopo aver attaccato, la sua Difesa diminuisce.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user rubs the scales on its entire body and
makes a huge noise to attack the opposing Pokémon.
The user’s Defense stat goes down after the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`全身の　うろこを　こすり
大きな　音を　出して　攻撃する。
攻撃後　自分の　防御が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`摩擦全身鳞片，
发出响亮的声音进行攻击。
攻击后自己的防御会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ぜんしんの　うろこを　こすり
おおきな　おとを　だして　こうげきする。
こうげきご　じぶんの　ぼうぎょが　さがる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`전신의 비늘을 비벼서
큰 소리를 내 공격한다.
공격 후 자신의 방어가 떨어진다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`摩擦全身鱗片，
發出響亮的聲音並進行攻擊。
攻擊後自己的防禦會降低。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur déclenche un vacarme en frottant
ses écailles les unes contre les autres pour attaquer.
Baisse la Défense du lanceur.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender erzeugt durch das Rasseln mit seinen
Schuppen ein lautes Geräusch und greift gegnerische
Pokémon an. Anschließend sinkt seine Verteidigung.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Frota todas las escamas de su cuerpo para crear un
fuerte sonido con el que ataca. Cuando el ataque
termina, su Defensa se ve reducida.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca il bersaglio con un suono
fortissimo che genera sfregando le scaglie del corpo.
Dopo aver attaccato, la sua Difesa diminuisce.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user rubs the scales on its entire body and makes
a huge noise to attack opposing Pokémon.
The user’s Defense stat goes down after the attack.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`全身の　うろこを　こすり
大きな　音を　出して　攻撃する。
攻撃後　自分の　防御が　さがる。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`摩擦全身鳞片，
发出响亮的声音进行攻击。
攻击后自己的防御会降低。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat goes down after the attack.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat is lowered after the attack.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],s={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},p=691,r=[{name:"kommo-o",url:"https://pokeapi.co/api/v2/pokemon/784/"},{name:"kommo-o-totem",url:"https://pokeapi.co/api/v2/pokemon/10146/"}],u=[],i={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+raise",url:"https://pokeapi.co/api/v2/move-category/7/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:100},l="clanging-scales",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"スケイルノイズ"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"스케일노이즈"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"鱗片噪音"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Vibrécaille"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Schuppenrasseln"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Fragor Escamas"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Clamorsquame"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Clanging Scales"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"スケイルノイズ"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"鳞片噪音"}],c=[],v=110,h=5,m=0,k=[{change:-1,stat:{name:"defense",url:"https://pokeapi.co/api/v2/stat/3/"}}],f=null,d={name:"all-opponents",url:"https://pokeapi.co/api/v2/move-target/11/"},_={name:"dragon",url:"https://pokeapi.co/api/v2/type/16/"},y={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:n,effect_entries:o,flavor_text_entries:t,generation:s,id:p,learned_by_pokemon:r,machines:u,meta:i,name:l,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:f,target:d,type:_};export{x as accuracy,D as contest_combos,b as contest_effect,w as contest_type,e as damage_class,y as default,a as effect_chance,n as effect_changes,o as effect_entries,t as flavor_text_entries,s as generation,p as id,r as learned_by_pokemon,u as machines,i as meta,l as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,f as super_contest_effect,d as target,_ as type};
