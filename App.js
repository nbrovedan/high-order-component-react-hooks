import React, { Component, useState, useEffect } from 'react';

import Infos from './components/Infos';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';

const App = () => {
  const [infoData, setInfoData] = useState(false);
  const [reposListData, setReposListData] = useState(false);
  const [starredListData, starredListData] = useState(false);

  useEffect(() => {
    setTimeout(() => setInfoData(true), 5000);
    setTimeout(() => setReposListData(true), 3000);
    setTimeout(() => starredListData(true), 1500);
  }, []);

  return (
    <div className="App">
      <Infos data={infoData} />
      <ReposList data={reposListData} />
      <StarredList data={starredListData} />
    </div>
  );
}

export default App;