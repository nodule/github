module.exports = {
  name: "login",
  ns: "github",
  description: "Github Login",
  phrases: {
    active: "Logging into Github"
  },
  ports: {
    input: {
      username: {
        title: "Username",
        type: "string"
      },
      password: {
        title: "Password",
        type: "string",
        format: "password"
      }
    },
    output: {
      github: {
        title: "Github",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      "github-api": require('github-api')
    }
  },
  fn: function login(input, $, output, state, done, cb, on, github_api) {
    var r = function() {
      output = {
        github: $.create(new github_api({
          username: $.username,
          password: $.password
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