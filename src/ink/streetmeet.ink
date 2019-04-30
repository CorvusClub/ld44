=== streetmeet ===

You arrive at the scheduled time to meet with { mansion.servantName: Bentley | Clarreta's servant }. 
And you wait. 
But nothing seems to be happening. 

-(standing)
* [TACO STAND] You order a taco from the Taco Stand. It's a little light on the meat.
  -> standing
* [PRETZEL STAND] You order a pretzel from the Pretzel Stand. It's a little too hard for your taste.
  -> standing
* [HOT DOG STAND] You order a hot dog from the Hot Dog Stand. It's incredible, high quality meat, a fresh warm bun and the perfect amount of sauce.
  You go back to complement the vendor, but he's gone. Then you notice that the napkin also contains a small disc in an enclosure. This must have been what { mansion.servantName: Bentley | Clarreta's servant } wanted you to see.
  -> leaving
* [CHICKEN STAND] You order some chicken from the Chicken Stand. It's not bad, you've had better, but { tatos.chicken : it's much better than Tato's chicken. | you've definitely had worse. }
  -> standing

= leaving
{ standing > 2: You're now a few pounds heavier than when you entered, but <>}
{ standing > 2: y| Y}ou've got what you came here for. You should take a look at it on your pad.
~ knowledge += Disc
~ unread_messages += Disc
-> map
// Meet with servant who gives you a data disc with financial info you need.

// You should take a look at this on your pad.