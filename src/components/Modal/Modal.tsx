import { ILayout } from '../../interfaces/layout';
import styles from './Modal.module.css';

function Modal({ children }: ILayout) {
  const handleCloseModal = (event: React.MouseEvent) => {
    const modal = document.querySelector('#modal') as HTMLElement;
    modal!.classList.add('modal__hide');
  };

  return (
    <section id="modal" className="modal__hide">
      <div className={styles.modal__fade} onClick={handleCloseModal}></div>

      <div className={styles.modal__open}>
        <div className={styles.modal__close}>
          <i className="bi bi-x-lg" onClick={handleCloseModal}></i>
        </div>

        <h2 className={styles.modal__title}>Editar lembrete</h2>

        {children}
      </div>
    </section>
  );
}

export default Modal;
