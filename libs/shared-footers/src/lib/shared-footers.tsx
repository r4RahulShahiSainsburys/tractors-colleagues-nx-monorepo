import styles from './shared-footers.module.scss';

/* eslint-disable-next-line */
export interface SharedFootersProps {
  year:number
}

export function SharedFooters(props: SharedFootersProps) {
  return (
    <div className={styles['container']}>
      <h1>
      Sainsbury’s, Helping everyone eat better
© J Sainsbury plc {props.year}
</h1>
    </div>
  );
}

export default SharedFooters;
