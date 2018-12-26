export default class CalendarItemModel {
  title: String;
  startDate: Date;
  endDate: Date;
  description: String;
  reminders: Date[];
  category: String; // TODO: Make enum

  constructor(title: String, startDate: Date, endDate: Date, description: String, category: String) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.category = category;
    this.reminders = [];
  }

  addReminder() {

  }

}
