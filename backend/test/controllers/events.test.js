import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiAsPromised from 'chai-as-promised';
import {prepareServer, teardownServer, withLogin, getRawTestEvents, app} from '../utils';

import Events from '../../models/events.model';

const { expect, assert } = chai;
const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Events', () => {

    before((done) => { prepareServer(done); });

    describe('basic event creation and access', () => {

        it('POST /api/s/event', (done) => {
            withLogin(chai.request(app).post('/api/s/event'), req => {
                req.send(getRawTestEvents()[0])
                req.end((err, res) => {
                        if (err) return done(err);
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        Events.find({user: req.user}, (err, res) => {
                            if (err) return done(err);
                            res.length.should.be.equal(1);
                            done();
                        });
                    })
            });
        });

        it('GET /api/s/event', (done) => {
            withLogin(chai.request(app).get('/api/s/event'), req => {
                req.end((err, res) => {
                        if (err) return done(err);
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('events').length(1);
                        res.body.events[0].title.should.be.equal('My New Event 1!');
                        done();
                    })
            });
        });

    });

    after((done) => { teardownServer('events', done); });

});