const A=100,x=null,w=null,y=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],t=[{effect:"Inflicts regular damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts regular damage with no additional effect."}],n=[{flavor_text:`ひかりの　はしらで　こうげきする。
こうげきと　とくこうを　くらべて
たかいほうで　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`빛의 기둥으로 공격한다.
공격과 특수공격을 비교해서
높은 쪽으로 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`以光柱進行攻擊。
會比較自己的攻擊和特攻，
以數值較高的一方進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur fait jaillir un pilier de lumière.
Compare l’Attaque et l’Attaque Spéciale, et utilise
celle qui infligera le plus de dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Ein Angriff mit einer Lichtsäule. Ist der Angriff höher
als der Spezial-Angriff, wird die Höhe des Schadens
durch den Angriff bestimmt und umgekehrt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario ataca con una gran columna de luz.
Compara sus valores de Ataque y Ataque Especial
para infligir daño con el más alto de los dos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Attacca il bersaglio con una colonna di luce.
Infligge danni in base all’Attacco o all’Attacco
Speciale scegliendo il più alto tra i due.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks a target with a pillar of light. This
move inflicts Attack or Sp. Atk damage—whichever
stat is higher for the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`光の　柱で　攻撃する。
攻撃と　特攻を　比べて
高いほうで　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`用光柱来进行攻击。
比较自己的攻击和特攻，
用数值相对较高的一项给予对方伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ひかりの　はしらで　こうげきする。
こうげきと　とくこうを　くらべて
たかいほうで　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`빛의 기둥으로 공격한다.
공격과 특수공격을 비교해서
높은 쪽으로 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`以光柱進行攻擊。
會比較自己的攻擊和特攻，
以數值較高的一方進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur fait jaillir un pilier de lumière.
Compare l’Attaque et l’Attaque Spéciale, et utilise
celle qui infligera le plus de dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Ein Angriff mit einer Lichtsäule. Ist der Angriff höher
als der Spezial-Angriff, wird die Höhe des Schadens
durch den Angriff bestimmt und umgekehrt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario ataca con una gran columna de luz.
Compara sus valores de Ataque y Ataque Especial
para infligir daño con el más alto de los dos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Attacca il bersaglio con una colonna di luce.
Infligge danni in base all’Attacco o all’Attacco
Speciale scegliendo il più alto tra i due.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks a target with a pillar of light. This
move inflicts Attack or Sp. Atk damage—whichever
stat is higher for the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`光の　柱で　攻撃する。
攻撃と　特攻を　比べて
高いほうで　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`用光柱来进行攻击。
比较自己的攻击和特攻，
用数值相对较高的一项给予对方伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ひかりの　はしらで　こうげきする。
こうげきと　とくこうを　くらべて
たかいほうで　ダメージを　あたえる。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`빛의 기둥으로 공격한다.
공격과 특수공격을 비교해서
높은 쪽으로 데미지를 준다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`以光柱進行攻擊。
會比較自己的攻擊和特攻，
以數值較高的一方進行攻擊。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur fait jaillir un pilier de lumière.
Compare l’Attaque et l’Attaque Spéciale, et utilise
celle qui infligera le plus de dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Ein Angriff mit einer Lichtsäule. Ist der Angriff höher
als der Spezial-Angriff, wird die Höhe des Schadens
durch den Angriff bestimmt und umgekehrt.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario ataca con una gran columna de luz. Compara
sus valores de Ataque y Ataque Especial para infligir
daño con el más alto de los dos.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Attacca il bersaglio con una colonna di luce.
Infligge danni in base all’Attacco o all’Attacco
Speciale scegliendo il più alto tra i due.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks a target with a pillar of light. This
move inflicts Attack or Sp. Atk damage—whichever
stat is higher for the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`光の　柱で　攻撃する。
攻撃と　特攻を　比べて
高いほうで　ダメージを　与える。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`用光柱来进行攻击。
比较自己的攻击和特攻，
用数值相对较高的一项给予对方伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The user attacks a target with a pillar of light. This move inflicts Attack or Sp. Atk damage—whichever stat is higher for the user.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"legends-arceus",url:"https://pokeapi.co/api/v2/version-group/24/"}},{flavor_text:"The user attacks the target with a pillar of light. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},i=722,r=[{name:"necrozma",url:"https://pokeapi.co/api/v2/pokemon/800/"},{name:"necrozma-dusk",url:"https://pokeapi.co/api/v2/pokemon/10155/"},{name:"necrozma-dawn",url:"https://pokeapi.co/api/v2/pokemon/10156/"},{name:"necrozma-ultra",url:"https://pokeapi.co/api/v2/pokemon/10157/"}],l=[],s={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="photon-geyser",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"フォトンゲイザー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"포톤가이저"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"光子噴湧"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Photo-Geyser"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Photonen-Geysir"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Géiser Fotónico"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Geyser Fotonico"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Photon Geyser"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"フォトンゲイザー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"光子喷涌"}],c=[],v=100,h=5,m=0,k=[],f=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},_={name:"psychic",url:"https://pokeapi.co/api/v2/type/14/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:t,flavor_text_entries:n,generation:p,id:i,learned_by_pokemon:r,machines:l,meta:s,name:u,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:f,target:d,type:_};export{A as accuracy,x as contest_combos,w as contest_effect,y as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,t as effect_entries,n as flavor_text_entries,p as generation,i as id,r as learned_by_pokemon,l as machines,s as meta,u as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,f as super_contest_effect,d as target,_ as type};
