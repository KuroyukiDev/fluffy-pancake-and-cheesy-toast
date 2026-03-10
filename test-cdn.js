
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
    "<p>Go home please.... <strong>😑</strong></p>"
]

document.getElementById('output').innerHTML = OUTPUT.forEach(line => line);

})());