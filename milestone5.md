--paragraph describing how someone in your target user population would use your app in order to help them achieve relevant goals. Think of this as a storyboard (setting+sequence+satisfaction) except written in a paragraph instead of using drawings.

Our app was designed for children, mainly under the age of 10, to be able to explore the world with their parents and use technology to complete different goals in the real world, rather than just virtually in an app. For example, we have a seven year old child Nick. Nick's mom is concerned that he is too addicted to technology and the ipad so she wants to find a way to combine his love for technology with a desire to want to play and adventure outdoors. She finds and installs Play Pal on the ipad, an interactive game where she can promote exploration around the neighborhood. She then lets Nick login to the app and choose where he wants to explore first. Nick chooses to go to the beach. So his mom drives them both to the beach and they complete the three tasks together, earning points for completing each task. If Nick and his mom are feeling more adventurous, they could venture to the nearby park and complete the tasks there too. Once all the tasks are completed, both Nick and his mom are satisfied with a fun-filled day full of different adventures they were able to explore together. Nick had fun and his mom was able to teach Nick about the amazing things one can find in nature, with the assistance of the technology, but not making it the sole focus. 


screenshots of your latest UI webpages 

Sign-up/login Page

<img src="m5- home.png" width="300" height="500" />

Home page

<img src="m5- home2.png" width="300" height="500" />

Map Overview

<img src="m5- map.png" width="300" height="500" />


Goal 1

<img src=goal1.jpg width="300" height="500" />

Camera Function

<img src="Image 5-22-19 at 10.39 AM.jpg" width="300" height="500" />

Goal Complete

<img src="Image 5-22-19 at 10.40 AM.jpg" width="300" height="500" />


Goal 2

<img src="goal 2.png" width="300" height="500" />


Goal 3

<img src="m5- goal 3.png" width="300" height="500" />


Goal 4

<img src="m5- goal 4.png" width="300" height="500" />


Goal 5

<img src="m5- goal 5.png" width="300" height="500" />


Goal 6

<img src="m5- goal 6.png" width="300" height="500" />


Goal 7

<img src="m5- goal 7.png" width="300" height="500" />


Goal 8

<img src="m5- goal 8.png" width="300" height="500" />


Goal 9

<img src="m5- goal 9.png" width="300" height="500" />


Rewards

<img src="m5- rewards.png" width="300" height="500" />


This week we were able to finish the rest of the goals for the 3 different locations (mall, park, and beach). We also updated the start page to include a sign up feature rather than just the simple login so users can create a new account if they do not have one yet. Besides park,we added beach and mall locations that include new goals. We also updated the styling on the rewards page and included some actual rewards that users can redeem their points for within the app. We created a new homepage where it takes in the current user on the app and says "Hello", as well as a logout button on that page. Finally, we added "Your points:" at the top of the task overview page with the map so that the user can see their current points when looking at goals they can complete.
 
Display of Data
 
Once a user sign up, the name, password and number of points are posted into database. On home page user name is displayed. On the goal overview page we have total points displayed. We also have a pin on the current user location and 3 different locations nearby retrieved using Google API.

Home


<img src="home-5.png" width="300" height="500" />


Goal Overview


<img src="map-5.png" width="300" height="500" />


--Implemented API & Database

We hooked up to the google maps API to be able to find and display the different locations within our app. First, we used geolocation to find the current location of the user. Then, using Places Library we performed nearbySearch to find places close to the user. The results object returned includes different fields, such as types and icon. We used those icons to place the pin on the map, and types to determine which location goals of certain category needs to be placed. In order to implement Google maps API, including Places Library, we had to obtain API key.

We also created sqlite3 database by running create_database.js file. We inserted name, password, and points in the table in our playPal.db database. Once a new user sign up, the new data is posted into database with those 3 fields. We store the amount of points accumulated by the user every time they complete a task and display these points on the rewards and goal overview pages.We also have message, including username on the homepage.
  
  
  
  --Ambitious data display or visualization ideas
  
Using the Google maps API, we would love our app to have the ability to search up different locations and be more flexible with the different goals and locations rather than the 3 that we have right now. It would be great to have dynamic goals that automatically generate based on the location that you choose. We are also hoping to be able to add a character/mascot to our app in which users can use their points that they earned to "buy" their character new items such as clothing. Also, because we have the ability to have users sign up and create different accounts, we hope to be able to store and remember the character that corresponds to that account.  In the future, we could also use Directions Library to show direction from current location to the location the user is going.
  
