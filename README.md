Qvortrup
========

An online implementation of a board game published in Dagbladet Information on May 31st 2014.

We have implemented one minor rule change compared to the print version: To get out of solitary confinement, you will need to roll 5 or 6 using a single dice instead of getting at least one 6 from a roll of three dice (they have [similar probabilities](http://www.edcollins.com/backgammon/diceprob.htm)).


Configuration
=============

Fields
------

* **0-49** Regular fields on the board.
* **50-51** Special fields: Solitary confinement and infirmary, respectively.
* **52-54** Destiny fields.


Event types
-----------

* **move** Move the player forward or backward after displaying a message.
* **wait** Make the player wait for one or more turns before she is able to roll the dice again.
* **special** Move the player to one of the special fields on the board.


Credits
=======

* **Idea, rules, and words:** Kristian Villesen
* **Illustration:** Mia Mottelson
* **Code:** Morten Wulff
