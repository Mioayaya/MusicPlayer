// 定义一个container 高为一屏高
// 定义一个listWrapper 高为所有列表元素的高度，来撑开容器
// 定义一个itemWrapper 高为一屏高度，来跟随上、下拉操作进行位移，从而总是覆盖展示在当前屏

// 滚动时关键值计算：
//    一屏个数 limit： 1+(Math.ceil(containerHeight / itemHeight))  加1是预加载，多加载一项减少抖动
//    start: 一屏的起始索引 Math.floor(scrollTop / itemHeight) 即滚动了几个元素
//    end: 一屏的结束索引 start+limit
//    transformY： 
//                下拉的位移。 滚动时，根据scrollTop计算出滚动过多少个元素，设置对应的start和end, 那么listWrapper的transformY值即为start*itemHeight(一屏起始索引*列表项高度)。下拉多少，就向下位移多少，让其一直展示在首屏

import React, { useState, useMemo, memo } from 'react'
import './css.less'
import { useCallback } from 'react';
import { useRef } from 'react';

const ReactVirtualList = memo((props) => {
  let { list, item: Item, contentWidth, contentHeight, itemHeight } = props

    const [start, setStart] = useState(0)

    const listDom = useRef()

    // 显示的最大条数
    const limit = useMemo(() => {
        return 1 + Math.ceil(contentHeight / (itemHeight))
    }, [contentHeight, itemHeight]);

    // 滚动事件
    const scrollHandler = useCallback((e) => {
            const top = e.target.scrollTop
            const curStart = Math.floor(top / (itemHeight))
            curStart !== start && setStart(curStart)
        },[itemHeight, start])

    // 结束位置
    const end = useMemo(() => {
        return Math.min(start + limit, list.length)
    }, [start, limit, list]);

    const renderList = useMemo(() => {
        return list
            .slice(start, end)
            .map((v, i) => (
                <span key={v.id} id={v.id} itemHeight={itemHeight} >
                    <Item value={v.v}></Item>
                </span>
            ))
    }, [start, end, list, itemHeight]);

    const transformY = useMemo(() => {
        return start * itemHeight + 'px'
    }, [start, itemHeight]);

    return (
      <div className='island-virtual-list' 
           ref={listDom} 
           onScroll={(e) => scrollHandler(e)} 
           style={{ width: contentWidth + 'px', height: contentHeight + 'px' }}
      >
        <div className="listWrapper" 
             style={{ height: itemHeight * list.length + 'px' }}
        >
            <div className="itemWrapper" 
                 style={{ height: contentHeight + 'px', transform: `translate3d(0, ${transformY}, 0)` }}
            >
                {renderList}
            </div>
        </div>
    </div>
    )
     
})

export default ReactVirtualList