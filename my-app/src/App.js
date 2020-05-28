// App.js

import React from 'react';
import styled from 'styled-components'
import GlobalStyle from './components/common/global-style'

const BaseBox = styled.div`
  width: 100px;
  height: 100px;
`

const RedBox = styled(BaseBox)`
  background-color: #ff0032;
`

const BlueBox = styled(BaseBox)`
  background-color: #00eaff;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <RedBox />
      <BlueBox />
    </div>
  );
}

export default App;