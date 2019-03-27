import React from 'react'

export default class BindInputValue extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '嘿嘿'
    }
  }
  render () {
    return <div>
      <p>BindInputValue组件</p>
      <hr />
      {/* 注意：在React中，有一套自己的事件绑定机制；事件名是驼峰命名；onClick只接受function作为函数处理。箭头函数本身就是匿名的function函数。 */}
      {/* <button onClick={() => this.myclickHandler('猪头', '美女')}>点击事件</button> */}
      <h2>{this.state.msg}</h2>
      {/* 在React中数据是单向流动，从状态自动同步到页面上。 而vue双向数据绑定是状态值自动同步到页面，页面修改文本框的值又会同步到状态*/}

      {/* 如果我们只是把文本框的value属性，绑定到state状态，但是如果不提供onChange处理函数的话，得到的文本框，将会是一个只读的文本框。当为文本框绑定value值以后，要么同时提供一个readOnly，要么提供一个onChange处理函数。 */}
      <input type="text" value={this.state.msg} onChange={(e) => { this.txtChanged(e) }} />
    </div>
  }

  // 这是一个实例方法
  myclickHandler (arg1, arg2) {
    // 在React中，推荐使用this.setState({})修改状态值state中的数据
    this.setState({
      // 在setState，只会把对应的state状态更新，而不会覆盖其他的state状态。
      // 注意： this.setState方法的执行是异步的。如果想立刻拿到最新的state的值，需要使用this.setState({}, callback)。在callback回调函数中获取。
      msg: arg1 + arg2
    }, () => {
      console.log('msg=', this.state.msg)
    })
  }

  txtChanged (e) {
    // 1、通过参数e获取   e.target.value
    // 2、在React中，也有ref，如果要获取元素的引用   this.refs.引用名称;  this.refs.定义的ref名称.value
    this.setState({
      msg: e.target.value
    })
  }
  // React中数据双向绑定
  // 数据单向流： 默认情况下，在React中，如果页面上的表单元素，绑定了state上的状态值，那么，每当state上状态值变化，必然会自动把最新的状态值，自动同步到页面上。
  /* 如果UI页面上，文本框的内容变化了，想要把最新的值，同步回state中去，此时，React没有这种自动同步机制，在React中需要程序员操作。
    1.在React中，需要程序员手动监听文本框的onChange事件；
    2.在onChange事件中，拿到最新的文本框的值；
    3.程序员调用this.setState({})手动把最新的值同步到state中。
  */
}