Java.perform(function () {
    Java.enumerateLoadedClasses({
        onMatch: function (name) {
            if (name.indexOf("jakhar") !== -1 || name.indexOf("diva") !== -1) {
                console.log(name);
            }
        },
        onComplete: function () {
            console.log("Fin de l'enumeration");
        }
    });
});