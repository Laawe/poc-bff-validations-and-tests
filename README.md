# POC : BFF design pattern, validations and tests

This is a POC that I wanted to do because at work I have done it but not from scratch so I wanted to make what sometimes is necessary to build apps.

From understanding this particular design pattern, which is BFF (Back for Front), not only make a folder call `server`.
Why is used for and in which cases is good for your project.
So basically I did understand that it could make things easier for UI. Make the "hard job" in server side. Decouple, you know?

Also I wasn't reeeally aware on how to connect UI with a BFF, in this POC I got to do that using Node and Express.

Then I was having a cool funny router and an axios call to that endpoint in UI, and everything was great, but I thought that maybe do some middleware about validations would be great, so I did very basic validations using Express-Validator, and mocking some database with a simple, very simple JSON. At this point, yep, still fun.

But I really needed some tests, validate that UI and my validation service where doing what they are supposed to. So my UI is a CRA, that's why my tests were done with Jest, also Enzyme because it's great when clicking and changing values via simulation. In server I used Mocha and Chai, great tools to mocking petitions.

This poc was done just to remember myself the pattern and one way to use it, also to have fun!
