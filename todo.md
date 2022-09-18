# components 
- header ✅
- content-left ✅
- player ✅

# pages
## 发现音乐
- 个性推荐
  - views ✅
  - 点击事件 ⬜
- 专属定制
- 歌单
- 排行榜
- 歌手
- 最新音乐
## 电台
## 视频
## 动态 ⬜
## FM
## 最近播放 ⬜
## 我的电台 ⬜
## 我的收藏 ⬜
## 我的消息 ⬜
## 创建歌单 ✅
## 收藏歌单 ✅
## mine 
- 上半部分 ✅
- 下班部分 ⬜
## 其它用户界面 ⬜

# header
## 搜索 ⬜
## 点击头像展示 ⬜
## 换肤 ⬜
## 设置 ⬜
## 关闭 ⬜

# footer 
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

# 歌曲页面 ⬜


# 歌单页面
- views ✅
- 歌曲列表 ✅
- 点击事件 ⬜
- 评论页面 ⬜
- 收藏者 ⬜

# 关于接口数据
## 获取用户详情 (/user/detail)
res

|属性|值|
|-----|-----|
|level|等级|
|createTime|创建时间|
|createDays|创建天数|
|listenSongs|听歌数量|
|peopleCanSeeMyPlayRecord|播放记录是否可见|

.profile

|属性|值|
|-----|-----|
|userId|id|
|nickname|昵称|
|avatarUrl|头像|
|gender|性别(0,1,2)|
|vipType|vip|
|eventCount|动态数量|
|follows|关注数|
|followeds|粉丝数|
|city|所在地区(城市码)|
|province|省|
|signature|签名|
|playlistCount|创建的歌单|
|privacyItemUnlimit|隐私权限|