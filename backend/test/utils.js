var mongoose = require('mongoose');

export const testUser = {
    username: 'mocha',
    email: 'mocha@tester.com',
    password: 'mediummochaicedlattewithwholemilk',
    passwordConf: 'mediummochaicedlattewithwholemilk',
};

export const testUserAuth = {
    username: 'mocha',
    password: 'mediummochaicedlattewithwholemilk',
    grant_type: 'password'
}

export const basicToken = 'ZG9uZWRldjo5N0g3RjRGRDcySkY3QlBRTDBHQUNaMQ==';

export function prepareServer(app, done) {
    app.finished = async () => {
        await dropDB();
        done();
    }
}

export function teardownServer(app, done) {
    app.server.close();
    mongoose.connection.close(done);
}

export function getTestUserClone() {
    return Object.assign({}, testUser);
}

export async function dropDB() {
    await mongoose.connection.db.dropDatabase();
}

export function withLogin() {

}