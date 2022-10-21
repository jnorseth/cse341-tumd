module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {
       
        // #swagger.path = '/reviews'
        // #swagger.tags = ['Review']
        // #swagger.description = 'Get list of all reviews'

        const reviews = await dependencies.models.review.find();

        for(const review of reviews) {
            // transforms the user ID to nickname
            const user_id = review.user;
            review.user = (await dependencies.models.user.findOne({_id: user_id})).nickname;

            // transforms the numeric song ID to title
            const song_id = review.song;
            review.song = (await dependencies.models.song.findOne({_id: song_id})).title;
        }

        response.status(200).send(reviews);
    });

    router.get('/:review_id', async (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'path',
                description: 'The ID of the review to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/reviews/{review_id}'
            #swagger.tags = ['Review']
            #swagger.description = 'Get a specific review by review_id'
        */

        const review = await dependencies.models.review.findOne({_id: request.params.review_id});

        if(!review) {
            return response.status(404).send('Review not found');
        }

        // transforms the user ID to nickname
        const user_id = review.user;
        review.user = (await dependencies.models.user.findOne({_id: user_id})).nickname;

        // transforms the numeric song ID to title
        const song_id = review.song;
        review.song = (await dependencies.models.song.findOne({_id: song_id})).title;

        response.status(200).send(review);
    });

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), async (request, response, next) => {
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
                            "example": 4.5
                        },
                        "user": {
                            "type": "string"
                        },
                        "song": {
                            "type": "string"
                        }
                    }
                }
            }
        */

        const review = await dependencies.models.review.create(request.body);

        response.status(201).send(review._id);
    });

    router.put('/:review_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'path',
                description: 'The ID of the review to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/reviews/{review_id}'
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
                            "example": 4.5
                        },
                        "user": {
                            "type": "string"
                        },
                        "song": {
                            "type": "string"
                        }
                    }
                }
            }
        */

        const result = await dependencies.models.review.updateOne({_id: request.params.review_id}, request.body);

        response.status(204).send('Updated review with ID: ' + request.params.review_id);
    });

    router.delete('/:review_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['review_id'] = {
                in: 'path',
                description: 'The ID of the review to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/reviews/{review_id}'
            #swagger.tags = ['Review']
            #swagger.description = 'Deletes a review specified by review_id'
        */
       
        const result = await dependencies.models.review.deleteOne({_id: request.params.review_id});

        response.status(200).send('Deleted listing with ID: ' + request.params.review_id);
    });

    return router;
};