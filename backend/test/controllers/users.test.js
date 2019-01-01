import chai from 'chai';
import chaiHttp from 'chai-http';
import {prepareServer, teardownServer, testUser, basicToken, testUserAuth} from '../utils';

import app from '../../../server';

const { expect, assert } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {

    before((done) => { prepareServer(app, done); });

    describe('user creation and auth flow', () => {

        it('POST /api/users', (done) => {
            chai.request(app)
                .post('/api/users')
                .send(testUser)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User with username \'mocha\' has been created');
                    done();
                  });
        });

        it('POST /api/users (duplicate error)', (done) => {
            chai.request(app)
                .post('/api/users')
                .send(testUser)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(409);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').contains('exists');
                    done();
                  });
        });

        it.skip('POST /api/users (invalid email)', (done) => {
            
        });

        it.skip('POST /api/users (mismatched passwords)', (done) => {
            
        });

        it.skip('POST /api/users (missing fields)', (done) => {

        });

        it('POST /oauth/token', (done) => {
            chai.request(app)
                .post('/oauth/token')
                .set('content-type', 'application/x-www-form-urlencoded')
                .set('Authorization', `Basic ${basicToken}`)
                .send(testUserAuth)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token_type').eql('Bearer');
                    res.body.should.have.property('access_token');
                    res.body.should.have.property('refresh_token');
                    done();
                  });
        });

        it.skip('POST /oauth/token (invalid password)', (done) => {
            
        });

    });

    after((done) => { teardownServer(app, done); });

});