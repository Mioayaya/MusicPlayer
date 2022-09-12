import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import MioWating from '../../components/loading/wating';

const MioFm = memo(() => {
  const history = useHistory();
  const Theme = useSelector(state => state.themeSlice.theme);

  useEffect(() => {
    const p = setTimeout(() => {
      history.push({
        pathname: '/'
      })
    },4000)
    return () => clearTimeout(p);
  },[])

  return (
    <div>
      <MioWating />
    </div>
  )
})

export default MioFm