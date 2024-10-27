Project Description:

Introduction
Here we go again with a new project! Let’s make sure you understand the concepts so far. The main goal of this project is to implement the concepts learned so far by using hooks to manage and utilize state while fetching and using data from an external API.

How the game works
Go play around with this student’s solution to find out for yourself how the Memory game works. Although this example uses cartoon characters, you can use anything you like for your game.

Assignment
Create a new React Project.
Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
You also need a handful of cards that display images and possibly informational text. These images and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.
Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.
Style your application so you can show it off!
As always, push the project to GitHub, and don’t forget to deploy it.

Plan:

1. design cards
2. create the card layout and header
3. fetch card info from API (I'm thinking that while fetching you would use some info from the api to give the cards individual id's and keys )
4. create the shuffle mechanic
5. create click logging mechanic
6. use the logging mechanic to count unique clicks
7. use unique clicks to count score

So the example uses an individual state for each card that is "clicked" as a boolean and then passes up props for each on click function so incrementing, and reseting if "clicked" is true, and randomizing. Those props live in a single handleClick function.

It does seem like an individual state of clicked for each card would be the simplest, rather than trying to make a state for the whole grid and then tracking clicks that way.
