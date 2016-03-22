module.exports = {
  name: "write",
  ns: "github",
  description: "Write File",
  phrases: {
    active: "Writing {{input.path}} to the {{input.branch}} branch. [{{input.commit_message}}]"
  },
  ports: {
    input: {
      repo: {
        title: "Repository",
        type: "function"
      },
      branch: {
        title: "Branch",
        type: "string",
        "default": "master"
      },
      path: {
        title: "Path",
        type: "string"
      },
      contents: {
        title: "Contents",
        type: "string"
      },
      commit_message: {
        title: "Commit message",
        type: "string"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  fn: function write(input, $, output, state, done, cb, on) {
    var r = function() {
      $.repo.write($.branch, $.path, $.contents, $.commit_message, function writeCallback(error) {
        cb({
          error: error
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