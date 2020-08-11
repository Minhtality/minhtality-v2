import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [pageData,setPageData] = useState(null);

  return (
    <div>{JSON.stringify(pageData)}</div>
  );
}

export default App;
