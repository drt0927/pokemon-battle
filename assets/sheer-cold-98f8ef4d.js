const b=30,w=null,e={url:"https://pokeapi.co/api/v2/contest-effect/14/"},a={name:"beauty",url:"https://pokeapi.co/api/v2/contest-type/2/"},o={name:"special",url:"https://pokeapi.co/api/v2/move-damage-class/3/"},t=null,p=[],n=[{effect:`Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.

Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting.

The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},short_effect:"Causes a one-hit KO."}],i=[{flavor_text:`A chilling attack that
causes fainting if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ruby-sapphire",url:"https://pokeapi.co/api/v2/version-group/5/"}},{flavor_text:`A chilling attack that
causes fainting if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"emerald",url:"https://pokeapi.co/api/v2/version-group/6/"}},{flavor_text:`The foe is attacked
with ultimate cold
that causes fainting
if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"firered-leafgreen",url:"https://pokeapi.co/api/v2/version-group/7/"}},{flavor_text:`The foe is attacked
with a blast of
absolute-zero cold.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"diamond-pearl",url:"https://pokeapi.co/api/v2/version-group/8/"}},{flavor_text:`The foe is attacked
with a blast of
absolute-zero cold.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"platinum",url:"https://pokeapi.co/api/v2/version-group/9/"}},{flavor_text:`The foe is attacked
with a blast of
absolute-zero cold.
The foe instantly
faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"heartgold-soulsilver",url:"https://pokeapi.co/api/v2/version-group/10/"}},{flavor_text:`Une vague de froid glacial frappe
l’ennemi. S’il est touché, il est mis
K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with a blast of
absolute-zero cold.
The target instantly faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-white",url:"https://pokeapi.co/api/v2/version-group/11/"}},{flavor_text:`The target is attacked with a blast of
absolute-zero cold.
The target instantly faints if it hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"black-2-white-2",url:"https://pokeapi.co/api/v2/version-group/14/"}},{flavor_text:`ぜったいれいどの　つめたさで
あいてを　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`절대영도의 추위로
상대를 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi.
S’il est touché, il est mis K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:"Angriff mit Kälte, die das Ziel bei Erfolg besiegt.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ataque de frío polar que debilita al objetivo si le
alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`Ondata di freddo penetrante che, se va a segno,
fa andare KO il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`The target is attacked with a blast of
absolute-zero cold. The target faints
instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`絶対零度の　冷たさで
相手を　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"x-y",url:"https://pokeapi.co/api/v2/version-group/15/"}},{flavor_text:`ぜったいれいどの　つめたさで
あいてを　こうげきする。
あたれば　いちげきで　ひんしに　する。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`절대영도의 추위로
상대를 공격한다.
맞으면 일격에 기절한다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi.
S’il est touché, il est mis K.O. sur le coup.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:"Angriff mit Kälte, die das Ziel bei Erfolg besiegt.",language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ataque de frío polar que debilita al objetivo si le 
alcanza.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`Ondata di freddo penetrante che, se va a segno,
fa andare KO il bersaglio.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`The target is attacked with a blast of
absolute-zero cold. The target faints
instantly if this attack hits.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`絶対零度の　冷たさで
相手を　攻撃する。
当たれば　一撃で　ひんしに　する。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"omega-ruby-alpha-sapphire",url:"https://pokeapi.co/api/v2/version-group/16/"}},{flavor_text:`あいてを　いちげきで　ひんしに　する。
こおりタイプ　いがいの　ポケモンが
つかうと　あたりにくい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`상대를 일격에 기절시킨다.
얼음타입 이외의 포켓몬이
사용하면 잘 맞지 않는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`一擊讓對手陷入瀕死。
冰屬性以外的寶可夢使用時，
會比較不易命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi pour le
mettre K.O. en un coup. A peu de chances de réussir
si le lanceur ne possède pas le type Glace.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Diese Attacke führt beim Ziel sofort zum K.O. Wird
sie von einem Pokémon eingesetzt, das nicht dem
Typ Eis angehört, trifft sie seltener.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Debilita al objetivo de un solo golpe. Si lo usa un
Pokémon que no sea de tipo Hielo, es difícil que
acierte.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`Il bersaglio esaurisce i PS in un colpo solo.
Se viene usata da Pokémon che non sono di tipo
Ghiaccio, difficilmente va a segno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`The target faints instantly. It’s less likely to hit the
target if it’s used by Pokémon other than Ice types.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`相手を　一撃で　瀕死に　する。
こおりタイプ　以外の　ポケモンが
使うと　当たりにくい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`给对手一击濒死。
如果是冰属性以外的宝可梦使用，
就会难以打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sun-moon",url:"https://pokeapi.co/api/v2/version-group/17/"}},{flavor_text:`あいてを　いちげきで　ひんしに　する。
こおりタイプ　いがいの　ポケモンが
つかうと　あたりにくい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`상대를 일격에 기절시킨다.
얼음타입 이외의 포켓몬이
사용하면 잘 맞지 않는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`一擊讓對手陷入瀕死。
冰屬性以外的寶可夢使用時，
會比較不易命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi pour le
mettre K.O. en un coup. A peu de chances de réussir
si le lanceur ne possède pas le type Glace.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Diese Attacke führt beim Ziel sofort zum K.O. Wird
sie von einem Pokémon eingesetzt, das nicht dem
Typ Eis angehört, trifft sie seltener.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Debilita al objetivo de un solo golpe. Si lo usa un
Pokémon que no sea de tipo Hielo, es difícil que
acierte.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`Il bersaglio esaurisce i PS in un colpo solo.
Se viene usata da Pokémon che non sono di tipo
Ghiaccio, difficilmente va a segno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`The target faints instantly. It’s less likely to hit the
target if it’s used by Pokémon other than Ice types.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`相手を　一撃で　瀕死に　する。
こおりタイプ　以外の　ポケモンが
使うと　当たりにくい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`给对手一击濒死。
如果是冰属性以外的宝可梦使用，
就会难以打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"ultra-sun-ultra-moon",url:"https://pokeapi.co/api/v2/version-group/18/"}},{flavor_text:`あいてを　いちげきで　ひんしに　する。
こおりタイプ　いがいの　ポケモンが
つかうと　あたりにくい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`상대를 일격에 기절시킨다.
얼음타입 이외의 포켓몬이
사용하면 잘 맞지 않는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`一擊讓對手陷入瀕死。
冰屬性以外的寶可夢使用時，
會比較不易命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi pour le mettre
K.O. en un coup. A peu de chances de réussir si le lanceur
ne possède pas le type Glace.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Diese Attacke führt beim Ziel sofort zum K.O. Wird
sie von einem Pokémon eingesetzt, das nicht dem
Typ Eis angehört, trifft sie seltener.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Debilita al objetivo de un solo golpe. Si lo usa un
Pokémon que no sea de tipo Hielo, es difícil que
acierte.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`Il bersaglio esaurisce i PS in un colpo solo.
Se viene usata da Pokémon che non sono di tipo
Ghiaccio, difficilmente va a segno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`The target faints instantly. It’s less likely to hit the
target if it’s used by Pokémon other than Ice types.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`相手を　一撃で　瀕死に　する。
こおりタイプ　以外の　ポケモンが
使うと　当たりにくい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`给对手一击濒死。
如果是冰属性以外的宝可梦使用，
就会难以打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"lets-go-pikachu-lets-go-eevee",url:"https://pokeapi.co/api/v2/version-group/19/"}},{flavor_text:`あいてを　いちげきで　ひんしに　する。
こおりタイプ　いがいの　ポケモンが
つかうと　あたりにくい。`,language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`상대를 일격에 기절시킨다.
얼음타입 이외의 포켓몬이
사용하면 잘 맞지 않는다.`,language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`一擊讓對手陷入瀕死。
冰屬性以外的寶可夢使用時，
會比較不易命中對手。`,language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Une vague de froid glacial frappe l’ennemi pour
le mettre K.O. en un coup. A peu de chances de réussir
si le lanceur ne possède pas le type Glace.`,language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Diese Attacke führt beim Ziel sofort zum K.O. Wird sie
von einem Pokémon eingesetzt, das nicht dem Typ Eis
angehört, trifft sie seltener.`,language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Debilita al objetivo de un solo golpe. Si lo usa un
Pokémon que no sea de tipo Hielo, es difícil que
acierte.`,language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`Il bersaglio esaurisce i PS in un colpo solo.
Se viene usata da Pokémon che non sono di tipo
Ghiaccio, difficilmente va a segno.`,language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`The target faints instantly. It’s less likely to hit the
target if it’s used by Pokémon other than Ice types.`,language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`相手を　一撃で　瀕死に　する。
こおりタイプ　以外の　ポケモンが
使うと　当たりにくい。`,language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:`给对手一击濒死。
如果是冰属性以外的宝可梦使用，
就会难以打中。`,language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},version_group:{name:"sword-shield",url:"https://pokeapi.co/api/v2/version-group/20/"}},{flavor_text:"The target faints instantly. This move is less likely to hit the target if used by Pokémon other than Ice types.",language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},version_group:{name:"scarlet-violet",url:"https://pokeapi.co/api/v2/version-group/25/"}}],r={name:"generation-iii",url:"https://pokeapi.co/api/v2/generation/3/"},s=329,l=[{name:"dewgong",url:"https://pokeapi.co/api/v2/pokemon/87/"},{name:"lapras",url:"https://pokeapi.co/api/v2/pokemon/131/"},{name:"articuno",url:"https://pokeapi.co/api/v2/pokemon/144/"},{name:"suicune",url:"https://pokeapi.co/api/v2/pokemon/245/"},{name:"glalie",url:"https://pokeapi.co/api/v2/pokemon/362/"},{name:"spheal",url:"https://pokeapi.co/api/v2/pokemon/363/"},{name:"sealeo",url:"https://pokeapi.co/api/v2/pokemon/364/"},{name:"walrein",url:"https://pokeapi.co/api/v2/pokemon/365/"},{name:"kyogre",url:"https://pokeapi.co/api/v2/pokemon/382/"},{name:"snover",url:"https://pokeapi.co/api/v2/pokemon/459/"},{name:"abomasnow",url:"https://pokeapi.co/api/v2/pokemon/460/"},{name:"vanillite",url:"https://pokeapi.co/api/v2/pokemon/582/"},{name:"vanillish",url:"https://pokeapi.co/api/v2/pokemon/583/"},{name:"vanilluxe",url:"https://pokeapi.co/api/v2/pokemon/584/"},{name:"cubchoo",url:"https://pokeapi.co/api/v2/pokemon/613/"},{name:"beartic",url:"https://pokeapi.co/api/v2/pokemon/614/"},{name:"cryogonal",url:"https://pokeapi.co/api/v2/pokemon/615/"},{name:"kyurem",url:"https://pokeapi.co/api/v2/pokemon/646/"},{name:"chien-pao",url:"https://pokeapi.co/api/v2/pokemon/1002/"},{name:"kyurem-black",url:"https://pokeapi.co/api/v2/pokemon/10022/"},{name:"kyurem-white",url:"https://pokeapi.co/api/v2/pokemon/10023/"},{name:"abomasnow-mega",url:"https://pokeapi.co/api/v2/pokemon/10060/"},{name:"glalie-mega",url:"https://pokeapi.co/api/v2/pokemon/10074/"},{name:"kyogre-primal",url:"https://pokeapi.co/api/v2/pokemon/10077/"},{name:"vulpix-alola",url:"https://pokeapi.co/api/v2/pokemon/10103/"},{name:"ninetales-alola",url:"https://pokeapi.co/api/v2/pokemon/10104/"}],u=[],g={ailment:{name:"none",url:"https://pokeapi.co/api/v2/move-ailment/0/"},ailment_chance:0,category:{name:"ohko",url:"https://pokeapi.co/api/v2/move-category/9/"},crit_rate:0,drain:0,flinch_chance:0,healing:0,max_hits:null,max_turns:null,min_hits:null,min_turns:null,stat_chance:0},v="sheer-cold",c=[{language:{name:"ja-Hrkt",url:"https://pokeapi.co/api/v2/language/1/"},name:"ぜったいれいど"},{language:{name:"ko",url:"https://pokeapi.co/api/v2/language/3/"},name:"절대영도"},{language:{name:"zh-Hant",url:"https://pokeapi.co/api/v2/language/4/"},name:"絕對零度"},{language:{name:"fr",url:"https://pokeapi.co/api/v2/language/5/"},name:"Glaciation"},{language:{name:"de",url:"https://pokeapi.co/api/v2/language/6/"},name:"Eiseskälte"},{language:{name:"es",url:"https://pokeapi.co/api/v2/language/7/"},name:"Frío Polar"},{language:{name:"it",url:"https://pokeapi.co/api/v2/language/8/"},name:"Purogelo"},{language:{name:"en",url:"https://pokeapi.co/api/v2/language/9/"},name:"Sheer Cold"},{language:{name:"ja",url:"https://pokeapi.co/api/v2/language/11/"},name:"ぜったいれいど"},{language:{name:"zh-Hans",url:"https://pokeapi.co/api/v2/language/12/"},name:"绝对零度"}],h=[],m=null,k=5,f=0,_=[],d={url:"https://pokeapi.co/api/v2/super-contest-effect/9/"},x={name:"selected-pokemon",url:"https://pokeapi.co/api/v2/move-target/10/"},y={name:"ice",url:"https://pokeapi.co/api/v2/type/15/"},z={accuracy:30,contest_combos:null,contest_effect:e,contest_type:a,damage_class:o,effect_chance:t,effect_changes:p,effect_entries:n,flavor_text_entries:i,generation:r,id:s,learned_by_pokemon:l,machines:u,meta:g,name:v,names:c,past_values:h,power:m,pp:k,priority:f,stat_changes:_,super_contest_effect:d,target:x,type:y};export{b as accuracy,w as contest_combos,e as contest_effect,a as contest_type,o as damage_class,z as default,t as effect_chance,p as effect_changes,n as effect_entries,i as flavor_text_entries,r as generation,s as id,l as learned_by_pokemon,u as machines,g as meta,v as name,c as names,h as past_values,m as power,k as pp,f as priority,_ as stat_changes,d as super_contest_effect,x as target,y as type};
