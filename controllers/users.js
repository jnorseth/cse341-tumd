module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {
        // #swagger.path = '/users'
        // #swagger.tags = ['User']
        // #swagger.description = 'Get list of all users. Only displays fields that can be considered safe for public. Fields like email address, etc are skipped'

        const users = await dependencies.models.user.find();

        const users_processed = [];
    
        for(const user in users) {
            users_processed.push({
                nickname: users[user].nickname,
                picture: users[user].picture,
                role: users[user].role
            });
        }

        response.status(200).send(users_processed);
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