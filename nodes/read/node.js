on.input.path = function() {
  input.repo.read(
    input.branch,
    input.path,
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
