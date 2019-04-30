=== tatos ===
{! Tato's chicken is not especially good, but his connections are. He loves nothing more than to give his opinion on everything, and he's usually got some pretty good advice.}
You sit down at Tato's Chicken Shack and ponder your order.
+ [FRIED CHICKEN]-> chicken
+ [SALAD]-> salad
+ [BISCUITS] -> biscuits

= chicken
Tato brings you a basket of chicken. It's {~crispy|spicy|buttery|tough} and {~cold|warm|hot|overcooked|undercooked}.
-> ask

= salad
Tato brings you a salad. It's {~crisp|refreshing|fresh|crunchy}.
-> ask

= biscuits
Tato brings you some biscuits. They're {~warm|delicious|buttery|soft} and, as always, amazing.
-> ask

= ask
* (clark) [You ever hear of Clark Newton?]
  player: You ever hear of Clark Newton?
  tato: Newton? Son of Olivia Newton, the publisher? I heard she got her kid into PentaCorp. Dunno what division.
  -> ask
* {clark and locations ? locvictimwork} [Clark works at PentaCorp Bioengineering.]
  player: Clark works at PentaCorp Bioengineering. Know anything about it?
  tato: Ooo, spooky. That place does some experimental shit that makes me uncomfortable. They're messing around with growing people, DNA shit. No thanks.
  -> ask
* {locations ? locrichass} [You know anything about Claretta McMahon?]
  player: You know anything about Claretta McMahon?
  tato: Only that she's the worst.
  tato: She's involved in some of that black market snuff shit. She's supposed to love to see desperate people do desperate things.
  tato: God I wish the cops weren't useless.
  -> ask
* {locations ? locnova} [Anything to know about Nova Colony Solutions?]
  player: Anything to know about Nova Colony Solutions?
  tato: They trick desperate people into spending an absurd amount of money to get offworld.
  tato: Dunno how anyone affords that. They'd have to spend their life saving up for it.
  -> ask
+ [LEAVE]-> map

// TODO: THIS!