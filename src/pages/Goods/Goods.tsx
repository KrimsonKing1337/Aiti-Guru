import { Header, Table } from './components';

import * as styles from './Goods.scss';

export const Goods = () => {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <Table />
    </div>
  );
};
