Resume.Routers.Main = Backbone.Router.extend({
    routes: {
       'hangman' : 'hangman'
     },
     hangman: function() {
         console.log("hangman called");
         alert("hangman");
     }
});
