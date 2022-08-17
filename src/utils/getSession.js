// 得到session信息
export default function getSession() {
  const isLogin = sessionStorage.getItem('login');
  if(isLogin!= 'true') {
    return {isLogin:false};
  }else {
    const userNickname = sessionStorage.getItem('userNickname');
    const userId = sessionStorage.getItem('userId');
    const userAvatar = sessionStorage.getItem('userAvatar');
    return {data:{userNickname,userId,userAvatar},isLogin:true};
  }
}