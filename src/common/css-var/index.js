import { ayaya } from "../../assets/imgs/ayayaBase"
// 项目颜色
// 纯色相同色
const sameColor = {
  public: {
    lightColor: '#ffffff',
    darkColor: '#acacac',   
    titleColor: '#373737',
    txtColor: '#676767',
    focusColor: '#cccccc',
    iconColor: '#000000',
    linkColor: '#85b9e6',
    linkHover: '#b3cee5',
    emt: '#fafafa',
    emtHover: '#f1f2f3',
    active: '#e5e5e5',
    activeHover: '#f1f2f3',    
    btnColor: '#000000',
    btnHover: '#f2f2f2',
    btnForbid: '#d9d9d9',
    btnBarnnar: '#f3f3f3',
    btnBarnnarHover: '#000000',
    shadow: '#121212',

    border: '#d9d9d9',
    messageColor: '#e5ca89',
    scrollColor: '#e0e0e0'
  },
  content: {
    listHover: '#f6f6f7',
    split: '#e0e0e0',
    background: '#ffffff',
    card: '#ffffff',
    replied: '#f5f5f5',     // 评论回复
    commentTime: '#b1b0b1',
    // 评论区渐变线
    commentLiner: `linear-gradient(to left, #ffffff 0%,#e0e0e0 50%, #ffffff 100%)`,
    // 歌词渐变消失
    iricsLinerTop: `linear-gradient(to top,rgba(0,0,0,0),#ffffff)`,
    iricsLinerBottom: `linear-gradient(to bottom,rgba(0,0,0,0),#ffffff)`,
  },
  footer: {
    barAfter: '#4c4c4e',
    txtColor: '#000000',
    split: '#e0e0e0',
    background: '#ffffff',
    border: '#303030'
  },
}

