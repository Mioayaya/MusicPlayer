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