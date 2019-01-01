import chai from 'chai';
import chaiHttp from 'chai-http';
import {prepareServer, teardownServer, testUser, basicToken, testUserAuth, getTestUserClone} from '../utils';

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
                    // TODO: Assert user is actually in DB
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

        it('POST /api/users (invalid email)', (done) => {
            let badUser = getTestUserClone();
            badUser['email'] = "yolo";
            chai.request(app)
                .post('/api/users')
                .send(badUser)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').contains('email');
                    res.body.should.have.property('message').contains('valid');
                    done();
                  });
        });

        it('POST /api/users (mismatched passwords)', (done) => {
            let badUser = getTestUserClone();
            badUser['passwordConf'] = "yolo";
            chai.request(app)
                .post('/api/users')
                .send(badUser)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').contains('match');
                    done();
                  });
        });

        it('POST /api/users (missing fields)', (done) => {
            let badUser = getTestUserClone();
            delete badUser['email'];
            chai.request(app)
                .post('/api/users')
                .send(badUser)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').contains('email');
                    done();
                  });
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