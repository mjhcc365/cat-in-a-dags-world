// import {
//   motion,
//   MotionConfig,
//   AnimatePresence,
//   useIsPresent,
// } from "framer-motion";

/** Motion */

// 服务端渲染
// props
// animation initial animate exit transition style onupdate onanimationstart onanimationcomplete
// hover
// focus
// pan 拖拽 onPan
// viewport whileInView viewport onviewportenter onviewportleave
// layout
// layout="position" layoutid layoutdependency layoutscroll layoutroot onlayoutanimationstart
// advanced inherit  custom
// transformtemplate  默认情况下 transform,scale,rotate,skew
//

/** Motion config */
// transition
// reducedmotion 减少运动 default never， “user” “always” ‘never’

/** AnimatePresence */

// 用于管理动画的进出
// import
// exit 1. 挂载/卸载 2. key 变化 3. 子组件被新增或减少
// changing-key 左右的轮播动画
// access-presence-state useIsPresent 判断当前组件是否仍然还在dom中
// manual-usage可以手动清除
// propagate-exit-animations
// Props inital custom mode propagate onexitcomplete
// https://codesandbox.io/p/sandbox/framer-motion-image-gallery-pqvx3?file=%2Fsrc%2FExample.tsx%3A41%2C1&from-embed
// 👆🏻 轮播组件

/** Cursor创意光标 */

/** LazyMotion  延迟加载动画，按需加载 ,条件渲染 减小打包的大小*/

/** LayoutGroup 没看懂 */

/** Reorder 可以实现拖拽排序 */

/** Motion value */

import { motion, useMotionValue } from "framer-motion";

export function MyComponent() {
  const x = useMotionValue(0);
  return <motion.div style={{ x }} />;
}

export default MyComponent;
