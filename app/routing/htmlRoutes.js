module.exports = function(app) {
    // Load survey page
    app.get("/survey", function(req, res) {
        // res.render("survey");
        res.sendFile('survey.html', { root: './app/public' });
    });

  
    // Render home.html page page for any unmatched routes
    app.get("*", function(req, res) {
    //   res.render("home");
    res.sendFile('home.html', { root: './app/public' });
    });
  };