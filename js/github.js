class Github 
{
    constructor() {
        this.client_id = "9a328df8fc89f6e6e3d9";
        this.client_secret = "95d5e4387b75f59be8615930f378bace8ff5cc9b";
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}