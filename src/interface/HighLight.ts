export interface HighLightContent {
  id: string;
  mainTitle: string;
  sections: {
    role: string;
    duration: string;
    heading: string;
    content: string[];
  }[];
}
