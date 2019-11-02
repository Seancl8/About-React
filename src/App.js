import React from 'react';
import './App.css';

// 导入子组件
import FuncComponent from './components/FuncComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="APP">
      <FuncComponent name="张三丰" />
      <hr />
      <ClassComponent name="尹志平" age={777} />
    </div>
  )
}

export default App;
