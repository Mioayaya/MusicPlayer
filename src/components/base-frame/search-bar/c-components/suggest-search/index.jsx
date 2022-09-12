import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getDetailSong } from '../../../../../axios/server/playSong';
import { setFirstPlay } from '../../../../../store/slices/play-list';
import { setUserCounter } from '../../../../../store/slices/user-inform';

import { MioSearchSuggestDiv } from './css'

const MioSearchSuggest = memo((props) => {
  const { theme,suggestObj,showSuggest,lostFocus} = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const transOrder = (order) => {
    let _ord = '歌曲'
    if(order == 'songs') _ord = '单曲';
    if(order == 'artists') _ord = '歌手';
    if(order == 'albums') _ord = '专辑';
    if(order == 'playlists') _ord = '歌单';
    return _ord;
  }

  const songClick = (id) => {
    getDetailSong(id).then(res => {
      dispatch(setFirstPlay(res.songs[0]));
    })
  }

  const playlistClick = (id) => {
    history.push({
      pathname: '/songlistInfomation',
      search: `?id=${id}`,
    })
  }

  const artistClick = (keywords) => {
    history.push({
      pathname: '/search',
      search: `?keywords=${keywords}`
    })
    dispatch(setUserCounter());
    dispatch(setNavKey(99998));
  }

  return (
    <MioSearchSuggestDiv theme={theme} showSuggest={showSuggest}>
      {
        Object.keys(suggestObj).length != 0 
        ? suggestObj.order.map((item,index) => {
            return (
              <div className='search-item' key={index}>
                <span className="title">{transOrder(item)}</span>            
                {
                  suggestObj[item].map(itemx => {
                    return (                      
                      <>
                      {
                        item=='songs'
                        && 
                        // onClick id = id
                        <div className="item-list" onClick={e => songClick(itemx.id)}>
                          <span className="item-name">{itemx.name+' - '}</span>
                          <span className="item-author">
                            {
                              itemx.artists.map(itemy => {
                                return (
                                  <span className="author">{itemy.name+' '}</span>
                                )
                              })
                            }
                          </span>
                        </div>
                      }
                      {
                        item=='artists'
                        && 
                        // 歌手  id
                        <div className="item-list" onClick={e => artistClick(itemx.name)}>
                          <span className="item-name">{itemx.name}</span>
                        </div>
                      }
                      {
                        item=='albums'
                        &&
                        // 专辑 id
                        <div className="item-list">
                          <span className="item-name">{itemx.name+' - '}</span>
                          <span className="item-author">{itemx.artist.name}</span>
                        </div>
                      }
                      {
                        item=='playlists'
                        &&
                        // 歌单 id
                        <div className="item-list" onClick={e => playlistClick(itemx.id)}>
                          <span className="item-name">{itemx.name}</span>
                        </div>
                      }
                      </>
                    )
                            
                  })
                }
              </div>
            )
          })
        : <div className="wait">
            <span>今天听些什么呢~</span>
          </div>
      }
    </MioSearchSuggestDiv>
  )
})

export default MioSearchSuggest