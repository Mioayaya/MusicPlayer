import axios from 'axios';
import React, { memo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Message,Button } from "@arco-design/web-react";

import { getUserStatus,baseUrl } from '../../axios/server/userLogin';
import { MioLoginDiv  } from './css'
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../../store/slices/show';



const MioLogin = memo(() => {
  const [img,setImg] = useState('');
  const [loginFlag,setLoginFlag] = useState(false);
  const [sessionFlag,setSessionFlag] = useState('true');
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);

  useEffect(() => {
    // 如果登录成功 获取用户信息
    if(loginFlag) {
      sessionStorage.setItem('login','true');
      let cookie = sessionStorage.getItem('cookie');
      const url = getUserStatus(cookie);
      axios.get(url).then(res => {
        sessionStorage.setItem('userId',res.data.data.profile.userId);
        sessionStorage.setItem('userAvatar',res.data.data.profile.avatarUrl);
        sessionStorage.setItem('userNickname',res.data.data.profile.nickname);
      })
      history.push({
        pathname: '/',        
      })
    }
  },[loginFlag])

  useEffect(() => {
    let route = sessionStorage.getItem('login');
    setSessionFlag(route);
    // 如果已经是登录状态 则不显示 这个页面，强制跳转到首页 -- 
    if(route=='true') {
      
      history.push({
        pathname: '/',        
      })
    }
  },[])

  // 业务代码

  async function login() {
    let nowTime = Date.now();
    let key = (await axios.get(`${baseUrl}/login/qr/key?timestamp=${nowTime}`)).data.data.unikey;
    let sginImg = (await axios.get(`${baseUrl}/login/qr/create?key=${key}&qrimg=true`)).data.data.qrimg;
    setImg(sginImg);
    let check = setInterval(async () => {
      let nowtime2 = new Date().getTime();
      let res = await axios.get(`${baseUrl}/login/qr/check?key=${key}&timestamp=${nowtime2}`).then();
      // console.log(res.data.message, '---')
      if (res.data.code == 800) {
        // alert(res.data.message)
        Message.warning(res.data.message);
        clearInterval(check);
      }
      // 803登录成功
      if (res.data.code == 803) {
        // alert(res.data.message)
        Message.success(res.data.message);
        clearInterval(check);
        // 设置cookie
        const cookie = res.data.cookie;
        // 将cookie保存到本地中
        localStorage.setItem('cookie',cookie);
        // 将cookie保存到会话中
        sessionStorage.setItem('cookie',cookie);
        dispatch(setUserLogin());
        setLoginFlag(true);
      }
      // 等待两分钟
      if (nowtime2-nowTime>120000) {
        clearInterval(check);
      }
    }, 3000)
  } 

  return (
    <MioLoginDiv Imgurl={img} theme={theme}>
      {
        sessionFlag!='true' && 
            <div>
              <span>只支持二维码登录</span>
              <div className="login">
                <Button type="primary" onClick={e => {login()}}>获取二维码</Button>
                <div className="prcode"></div>        
              </div>
            </div>
        
      }
      
    </MioLoginDiv>
  )
})

export default MioLogin


// cookie:"MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Tue, 16 Aug 2022 17:36:09 GMT; Path=/;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_U=2002b29ec7ef9277cad92bebffdf3f8f4e72c3a986bf544ca1db5022df7e02cd993166e004087dd3dfbeac0b2792f6b4b6a78b861821c381423951cf9af5c75d491fe023767bda56d4dbf082a8813684; Max-Age=15552000; Expires=Sun, 12 Feb 2023 17:36:09 GMT; Path=/; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/api/feedback; HTTPOnly;NMTID=00OrD3-qaqW-26HBELLtUt_qBSH2hQAAAGCp7ohQQ; Max-Age=315360000; Expires=Fri, 13 Aug 2032 17:36:09 GMT; Path=/;;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/weapi/feedback; HTTPOnly;__csrf=ce6f2266f770b421e577bfef3d22b108; Max-Age=1296010; Expires=Wed, 31 Aug 2022 17:36:19 GMT; Path=/;;MUSIC_R_T=1660659446938; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1660659392792; Max-Age=2147483647; Expires=Sun, 03 Sep 2090 20:50:16 GMT; Path=/wapi/feedback; HTTPOnly"
// message: "授权登陆成功"