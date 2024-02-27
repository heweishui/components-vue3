// index.ts
import { App } from 'vue';
import harmonyInput from './harmonyInput.vue';

harmonyInput.install = (Vue: App<Element>) => {
  Vue.component('harmonyInput', harmonyInput);
}
export default harmonyInput;
