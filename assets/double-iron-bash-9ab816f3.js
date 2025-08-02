const x=100,b=null,w=null,y=null,e={name:"physical",url:"https://pokeapi.co/api/v2/move-damage-class/2/"},a=30,o=[],n=[{effect:"Inflicts regular damage.  Hits twice in one turn.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Hits twice in one turn."}],t=[{flavor_text:`むねの　ナットを　じくに　かいてんして
２かい　つづけて　うでを　たたきつける。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`가슴의 너트를 축으로 회전시켜
2번 연속 팔로 힘껏 친다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`以胸口的螺帽為軸心旋轉，
連續２次揮動手臂痛擊對手。
有時會使對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Le lanceur fait pivoter l’écrou de sa poitrine deux fois
d’affilée pour frapper l’adversaire avec ses bras.
Peut apeurer l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Der Anwender rotiert um die Schraubenmutter in seinem
Brustkorb und schlägt zweimal hintereinander mit den
Armen zu. Das Ziel schreckt eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Usando la tuerca del pecho como eje, el usuario gira
sobre sí mismo y golpea con los brazos dos veces
seguidas. Puede hacer retroceder al rival.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Chi la usa attacca il bersaglio due volte ruotando su se
stesso e colpendolo con le braccia. Può anche farlo
tentennare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The user rotates, centering the hex nut in its chest,
and then strikes with its arms twice in a row. This may
also make the target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`胸の　ナットを　軸に　回転して
２回　続けて　うでを　たたきつける。
相手を　ひるませる　ことが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`以胸口的螺帽为中心旋转，
并连续２次挥动手臂打击对手。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`むねの　ナットを　じくに　かいてんして
２かい　つづけて　うでを　たたきつける。
あいてを　ひるませる　ことが　ある。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`가슴의 너트를 축으로 회전시켜
2번 연속 팔로 힘껏 친다.
상대를 풀죽게 만들 때가 있다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`以胸口的螺帽為軸心旋轉，
連續２次揮動手臂痛擊對手。
有時會使對手畏縮。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur fait pivoter l’écrou de sa poitrine deux fois
d’affilée pour frapper l’adversaire avec ses bras.
Peut apeurer l’ennemi.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Der Anwender rotiert um die Schraubenmutter in
seinem Brustkorb und schlägt zweimal hintereinander
mit den Armen zu. Das Ziel schreckt eventuell zurück.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Usando la tuerca del pecho como eje, gira sobre sí
mismo y golpea con los brazos dos veces seguidas.
Puede amedrentar al rival.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Chi la usa attacca il bersaglio due volte ruotando su se
stesso e colpendolo con le braccia. Può anche farlo
tentennare.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The user rotates, centering the hex nut in its chest,
and then strikes with its arms twice in a row. This may
also make the target flinch.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`胸の　ナットを　軸に　回転して
２回　続けて　うでを　たたきつける。
相手を　ひるませる　ことが　ある。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`以胸口的螺帽为中心旋转，
并连续２次挥动手臂打击对手。
有时会使对手畏缩。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],p={name:"generation-vii",url:"https://pokeapi.co/api/v2/generation/7/"},r=742,s=[{name:"melmetal",url:"https://pokeapi.co/api/v2/pokemon/809/"}],i=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"damage",url:"https://pokeapi.co/api/v2/move-category/0/"},crit_rate:0,drain:0,flinch_chance:30,healing:0,max_hits:2,max_turns:null,min_hits:2,min_turns:null,stat_chance:0},u="double-iron-bash",g=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ダブルパンツァー"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"더블펀처"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"鋼拳雙擊"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Écrous d’Poing"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Panzerfäuste"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Ferropuño Doble"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Pugni Corazzati"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Double Iron Bash"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ダブルパンツァー"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"钢拳双击"}],c=[],v=60,h=5,m=0,k=[],_=null,d={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},f={name:"steel",url:"https://pokeapi.co/api/v2/type/9/"},z={accuracy:100,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:o,effect_entries:n,flavor_text_entries:t,generation:p,id:r,learned_by_pokemon:s,machines:i,meta:l,name:u,names:g,past_values:c,power:v,pp:h,priority:m,stat_changes:k,super_contest_effect:_,target:d,type:f};export{x as accuracy,b as contest_combos,w as contest_effect,y as contest_type,e as damage_class,z as default,a as effect_chance,o as effect_changes,n as effect_entries,t as flavor_text_entries,p as generation,r as id,s as learned_by_pokemon,i as machines,l as meta,u as name,g as names,c as past_values,v as power,h as pp,m as priority,k as stat_changes,_ as super_contest_effect,d as target,f as type};
