export interface IReminder {
  id: number;
  title: string;
  date: string;
  time: string;
}

export interface IReminderList {
  reminderList: IReminder[];
  handleDeleteReminder: (id: number) => void;
  handleEditReminder(reminder: IReminder): void;
}
