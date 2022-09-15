import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cloths, pureColor } from '../../../axios/local-data/cloths';
import { setTheme } from '../../../store/slices/theme';

import { MioChangeClothsDiv } from './css'

const MioChangeCloths = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  
  const clothsClick = (color) => {
    dispatch(setTheme(color));
  }

  return (
    <MioChangeClothsDiv theme={theme}>
      <div className="event">
        <div className="title">主题</div>
        <div className="color">
          {
            cloths.map(item => (
              <div className="item-cloths"
                   key={item.key}
                   onClick={e => clothsClick(item.key)}
              >
                <img src={item.pic} alt="" />
                <div className="desc">{item.theme}</div>
                <div className="active" style={{display: theme==item.key?'block':'none'}}>✅</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="pure">
        <div className="title">纯色</div>
        <div className="color">
          {
            pureColor.map(item => (
              <div className="item-cloths"
                   key={item.key}
                   style={{backgroundColor: item.color}}
                   onClick={e => clothsClick(item.key)}
              >
                <div className="active" style={{display: theme==item.key?'block':'none'}}>✅</div>
              </div>
            ))
          }
        </div>
      </div>
    </MioChangeClothsDiv>
  )
})

MioChangeCloths.propTypes = {}

export default MioChangeCloths