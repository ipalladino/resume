window.Resume = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Resume.main = new Resume.Models.Main();
  }
};

$(document).ready(function(){
  Resume.initialize();
});
