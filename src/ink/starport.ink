=== starport ===

A large man stands behind a service desk and smiles at you.

starportman: How can I help you?

* [ ASK ABOUT A RESERVATION FOR HAMISH OR CLARK ] player: Do you have any reservations for a Hamish Castle or Clark Newton?
  -> hamishreserve

* { nova and hamishreserve } [ ASK ABOUT A RESERVATION FOR EVAN AND DAVID HAGGARD]
  -> haggardhamish

* { nova and not hamishreserve } [ ASK ABOUT A RESERVATION FOR EVAN AND DAVID HAGGARD]
  -> haggard

+ [LEAVE]
  -> map

=== hamishreserve ===

starportman: Hmm...
starportman: I don't see any reservations under those names, sorry.

player: Damn. Thanks.

+ [LEAVE]
  -> map

=== haggardhamish ===

starportman: Oh, it's you again! Look, I really wasn't supposed to tell you about that earlier.

player: I understand, but I really need to check two more names. It'll be the last time you'll see me.
player: Please?
You slip the man a credit chit.

starportman: Fine. What's the name this time?

player: Evan or David Haggard.

starportman: Well this time you're in luck. They're on the Starlight Line. Cabin D-437.

player: Yes! Thank you.

You turn to hail a shuttle.

starportman: You better hurry, the Starlight is looking to leave tonight!
starportman: Also, that's the last time!

You hop into a shuttle and direct it to the Starlight Line. Section D.

-> starlight

=== haggard ===

player: Do you have a reservation for a Evan or David Haggard?

starportman: Hmm, yes. They're on the Starlight Line. Cabin D-437.
starportman: Do you want me to forward a call to your pad?

player: No thank you. I just wanted to make sure they made it in time before the ship left.

starportman: These colony ships usually require passengers to be ready at least days in advance, but your friends barely made it!
starportman: The Starlight should be leaving tonight.
starportman: You did say you were friends, right?

player: I should be going.

You hail a shuttle to take you to the Starlight Line. Section D.

-> starlight