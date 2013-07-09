Resume.Models.Main = Backbone.Model.extend({
    
    initialize : function(){
        Resume.router = new Resume.Routers.Main(); 
        this.createModels();
        Backbone.history.start();
        Resume.matrix = new Resume.Matrix();
        Resume.matrixView = new Resume.MatrixView({model : Resume.matrix});
        Resume.matrixView.render();
        
        Resume.jobSlider = new Resume.JobsSlider();
        Resume.jobSlider.render();
    },
    
    createModels : function () {
        console.log("Main.createModels");

    },

});
