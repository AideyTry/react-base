import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
import CmtList from '@/components/CmtList'
import BindEvent from '@/components/BindEvent'
const dog = {
  name: '小黄',
  age: 3,
  gender: '公'
}
ReactDOM.render(<div>
  <Hello {...dog}></Hello>
  <CmtList></CmtList>
  <hr />
  <BindEvent></BindEvent>
</div>, document.getElementById('app'))