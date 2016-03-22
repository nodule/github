module.exports = {
  name: "getSha",
  ns: "github",
  description: "Retrieve Sha for file",
  phrases: {
    active: "retrieving Sha for path {{input.path}}"
  },
  ports: {
    input: {
      repo: {
        title: "Repository",
        type: "function",
        readonly: true
      },
      branch: {
        title: "Branch",
        type: "string"
      },
      path: {
        title: "Path",
        type: "string"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      sha: {
        title: "Sha",
        type: "string"
      }
    }
  },
  fn: function getSha(input, $, output, state, done, cb, on) {
    var r = function() {
      $.repo.getSha($.branch, $.path, function getShaCallback(error, sha) {
        cb({
          error: error,
          sha: sha
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}