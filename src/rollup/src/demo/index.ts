// index.ts
import { App } from 'vue';
import demoCom from './indexDemo.vue';

demoCom.install = (Vue: App<Element>) => {
  Vue.component('demoCom', demoCom);
}
export default demoCom;
