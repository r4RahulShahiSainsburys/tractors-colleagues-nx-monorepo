import styles from './shared-headers.module.scss';

/* eslint-disable-next-line */
export interface SharedHeadersProps {
  name : string
}

export function SharedHeaders(props: SharedHeadersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome {props.name}!</h1>
    </div>
  );
}

export default SharedHeaders;
