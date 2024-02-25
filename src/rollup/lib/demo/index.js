import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString, withDirectives, vModelText } from 'vue';

var _hoisted_1 = { class: "demo" };
var script = /*#__PURE__*/ defineComponent({
    __name: 'indexDemo',
    setup: function (__props) {
        var data = ref('');
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                createElementVNode("span", null, "双向绑定：" + toDisplayString(data.value), 1 /* TEXT */),
                withDirectives(createElementVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) { return ((data).value = $event); })
                }, null, 512 /* NEED_PATCH */), [
                    [vModelText, data.value]
                ])
            ]));
        };
    }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".demo[data-v-254ca77c] {\n  background-color: red;\n}\n.demo[data-v-254ca77c] span[data-v-254ca77c] {\n  color: green;\n}";
styleInject(css_248z);

script.__scopeId = "data-v-254ca77c";
script.__file = "src/demo/indexDemo.vue";

script.install = function (Vue) {
    Vue.component('demoCom', script);
};

export { script as default };
