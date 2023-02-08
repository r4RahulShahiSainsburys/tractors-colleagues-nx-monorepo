import { ItractorsColleagues } from '@tractors-playback-workspace/shared-types';
import styles from './shared-colleagues-results.module.scss';

/* eslint-disable-next-line */
export interface SharedColleaguesResultsProps {
  colleagues : ItractorsColleagues[]
}

export function SharedColleaguesResults(props: SharedColleaguesResultsProps) {
  return (
    <div className={styles['container']}>
      <ul className={styles['colleagues-results-container']}>
        {props.colleagues.map((result) => (
          <li className={styles['colleagues-results-container-list']} key={result['id']}>{result['name']} - {result['emailId']} - {result['techStack']}
          </li>))}
      </ul>
    </div>
  );
}

export default SharedColleaguesResults;
