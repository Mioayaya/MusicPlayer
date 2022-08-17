# MusicPlayer
-- 基于网易云音乐api--

# 项目规范
- 1.文件夹、文件名统一小写，js变量使用小驼峰标识，常量使用大写字母，组件采用大驼峰
- 2.css 采用css+emotionCss
- 3.使用Hooks、并且使用 memo 包裹
- 4.组件内部状态使用 useState 业务数据放在 redux 中
- 5.网络请求使用 axios
- 6.ui库使用antdesign

# package
- emotion： npm install --save @emotion/styled  --CSS in js --
- npm install --save normalize.css  -- 初始化css --
- yarn add @types/node -D   -- 修改别名 --
- yarn add react-router-dom
- yarn add react-router-config  
- yarn add react-router@5.2.0 -s   -- 路由 -- 

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
  Q4.1： 左侧切换的时候 还是不能解决，因为该组件不会重新加载

- Q5: 在别的页面刷新的时候，会导致 redux key刷新，导致 导航栏 active 不匹配  
  A: 在加载的时候，判断路由路径，dispatch() 设置key即可  使用正则匹配 子路由 会影响 xx

- Q6: 如何保持登录状态
  A: 使用session会话

- Q7： 长列表加载  
  A：虚拟列表 

- Q8：导航栏由于不会重新加载，切换登录状态的时候如何判断?
  A: 使用redux保存用户数据,然后监听 

## CSS 相关
- 图片的覆盖
- 强制显示一行文本
- 文本超出 显示省略号
- flex左右对齐 
- 宽度、高度继承问题
