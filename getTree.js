module.exports = {
  name: "getTree",
  ns: "github",
  description: "Retrieve repo tree",
  phrases: {
    active: "retrieving {{input.branch}} tree"
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
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      tree: {
        title: "Tree",
        type: "object"
      }
    }
  },
  fn: function getTree(input, $, output, state, done, cb, on) {
    var r = function() {
      $.repo.getTree($.branch, function getTreeCallback(error, tree) {
        cb({
          error: error,
          tree: tree
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