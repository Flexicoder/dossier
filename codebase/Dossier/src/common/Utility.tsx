export default class Utility {
    static uniqueId() {
        // taken from https://stackoverflow.com/a/57593036/285190
        return (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
    }
}