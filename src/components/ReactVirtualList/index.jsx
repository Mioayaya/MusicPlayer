import React, { useState, useMemo, memo } from 'react'
import {ReactVirtualListDiv} from './css.js'
import { useCallback } from 'react';
import { useRef } from 'react';

const ReactVirtualList = memo((props) => {
  let { list,totalLength, item: Item, contentWidth, contentHeight, itemheight,stayStyle,playId } = props
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
					<span key={item.id}
          >
						<Item value={{item,index:(index+start+1),stayStyle}}></Item>
					</span>
				))
    }, [start, end, list, itemheight,stayStyle,playId]);

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
            {
              list.length < totalLength
              &&
              <div className="loading">加载中</div>
            }
					</div>
        </div>
    </ReactVirtualListDiv>
    )
     
})

export default ReactVirtualList