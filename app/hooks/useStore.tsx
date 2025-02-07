import { create } from "zustand";

export const useStore = create((set, _get) => ({
  //   headerData: undefined,
  //   setHeaderData: (headerData) => set({ headerData }),
  //   footerData: undefined,
  //   setFooterData: (footerData) => set({ footerData }),
  //   navIsOpen: false,
  //   setNavIsOpen: (toggle) => set({ navIsOpen: toggle, overflow: !toggle }),
  lenis: undefined,
  setLenis: (lenis: any) => set({ lenis }),
  //   overflow: true,
  //   setOverflow: (overflow) => set({ overflow }),
  //   triggerTransition: '',
  //   setTriggerTransition: (triggerTransition) => set({ triggerTransition }),
  //   thresholds: {},
  //   addThreshold: ({ id, value }) => {
  //     let thresholds = { ...get().thresholds }
  //     thresholds[id] = value

  //     set({ thresholds })
  //   },
  // removeThreshold: (threshold) => {
  //   set({ threshold })
  // },
  //   introOut: false,
  //   setIntroOut: (introOut) => set({ introOut }),
}));
