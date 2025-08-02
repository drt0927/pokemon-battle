const x=100,b=null,y=null,w=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],t=[{effect:"Inflicts damage, and the user takes damage equal to half of its max HP, rounded up. The user still takes damage if the move is blocked by Protect or Substitute, misses, or if the target has Flash Fire.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Inflicts damage, and the user takes damage equal to half of its max HP, rounded up."}],n=[{flavor_text:`じぶんの　あたまを　ばくはつ　させて
まわりの　すべてを　こうげきする。
じぶんも　ダメージを　うけてしまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`자신의 머리를 폭발시켜
주위의 모든 것을 공격한다.
자신도 데미지를 받는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`會讓自己的頭爆炸，
來攻擊周遭的一切。
自己也會受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Le lanceur fait exploser sa tête pour attaquer
toutes les cibles autour de lui.
Il subit aussi des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender greift alle Pokémon in der Umgebung
an, indem er seinen Kopf explodieren lässt. Dabei
verletzt er sich auch selbst.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario hace explotar su cabeza para atacar a
todos los Pokémon que se hallan a su alrededor,
aunque también se hiere a sí mismo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa fa esplodere la propria testa per
attaccare tutti i Pokémon che ha intorno,
ma subisce danni.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user attacks everything around it by causing its
own head to explode. This also damages the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`自分の　頭を　爆発　させて
周りの　すべてを　攻撃する。
自分も　ダメージを　受けてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`让自己的头爆炸，
来攻击周围的一切。
自己也会受到伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`じぶんの　あたまを　ばくはつ　させて
まわりの　すべてを　こうげきする。
じぶんも　ダメージを　うけてしまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`자신의 머리를 폭발시켜
주위의 모든 것을 공격한다.
자신도 데미지를 받는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`會讓自己的頭爆炸，
來攻擊周遭的一切。
自己也會受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur fait exploser sa tête pour attaquer
toutes les cibles autour de lui.
Il subit aussi des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender greift alle Pokémon in der Umgebung
an, indem er seinen Kopf explodieren lässt. Dabei
verletzt er sich auch selbst.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario hace explotar su cabeza para atacar a
todos los Pokémon que se hallan a su alrededor,
aunque también se hiere a sí mismo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa fa esplodere la propria testa per
attaccare tutti i Pokémon che ha intorno,
ma subisce danni.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user attacks everything around it by causing its
own head to explode. This also damages the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`自分の　頭を　爆発　させて
周りの　すべてを　攻撃する。
自分も　ダメージを　受けてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`让自己的头爆炸，
来攻击周围的一切。
自己也会受到伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`じぶんの　あたまを　ばくはつ　させて
まわりの　すべてを　こうげきする。
じぶんも　ダメージを　うけてしまう。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`자신의 머리를 폭발시켜
주위의 모든 것을 공격한다.
자신도 데미지를 받는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`會讓自己的頭爆炸，
來攻擊周遭的一切。
自己也會受到傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur fait exploser sa tête pour attaquer
toutes les cibles autour de lui.
Il subit aussi des dégâts.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender greift alle Pokémon im Umkreis an,
indem er seinen Kopf explodieren lässt. Dabei verletzt
er sich auch selbst.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario hace explotar su cabeza para atacar a todos
los Pokémon que se hallan a su alrededor, aunque
también se hiere a sí mismo.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa fa esplodere la propria testa per
attaccare tutti i Pokémon che ha intorno,
ma subisce danni.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user attacks everything around it by causing its
own head to explode. This also damages the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`自分の　頭を　爆発　させて
周りの　すべてを　攻撃する。
自分も　ダメージを　受けてしまう。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`让自己的头爆炸，
来攻击周围的一切。
自己也会受到伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=720,s=[{name:"blacephalon",url:"https://pokeapi.co/api/v2/pokemon/806/"}],i=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},l="mind-blown",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ビックリヘッド"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"깜짝헤드"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"驚爆大頭"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Caboche-Kaboum"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Knallkopf"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Cabeza Sorpresa"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Sbalorditesta"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Mind Blown"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ビックリヘッド"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"惊爆大头"}],c=[],v=150,h=5,m=0,k=[],_=null,d={name:"all-other-pokemon",url:"https://pokeapi.co/api/v2/move-target/9/"},f={name:"fire",url:"https://pokeapi.co/api/v2/type/10/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:t,flavor_text_entries:n,generation:p,id:r,learned_by_pokemon:s,machines:i,meta:u,name:l,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,b as contest_combos,y as contest_effect,w as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,t as effect_entries,n as flavor_text_entries,p as generation,r as id,s as learned_by_pokemon,i as machines,u as meta,l as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
