module.exports = (dependencies) => {
    const genre = new dependencies.mongoose.Schema({
        name: String
    });

    dependencies.mongoose.model('Genre', genre);
};