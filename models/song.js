module.exports = (dependencies) => {
    const song = new dependencies.mongoose.Schema({
        title: String,
        release_year: Number,
        rating: Number,
        summary: String,
        artist: dependencies.mongoose.Schema.ObjectId|String
    });

    dependencies.mongoose.model('Song', song);
};