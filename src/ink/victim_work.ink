=== victim_work ===
PentaCorp's five main offices each have their own aesthetic. This one, the Bioengineering Division, has wide doorways and Corinthian pillars. It strikes you as arrogant; these people are playing God and they know it.
Security is likely to be tight.
- (approach)
* [APPROACH THE FRONT DOOR] -> frontdoor
* [GO AROUND BACK] -> backdoor
* [TAKE THE HIGH ROAD] -> highroad

= frontdoor
You walk forward to the guard at the front door. He regards you cooly.
- (guard_convo)
* (greet) [Hello there!]
player: Hello there!
guard: Hi? -> guard_convo
* [I need to get in here.]
player: I need to get in here.
* [WALK PAST HIM]
You walk past the guard, looking confident, like you belong here.
guard$: The guard moves to stand in your way.
- guard: You got a badge?
* [SHOW HIM YOUR INVEST PAD] You show him your Invest® datapad. You present it very officially, like it's your official badge. Which it is, sort of.
* [I'm with the cops.] player: I'm with the cops. The five-oh. The fuzz. That's me.
* [Don't you recognize me?] player: Don't you recognize me? I used to work here. We got coffee every Wednesday.
- guard$: The guard stares at you.
You sigh, and transfer him a bribe.
{ 
  - greet: guard: Good luck with whatever.
  - else: guard$: The guard casually moves out of your way.
}
-> lobby

= backdoor
You creep around to the back of the building. There's some sort of exhaust pipe, and a large metal door.
- (backdoorChoice)
* [CLIMB THROUGH THE PIPE]
You look at the pipe, see the weird biohazard ooze leaking out of it, and decide not to do that. -> backdoorChoice
* (door) [TRY THE DOOR]
The door is locked. -> backdoorChoice
* {door} [PICK THE LOCK]
Thankfully, Invest provides access to monthly lockpicking seminars for reasonable prices. This door is short work for someone of your skills. 
-> lab

= highroad
The garage next door has an open roof, and you've got a bad idea.
Several flights of stairs later, you're standing at the edge of the parking garage roof, looking at the gap between the buildings. It's not that large...
* (jumped) [JUMP ACROSS] You eye the gap carefully, then take a running leap. You land awkwardly on PentaCorp's roof, and find that the door has been left unlocked. 
-> business
* [NEVERMIND] On second thought, screw that. You go back down the stairs. -> approach

= lobby
{ The lobby of the PentaCorp Bioengineering Division is large and decorated with marble statues. The statues depict various athletes in peak condition; marvels of the human form.|You return to the lobby. <> }
- (lobbyChoices)
{It's extremely unsettling.|The statues are still there. Still creepy.|You try to convince yourself that those statues are still in the same place as the last time you saw them.|You ignore the statues.}
* [ CHECK THE RECEPTIONIST'S COMPUTER ] -> lobbyComputer
+ [ HEAD TO THE LAB ] -> lab
+ [ HEAD UPSTAIRS TO THE BUSINESS OFFICE] -> business
+ [ LEAVE ] You pass by the guard on your way out. <> {
  -frontdoor: 
    He nods at you.
  -else: 
    He looks bewildered as you quickly walk past.
  }-> map

= lobbyComputer
You walk behind the desk, and access the receptionist's computer. You're suprised to find it unlocked.
  - (computer)
  * [LOOK UP CLARK'S PROFILE]
  Clark's profile on HRWeb loads up. He has a recent warning -- he snuck a guest on-site without getting it approved. 
  {
    -!(locations ? locvictimhome): 
      You note down his address.
      ~ locations += locvictimhome
  }
  -> computer
  * [SEARCH EMAILS FOR CLARK'S NAME]
  You find a conversation between the receptionist (James, apparently) and Clark. They were dating at the time. Seems like the breakup was amicable.
  player: Pretty unprofessional to use work email for this conversation, guys. -> computer
  + [DONE] You log out and walk back in front of the desk. -> lobbyChoices

= lab
{ The centerpiece of the Bioengineering Division's lab is their BioPrinter - an enormous CNC machine capable of printing and carving organic matter.|You return to the lab. }
- (labChoice)
* [ SEARCH THE MACHINE ]
You carefully examine the BioPrinter. There's some visible residue; you think it's been used recently.
You look at the control panel. Without the auth codes, you can't tell the details, but you can tell that the last command involved reconstructing a DNA sample.
~ knowledge += BodyConstructedFromDna
-> labChoice
+ [ HEAD UP FRONT TO THE LOBBY ] -> lobby
+ { backdoor } [LEAVE] You go out through the back door. -> map

= business
{ You enter the business office, where the Bioengineering Division sales group works. There are rows of cubicles.|You return to the rows of cubicles in the business office. }
- (businessChoices)
* (search1) [ SEARCH FOR SOMETHING ]
You try to find something of interest, but it's just sales stuff. -> businessChoices
* (search2) {search1} [ SURELY THERE'S SOMETHING HERE ]
You really would assume that you could find SOMETHING. But you don't. -> businessChoices
* {search1} {search2} [ PONDER THE NATURE OF SALESMANSHIP ]
You take a moment to think about the nature of sales and marketing. Are they to blame for capitalism, or are they just cogs in that larger machine? Either way, there's nothing for you here. -> businessChoices
+ [ HEAD DOWN TO THE LOBBY ] -> lobby
+ {jumped} [ LEAVE ] You go back out to the roof, and make another running leap back to the garage. -> map