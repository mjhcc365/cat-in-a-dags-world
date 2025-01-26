import { gsap } from "gsap";
import { useRef, useState, createContext, useContext } from "react";
import { useGSAP } from "@gsap/react";

// 高级技巧
// 1. Passing down a timeline prop 时间轴可以作为props参数向子组件传递
// 2. Passing down a callback to build a timeline 子组件也可以使用callback触发父组件动画
// 3. React Context 就是React的Context 用法
// 4. 4.1 Creating reusable animations 创建可复用的组件
//    4.2 Declarative animation component 声明式动画组件
//    4.3 使用registerEffect 复用动画组件
// 5. Exit animations 退出动画 onComplete  确保动画执行结束才能卸载dom
// 6. No more layout shifts with FLIP! 用Flip 不懂

gsap.registerPlugin(useGSAP);
// 创建Context

// React Context - not GSAP Context
const SelectedContext = createContext({} as any);

const Buttons = () => {
  const { selected, setSelected } = useContext(SelectedContext);

  return (
    <div
      onClick={() => {
        setSelected(() => true);
      }}
    >
      change
    </div>
  );
};

const Boxs = () => {};

const LearnContext = () => {
  const container = useRef(null);
  const [selected, setSelected] = useState(false);
  return (
    <div ref={container}>
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Buttons />
      </SelectedContext.Provider>
    </div>
  );
};

export default LearnContext;
