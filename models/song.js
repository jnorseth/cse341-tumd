module.exports = (dependencies) => {
    const song = new dependencies.mongoose.Schema({
        title: String,
        release_year: Number,
        rating: Number,
        summary: String,
        artists: [dependencies.mongoose.Schema.ObjectId],
        genres: [dependencies.mongoose.Schema.ObjectId],
        reviews: [dependencies.mongoose.Schema.ObjectId]
    });

    dependencies.mongoose.model('Song', song);
};