=== mansion ===

You makie your way through the massive steel gates by flashing your Invest® datapad at the personal guard detail. A moving walkway takes you through the grounds, and you finally arrive at the large wooden doors to the McMahon mansion.

- (frontdoor)
* [KNOCK POLITELY] You quietly tap on the front door, barely making a sound. There's no response. -> frontdoor
* [USE THE INTERCOM] After a few seconds you hear a quiet, well-spoken man start to speak.
    bentley: Hello miss, what can we do for you today?
    You introduce yourself and your business.
    player: I'm looking into the murder of Clark Newton, I'm to understand that you had some business with his partner Hamish?
    You hear a booming voice which draws your eyes to the spectacularly dressed lady standing centered on the staircase at the back of this large entrance hall.
    clarreta: Ah, you wish to know about Hamish, then?
* (servantName) [THROW THE DOOR OPEN] You burst in through the unlocked door and are immediately caught off-guard by a spectacularly dressed lady with a booming voice.
    clarreta: Ah, Bentley, we're greeted by an Invest®-igator. Let me guess, you'd like to ask me about Hamish Castle?

- clarreta: He's a wonderfully diligent employee. No hesitation, no matter how messy.
    clarreta: Yes, he's one of my best entertainers.
    It's quite clear she's implying that Hamish is a hitman.
    player: And his boyfriend, Clark Newton? What is he to you?
    clarreta: Oh, just another client. Someone overburdened with something I want, and with a great need for something I have.
    clarreta$: Claretta locks eyes with you.
    clarreta: Money!

- (questioning)
* [CLARK'S DEATH] player: Well, I'm afraid your client has been murdered.
    clarreta: Now, now, investigator. I'M afraid I'm going to have to make it clear that this isn't exactly murder. 
    clarreta: Mr. Newton chose to take his own life. My only role was providing funds in exchange for some entertainment.
    clarreta: And that, you'll find, isn't a crime.
  -> questioning
* [MONEY] player: And where is the money going? Clark sure as hell isn't using it himself.
    clarreta: Clark actually had an interesting use for his funds. Normally people just leave it to their loved ones.
    clarreta: But I'm afraid I can't disclose that! It would be very disrespectful to my client.
  -> questioning
* [CLARRETA] player: And what's in it for you?
    clarreta: Honestly? I just enjoy the look in people's eyes when they've decided there's something more important to them than their life.
    clarreta: And the subsequent looks when I explain to them quite how much it's going to hurt them in the process. 
  -> questioning
* {questioning > 1} [I'm done with this conversation.]player: I'm done with this conversation.
-> exiting

- (exiting)

{ servantName: Bentley | The servant } rushes to escort you back out the front doors. 
He whispers in your ear as you leave.
bentley: Meet me at the corner of 5th and Wyatt in 30 minutes. I have something interesting for you.
// Here we meet a truly shitty human being who has more money than God. We learn about how she kills people for kicks, but it's fine because they're properly compensated. She should mention the way that Clark was killed.

// The money is going to a third party which she won't disclose.

// You get politely asked to leave. As you leave a servant tells you to meet them at street corner.
~ locations += locstreet

-> map