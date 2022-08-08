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