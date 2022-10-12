module.exports = (dependencies) => {
    dependencies.app.use('/api-docs', dependencies.swagger_ui.serve, dependencies.swagger_ui.setup(dependencies.swagger_document));

    dependencies.app.get('/profile', dependencies.requires_authentication(), require('../controllers/authentication')(dependencies));
    
    dependencies.app.use('/songs', require('../controllers/songs')(dependencies));

    dependencies.app.use('/artists', require('../controllers/artists')(dependencies));

    dependencies.app.use('/reviews', require('../controllers/reviews')(dependencies));

    dependencies.app.use('/genres', require('../controllers/genres')(dependencies));

    dependencies.app.use('/users', require('../controllers/users')(dependencies));
};