import React, { memo,useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

import { MioMineDiv } from './css';
import { getUserStatus,getUserSubcount } from '../../axios/server/userLogin';
import { getUserInform } from '../../axios/server/usersInform';

import MioMineShow from './child-pages/mine-show';
import MioMineChange from './child-pages/mine-change';
import { setUserOtherInformData } from '../../store/slices/user-inform';
import { useHistory } from 'react-router';

const MioMine = memo(() => {
  // 全局变量
  const theme = useSelector(state => state.themeSlice.theme);
  const userInform = useSelector(state => state.userInformSlice.userInform);
  const userOtherInformData = useSelector(state => state.userInformSlice.userOtherInform.data);
  const userLogin = useSelector(state => state.showSlice.userLogin);
  
  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const [show,setShow] = useState(true);
  const [save,setSave] = useState(0);

  useEffect(() => {
    if(!userLogin) {
      history.push({
        pathname: '/login'
      })
    }
  },[userLogin])

  useEffect(() => {
    // const url = getUserSubcount(sessionStorage.getItem('cookie'));
    // axios.get(url).then(res => {console.log(res);}).catch(err => {console.log(err);})
    getUserInform(userInform.id).then(res => {
      const data = {level:res.level,createTime:res.createTime,
                    createDays:res.createDays,listenSongs:res.listenSongs,
                    peopleCanSeeMyPlayRecord:res.peopleCanSeeMyPlayRecord,
                    ...res.profile};
      dispatch(setUserOtherInformData(data));
    })
  },[save])

  // 业务代码
  const startSetShow = () => {
    setShow(!show)
  }
  return (
    <MioMineDiv theme={theme}>
      {
        userLogin 
        &&
        (
          show 
          ? 
          <MioMineShow startSetShow={e => startSetShow()} 
                       userOtherInformData={userOtherInformData}
                       theme = {theme}
                       uid = {userInform.id}
          />
          : <MioMineChange startSetShow={e => startSetShow()}
                           save={e => setSave(save+1)}
            />
        )
      }        
    </MioMineDiv>
  )
})

export default MioMine