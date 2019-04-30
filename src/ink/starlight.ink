=== starlight ===

The shuttle zooms off towards a large, bulbous spaceship. Shuttles and people dart here and there like cleaner fish, preparing the whale-like spaceship to launch.

The shuttle pulls up to a landing that reads "Section D".

You push past all the passengers saying their goodbyes. Technicians race by going over checklists.

Finally. Cabin D-437.

-> cabindoor1

= cabindoor1

+ [KNOCK]
No answer.
-> cabindoor2

+ [BURST IN]
-> burst

= cabindoor2

+ [KNOCK AGAIN]
Still no answer.
-> cabindoor3

+ [BURST IN]
-> burst

= cabindoor3
+ [BURST IN]
-> burst

= burst

You burst through the door to find a blaster pointed in your face.

clark: Hamish, no! Please!

hamish: It's ok, honey.

You now see in front of you the confirmation you've been searching for. Clark Newton is still alive.

player: That's right, Clark. Everything is totally fine.

Hamish's eyes narrow.

hamish: Did Claretta send you?! 

player: Can you please set the gun down? I'm not here to hurt you.

hamish: Not before I search you.
hamish: Clark, take the blaster. If she does anything sudden, pull the trigger.

Clark shakingly takes the blaster and points it at you with determination.

Hamish pats you down and pulls out your Invest® issued pistol.

Hamish: Oh these are cute. They only turn them on during an investigation, then turn them off when you're off the clock.

Hamish: I'm going to guess this is active, yes?

You nod.

Hamish takes the gun back from Clark.

hamish: Alright, I'll put this away for now.

Hamish holsters his gun and places yours on a table next to the couch Clark has collapsed into.

hamish: Can we talk now?

Hamish motions to a chair.

VAR star_stand = false

+ [ SIT DOWN ] Hamish smiles and sits next to Clark.
-> converse1


+ [ STAY STANDING ] You stay standing.
Hamish stands between you and Clark.
~ star_stand = true
-> converse1

= converse1

An announcement cuts through the ship.

shipwoman: Preparations for launch complete. All non-passengers must depart in 5 minutes.

player: Clark, your mother is really worried about you.

clark$: Clark scoffs.

clark: She must have been the one who hired you! Trust me, if she wanted me around she could have kept me around.

hamish: Olivia isn't the biggest fan of me.
hamish: She thinks I'm corrupting her perfect son.

clark: That's why we're doing this. Running away, I mean.
clark: I just want to go off to some moon, grow some crops and spend time with my husband.

hamish: That's all we want. To be left alone.

{ star_stand: 
+ [ SIT DOWN ]
Hamish sits down next to Clark.
}

-> converse2

= converse2

player: Is that why you faked your own murder?

hamish: This just landed in our lap.

clark: Hamish has had to make a lot of sacrifices to get us here.

hamish: Do you know how expensive it is to get passage on one of these things?

player: Worth more than an arm and a leg I suppose.

clark$: Clark smiles at that.

clark: Was the body convincing at all?

+ [ Something was off about it. ]
player: I knew something was wrong, but couldn't quite put my finger on it.
clark: Ah well, it was enough to trick Claretta hopefully.
-> converse3

+ [ Only realized once I saw the plans. ]
player: It wasn't until I saw your plans that I made the connection.
clark: Wow! Should I be proud of that?
hamish: You did great, honey.
clark$: Clark smiles at Hamish.
-> converse3

= converse3

player: So that's it? You're just going to fly off and hope nobody notices?

hamish: That's up to you.
hamish: If you report that Clark is still alive, then that means Claretta didn't get what she wanted.

clark: If she finds out, they'll hunt us down and get double what they want without paying.
clark: Buuuuut you could report back to my mother that I am truly dead by way of Claretta McMahon.

player: Won't that send your mother to seek out Hamish for revenge?

clark: She's a coward. Claretta's family owns part of my father's company, so she can't really come after us.

player: What if I lie and Claretta finds out?

hamish: The plan is not without risk to you. To sweeten the deal, you're free to pawn off the stuff in our homes.

A knock taps on the door and shortly after a woman's head pokes in.

shipwoman: Hi, can I see your registration?

Hamish hands over a data disc and the woman slips it into her pad.

shipwoman: Misters Haggard, thank you!
shipwoman: And you?

player: I, uhh, was just leaving.

shipwoman: If you aren't registered I must escort you out.
  -> map