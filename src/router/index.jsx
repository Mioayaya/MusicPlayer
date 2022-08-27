import React from "react";
import { Redirect } from "react-router";


const MioFoundMusic = React.lazy(_ => import("../pages/found-music"));
const MioFoundMusicRecommend = React.lazy(_ => import("../pages/found-music/child-pages/recommend"));
const MioFoundMusicPrivateCustom = React.lazy(_ => import("../pages/found-music/child-pages/private-custom"));
const MioFoundMusicSongList = React.lazy(_ => import("../pages/found-music/child-pages/song-list"));
const MioFoundMusicLeaderboard = React.lazy(_ => import("../pages/found-music/child-pages/leaderboard"));
const MioFoundMusicSinger = React.lazy(_ => import("../pages/found-music/child-pages/singer"));
const MioFoundMusicLatestMusic = React.lazy(_ => import("../pages/found-music/child-pages/latest-music"));

const MioMine = React.lazy(_ => import("../pages/mine"));
const MioRadio = React.lazy(_=> import("../pages/radio"));
const MioVideo = React.lazy(_=> import("../pages/video"));
const MioDynamic = React.lazy(_=> import("../pages/dynamic"));
const MioFm = React.lazy(_=> import("../pages/fm"));

const MioSonglistInformation = React.lazy(_ => import("../pages/songlist-information"));

const MioLogin = React.lazy(_ => import("../pages/Login"));
const routes = [
  {
    path: '/',
    exact: true,
    // element: <MioFoundMusic />
    render: () => (
      <Redirect to="/foundmusic"/>
    )
  },
  {
    path: '/foundmusic',
    component: MioFoundMusic,
    // 配置子路由
    routes: [
      {
        path: '/foundmusic',
        exact: true,
        render: () => (
          <Redirect to={"/foundmusic/recommend"}/>
        )
      },
      {
        path: '/foundmusic/recommend',
        exact: true,
        component: MioFoundMusicRecommend,
      },
      {
        path: '/foundmusic/custom',
        exact: true,
        component: MioFoundMusicPrivateCustom,
      },
      {
        path: '/foundmusic/songlist',
        exact: true,
        component: MioFoundMusicSongList,
      },
      {
        path: '/foundmusic/leaderboard',
        exact: true,
        component: MioFoundMusicLeaderboard,
      },
      {
        path: '/foundmusic/singer',
        exact: true,
        component: MioFoundMusicSinger,
      },
      {
        path: '/foundmusic/latestmusic',
        exact: true,
        component: MioFoundMusicLatestMusic,
      }
    ]
  },
  {
    path: '/mine',
    component: MioMine
  },
  {
    path: '/radio',
    component: MioRadio
  },
  {
    path: '/video',
    component: MioVideo
  },
  {
    path: '/dynamic',
    component: MioDynamic
  },
  {
    path: '/fm',
    component: MioFm
  },
  {
    path: '/songlistInfomation',
    component: MioSonglistInformation
  },
  {
    path: '/login',
    component: MioLogin
  }
];

export default routes;