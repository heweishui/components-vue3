// index.ts
import { App } from 'vue';
import harmonyInput from './harmonyInput.vue';

harmonyInput.install = (Vue: App<Element>) => {
  Vue.component('demoCom', harmonyInput);
}
export default harmonyInput;
