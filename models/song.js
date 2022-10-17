module.exports = (dependencies) => {
    const song = new dependencies.mongoose.Schema({
        title: String,
        release_year: Number,
        rating: Number,
        summary: String
    });

    dependencies.mongoose.model('Song', song);
};