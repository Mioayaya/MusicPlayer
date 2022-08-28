import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { MioMineShowBottomDiv } from './css'

const MioMineShowBottom = memo((props) => {
  const { data } = props;
  return (
    <MioMineShowBottomDiv>
      { data }
    </MioMineShowBottomDiv>
  )
})

MioMineShowBottom.propTypes = {

}

export default MioMineShowBottom