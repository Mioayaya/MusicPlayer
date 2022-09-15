import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@arco-design/web-react'
import { Slider } from '@arco-design/web-react';

import { MioSettingsDiv } from './css'
import { useRef } from 'react'
import { useState } from 'react'
import { setBackground, setOpactityL } from '../../store/slices/show'

const MioSettings = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const bgUrl = useSelector(state => state.showSlice.backgroundUrl);
  const opacity = useSelector(state => state.showSlice.opacity);
  const [bgValue,setBgValue] = useState('');
  const [opcValue,setOpcValue] = useState(opacity*100);
  const nativePic = 'https://raften.cn/ayaya/pic/background/madoka.webp';
  
  const bgSubmit = (e) => {
    e.preventDefault();
    if(bgValue) {
      dispatch(setBackground(bgValue))
    }
  }

  const bgBack = () => {
    setBgValue(nativePic);
    dispatch(setBackground(nativePic));
  }

  const opcOnchange = (value) => {
    setOpcValue(value);
    dispatch(setOpactityL(value/100));
  }

  return (
    <MioSettingsDiv theme={theme}>
      <div className="title">设置</div>
      <div className="bg">
        <form action="" onSubmit={e => bgSubmit(e)}>
          <span className="tit">更换背景</span>
          <Input style={{ width: 500 }} 
                allowClear 
                defaultValue={bgUrl}
                placeholder="输入图片链接"
                onChange={(value,e) => setBgValue(value)}
                value={bgValue}
          />
          <span className='btn' onClick={e => bgSubmit(e)}>修改</span>
          <span className='btn' onClick={e => bgBack()}>复原</span>
        </form>
      </div>

      <div className="opc">
        <span className="tit">透明度调节</span>
        <Slider value={opcValue} 
                onChange={(value,e) => opcOnchange(value)}
                style={{ width: 200 }} 
        />
      </div>
    </MioSettingsDiv>
  )
})

export default MioSettings