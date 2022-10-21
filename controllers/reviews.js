module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
       
        // #swagger.path = '/reviews'
        // #swagger.tags = ['Review']
        // #swagger.description = 'Get list of all reviews'

        response.status(200).send(reviews_all);
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
            #swagger.tags = ['Review']
            #swagger.description = 'Get a specific review by review_id'
        */

        response.status(200).send('You are at /reviews/:review_id (GET)');
    });

    // the complete path will be
    // /reviews/song/:song_id
    router.get('/song/:song_id', (request, response, next) => {
        /*
            #swagger.parameters['song_id'] = {
                in: 'query',
                description: 'The ID of the song to retrieve reviews of',
                required: true,
                type: 'number'
            }
            #swagger.path = '/reviews/song/:song_id'
            #swagger.tags = ['Review']
            #swagger.description = 'Get a list of reviews by song_id'
        */

        response.status(200).send('You are at /reviews/song/:song_id (GET)');
    });

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.path = '/reviews'
            #swagger.tags = ['Review']
            #swagger.description = 'Insert new review to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["body", "rating", "user"],
                    "properties": {
                        "body": {
                            "type": "string",
                            "example": "Some title..."
                        },
                        "rating": {
                            "type": "number",
                            "example": "Some release year..."
                        },
                        "user": {
                            "type": "string"
                        }
                    }
                }
            }
        */

        response.status(200).send('You are at /reviews (POST)');
    });

    router.put('/:review_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'query',
                description: 'The ID of the review to update',
                required: true,
                type: 'number'
            }
            #swagger.path = '/reviews'
            #swagger.tags = ['Review']
            #swagger.description = 'Updates a review specified by review_id'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["body", "rating", "user"],
                    "properties": {
                        "body": {
                            "type": "string",
                            "example": "Some title..."
                        },
                        "rating": {
                            "type": "number",
                            "example": "Some release year..."
                        },
                        "user": {
                            "type": "string"
                        }
                    }
                }
            }
        */

        response.status(200).send('You are at /:review_id (PUT)');
    });

    router.delete('/:review_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'query',
                description: 'The ID of the review to delete',
                required: true,
                type: 'number'
            }
            #swagger.path = '/reviews/:review_id'
            #swagger.tags = ['Review']
            #swagger.description = 'Deletes a review specified by review_id'
        */

        response.status(200).send('You are at /reviews/:review_id (DELETE)');
    });

    return router;
};