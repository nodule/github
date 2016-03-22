module.exports = {
  name: "show",
  ns: "github",
  description: "Show Repository",
  phrases: {
    active: "Reading {{input.path}} from the {{input.branch}} branch"
  },
  ports: {
    input: {
      repo: {
        title: "Repository",
        type: "function"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      repo: {
        title: "Repository",
        type: "function"
      }
    }
  },
  fn: function show(input, $, output, state, done, cb, on) {
    var r = function() {
      $.repo.show(function showCallback(error, repo) {
        cb({
          error: error,
          repo: repo
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