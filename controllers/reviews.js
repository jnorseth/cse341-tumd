module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/reviews'
    	// #swagger.tags = ['Review']
        // #swagger.description = 'Get list of all reviews'

        response.status(200).send('You are at /reviews');
    });

    router.get('/:review_id', (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'query',
                description: 'The ID of the review to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/reviews/:review_id'
            #swagger.tags = ['review']
            #swagger.description = 'Get a specific review by review_id'
        */

        response.status(200).send('You are at /reviews/:review_id');
    });

    return router;
};