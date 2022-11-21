import { FormEvent, useEffect, useState } from 'react';
import { IForm } from '../../interfaces/form';
import { IReminder } from '../../interfaces/reminder';
import styles from './Form.module.css';

function Form({
  buttonText,
  reminderList,
  setReminderList,
  reminderEdit,
  handleReminderUpdate,
}: IForm) {
  const [reminder, setReminder] = useState<IReminder>({
    id: 0,
    title: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (reminderEdit) {
      setReminder({
        id: reminderEdit.id,
        title: reminderEdit.title,
        date: reminderEdit.date,
        time: reminderEdit.time,
      });
    }
  }, [reminderEdit]);

  const handleChangeReminder = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setReminder({ ...reminder, [target.name]: target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newReminder: IReminder = {
      id: Math.floor(Math.random() * 1000),
      title: reminder.title,
      date: reminder.date,
      time: reminder.time,
    };

    if (!reminder.title || !reminder.date || !reminder.time) {
      return alert('Preencha todos os campos');
    }

    if (handleReminderUpdate) {
      handleReminderUpdate(reminder);
    } else {
      setReminderList!([...reminderList, newReminder]);
    }

    setReminder({
      id: 0,
      title: '',
      date: '',
      time: '',
    });
  };

  return (
    <section>
      <h2 className={styles.container__title}>Quais os lembretes do dia ?</h2>

      <form className={styles.form} onSubmit={onSubmit as any}>
        <div className={styles.form__container}>
          <label htmlFor="reminder" className={styles.form__label}>
            Lembrete
          </label>
          <input
            type="text"
            id="reminder"
            name="title"
            placeholder="Lembrete"
            className={styles.form__input}
            value={reminder.title}
            onChange={handleChangeReminder as any}
          />
        </div>

        <div className={styles.form__container}>
          <label htmlFor="date" className={styles.form__label}>
            Data
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Data do lembrete"
            className={styles.form__input}
            value={reminder.date}
            onChange={handleChangeReminder as any}
          />
        </div>

        <div className={styles.form__container}>
          <label htmlFor="time" className={styles.form__label}>
            Horário
          </label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder="Horário do lembrete"
            className={styles.form__input}
            value={reminder.time}
            onChange={handleChangeReminder as any}
          />
        </div>

        <input
          type="submit"
          value={buttonText}
          className={styles.form__submit}
        />
      </form>
    </section>
  );
}

export default Form;
