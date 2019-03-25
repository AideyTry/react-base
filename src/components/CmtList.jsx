import React from 'react'

//导入评论项子组件
import CmtItem from '@/components/CmtItem'
import commonCss from '@/assets/css/common.css'
//使用class关键字，定义父组件
export default class CmtList extends React.Component{
  constructor() {
    super()
    this.state = {
      CommentList : [
        {id: 1, name: '张三', content: 'haha'},
        {id: 2, name: '李四', content: 'hehe'},
        {id: 3, name: '王五', content: '嘿嘿'},
        {id: 4, name: '赵六', content: '哈哈'}
      ]
    }
  }
  render() {
    return <div>
      <h1 className={commonCss.title}>这是评论列表组件</h1>
      {this.state.CommentList.map((item) => <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}