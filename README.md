# MusicPlayer
-- React + js + vite web端音乐播放器 --

-- 在线预览 <a href="http://ayaya.org.cn/" target="_block">ayaya.org.cn</a>

-- 基于网易云音乐api--

# 运行本项目
 ## 后端  
 - 详细见 <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_block">网易云音乐 Node.js API service</a>
  
 安装
 ```
  git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
  cd NeteaseCloudMusicApi
  npm install
 ```
 运行
 ```
  node app.js
 ```
 ## 前端
 安装
 ```
  git clone git@github.com:Raftern/MusicPlayer.git
  cd MusicPlayer
  yarn install 
  或者 npm install
 ```
 运行
 ```
 yarn dev
 或者
 npm run dev
 ```
# 项目规范
- 1.文件夹、文件名统一小写，js变量使用小驼峰标识，常量使用大写字母，组件采用大驼峰
- 2.css 采用css+emotionCss
- 3.使用Hooks、并且使用 memo 包裹
- 4.组件内部状态使用 useState 业务数据放在 redux 中
- 5.网络请求使用 axios
- 6.ui库使用Design

# 关于技术
## 技术栈
- React(hooks函数式组件写法)
- vite 
- Redux Toolkit
- ui库 -- arco Design
- axios封装
- css -- emotionCss + less
## 项目技术
- 歌单中的歌曲列表 采用 虚拟列表
- 评论展示 采用 无限滚动+滚动请求+虚拟列表
- 部分点击事件 增加节流效果
- 歌词时间轴的同步
- 歌曲时间调节
- 一键换肤功能
- 歌曲播放列表采用 链表存储
- 歌曲播放顺序 歌曲切换
- 搜索提示

# 问题
- Q1: 使用 react-router-config 配置路由报错 `You should not use <Switch> outside a <Router>`  
  A: 可能是 react-router-dom 的版本过高问题，回退到 5.2.0 解决(与 react-router版本一致)
- Q2: flex布局 子组件超出父容器会撑破父容器  
  A: 父容器本身也是flexitem，设置父容器 height100% 或者flex1，子容器内设置高度0即可
- Q3: 如何设置 滚动条 以及调节样式, 移入出现 滚动条等  
  A: 设置 overflow-y: scroll 样式 详见 Content组件
- Q3: 使用 React.lazy 时报错  
  A: 在路由外包裹  
  ```jsx
  <Suspense fallback={<div>loading</div>}>
    {renderRoutes(routes)}
  </Suspense>
  ```
- Q4: 在页面点击路由跳转的时候，通过浏览器 网页回退，导航栏状态不会发生变化  
  A: 在每个页面加载的时候 dispatch() 派发自己的key即可  
  - Q4.1： 左侧切换的时候 还是不能解决，因为该组件不会重新加载  
    A: 在进入游戏

- Q5: 在别的页面刷新的时候，会导致 redux key刷新，导致 导航栏 active 不匹配  
  A: 在加载的时候，判断路由路径，dispatch() 设置key即可  使用正则匹配 子路由 会影响 xx

- Q6: 如何保持登录状态
  A: 本地存储cookie

- Q7： 长列表加载  
  - A1：使用分段加载,使用offset记录当前加载起始值，一段加载完毕后再更新offset值
  - A2: 使用滚动列表,监听滚动到最低端，然后再加载数据

- Q8：导航栏由于不会重新加载，切换登录状态的时候如何判断?  
  A: 设置了redux全局变量监听 登录是否

- Q8: 导入第三方组件库 出现500报错  
  A: vite.config.js 里设置了 '@' 为 src 路径 与组件路径冲突

- Q8: axios请求携带cookie  
  - withCredentials: true | 或者再url末尾 cookie=cookie
  - 如何携带两个cookie
  - document.cookie添加两个  使用split对原有的cookie切割

- Q9: axios 设置跨域后 也携带不了cookie   
  - 暂时未解决，使用参数的方式传递

- Q10: 如何实现上划下划的动画  
  - 父组件设置 overflow:hidden
  - 子组件设置滚动动画: 
    ```css
    transform: ${props => props.show?'translateY(0px)':'translateY(100vh)'};
    transition: 0.5s;
    ``` 
  - 但是只是这样设置，划出去后，点击不了页面，在划出去之后设置 visibility，使用setTimeout。设置 display:none 有同样的效果,但是动画效果只有一半生效,因为display none 没有动画效果
    ```js
    function App() {
      const songInform = useSelector(state => state.playlistSlice.songInform);
      const [showStyle,setShowStyle] = useState(true);

      useEffect(() => {
        if(!songInform.show) {
          setTimeout(() => {
            setShowStyle(false)
          },500)
        }else {
          setShowStyle(true)
        }
      }, [songInform])
    
      return (
        <div className="App">
          <div className="song" style={{visibility: showStyle?'visible':'hidden'}}>
            <MioSongDetail />
          </div>
        </div>
      )
    }
    ```
- Q11: 如何区分显示加载中，还是没有加载结果？  
  A11: 一开始我是设置数据初始值为0, length===0 的时候 显示加载中，有数据的时候就会替换了
  但是,如果没有搜索结果的话也会一直显示 加载中，这对用户交互非常不友好，不知道到底是加载中
  还是没有加载结果。 首先我考虑在加一个变量来控制加载的数据是否是0，转念一想只要设置length的初始
  值为 -1 就行了, length == 0 或者是 undefined(没有返回字段) 则是没有搜索结果，length == -1 则是加载中
- Q12: 如何实现换肤?  
  A: 使用emotio Css ,将color变量放在一个js文件中,比如下面代码,
  再根据props选择即可,如 `color: {props => themeColor[props.theme].(具体色值))}`
  ```js
  export themeColor = {
    dark: {
      ···
    },
    white: {
      ···
    },
    pink: {
      ···
    }
  }
  ``` 

# todo
-- --
search 页面✅
换肤 ✅
设置页面 ✅ (换背景)
歌单列表分段加载 ✅
avatar hover ✅
-- --
## components 
- header ✅
- content-left ✅
- player ✅

## header
### 搜索 ✅
### 点击头像展示 ✅
### 换肤 ✅
### 设置 ✅
### 收缩 ⬜

## footer 
- views ✅
- 播放(点击+空格) ✅
- 切换歌曲 ✅
- 播放顺序 ✅
- 音量调节 ✅
- 播放列表 ✅
  - 清空列表 ✅
  - 删除歌曲 ✅
  - 插入歌曲(下一首播放) ⬜
- 全屏显示 ✅
- 切换动画 ✅

## 歌曲页面 ✅
- views ✅
- 滚动歌词 ✅
- 歌曲评论区 ✅


## 歌单页面
- views ✅
- 歌曲列表 ✅
- 点击事件 ✅(点击用户ok 标签暂未实现)
- 评论页面 ✅
- 收藏者 ⬜

## pages
### 发现音乐
- 个性推荐
  - views ✅
  - 点击事件 ✅
- 专属定制 ⬜
- 歌单   ⬜
- 排行榜  ⬜
- 歌手 ⬜
- 最新音乐 ⬜
### 电台 ⬜
### 视频 ⬜
### 动态 ⬜
### FM    ⬜
### 最近播放 ⬜
### 我的电台 ⬜
### 我的收藏 ⬜
### 我的消息 ⬜
### 创建歌单 ✅
### 收藏歌单 ✅
### mine 
- 上半部分 ✅
- 下班部分 ✅
### 其它用户界面 ✅

