import React from 'react'

const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0, 0, 10px #ccc'}
const nameStyle = { fontSize: '16px'} 
const contentStyle = { fontSize: '12px'}
// 使用function构造函数，定义普通的无状态组件
export default function CmtItem(props) {
  return <div style={itemStyle}>
    <h1 style={nameStyle}>评论人：{props.name}</h1>
    <p style={contentStyle}>评论内容：{props.content}</p>
  </div>
}