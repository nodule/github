module.exports = {
  name: "createRepo",
  ns: "github",
  async: true,
  description: "Create Repository",
  phrases: {
    active: "Creating repository {{input.name}}"
  },
  ports: {
    input: {
      github: {
        title: "Github",
        async: true,
        type: "function",
        fn: function __GITHUB__(data, source, state, input, $, output) {
          var r = function() {
            var repo = $.github.getRepo($.user, $.name);
            $.options.name = $.name;
            repo.createRepo($.options, function(err, result) {
              if (err) {
                output({
                  error: $.create(err)
                });
              } else {
                output({
                  out: $.create(result)
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      name: {
        title: "The name of the repository",
        type: "string"
      },
      options: {
        type: "object",
        title: "Options",
        properties: {
          description: {
            title: "Description",
            type: "string",
            description: "A short description of the repository",
            required: false
          },
          homepage: {
            title: "Homepage",
            type: "string",
            description: "URL with more information about the repository",
            required: false
          },
          auto_init: {
            title: "Auto Init",
            type: "boolean",
            description: "Pass true to create an initial commit with empty README.",
            "default": false
          },
          license_template: {
            title: "License",
            description: "Desired LICENSE template to apply.",
            type: "string",
            "enum": ["apache",
              "affero",
              "artistic",
              "gpl",
              "lgpl",
              "mit",
              "mozilla"
            ],
            "default": "mit"
          },
          "private": {
            title: "Private",
            type: "boolean",
            description: "Either true to create a private repository, or false to create a public one. Creating private repositories requires a paid GitHub account.",
            "default": false
          },
          has_issues: {
            title: "Issues",
            type: "boolean",
            description: "Either true to enable issues for this repository, false to disable them.",
            "default": true
          },
          has_wiki: {
            title: "Wiki",
            type: "boolean",
            description: "Either true to enable the wiki for this repository, false to disable it.",
            "default": true
          },
          has_downloads: {
            title: "Downloads",
            type: "boolean",
            description: "Either true to enable downloads for this repository, false to disable them.",
            "default": true
          },
          team_id: {
            title: "Team",
            type: "number",
            description: "The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.",
            required: false
          },
          gitignore_template: {
            title: "Auto Init",
            type: "string",
            description: "Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, “Haskell”. Ignored if the auto_init parameter is not provided.",
            required: false
          }
        }
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Result",
        type: "object"
      }
    }
  },
  state: {},
  on: {}
}