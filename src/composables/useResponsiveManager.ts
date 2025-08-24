import {reactive} from "vue";

const resolution = reactive<{
  innerWidth: number;
  innerHeight: number;
  view: {
    vwUnit: number;
    vhUnit: number;
  };
  domElement:HTMLElement | null

}>({
    innerWidth: 0,innerHeight:0,
    view:{vwUnit: 0, vhUnit: 0},
    domElement: null

});

export const useResponsiveManager = () => {
    const initializeResponsiveManager = () =>{
        if(!resolution.domElement){
            resolution.domElement = document.querySelector('#app') as HTMLElement;
        }
        window.addEventListener('resize', updateViewportUnit);
    }

    const updateViewportUnit = () =>{
        if(!resolution.domElement){
            return
        }
        const vhUnit:number = resolution.domElement.clientHeight * 0.01;
        const vwUnit:number = resolution.domElement.clientWidth * 0.01;
        resolution.view.vhUnit = vhUnit;
        resolution.view.vwUnit = vwUnit;
        resolution.innerHeight = vhUnit * 100;
        resolution.innerWidth = vwUnit * 100;
        document.body.style.setProperty('--vh',`${vhUnit}px`)
        document.body.style.setProperty('--vw',`${vwUnit}px`)
    }

    const getWidth = (): { width: string } => {
        return { width: `calc(${resolution.innerWidth}px)` }
    }
    const getHeight = ():{height:string} => {
        return {height: `calc(${resolution.innerHeight}px)` }
    }
    const getWidthHeight =():{height:string; width:string} =>{
        return {width: `calc(${resolution.innerWidth}px)`, height:`calc(${resolution.innerHeight}px)` }
    }
    return {initializeResponsiveManager, resolution,getWidth,getHeight,getWidthHeight};
};
