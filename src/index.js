import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
import CmtList from '@/components/CmtList'
import BindInputValue from '@/components/BindInputValue'
const dog = {
  name: '小黄',
  age: 3,
  gender: '公'
}
ReactDOM.render(<div>
  <Hello {...dog}></Hello>
  <CmtList></CmtList>
  <hr />
  <BindInputValue></BindInputValue>
</div>, document.getElementById('app'))