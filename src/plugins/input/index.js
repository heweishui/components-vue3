import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString, withDirectives, vModelDynamic, renderSlot } from 'vue';

var _hoisted_1 = { class: "container" };
var _hoisted_2 = ["type"];
var script = /*#__PURE__*/ defineComponent({
    __name: 'harmonyInput',
    props: {
        title: {
            type: String, // 指定类型为字符串
            default: '标题' // 设置默认值
        },
        type: {
            type: String, // 指定类型为字符串
            default: 'text' // 设置默认值
        },
    },
    emits: ['onkeydown'],
    setup: function (__props, _a) {
        var __emit = _a.emit;
        var data = ref('');
        var emit = __emit;
        var props = __props;
        var onkeydown = function (e) {
            if (e.key === 'Enter') {
                emit('onkeydown', data.value);
            }
        };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                createElementVNode("h3", null, toDisplayString(props.title) + "：", 1 /* TEXT */),
                withDirectives(createElementVNode("input", {
                    type: props.type,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) { return ((data).value = $event); }),
                    onKeydown: onkeydown
                }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2), [
                    [vModelDynamic, data.value]
                ]),
                renderSlot(_ctx.$slots, "default")
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

var css_248z = ".container[data-v-0cca78bc] {\n  width: 90vw;\n  height: 10vh;\n  background-color: #eee;\n}";
styleInject(css_248z);

script.__scopeId = "data-v-0cca78bc";
script.__file = "src/input/harmonyInput.vue";

script.install = function (Vue) {
    Vue.component('demoCom', script);
};

export { script as default };
