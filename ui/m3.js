/*! m3.js */
define(["ui/m1", "ui/m2", 'angular'], function(m1, m2, angular) {
    //return an object to define the "my/shirt" module.
    console.log("m1=%o, m2=%o", m1, m2);
    return {
        name: "m3",
        ts: new Date().getTime(),
        color: "blue",
        size: "large"
    }
});