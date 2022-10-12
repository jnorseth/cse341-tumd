module.exports = (dependencies) => {
    const user = new dependencies.mongoose.Schema({
        nickname: String,
        name: String,
        picture: String,
        updated_at: Date,
        email: String,
        email_verified: Boolean,
        sub: String,
        sid: String,
        role: String
    });

    dependencies.mongoose.model('User', user);
};