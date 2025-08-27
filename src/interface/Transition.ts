export interface Transition {
  transition: {
    enterActiveClass: string;
    leaveActiveClass: string;
    enterFromClass: string;
    leaveFromClass: string;
    enterToClass: string;
    leaveToClass: string;
  };
  duration: number;
  name: string;
}
