import CalendarItemModel from "./CalendarItemModel";

export default class TaskModel extends CalendarItemModel {
  secondaryColor: String;
  priority: Integer;
  completed: boolean;

  constructor(title: String, startDate: Date, endDate: Date, 
              description: String, category: String, color: String, secondaryColor: String,
              priority: Integer, completed: boolean) {

    super(title, startDate, endDate, description, category, color);

    this.secondaryColor = secondaryColor;
    this.priority = priority;
    this.completed = completed;

  }

}
