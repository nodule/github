on.input.github = function() {

  var repo = new input.github.getRepo();
  repo.createRepo(input.options, function(err, result) {
    if(err) {
      output({ error: err });
    } else {
      output({ out: result });
    }
  });
};
