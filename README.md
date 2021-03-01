# GithubFinder
A javascript application that searches for github users and its repositories using GitHub REST API v3.

# How to use:
Type any name or username github account to find.

# If you got undefined results:
Reminder: if you are not authenticated in GitHub API, you only have 60 response per hour.

# Basic Authentication
<code>$ curl -u "username" https://api.github.com</code>

# OAuth2 token (sent in a header)
<code>$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com</code>

Read here to for more details: https://docs.github.com/en/rest/overview/other-authentication-methods.
