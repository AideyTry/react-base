import React from 'react'

//导入评论项子组件
import CmtItem from '@/components/CmtItem'
import commonCss from '@/assets/css/common.scss'

/*
如果在引用某个包的时候，这个包被安装到了node_modules目录中，则可以省略node_modules这一层目录，直接以包名开始引入自己的模块或样式表。
自己规定： 第三方的样式表，都是以.css结尾；自己定义的样式表，都要以.scss或.less结尾。这样我们不需要为普通的.css启用模块化；只为.scss或.less文件启用模块化。
*/
import bootCss from 'bootstrap/dist/css/bootstrap.css'
console.log('bootCss=', bootCss)
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
      <h1 className={[commonCss.title,'test'].join(' ')}>这是评论列表组件</h1>
      <button class="btn btn-primary">点击按钮</button>
      {this.state.CommentList.map((item) => <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}