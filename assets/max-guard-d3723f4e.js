const y=null,w=null,x=null,b=null,e={name:"status",url:"https://pokeapi.co/api/v2/move-damage-class/1/"},a=null,t=[],n=[{effect:`No moves will hit the user for the remainder of this turn.  If the user is last to act this turn, this move will fail.

If the user successfully used detect, endure, protect, quick guard, or wide guard on the last turn, this move has a 50% chance to fail.

lock on, mind reader, and no guard provide a (100 – accuracy)% chance for moves to break through this move.  This does not apply to one-hit KO moves (fissure, guillotine, horn drill, and sheer cold); those are always blocked by this move.

thunder during rain dance and blizzard during hail have a 30% chance to break through this move.

The following effects are not prevented by this move:

* acupressure from an ally
* curse's curse effect
* Delayed damage from doom desire and future sight; however, these moves will be prevented if they are used this turn
* feint, which will also end this move's protection after it hits
* imprison
* perish song
* shadow force
* Moves that merely copy the user, such as transform or psych up

This move cannot be selected by assist or metronome.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Prevents any moves from hitting the user this turn."}],o=[{flavor_text:`あいての　こうげきを
まったく　うけない。
れんぞくで　だすと　しっぱい　しやすい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대의 공격을
전혀 받지 않는다.
연속으로 쓰면 실패하기 쉽다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`完全防住對手的所有攻擊。
連續使用時容易失敗。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Le lanceur se protège de toutes les attaques.
Peut échouer si utilisée plusieurs fois de suite.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Anwender wehrt jede Attacke ab. Scheitert eventuell
bei Wiederholung.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Frena todos los ataques, pero puede fallar si se usa
repetidamente.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Permette di eludere tutti gli attacchi.
Se usata in successione può fallire.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`This move enables the user to protect itself from
all attacks. Its chance of failing rises if it is used
in succession.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手の　攻撃を
まったく　受けない。
連続で　だすと　失敗しやすい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`完全抵挡
对手的攻击。
连续使出则容易失败。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}}],s={name:"generation-viii",url:"https://pokeapi.co/api/v2/generation/8/"},r=743,i=[],p=[],l={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"unique",url:"https://pokeapi.co/api/v2/move-category/13/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},u="max-guard",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ダイウォール"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"다이월"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"極巨防壁"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Gardomax"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Dyna-Wall"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Maxibarrera"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Dynabarriera"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Max Guard"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ダイウォール"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"极巨防壁"}],g=[],h=null,m=10,v=4,d=[],f=null,_={name:"user",url:"https://pokeapi.co/api/v2/move-target/7/"},k={name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},z={accuracy:null,contest_combos:null,contest_effect:null,contest_type:null,damage_class:e,effect_chance:a,effect_changes:t,effect_entries:n,flavor_text_entries:o,generation:s,id:r,learned_by_pokemon:i,machines:p,meta:l,name:u,names:c,past_values:g,power:h,pp:m,priority:v,stat_changes:d,super_contest_effect:f,target:_,type:k};export{y as accuracy,w as contest_combos,x as contest_effect,b as contest_type,e as damage_class,z as default,a as effect_chance,t as effect_changes,n as effect_entries,o as flavor_text_entries,s as generation,r as id,i as learned_by_pokemon,p as machines,l as meta,u as name,c as names,g as past_values,h as power,m as pp,v as priority,d as stat_changes,f as super_contest_effect,_ as target,k as type};
