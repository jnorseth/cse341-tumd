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
                id: users[user]._id,
                nickname: users[user].nickname,
                picture: users[user].picture,
                role: users[user].role
            });
        }

        response.status(200).send(users_processed);
    });

    router.get('/:user_id', async (request, response, next) => {
        /*
            #swagger.parameters['user_id'] = {
                in: 'path',
                description: 'The ID of the user to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/users/{user_id}'
            #swagger.tags = ['User']
            #swagger.description = 'Get a specific user by user_id'
        */

        const user = await dependencies.models.user.findOne({
            _id: request.params.user_id
        });

        if(!user) {
            return response.status(404).send('User not found');
        }

        const user_processed = {};

        user_processed.id = user._id;
        user_processed.nickname = user.nickname;
        user_processed.picture = user.nickname;
        user_processed.role = user.role;

        response.status(200).send(user_processed);
    });

    return router;
};