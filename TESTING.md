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

### Javascript Code Testing
[JS Hint](https://jshint.com/) was used to check the javascript code quality.

Please note: JS Hint is not updated with ES6, so these threw up warnings. Code was checked manually to confirm it was valid.

### Performance Testing
[Google Chrome Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) extension was used to test performance and I was pleased with the results as demonstrated below:

![Image showing Google Chrome Lighthouse test on game.html](/assets/images/readme-images/game-page-lighthouse-test.webp "Lighthouse Test")

![Image showing Google Chrome Lighthouse test on end.html](/assets/images/readme-images/end-page-lighthouse-test.webp "Lighthouse Test")

### Accessibility Testing
[Wave](https://wave.webaim.org/) accessibilty report highlighted a slight need for some improvement for accessibility:
- alt tags were added to the news API images
- aria labels were added to the hambuger menu on the home page

[Web Aim's](https://webaim.org/resources/contrastchecker/) contrast checker was used before building the site to ensure contrast between foreground and background colors was enough for accessibility purposes.

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

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The hamburger menu | Opens and closes correctly. The links go to relevants parts of the page. | Clicked on menu. Clicked on links | Menu opens when clicked and closed when 'x' clicked on. Links go to correct parts. | Pass|
| The 'Take Quiz' button | Directs the user to the game page | Button clicked | User is directed to the game page | Pass |
| The 'Take Quiz' button | Correctly styling applied to button on hover over | Button hovered over | Correct styling is applied | Pass |
| The news section API | Calls the news API url | Data called logged to console and checked | ![Image showing console log of called API](/assets/images/readme-images/newsapi-consolelog.webp "API console.log") | Pass |
| Contact form | All field required, email format required | Empty form submitted and invalid email address submitted | Error message displayed asking for fields to be inputted and valid email inputted | Pass |
| Contact form button | Sends inputs to site owner | Form filled in and button clicked | Site owner received email with correct inputs | Pass |
| Contact form successful message | Message displays | Form submitted | Message displayed | Pass |
| Contact form unsuccessful message | Message displays | Form submitted | Message displayed | Pass |


`Game Page - Modals`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 'myModal1' | Displays on page load | Game page loaded | Modal displays on page load | Pass |
| 'myModal1' button | Displays 'myModal2' | Button clicked | Modal displays second modal | Pass |
| 'myModal2' | Clicking the Arsenal team logo starts game play and loads relevant questions | Logos clicked | Clicking the Arsenal logo starts the game and loads Arsenal questions | Pass |
| 'myModal2' | Clicking the Spurs team logo starts game play and loads relevant questions | Logos clicked | Clicking the Spurs logo starts the game and loads Spurs questions | Pass |
| Both modals | Clicking anywhere that's not the modal starts the game and by default loads Arsenal questions | Random areas of the page clicked | Game started and Arsenal questions loaded | Pass |

`Game Page - Score Header`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Played counter | Updates after every 4 question (a match) | Play the game and check the played counter goes up every 4 questions| The score counter went up one after every 4 questions | Pass |
| Won counter | Increases by one every time the user questions 3 or 4 questions correctly in a match | Play the game answering 3 questions correctly in a match and then 4 questions in a match | Each time, the won counter increased by one | Pass |
| Draw counter | Increases by one every time the user questions 2 questions correctly in a match | Play the game answering 2 questions correctly in a match | Each time, the draw counter increased by one | Pass |
| Lost counter | Increases by one every time the user questions 0 or 1 questions correctly in a match | Play the game answering 0 questions correctly in a match and then 1 questions in a match | Each time, the lost counter increase by one | Pass |
| Goals counter | Increases by one for every question answered correctly | Add the goals up manually as game progresses and check it corresponds with the goal counter shown | For each question answered correctly, the goal counter increased by one | Pass |
| Points counter | Increases by one for each question answered correctly, increases by 3 for each match won, increases by one for each match draw and does not increase for each match lost | Played the game using different combinations of wins, draws and loses. Calculated the correctly points score manually and make sure it matches the points shown after each question and match. | The points score matched the manually calculated points at all times | Pass |

`Game Page - Question Indicator Header`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Current question indicator | Background turns blue and icon white on the current question football icon | Visually check that the correct icon is highlighted for each question displayed | The correct icon was highlighted for each question displayed | Pass |
| Correctly answer question indicator | Football icon replaced by a tick in a circle icon. The circle is coloured green | Visually check that each correctly answered question results in a green tick in the correct question indicator box | A green tick icon was displayed in the correct question indicator boxes | Pass |
| Incorrect answer question indicator | Football icon replaced by an X in a circle icon. The circle is coloured orage | Visually check that each incorrectly answered question results in an orange X in the correct question indicator box | An orange X icon was displayed in the correct question indicator boxes | Pass |

`Game Page - Main Display`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Current question indicator | The question number increases as each new question is displayed | Visually check the question indicator increases by one each time a question is displayed | The question indicator increases as expected | Pass |
| Question populated | Correct questions correctly pulled from the relevant json file | logos selected and questions pulled logged into console and checked. Visually checked correct questions where being displayed | Console logged showed correct questions were being fetched and visual checks on questions displayed were correct | Pass |
| Answers displayed | They match the question being asked | answers fetched were logged to the console and visually checked throughout game progress | The answers matched the questions being fetched and were being displayed correctly | Pass |
| Correct and incorrect answers | The correct or incorrect answers were actually correct or incorrect | The answers displayed as correct or incorrect were checked against the original json file | The answers were as expected | Pass |
| Correct indicator | The answer box background turns green when a correct answer is chosen | Visually check that the answer clicked when correct turns green | When a correct answer was chosen, the answer box background turned green | Pass |
| Incorrect indicator | The answer box background turns orange when an incorrect answer is chosen | Visually check that the answer clicked when incorrect turns orange | When an incorrect answer was chosen, the answer box background turned orange | Pass |
| Answer box hover | Background turns white and text blue on hover over on bigger devices only | Visually check the correct changes take place on different size devices and using chrome dev tools | The hover over works correctly and only on devices bigger than 1200 (to prevent answer background staying white on smaller touch screen devices) | Pass |

`Game Page - Match Toasts`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Match header | Displays correctly match number | Match number console logged and visually checked after each match played | Correct match number displayed after each match | Pass |
| Quote | Quote is relevant to game result and is displayed correctly | Current available quotes console logged after each match to ensure used quotes are removed. Visual check of placement and correct quote | Console logged showed correct choice of quotes, that used quotes were removed and visual check showed correct quotes displaying in correct area | Pass |
| Result statement | Correct statement displayed with correct match number | Win, draw and lost matches and visually check the relevant statement is displayed and the correct match number | Pass |
| Next match button | Displays correctly, changes color on hover over and removes the toast | Click button | The button displays in the correct place. Hovering over the button changes it's colour in line with the rest of the site. Clicking the button removes the toast enabling the continuation of game play | Pass |
| Match toast exit icon | Pressing the 'X' button in the toast header removes the toast | Click button | Toast removed on pressing button | Pass |
| Match toast | Clicking anywhere except the 'next' button and the exit button does not remove the toast | Pressing anywhere on the screen, except the buttons does not remove the toast | Pass |

`End Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Score header | Correct scores retrieved from local storage and displayed | Check storage in applications in Chrom Dev Tools. Manually calculate correctly scores and visually check they are displayed | Storage showed they were updating after each game played. Calculated scores matched those displayed | Pass |
| Confetti | Confetti launched when 4 or more points scored. Toilet rolls launched when 3 or less points scored | Log to console to check api installed. Visually check correct confetti launched by manually changing local storage points | Correct confetti launched for results obtained | Pass |
| Left hand side result and icon | Correct league or relegation and correct icon displayed for result | Manual change local storage and visually check correct statement and icon displayed | Correct statement and icon displayed for results obtained | Pass |
| Right hand side statement, score and result displayed | Manual change local storage and visually check correct statement, score and result displayed | Correct statement, score and result displayed for results obtained | Pass |
| Play again button | Displays correctly, hover over state changes color and redirects to game play | Visual check and click button | Button displays correctly, correct colors displayed on hover over and when clicked redirects the user to play another game | Pass |

`404 Error Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Left hand side | Displays error message and asks which option they user would like to choose | Visually check | Correct error message and option question displayed | Pass |
| Go home box | Takes user to index.html | Click box | User taken to index.html | Pass |
| Play game box | Takes user to game.html and initiates new game | Click box | User taken to game.html to play new game | Pass |
| Contact site owner box | lets user email the site owner | Click box | Users email client opened and recipient box filled with site owners email address | Pass |