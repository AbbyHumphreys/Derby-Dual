/**
 * JQUERY used to show Modal 1 when page loads
 * For use with game.html Modal 1
 * */

/* Placed in seperate file from game.js
to ease potential use of jest for testing */ 

$(document).ready(function () {
    $("#myModal").modal('show');
});