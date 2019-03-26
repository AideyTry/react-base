import React from 'react'
import styles from '@/components/styles'
import cssObj from '@/assets/css/cmtitem.scss'
console.log(cssObj)
// 使用function构造函数，定义普通的无状态组件
export default function CmtItem(props) {
  return <div style={styles.item} className={cssObj.cmtbox}>
    <h1 style={styles.name} className={cssObj.title}>评论人：{props.name}</h1>
    <p style={styles.content} className={cssObj.contentText}>评论内容：{props.content}</p>
  </div>
}