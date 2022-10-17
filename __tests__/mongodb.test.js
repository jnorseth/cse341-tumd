const { MongoClient } = require('mongodb');

require('dotenv').config();

describe('insert', () => {
    let connection, db;

    beforeAll(async () => {
        connection = await MongoClient.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        db = await connection.db(process.env.MONGO_DB_NAME);
    });

    afterAll(async () => {
        await connection.close();
    });

    const mockUser = { _id: 'some-user-id', name: 'John' };

    it('Insert user', async () => {
        const users = db.collection('users');

        const result = await users.insertOne(mockUser);

        expect(result.insertedId).toEqual('some-user-id');
    });

    it('Find inserted user', async () => {
        const users = db.collection('users');

        const insertedUser = await users.findOne({ _id: 'some-user-id' });

        expect(insertedUser).toEqual(mockUser);
    });

    it('Delete inserted user', async () => {
        const users = db.collection('users');

        const mockUser = { _id: 'some-user-id', name: 'John' };

        const deletedUser = await users.deleteOne(mockUser);

        expect(deletedUser.deletedCount).toEqual(1);
    });
});

