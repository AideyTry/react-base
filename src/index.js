import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
const dog = {
  name: '小黄',
  age: 3,
  gender: '公'
}
ReactDOM.render(<div>
  <Hello {...dog}></Hello>
</div>, document.getElementById('app'))