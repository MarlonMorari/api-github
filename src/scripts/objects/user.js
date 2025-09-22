
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    eventsUrl: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.eventsUrl = gitHubUser.events_url
    },

    setRepositories(repositories) {
        this.repositories = repositories
    },

    setEvents(events) {
        this.events = events
    }
}

export { user }