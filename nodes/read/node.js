on.input.path = function() {
  input.repo.read(
    input.branch,
    input.path,
    function(err, content, sha) {
      output({
        error: err,
        content: content,
        sha: sha
      });
    }
  );
};
