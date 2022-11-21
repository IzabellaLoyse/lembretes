import { IReminderList } from '../../interfaces/reminder';
import { formatterDate } from '../../utils/formatterDate';
import { formatterTime } from '../../utils/formatterTime';
import styles from './ReminderList.module.css';

function ReminderList({
  reminderList,
  handleDeleteReminder,
  handleEditReminder,
}: IReminderList) {
  return (
    <section className={styles.container}>
      <h2>Seus lembretes</h2>

      <div>
        {!reminderList.length ? (
          <p>Nenhum lembrete encontrado</p>
        ) : (
          reminderList.map((reminder) => (
            <div key={reminder.id} className={styles.reminder}>
              <div className={styles.reminder__details}>
                <h4>{reminder.title}</h4>
                <p>
                  <span>Data:</span> {formatterDate(reminder.date)}
                </p>
                <p>
                  <span>Horário:</span> {formatterTime(reminder.time)}
                </p>
              </div>

              <div className={styles.reminder__actions}>
                <div className={styles.edit}>
                  <i
                    className="bi bi-pencil"
                    onClick={() => handleEditReminder(reminder)}
                  ></i>
                </div>

                <div className={styles.trash}>
                  <i
                    className="bi bi-trash"
                    onClick={() => {
                      handleDeleteReminder(reminder.id);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ReminderList;
