/*
 * Collections for all calendar events.
 * Ref: https://mongoosejs.com/docs/discriminators.html
 */

import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    reminders: {
        type: [{type: Date}],
        default: []
    },
    category: {
        type: String,
        required: false
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required: true
    }
});

const Events = mongoose.model('Events', EventSchema);

export default Events;