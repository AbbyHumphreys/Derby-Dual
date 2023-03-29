# Derby Duel

![Image showing the Derby Duel website on various devices](/assets/images/readme-images/derby-duel-responsive.webp "Derby Duel")

View the deployed site: [Derby Duel](https://abbyhumphreys.github.io/Derby-Dual/)

This is Derby Duel, a quiz website for North London football lovers or football trivia fanatics. The website will enable users to pick a football team to answer questions about.

The aim of this project is to provide a fun and engaging quiz website using Javascript for interactivity

Javascript, HTML and CSS will be the languages used to create this website.

# Table of Contents

- [`User Experience`](#user-experience)
    - [`Project Goals`](#project-goals)
    - [`User Experience`](#user-experience)
    - [`User Stories`](#user-stories)
- [`Design`](#design)
    - [`Wireframes`](#wireframes)
    - [`Colour`](#colour)
    - [`Typography`](#typography)
    - [`Code Structure`](#code-structure)
    - [`Structure`](#structure)
- [`Features`](#features)
    - [`Home Page`](#home-page)
    - [`Game Page`](#game-page)
    - [`End Page`](#end-page)
    - [`404 Error`](#404-error)
- [`Technologies Used`](#technologies-used)
    - [`Languages`](#languages)
    - [`Framework`](#framework)
    - [`Tools`](#tools)
- [`Bugs`](#bugs)
    - [`Fixed Bugs`](#fixed-bugs)
    - [`Known Bugs`](#known-bugs)
- [`Testing`](#testing)
- [`Wishlist`](#wishlist)
- [`Deployment`](#deployment)
- [`Credits`](#credits)

# USER EXPERIENCE (UX)

## Project Goals

### User Goals:

- access a user-friendly and easily navigable website
- enjoy playing a quiz
- clear instructions on how to play
- the ability to play again
- a question counter to keep track of how many questions have been played
- score counters to enable track of how well the user is playing
- the ability to contact the site owner

### Site Owner Goals:

- Allow users to experience an awesome quiz site
- Encourage user interaction
- Enable easy access to the site and a smoothness to navigation

## User Experience
### Target Audience
* Arsenal and Tottenham Hotspur supporters
* Football fans
* Trivia fanatics

### User Requirements and Expectations
* A simple and intuitive navigation system
* Clear instructions
* Game play that works as expected
* Good presentation and a visually appealing design regardless of screen size
* An easy way to contact the business
* Accessible for all users

## User Stories
### User
As a user, I want to:

1. Know what the game is about
2. Know how to play the game
3. Be able to play the game
4. Know where I am up to in the game and have real-time score updates

### Site Owner
As a site owner I want users to:
1. Know what the game is about
2. Know how to play the game
3. Be able to contact the game creator
4. Enjoy themselves and have a positive user experience

# DESIGN
## Wireframes

Two versions of the quiz were created. The first was a minimum viable product version to ensure the project was viable and could be completed in time. The second was the ideal, upgraded version that you see today. The second was based off the first, for ease of upgrade and added more significant interactivity than the first. 

The following wireframes were created near the beginning of the design process with [Balsamiq](https://balsamiq.com/wireframes/?gclid=CjwKCAiAhKycBhAQEiwAgf19etPR1ccdA0Aiezm63MsBy4PezCLSlN1T14ubQH1pMB7oa7Hz9YqWHhoC-VEQAvD_BwE).

### First Design

![Image showing the home page design](/assets/images/readme-images/home-page-design.webp "Home Page Design")

![Image showing the first game page design](/assets/images/readme-images/first-game-design.webp "Game Page Design One")

### Second Design

![Image showing the second game page design](/assets/images/readme-images/second-game-design.webp "Game Page Design Two")

## Colour
The colour palette was taken from the infamous logos of the North London derby teams. 

* Red #db0008
* Blue #131f53
* White #fff

![The colour palette chosen for the website](/assets/images/readme-images/color-palette.webp "Colour Palette")

## Typography

[Google Fonts](https://fonts.google.com/) was used to obtain both fonts used.

The Poppins font is the main font used throughout the site. It is used frequently by many web developers and is easy on the eye. Sans Serif is set as a backup should the Poppins font fail to load.

Share Tech Mono is used mainly for headers. It is the style of font used on many football websites (including Arsenal) and will be familiar and fun for users. Monospace is set as a backup should Share Tech Mono font fail to load.

## Code Structure
Bootstrap grid system and responsiveness were used throughout the site and the HTML was organised in an effective way according to bootstrap useability. 

The CSS file was written in a way to utilise the cascading nature of CSS and in such a manner that general styles including colors are found at the top, then styles for each section as found in their defined order (as found when browsing the site) and then media queries at the bottom.

Javascript was utilised to create game interactivity which greatly increases satisfaction and a great user experience. 

## Structure
This website was designed with mobile users foremost in mind as most users will access it using their mobile phones. With this in mind, simple layouts were used throughout to achieve an easy on the eye look. The site is structured in a familiar, user friendly way. A navigation menu is included in the single page layout of homepage. The menu is hidden using a hamburger menu icon as a toggle. This is because the page is short and it is likely users will scroll rather use the menu links.It was excluded from the game area to avoid distraction or accidently clicking away from the game. In the game pages, the homepage can be accessed using the Derby Duel logo or from a button on the end page.  The pages of the website are accessible using buttons. For example, on the home page, the ‘Take Quiz’ button links directly through to the game. The website consists of the following sections:
* A home page consisting of an about us section, a how to play section and a contact us section. 
* A game page is dynamically filled using javascript to create the interactive quiz with updating scores
* An end page is also dynamically populated using javascript to inform the user of their end result

## Defensive Design
To prevent user error and instruct users in the case of an error, defensive design strategies were used:
- a 404 error page was used in case an incorrect url was used. This allows the user to pick which area of the website they would like to navigate to
- validation of the news api data and json files for quotes and questions was used to get they were fetched correctly and network errors logged to the console should an error occur
- if the user clicks on the dismiss button of the toast for each match result, game play is not interrupted and the user can carry on.

# FEATURES

## Home Page

### Home Section

![The initial section for the website](/assets/images/readme-images/initial-section.webp "Initial Section")

To simplify the webpage, but keep it familiar to the users, a hamburger icon was used. It opens as a side bar and provides access to the different sections of the home page via links.

The two logos (permission sought and officially granted from both football teams) from along with the title provides a nice intro into the sites purpose - the teams the quiz is about. 
A question presented as a challenge motivates the user to take the quiz. The button that takes the player to the quiz is kept in this top section so that users can go straight to the quiz if they wish.

### About Section

![The about section for the website](/assets/images/readme-images/about-section.webp "About Section")

This is a brief section clarifying the purpose of the site

### Play Section

![The how to play section for the website](/assets/images/readme-images/play-section.webp "Play Section")

Game play is explained in this section ensuring the user knows how to score points and how the score affects the final outcome. It was kept simple and short so as not to lose the users interest but provide enough information for them to understand how the quiz is scored.

### Contact Section

![The contact section for the website](/assets/images/readme-images/contact-section.webp "Contact Section")

Feedback from users is a great way to improve the game and fix any bugs. This simple and obvious form is quick and easy to fill in providing the site owner with essential feedback. Javascript was used to create a handy feedback notification if the email was sent or if there was an error EmailJS was used as suggested by Code Insitute. A template was created so that the email returns to the owner in a nice format with easy access to the reply address for the user.

![The email received from the contact form](/assets/images/readme-images/contact-email.webp "Contact Email")

### Footer

![The footer section for the website](/assets/images/readme-images/footer-section.webp "Footer Section")

Simple and clean, the footer simply states the site owners name and that the site is for educational purposes only (this was to ensure terms of logo usage was adhered to).

## Game Page

### Header
To keep the game area as clean and clutter free as possible, the decision was taken to use the header area for displaying the scores. The layout was kept in line with what most football fans are used to when viewing the ever so popular premiership. So this will be familiar to the intended users. Scores are updated as game play progresses with ample use of javascript. The left hand side of the header updates the points scored as well as how many matches have been played and whether they were won, lost or drawn. On smaller screens, the headings for this section are reduced to single letters (again, this are familiar to the user as they are also used for premiership display). The right hand side lets the user know which match they are currently playing and whether they have answered correctly (scored a goal) or incorrectly.

### Game Area
The continued use of team colors keeps the site cohesive throughout. The left hand side contains the current question along with a question counter, while the right hand side displays the selection of answers the user can choose from. On large screens, the answer box currently hovered over turns white to indicate to the user where they are on the screen. Once selected, the box turns either green (for a correct answer) or orange (for an incorrect answer). This provides feedback to users along with the display in the header. The decision was taken not to show the user which answer was correct (if an incorrect answer was chosen), this is because most of the users are passionate team supporters and will view it as a challenge to play again and get the correct answer.

### Footer

The footer remains the same throughout the website.

## End Page

### Header
Once again the right hand side of the header is used to display the results of the users efforts. This time, local storage is used to transfer the scores through to the end.html for display. It was decided that the right hand side would go neutral, with this being a future update to bring through the answer indicators and display them here.

### Results Area
Once the game has been played in full, javascript is used to check the final points and decide if the player has been relegated or won one of the major leagues (premiship, europa, european championship).
The left hand side clearly states which league the player has won or if they have been relegated and displays either a trophy or a thumbs down using font awesome icons.
The right hand side confirms the league won or their relegation and lets the user know how many points they scored. A button to play the quiz again is displayed to encourage users to try for a better score.
For league winners a javascript plugin (Confetti) was used to burst a plethora of confetti onto the page.
For those relegated another javascript plugin () was used to throw toilet roll around the screen (a football traditon for teams that are relegated that users will be familiar with). 

### Footer
The footer remains the same throughout the website.

## 404 Error

A 404 page was added to the root folder as when researched it was discovered that github pages has an automated system for finding the 404 page in this folder to handle errors.

# TECHNOLOGIES USED
## Languages
* HTML5
* CSS3
* Javascript
## Framework
* Bootstrap v 5.3
## Tools
* Git
* GitHub
* Gitpod
* Balsamiq
* Google Fonts
* Font Awesome

# BUGS

## Fixed Bugs
| No. | Problem | Fix |
| --- | --- | --- |
| 1 | Height of game area slightly smaller than needed | Adjust height in Chrome Dev Tools until perfect fit and transfer adjusted height to working environment |
| 2 | Answer was being used for next question as well | Put setNextQuestion function inside a setTimeOut |
| 3 | Match toast quote coming up as undefined in DOM | https://stackoverflow.com/questions/30702670/undefined-when-passing-dom-object-in-javascript Gave inspiration for putting the functionality to display the toast within the promise |
| 4 | h2 set at 6rem for Q1 on game.html, but made h2's on index.html huge | Reduced size of h2 throughout site, but put class in for Q1 and styled accordingly |
| 5 | Answer section was not centering vertically | Position-relative used on divs so css could be used to position it’s child in the vertical center |
| 6 | If user accidentally clicked off the modal and didn’t select a team, the quiz couldn’t begin | Fetched Arsenal questions automatically and switched to spurs questions if spurs logo clicked |
| 7 | Redirect to end.html was not working | Solved by adapting advice from Kristien Anderson on Code Institute slack community. | A variable for the baseURL of the project was created and then put in a template literal along with the /end.html in the redirect |

## Known Bugs
- There is a a warning displaying in the console on the live page. This error seems to be because GitHub hosted pages disable googles 3rd party cookie alternative FLoC, which then throws this error. The error doesn't affect the site in any way.
![Interest Cohort Error Message](/assets/images/readme-images/interest-cohort-error-message.webp "Error Message")
- The end page throws an error of an uncaught promise. From research, this appears to be related to a chrome extension I have on my computer as others do not report getting this message. It does not affect game play.
![Uncaught Promise Error Message](/assets/images/readme-images/end-page-error.webp "Error Message two")

# TESTING
Extensive testing was conducted and documented in [Testing.md](TESTING.md)

# WISHLIST
- Change colors displayed according to which team selected
- Change colors, logos, questions etc for more Derby teams
- Make the hamburger icon close on click
- Add an option to the contact form for the user to receive a copy

# DEPLOYMENT

The following steps were taken to deploy the website on GitHub Pages:

1. The Code Insitute template was obtained from https://github.com/Code-Institute-Org/gitpod-full-template
2. A new repository was created in GitHub, the project was named
3. The green Gitpod button was pressed to open a new workspace/development environment (obtain the gitpod extension to enable the green button)
4. Git is used to commit during development and push this over to Github
5. To create the hosted site at Github Pages, I navigated to the Github repo settings tab and found the Github pages dedicated section.
6. The main branch was chosen in the dropdown menu and the 'save' button was pressed. This supplied a live link the the website (https://abbyhumphreys.github.io/Derby-Dual/)

To run this on your local machine:

1. Go to the Github repo at (https://github.com/AbbyHumphreys/Derby-Dual)
2. Click on the 'code' button and 'download zip'
3. Extract the zip file on your local machine
4. Run the index.html file in a browser

# CREDITS

**Code Institute** - I thoroughly enjoyed learning javascript through Code Insitute and have used guiding principles from the course throughout this website. I enjoyed using the idea from the Love Math project to wait for the DOM to be fully loaded before initiating game play.

**[Font Awesome](https://fontawesome.com/)** -  was used for the icons from the site and instructions were followed on how to install from their website.

**[Tiny PNG](https://tinypng.com/)** - was used to reduce the file size of each image.

**[Adobe Express](https://express.adobe.com/spv)** - was used to resize the images.

**[Google Fonts](https://fonts.google.com/)** - were the source for the fonts used throughout the site.

**[Online-Convert](https://image.online-convert.com/)** - was used to convert the files to webp.

**[Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1110s)** - was used for the quiz structure and was adjusted and expanded on for this site.

**[Bootstrap](https://getbootstrap.com/docs/5.3/components/modal/)** - Was used for most of the styling, responsiveness and to create the Modals and Toast pop ups.

**[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti/v/1.6.0)** - this package was used for the confetti in end.html.

**[JS Confetti](https://www.npmjs.com/package/js-confetti)** - this package was used for the toilet roll confetti in end.html.

**[Emojipedia](https://emojipedia.org/emoji/%F0%9F%A7%BB/#:~:text=Character-,%F0%9F%A7%BB,of%20paper%2C%20as%20toilet%20paper%E2%80%A6)** - provided the toilet roll emoji used with js-confetti.

**[Am I Reponsive](https://ui.dev/amiresponsive)** - was used to create the first image in the readme file to show the responsiveness of the website.

**[Stack Overflow](https://stackoverflow.com/questions/24775725/loop-through-childnodes)** - This thread gave the basic structure for how to easily loop through child nodes using forEach.

**Arsenal and Tottenham Hotspurs** both gave direct consent for use of their logos for this site for educational purposes only.

All other text and coding was created by myself.