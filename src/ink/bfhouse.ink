=== bfhouse ===
Hamish's house is nice, suburban, unassuming. Suspicious.
You knock on Hamish's door. There's no response.
* [ PICK THE LOCK ]
Invest's lockpicking training comes in handy once more, and you enter the house.
The house is neat and clean; everything that Clark's apartment was not. It's a single story, with recently-watered houseplants on the windowsill.
- (houseOptions)
{Clean houses make you uncomfortable. What are they hiding?|All your instincts are alerting you that something is wrong here. This house is too clean, too perfect.|You are going to find the secret of this den of perfection, you swear it.|You've got to get out of here.}
* [ SEARCH THE TRASH ]
The chaos of the trash is more familiar to you.
In the trash, you discover an envelope from New Horizons Starport. Judging from the decorative frame, it was holding two tickets. You note down the address.
~ locations += locstarport
-> houseOptions
* [ SEARCH FOR TRAPS ]
You carefully examine the floors and walls for hidden compartments. Perhaps a tripwire that will fire a gun?
But there's nothing here.
-> houseOptions
* [ SEARCH FOR HAMISH ]
Maybe Hamish is hiding around the corner, preparing to surprise an unwary Invest®-igator.
But he's not here.
-> houseOptions
* -> leaving

= leaving
You turn to leave the house, when a crooked painting catches your eye.
player: Oh, come on, really?
You straighten the painting, and to your annoyance a hidden cabinet opens up in the wall.
player: How unimaginative.
Inside the cabinet, you find a dizzying array of weaponry. Hamish is clearly armed for all sorts of murder.
There's a pad, as well. A pad of paper. It bears the letterhead of Claretta McMahon, a fact that makes your day much worse. You hate Claretta McMahon.
~ locations += locrichass
-> map