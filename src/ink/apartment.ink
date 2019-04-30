=== apartment ===
Clark's apartment is a high-end luxury suite. Engineering must pay well.
{knowledge ? DnaTest:Olivia|Clark's mother} gave Invest an access code to his apartment, so you use that to enter.
Inside, you find a mess. Your first instinct is that someone has broken in and searched the place, but on further examination you realize Clark is just sloppy.
Clothes are scattered on the floor and a ten-gallon hat is balanced precariously on an obviously-disused vacuum.
- (searchApartment)
* [SEARCH THE CLOTHES]
You search the clothes, looking for things left in pockets.
{
  -!(locations ? locregular):
    You find his credit chit, and use your Invest app to run a check. The results are largely useless, but a tab at The Regular catches your eye; worth checking out later.
    ~ locations += locregular
}
You notice that not all the clothes here are the same size. Someone else has left clothing here -- jeans and t-shirts. His sigificant other, perhaps?
-> searchApartment
* [SEARCH THE COMPUTER]
You attempt to access Clark's computer, but it's locked. You'll need to find someone to break into this for you. Maybe Estelle?
~ knowledge += LockedComputer
-> searchApartment
+ [LEAVE]
-> map