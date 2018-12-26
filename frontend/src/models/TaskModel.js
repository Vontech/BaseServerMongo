import CalendarItemModel from "./CalendarItemModel";

export default class TaskModel extends CalendarItemModel {
  priority: Integer;
  completed: boolean;

  constructor(title: String, startDate: Date, endDate: Date, 
              description: String, category: String, priority: Integer, completed: boolean) {

    super(title, startDate, endDate, description, category);

    this.priority = priority;
    this.completed = completed;

  }

}
