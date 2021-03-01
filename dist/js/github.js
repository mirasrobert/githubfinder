class Github {
  constructor() {
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
