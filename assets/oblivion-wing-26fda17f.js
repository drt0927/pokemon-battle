const b=100,x=null,H=null,P=null,e={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},a=null,o=[],n=[{effect:"Deals regular damage.  Drains 75% of the damage inflicted to heal the user.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Drains 75% of the damage inflicted to heal the user."}],p=[{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou
égal à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Der Anwender raubt dem Ziel KP.
Die Höhe der Heilung beträgt mehr als die Hälfte
des beim Ziel angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`El usuario absorbe energía del Pokémon
objetivo y aumenta sus PS en una cantidad
igual o superior a la mitad del daño infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The user absorbs its target’s HP.
The user’s HP is restored by over half
of the damage taken by the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou
égal à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Der Anwender raubt dem Ziel KP.
Die Höhe der Heilung beträgt mehr als die Hälfte
des beim Ziel angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`El usuario absorbe energía del Pokémon objetivo y 
aumenta sus PS en una cantidad igual o superior a 
la mitad del daño infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The user absorbs its target’s HP.
The user’s HP is restored by over half
of the damage taken by the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。　あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`從鎖定的對手身上吸取ＨＰ。
可以回復給予對手
傷害的一半以上的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou
égal à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Der Anwender raubt dem Ziel KP. Die Höhe der
Heilung beträgt mehr als die Hälfte des beim Ziel
angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`El usuario absorbe energía del objetivo y aumenta
sus PS en una cantidad igual o superior a la mitad
del daño infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The user absorbs its target’s HP. The user’s HP is
restored by over half of the damage taken by
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。　与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`从锁定的对手身上吸取ＨＰ。
回复给予对手
伤害的一半以上的ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。　あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`從鎖定的對手身上吸取ＨＰ。
可以回復給予對手
傷害的一半以上的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou
égal à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Der Anwender raubt dem Ziel KP. Die Höhe der
Heilung beträgt mehr als die Hälfte des beim Ziel
angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`El usuario absorbe energía del objetivo y aumenta
sus PS en una cantidad igual o superior a la mitad
del daño infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The user absorbs its target’s HP. The user’s HP is
restored by over half of the damage taken by
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。　与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`从锁定的对手身上吸取ＨＰ。
回复给予对手
伤害的一半以上的ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。　あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`從鎖定的對手身上吸取HP。
可以回復給予對手
傷害的一半以上的HP。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou égal
à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender raubt dem Ziel KP. Die Höhe der
Heilung beträgt mehr als die Hälfte des beim Ziel
angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`El usuario absorbe energía del objetivo y aumenta
sus PS en una cantidad igual o superior a la mitad
del daño infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user absorbs its target’s HP. The user’s HP is
restored by over half of the damage taken by
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。　与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`从锁定的对手身上吸取HP。
回复给予对手
伤害的一半以上的HP。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`ねらいを　さだめた　あいてから　ＨＰを
すいとる。　あたえた　ダメージの
はんぶんいじょう　ＨＰを　かいふくする。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`조준한 상대로부터 HP를
흡수한다. 준 데미지의
반 이상 HP를 회복한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`從鎖定的對手身上吸取ＨＰ。
可以回復給予對手
傷害的一半以上的ＨＰ。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Vole l’énergie de la cible.
Rend au lanceur un nombre de PV supérieur ou égal
à la moitié des dégâts infligés.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender raubt dem Ziel KP. Die Höhe der
Heilung beträgt mehr als die Hälfte des beim Ziel
angerichteten Schadens.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`El usuario absorbe energía del objetivo y aumenta sus
PS en una cantidad igual o superior a la mitad del daño
infligido.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa assorbe energia dal bersaglio
recuperando una quantità di PS pari a più
della metà del danno inferto.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user absorbs its target’s HP. The user’s HP is
restored by over half of the damage taken by
the target.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`ねらいを　定めた　相手から　ＨＰを
吸い取る。　与えた　ダメージの
半分以上　ＨＰを　回復する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`从锁定的对手身上吸取ＨＰ。
回复给予对手
伤害的一半以上的ＨＰ。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],r={name:"generation-vi",url:"https://pokeapi.co/api/v2/generation/6/"},t=613,i=[{name:"yveltal",url:"https://pokeapi.co/api/v2/pokemon/717/"}],l=[],u={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage+heal",url:"https://pokeapi.co/api/v2/move-category/8/"},crit_rate:0,drain:75,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},s="oblivion-wing",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"デスウイング"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"데스윙"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"死亡之翼"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Mort’Ailes"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Unheilsschwingen"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Ala Mortífera"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Ali del Fato"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Oblivion Wing"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"デスウイング"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"死亡之翼"}],v=[],c=80,h=10,m=0,d=[],k=null,_={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},y={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:p,generation:r,id:t,learned_by_pokemon:i,machines:l,meta:u,name:s,names:g,past_values:v,power:c,pp:h,priority:m,stat_changes:d,super_contest_effect:k,target:_,type:f};export{b as accuracy,x as contest_combos,H as contest_effect,P as contest_type,e as damage_class,y as default,a as effect_chance,o as effect_changes,n as effect_entries,p as flavor_text_entries,r as generation,t as id,i as learned_by_pokemon,l as machines,u as meta,s as name,g as names,v as past_values,c as power,h as pp,m as priority,d as stat_changes,k as super_contest_effect,_ as target,f as type};
