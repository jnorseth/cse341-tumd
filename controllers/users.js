module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/users'
        // #swagger.tags = ['User']
        // #swagger.description = 'Get list of all users'

        response.status(200).send('You are at /users');
    });

    router.get('/:user_id', (request, response, next) => {
        /*
            #swagger.parameters['user_id'] = {
                in: 'query',
                description: 'The ID of the user to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/users/:user_id'
            #swagger.tags = ['User']
            #swagger.description = 'Get a specific user by user_id'
        */

        response.status(200).send('You are at /users/:user_id (GET)');
    });

    return router;
};