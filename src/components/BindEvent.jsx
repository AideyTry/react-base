import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render () {
    return <div>
      <p>BindEvent组件</p>
      <hr />
      {/* 注意：在React中，有一套自己的事件绑定机制；事件名是驼峰命名；onClick只接受function作为函数处理。箭头函数本身就是匿名的function函数。 */}
      <button onClick={() => { this.myclickHandler() }}>点击事件</button>
    </div>
  }

  // 这是一个实例方法
  myclickHandler () {
    console.log('点击事件')
  }
}