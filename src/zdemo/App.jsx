import React, { memo } from 'react'
import ReactVirtualList from './ReactVirtualList';

// 定义可是滚动的样式
const styleObj = {
  contentWidth: 800,
  contentHeight: 300,
  itemHeight: 10,
  itemWidth: 60
}

// 被传入的jsx, 最终渲染的每一条的 样式
const Item = (props) => {
  return <div className='list-item'>{props.value}</div>
}

// 数据列表
const list = Array(Math.floor((Math.random() + 1) * 10000)).fill().map((v, i, arr) => ({ id: i, v: i + '/' + arr.length + '   行' }))


const App = memo(() => {
  return <div className='app'>
    <ReactVirtualList {...styleObj} list={list} item={Item} ></ReactVirtualList>
  </div>
})

export default App