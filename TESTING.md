# Derby Duel - Testing

![Image showing the Derby Duel website on various devices](/assets/images/readme-images/derby-duel-responsive.webp "Derby Duel")

View the deployed site: [Derby Duel](https://abbyhumphreys.github.io/Derby-Dual/)

## Table of Contents
- [`Automated Testing`](#automated-testing)
    - [`HTML Validator Testing`](#html-validator-testing)
- [`Manual Testing`](#manual-testing)
    - [`Compatibility Testing`](#compatibility-testing)
    - [`Responsiveness Testing`](#Responsiveness-testing)
- [`User Story Testing`](#user-story-testing)

A variety of testing methods were used throughout the project to ensure the project was error free. 
## Automated Testing
### HTML Validator Testing
HTML was testing using the [W3C Validator](https://validator.w3.org/) and the following errors were flagged and corrected:

**Problem:** There was a closing tag on the br element
**Fix:** The closing tag was removed
**Problem:** The copyright symbol '&#169' needs a semicolon
**Fix:** A semicolon was put after the copyright symbol
**Problem:** Two 'start-quiz' id's were found
**Fix:** Put them in the class attribute and use query selector to selected them in the javascript file
**Problem:** An extra 'li' closing element was found
**Fix:** It was removed

### CSS Validator Testing
CSS was tested using [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) and the following error was reported fixed:

**Problem:** bottom: cannot be used with a color
**Fix:** change 'bottom' to 'background-color' as was intended

Two warnings were displayed but were not corrected for the following reasons:
- Warning that there is the same color for background-color and border-color for the success buttons. This warning was ignored as this is a style choice and provides a clear indication that the button was clicked.

- Warning that -ms-transform is a vendor extension. This was not an error, but a choice to use in this design

- Warning that imported style sheets are not checked in direct input and file upload modes. As there is only one style sheet and this was checked by direct input, there was not a need to correct this warning.


## Manual Testing
### Compatibility Testing
This site was tested across the three most widely used browsers today - Google Chrome, Microsoft Edge and Safari. The site worked well across all three browsers and discrepancies were not found.

The site was tested on numerous devices and it worked well on all. The devices used for testing were a ASUS Vivobook Laptop, an iMac, an iphone 11 and a Samsung s22

### Responsiveness Testing
Responsiveness was tested throughout the site development using Google Chrome Dev Tools. Bootstrap made responsivity much easier to achieve and then a few css rules were required to adjust the site for small to large devices.

## User Story Testing
All user stories were achieved as the content needed was present and easily visible on the site. The navigation was easily seen and useable on both large and small devices. Text was clearly legible and displayed on contrasting background to allow accessibility. All images and icons were used to enhance the experience on the site and did not detract or distract from the user achieving their desired outcome.

### User
As a user, I want to:

1. Know what the game is about
    - This is achieved by way of the logos being clearly presented as to which football teams the quiz is about, a simple and clear description in the 'About' section
2. Know how to play the game
    - Within the 'About' section and on initiating game play, the user is able to read the quiz rules and how the game is scored
3. Be able to play the game
    - Game play is initiated through the 'Take Quiz' button on the home page. The user is taken through to the game.html page which on loading pops open a modal explaining game play. The user is then presented with the ability to pick a team, which displays the appropriate questions. If the user accidently clicks off the modal, arsenal is selected as the default team, so that the user can still play the game
4. Know where I am up to in the game and have real-time score updates
    - To know which question the user is on, the question number appears in the left hand side game area and updates as each question is loaded
    - Footballs are displayed along the header of the right hand side to indicate progress. The question the user is on has a background of blue and white text. A correct answer is highlighted in red and an incorrect answer is indicated with an X.
    - When a user clicks a correct answer, the background of the answer box changes to green
    - When a user clicks an incorrect answer, the background of the answer box changed to orange
    - After testing the quiz on numerous football fans, it was decided that if the incorrect answer was chosen, the correct answer wouldn't be revealed. This motivated the football fans to retry the quiz and they reported this kept it interesting and challenging for them.
    - Live scores were updated in the header of the left hand side. A premiership style display was chosen due to the familiarity of the users with it. They can see how many matches they have played, how many matches they have won, drawn or lost, how many goals were scored (questions answered correctly) and their total points for the game.

### Site Owner
As a site owner I want users to:
1. Know what the game is about
    - A simple and clear description about the quiz is given on the homepage as well as clear logos of the teams the quiz is about
2. Know how to play the game
    - Displaying the game play twice, on exploration of the home page and on game inititation ensures all users have access to knowledge on game play
3. Be able to contact the game creator
    - A contact form on the home page enables the user to contact the site owner with positive or negative feedback as well as to ask any questions and allows the user to feel connected with the site as a whole.
4. Enjoy themselves and have a positive user experience
    - The site is easily navigable. It includes the main dropdown menu on the home-page. The navigation menu is fixed so is always visible to the user.
    - A 404 error page was created for the users so if they are directed to a non-existent domain, they are presented with an appealing page and an easy navigation buttons - back to the homepage, play the quiz or contact the site owner.
