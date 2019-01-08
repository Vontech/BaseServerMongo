export default class CalendarItemModel {
  title: String;
  startDate: Date;
  endDate: Date;
  description: String;
  reminders: Date[];
  category: String; // TODO: Make enum
  color: String

  constructor(title: String, startDate: Date, endDate: Date, description: String, category: String, color: String) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.category = category;
    this.reminders = [];
    this.color = color;
  }

  addReminder() {

  }

}
