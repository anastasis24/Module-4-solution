
(function () {
    var names = ["Yaakov", "Ilias", "Bruno", "Jack", "Aria", "Maik", "Yiannis", "George", "Peter", "Chris"];
    var length = names.length;    
    for (var i = 0; i < length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();       
        if ("j" === firstLetter) {
            byeSpeaker.speak(names[i])
        } else {
            helloSpeaker.speak(names[i])
        }
    }
})();


