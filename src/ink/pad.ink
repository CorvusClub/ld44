=== pad ===

Some icons glow on the pad.

+ {messages ? CrackedComputer} [MESSAGE FROM ESTELLE]
  estelle: You should head over here as soon as you can. You're going to want to see what's on this computer.
  ~ unread_messages -= CrackedComputer
  -> pad

+ {messages ? VictimWorkLocation} [SYSTEM MESSAGE]
  invest: Thanks for choosing Invest! We have finished processing your request for additional details.
  invest: Clark Newton worked in NovaCorp's Bioengineering Division. The address of the office has been transferred to your pad.
  ~ locations += locvictimwork
  ~ unread_messages -= VictimWorkLocation
  -> pad

+ [CLIENT MESSAGE]
  The pad beeps, and a recorded message plays. 
  olivia: I don't know how this works, exactly. Do I just say what happened?
  Olivia looks anxious. There are obvious signs of recent tears on her face, but her eyes look hard and angry.
  olivia: My son, Clark, it feels like just yesterday he moved out... He's so bright, you know. Demi said he's the best engineer PentaCorp has ever hired.
  olivia: They said they found his body on some sidewalk. Couldn't even recognize his face... they had to use DNA to identify him.
  ~ knowledge += DnaTest
  Olivia breaks into sobs for a moment, then regains control.
  olivia: The police aren't going to find who did this. Clark's case is going to sit there, growing cold while cops waste their time slinging speeding tickets.
  olivia: That's why I'm using Invest. Once you've found them... I'll take it from there.
  The message fades to the Invest logo.
  -> pad

+ [SUBJECT INFORMATION]
  Clark Newton. Twenty-six years old. Engineer for PentaCorp. Deceased.
  -> intro2

+ { knowledge ? Disc } [LOAD DISC]
  ~ unread_messages -= Disc
  -> disc

+ [CHOOSE A DESTINATION]
-> map

+ {crime_scene} [SUBMIT REPORT]-> submit_report

= submit_report
  invest: Once you've submitted your Invest® Incident Report, we will be unable to accept further alterations.
  invest: Are you sure that you're prepared to certify the contents of your statement?
  + [NEVERMIND]-> pad
  + [CONFIRM]
  invest: Please stand by. We are assembling a series of questions, carefully tailored by our patented Invest® Facts of the Case algorithm.
  - invest: Who died?
  + (sayClarkDied) { !(knowledge ? BodyConstructedFromDna) } [Clark Newton.]
  + (sayClarkDiedLie) { knowledge ? BodyConstructedFromDna } [ Clark Newton. (Lie)]
  + (sayClarkLived) { knowledge ? BodyConstructedFromDna } [ A fake body made to appear to be Clark Newton.]
  - invest: Who killed them?
  + (saySuicide) [It was suicide.]
  + (sayHamishKilled) { knowledge ? Hamish } [Hamish Castle.]
  + (sayClarretaKilled) { locations ? locrichass } [Claretta McMahon.]
  - invest: Why were they killed?
  + (sayKilledByLover) [A jealous lover.]
  + (sayKilledToGetOffworld) {nova && !starlight} [For money so that Hamish can get off world.]
  + (sayKilledToGetOffworldLie) {starlight} [For money so that Hamish can get off world. (Lie)]
  + (sayKilledToGetOffworldTogether) {starlight} [For money to get Hamish and Clark Newton off world together.]
  - invest: Thank you for using Invest®. Your Investor will review your report soon, and then their investment will be transferred to you immediately!
  You listen to the rain tap against the windscreen of your car, and think about the nature of consequences.
  Some day, you'll find out what happened to those people. But tonight, you'd rather just sleep.
  Thanks for playing!

