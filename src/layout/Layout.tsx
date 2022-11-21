import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ILayout } from '../interfaces/layout';
import styles from './Layout.module.css';

function Layout({ children }: ILayout) {
  return (
    <div>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
