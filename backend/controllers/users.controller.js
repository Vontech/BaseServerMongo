import bcrypt from 'bcrypt';
import Users from '../models/users.model';
import logger from '../setup/logger';

const controller = {};

controller.createUser = async (req, res, next) => {
  logger.info("Made it into createUser");
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    // Hash the password
    logger.info("Hashing password...");
    bcrypt.hash(req.body.password, 8, (errH, hash) => {
      if (errH) {
        logger.error(errH);
        return next(errH);
      }
      const userData = {
        email: req.body.email,
        username: req.body.username,
        password: hash,
      };
      logger.info("Creating actual user...");
      Users.create(userData, (err, user) => {
        if (err) {
          logger.error(err);
          return next(err);
        }
        logger.info(`New user '${user.username}' has been created`);
        return res.json({ message: `User with username '${user.username}' has been created` });
      });
    });
  } else {
    res.status(500);
    return res.json({ status: 500, message: 'Email, username, password, and passwordConf must be provided' });
  }
};

/**
 * Validate the user creation routine in the following ways:
 *  - Makes sure all fields are present
 *  - Makes sure the email is a valid email
 *  - Makes sure password meets a certain standard
 *  - Makes sure passwords match
 *  - Makes sure that this user does not already exist
 *  - Makes sure that the username is good enough
 * @param {*} body 
 * @returns null if no error, or an error string otherwise
 */
function validateCreateUser(body) {
  let baseError = "User create error - ";
  if (!body.email) {
    return baseError + "An valid email must be provided."
  }
}

export default controller;