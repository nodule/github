module.exports = {
  name: "read",
  ns: "github",
  async: true,
  description: "Read path",
  phrases: {
    active: "Reading {{input.path}} from the {{input.branch}} branch"
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
        type: "string",
        async: true,
        fn: function __PATH__(data, x, source, state, input, $, output) {
          var r = function() {
            $.repo.read(
              $.branch,
              $.path,
              function(err, content, sha) {
                if (err) {
                  output({
                    error: $.create(err)
                  });
                } else {
                  output({
                    content: $.create(content),
                    sha: $.create(sha)
                  });
                }
              }
            );
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
      },
      content: {
        title: "Content",
        type: "object"
      },
      sha: {
        title: "SHA",
        type: "object"
      }
    }
  },
  state: {}
}