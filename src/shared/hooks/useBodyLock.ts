// import { useEffect } from "react";

// export function useBodyLock(isLocked: boolean) {
//   useEffect(() => {
//     if (isLocked) {
//       document.body.classList.add("_lock");
//     } else {
//       document.body.classList.remove("_lock");
//     }
//   }, [isLocked]);
// }
import { useEffect } from "react";

export function useBodyLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const widthWithScroll = document.documentElement.clientWidth;
    document.body.classList.add("_lock");
    const widthWithoutScroll = document.documentElement.clientWidth;
    const scrollWidth = widthWithoutScroll - widthWithScroll;

    if (scrollWidth !== 0) {
      document.body.style.setProperty("padding-right", `${scrollWidth}px`);
    }

    return () => {
      document.body.classList.remove("_lock");
      document.body.style.setProperty("padding-right", "0");
    };
  }, [active]);
}
