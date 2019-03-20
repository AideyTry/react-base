import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
import CmtList from '@/components/CmtList'
const dog = {
  name: '小黄',
  age: 3,
  gender: '公'
}
ReactDOM.render(<div>
  <Hello {...dog}></Hello>
  <CmtList></CmtList>
</div>, document.getElementById('app'))