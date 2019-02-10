
import moment from 'moment';
import Events from '../models/events.model';
import logger from '../setup/logger';

const controller = {};

/**
 * Creates an event given a title, start date, end date,
 * description, reminders (optional), category, and user.
 */
controller.createEvent = async (req, res, next) => {

  let err = await validateCreateEvent(req.body);
  if (err) {
    res.status(err.status);
    res.json({message: err.message});
    return;
  }

  // Event request is valid! Create and save the request
  let newEvent = new Events({
    title: req.body.title,
    startDate: moment(req.body.startDate).toDate(),
    endDate: moment(req.body.endDate).toDate(),
    description: req.body.description,
    reminders: req.body.reminders || [],
    category: req.body.category,
    user: req.session.user
  });

  newEvent.save((err, doc) => {
    if (err) {
      res.status(500);
      res.json({message: err});
    } else {
      res.status(200);
      res.json({message: `Event '${req.body.title}' created`, event: doc});
      logger.info(`Created new event with title '${req.body.title}'`);
    }
  });

}

/**
 * Gets all events for the current user.
 */
controller.getEvents = async (req, res, next) => {

  Events.find({user: req.session.user}, (err, results) => {
    if (err) {
      res.status(500);
      res.json({message: err});
    } else {
      res.status(200);
      res.json({events: results});
    }
  });

}

/**
 * Updates the events by providing a new title, start
 * date, end date, description, or category. Reminders
 * should be added through the addReminder, removeReminder,
 * and updateReminder events.
 */
controller.updateEvent = async(req, res, next) => {

}

/**
 * Deletes a given event from the database.
 */
controller.deleteEvent = async(req, res, next) => {

}

/**
 * Adds a reminder to an event.
 */
controller.addReminder = (req, res, next) => {

}

/**
 * Removes a reminder from an event.
 */
controller.removeReminer = (req, res, next) => {

}

/**
 * Updates a reminder for an event.
 */
controller.updateReminder = (req, res, next) => {

}

/**
 * Validate the event creation routine in the following ways:
 *  - Title is present and valid
 *  - Start date is present and is a valid date
 *  - End date is present and is a valid date
 *  - Reminders is an array, if present
 * @param {*} body 
 * @returns null if no error, or an error string otherwise
 */
async function validateCreateEvent(body) {
  return null;
}


export default controller;