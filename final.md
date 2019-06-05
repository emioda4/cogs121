Team Members: Emi Oda, Matthias Baker, Nataliya Ratosh, Kristen Randall

Contributions: 
Overall, we took on different tasks every milestone where we didn't just work on one part of the app for the whole quarter. If someone would struggle with their task, another person would jump in and see if they can help figure it out. We worked cooperatively to accomplish all the different tasks that were required to build all the parts of our app.

Emi
- Completed tasks I signed up for in order to develop the app more every milestone including creating some of the goals pages, working on css, helping with some of the backend, and other non-coding related tasks in the milestones. 

Matthias
- 
Nataliya
- Implemented google map api, created start page, login page and some goals pages. Created sqlite database to store user data. Contributed to finishing milestones.


Kristen
-

List of source code files:
- create_database.js: This file creates dataabse with 3 tables to store username, password, points, rewardId, and goalId.

- server.js: set up sqlite database and handle get/post requests from the frontend.

 Goals 1 through 9: Each goal page displays the task the user is to perfom and a picture. Once the goal is done (ex:take a oicture of a flower), the user needs to click on the "complete" button to get the points. By clicking on the button, user gets 10 more points. The data is updated by making ajax post call and adding the points.
- goal1.handlebars
- goal1camera.handlebars
- goal2.handlebars
- goal3.handlebars
- goal4.handlebars
- goal5.handlebars
- goal6.handlebars
- goal7.handlebars
- goal8.handlebars
- goal9.handlebars

- home.handlebars: The main page where user is directed after signing in or signing up. User can click the "start" button to start the completing the goals or log out. After clicking on the 'start" button, the user is navigated to the task_overview page displaying map.

- login.handlebars: The page where an existing user can enter valid username and password.  After clicking the log in button, the user information is retrieved from the database by making ajax get request. If username and password are valid, the user is navigated to the home page. Otherwise, the error alert is displayed. There is also sign up button to let user navigate to the sign up page.

- rewards.handlebars: 

- start.handlebars: This is sign up page where user needs to input username and password. After clicking on the submit button, the user's info is posted into the database by making ajax post request.

- task_overview.handlebars: This page displays google maps. Using geolocation, the user's current location is found and pinned. This page is using Google Maps Places Services and create nearby search request with specified fields. The returned results objects have multiple fields, such as  geometry, types and icon which are passed in another function to create and place markers on the locations. The 3 locations marked on the map  are nearest park, mall and beach. By clicking on the location, info window opens displaying various goals. User can click on any goal and will be navigated to the corresponding goal page. Besides, on the top of the page total user's goals are displayed and updated after completing goals.

- statistics.handlebars: This page displays bar chart demonstrating the number of each goal completed. The data displayed is retrieved from the database by making ajax get request.

- index.js:

- camera.css: This file includes styling of the camera function in goal1.camera.handlebars.

- layout.css: This file includes styling of the navigation bar, buttons and other layout of the pages.


Single-slide presentation link: https://docs.google.com/presentation/d/1FtzxFhahV2u24xUmylLkjsEt0m8t_4opzVUz3lbiyiE/edit?usp=sharing

Demo video link:https://youtu.be/j4ubhB7jlkg
