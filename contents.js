module.exports = {
  name: "contents",
  ns: "github",
  description: "Get contents at a particular path",
  phrases: {
    active: "Reading contents of{{input.path}}"
  },
  ports: {
    input: {
      repo: {
        title: "Repository",
        type: "function"
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
      contents: {
        title: "Contents",
        type: "string"
      }
    }
  },
  fn: function contents(input, $, output, state, done, cb, on) {
    var r = function() {
      $.repo.contents($.branch, $.path, function contentsCallback(error, contents) {
        cb({
          error: error,
          contents: contents
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