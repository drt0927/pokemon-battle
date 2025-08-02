const y=null,b=null,e={url:"https://pokeapi.co/api/v2/contest-effect/1/"},a={name:"cool",url:"https://pokeapi.co/api/v2/contest-type/1/"},o={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},n=null,p=[{effect_entries:[{effect:"Inflicts normal-type damage.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"}}],version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{effect_entries:[{effect:"The user receieves 1/2 of the damage dealt in recoil.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"}}],version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}}],t=[{effect:`Inflicts typeless regular damage.  User takes 1/4 its max HP in recoil.  Ignores accuracy and evasion modifiers.

This move is used automatically when a Pokémon cannot use any other move legally, e.g., due to having no PP remaining or being under the effect of both encore and torment at the same time.

This move's recoil is not treated as recoil for the purposes of anything that affects recoil, such as the ability rock head.  It also is not prevented by magic guard.

This move cannot be copied by mimic, mirror move, or sketch, nor selected by assist or metronome, nor forced by encore.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"User takes 1/4 its max HP in recoil."}],r=[{flavor_text:`Used only if all
PP are exhausted.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"gold-silver",url:"https://pokeapi.co/api/v2/version-group/3/"}},{flavor_text:`Used only if all
PP are exhausted.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"crystal",url:"https://pokeapi.co/api/v2/version-group/4/"}},{flavor_text:`Used only if all PP are gone.
Also hurts the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`Used only if all PP are gone.
Also hurts the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`An attack that is
used only if there
is no PP. It also
hurts the user.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`An attack that is
used in desperation
only if the user has
no PP. It also hurts
the user slightly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`An attack that is
used in desperation
only if the user has
no PP. It also hurts
the user slightly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`An attack that is
used in desperation
only if the user has
no PP. It also hurts
the user slightly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Une attaque désespérée, lancée
quand le lanceur n’a plus de PP.
Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`An attack that is used in desperation
only if the user has no PP. It also hurts
the user slightly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`An attack that is used in desperation
only if the user has no PP. It also hurts
the user slightly.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Angriff nur bei verbrauchten AP.
Anwender verletzt sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Solo se usa como último recurso al acabarse los
PP. Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`An attack that is used in desperation
only if the user has no PP. This also
damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Angriff nur bei verbrauchten AP.
Anwender verletzt sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Solo se usa como último recurso al acabarse los PP. 
Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`An attack that is used in desperation
only if the user has no PP. This also
damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`在自己的ＰＰ耗盡時，
努力掙扎攻擊對手。
自己也會受到少許傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Angriff nur bei verbrauchten AP. Anwender verletzt
sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Solo se usa como último recurso al acabarse los PP. 
Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`This attack is used in desperation only if the user
has no PP. It also damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`当自己的ＰＰ耗尽时，
努力挣扎攻击对手。
自己也会受到少许伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`在自己的ＰＰ耗盡時，
努力掙扎攻擊對手。
自己也會受到少許傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Angriff nur bei verbrauchten AP. Anwender verletzt
sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Solo se usa como último recurso al acabarse los PP. 
Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`This attack is used in desperation only if the user
has no PP. It also damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`当自己的ＰＰ耗尽时，
努力挣扎攻击对手。
自己也会受到少许伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`在自己的PP耗盡時，
努力掙扎攻擊對手。
自己也會受到少許傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Angriff nur bei verbrauchten AP. Anwender verletzt
sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Solo se usa como último recurso al acabarse los PP. 
Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`This attack is used in desperation only if the user
has no PP. It also damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`当自己的PP耗尽时，
努力挣扎攻击对手。
自己也会受到少许伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`じぶんの　ＰＰが　なくなると
あがいて　あいてを　こうげきする。
じぶんも　すこし　ダメージを　うける。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`자신의 PP가 떨어지면
발버둥 쳐 상대를 공격한다.
자신도 조금 데미지를 입는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`在自己的ＰＰ耗盡時，
努力掙扎攻擊對手。
自己也會受到少許傷害。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Une attaque désespérée, utilisée quand le lanceur
n’a plus de PP. Le blesse aussi légèrement.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Angriff nur bei verbrauchten AP. Anwender verletzt
sich selbst leicht.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Solo se usa como último recurso al acabarse los PP. 
Hiere un poco al agresor.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Mossa da usare solo in caso estremo, quando
non si hanno più PP. Danneggia anche chi la usa.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`This attack is used in desperation only if the user
has no PP. It also damages the user a little.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`自分の　ＰＰが　なくなると
あがいて　相手を　攻撃する。
自分も　少し　ダメージを　受ける。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`当自己的ＰＰ耗尽时，
努力挣扎攻击对手。
自己也会受到少许伤害。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],s={name:"generation-i",url:"https://pokeapi.co/api/v2/generation/1/"},i=165,u=[],l=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:0,healing:-25,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="struggle",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"わるあがき"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"발버둥"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"掙扎"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Lutte"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Verzweifler"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Forcejeo"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Scontro"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Struggle"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"わるあがき"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"挣扎"}],h=[{accuracy:null,effect_chance:10,effect_entries:[],power:null,pp:null,type:null,version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}}],m=50,k=1,_=0,f=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/5/"},P={name:"random-opponent",url:"https://pokeapi.co/api/v2/move-target/8/"},x={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},A={accuracy:null,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:n,effect_changes:p,effect_entries:t,flavor_text_entries:r,generation:s,id:i,learned_by_pokemon:u,machines:l,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:_,stat_changes:f,super_contest_effect:d,target:P,type:x};export{y as accuracy,b as contest_combos,e as contest_effect,a as contest_type,o as damage_class,A as default,n as effect_chance,p as effect_changes,t as effect_entries,r as flavor_text_entries,s as generation,i as id,u as learned_by_pokemon,l as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,_ as priority,f as stat_changes,d as super_contest_effect,P as target,x as type};
