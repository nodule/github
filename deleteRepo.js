module.exports = {
  name: "deleteRepo",
  ns: "github",
  description: "Delete Repository",
  phrases: {
    active: "Removing repository"
  },
  ports: {
    input: {
      repo: {
        title: "Repository",
        type: "function",
        fn: function __REPO__(data, x, source, state, input, output) {
          var r = function() {
            $.repo.deleteRepo(function(err) {
              if (err) {
                output({
                  error: $.create(err)
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  state: {}
}