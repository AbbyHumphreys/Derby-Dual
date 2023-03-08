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

# User Experience (UX)

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

## Wireframes

The following wireframes were created near the beginning of the design process with [Balsamiq](https://balsamiq.com/wireframes/?gclid=CjwKCAiAhKycBhAQEiwAgf19etPR1ccdA0Aiezm63MsBy4PezCLSlN1T14ubQH1pMB7oa7Hz9YqWHhoC-VEQAvD_BwE).

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

