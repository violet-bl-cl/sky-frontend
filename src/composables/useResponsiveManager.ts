import { reactive } from "vue";

const resolution = reactive<{
  innerWidth: number;
  innerHeight: number;
  view: {
    vwUnit: number;
    vhUnit: number;
  };
  domElement: HTMLDivElement | null;
}>({
  innerWidth: 0,
  innerHeight: 0,
  view: { vwUnit: 0, vhUnit: 0 },
  domElement: null,
});
let resizeTimer: ReturnType<typeof setTimeout> | null = null;
const resizeTime: number = 40;
export const useResponsiveManager = () => {
  const initializeResponsiveManager = () => {
    if (!resolution.domElement) {
      resolution.domElement = document.querySelector("#app") as HTMLDivElement;
    }
    updateViewportUnit();
    window.addEventListener("resize", updateViewportUnit);
    window.addEventListener("orientationchange", updateViewportUnit);
    window.screen.orientation.addEventListener("change", updateViewportUnit);
  };
  const removeResponsiveManager = () => {
    window.removeEventListener("resize", updateViewportUnit);
    window.removeEventListener("orientationchange", updateViewportUnit);
    window.screen.orientation.removeEventListener("change", updateViewportUnit);
    if (resizeTime) {
      clearTimeout(resizeTime);
    }
    resolution.domElement = null;
  };
  const updateViewportUnit = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => {
      if (!resolution.domElement) {
        return;
      }
      const vhUnit: number = window.innerHeight * 0.01;
      const vwUnit: number = window.innerWidth * 0.01;
      console.log(resolution.domElement.clientHeight);
      resolution.view.vhUnit = vhUnit;
      resolution.view.vwUnit = vwUnit;
      resolution.innerHeight = vhUnit * 100;
      resolution.innerWidth = vwUnit * 100;
      resolution.domElement.style.setProperty("--vh", `${vhUnit}px`);
      resolution.domElement.style.setProperty("--vw", `${vwUnit}px`);
    }, resizeTime);
  };

  const getWidth = (): { width: string } => {
    return { width: `calc(${resolution.innerWidth}px)` };
  };
  const getHeight = (): { height: string } => {
    return { height: `calc(${resolution.innerHeight}px)` };
  };
  const getSize = (): { height: string; width: string } => {
    return {
      width: `calc(${resolution.innerWidth}px)`,
      height: `calc(${resolution.innerHeight}px)`,
    };
  };
  return {
    initializeResponsiveManager,
    removeResponsiveManager,
    resolution,
    getWidth,
    getHeight,
    getSize,
  };
};
