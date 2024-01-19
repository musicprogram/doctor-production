import { useState } from 'react'

import {
  RecoilRoot
} from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'
import {DashMain} from "./components/main/DashMain.jsx";

function App() {


  return (
    <>
      <RecoilRoot>
        <div className="back1">
          <DashMain/>
        </div>
      </RecoilRoot>
    </>
  )
}

export default App
