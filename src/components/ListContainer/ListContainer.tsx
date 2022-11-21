import { useState } from 'react';
import { IReminder } from '../../interfaces/reminder';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';
import ReminderList from '../ReminderList/ReminderList';

function ListContainer() {
  const [reminderList, setReminderList] = useState<IReminder[]>([]);
  const [updateReminder, setUpdateReminder] = useState<IReminder | null>(null);

  const handleDeleteReminder = (id: number) => {
    setReminderList(reminderList.filter((reminder) => reminder.id !== id));
  };

  const hideOrShowModal = (isModal: boolean) => {
    const modal = document.querySelector('#modal') as HTMLElement;
    isModal
      ? modal!.classList.remove('modal__hide')
      : modal!.classList.add('modal__hide');
  };

  const handleEditReminder = (reminder: IReminder) => {
    hideOrShowModal(true);
    setUpdateReminder(reminder);
  };

  const handleReminderUpdate = (reminder: IReminder) => {
    const newReminderList = reminderList.map((item) =>
      item.id === reminder.id ? reminder : item,
    );
    setReminderList(newReminderList);

    hideOrShowModal(false);
  };

  return (
    <>
      <Modal
        children={
          <Form
            buttonText="Editar Lembrete"
            reminderList={reminderList}
            reminderEdit={updateReminder}
            handleReminderUpdate={handleReminderUpdate}
          />
        }
      />
      <Form
        buttonText="Criar Lembrete"
        reminderList={reminderList}
        setReminderList={setReminderList}
      />

      <ReminderList
        reminderList={reminderList}
        handleDeleteReminder={handleDeleteReminder}
        handleEditReminder={handleEditReminder}
      />
    </>
  );
}

export default ListContainer;
