on.input.github = function() {
  output({
    repo: $.create($.github.getRepo($.username, $.reponame))
  })
}
