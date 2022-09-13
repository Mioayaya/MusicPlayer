import React, { memo } from 'react'
// 最新音乐
import { MioFoundMusicLatestMusicDiv } from './css'

const MioFoundMusicLatestMusic = memo(() => {
  return (
    <MioFoundMusicLatestMusicDiv>
      <div className="github">
        <a href="https://github.com/Raftern/MusicPlayer" className="strong" target="_block">Github链接</a>        
      </div>
      
      <div className="technology-stack">
        <h2 className="title">技术栈</h2>
        <div className="content">
          <p>本项目采用 <span className="strong">React + JavaScript + Vite</span> 搭建</p>          
          <p>全局变量使用 <span className='strong'>Redux-Toolkit</span>  管理</p>
          <p>css使用 <span className='strong'>emotionCss + less</span>  的形式</p>
          <p>网络请求使用 <span className='strong'>axios</span> </p>
          <p>使用 <span className='strong'>arco design UI</span>  库</p>
        </div>      
      </div>

      <div className="skill">
        <h2 className="title">项目技术</h2>
        <div className="content">
          <p> <span>虚拟列表:</span> 歌单的歌曲渲染使用 <span className="strong">虚拟列表</span> </p>
          <p> <span>分段加载:</span> 考虑到歌单的歌曲数目庞大（我的喜欢），采用 <span className="strong">分段加载</span> 的形式，加载所有歌曲</p>
          <p> <span>分页:</span> 用户页面的歌单列表，以及搜索结果 都使用了 <span className="strong">分页的模式</span> 显示数据</p>
          <p> <span>滚动监听加载:</span> 歌曲评论以及歌单评论，采用滚动监听， <span className="strong"> 滚动到最底部</span>再加载更多的数据</p>
          <p> <span>歌词滚动:</span> 使用 <span className="strong">二分算法</span> 查找最近的不大于当前播放时间的歌词时间，并通过 <span className="strong">计算高度</span> ，自动滚动歌词，以及通过歌词点击跳转播放时间</p>
          <p> <span>节流:</span> 点击搜索时，<span className="strong">0.5s内</span> 不再输入时，会弹出提示搜索框，0.5s内继续输入，则不会弹出</p>
          <p> <span>换肤:</span> 点击按钮，轻松实现<span className="strong">换肤效果</span>，输入链接实现<span className="strong">换背景</span></p>
          <p> <span>UI:</span> 较为精美的ui，大部分交互实现了<span className="strong">动画效果</span></p>
        </div>
      </div>

      <div className="complete">
        <h2 className="title">完成功能</h2>
        <p className='sec-title'>1. 首页展示</p>
        <p>1.1 推荐歌单的横向展示,可拖拽滑动,单击可查看标题以及前10首歌曲,双击跳到歌单详情页</p>
        <p>1.2 歌曲列表,单击选中停留,双击播放,点击▶按钮 也可以播放</p>
        <p className='sec-title'>2. 顶部栏</p>
        <p>2.1 点击左上logo回到主页</p>
        <p>2.2 点击搜索框实现搜索</p>
        <p>2.3 鼠标移入头像会有放大平移效果并展示简单信息,点击昵称跳转个人主页,点击衣服弹出换肤卡,点击齿轮进入设置页面</p>
        <p className='sec-title'>3. 播放栏</p>
        <p>3.1 点击左侧歌曲图片,展示歌曲详情页,同时换成新图标,模式选择可以调节当前模式（暂未开发）</p>
        <p>3.2 点击或拖动播放条可以调节当前进度,播放按钮或者空格 可以 控制播放或者暂停</p>
        <p>3.3 点击上下图标切换歌曲,左测文字 切换播放模式（顺序播放，随机播放，单曲循环，列表循环）</p>
        <p>3.4 右侧喇叭图标可以切换音量,点击图标 是否静音</p>
        <p>3.5 喇叭右侧显示当前播放列表,再次点击收起</p>
        <p>3.6 播放列表双击播放歌曲,清空列表，收起列表，以及删除歌曲</p>
        <p className='sec-title'>4. 歌曲详情</p>
        <p>4.1 左侧图片 播放时顺时针转动，暂停时停止</p>
        <p>4.2 歌词跟随时间滚动，如有音译，罗马音 鼠标移入歌词时显示按钮</p>
        <p>4.3 鼠标移入显示滚动条，以及中央歌词时间，线</p>
        <p>4.4 由此相似推荐，双击播放</p>
        <p>4.5 评论区，热评和全部评论，滚动加载</p>
        <p className='sec-title'>5. 用户页面</p>
        <p>5.1 用户信息,根据有没有关注显示（已互关，关注，取关）</p>
        <p>5.2 展示用户创建的歌单，收藏的歌单</p>
        <p className='sec-title'>6. 歌单页面</p>
        <p>6.1 歌单信息展示</p>
        <p>6.2 歌曲列表使用虚拟列表渲染，单击停留歌曲，双击播放歌曲，当前播放的歌曲会有不一样的样式</p>
        <p>6.3 评论区同歌曲评论区</p>
        <p className='sec-title'>7. 搜索功能</p>
        <p>7.1 0.5s内不输入，会有搜素猜测，0.5s内继续输入则不会显示</p>
        <p>7.2 搜索结果使用分页加载的形式</p>
        <p>7.3 搜索结果共有 单曲、歌手、专辑、歌单、用户</p>
      </div>

    </MioFoundMusicLatestMusicDiv>
  )
})

export default MioFoundMusicLatestMusic