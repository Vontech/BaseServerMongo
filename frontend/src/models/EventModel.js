import CalendarItemModel from "./CalendarItemModel";

export default class EventModel extends CalendarItemModel {
  location: String; // Make this a Google Maps location in the future

  constructor(title: String, startDate: Date, endDate: Date, 
              description: String, category: String, color: String, location: String) {

      super(title, startDate, endDate, description, category, color);

      this.location = location;

    }
}
