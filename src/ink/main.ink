INCLUDE intro.ink
INCLUDE crime_scene.ink
INCLUDE map.ink
INCLUDE regular.ink
INCLUDE apartment.ink
INCLUDE pad.ink
INCLUDE tatos.ink
INCLUDE victim_work.ink
INCLUDE bfhouse.ink
INCLUDE estelles.ink
INCLUDE mansion.ink
INCLUDE streetmeet.ink
INCLUDE disc.ink
INCLUDE nova.ink
INCLUDE starport.ink
INCLUDE starlight.ink

VAR victim_home = false
LIST knowledge = DnaTest, Disc, DancerSaidWas, BodyConstructedFromDna, LockedComputer, Hamish, MeetingWithAleksei
// for convenience, to see all locs:
//LIST locations = (loccrimescene), (loctatos), (locestelles), (locvictimhome), (locvictimwork), (locregular), (locbfhouse), (locrichass), (locstreet), (locnova), (locstarport)
LIST locations = (loccrimescene), loctatos, locestelles, locvictimhome, locvictimwork, locregular, locbfhouse, locrichass, locstreet, locdisc, locnova, locstarport
LIST messages = VictimWorkLocation, CrackedComputer, Disc
VAR unread_messages = ()
~ unread_messages = messages()

-> intro ->

-> END