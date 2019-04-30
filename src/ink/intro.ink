=== intro ===
You arrive at the scene of the crime. As rain taps against the windscreen of the car, your pad lights up with information about the victim.

-> pad_intro

=== pad_intro ===

Three icons glow on the pad.

+ [CLIENT MESSAGE]
  The pad beeps, and a recorded message plays. 
  invest: Thank you for using Invest, the world's only peer to peer investigation service.
  invest: Your Investor today is Olivia Newton.
  invest: Please pay close attention to the following message from your Investor. Remember, a successful investigation is a successful investment!
  olivia: I don't know how this works, exactly. Do I just say what happened?
  Olivia looks anxious. There are obvious signs of recent tears on her face, but her eyes look hard and angry.
  olivia: My son, Clark, it feels like just yesterday he moved out... He's so bright, you know. Demi said he's the best engineer PentaCorp has ever hired.
  olivia: They said they found his body on some sidewalk. Couldn't even recognize his face... they had to use DNA to identify him.
  ~ knowledge += DnaTest
  Olivia breaks into sobs for a moment, then regains control.
  olivia: The police aren't going to find who did this. Clark's case is going to sit there, growing cold while cops waste their time slinging speeding tickets.
  olivia: That's why I'm using Invest. Once you've found them... I'll take it from there.
  The message fades to the Invest logo.
  -> pad_intro
+ [SUBJECT INFORMATION]
  Clark Newton. Twenty-six years old. Engineer for PentaCorp. Deceased.
  -> intro2
+ [SUBMIT REPORT]
  You're not ready to submit a report yet, you haven't even seen the body!
  -> pad_intro

=== intro2 ===
You step out of your car and see a crowd of people trying to get a view of the crime scene. Police officers keep the crowd from getting too close. One of the officers recognizes you and waves you past.

cop: They're waiting for you.

A few detectives stand around a body while hovering drones shine lights down on the catwalk. A squad car hovers nearby spouting radio chatter.

officer: Are you the contractor?

player: Yeah, here's my ID card.

The officer swipes your card.

officer: Alright, thanks. We're done here. Good luck with all this, I guess.

The officers begin climbing into their squad car. Drones swoop back to their docking ports.

* player: Anything you can tell me about this guy? Nothing?
  officer: *sigh* Look. I'll send you the report on this guy our computer spit out. That's really all we have. Ok?
  Well that's something.
  Most of the time the police will swipe your credentials and rush off as fast as possible. They don't want to get tangled up once a contractor is involved.
  The report is mostly useless, but in the credit section, a tab at The Regular catches your eye. You'll have to check that out later.
  ~ locations += locregular
  -> crime_scene
* player: You're just going to leave? Typical.
  officer: Sorry, buddy. We got real police work to do.
  You wave him off. All he's trying to do is keep out of any mess this could turn into.
  A contractor getting called in means somebody with money is involved, and if you don't have any money of your own that's a good way to find out what your life is worth.
  -> crime_scene