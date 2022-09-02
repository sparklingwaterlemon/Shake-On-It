 https://shakeonit.herokuapp.com/
 
 Website you can use to challenge your friend!
 
 Keep track of your bets!
 Challenge your friends on the app!
 An easy way to bring some fun in your life!

 On the main Landing page, you will be able to see list of games from the Global Game Model.

 Once you sign in with Google, you will be redirected to your user Landing page.
 Here you will see a list of your own active games (games you started and games you were challeneged)
 


 Lets start with the navigation bar.

 -- Home Page --
 Will take you back to the main landing page

 -- Profile --
 You will be able to see your name, email, <under construction> friend rating score, games won, and games lost.
 <under construction> Your friends will be able to rate you so if you don't pay your bets, your rating will drop!
Currently, friend rating, games won, and games lost is not implimented.

However, you can update your gamertag with the input text area and you should see it update.


-- Add Friend --
Clicking it will bring you to a page where you can see your current list of friends.
You can find friends by searching by their gamer tag, or adding it from a list of all Global Users.
You cannot add a friend twice! You cannot add yourself.
    - Search Bar: if you try to add yourself, or if you add a user not found, or someone already in your friends list -> you will be directed to a stylish error page

-- Create Bet --
In this page, you will be able to make challenges. You can select your opponent from a list of your added friends.
There you can input the
    game name: Harry vs George
    game description: Who can run the fastest
    amount: 20
    or penalty: loser buys lunch
    expiration: pick a date
Creating a date will take you back to your user landing page and you will see it appear!


Now next to your games, you will see your edit button.
It will take you to that game details page.
Here you can edit the game information.

Empty inputs will not be updated ie. if you leave "update amount" as " ", it will NOT update the amount

In addition, here is your bet delete button.

If you feel like the challenge was unreasonable or if you're not feeling up to the challenge, you can cancel this bet.
This will delete it from your opponents list as well.



 
 
 
 
 

 
 
 
 
 
 
 

 ice box

- friend rating and no of games won and lost
- update homepage to show random games - maybe 5 or 6
- making create bet require a date

- user can accept/ reject/ or counter offer challenge before pushing

- had to do a work around pushing id and gamer tag separate
- how to have one array as property schema value with two properties?
user = {
    name: String,
    opponent: {type Array, default [first property, second property ]}
}...

- if you can't find friend send email invite nodemon mailer *******

- create 3000/Master
where you have all games and all users
and can edit and delete

- if you change usernames your games will disappears.. fix this..
- update so found by user id not user gamertag
- microtransactions , hold the user's bet money? == guarantee payout for friends