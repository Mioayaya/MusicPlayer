import MioFoundMusic from "../pages/found-music";
import MioMine from "../pages/mine";

//- 懒加载优化
// const lazyLoad = (children) => {
//   return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
// };

const routes = [
  {
    path: '/',
    exact: true,
    // element: <MioFoundMusic />
    component: MioFoundMusic 
  },
  {
    path: '/mine',
    // element: <MioMine />
    component: MioMine
  }
];

export default routes;