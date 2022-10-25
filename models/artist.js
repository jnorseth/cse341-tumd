module.exports = (dependencies) => {
    const artist = new dependencies.mongoose.Schema({
        first_name: String,
        last_name: String,
        date_of_birth: Date,
        gender: String
        
    });

    dependencies.mongoose.model('Artist', artist);
};