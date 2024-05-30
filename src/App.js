
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"

import Main from './fianl_subway_air/Main';

function App() {
  
  return (
    <div className="h-screen flex flex-col w-full max-w-screen-lg overscroll-y-auto mx-auto p-2">
     <RecoilRoot>
      <BrowserRouter>
         <Main />
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
