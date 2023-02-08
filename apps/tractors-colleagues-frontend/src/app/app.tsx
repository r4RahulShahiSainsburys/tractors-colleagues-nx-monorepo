import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.scss';
import type { ItractorsColleagues } from "@tractors-playback-workspace/shared-types";
import { SharedHeaders } from "@tractors-playback-workspace/shared-headers";
import { SharedFooters } from "@tractors-playback-workspace/shared-footers";
import {SharedColleaguesResults} from "@tractors-playback-workspace/shared-colleagues-results"

export function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ItractorsColleagues[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tractors-colleagues/search?name=${search}`)
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, [search]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  },
    []);

  return (
    <div className={styles['app-container']}>
      <SharedHeaders name="Tractors Colleagues" />
      <section>
      <input type="text" value={search} placeholder="Search" onChange={handleSearch} />
      </section>
      <SharedColleaguesResults colleagues={results} />
      <SharedFooters year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
