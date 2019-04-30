=== map ===
{ map == 1 :
~ locations += (loctatos, locestelles)
You ponder your next options. Tato, of Chicken Shack fame, is usually a good source, or there's your friend Estelle. {locations ? locregular: Or you could check out that bar, The Regular.}
}
You head back to your car. What would you like to do?
{map == 3 : 
  ~ messages += VictimWorkLocation
  ~ unread_messages += VictimWorkLocation
}
{estelles.clarkComputerUnlockRequest and (map - mapCountWhenComputerUnlockRequest == 2) :
  ~ messages += CrackedComputer
  ~ unread_messages += CrackedComputer
}



+ { locations ? locvictimwork } [VISIT THE VICTIM'S OFFICE]
  -> victim_work

+ { locations ? locvictimhome } [VISIT THE VICTIM'S APARTMENT]
  -> apartment

+ { locations ? locregular } [VISIT THE REGULAR]
  -> regular

+ { locations ? locbfhouse } [VISIT THE BOYFRIEND'S HOUSE]
  -> bfhouse

* { locations ? locrichass } [VISIT THE MCMAHON MANSION]
  -> mansion

* { locations ? locstreet } [MEET WITH THE MCMAHON'S SERVANT]
  -> streetmeet

* { locations ? locnova } [GO TO UNIVERSAL NOVA COLONY SOLUTIONS]
  -> nova

+ { locations ? locstarport } [GO TO THE STARPORT]
  -> starport

+ [TATO'S CHICKEN SHACK]
  -> tatos

+ [ESTELLE'S]
  ->estelles

+ [CHECK YOUR PAD]
  -> pad