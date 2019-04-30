=== crime_scene ===

The body of Clark Newton lies on the sidewalk. His clothes are stained with blood.

* [CHECK HIS POCKET]
-> pockets

* [TALK TO SOMEONE IN THE CROWD]
-> bystander

+ [LEAVE]
-> map


=== pockets ===
You find in his pockets his ID card. A man with blonde hair and sharp clothes looks back at you.

{knowledge ? DnaTest:
  player: Well, Clark, I can see why they needed a DNA test. Even your mother wouldn't recognize you like this.
- else:
  player: Well, Clark, they must have done a DNA test on you because I don't think even your mother would recognize you like this.
}

{ locations ? locregular : 
Just to be sure, you run his credit yourself. You get the same results as the cops -- nothing notable other than the tab at The Regular.
- else:
You find his credit chit, and use your Invest app to run a check. The results are largely useless, but a tab at The Regular catches your eye; worth checking out later.
}
~ locations += locregular
-> crime_scene

=== bystander ===
gal: Yeah, I saw him fall out of a taxi.

player: Any information on that taxi?

gal: I don't know! It all happened so fast.
gal: He was falling and I looked back and the car was gone!

-> crime_scene

