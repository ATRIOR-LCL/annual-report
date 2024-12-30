import { createApp, ref } from "vue";
import App from "./App.vue";
import Layui from "@layui/layui-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@layui/layui-vue/lib/index.css";
import "vue-fullpage.js/dist/style.css";

import router from "./router";
createApp(App).use(Layui).use(ElementPlus).use(router).mount("#app");
