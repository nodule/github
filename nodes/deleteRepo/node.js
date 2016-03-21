on.input.repo = function() {
  $.repo.deleteRepo(function(err) {
    if(err) {
      output({ error: $.create(err)});
    }
  });
}
