
((function() {
    // IIFE to encapsulate the code
    console.log('this is my test cdn');

var OUTPUT = [
    "<h1>fluffy-pancake-and-cheesy-toast</h1>",
    "<h4>Yeah... if you're here... then you've gotten waaaay too lost my friend! 😅</h4><hr><br>",
    "<p>This is the place where we store Poprocks & Coke Grenades!</p><br>",
    "<h3><em>KABOOOM SPLAT!!</em></h3><br>",
    "<p><em>The crowd goes so silent you could hear those crickets meowing!</em></p>",
    "<p><strong>WOOF WOOF!</strong></p><small>They meow crazily!</small><br><br>",
    "<p>Ummmm.... Really... <strong><em>WHY ARE YOU STILL HERE???</em></strong></p>",
    "<p>Go home please.... <strong>😑</strong></p>",
    "<img src='https://kuroyukidev.github.io/fluffy-pancake-and-cheesy-toast/games/synthverse/cdn/discord/synthverse_game_icon.gif' height='400' width='400' alt='Synthverse is the best!' title='Synthverse is the best!'/>"
]

OUTPUT.forEach(line => document.getElementById('output').innerHTML += line);

})());