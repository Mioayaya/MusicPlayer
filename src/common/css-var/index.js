import { ayaya } from "../../assets/imgs/ayayaBase"
// 项目颜色
export const ThemeColor = {
  // 黑色主题
  dark: {
    /* heade */ 
    head: '#222225',              // 头部背景颜色
    headLight: '#2b2b2e',         // 头部背景-浅一点的颜色
    headShadow: '#b72525',        // head下的线
    headStep: '#1f1f24',          // 上一步、下一步 背景色
    searchIcon: '#ffffff',        // 搜索icon颜色，
    searchIconHover: '#b3b3b4',   // 搜索icon颜色 hover，
    searchBar: '#2b2b2e',            // 搜索条背景颜色
    fontHeadColor1: '#ffffff',       // headd顶部的字体颜色 白色 
    fontHeadColor2: '#adafb2',       // head字体更浅一点 (右边字体色)
    fontHeadColor3: 'gray',          // placeholder颜色
    
    // content
    content: '#2b2b2b',           // 内容背景颜色

    // content-left
    contentLeftHover: '#333333',     // 左侧选中&hover颜色
    contentDividing: '#454545',      // 左右分割色
    fontContentColor1: '#ffffff',    // 内容色 颜色由白到灰 -- hover
    fontContentColor2: '#cccccc',    // focus 
    fontContentColor3: '#d0d0d0',    // normal
    fontContentColor4: '#7c7c7c',    // 灰色
    
    footer: '#222225',            // 播放栏颜色
    footerTop: '#3d3d40',         // 播放栏与content分割的颜色

    /* 歌单页面 */
    songlistPageIconColor: '#ff0000', // 歌单iconyanse
    songlistPageLinkColor: '#85b9e6',     // 链接颜色
    songlistPageLinkHoverColor: '#b3cee5',  // hover后颜色
    songlistPageBorder: '#4b4b4b',          // border颜色
    songlistPageButtonHover: '#353535',     // 按钮hover
    songlistPageFontColorTitle: '#d0d0d0', // 歌单标题颜色
    songlistPageFontColor: '#ffffff', // 歌单页面 字体颜色
    songlistPageFontColor2: '#878787', // 歌单页面 字体颜色2

    // content-right
    contentRightDivding: '#454545',   // 分割线颜色
    contentRightFontNormal: '#d0d0d0',  // 普通字体颜色
    contentRightFontDark:'#878787',     // 深一点的颜色
    contentRightFontHover: '#ffffff',  // hover字体颜色
    contentRightBorder: '#ec4141',    // border颜色
    contentRightForbid: '#393939',           // 禁止点击颜色
    contentRightForbidFont: '#707070',           // 禁止点击颜色
    // 底部
    fontFooterColor1: '#ffffff',     // hover
    fontFooterColor2: '#cececf',     // normal
    messageColor: '#ec4141',          // 其它标识颜色

    /**  滚动条 **/
    scrollColor: '#454545'
  },
  // eva初号机配色
  eva: {

  },
  // 克莱因蓝
  // 还没想好
}

export const MioContentCss = {
  left: '250px',
}

// Header条
export const MioHeadCss = {
  height: '75px',  // @MioHeadHeight: 75px;
  marginWidth: '20px', // header 左右margin
  itemMarginWidth: '5px',   // 小组件间的距离
  AppmarginWidth: '150px', // @AppPaddingWidth: 150px;
  AppmarginHeight: '50px',  // @AppPaddingHeight: 50px;
  // ayaya图标
  AyayaIcon: ayaya,
}

// footer
export const MioFooterCss = {
  height: '70px',       // @MioFooterHeight: 70px;
  // bottom: '50px',       // @AppPaddingHeight: 50px;
  marginWidth: '150px', // @AppPaddingWidth: 150px;
  marginHeight: '50px'  // @AppPaddingHeight: 50px;
}

// content-left
export const MioContentLeftCss = {
  
}

// pages-found-music-recommend 
export const MioRecommendCss = {
  marginHeight: '20px',
  marginWidth: '20px'
}

// 小组件
// 搜索条
const searchBar = {
  height: '35px',       // 搜索条高度
}
export const MioSearchBarCss = {
  height: searchBar.height, // 搜索条高度
  width: '250px', // 搜索条宽度     
  // radus依据 搜索条高度 计算
  radus: `calc(0.5 * ${searchBar.height})`, 
  fontsize: '0.9rem', // fontsize

}