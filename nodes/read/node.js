on.input.path = function() {
  $.repo.read(
    $.branch,
    $.path,
    function(err, content, sha) {
      if(err) {
        output({ error: err });
      } else {
        output({
          content: content,
          sha: sha
        });
      }
    }
  );
};
