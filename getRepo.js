module.exports = {
  name: "getRepo",
  ns: "github",
  description: "Get Repository",
  phrases: {
    active: "getting repository {{input.reponame}}"
  },
  async: true,
  ports: {
    input: {
      github: {
        title: "Github",
        type: "function",
        async: true,
        fn: function __GITHUB__(data, source, state, input, $, output) {
          var r = function() {
            output({
              repo: $.create($.github.getRepo($.username, $.reponame))
            })
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      username: {
        title: "Username",
        type: "string"
      },
      reponame: {
        title: "Repository name",
        type: "string"
      }
    },
    output: {
      repo: {
        title: "Repository",
        type: "function"
      }
    }
  },
  state: {},
  on: {}
}