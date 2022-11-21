import React from 'react';
import { IReminder } from './reminder';

export interface IForm {
  buttonText: string;
  reminderList: IReminder[];
  setReminderList?: React.Dispatch<React.SetStateAction<IReminder[]>>;
  reminderEdit?: IReminder | null;
  handleReminderUpdate?(reminder: IReminder): void;
}
