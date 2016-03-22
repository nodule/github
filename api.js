module.exports = {
  name: "api",
  ns: "github",
  description: "Github API",
  phrases: {
    active: "Authenticating with github api"
  },
  ports: {
    input: {
      oauth_token: {
        title: "OAUTH Token",
        type: "string"
      }
    },
    output: {
      github: {
        title: "Github",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "github-api": require('github-api')
    }
  },
  fn: function api(input, $, output, state, done, cb, on, github_api) {
    var r = function() {
      output = {
        github: $.create(new github_api({
          token: $.oauth_token
        }))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}