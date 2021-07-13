var getUserRepos = function() {
    fetch("https://api.github.com/users/otocat/repos")
};

getUserRepos();