on.input.path = function() {
  $.repo.read(
    $.branch,
    $.path,
    function(err, content, sha) {
      if(err) {
        output({ error: $.create(err) });
      } else {
        output({
          content: $.create(content),
          sha: $.create(sha)
        });
      }
    }
  );
};
