module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {
        // #swagger.path = '/genres'
        // #swagger.tags = ['Genre']
        // #swagger.description = 'Get list of all genres'

        const genres = await dependencies.models.genre.find();

        const genres_getall= [];
        
        try {
        for(const genre of genres) {
            genres_getall.push({
                id: genre.id,
                name: genre.name
            });
        }
        response.status(200).send(genres_getall);
    }catch(err) {
        console.error(err);
    }
    });

    router.get('/:genre_id', async (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'path',
                description: 'The ID of the genre to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
            #swagger.tags = ['Genre']
            #swagger.description = 'Get a specific genre by genre_id'
        */
            const genre = await dependencies.models.genre.findOne({_id: request.params.genre_id});

            if(!genre) {
                return response.status(404).send('Genre not found');
            }
            const genres_processed = {};

            genres_processed.id = genre._id;
            genres_processed.name = genre.name;

            response.status(200).send(genres_processed);
    });

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.path = '/genres'
            #swagger.tags = ['Genre']
            #swagger.description = 'Insert new genre to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["name"],
                    "properties": {
                        "name": {
                            "type": "string",
                            "example": "Some title..."
                        }
                    } 
                }
            }
        */
        
            if (!request.body.name) {
                return response.status(400).send('One or more of the required fields are missing.');
            } else {
                //not sure if this is needed so I am commenting it out
                //next();
            }
            const new_genre = await dependencies.models.genre.create(request.body);

            if (!new_genre) {
                response.status(500).send('An error occured.');
            } else {
                response.status(201).send('Successfully added genre. ID: ' + new_genre._id);
            }
        });

    router.put('/:genre_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'path',
                description: 'The ID of the genre to update',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
            #swagger.tags = ['Genre']
            #swagger.description = 'Updates a genre specified by genre_id'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["name"],
                    "properties": {
                        "name": {
                            "type": "string",
                            "example": "Some title..."
                        }
                    }
                }
            }
        */
        const result = await dependencies.models.genre.updateOne({_id: request.params.genre_id}, request.body);
        response.status(200).send('Updated genre with ID: ' + request.params.genre_id);
    }); 

    router.delete('/:genre_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'path',
                description: 'The ID of the genre to delete',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
            #swagger.tags = ['Genre']
            #swagger.description = 'Deletes a genre specified by genre_id'
        */

            const result = await dependencies.models.genre.deleteOne({_id: request.params.genre_id});

            return response.status(200).send('Deleted genre with ID: ' + request.params.genre_id);
            
            /*
            const genre = dependencies.models.genre.findOne({_id: request.params.genre_id});
            if(!genre) {
                return response.status(404).send('Genre not found');
            }
            const genres_processed = {};

            genres_processed.id = genre._id;
            genres_processed.name = genre.name;

            response.status(200).send(genres_processed);
            */
    });

    return router;
};