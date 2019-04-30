VAR drinksConsumed = 0
=== regular ===
= enter_bar
The Regular is a faux-Western bar on the west side of town. Judging from the size of Clark's tab here, he must have been a frequent patron.
You look a little out of place. It seems many of the patrons are dressing the part, with obnoxious ten-gallon hats and leather vests.
bartender: Getcha something to drink, pardner?
This place really is a dive.
player: Sure, I'll have an Outworld Lemongrass.
bartender: We got whiskey and beer.
- (drink)
{ drinksConsumed > 2 : 
  bartender: You've had plenty to drink, pardner.
  ~ drinksConsumed += 1
  -> patrons 
}
+ [WHISKEY]
You order the whiskey and sit down with it at a nearby table. It's smooth, and {tastes of cedar and cashews|tastes of oak and vanilla|warms your heart}.
~ drinksConsumed += 1
-> patrons
+ [BEER]
 You order the beer and sit down with it at a nearby table. It's {bitter, but refreshing|cold and nice|delicious}.
 ~ drinksConsumed += 1
-> patrons
* [ASK ABOUT CLARK]
  You show the bartender Clark's ID.
  player: Have you seen this man?
  bartender: 'Course! He drinks here pretty regular. Always whiskey. 
  {
    -!(locations ? locvictimhome):
      You flash your Invest® datapad, to show the bartender you're here on business.
      player: You've got his credit, right? I'm going to need you to send me his address.
      bartender: Sure, alright.
      ~ locations += locvictimhome
  }
  bartender: What's your drink? -> drink
+ [NEVERMIND] You'll just go without. You sit down at a nearby table.
-> patrons

= patrons
You look around at the people around you. A folksy country tune fills the air.
* [A DANCER TO THE RIGHT] -> dancer
* [A COUPLE ARGUING TO THE LEFT] -> arguing_couple
+ {drinksConsumed < 4} [THE BARTENDER] -> bartender
+ [LEAVE] You pay the bartender and leave.
-> map

= dancer
You approach the dancer as the song winds down.
player: You've got quite the moves.
dancer: Thanks! You new in town? Haven't seen you 'round these parts before. -> dancerPrompt
= dancerPrompt
* {dancerPrompt == 1} [DANCE]
player: I'm new here, but maybe you could teach me a thing or two?
You dance together. It's a fast, energetic song. You're tired, but, for a moment, happy. -> dancerPrompt
* [QUESTION]
player: Do you know this man?
You show the dancer the ID photo of Clark.
dancer: Sure, he's brought a few dates here. Though he never brought his last partner 'round here. Guess he was embarassed or something.
player: Why would he be embarassed?
dancer: Of this place, I mean. Sounded like it was gettin' serious, and maybe he didn't want to show his corny Western side? 
~ knowledge += DancerSaidWas
-> dancerHack
* { knowledge ? DancerSaidWas } [You said "was"?]
player: You said "was", just now. It "was" getting serious. Why past tense?
dancer: Oh, uh. Well... You know. You come in here with all yer fancy ID pictures and stuff. I just assumed he's dead and that's why you're here and all.
dancer: I'd better get home.
The dancer leaves, and you return to your seat. -> patrons
* {CHOICE_COUNT() > 0} [LEAVE] -> patrons

= dancerHack
-> dancerPrompt

= arguing_couple
A couple argues lightheartedly over drinks.
couple_lady: Come on! How much do you think your life is worth? I've got to be at least 2 million.
couple_man: It's just really macabre! I don't want to even think about my own death, let alone what some rich asshole would pay for it.
couple_lady: How about you? What's your life worth?
* [Not much] player: Life's cheap. 
-> clark
* [1k] player: One thousand, two hundred and fifteen dollars. Last I checked.
* [100k] player: A hundred grand, at least.
* [1 million] player: We're both in the millions club.
* [10 million] player: I am a 10 million dollar woman and I will not hear otherwise.
* [Priceless] player: Life is precious. It's impossible to put a value on it, if you ask me. 
-> clark
- couple_man: Ugh, can we go drinking one night without talking about death? Between you and Clark it's all I ever hear about.
- player: Clark?
- (clark)
You show the couple Clark's ID.
player: Have you seen this man before?
couple_lady: Oh yes, he drinks here all the time.
You see her look at you, then back at the ID.
couple_lady: Or I guess he used to. He must have found out how much he's worth after all.
couple_man: Aw, man. He was talking about getting his sweetheart off world, but I didn't think...
player: He died for the money?
couple_lady: I think it's not our place to speculate on something like this. I'd like to drink alone now, please.
You return to your seat. <> -> patrons

= bartender
{ drinksConsumed < 3: bartender: Another drink for ya? } -> drink