export const ThemeColor = {
  // 黑色主题
  dark: {
    public: {
      lightColor: '#ffffff',
      darkColor: '#7c7c7c',          
      titleColor: '#d0d0d0',
      txtColor: '#878787',
      focusColor: '#cccccc',
      iconColor: '#adafb2',
      linkColor: '#85b9e6',
      linkHover: '#b3cee5',
      emt: '#333333',
      emtHover: '#474747',
      active: '#474747',
      activeHover: '#414141',
      btn: '#4b4b4b',
      btnColor: '#cececf',
      btnHover: '#353535',
      btnForbid: '#393939',
      btnBarnnar: '#f3f3f3',
      btnBarnnarHover: '#000000',
      shadow: '#121212',

      border: '#4a4a4a',
      messageColor: '#ec4141',
      scrollColor: '#454545'
    },
    header: {
      split: '#b72525',
      background: '#222225',
      card: '#363636',
      cardTitle: '#ff758f',
      searchBar: '#2b2b2e'
    },
    content: {
      listHover: '#333333',
      split: '#454545',
      background: '#2b2b2b',
      card: '#363636',
      replied: '#333333',     // 评论回复
      commentTime: '#636363',
      // 评论区渐变线
      commentLiner: `linear-gradient(to left, #353535 0%,#555555 50%, #353535 100%)`,
      iricsLinerTop: `linear-gradient(to top,rgba(0,0,0,0),#2b2b2b)`,
      iricsLinerBottom: `linear-gradient(to bottom,rgba(0,0,0,0),#2b2b2b)`,

    },
    footer: {
      barAfter: '#4c4c4e',
      txtColor: '#cececf',
      split: '#3d3d40',
      background: '#222225',
      border: '#303030'
    },
  },
  // eva初号机配色
  eva: {
    public: {
      lightColor: '#ffffff',
      darkColor: '#7c7c7c',          
      titleColor: '#e0e0e0',
      txtColor: '#878787',
      focusColor: '#cccccc',
      iconColor: '#adafb2',
      linkColor: '#85b9e6',
      linkHover: '#b3cee5',
      emt: '#7B7484',
      emtHover: '#968ca2',
      active: '#B0A8B9',
      activeHover: '#968ca2',
      btn: '#4b4b4b',
      btnColor: '#cececf',
      btnHover: '#353535',
      btnForbid: '#393939',
      btnBarnnar: '#f3f3f3',
      btnBarnnarHover: '#000000',
      shadow: '#121212',

      border: '#4a4a4a',
      messageColor: '#63dc58',
      scrollColor: '#5E4781'
    },
    header: {
      split: '#1fbf2e',
      background: '#241644',
      card: '#4B4453',
      cardTitle: '#ff758f',
      searchBar: '#4B4453'
    },
    content: {
      listHover: '#7B7484',
      split: '#066b12',
      background: '#2d1b4f',
      card: '#4B4453',
      replied: '#4B4453',     // 评论回复
      commentTime: '#636363',
      // 评论区渐变线
      commentLiner: `linear-gradient(to left, #353535 0%,#555555 50%, #353535 100%)`,
      // 歌词渐变消失
      iricsLinerTop: `linear-gradient(to top,rgba(0,0,0,0),#2d1b4f)`,
      iricsLinerBottom: `linear-gradient(to bottom,rgba(0,0,0,0),#2d1b4f)`,

    },
    footer: {
      barAfter: '#4c4c4e',
      txtColor: '#cececf',
      split: '#066b12',
      background: '#241644',
      border: '#303030'
    },
  },
  // 克莱因蓝
  klein: {
    public: {
      lightColor: '#ffffff',
      darkColor: '#acacac',          
      titleColor: '#e0e0e0',
      txtColor: '#b1b0b1',
      focusColor: '#cccccc',
      iconColor: '#adafb2',
      linkColor: '#85b9e6',
      linkHover: '#b3cee5',
      emt: '#968ca2',
      emtHover: '#8080a0',
      active: '#B0A8B9',
      activeHover: '#8080a0',
      btn: '#97818d',
      btnColor: '#cececf',
      btnHover: '#97818d',
      btnForbid: '#404e64',
      btnBarnnar: '#f3f3f3',
      btnBarnnarHover: '#000000',
      shadow: '#121212',

      border: '#918081',
      messageColor: '#e5ca89',
      scrollColor: '#918081'
    },
    header: {
      split: '#9d989d',
      background: '#0a2981',
      card: '#164598',
      cardTitle: '#ff758f',
      searchBar: '#164598'
    },
    content: {
      listHover: '#8080a0',
      split: '#ad9d93',
      background: '#2164b0',
      card: '#164598',
      replied: '#0d2b86',     // 评论回复
      commentTime: '#b1b0b1',
      // 评论区渐变线
      commentLiner: `linear-gradient(to left, #2164b0 0%,#ffffff 50%, #2164b0 100%)`,
      // 歌词渐变消失
      iricsLinerTop: `linear-gradient(to top,rgba(0,0,0,0),#2164b0)`,
      iricsLinerBottom: `linear-gradient(to bottom,rgba(0,0,0,0),#2164b0)`,

    },
    footer: {
      barAfter: '#4c4c4e',
      txtColor: '#cececf',
      split: '#ad9d93',
      background: '#0a2981',
      border: '#303030'
    },
  },
  white: {
    public: {
      ...sameColor.public,
      btn: '#ebebeb',
      messageColor: '#ec4141'
    },
    header: {
      split: '#e0e0e0',
      background: '#f5f5f5',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: '#ebebeb'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  cherry: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#ffc0cb'
    },
    header: {
      split: '#e0e0e0',
      background: '#ffc0cb',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  pink: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#ff5c8a'
    },
    header: {
      split: '#e0e0e0',
      background: '#ff5c8a',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  purple: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#717ff9'
    },
    header: {
      split: '#e0e0e0',
      background: '#717ff9',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  blue: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#4791eb'
    },
    header: {
      split: '#e0e0e0',
      background: '#4791eb',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  skyblue: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#39afea'
    },
    header: {
      split: '#e0e0e0',
      background: '#39afea',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  green: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#6acc19'
    },
    header: {
      split: '#e0e0e0',
      background: '#6acc19',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  orange: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#ff8f57'
    },
    header: {
      split: '#e0e0e0',
      background: '#ff8f57',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  },
  red: {
    public: {
      ...sameColor.public,
      btn: 'rgba(255,255,255,0.4)',
      messageColor: '#ec4141'
    },
    header: {
      split: '#e0e0e0',
      background: '#ec4141',
      card: '#ffffff',
      cardTitle: '#000000',
      searchBar: 'rgba(255,255,255,0.4)'
    },
    content: {
      ...sameColor.content,
    },
    footer: {
      ...sameColor.footer,
    }
  }
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