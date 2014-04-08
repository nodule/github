on.input.github = function() {
  input.github.createRepo(input, function(err, result) {
    if(err) {
      output({ error: err });
    } else {
      output({ out: result });
    }
  });
};
