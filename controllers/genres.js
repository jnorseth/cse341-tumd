module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/genres'
    	// #swagger.tags = ['Genre']
        // #swagger.description = 'Get list of all genres'

        response.status(200).send('You are at /genres');
    });

    router.get('/:genre_id', (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'query',
                description: 'The ID of the genre to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/genres/:genre_id'
            #swagger.tags = ['genre']
            #swagger.description = 'Get a specific genre by genre_id'
        */

        response.status(200).send('You are at /genres/:genre_id');
    });

    return router;
};