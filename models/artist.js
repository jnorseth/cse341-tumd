module.exports = (dependencies) => {
    const artist = new dependencies.mongoose.Schema({
        first_name: String,
        last_name: String,
        gender: String,
        date_of_birth: Date
    });

    dependencies.mongoose.model('Artist', artist);
};