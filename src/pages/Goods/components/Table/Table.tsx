import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { goodsSelectors } from 'store/goods';

import { useTable } from './hooks';
import { Head, Body, Pagination, Header } from './components';

import * as styles from './Table.scss';

export const Table = () => {
  const isFetching = useSelector(goodsSelectors.isFetching);

  const { table, total } = useTable();

  const tableWrapperClassNames = classNames({
    [styles.TableWrapper]: true,
    [styles.isLoaded]: !isFetching,
  });

  return (
    <div className={styles.Wrapper}>
      <Header isFetching={isFetching} />

      <div className={tableWrapperClassNames}>
        <table className={styles.Table}>
          <Head table={table} />
          <Body table={table} />
        </table>

        <Pagination table={table} totalRows={total} />
      </div>
    </div>
  );
};
