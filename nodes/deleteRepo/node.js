on.input.repo = function() {
  input.repo.deleteRepo(function(err) {
    if(err) {
      output({ error: err});
    }
  });
}
