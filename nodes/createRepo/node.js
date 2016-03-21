on.input.github = function() {
  var repo = $.github.getRepo($.user, $.name);
  $.options.name = $.name;
  repo.createRepo($.options, function(err, result) {
    if(err) {
      output({ error: $.create(err) });
    } else {
      output({ out: $.create(result) });
    }
  });
};
