import React from 'react';
import Family from '../Component/Family';
import Body from '../Component/Body';
import Main from '../Component/Main';

const App=()=> {
  return (
    <div>
      <Family>
         <Main/>
         <Body/>
      </Family>
    </div>
  );
}

export default App;
