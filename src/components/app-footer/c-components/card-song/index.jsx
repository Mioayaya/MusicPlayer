import React, { memo,useState } from 'react'
import { useDispatch } from 'react-redux';

import { setSongInformShow } from '../../../../store/slices/play-list';
import { MioFooterCardSongDiv } from './css'

const typeList = ['普通模式','纯享模式','歌词模式','封面模式']

const MioFooterCardSong = memo((props) => {
  const { theme,songId,cardShow,setCardShow } = props;
  const [ typeShow,setTypeShow ] = useState(0);
  const dispatch = useDispatch();

  // methods
  const showSongDetail = () => {
    setCardShow(false);
    dispatch(setSongInformShow(false));
  }

  return (
    <MioFooterCardSongDiv theme={theme} cardShow={cardShow}>
      <span className="down" title="收起歌曲详情页">
        <div className="btn" onClick={e => showSongDetail()}>▼</div>
      </span>
      <span className="btn-list">
        <div className="suki btn" title="喜欢该歌曲">❤</div>
        <div className="add btn"title="添加到歌单">+</div>
      </span>
      <span className="model">
        <div className="model-menu">
          <div className="option">{typeList[typeShow]}</div>
          <div className="type">
            { 
              typeList.map((item,index) => {
                return(
                  <div key={item}
                       className={index==typeShow?'type-item active':'type-item'}
                       onClick={e => setTypeShow(index)}
                  >
                    {item}
                  </div>
                )
              })
            }    
          </div>
        </div>        
      </span>
    </MioFooterCardSongDiv>
  )
})

export default MioFooterCardSong