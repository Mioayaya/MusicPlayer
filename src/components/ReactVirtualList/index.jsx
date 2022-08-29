import React, { useState, useMemo, memo } from 'react'
import {ReactVirtualListDiv} from './css.js'
import { useCallback } from 'react';
import { useRef } from 'react';

const ReactVirtualList = memo((props) => {
  let { list, item: Item, contentWidth, contentHeight, itemheight } = props

    const [start, setStart] = useState(0)

    const listDom = useRef()

    const limit = useMemo(() => {
			return 1 + Math.ceil(contentHeight / (itemheight))
    }, [contentHeight, itemheight]);

    const scrollHandler = useCallback((e) => {
			const top = e.target.scrollTop
			const curStart = Math.floor(top / (itemheight))
			curStart !== start && setStart(curStart)
    },[itemheight, start])

    // 结束位置
    const end = useMemo(() => {
        return Math.min(start + limit, list.length)
    }, [start, limit, list]);

    const renderList = useMemo(() => {
			return list
				.slice(start, end)
				.map((item, index) => (
					<span key={item.id} id={item.id} itemheight={itemheight} >
						<Item value={{item,index:(index+start+1)}}></Item>
					</span>
				))
    }, [start, end, list, itemheight]);

    const transformY = useMemo(() => {
      return start * itemheight + 'px'
    }, [start, itemheight]);

    return (
      <ReactVirtualListDiv 
				ref={listDom}
				style={{ width: contentWidth + 'px', height: contentHeight + 'px' }}
				theme = 'dark'
				onScroll={e => {scrollHandler(e)}}
			>
        <div className="listWrapper" 
					style={{ height: itemheight * list.length + 'px' }}
        >
					<div className="itemWrapper" 
						style={{ height: contentHeight + 'px', transform: `translate3d(0, ${transformY}, 0)` }}
					>
						{renderList}
					</div>
        </div>
    </ReactVirtualListDiv>
    )
     
})

export default ReactVirtualList