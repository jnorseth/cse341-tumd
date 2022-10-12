module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/'
    	// #swagger.tags = ['Hone']
        // #swagger.description = 'This is the home page. It does not do much; atleast not so far.'

        response.status(200).send('You are at /');
    });

    return router;
};