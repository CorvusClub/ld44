=== estelles ===
You send Estelle Misery a message to let her know you're on your way. {!She never answers her door otherwise.}
You knock, and Estelle opens the door for you.
{
  - firstVisit: -> nextVisit
  - else: -> firstVisit
}

= firstVisit
estelle: What?
You grin and hug your friend. She's the best hacker you've ever worked with, and a good friend as well.
player: It's been too long!
estelle$: She turns around and wanders back to her computer.
-> computer

= nextVisit
estelle$: She brings you over to her computer.
-> computer

- (computer)
* [How's life?]
  player: How's life?
  estelle: Oh, you know. Spending every day slaving away under the yoke of capitalism, desperately trying to make art in a world that only wants productivity.
  player: Yeah, same. -> computer
* (searchClark) {!(knowledge ? LockedComputer)} [Know anything about Clark Newton?]
  player: Know anything about Clark Newton?
  estelle$: Estelle shrugs.
  player: He's a dead guy I'm looking into.
  estelle: Don't think so. I could do some searches for you, if you want?
  player: That would be amazing. Thanks! -> computer
+ {!(knowledge ? LockedComputer) and searchClark} [Any luck on that search?]
  player: Any luck on that search?
  estelle: I haven't found anything yet. I'll let you know when I do. -> computer
* {knowledge ? LockedComputer} [Can you unlock a computer for me?]-> clarkComputerUnlockRequest
* {messages ? CrackedComputer} [You've cracked Clark's computer?]-> clarkComputerSuccess
+ [LEAVE]-> map

VAR mapCountWhenComputerUnlockRequest = 0
= clarkComputerUnlockRequest
  {
    -searchClark: 
      player: I've got access to Clark's apartment, but his computer's locked. <>
    -else: 
      player: There's a dead guy I'm looking into. Clark Newton. I've got access to his apartment, but the computer's locked. <>
  }
  Can you get me in?
  estelle: Sure, no problem. I'll send a message to your pad when I'm in.
  ~ mapCountWhenComputerUnlockRequest = map
  -> computer

= clarkComputerSuccess
  player: You've cracked Clark's computer?
  estelle: Yup. Dude kept detailed notes. Check this out.
  estelle$: She angles a monitor to show it to you.
  There are schematics for some sort of genetic project. Estelle taps a few keys, and a 3D diagram of a person pops up. You look at his face.
  player: That's Clark!
  ~ knowledge += BodyConstructedFromDna
  estelle: Pretty creepy to have a detailed model of your own body, huh?
  estelle$: Estelle moves over to let you search the computer.
  - (clarkComputer)
  * [SEARCH CONTACTS]
  You open his contacts section. His most frequent contact is one Hamish Castle, whose address you note down. The notes section is filled with heart icons, so you presume this is the boyfriend. Otherwise, it's his mother, and work.
  ~ locations += locbfhouse
  ~ knowledge += Hamish
  -> clarkComputer
  * [SEARCH CALENDAR]
  Clark has a meeting scheduled with an Aleksei in a couple hours. One which he presumably won't be making it to. No details about where, or who this Aleksei is.
  ~ knowledge += MeetingWithAleksei
  -> clarkComputer
  + [DONE]
  You head outside. -> map