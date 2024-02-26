import { defineComponent, openBlock, createElementBlock, renderSlot, pushScopeId, popScopeId, createElementVNode } from 'vue';

var _withScopeId = function (n) { return (pushScopeId("data-v-06da717c"), n = n(), popScopeId(), n); };
var _hoisted_1 = { class: "container" };
var _hoisted_2 = /*#__PURE__*/ _withScopeId(function () {  return createElementVNode("img", null, null, -1 /* HOISTED */); });
var script = /*#__PURE__*/ defineComponent({
    __name: 'harmonyImage',
    setup: function (__props) {
        // import { ref } from 'vue'
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                _hoisted_2,
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

var css_248z = ".container[data-v-06da717c] {\n  width: 90vw;\n  height: 90vh;\n  background-color: #eee;\n}";
styleInject(css_248z);

script.__scopeId = "data-v-06da717c";
script.__file = "src/image/harmonyImage.vue";

script.install = function (Vue) {
    Vue.component('demoCom', script);
};

export { script as default };
