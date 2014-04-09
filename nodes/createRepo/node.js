on.input.github = function() {

  var repo = new input.github.Repository(input.user, input.name);
  input.options.name = input.name;
  repo.createRepo(input.options, function(err, result) {
    if(err) {
      output({ error: err });
    } else {
      output({ out: result });
    }
  });
};
