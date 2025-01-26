import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
// 用这个hook能保证在元素加载渲染完成后再执行动画
// 类似于didmount

// gsap.context()给React开发者提供两个非常棒的功能，
// 一个是scoped selectors（范围内元素选择），
// 另一个是更重要的 - animation cleanup(动画清理)。

gsap.registerPlugin(useGSAP);

// 添加依赖
const CBox = ({ endx }: { endx: number }) => {
  const cboxRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".cbox", {
        x: endx,
        duration: 1,
        delay: 0.5,
      });
    },
    {
      dependencies: [endx],
      scope: cboxRef,
      revertOnUpdate: true, // 是否回到原点
    }
  );
  return (
    <div ref={cboxRef} className="h-100 border">
      <div className="cbox w-20 h-20 border bg-blue">x</div>
    </div>
  );
};

const LearnGSAP = () => {
  const comp = useRef(null);
  const tl = useRef<any>(null);
  const [endx, setEndx] = useState(100);

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".mybox", { x: 360 }); //
      gsap.from(".box", { opacity: 0, stagger: 0.1 }); // 子元素可以直接选择， // stagger 使交错

      tl.current = gsap
        .timeline()
        .to(".tl-contral", {
          rotate: 360,
        })
        .to(".circle", {
          x: 100,
        });
    },
    { scope: comp }
  );

  // 正确添加点击事件
  const onClickGood = contextSafe(() => {
    gsap.to(".good", { rotation: 180 });
  });
  // 控制，暂停和开始
  const onToggle = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });
  // 子组件传值

  return (
    <div ref={comp}>
      <div className="mybox border w-100 h-100 bg-pink-light">11</div>
      <div className="good border w-100 h-100 bg-red" onClick={onClickGood}>
        ToDo List
      </div>
      <div className="box w-200 h-50 border ">买菜</div>
      <div className="box w-200 h-50 border ">做饭</div>
      <div className="box w-200 h-50 border ">健身</div>
      <div className="box w-200 h-50 border ">画画</div>

      <div className="border" onClick={onToggle}>
        Toggle
      </div>
      <div className="tl-contral w-100 h-100 rounded bg-green">contral</div>
      <div className="circle w-100 h-100 rounded bg-pink-light">contral</div>

      <div
        onClick={() => {
          setEndx(Math.random() * 100);
        }}
        className="w-100 border h-50"
      >
        random
      </div>
      <CBox endx={endx} />
    </div>
  );
};

export default LearnGSAP;
