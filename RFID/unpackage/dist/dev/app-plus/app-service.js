if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$l = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$i], ["__scopeId", "data-v-637fd36b"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const icons = {
    "pulldown": "",
    "refreshempty": "",
    "back": "",
    "forward": "",
    "more": "",
    "more-filled": "",
    "scan": "",
    "qq": "",
    "weibo": "",
    "weixin": "",
    "pengyouquan": "",
    "loop": "",
    "refresh": "",
    "refresh-filled": "",
    "arrowthindown": "",
    "arrowthinleft": "",
    "arrowthinright": "",
    "arrowthinup": "",
    "undo-filled": "",
    "undo": "",
    "redo": "",
    "redo-filled": "",
    "bars": "",
    "chatboxes": "",
    "camera": "",
    "chatboxes-filled": "",
    "camera-filled": "",
    "cart-filled": "",
    "cart": "",
    "checkbox-filled": "",
    "checkbox": "",
    "arrowleft": "",
    "arrowdown": "",
    "arrowright": "",
    "smallcircle-filled": "",
    "arrowup": "",
    "circle": "",
    "eye-filled": "",
    "eye-slash-filled": "",
    "eye-slash": "",
    "eye": "",
    "flag-filled": "",
    "flag": "",
    "gear-filled": "",
    "reload": "",
    "gear": "",
    "hand-thumbsdown-filled": "",
    "hand-thumbsdown": "",
    "hand-thumbsup-filled": "",
    "heart-filled": "",
    "hand-thumbsup": "",
    "heart": "",
    "home": "",
    "info": "",
    "home-filled": "",
    "info-filled": "",
    "circle-filled": "",
    "chat-filled": "",
    "chat": "",
    "mail-open-filled": "",
    "email-filled": "",
    "mail-open": "",
    "email": "",
    "checkmarkempty": "",
    "list": "",
    "locked-filled": "",
    "locked": "",
    "map-filled": "",
    "map-pin": "",
    "map-pin-ellipse": "",
    "map": "",
    "minus-filled": "",
    "mic-filled": "",
    "minus": "",
    "micoff": "",
    "mic": "",
    "clear": "",
    "smallcircle": "",
    "close": "",
    "closeempty": "",
    "paperclip": "",
    "paperplane": "",
    "paperplane-filled": "",
    "person-filled": "",
    "contact-filled": "",
    "person": "",
    "contact": "",
    "images-filled": "",
    "phone": "",
    "images": "",
    "image": "",
    "image-filled": "",
    "location-filled": "",
    "location": "",
    "plus-filled": "",
    "plus": "",
    "plusempty": "",
    "help-filled": "",
    "help": "",
    "navigate-filled": "",
    "navigate": "",
    "mic-slash-filled": "",
    "search": "",
    "settings": "",
    "sound": "",
    "sound-filled": "",
    "spinner-cycle": "",
    "download-filled": "",
    "personadd-filled": "",
    "videocam-filled": "",
    "personadd": "",
    "upload": "",
    "upload-filled": "",
    "starhalf": "",
    "star-filled": "",
    "star": "",
    "trash": "",
    "phone-filled": "",
    "compose": "",
    "videocam": "",
    "trash-filled": "",
    "download": "",
    "chatbubble-filled": "",
    "chatbubble": "",
    "cloud-download": "",
    "cloud-upload-filled": "",
    "cloud-upload": "",
    "cloud-download-filled": "",
    "headphones": "",
    "shop": ""
  };
  const _sfc_main$k = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $props.size + "px" }),
        class: vue.normalizeClass(["uni-icons", [$props.fontFamily, $props.fontFamily ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      vue.toDisplayString($props.fontFamily ? "" : $data.icons[$props.type]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$h], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$j = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$g], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$i = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:298", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$f], ["__scopeId", "data-v-4dd3c44b"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var uniSocket_io = { exports: {} };
  (function(module, exports) {
    !function(t2, e2) {
      module.exports = e2();
    }(window, function() {
      return function(t2) {
        var e2 = {};
        function n2(r2) {
          if (e2[r2])
            return e2[r2].exports;
          var o2 = e2[r2] = { i: r2, l: false, exports: {} };
          return t2[r2].call(o2.exports, o2, o2.exports, n2), o2.l = true, o2.exports;
        }
        return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, r2) {
          n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: r2 });
        }, n2.r = function(t3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
        }, n2.t = function(t3, e3) {
          if (1 & e3 && (t3 = n2(t3)), 8 & e3)
            return t3;
          if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
            return t3;
          var r2 = /* @__PURE__ */ Object.create(null);
          if (n2.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
            for (var o2 in t3)
              n2.d(r2, o2, (function(e4) {
                return t3[e4];
              }).bind(null, o2));
          return r2;
        }, n2.n = function(t3) {
          var e3 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return n2.d(e3, "a", e3), e3;
        }, n2.o = function(t3, e3) {
          return Object.prototype.hasOwnProperty.call(t3, e3);
        }, n2.p = "", n2(n2.s = 18);
      }([function(t2, e2) {
        t2.exports = function() {
          return function() {
          };
        };
      }, function(t2, e2, n2) {
        function r2(t3) {
          if (t3)
            return function(t4) {
              for (var e3 in r2.prototype)
                t4[e3] = r2.prototype[e3];
              return t4;
            }(t3);
        }
        t2.exports = r2, r2.prototype.on = r2.prototype.addEventListener = function(t3, e3) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t3] = this._callbacks["$" + t3] || []).push(e3), this;
        }, r2.prototype.once = function(t3, e3) {
          function n3() {
            this.off(t3, n3), e3.apply(this, arguments);
          }
          return n3.fn = e3, this.on(t3, n3), this;
        }, r2.prototype.off = r2.prototype.removeListener = r2.prototype.removeAllListeners = r2.prototype.removeEventListener = function(t3, e3) {
          if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this;
          var n3, r3 = this._callbacks["$" + t3];
          if (!r3)
            return this;
          if (1 == arguments.length)
            return delete this._callbacks["$" + t3], this;
          for (var o2 = 0; o2 < r3.length; o2++)
            if ((n3 = r3[o2]) === e3 || n3.fn === e3) {
              r3.splice(o2, 1);
              break;
            }
          return 0 === r3.length && delete this._callbacks["$" + t3], this;
        }, r2.prototype.emit = function(t3) {
          this._callbacks = this._callbacks || {};
          for (var e3 = new Array(arguments.length - 1), n3 = this._callbacks["$" + t3], r3 = 1; r3 < arguments.length; r3++)
            e3[r3 - 1] = arguments[r3];
          if (n3) {
            r3 = 0;
            for (var o2 = (n3 = n3.slice(0)).length; r3 < o2; ++r3)
              n3[r3].apply(this, e3);
          }
          return this;
        }, r2.prototype.listeners = function(t3) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + t3] || [];
        }, r2.prototype.hasListeners = function(t3) {
          return !!this.listeners(t3).length;
        };
      }, function(t2, e2, n2) {
        const r2 = n2(25), o2 = n2(26), s2 = String.fromCharCode(30);
        t2.exports = { protocol: 4, encodePacket: r2, encodePayload: (t3, e3) => {
          const n3 = t3.length, o3 = new Array(n3);
          let i2 = 0;
          t3.forEach((t4, a2) => {
            r2(t4, false, (t5) => {
              o3[a2] = t5, ++i2 === n3 && e3(o3.join(s2));
            });
          });
        }, decodePacket: o2, decodePayload: (t3, e3) => {
          const n3 = t3.split(s2), r3 = [];
          for (let t4 = 0; t4 < n3.length; t4++) {
            const s3 = o2(n3[t4], e3);
            if (r3.push(s3), "error" === s3.type)
              break;
          }
          return r3;
        } };
      }, function(t2, e2) {
        t2.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
      }, function(t2, e2, n2) {
        const r2 = n2(2), o2 = n2(1), s2 = n2(0)("engine.io-client:transport");
        t2.exports = class extends o2 {
          constructor(t3) {
            super(), this.opts = t3, this.query = t3.query, this.readyState = "", this.socket = t3.socket;
          }
          onError(t3, e3) {
            const n3 = new Error(t3);
            return n3.type = "TransportError", n3.description = e3, this.emit("error", n3), this;
          }
          open() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
          }
          close() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
          }
          send(t3) {
            "open" === this.readyState ? this.write(t3) : s2("transport is not open, discarding packets");
          }
          onOpen() {
            this.readyState = "open", this.writable = true, this.emit("open");
          }
          onData(t3) {
            const e3 = r2.decodePacket(t3, this.socket.binaryType);
            this.onPacket(e3);
          }
          onPacket(t3) {
            this.emit("packet", t3);
          }
          onClose() {
            this.readyState = "closed", this.emit("close");
          }
        };
      }, function(t2, e2) {
        e2.encode = function(t3) {
          var e3 = "";
          for (var n2 in t3)
            t3.hasOwnProperty(n2) && (e3.length && (e3 += "&"), e3 += encodeURIComponent(n2) + "=" + encodeURIComponent(t3[n2]));
          return e3;
        }, e2.decode = function(t3) {
          for (var e3 = {}, n2 = t3.split("&"), r2 = 0, o2 = n2.length; r2 < o2; r2++) {
            var s2 = n2[r2].split("=");
            e3[decodeURIComponent(s2[0])] = decodeURIComponent(s2[1]);
          }
          return e3;
        };
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Decoder = e2.Encoder = e2.PacketType = e2.protocol = void 0;
        const r2 = n2(1), o2 = n2(38), s2 = n2(16), i2 = n2(0)("socket.io-parser");
        var a2;
        e2.protocol = 5, function(t3) {
          t3[t3.CONNECT = 0] = "CONNECT", t3[t3.DISCONNECT = 1] = "DISCONNECT", t3[t3.EVENT = 2] = "EVENT", t3[t3.ACK = 3] = "ACK", t3[t3.CONNECT_ERROR = 4] = "CONNECT_ERROR", t3[t3.BINARY_EVENT = 5] = "BINARY_EVENT", t3[t3.BINARY_ACK = 6] = "BINARY_ACK";
        }(a2 = e2.PacketType || (e2.PacketType = {}));
        e2.Encoder = class {
          encode(t3) {
            return i2("encoding packet %j", t3), t3.type !== a2.EVENT && t3.type !== a2.ACK || !s2.hasBinary(t3) ? [this.encodeAsString(t3)] : (t3.type = t3.type === a2.EVENT ? a2.BINARY_EVENT : a2.BINARY_ACK, this.encodeAsBinary(t3));
          }
          encodeAsString(t3) {
            let e3 = "" + t3.type;
            return t3.type !== a2.BINARY_EVENT && t3.type !== a2.BINARY_ACK || (e3 += t3.attachments + "-"), t3.nsp && "/" !== t3.nsp && (e3 += t3.nsp + ","), null != t3.id && (e3 += t3.id), null != t3.data && (e3 += JSON.stringify(t3.data)), i2("encoded %j as %s", t3, e3), e3;
          }
          encodeAsBinary(t3) {
            const e3 = o2.deconstructPacket(t3), n3 = this.encodeAsString(e3.packet), r3 = e3.buffers;
            return r3.unshift(n3), r3;
          }
        };
        class c2 extends r2 {
          constructor() {
            super();
          }
          add(t3) {
            let e3;
            if ("string" == typeof t3)
              e3 = this.decodeString(t3), e3.type === a2.BINARY_EVENT || e3.type === a2.BINARY_ACK ? (this.reconstructor = new h2(e3), 0 === e3.attachments && super.emit("decoded", e3)) : super.emit("decoded", e3);
            else {
              if (!s2.isBinary(t3) && !t3.base64)
                throw new Error("Unknown type: " + t3);
              if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
              e3 = this.reconstructor.takeBinaryData(t3), e3 && (this.reconstructor = null, super.emit("decoded", e3));
            }
          }
          decodeString(t3) {
            let e3 = 0;
            const n3 = { type: Number(t3.charAt(0)) };
            if (void 0 === a2[n3.type])
              throw new Error("unknown packet type " + n3.type);
            if (n3.type === a2.BINARY_EVENT || n3.type === a2.BINARY_ACK) {
              const r4 = e3 + 1;
              for (; "-" !== t3.charAt(++e3) && e3 != t3.length; )
                ;
              const o3 = t3.substring(r4, e3);
              if (o3 != Number(o3) || "-" !== t3.charAt(e3))
                throw new Error("Illegal attachments");
              n3.attachments = Number(o3);
            }
            if ("/" === t3.charAt(e3 + 1)) {
              const r4 = e3 + 1;
              for (; ++e3; ) {
                if ("," === t3.charAt(e3))
                  break;
                if (e3 === t3.length)
                  break;
              }
              n3.nsp = t3.substring(r4, e3);
            } else
              n3.nsp = "/";
            const r3 = t3.charAt(e3 + 1);
            if ("" !== r3 && Number(r3) == r3) {
              const r4 = e3 + 1;
              for (; ++e3; ) {
                const n4 = t3.charAt(e3);
                if (null == n4 || Number(n4) != n4) {
                  --e3;
                  break;
                }
                if (e3 === t3.length)
                  break;
              }
              n3.id = Number(t3.substring(r4, e3 + 1));
            }
            if (t3.charAt(++e3)) {
              const r4 = function(t4) {
                try {
                  return JSON.parse(t4);
                } catch (t5) {
                  return false;
                }
              }(t3.substr(e3));
              if (!c2.isPayloadValid(n3.type, r4))
                throw new Error("invalid payload");
              n3.data = r4;
            }
            return i2("decoded %s as %j", t3, n3), n3;
          }
          static isPayloadValid(t3, e3) {
            switch (t3) {
              case a2.CONNECT:
                return "object" == typeof e3;
              case a2.DISCONNECT:
                return void 0 === e3;
              case a2.CONNECT_ERROR:
                return "string" == typeof e3 || "object" == typeof e3;
              case a2.EVENT:
              case a2.BINARY_EVENT:
                return Array.isArray(e3) && "string" == typeof e3[0];
              case a2.ACK:
              case a2.BINARY_ACK:
                return Array.isArray(e3);
            }
          }
          destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }
        }
        e2.Decoder = c2;
        class h2 {
          constructor(t3) {
            this.packet = t3, this.buffers = [], this.reconPack = t3;
          }
          takeBinaryData(t3) {
            if (this.buffers.push(t3), this.buffers.length === this.reconPack.attachments) {
              const t4 = o2.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), t4;
            }
            return null;
          }
          finishedReconstruction() {
            this.reconPack = null, this.buffers = [];
          }
        }
      }, function(t2, e2) {
        var n2 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r2 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t2.exports = function(t3) {
          var e3 = t3, o2 = t3.indexOf("["), s2 = t3.indexOf("]");
          -1 != o2 && -1 != s2 && (t3 = t3.substring(0, o2) + t3.substring(o2, s2).replace(/:/g, ";") + t3.substring(s2, t3.length));
          for (var i2, a2, c2 = n2.exec(t3 || ""), h2 = {}, u2 = 14; u2--; )
            h2[r2[u2]] = c2[u2] || "";
          return -1 != o2 && -1 != s2 && (h2.source = e3, h2.host = h2.host.substring(1, h2.host.length - 1).replace(/;/g, ":"), h2.authority = h2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h2.ipv6uri = true), h2.pathNames = function(t4, e4) {
            var n3 = e4.replace(/\/{2,9}/g, "/").split("/");
            "/" != e4.substr(0, 1) && 0 !== e4.length || n3.splice(0, 1);
            "/" == e4.substr(e4.length - 1, 1) && n3.splice(n3.length - 1, 1);
            return n3;
          }(0, h2.path), h2.queryKey = (i2 = h2.query, a2 = {}, i2.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t4, e4, n3) {
            e4 && (a2[e4] = n3);
          }), a2), h2;
        };
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Manager = void 0;
        const r2 = n2(21), o2 = n2(15), s2 = n2(1), i2 = n2(6), a2 = n2(17), c2 = n2(39), h2 = n2(0)("socket.io-client:manager");
        e2.Manager = class extends s2 {
          constructor(t3, e3) {
            super(), this.nsps = {}, this.subs = [], t3 && "object" == typeof t3 && (e3 = t3, t3 = void 0), (e3 = e3 || {}).path = e3.path || "/socket.io", this.opts = e3, this.reconnection(false !== e3.reconnection), this.reconnectionAttempts(e3.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e3.reconnectionDelay || 1e3), this.reconnectionDelayMax(e3.reconnectionDelayMax || 5e3), this.randomizationFactor(e3.randomizationFactor || 0.5), this.backoff = new c2({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e3.timeout ? 2e4 : e3.timeout), this._readyState = "closed", this.uri = t3;
            const n3 = e3.parser || i2;
            this.encoder = new n3.Encoder(), this.decoder = new n3.Decoder(), this._autoConnect = false !== e3.autoConnect, this._autoConnect && this.open();
          }
          reconnection(t3) {
            return arguments.length ? (this._reconnection = !!t3, this) : this._reconnection;
          }
          reconnectionAttempts(t3) {
            return void 0 === t3 ? this._reconnectionAttempts : (this._reconnectionAttempts = t3, this);
          }
          reconnectionDelay(t3) {
            var e3;
            return void 0 === t3 ? this._reconnectionDelay : (this._reconnectionDelay = t3, null === (e3 = this.backoff) || void 0 === e3 || e3.setMin(t3), this);
          }
          randomizationFactor(t3) {
            var e3;
            return void 0 === t3 ? this._randomizationFactor : (this._randomizationFactor = t3, null === (e3 = this.backoff) || void 0 === e3 || e3.setJitter(t3), this);
          }
          reconnectionDelayMax(t3) {
            var e3;
            return void 0 === t3 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t3, null === (e3 = this.backoff) || void 0 === e3 || e3.setMax(t3), this);
          }
          timeout(t3) {
            return arguments.length ? (this._timeout = t3, this) : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
          }
          open(t3) {
            if (h2("readyState %s", this._readyState), ~this._readyState.indexOf("open"))
              return this;
            h2("opening %s", this.uri), this.engine = r2(this.uri, this.opts);
            const e3 = this.engine, n3 = this;
            this._readyState = "opening", this.skipReconnect = false;
            const o3 = a2.on(e3, "open", function() {
              n3.onopen(), t3 && t3();
            }), s3 = a2.on(e3, "error", (e4) => {
              h2("error"), n3.cleanup(), n3._readyState = "closed", super.emit("error", e4), t3 ? t3(e4) : n3.maybeReconnectOnOpen();
            });
            if (false !== this._timeout) {
              const t4 = this._timeout;
              h2("connect attempt will timeout after %d", t4), 0 === t4 && o3();
              const n4 = setTimeout(() => {
                h2("connect attempt timed out after %d", t4), o3(), e3.close(), e3.emit("error", new Error("timeout"));
              }, t4);
              this.subs.push(function() {
                clearTimeout(n4);
              });
            }
            return this.subs.push(o3), this.subs.push(s3), this;
          }
          connect(t3) {
            return this.open(t3);
          }
          onopen() {
            h2("open"), this.cleanup(), this._readyState = "open", super.emit("open");
            const t3 = this.engine;
            this.subs.push(a2.on(t3, "ping", this.onping.bind(this)), a2.on(t3, "data", this.ondata.bind(this)), a2.on(t3, "error", this.onerror.bind(this)), a2.on(t3, "close", this.onclose.bind(this)), a2.on(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          onping() {
            super.emit("ping");
          }
          ondata(t3) {
            this.decoder.add(t3);
          }
          ondecoded(t3) {
            super.emit("packet", t3);
          }
          onerror(t3) {
            h2("error", t3), super.emit("error", t3);
          }
          socket(t3, e3) {
            let n3 = this.nsps[t3];
            return n3 || (n3 = new o2.Socket(this, t3, e3), this.nsps[t3] = n3), n3;
          }
          _destroy(t3) {
            const e3 = Object.keys(this.nsps);
            for (const t4 of e3) {
              if (this.nsps[t4].active)
                return void h2("socket %s is still active, skipping close", t4);
            }
            this._close();
          }
          _packet(t3) {
            h2("writing packet %j", t3), t3.query && 0 === t3.type && (t3.nsp += "?" + t3.query);
            const e3 = this.encoder.encode(t3);
            for (let n3 = 0; n3 < e3.length; n3++)
              this.engine.write(e3[n3], t3.options);
          }
          cleanup() {
            h2("cleanup"), this.subs.forEach((t3) => t3()), this.subs.length = 0, this.decoder.destroy();
          }
          _close() {
            h2("disconnect"), this.skipReconnect = true, this._reconnecting = false, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(t3) {
            h2("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", super.emit("close", t3), this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect)
              return this;
            const t3 = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              h2("reconnect failed"), this.backoff.reset(), super.emit("reconnect_failed"), this._reconnecting = false;
            else {
              const e3 = this.backoff.duration();
              h2("will wait %dms before reconnect attempt", e3), this._reconnecting = true;
              const n3 = setTimeout(() => {
                t3.skipReconnect || (h2("attempting reconnect"), super.emit("reconnect_attempt", t3.backoff.attempts), t3.skipReconnect || t3.open((e4) => {
                  e4 ? (h2("reconnect attempt error"), t3._reconnecting = false, t3.reconnect(), super.emit("reconnect_error", e4)) : (h2("reconnect success"), t3.onreconnect());
                }));
              }, e3);
              this.subs.push(function() {
                clearTimeout(n3);
              });
            }
          }
          onreconnect() {
            const t3 = this.backoff.attempts;
            this._reconnecting = false, this.backoff.reset(), super.emit("reconnect", t3);
          }
        };
      }, function(t2, e2, n2) {
        const r2 = n2(10), o2 = n2(24), s2 = n2(28), i2 = n2(29);
        e2.polling = function(t3) {
          let e3, n3 = false, i3 = false;
          const a2 = false !== t3.jsonp;
          if ("undefined" != typeof location) {
            const e4 = "https:" === location.protocol;
            let r3 = location.port;
            r3 || (r3 = e4 ? 443 : 80), n3 = t3.hostname !== location.hostname || r3 !== t3.port, i3 = t3.secure !== e4;
          }
          if (t3.xdomain = n3, t3.xscheme = i3, e3 = new r2(t3), "open" in e3 && !t3.forceJSONP)
            return new o2(t3);
          if (!a2)
            throw new Error("JSONP disabled");
          return new s2(t3);
        }, e2.websocket = i2;
      }, function(t2, e2, n2) {
        const r2 = n2(23), o2 = n2(3);
        t2.exports = function(t3) {
          const e3 = t3.xdomain, n3 = t3.xscheme, s2 = t3.enablesXDR;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!e3 || r2))
              return new XMLHttpRequest();
          } catch (t4) {
          }
          try {
            if ("undefined" != typeof XDomainRequest && !n3 && s2)
              return new XDomainRequest();
          } catch (t4) {
          }
          if (!e3)
            try {
              return new o2[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
            } catch (t4) {
            }
        };
      }, function(t2, e2, n2) {
        const r2 = n2(4), o2 = n2(5), s2 = n2(2), i2 = n2(13), a2 = n2(0)("engine.io-client:polling");
        t2.exports = class extends r2 {
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(t3) {
            const e3 = this;
            function n3() {
              a2("paused"), e3.readyState = "paused", t3();
            }
            if (this.readyState = "pausing", this.polling || !this.writable) {
              let t4 = 0;
              this.polling && (a2("we are currently polling - waiting to pause"), t4++, this.once("pollComplete", function() {
                a2("pre-pause polling complete"), --t4 || n3();
              })), this.writable || (a2("we are currently writing - waiting to pause"), t4++, this.once("drain", function() {
                a2("pre-pause writing complete"), --t4 || n3();
              }));
            } else
              n3();
          }
          poll() {
            a2("polling"), this.polling = true, this.doPoll(), this.emit("poll");
          }
          onData(t3) {
            const e3 = this;
            a2("polling got data %s", t3);
            s2.decodePayload(t3, this.socket.binaryType).forEach(function(t4, n3, r3) {
              if ("opening" === e3.readyState && "open" === t4.type && e3.onOpen(), "close" === t4.type)
                return e3.onClose(), false;
              e3.onPacket(t4);
            }), "closed" !== this.readyState && (this.polling = false, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : a2('ignoring poll - transport state "%s"', this.readyState));
          }
          doClose() {
            const t3 = this;
            function e3() {
              a2("writing close packet"), t3.write([{ type: "close" }]);
            }
            "open" === this.readyState ? (a2("transport open - closing"), e3()) : (a2("transport not open - deferring close"), this.once("open", e3));
          }
          write(t3) {
            this.writable = false, s2.encodePayload(t3, (t4) => {
              this.doWrite(t4, () => {
                this.writable = true, this.emit("drain");
              });
            });
          }
          uri() {
            let t3 = this.query || {};
            const e3 = this.opts.secure ? "https" : "http";
            let n3 = "";
            false !== this.opts.timestampRequests && (t3[this.opts.timestampParam] = i2()), this.supportsBinary || t3.sid || (t3.b64 = 1), t3 = o2.encode(t3), this.opts.port && ("https" === e3 && 443 !== Number(this.opts.port) || "http" === e3 && 80 !== Number(this.opts.port)) && (n3 = ":" + this.opts.port), t3.length && (t3 = "?" + t3);
            return e3 + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n3 + this.opts.path + t3;
          }
        };
      }, function(t2, e2) {
        const n2 = /* @__PURE__ */ Object.create(null);
        n2.open = "0", n2.close = "1", n2.ping = "2", n2.pong = "3", n2.message = "4", n2.upgrade = "5", n2.noop = "6";
        const r2 = /* @__PURE__ */ Object.create(null);
        Object.keys(n2).forEach((t3) => {
          r2[n2[t3]] = t3;
        });
        t2.exports = { PACKET_TYPES: n2, PACKET_TYPES_REVERSE: r2, ERROR_PACKET: { type: "error", data: "parser error" } };
      }, function(t2, e2, n2) {
        var r2, o2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s2 = {}, i2 = 0, a2 = 0;
        function c2(t3) {
          var e3 = "";
          do {
            e3 = o2[t3 % 64] + e3, t3 = Math.floor(t3 / 64);
          } while (t3 > 0);
          return e3;
        }
        function h2() {
          var t3 = c2(+/* @__PURE__ */ new Date());
          return t3 !== r2 ? (i2 = 0, r2 = t3) : t3 + "." + c2(i2++);
        }
        for (; a2 < 64; a2++)
          s2[o2[a2]] = a2;
        h2.encode = c2, h2.decode = function(t3) {
          var e3 = 0;
          for (a2 = 0; a2 < t3.length; a2++)
            e3 = 64 * e3 + s2[t3.charAt(a2)];
          return e3;
        }, t2.exports = h2;
      }, function(t2, e2) {
        t2.exports.pick = (t3, ...e3) => e3.reduce((e4, n2) => (t3.hasOwnProperty(n2) && (e4[n2] = t3[n2]), e4), {});
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Socket = void 0;
        const r2 = n2(6), o2 = n2(1), s2 = n2(17), i2 = n2(0)("socket.io-client:socket"), a2 = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
        e2.Socket = class extends o2 {
          constructor(t3, e3, n3) {
            super(), this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = t3, this.nsp = e3, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, n3 && n3.auth && (this.auth = n3.auth), this.io._autoConnect && this.open();
          }
          subEvents() {
            if (this.subs)
              return;
            const t3 = this.io;
            this.subs = [s2.on(t3, "open", this.onopen.bind(this)), s2.on(t3, "packet", this.onpacket.bind(this)), s2.on(t3, "error", this.onerror.bind(this)), s2.on(t3, "close", this.onclose.bind(this))];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
          }
          open() {
            return this.connect();
          }
          send(...t3) {
            return t3.unshift("message"), this.emit.apply(this, t3), this;
          }
          emit(t3, ...e3) {
            if (a2.hasOwnProperty(t3))
              throw new Error('"' + t3 + '" is a reserved event name');
            e3.unshift(t3);
            const n3 = { type: r2.PacketType.EVENT, data: e3, options: {} };
            n3.options.compress = false !== this.flags.compress, "function" == typeof e3[e3.length - 1] && (i2("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e3.pop(), n3.id = this.ids++);
            const o3 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            return this.flags.volatile && (!o3 || !this.connected) ? i2("discard packet as the transport is not currently writable") : this.connected ? this.packet(n3) : this.sendBuffer.push(n3), this.flags = {}, this;
          }
          packet(t3) {
            t3.nsp = this.nsp, this.io._packet(t3);
          }
          onopen() {
            i2("transport is open - connecting"), "function" == typeof this.auth ? this.auth((t3) => {
              this.packet({ type: r2.PacketType.CONNECT, data: t3 });
            }) : this.packet({ type: r2.PacketType.CONNECT, data: this.auth });
          }
          onerror(t3) {
            this.connected || super.emit("connect_error", t3);
          }
          onclose(t3) {
            i2("close (%s)", t3), this.connected = false, this.disconnected = true, delete this.id, super.emit("disconnect", t3);
          }
          onpacket(t3) {
            if (t3.nsp === this.nsp)
              switch (t3.type) {
                case r2.PacketType.CONNECT:
                  if (t3.data && t3.data.sid) {
                    const e4 = t3.data.sid;
                    this.onconnect(e4);
                  } else
                    super.emit("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                  break;
                case r2.PacketType.EVENT:
                case r2.PacketType.BINARY_EVENT:
                  this.onevent(t3);
                  break;
                case r2.PacketType.ACK:
                case r2.PacketType.BINARY_ACK:
                  this.onack(t3);
                  break;
                case r2.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case r2.PacketType.CONNECT_ERROR:
                  const e3 = new Error(t3.data.message);
                  e3.data = t3.data.data, super.emit("connect_error", e3);
              }
          }
          onevent(t3) {
            const e3 = t3.data || [];
            i2("emitting event %j", e3), null != t3.id && (i2("attaching ack callback to event"), e3.push(this.ack(t3.id))), this.connected ? this.emitEvent(e3) : this.receiveBuffer.push(Object.freeze(e3));
          }
          emitEvent(t3) {
            if (this._anyListeners && this._anyListeners.length) {
              const e3 = this._anyListeners.slice();
              for (const n3 of e3)
                n3.apply(this, t3);
            }
            super.emit.apply(this, t3);
          }
          ack(t3) {
            const e3 = this;
            let n3 = false;
            return function(...o3) {
              n3 || (n3 = true, i2("sending ack %j", o3), e3.packet({ type: r2.PacketType.ACK, id: t3, data: o3 }));
            };
          }
          onack(t3) {
            const e3 = this.acks[t3.id];
            "function" == typeof e3 ? (i2("calling ack %s with %j", t3.id, t3.data), e3.apply(this, t3.data), delete this.acks[t3.id]) : i2("bad ack %s", t3.id);
          }
          onconnect(t3) {
            i2("socket connected with id %s", t3), this.id = t3, this.connected = true, this.disconnected = false, super.emit("connect"), this.emitBuffered();
          }
          emitBuffered() {
            this.receiveBuffer.forEach((t3) => this.emitEvent(t3)), this.receiveBuffer = [], this.sendBuffer.forEach((t3) => this.packet(t3)), this.sendBuffer = [];
          }
          ondisconnect() {
            i2("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((t3) => t3()), this.subs = void 0), this.io._destroy(this);
          }
          disconnect() {
            return this.connected && (i2("performing disconnect (%s)", this.nsp), this.packet({ type: r2.PacketType.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
          }
          close() {
            return this.disconnect();
          }
          compress(t3) {
            return this.flags.compress = t3, this;
          }
          get volatile() {
            return this.flags.volatile = true, this;
          }
          onAny(t3) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t3), this;
          }
          prependAny(t3) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t3), this;
          }
          offAny(t3) {
            if (!this._anyListeners)
              return this;
            if (t3) {
              const e3 = this._anyListeners;
              for (let n3 = 0; n3 < e3.length; n3++)
                if (t3 === e3[n3])
                  return e3.splice(n3, 1), this;
            } else
              this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
        };
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.hasBinary = e2.isBinary = void 0;
        const r2 = "function" == typeof ArrayBuffer, o2 = Object.prototype.toString, s2 = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o2.call(Blob), i2 = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o2.call(File);
        function a2(t3) {
          return r2 && (t3 instanceof ArrayBuffer || ((t4) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t4) : t4.buffer instanceof ArrayBuffer)(t3)) || s2 && t3 instanceof Blob || i2 && t3 instanceof File;
        }
        e2.isBinary = a2, e2.hasBinary = function t3(e3, n3) {
          if (!e3 || "object" != typeof e3)
            return false;
          if (Array.isArray(e3)) {
            for (let n4 = 0, r3 = e3.length; n4 < r3; n4++)
              if (t3(e3[n4]))
                return true;
            return false;
          }
          if (a2(e3))
            return true;
          if (e3.toJSON && "function" == typeof e3.toJSON && 1 === arguments.length)
            return t3(e3.toJSON(), true);
          for (const n4 in e3)
            if (Object.prototype.hasOwnProperty.call(e3, n4) && t3(e3[n4]))
              return true;
          return false;
        };
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.on = void 0, e2.on = function(t3, e3, n3) {
          return t3.on(e3, n3), function() {
            t3.off(e3, n3);
          };
        };
      }, function(t2, e2, n2) {
        t2.exports = n2(19);
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Socket = e2.io = e2.Manager = e2.protocol = void 0;
        const r2 = n2(20), o2 = n2(8), s2 = n2(15);
        Object.defineProperty(e2, "Socket", { enumerable: true, get: function() {
          return s2.Socket;
        } });
        const i2 = n2(0)("socket.io-client");
        t2.exports = e2 = c2;
        const a2 = e2.managers = {};
        function c2(t3, e3) {
          "object" == typeof t3 && (e3 = t3, t3 = void 0), e3 = e3 || {};
          const n3 = r2.url(t3), s3 = n3.source, c3 = n3.id, h3 = n3.path, u3 = a2[c3] && h3 in a2[c3].nsps;
          let p2;
          return e3.forceNew || e3["force new connection"] || false === e3.multiplex || u3 ? (i2("ignoring socket cache for %s", s3), p2 = new o2.Manager(s3, e3)) : (a2[c3] || (i2("new io instance for %s", s3), a2[c3] = new o2.Manager(s3, e3)), p2 = a2[c3]), n3.query && !e3.query && (e3.query = n3.query), p2.socket(n3.path, e3);
        }
        e2.io = c2;
        var h2 = n2(6);
        Object.defineProperty(e2, "protocol", { enumerable: true, get: function() {
          return h2.protocol;
        } }), e2.connect = c2;
        var u2 = n2(8);
        Object.defineProperty(e2, "Manager", { enumerable: true, get: function() {
          return u2.Manager;
        } });
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.url = void 0;
        const r2 = n2(7), o2 = n2(0)("socket.io-client:url");
        e2.url = function(t3, e3) {
          let n3 = t3;
          e3 = e3 || "undefined" != typeof location && location, null == t3 && (t3 = e3.protocol + "//" + e3.host), "string" == typeof t3 && ("/" === t3.charAt(0) && (t3 = "/" === t3.charAt(1) ? e3.protocol + t3 : e3.host + t3), /^(https?|wss?):\/\//.test(t3) || (o2("protocol-less url %s", t3), t3 = void 0 !== e3 ? e3.protocol + "//" + t3 : "https://" + t3), o2("parse %s", t3), n3 = r2(t3)), n3.port || (/^(http|ws)$/.test(n3.protocol) ? n3.port = "80" : /^(http|ws)s$/.test(n3.protocol) && (n3.port = "443")), n3.path = n3.path || "/";
          const s2 = -1 !== n3.host.indexOf(":") ? "[" + n3.host + "]" : n3.host;
          return n3.id = n3.protocol + "://" + s2 + ":" + n3.port, n3.href = n3.protocol + "://" + s2 + (e3 && e3.port === n3.port ? "" : ":" + n3.port), n3;
        };
      }, function(t2, e2, n2) {
        const r2 = n2(22);
        t2.exports = (t3, e3) => new r2(t3, e3), t2.exports.Socket = r2, t2.exports.protocol = r2.protocol, t2.exports.Transport = n2(4), t2.exports.transports = n2(9), t2.exports.parser = n2(2);
      }, function(t2, e2, n2) {
        const r2 = n2(9), o2 = n2(1), s2 = n2(0)("engine.io-client:socket"), i2 = n2(2), a2 = n2(7), c2 = n2(5);
        class h2 extends o2 {
          constructor(t3, e3 = {}) {
            super(), t3 && "object" == typeof t3 && (e3 = t3, t3 = null), t3 ? (t3 = a2(t3), e3.hostname = t3.host, e3.secure = "https" === t3.protocol || "wss" === t3.protocol, e3.port = t3.port, t3.query && (e3.query = t3.query)) : e3.host && (e3.hostname = a2(e3.host).host), this.secure = null != e3.secure ? e3.secure : "undefined" != typeof location && "https:" === location.protocol, e3.hostname && !e3.port && (e3.port = this.secure ? "443" : "80"), this.hostname = e3.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e3.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.transports = e3.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, jsonp: true, timestampParam: "t", rememberUpgrade: false, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {} }, e3), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", "string" == typeof this.opts.query && (this.opts.query = c2.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (addEventListener("beforeunload", () => {
              this.transport && (this.transport.removeAllListeners(), this.transport.close());
            }, false), "localhost" !== this.hostname && (this.offlineEventListener = () => {
              this.onClose("transport close");
            }, addEventListener("offline", this.offlineEventListener, false))), this.open();
          }
          createTransport(t3) {
            s2('creating transport "%s"', t3);
            const e3 = function(t4) {
              const e4 = {};
              for (let n4 in t4)
                t4.hasOwnProperty(n4) && (e4[n4] = t4[n4]);
              return e4;
            }(this.opts.query);
            e3.EIO = i2.protocol, e3.transport = t3, this.id && (e3.sid = this.id);
            const n3 = Object.assign({}, this.opts.transportOptions[t3], this.opts, { query: e3, socket: this, hostname: this.hostname, secure: this.secure, port: this.port });
            return s2("options: %j", n3), new r2[t3](n3);
          }
          open() {
            let t3;
            if (this.opts.rememberUpgrade && h2.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
              t3 = "websocket";
            else {
              if (0 === this.transports.length) {
                const t4 = this;
                return void setTimeout(function() {
                  t4.emit("error", "No transports available");
                }, 0);
              }
              t3 = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t3 = this.createTransport(t3);
            } catch (t4) {
              return s2("error while creating transport: %s", t4), this.transports.shift(), void this.open();
            }
            t3.open(), this.setTransport(t3);
          }
          setTransport(t3) {
            s2("setting transport %s", t3.name);
            const e3 = this;
            this.transport && (s2("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t3, t3.on("drain", function() {
              e3.onDrain();
            }).on("packet", function(t4) {
              e3.onPacket(t4);
            }).on("error", function(t4) {
              e3.onError(t4);
            }).on("close", function() {
              e3.onClose("transport close");
            });
          }
          probe(t3) {
            s2('probing transport "%s"', t3);
            let e3 = this.createTransport(t3, { probe: 1 }), n3 = false;
            const r3 = this;
            function o3() {
              if (r3.onlyBinaryUpgrades) {
                const t4 = !this.supportsBinary && r3.transport.supportsBinary;
                n3 = n3 || t4;
              }
              n3 || (s2('probe transport "%s" opened', t3), e3.send([{ type: "ping", data: "probe" }]), e3.once("packet", function(o4) {
                if (!n3)
                  if ("pong" === o4.type && "probe" === o4.data) {
                    if (s2('probe transport "%s" pong', t3), r3.upgrading = true, r3.emit("upgrading", e3), !e3)
                      return;
                    h2.priorWebsocketSuccess = "websocket" === e3.name, s2('pausing current transport "%s"', r3.transport.name), r3.transport.pause(function() {
                      n3 || "closed" !== r3.readyState && (s2("changing transport and sending upgrade packet"), f2(), r3.setTransport(e3), e3.send([{ type: "upgrade" }]), r3.emit("upgrade", e3), e3 = null, r3.upgrading = false, r3.flush());
                    });
                  } else {
                    s2('probe transport "%s" failed', t3);
                    const n4 = new Error("probe error");
                    n4.transport = e3.name, r3.emit("upgradeError", n4);
                  }
              }));
            }
            function i3() {
              n3 || (n3 = true, f2(), e3.close(), e3 = null);
            }
            function a3(n4) {
              const o4 = new Error("probe error: " + n4);
              o4.transport = e3.name, i3(), s2('probe transport "%s" failed because of error: %s', t3, n4), r3.emit("upgradeError", o4);
            }
            function c3() {
              a3("transport closed");
            }
            function u2() {
              a3("socket closed");
            }
            function p2(t4) {
              e3 && t4.name !== e3.name && (s2('"%s" works - aborting "%s"', t4.name, e3.name), i3());
            }
            function f2() {
              e3.removeListener("open", o3), e3.removeListener("error", a3), e3.removeListener("close", c3), r3.removeListener("close", u2), r3.removeListener("upgrading", p2);
            }
            h2.priorWebsocketSuccess = false, e3.once("open", o3), e3.once("error", a3), e3.once("close", c3), this.once("close", u2), this.once("upgrading", p2), e3.open();
          }
          onOpen() {
            if (s2("socket open"), this.readyState = "open", h2.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
              s2("starting upgrade probes");
              let t3 = 0;
              const e3 = this.upgrades.length;
              for (; t3 < e3; t3++)
                this.probe(this.upgrades[t3]);
            }
          }
          onPacket(t3) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
              switch (s2('socket receive: type "%s", data "%s"', t3.type, t3.data), this.emit("packet", t3), this.emit("heartbeat"), t3.type) {
                case "open":
                  this.onHandshake(JSON.parse(t3.data));
                  break;
                case "ping":
                  this.resetPingTimeout(), this.sendPacket("pong"), this.emit("pong");
                  break;
                case "error":
                  const e3 = new Error("server error");
                  e3.code = t3.data, this.onError(e3);
                  break;
                case "message":
                  this.emit("data", t3.data), this.emit("message", t3.data);
              }
            else
              s2('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(t3) {
            this.emit("handshake", t3), this.id = t3.sid, this.transport.query.sid = t3.sid, this.upgrades = this.filterUpgrades(t3.upgrades), this.pingInterval = t3.pingInterval, this.pingTimeout = t3.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
          }
          flush() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s2("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }
          write(t3, e3, n3) {
            return this.sendPacket("message", t3, e3, n3), this;
          }
          send(t3, e3, n3) {
            return this.sendPacket("message", t3, e3, n3), this;
          }
          sendPacket(t3, e3, n3, r3) {
            if ("function" == typeof e3 && (r3 = e3, e3 = void 0), "function" == typeof n3 && (r3 = n3, n3 = null), "closing" === this.readyState || "closed" === this.readyState)
              return;
            (n3 = n3 || {}).compress = false !== n3.compress;
            const o3 = { type: t3, data: e3, options: n3 };
            this.emit("packetCreate", o3), this.writeBuffer.push(o3), r3 && this.once("flush", r3), this.flush();
          }
          close() {
            const t3 = this;
            function e3() {
              t3.onClose("forced close"), s2("socket closing - telling transport to close"), t3.transport.close();
            }
            function n3() {
              t3.removeListener("upgrade", n3), t3.removeListener("upgradeError", n3), e3();
            }
            function r3() {
              t3.once("upgrade", n3), t3.once("upgradeError", n3);
            }
            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
              this.upgrading ? r3() : e3();
            }) : this.upgrading ? r3() : e3()), this;
          }
          onError(t3) {
            s2("socket error %j", t3), h2.priorWebsocketSuccess = false, this.emit("error", t3), this.onClose("transport error", t3);
          }
          onClose(t3, e3) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              s2('socket close with reason: "%s"', t3);
              const n3 = this;
              clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, false), this.readyState = "closed", this.id = null, this.emit("close", t3, e3), n3.writeBuffer = [], n3.prevBufferLen = 0;
            }
          }
          filterUpgrades(t3) {
            const e3 = [];
            let n3 = 0;
            const r3 = t3.length;
            for (; n3 < r3; n3++)
              ~this.transports.indexOf(t3[n3]) && e3.push(t3[n3]);
            return e3;
          }
        }
        h2.priorWebsocketSuccess = false, h2.protocol = i2.protocol, t2.exports = h2;
      }, function(t2, e2) {
        try {
          t2.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
        } catch (e3) {
          t2.exports = false;
        }
      }, function(t2, e2, n2) {
        const r2 = n2(10), o2 = n2(11), s2 = n2(1), { pick: i2 } = n2(14), a2 = n2(3), c2 = n2(0)("engine.io-client:polling-xhr");
        function h2() {
        }
        const u2 = null != new r2({ xdomain: false }).responseType;
        class p2 extends s2 {
          constructor(t3, e3) {
            super(), this.opts = e3, this.method = e3.method || "GET", this.uri = t3, this.async = false !== e3.async, this.data = void 0 !== e3.data ? e3.data : null, this.create();
          }
          create() {
            const t3 = i2(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            t3.xdomain = !!this.opts.xd, t3.xscheme = !!this.opts.xs;
            const e3 = this.xhr = new r2(t3), n3 = this;
            try {
              c2("xhr open %s: %s", this.method, this.uri), e3.open(this.method, this.uri, this.async);
              try {
                if (this.opts.extraHeaders) {
                  e3.setDisableHeaderCheck && e3.setDisableHeaderCheck(true);
                  for (let t4 in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(t4) && e3.setRequestHeader(t4, this.opts.extraHeaders[t4]);
                }
              } catch (t4) {
              }
              if ("POST" === this.method)
                try {
                  e3.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (t4) {
                }
              try {
                e3.setRequestHeader("Accept", "*/*");
              } catch (t4) {
              }
              "withCredentials" in e3 && (e3.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e3.timeout = this.opts.requestTimeout), this.hasXDR() ? (e3.onload = function() {
                n3.onLoad();
              }, e3.onerror = function() {
                n3.onError(e3.responseText);
              }) : e3.onreadystatechange = function() {
                4 === e3.readyState && (200 === e3.status || 1223 === e3.status ? n3.onLoad() : setTimeout(function() {
                  n3.onError("number" == typeof e3.status ? e3.status : 0);
                }, 0));
              }, c2("xhr data %s", this.data), e3.send(this.data);
            } catch (t4) {
              return void setTimeout(function() {
                n3.onError(t4);
              }, 0);
            }
            "undefined" != typeof document && (this.index = p2.requestsCount++, p2.requests[this.index] = this);
          }
          onSuccess() {
            this.emit("success"), this.cleanup();
          }
          onData(t3) {
            this.emit("data", t3), this.onSuccess();
          }
          onError(t3) {
            this.emit("error", t3), this.cleanup(true);
          }
          cleanup(t3) {
            if (void 0 !== this.xhr && null !== this.xhr) {
              if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = h2 : this.xhr.onreadystatechange = h2, t3)
                try {
                  this.xhr.abort();
                } catch (t4) {
                }
              "undefined" != typeof document && delete p2.requests[this.index], this.xhr = null;
            }
          }
          onLoad() {
            const t3 = this.xhr.responseText;
            null !== t3 && this.onData(t3);
          }
          hasXDR() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
          }
          abort() {
            this.cleanup();
          }
        }
        if (p2.requestsCount = 0, p2.requests = {}, "undefined" != typeof document) {
          if ("function" == typeof attachEvent)
            attachEvent("onunload", f2);
          else if ("function" == typeof addEventListener) {
            addEventListener("onpagehide" in a2 ? "pagehide" : "unload", f2, false);
          }
        }
        function f2() {
          for (let t3 in p2.requests)
            p2.requests.hasOwnProperty(t3) && p2.requests[t3].abort();
        }
        t2.exports = class extends o2 {
          constructor(t3) {
            if (super(t3), "undefined" != typeof location) {
              const e4 = "https:" === location.protocol;
              let n3 = location.port;
              n3 || (n3 = e4 ? 443 : 80), this.xd = "undefined" != typeof location && t3.hostname !== location.hostname || n3 !== t3.port, this.xs = t3.secure !== e4;
            }
            const e3 = t3 && t3.forceBase64;
            this.supportsBinary = u2 && !e3;
          }
          request(t3 = {}) {
            return Object.assign(t3, { xd: this.xd, xs: this.xs }, this.opts), new p2(this.uri(), t3);
          }
          doWrite(t3, e3) {
            const n3 = this.request({ method: "POST", data: t3 }), r3 = this;
            n3.on("success", e3), n3.on("error", function(t4) {
              r3.onError("xhr post error", t4);
            });
          }
          doPoll() {
            c2("xhr poll");
            const t3 = this.request(), e3 = this;
            t3.on("data", function(t4) {
              e3.onData(t4);
            }), t3.on("error", function(t4) {
              e3.onError("xhr poll error", t4);
            }), this.pollXhr = t3;
          }
        }, t2.exports.Request = p2;
      }, function(t2, e2, n2) {
        const { PACKET_TYPES: r2 } = n2(12), o2 = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), s2 = "function" == typeof ArrayBuffer, i2 = (t3, e3) => {
          const n3 = new FileReader();
          return n3.onload = function() {
            const t4 = n3.result.split(",")[1];
            e3("b" + t4);
          }, n3.readAsDataURL(t3);
        };
        t2.exports = ({ type: t3, data: e3 }, n3, a2) => {
          return o2 && e3 instanceof Blob ? n3 ? a2(e3) : i2(e3, a2) : s2 && (e3 instanceof ArrayBuffer || (c2 = e3, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(c2) : c2 && c2.buffer instanceof ArrayBuffer)) ? n3 ? a2(e3 instanceof ArrayBuffer ? e3 : e3.buffer) : i2(new Blob([e3]), a2) : a2(r2[t3] + (e3 || ""));
          var c2;
        };
      }, function(t2, e2, n2) {
        const { PACKET_TYPES_REVERSE: r2, ERROR_PACKET: o2 } = n2(12);
        let s2;
        "function" == typeof ArrayBuffer && (s2 = n2(27));
        const i2 = (t3, e3) => {
          if (s2) {
            const n3 = s2.decode(t3);
            return a2(n3, e3);
          }
          return { base64: true, data: t3 };
        }, a2 = (t3, e3) => {
          switch (e3) {
            case "blob":
              return t3 instanceof ArrayBuffer ? new Blob([t3]) : t3;
            case "arraybuffer":
            default:
              return t3;
          }
        };
        t2.exports = (t3, e3) => {
          if ("string" != typeof t3)
            return { type: "message", data: a2(t3, e3) };
          const n3 = t3.charAt(0);
          if ("b" === n3)
            return { type: "message", data: i2(t3.substring(1), e3) };
          return r2[n3] ? t3.length > 1 ? { type: r2[n3], data: t3.substring(1) } : { type: r2[n3] } : o2;
        };
      }, function(t2, e2) {
        !function(t3) {
          e2.encode = function(e3) {
            var n2, r2 = new Uint8Array(e3), o2 = r2.length, s2 = "";
            for (n2 = 0; n2 < o2; n2 += 3)
              s2 += t3[r2[n2] >> 2], s2 += t3[(3 & r2[n2]) << 4 | r2[n2 + 1] >> 4], s2 += t3[(15 & r2[n2 + 1]) << 2 | r2[n2 + 2] >> 6], s2 += t3[63 & r2[n2 + 2]];
            return o2 % 3 == 2 ? s2 = s2.substring(0, s2.length - 1) + "=" : o2 % 3 == 1 && (s2 = s2.substring(0, s2.length - 2) + "=="), s2;
          }, e2.decode = function(e3) {
            var n2, r2, o2, s2, i2, a2 = 0.75 * e3.length, c2 = e3.length, h2 = 0;
            "=" === e3[e3.length - 1] && (a2--, "=" === e3[e3.length - 2] && a2--);
            var u2 = new ArrayBuffer(a2), p2 = new Uint8Array(u2);
            for (n2 = 0; n2 < c2; n2 += 4)
              r2 = t3.indexOf(e3[n2]), o2 = t3.indexOf(e3[n2 + 1]), s2 = t3.indexOf(e3[n2 + 2]), i2 = t3.indexOf(e3[n2 + 3]), p2[h2++] = r2 << 2 | o2 >> 4, p2[h2++] = (15 & o2) << 4 | s2 >> 2, p2[h2++] = (3 & s2) << 6 | 63 & i2;
            return u2;
          };
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      }, function(t2, e2, n2) {
        const r2 = n2(11), o2 = n2(3), s2 = /\n/g, i2 = /\\n/g;
        let a2;
        t2.exports = class extends r2 {
          constructor(t3) {
            super(t3), this.query = this.query || {}, a2 || (a2 = o2.___eio = o2.___eio || []), this.index = a2.length;
            const e3 = this;
            a2.push(function(t4) {
              e3.onData(t4);
            }), this.query.j = this.index;
          }
          get supportsBinary() {
            return false;
          }
          doClose() {
            this.script && (this.script.onerror = () => {
            }, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), super.doClose();
          }
          doPoll() {
            const t3 = this, e3 = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e3.async = true, e3.src = this.uri(), e3.onerror = function(e4) {
              t3.onError("jsonp poll error", e4);
            };
            const n3 = document.getElementsByTagName("script")[0];
            n3 ? n3.parentNode.insertBefore(e3, n3) : (document.head || document.body).appendChild(e3), this.script = e3;
            "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
              const t4 = document.createElement("iframe");
              document.body.appendChild(t4), document.body.removeChild(t4);
            }, 100);
          }
          doWrite(t3, e3) {
            const n3 = this;
            let r3;
            if (!this.form) {
              const t4 = document.createElement("form"), e4 = document.createElement("textarea"), n4 = this.iframeId = "eio_iframe_" + this.index;
              t4.className = "socketio", t4.style.position = "absolute", t4.style.top = "-1000px", t4.style.left = "-1000px", t4.target = n4, t4.method = "POST", t4.setAttribute("accept-charset", "utf-8"), e4.name = "d", t4.appendChild(e4), document.body.appendChild(t4), this.form = t4, this.area = e4;
            }
            function o3() {
              a3(), e3();
            }
            function a3() {
              if (n3.iframe)
                try {
                  n3.form.removeChild(n3.iframe);
                } catch (t4) {
                  n3.onError("jsonp polling iframe removal error", t4);
                }
              try {
                const t4 = '<iframe src="javascript:0" name="' + n3.iframeId + '">';
                r3 = document.createElement(t4);
              } catch (t4) {
                r3 = document.createElement("iframe"), r3.name = n3.iframeId, r3.src = "javascript:0";
              }
              r3.id = n3.iframeId, n3.form.appendChild(r3), n3.iframe = r3;
            }
            this.form.action = this.uri(), a3(), t3 = t3.replace(i2, "\\\n"), this.area.value = t3.replace(s2, "\\n");
            try {
              this.form.submit();
            } catch (t4) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
              "complete" === n3.iframe.readyState && o3();
            } : this.iframe.onload = o3;
          }
        };
      }, function(t2, e2, n2) {
        (function(e3) {
          const r2 = n2(2), o2 = n2(5), s2 = n2(13), i2 = n2(4), { pick: a2 } = n2(14), c2 = n2(3), h2 = n2(0)("engine.io-client:websocket");
          let u2 = c2.WebSocket || c2.MozWebSocket, p2 = true, f2 = "arraybuffer";
          "undefined" == typeof window && (u2 = n2(35), p2 = false, f2 = "nodebuffer");
          const l2 = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
          class d2 extends i2 {
            constructor(t3) {
              super(t3), this.supportsBinary = !t3.forceBase64;
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check())
                return;
              const t3 = this.uri(), e4 = this.opts.protocols, n3 = l2 ? {} : a2(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
              this.opts.extraHeaders && (n3.headers = this.opts.extraHeaders);
              try {
                this.ws = p2 && !l2 ? e4 ? new u2(t3, e4) : new u2(t3) : new u2(t3, e4, n3);
              } catch (t4) {
                return formatAppLog("log", "at node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js:1", "error", t4), this.emit("error", t4);
              }
              this.ws.binaryType = this.socket.binaryType || f2, this.addEventListeners();
            }
            addEventListeners() {
              this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = (t3) => this.onData(t3.data), this.ws.onerror = (t3) => this.onError("websocket error", t3);
            }
            write(t3) {
              const n3 = this;
              this.writable = false;
              let o3 = t3.length, s3 = 0;
              const i3 = o3;
              for (; s3 < i3; s3++)
                !function(t4) {
                  r2.encodePacket(t4, n3.supportsBinary, function(r3) {
                    const s4 = {};
                    if (!p2 && (t4.options && (s4.compress = t4.options.compress), n3.opts.perMessageDeflate)) {
                      ("string" == typeof r3 ? e3.byteLength(r3) : r3.length) < n3.opts.perMessageDeflate.threshold && (s4.compress = false);
                    }
                    try {
                      p2 ? n3.ws.send(r3) : n3.ws.send(r3, s4);
                    } catch (t5) {
                      h2("websocket closed before onclose event");
                    }
                    --o3 || a3();
                  });
                }(t3[s3]);
              function a3() {
                n3.emit("flush"), setTimeout(function() {
                  n3.writable = true, n3.emit("drain");
                }, 0);
              }
            }
            onClose() {
              i2.prototype.onClose.call(this);
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), this.ws = null);
            }
            uri() {
              let t3 = this.query || {};
              const e4 = this.opts.secure ? "wss" : "ws";
              let n3 = "";
              this.opts.port && ("wss" === e4 && 443 !== Number(this.opts.port) || "ws" === e4 && 80 !== Number(this.opts.port)) && (n3 = ":" + this.opts.port), this.opts.timestampRequests && (t3[this.opts.timestampParam] = s2()), this.supportsBinary || (t3.b64 = 1), t3 = o2.encode(t3), t3.length && (t3 = "?" + t3);
              return e4 + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n3 + this.opts.path + t3;
            }
            check() {
              return !(!u2 || "__initialize" in u2 && this.name === d2.prototype.name);
            }
          }
          t2.exports = d2;
        }).call(this, n2(30).Buffer);
      }, function(t2, e2, n2) {
        (function(t3) {
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <http://feross.org>
           * @license  MIT
           */
          var r2 = n2(32), o2 = n2(33), s2 = n2(34);
          function i2() {
            return c2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a2(t4, e3) {
            if (i2() < e3)
              throw new RangeError("Invalid typed array length");
            return c2.TYPED_ARRAY_SUPPORT ? (t4 = new Uint8Array(e3)).__proto__ = c2.prototype : (null === t4 && (t4 = new c2(e3)), t4.length = e3), t4;
          }
          function c2(t4, e3, n3) {
            if (!(c2.TYPED_ARRAY_SUPPORT || this instanceof c2))
              return new c2(t4, e3, n3);
            if ("number" == typeof t4) {
              if ("string" == typeof e3)
                throw new Error("If encoding is specified then the first argument must be a string");
              return p2(this, t4);
            }
            return h2(this, t4, e3, n3);
          }
          function h2(t4, e3, n3, r3) {
            if ("number" == typeof e3)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e3 instanceof ArrayBuffer ? function(t5, e4, n4, r4) {
              if (e4.byteLength, n4 < 0 || e4.byteLength < n4)
                throw new RangeError("'offset' is out of bounds");
              if (e4.byteLength < n4 + (r4 || 0))
                throw new RangeError("'length' is out of bounds");
              e4 = void 0 === n4 && void 0 === r4 ? new Uint8Array(e4) : void 0 === r4 ? new Uint8Array(e4, n4) : new Uint8Array(e4, n4, r4);
              c2.TYPED_ARRAY_SUPPORT ? (t5 = e4).__proto__ = c2.prototype : t5 = f2(t5, e4);
              return t5;
            }(t4, e3, n3, r3) : "string" == typeof e3 ? function(t5, e4, n4) {
              "string" == typeof n4 && "" !== n4 || (n4 = "utf8");
              if (!c2.isEncoding(n4))
                throw new TypeError('"encoding" must be a valid string encoding');
              var r4 = 0 | d2(e4, n4), o3 = (t5 = a2(t5, r4)).write(e4, n4);
              o3 !== r4 && (t5 = t5.slice(0, o3));
              return t5;
            }(t4, e3, n3) : function(t5, e4) {
              if (c2.isBuffer(e4)) {
                var n4 = 0 | l2(e4.length);
                return 0 === (t5 = a2(t5, n4)).length || e4.copy(t5, 0, 0, n4), t5;
              }
              if (e4) {
                if ("undefined" != typeof ArrayBuffer && e4.buffer instanceof ArrayBuffer || "length" in e4)
                  return "number" != typeof e4.length || (r4 = e4.length) != r4 ? a2(t5, 0) : f2(t5, e4);
                if ("Buffer" === e4.type && s2(e4.data))
                  return f2(t5, e4.data);
              }
              var r4;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t4, e3);
          }
          function u2(t4) {
            if ("number" != typeof t4)
              throw new TypeError('"size" argument must be a number');
            if (t4 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function p2(t4, e3) {
            if (u2(e3), t4 = a2(t4, e3 < 0 ? 0 : 0 | l2(e3)), !c2.TYPED_ARRAY_SUPPORT)
              for (var n3 = 0; n3 < e3; ++n3)
                t4[n3] = 0;
            return t4;
          }
          function f2(t4, e3) {
            var n3 = e3.length < 0 ? 0 : 0 | l2(e3.length);
            t4 = a2(t4, n3);
            for (var r3 = 0; r3 < n3; r3 += 1)
              t4[r3] = 255 & e3[r3];
            return t4;
          }
          function l2(t4) {
            if (t4 >= i2())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i2().toString(16) + " bytes");
            return 0 | t4;
          }
          function d2(t4, e3) {
            if (c2.isBuffer(t4))
              return t4.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t4) || t4 instanceof ArrayBuffer))
              return t4.byteLength;
            "string" != typeof t4 && (t4 = "" + t4);
            var n3 = t4.length;
            if (0 === n3)
              return 0;
            for (var r3 = false; ; )
              switch (e3) {
                case "ascii":
                case "latin1":
                case "binary":
                  return n3;
                case "utf8":
                case "utf-8":
                case void 0:
                  return Y2(t4).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * n3;
                case "hex":
                  return n3 >>> 1;
                case "base64":
                  return q2(t4).length;
                default:
                  if (r3)
                    return Y2(t4).length;
                  e3 = ("" + e3).toLowerCase(), r3 = true;
              }
          }
          function y2(t4, e3, n3) {
            var r3 = false;
            if ((void 0 === e3 || e3 < 0) && (e3 = 0), e3 > this.length)
              return "";
            if ((void 0 === n3 || n3 > this.length) && (n3 = this.length), n3 <= 0)
              return "";
            if ((n3 >>>= 0) <= (e3 >>>= 0))
              return "";
            for (t4 || (t4 = "utf8"); ; )
              switch (t4) {
                case "hex":
                  return C2(this, e3, n3);
                case "utf8":
                case "utf-8":
                  return x(this, e3, n3);
                case "ascii":
                  return S2(this, e3, n3);
                case "latin1":
                case "binary":
                  return P2(this, e3, n3);
                case "base64":
                  return T2(this, e3, n3);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return R2(this, e3, n3);
                default:
                  if (r3)
                    throw new TypeError("Unknown encoding: " + t4);
                  t4 = (t4 + "").toLowerCase(), r3 = true;
              }
          }
          function g2(t4, e3, n3) {
            var r3 = t4[e3];
            t4[e3] = t4[n3], t4[n3] = r3;
          }
          function m2(t4, e3, n3, r3, o3) {
            if (0 === t4.length)
              return -1;
            if ("string" == typeof n3 ? (r3 = n3, n3 = 0) : n3 > 2147483647 ? n3 = 2147483647 : n3 < -2147483648 && (n3 = -2147483648), n3 = +n3, isNaN(n3) && (n3 = o3 ? 0 : t4.length - 1), n3 < 0 && (n3 = t4.length + n3), n3 >= t4.length) {
              if (o3)
                return -1;
              n3 = t4.length - 1;
            } else if (n3 < 0) {
              if (!o3)
                return -1;
              n3 = 0;
            }
            if ("string" == typeof e3 && (e3 = c2.from(e3, r3)), c2.isBuffer(e3))
              return 0 === e3.length ? -1 : v2(t4, e3, n3, r3, o3);
            if ("number" == typeof e3)
              return e3 &= 255, c2.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o3 ? Uint8Array.prototype.indexOf.call(t4, e3, n3) : Uint8Array.prototype.lastIndexOf.call(t4, e3, n3) : v2(t4, [e3], n3, r3, o3);
            throw new TypeError("val must be string, number or Buffer");
          }
          function v2(t4, e3, n3, r3, o3) {
            var s3, i3 = 1, a3 = t4.length, c3 = e3.length;
            if (void 0 !== r3 && ("ucs2" === (r3 = String(r3).toLowerCase()) || "ucs-2" === r3 || "utf16le" === r3 || "utf-16le" === r3)) {
              if (t4.length < 2 || e3.length < 2)
                return -1;
              i3 = 2, a3 /= 2, c3 /= 2, n3 /= 2;
            }
            function h3(t5, e4) {
              return 1 === i3 ? t5[e4] : t5.readUInt16BE(e4 * i3);
            }
            if (o3) {
              var u3 = -1;
              for (s3 = n3; s3 < a3; s3++)
                if (h3(t4, s3) === h3(e3, -1 === u3 ? 0 : s3 - u3)) {
                  if (-1 === u3 && (u3 = s3), s3 - u3 + 1 === c3)
                    return u3 * i3;
                } else
                  -1 !== u3 && (s3 -= s3 - u3), u3 = -1;
            } else
              for (n3 + c3 > a3 && (n3 = a3 - c3), s3 = n3; s3 >= 0; s3--) {
                for (var p3 = true, f3 = 0; f3 < c3; f3++)
                  if (h3(t4, s3 + f3) !== h3(e3, f3)) {
                    p3 = false;
                    break;
                  }
                if (p3)
                  return s3;
              }
            return -1;
          }
          function b2(t4, e3, n3, r3) {
            n3 = Number(n3) || 0;
            var o3 = t4.length - n3;
            r3 ? (r3 = Number(r3)) > o3 && (r3 = o3) : r3 = o3;
            var s3 = e3.length;
            if (s3 % 2 != 0)
              throw new TypeError("Invalid hex string");
            r3 > s3 / 2 && (r3 = s3 / 2);
            for (var i3 = 0; i3 < r3; ++i3) {
              var a3 = parseInt(e3.substr(2 * i3, 2), 16);
              if (isNaN(a3))
                return i3;
              t4[n3 + i3] = a3;
            }
            return i3;
          }
          function w2(t4, e3, n3, r3) {
            return F2(Y2(e3, t4.length - n3), t4, n3, r3);
          }
          function _2(t4, e3, n3, r3) {
            return F2(function(t5) {
              for (var e4 = [], n4 = 0; n4 < t5.length; ++n4)
                e4.push(255 & t5.charCodeAt(n4));
              return e4;
            }(e3), t4, n3, r3);
          }
          function E2(t4, e3, n3, r3) {
            return _2(t4, e3, n3, r3);
          }
          function k(t4, e3, n3, r3) {
            return F2(q2(e3), t4, n3, r3);
          }
          function A2(t4, e3, n3, r3) {
            return F2(function(t5, e4) {
              for (var n4, r4, o3, s3 = [], i3 = 0; i3 < t5.length && !((e4 -= 2) < 0); ++i3)
                n4 = t5.charCodeAt(i3), r4 = n4 >> 8, o3 = n4 % 256, s3.push(o3), s3.push(r4);
              return s3;
            }(e3, t4.length - n3), t4, n3, r3);
          }
          function T2(t4, e3, n3) {
            return 0 === e3 && n3 === t4.length ? r2.fromByteArray(t4) : r2.fromByteArray(t4.slice(e3, n3));
          }
          function x(t4, e3, n3) {
            n3 = Math.min(t4.length, n3);
            for (var r3 = [], o3 = e3; o3 < n3; ) {
              var s3, i3, a3, c3, h3 = t4[o3], u3 = null, p3 = h3 > 239 ? 4 : h3 > 223 ? 3 : h3 > 191 ? 2 : 1;
              if (o3 + p3 <= n3)
                switch (p3) {
                  case 1:
                    h3 < 128 && (u3 = h3);
                    break;
                  case 2:
                    128 == (192 & (s3 = t4[o3 + 1])) && (c3 = (31 & h3) << 6 | 63 & s3) > 127 && (u3 = c3);
                    break;
                  case 3:
                    s3 = t4[o3 + 1], i3 = t4[o3 + 2], 128 == (192 & s3) && 128 == (192 & i3) && (c3 = (15 & h3) << 12 | (63 & s3) << 6 | 63 & i3) > 2047 && (c3 < 55296 || c3 > 57343) && (u3 = c3);
                    break;
                  case 4:
                    s3 = t4[o3 + 1], i3 = t4[o3 + 2], a3 = t4[o3 + 3], 128 == (192 & s3) && 128 == (192 & i3) && 128 == (192 & a3) && (c3 = (15 & h3) << 18 | (63 & s3) << 12 | (63 & i3) << 6 | 63 & a3) > 65535 && c3 < 1114112 && (u3 = c3);
                }
              null === u3 ? (u3 = 65533, p3 = 1) : u3 > 65535 && (u3 -= 65536, r3.push(u3 >>> 10 & 1023 | 55296), u3 = 56320 | 1023 & u3), r3.push(u3), o3 += p3;
            }
            return function(t5) {
              var e4 = t5.length;
              if (e4 <= 4096)
                return String.fromCharCode.apply(String, t5);
              var n4 = "", r4 = 0;
              for (; r4 < e4; )
                n4 += String.fromCharCode.apply(String, t5.slice(r4, r4 += 4096));
              return n4;
            }(r3);
          }
          e2.Buffer = c2, e2.SlowBuffer = function(t4) {
            +t4 != t4 && (t4 = 0);
            return c2.alloc(+t4);
          }, e2.INSPECT_MAX_BYTES = 50, c2.TYPED_ARRAY_SUPPORT = void 0 !== t3.TYPED_ARRAY_SUPPORT ? t3.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t4 = new Uint8Array(1);
              return t4.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, 42 === t4.foo() && "function" == typeof t4.subarray && 0 === t4.subarray(1, 1).byteLength;
            } catch (t5) {
              return false;
            }
          }(), e2.kMaxLength = i2(), c2.poolSize = 8192, c2._augment = function(t4) {
            return t4.__proto__ = c2.prototype, t4;
          }, c2.from = function(t4, e3, n3) {
            return h2(null, t4, e3, n3);
          }, c2.TYPED_ARRAY_SUPPORT && (c2.prototype.__proto__ = Uint8Array.prototype, c2.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c2[Symbol.species] === c2 && Object.defineProperty(c2, Symbol.species, { value: null, configurable: true })), c2.alloc = function(t4, e3, n3) {
            return function(t5, e4, n4, r3) {
              return u2(e4), e4 <= 0 ? a2(t5, e4) : void 0 !== n4 ? "string" == typeof r3 ? a2(t5, e4).fill(n4, r3) : a2(t5, e4).fill(n4) : a2(t5, e4);
            }(null, t4, e3, n3);
          }, c2.allocUnsafe = function(t4) {
            return p2(null, t4);
          }, c2.allocUnsafeSlow = function(t4) {
            return p2(null, t4);
          }, c2.isBuffer = function(t4) {
            return !(null == t4 || !t4._isBuffer);
          }, c2.compare = function(t4, e3) {
            if (!c2.isBuffer(t4) || !c2.isBuffer(e3))
              throw new TypeError("Arguments must be Buffers");
            if (t4 === e3)
              return 0;
            for (var n3 = t4.length, r3 = e3.length, o3 = 0, s3 = Math.min(n3, r3); o3 < s3; ++o3)
              if (t4[o3] !== e3[o3]) {
                n3 = t4[o3], r3 = e3[o3];
                break;
              }
            return n3 < r3 ? -1 : r3 < n3 ? 1 : 0;
          }, c2.isEncoding = function(t4) {
            switch (String(t4).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, c2.concat = function(t4, e3) {
            if (!s2(t4))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t4.length)
              return c2.alloc(0);
            var n3;
            if (void 0 === e3)
              for (e3 = 0, n3 = 0; n3 < t4.length; ++n3)
                e3 += t4[n3].length;
            var r3 = c2.allocUnsafe(e3), o3 = 0;
            for (n3 = 0; n3 < t4.length; ++n3) {
              var i3 = t4[n3];
              if (!c2.isBuffer(i3))
                throw new TypeError('"list" argument must be an Array of Buffers');
              i3.copy(r3, o3), o3 += i3.length;
            }
            return r3;
          }, c2.byteLength = d2, c2.prototype._isBuffer = true, c2.prototype.swap16 = function() {
            var t4 = this.length;
            if (t4 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e3 = 0; e3 < t4; e3 += 2)
              g2(this, e3, e3 + 1);
            return this;
          }, c2.prototype.swap32 = function() {
            var t4 = this.length;
            if (t4 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e3 = 0; e3 < t4; e3 += 4)
              g2(this, e3, e3 + 3), g2(this, e3 + 1, e3 + 2);
            return this;
          }, c2.prototype.swap64 = function() {
            var t4 = this.length;
            if (t4 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e3 = 0; e3 < t4; e3 += 8)
              g2(this, e3, e3 + 7), g2(this, e3 + 1, e3 + 6), g2(this, e3 + 2, e3 + 5), g2(this, e3 + 3, e3 + 4);
            return this;
          }, c2.prototype.toString = function() {
            var t4 = 0 | this.length;
            return 0 === t4 ? "" : 0 === arguments.length ? x(this, 0, t4) : y2.apply(this, arguments);
          }, c2.prototype.equals = function(t4) {
            if (!c2.isBuffer(t4))
              throw new TypeError("Argument must be a Buffer");
            return this === t4 || 0 === c2.compare(this, t4);
          }, c2.prototype.inspect = function() {
            var t4 = "", n3 = e2.INSPECT_MAX_BYTES;
            return this.length > 0 && (t4 = this.toString("hex", 0, n3).match(/.{2}/g).join(" "), this.length > n3 && (t4 += " ... ")), "<Buffer " + t4 + ">";
          }, c2.prototype.compare = function(t4, e3, n3, r3, o3) {
            if (!c2.isBuffer(t4))
              throw new TypeError("Argument must be a Buffer");
            if (void 0 === e3 && (e3 = 0), void 0 === n3 && (n3 = t4 ? t4.length : 0), void 0 === r3 && (r3 = 0), void 0 === o3 && (o3 = this.length), e3 < 0 || n3 > t4.length || r3 < 0 || o3 > this.length)
              throw new RangeError("out of range index");
            if (r3 >= o3 && e3 >= n3)
              return 0;
            if (r3 >= o3)
              return -1;
            if (e3 >= n3)
              return 1;
            if (this === t4)
              return 0;
            for (var s3 = (o3 >>>= 0) - (r3 >>>= 0), i3 = (n3 >>>= 0) - (e3 >>>= 0), a3 = Math.min(s3, i3), h3 = this.slice(r3, o3), u3 = t4.slice(e3, n3), p3 = 0; p3 < a3; ++p3)
              if (h3[p3] !== u3[p3]) {
                s3 = h3[p3], i3 = u3[p3];
                break;
              }
            return s3 < i3 ? -1 : i3 < s3 ? 1 : 0;
          }, c2.prototype.includes = function(t4, e3, n3) {
            return -1 !== this.indexOf(t4, e3, n3);
          }, c2.prototype.indexOf = function(t4, e3, n3) {
            return m2(this, t4, e3, n3, true);
          }, c2.prototype.lastIndexOf = function(t4, e3, n3) {
            return m2(this, t4, e3, n3, false);
          }, c2.prototype.write = function(t4, e3, n3, r3) {
            if (void 0 === e3)
              r3 = "utf8", n3 = this.length, e3 = 0;
            else if (void 0 === n3 && "string" == typeof e3)
              r3 = e3, n3 = this.length, e3 = 0;
            else {
              if (!isFinite(e3))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e3 |= 0, isFinite(n3) ? (n3 |= 0, void 0 === r3 && (r3 = "utf8")) : (r3 = n3, n3 = void 0);
            }
            var o3 = this.length - e3;
            if ((void 0 === n3 || n3 > o3) && (n3 = o3), t4.length > 0 && (n3 < 0 || e3 < 0) || e3 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            r3 || (r3 = "utf8");
            for (var s3 = false; ; )
              switch (r3) {
                case "hex":
                  return b2(this, t4, e3, n3);
                case "utf8":
                case "utf-8":
                  return w2(this, t4, e3, n3);
                case "ascii":
                  return _2(this, t4, e3, n3);
                case "latin1":
                case "binary":
                  return E2(this, t4, e3, n3);
                case "base64":
                  return k(this, t4, e3, n3);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A2(this, t4, e3, n3);
                default:
                  if (s3)
                    throw new TypeError("Unknown encoding: " + r3);
                  r3 = ("" + r3).toLowerCase(), s3 = true;
              }
          }, c2.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          function S2(t4, e3, n3) {
            var r3 = "";
            n3 = Math.min(t4.length, n3);
            for (var o3 = e3; o3 < n3; ++o3)
              r3 += String.fromCharCode(127 & t4[o3]);
            return r3;
          }
          function P2(t4, e3, n3) {
            var r3 = "";
            n3 = Math.min(t4.length, n3);
            for (var o3 = e3; o3 < n3; ++o3)
              r3 += String.fromCharCode(t4[o3]);
            return r3;
          }
          function C2(t4, e3, n3) {
            var r3 = t4.length;
            (!e3 || e3 < 0) && (e3 = 0), (!n3 || n3 < 0 || n3 > r3) && (n3 = r3);
            for (var o3 = "", s3 = e3; s3 < n3; ++s3)
              o3 += D2(t4[s3]);
            return o3;
          }
          function R2(t4, e3, n3) {
            for (var r3 = t4.slice(e3, n3), o3 = "", s3 = 0; s3 < r3.length; s3 += 2)
              o3 += String.fromCharCode(r3[s3] + 256 * r3[s3 + 1]);
            return o3;
          }
          function O2(t4, e3, n3) {
            if (t4 % 1 != 0 || t4 < 0)
              throw new RangeError("offset is not uint");
            if (t4 + e3 > n3)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function B2(t4, e3, n3, r3, o3, s3) {
            if (!c2.isBuffer(t4))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e3 > o3 || e3 < s3)
              throw new RangeError('"value" argument is out of bounds');
            if (n3 + r3 > t4.length)
              throw new RangeError("Index out of range");
          }
          function L2(t4, e3, n3, r3) {
            e3 < 0 && (e3 = 65535 + e3 + 1);
            for (var o3 = 0, s3 = Math.min(t4.length - n3, 2); o3 < s3; ++o3)
              t4[n3 + o3] = (e3 & 255 << 8 * (r3 ? o3 : 1 - o3)) >>> 8 * (r3 ? o3 : 1 - o3);
          }
          function N2(t4, e3, n3, r3) {
            e3 < 0 && (e3 = 4294967295 + e3 + 1);
            for (var o3 = 0, s3 = Math.min(t4.length - n3, 4); o3 < s3; ++o3)
              t4[n3 + o3] = e3 >>> 8 * (r3 ? o3 : 3 - o3) & 255;
          }
          function j2(t4, e3, n3, r3, o3, s3) {
            if (n3 + r3 > t4.length)
              throw new RangeError("Index out of range");
            if (n3 < 0)
              throw new RangeError("Index out of range");
          }
          function I2(t4, e3, n3, r3, s3) {
            return s3 || j2(t4, 0, n3, 4), o2.write(t4, e3, n3, r3, 23, 4), n3 + 4;
          }
          function M2(t4, e3, n3, r3, s3) {
            return s3 || j2(t4, 0, n3, 8), o2.write(t4, e3, n3, r3, 52, 8), n3 + 8;
          }
          c2.prototype.slice = function(t4, e3) {
            var n3, r3 = this.length;
            if ((t4 = ~~t4) < 0 ? (t4 += r3) < 0 && (t4 = 0) : t4 > r3 && (t4 = r3), (e3 = void 0 === e3 ? r3 : ~~e3) < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), e3 < t4 && (e3 = t4), c2.TYPED_ARRAY_SUPPORT)
              (n3 = this.subarray(t4, e3)).__proto__ = c2.prototype;
            else {
              var o3 = e3 - t4;
              n3 = new c2(o3, void 0);
              for (var s3 = 0; s3 < o3; ++s3)
                n3[s3] = this[s3 + t4];
            }
            return n3;
          }, c2.prototype.readUIntLE = function(t4, e3, n3) {
            t4 |= 0, e3 |= 0, n3 || O2(t4, e3, this.length);
            for (var r3 = this[t4], o3 = 1, s3 = 0; ++s3 < e3 && (o3 *= 256); )
              r3 += this[t4 + s3] * o3;
            return r3;
          }, c2.prototype.readUIntBE = function(t4, e3, n3) {
            t4 |= 0, e3 |= 0, n3 || O2(t4, e3, this.length);
            for (var r3 = this[t4 + --e3], o3 = 1; e3 > 0 && (o3 *= 256); )
              r3 += this[t4 + --e3] * o3;
            return r3;
          }, c2.prototype.readUInt8 = function(t4, e3) {
            return e3 || O2(t4, 1, this.length), this[t4];
          }, c2.prototype.readUInt16LE = function(t4, e3) {
            return e3 || O2(t4, 2, this.length), this[t4] | this[t4 + 1] << 8;
          }, c2.prototype.readUInt16BE = function(t4, e3) {
            return e3 || O2(t4, 2, this.length), this[t4] << 8 | this[t4 + 1];
          }, c2.prototype.readUInt32LE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), (this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16) + 16777216 * this[t4 + 3];
          }, c2.prototype.readUInt32BE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), 16777216 * this[t4] + (this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3]);
          }, c2.prototype.readIntLE = function(t4, e3, n3) {
            t4 |= 0, e3 |= 0, n3 || O2(t4, e3, this.length);
            for (var r3 = this[t4], o3 = 1, s3 = 0; ++s3 < e3 && (o3 *= 256); )
              r3 += this[t4 + s3] * o3;
            return r3 >= (o3 *= 128) && (r3 -= Math.pow(2, 8 * e3)), r3;
          }, c2.prototype.readIntBE = function(t4, e3, n3) {
            t4 |= 0, e3 |= 0, n3 || O2(t4, e3, this.length);
            for (var r3 = e3, o3 = 1, s3 = this[t4 + --r3]; r3 > 0 && (o3 *= 256); )
              s3 += this[t4 + --r3] * o3;
            return s3 >= (o3 *= 128) && (s3 -= Math.pow(2, 8 * e3)), s3;
          }, c2.prototype.readInt8 = function(t4, e3) {
            return e3 || O2(t4, 1, this.length), 128 & this[t4] ? -1 * (255 - this[t4] + 1) : this[t4];
          }, c2.prototype.readInt16LE = function(t4, e3) {
            e3 || O2(t4, 2, this.length);
            var n3 = this[t4] | this[t4 + 1] << 8;
            return 32768 & n3 ? 4294901760 | n3 : n3;
          }, c2.prototype.readInt16BE = function(t4, e3) {
            e3 || O2(t4, 2, this.length);
            var n3 = this[t4 + 1] | this[t4] << 8;
            return 32768 & n3 ? 4294901760 | n3 : n3;
          }, c2.prototype.readInt32LE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16 | this[t4 + 3] << 24;
          }, c2.prototype.readInt32BE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), this[t4] << 24 | this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3];
          }, c2.prototype.readFloatLE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), o2.read(this, t4, true, 23, 4);
          }, c2.prototype.readFloatBE = function(t4, e3) {
            return e3 || O2(t4, 4, this.length), o2.read(this, t4, false, 23, 4);
          }, c2.prototype.readDoubleLE = function(t4, e3) {
            return e3 || O2(t4, 8, this.length), o2.read(this, t4, true, 52, 8);
          }, c2.prototype.readDoubleBE = function(t4, e3) {
            return e3 || O2(t4, 8, this.length), o2.read(this, t4, false, 52, 8);
          }, c2.prototype.writeUIntLE = function(t4, e3, n3, r3) {
            (t4 = +t4, e3 |= 0, n3 |= 0, r3) || B2(this, t4, e3, n3, Math.pow(2, 8 * n3) - 1, 0);
            var o3 = 1, s3 = 0;
            for (this[e3] = 255 & t4; ++s3 < n3 && (o3 *= 256); )
              this[e3 + s3] = t4 / o3 & 255;
            return e3 + n3;
          }, c2.prototype.writeUIntBE = function(t4, e3, n3, r3) {
            (t4 = +t4, e3 |= 0, n3 |= 0, r3) || B2(this, t4, e3, n3, Math.pow(2, 8 * n3) - 1, 0);
            var o3 = n3 - 1, s3 = 1;
            for (this[e3 + o3] = 255 & t4; --o3 >= 0 && (s3 *= 256); )
              this[e3 + o3] = t4 / s3 & 255;
            return e3 + n3;
          }, c2.prototype.writeUInt8 = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 1, 255, 0), c2.TYPED_ARRAY_SUPPORT || (t4 = Math.floor(t4)), this[e3] = 255 & t4, e3 + 1;
          }, c2.prototype.writeUInt16LE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 2, 65535, 0), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8) : L2(this, t4, e3, true), e3 + 2;
          }, c2.prototype.writeUInt16BE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 2, 65535, 0), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 8, this[e3 + 1] = 255 & t4) : L2(this, t4, e3, false), e3 + 2;
          }, c2.prototype.writeUInt32LE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 4, 4294967295, 0), c2.TYPED_ARRAY_SUPPORT ? (this[e3 + 3] = t4 >>> 24, this[e3 + 2] = t4 >>> 16, this[e3 + 1] = t4 >>> 8, this[e3] = 255 & t4) : N2(this, t4, e3, true), e3 + 4;
          }, c2.prototype.writeUInt32BE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 4, 4294967295, 0), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 24, this[e3 + 1] = t4 >>> 16, this[e3 + 2] = t4 >>> 8, this[e3 + 3] = 255 & t4) : N2(this, t4, e3, false), e3 + 4;
          }, c2.prototype.writeIntLE = function(t4, e3, n3, r3) {
            if (t4 = +t4, e3 |= 0, !r3) {
              var o3 = Math.pow(2, 8 * n3 - 1);
              B2(this, t4, e3, n3, o3 - 1, -o3);
            }
            var s3 = 0, i3 = 1, a3 = 0;
            for (this[e3] = 255 & t4; ++s3 < n3 && (i3 *= 256); )
              t4 < 0 && 0 === a3 && 0 !== this[e3 + s3 - 1] && (a3 = 1), this[e3 + s3] = (t4 / i3 >> 0) - a3 & 255;
            return e3 + n3;
          }, c2.prototype.writeIntBE = function(t4, e3, n3, r3) {
            if (t4 = +t4, e3 |= 0, !r3) {
              var o3 = Math.pow(2, 8 * n3 - 1);
              B2(this, t4, e3, n3, o3 - 1, -o3);
            }
            var s3 = n3 - 1, i3 = 1, a3 = 0;
            for (this[e3 + s3] = 255 & t4; --s3 >= 0 && (i3 *= 256); )
              t4 < 0 && 0 === a3 && 0 !== this[e3 + s3 + 1] && (a3 = 1), this[e3 + s3] = (t4 / i3 >> 0) - a3 & 255;
            return e3 + n3;
          }, c2.prototype.writeInt8 = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 1, 127, -128), c2.TYPED_ARRAY_SUPPORT || (t4 = Math.floor(t4)), t4 < 0 && (t4 = 255 + t4 + 1), this[e3] = 255 & t4, e3 + 1;
          }, c2.prototype.writeInt16LE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 2, 32767, -32768), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8) : L2(this, t4, e3, true), e3 + 2;
          }, c2.prototype.writeInt16BE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 2, 32767, -32768), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 8, this[e3 + 1] = 255 & t4) : L2(this, t4, e3, false), e3 + 2;
          }, c2.prototype.writeInt32LE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 4, 2147483647, -2147483648), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8, this[e3 + 2] = t4 >>> 16, this[e3 + 3] = t4 >>> 24) : N2(this, t4, e3, true), e3 + 4;
          }, c2.prototype.writeInt32BE = function(t4, e3, n3) {
            return t4 = +t4, e3 |= 0, n3 || B2(this, t4, e3, 4, 2147483647, -2147483648), t4 < 0 && (t4 = 4294967295 + t4 + 1), c2.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 24, this[e3 + 1] = t4 >>> 16, this[e3 + 2] = t4 >>> 8, this[e3 + 3] = 255 & t4) : N2(this, t4, e3, false), e3 + 4;
          }, c2.prototype.writeFloatLE = function(t4, e3, n3) {
            return I2(this, t4, e3, true, n3);
          }, c2.prototype.writeFloatBE = function(t4, e3, n3) {
            return I2(this, t4, e3, false, n3);
          }, c2.prototype.writeDoubleLE = function(t4, e3, n3) {
            return M2(this, t4, e3, true, n3);
          }, c2.prototype.writeDoubleBE = function(t4, e3, n3) {
            return M2(this, t4, e3, false, n3);
          }, c2.prototype.copy = function(t4, e3, n3, r3) {
            if (n3 || (n3 = 0), r3 || 0 === r3 || (r3 = this.length), e3 >= t4.length && (e3 = t4.length), e3 || (e3 = 0), r3 > 0 && r3 < n3 && (r3 = n3), r3 === n3)
              return 0;
            if (0 === t4.length || 0 === this.length)
              return 0;
            if (e3 < 0)
              throw new RangeError("targetStart out of bounds");
            if (n3 < 0 || n3 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r3 < 0)
              throw new RangeError("sourceEnd out of bounds");
            r3 > this.length && (r3 = this.length), t4.length - e3 < r3 - n3 && (r3 = t4.length - e3 + n3);
            var o3, s3 = r3 - n3;
            if (this === t4 && n3 < e3 && e3 < r3)
              for (o3 = s3 - 1; o3 >= 0; --o3)
                t4[o3 + e3] = this[o3 + n3];
            else if (s3 < 1e3 || !c2.TYPED_ARRAY_SUPPORT)
              for (o3 = 0; o3 < s3; ++o3)
                t4[o3 + e3] = this[o3 + n3];
            else
              Uint8Array.prototype.set.call(t4, this.subarray(n3, n3 + s3), e3);
            return s3;
          }, c2.prototype.fill = function(t4, e3, n3, r3) {
            if ("string" == typeof t4) {
              if ("string" == typeof e3 ? (r3 = e3, e3 = 0, n3 = this.length) : "string" == typeof n3 && (r3 = n3, n3 = this.length), 1 === t4.length) {
                var o3 = t4.charCodeAt(0);
                o3 < 256 && (t4 = o3);
              }
              if (void 0 !== r3 && "string" != typeof r3)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r3 && !c2.isEncoding(r3))
                throw new TypeError("Unknown encoding: " + r3);
            } else
              "number" == typeof t4 && (t4 &= 255);
            if (e3 < 0 || this.length < e3 || this.length < n3)
              throw new RangeError("Out of range index");
            if (n3 <= e3)
              return this;
            var s3;
            if (e3 >>>= 0, n3 = void 0 === n3 ? this.length : n3 >>> 0, t4 || (t4 = 0), "number" == typeof t4)
              for (s3 = e3; s3 < n3; ++s3)
                this[s3] = t4;
            else {
              var i3 = c2.isBuffer(t4) ? t4 : Y2(new c2(t4, r3).toString()), a3 = i3.length;
              for (s3 = 0; s3 < n3 - e3; ++s3)
                this[s3 + e3] = i3[s3 % a3];
            }
            return this;
          };
          var U2 = /[^+\/0-9A-Za-z-_]/g;
          function D2(t4) {
            return t4 < 16 ? "0" + t4.toString(16) : t4.toString(16);
          }
          function Y2(t4, e3) {
            var n3;
            e3 = e3 || 1 / 0;
            for (var r3 = t4.length, o3 = null, s3 = [], i3 = 0; i3 < r3; ++i3) {
              if ((n3 = t4.charCodeAt(i3)) > 55295 && n3 < 57344) {
                if (!o3) {
                  if (n3 > 56319) {
                    (e3 -= 3) > -1 && s3.push(239, 191, 189);
                    continue;
                  }
                  if (i3 + 1 === r3) {
                    (e3 -= 3) > -1 && s3.push(239, 191, 189);
                    continue;
                  }
                  o3 = n3;
                  continue;
                }
                if (n3 < 56320) {
                  (e3 -= 3) > -1 && s3.push(239, 191, 189), o3 = n3;
                  continue;
                }
                n3 = 65536 + (o3 - 55296 << 10 | n3 - 56320);
              } else
                o3 && (e3 -= 3) > -1 && s3.push(239, 191, 189);
              if (o3 = null, n3 < 128) {
                if ((e3 -= 1) < 0)
                  break;
                s3.push(n3);
              } else if (n3 < 2048) {
                if ((e3 -= 2) < 0)
                  break;
                s3.push(n3 >> 6 | 192, 63 & n3 | 128);
              } else if (n3 < 65536) {
                if ((e3 -= 3) < 0)
                  break;
                s3.push(n3 >> 12 | 224, n3 >> 6 & 63 | 128, 63 & n3 | 128);
              } else {
                if (!(n3 < 1114112))
                  throw new Error("Invalid code point");
                if ((e3 -= 4) < 0)
                  break;
                s3.push(n3 >> 18 | 240, n3 >> 12 & 63 | 128, n3 >> 6 & 63 | 128, 63 & n3 | 128);
              }
            }
            return s3;
          }
          function q2(t4) {
            return r2.toByteArray(function(t5) {
              if ((t5 = function(t6) {
                return t6.trim ? t6.trim() : t6.replace(/^\s+|\s+$/g, "");
              }(t5).replace(U2, "")).length < 2)
                return "";
              for (; t5.length % 4 != 0; )
                t5 += "=";
              return t5;
            }(t4));
          }
          function F2(t4, e3, n3, r3) {
            for (var o3 = 0; o3 < r3 && !(o3 + n3 >= e3.length || o3 >= t4.length); ++o3)
              e3[o3 + n3] = t4[o3];
            return o3;
          }
        }).call(this, n2(31));
      }, function(t2, e2) {
        var n2;
        n2 = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          n2 = n2 || new Function("return this")();
        } catch (t3) {
          "object" == typeof window && (n2 = window);
        }
        t2.exports = n2;
      }, function(t2, e2, n2) {
        e2.byteLength = function(t3) {
          var e3 = h2(t3), n3 = e3[0], r3 = e3[1];
          return 3 * (n3 + r3) / 4 - r3;
        }, e2.toByteArray = function(t3) {
          var e3, n3, r3 = h2(t3), i3 = r3[0], a3 = r3[1], c3 = new s2(function(t4, e4, n4) {
            return 3 * (e4 + n4) / 4 - n4;
          }(0, i3, a3)), u3 = 0, p2 = a3 > 0 ? i3 - 4 : i3;
          for (n3 = 0; n3 < p2; n3 += 4)
            e3 = o2[t3.charCodeAt(n3)] << 18 | o2[t3.charCodeAt(n3 + 1)] << 12 | o2[t3.charCodeAt(n3 + 2)] << 6 | o2[t3.charCodeAt(n3 + 3)], c3[u3++] = e3 >> 16 & 255, c3[u3++] = e3 >> 8 & 255, c3[u3++] = 255 & e3;
          2 === a3 && (e3 = o2[t3.charCodeAt(n3)] << 2 | o2[t3.charCodeAt(n3 + 1)] >> 4, c3[u3++] = 255 & e3);
          1 === a3 && (e3 = o2[t3.charCodeAt(n3)] << 10 | o2[t3.charCodeAt(n3 + 1)] << 4 | o2[t3.charCodeAt(n3 + 2)] >> 2, c3[u3++] = e3 >> 8 & 255, c3[u3++] = 255 & e3);
          return c3;
        }, e2.fromByteArray = function(t3) {
          for (var e3, n3 = t3.length, o3 = n3 % 3, s3 = [], i3 = 0, a3 = n3 - o3; i3 < a3; i3 += 16383)
            s3.push(u2(t3, i3, i3 + 16383 > a3 ? a3 : i3 + 16383));
          1 === o3 ? (e3 = t3[n3 - 1], s3.push(r2[e3 >> 2] + r2[e3 << 4 & 63] + "==")) : 2 === o3 && (e3 = (t3[n3 - 2] << 8) + t3[n3 - 1], s3.push(r2[e3 >> 10] + r2[e3 >> 4 & 63] + r2[e3 << 2 & 63] + "="));
          return s3.join("");
        };
        for (var r2 = [], o2 = [], s2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, i2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a2 = 0, c2 = i2.length; a2 < c2; ++a2)
          r2[a2] = i2[a2], o2[i2.charCodeAt(a2)] = a2;
        function h2(t3) {
          var e3 = t3.length;
          if (e3 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n3 = t3.indexOf("=");
          return -1 === n3 && (n3 = e3), [n3, n3 === e3 ? 0 : 4 - n3 % 4];
        }
        function u2(t3, e3, n3) {
          for (var o3, s3, i3 = [], a3 = e3; a3 < n3; a3 += 3)
            o3 = (t3[a3] << 16 & 16711680) + (t3[a3 + 1] << 8 & 65280) + (255 & t3[a3 + 2]), i3.push(r2[(s3 = o3) >> 18 & 63] + r2[s3 >> 12 & 63] + r2[s3 >> 6 & 63] + r2[63 & s3]);
          return i3.join("");
        }
        o2["-".charCodeAt(0)] = 62, o2["_".charCodeAt(0)] = 63;
      }, function(t2, e2) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        e2.read = function(t3, e3, n2, r2, o2) {
          var s2, i2, a2 = 8 * o2 - r2 - 1, c2 = (1 << a2) - 1, h2 = c2 >> 1, u2 = -7, p2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, l2 = t3[e3 + p2];
          for (p2 += f2, s2 = l2 & (1 << -u2) - 1, l2 >>= -u2, u2 += a2; u2 > 0; s2 = 256 * s2 + t3[e3 + p2], p2 += f2, u2 -= 8)
            ;
          for (i2 = s2 & (1 << -u2) - 1, s2 >>= -u2, u2 += r2; u2 > 0; i2 = 256 * i2 + t3[e3 + p2], p2 += f2, u2 -= 8)
            ;
          if (0 === s2)
            s2 = 1 - h2;
          else {
            if (s2 === c2)
              return i2 ? NaN : 1 / 0 * (l2 ? -1 : 1);
            i2 += Math.pow(2, r2), s2 -= h2;
          }
          return (l2 ? -1 : 1) * i2 * Math.pow(2, s2 - r2);
        }, e2.write = function(t3, e3, n2, r2, o2, s2) {
          var i2, a2, c2, h2 = 8 * s2 - o2 - 1, u2 = (1 << h2) - 1, p2 = u2 >> 1, f2 = 23 === o2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l2 = r2 ? 0 : s2 - 1, d2 = r2 ? 1 : -1, y2 = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
          for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a2 = isNaN(e3) ? 1 : 0, i2 = u2) : (i2 = Math.floor(Math.log(e3) / Math.LN2), e3 * (c2 = Math.pow(2, -i2)) < 1 && (i2--, c2 *= 2), (e3 += i2 + p2 >= 1 ? f2 / c2 : f2 * Math.pow(2, 1 - p2)) * c2 >= 2 && (i2++, c2 /= 2), i2 + p2 >= u2 ? (a2 = 0, i2 = u2) : i2 + p2 >= 1 ? (a2 = (e3 * c2 - 1) * Math.pow(2, o2), i2 += p2) : (a2 = e3 * Math.pow(2, p2 - 1) * Math.pow(2, o2), i2 = 0)); o2 >= 8; t3[n2 + l2] = 255 & a2, l2 += d2, a2 /= 256, o2 -= 8)
            ;
          for (i2 = i2 << o2 | a2, h2 += o2; h2 > 0; t3[n2 + l2] = 255 & i2, l2 += d2, i2 /= 256, h2 -= 8)
            ;
          t3[n2 + l2 - d2] |= 128 * y2;
        };
      }, function(t2, e2) {
        var n2 = {}.toString;
        t2.exports = Array.isArray || function(t3) {
          return "[object Array]" == n2.call(t3);
        };
      }, function(t2, e2, n2) {
        const r2 = n2(36), o2 = n2(37), s2 = n2(0)("@hyoga/uni-socket"), i2 = uni || wx;
        class a2 extends r2 {
          constructor(t3, e3, n3) {
            super(), this._readyState = a2.CONNECTING, this._socket = null, null !== t3 && (Array.isArray(e3) ? e3 = e3.join(", ") : "object" == typeof e3 && null !== e3 && (n3 = e3, e3 = void 0), this.initAsClient(t3, e3, n3));
          }
          initAsClient(t3, e3, n3) {
            Object.assign(n3, { url: t3, header: { "content-type": "application/json" }, protocols: e3, timeout: 25e3 }), this._socket = this.createConnection(n3), this.addSocketEventListeners();
          }
          createConnection(t3) {
            return i2.connectSocket({ complete: () => {
            }, ...t3 });
          }
          addSocketEventListeners() {
            this._socket.onOpen(() => {
              this._readyState = a2.OPEN, this.onopen();
            }), this._socket.onClose((t3) => {
              s2("onclose: ", t3), this._readyState = a2.CLOSED, this.onclose(t3.code, t3.reason);
            }), this._socket.onError((t3) => {
              s2("onerror: ", t3), this.onerror(t3);
            }), this._socket.onMessage((t3) => {
              this.onmessage(t3);
            });
          }
          send(t3) {
            if (s2("send data: ", t3, this._readyState), this._readyState === a2.CONNECTING)
              throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
            "number" == typeof t3 && (t3 = t3.toString()), this._readyState === a2.OPEN && this._socket.send({ data: t3 });
          }
          close(t3, e3) {
            s2("close socket: ", t3, e3), this._readyState = a2.CLOSING, this._socket.close({ code: t3, reason: e3 });
          }
        }
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((t3, e3) => {
          a2[t3] = e3;
        });
        ["open", "error", "close", "message"].forEach((t3) => {
          Object.defineProperty(a2.prototype, "on" + t3, { get() {
            const e3 = this.listeners(t3);
            for (var n3 = 0; n3 < e3.length; n3++)
              if (e3[n3]._listener)
                return e3[n3]._listener;
          }, set(e3) {
            const n3 = this.listeners(t3);
            for (var r3 = 0; r3 < n3.length; r3++)
              n3[r3]._listener && this.removeListener(t3, n3[r3]);
            this.addEventListener(t3, e3);
          } });
        }), a2.prototype.addEventListener = o2.addEventListener, a2.prototype.removeEventListener = o2.removeEventListener, t2.exports = a2;
      }, function(t2, e2, n2) {
        var r2, o2 = "object" == typeof Reflect ? Reflect : null, s2 = o2 && "function" == typeof o2.apply ? o2.apply : function(t3, e3, n3) {
          return Function.prototype.apply.call(t3, e3, n3);
        };
        r2 = o2 && "function" == typeof o2.ownKeys ? o2.ownKeys : Object.getOwnPropertySymbols ? function(t3) {
          return Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3));
        } : function(t3) {
          return Object.getOwnPropertyNames(t3);
        };
        var i2 = Number.isNaN || function(t3) {
          return t3 != t3;
        };
        function a2() {
          a2.init.call(this);
        }
        t2.exports = a2, t2.exports.once = function(t3, e3) {
          return new Promise(function(n3, r3) {
            function o3() {
              void 0 !== s3 && t3.removeListener("error", s3), n3([].slice.call(arguments));
            }
            var s3;
            "error" !== e3 && (s3 = function(n4) {
              t3.removeListener(e3, o3), r3(n4);
            }, t3.once("error", s3)), t3.once(e3, o3);
          });
        }, a2.EventEmitter = a2, a2.prototype._events = void 0, a2.prototype._eventsCount = 0, a2.prototype._maxListeners = void 0;
        var c2 = 10;
        function h2(t3) {
          if ("function" != typeof t3)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3);
        }
        function u2(t3) {
          return void 0 === t3._maxListeners ? a2.defaultMaxListeners : t3._maxListeners;
        }
        function p2(t3, e3, n3, r3) {
          var o3, s3, i3, a3;
          if (h2(n3), void 0 === (s3 = t3._events) ? (s3 = t3._events = /* @__PURE__ */ Object.create(null), t3._eventsCount = 0) : (void 0 !== s3.newListener && (t3.emit("newListener", e3, n3.listener ? n3.listener : n3), s3 = t3._events), i3 = s3[e3]), void 0 === i3)
            i3 = s3[e3] = n3, ++t3._eventsCount;
          else if ("function" == typeof i3 ? i3 = s3[e3] = r3 ? [n3, i3] : [i3, n3] : r3 ? i3.unshift(n3) : i3.push(n3), (o3 = u2(t3)) > 0 && i3.length > o3 && !i3.warned) {
            i3.warned = true;
            var c3 = new Error("Possible EventEmitter memory leak detected. " + i3.length + " " + String(e3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c3.name = "MaxListenersExceededWarning", c3.emitter = t3, c3.type = e3, c3.count = i3.length, a3 = c3, console && console.warn && formatAppLog("warn", "at node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js:10", a3);
          }
          return t3;
        }
        function f2() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function l2(t3, e3, n3) {
          var r3 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: n3 }, o3 = f2.bind(r3);
          return o3.listener = n3, r3.wrapFn = o3, o3;
        }
        function d2(t3, e3, n3) {
          var r3 = t3._events;
          if (void 0 === r3)
            return [];
          var o3 = r3[e3];
          return void 0 === o3 ? [] : "function" == typeof o3 ? n3 ? [o3.listener || o3] : [o3] : n3 ? function(t4) {
            for (var e4 = new Array(t4.length), n4 = 0; n4 < e4.length; ++n4)
              e4[n4] = t4[n4].listener || t4[n4];
            return e4;
          }(o3) : g2(o3, o3.length);
        }
        function y2(t3) {
          var e3 = this._events;
          if (void 0 !== e3) {
            var n3 = e3[t3];
            if ("function" == typeof n3)
              return 1;
            if (void 0 !== n3)
              return n3.length;
          }
          return 0;
        }
        function g2(t3, e3) {
          for (var n3 = new Array(e3), r3 = 0; r3 < e3; ++r3)
            n3[r3] = t3[r3];
          return n3;
        }
        Object.defineProperty(a2, "defaultMaxListeners", { enumerable: true, get: function() {
          return c2;
        }, set: function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i2(t3))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          c2 = t3;
        } }), a2.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, a2.prototype.setMaxListeners = function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i2(t3))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          return this._maxListeners = t3, this;
        }, a2.prototype.getMaxListeners = function() {
          return u2(this);
        }, a2.prototype.emit = function(t3) {
          for (var e3 = [], n3 = 1; n3 < arguments.length; n3++)
            e3.push(arguments[n3]);
          var r3 = "error" === t3, o3 = this._events;
          if (void 0 !== o3)
            r3 = r3 && void 0 === o3.error;
          else if (!r3)
            return false;
          if (r3) {
            var i3;
            if (e3.length > 0 && (i3 = e3[0]), i3 instanceof Error)
              throw i3;
            var a3 = new Error("Unhandled error." + (i3 ? " (" + i3.message + ")" : ""));
            throw a3.context = i3, a3;
          }
          var c3 = o3[t3];
          if (void 0 === c3)
            return false;
          if ("function" == typeof c3)
            s2(c3, this, e3);
          else {
            var h3 = c3.length, u3 = g2(c3, h3);
            for (n3 = 0; n3 < h3; ++n3)
              s2(u3[n3], this, e3);
          }
          return true;
        }, a2.prototype.addListener = function(t3, e3) {
          return p2(this, t3, e3, false);
        }, a2.prototype.on = a2.prototype.addListener, a2.prototype.prependListener = function(t3, e3) {
          return p2(this, t3, e3, true);
        }, a2.prototype.once = function(t3, e3) {
          return h2(e3), this.on(t3, l2(this, t3, e3)), this;
        }, a2.prototype.prependOnceListener = function(t3, e3) {
          return h2(e3), this.prependListener(t3, l2(this, t3, e3)), this;
        }, a2.prototype.removeListener = function(t3, e3) {
          var n3, r3, o3, s3, i3;
          if (h2(e3), void 0 === (r3 = this._events))
            return this;
          if (void 0 === (n3 = r3[t3]))
            return this;
          if (n3 === e3 || n3.listener === e3)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r3[t3], r3.removeListener && this.emit("removeListener", t3, n3.listener || e3));
          else if ("function" != typeof n3) {
            for (o3 = -1, s3 = n3.length - 1; s3 >= 0; s3--)
              if (n3[s3] === e3 || n3[s3].listener === e3) {
                i3 = n3[s3].listener, o3 = s3;
                break;
              }
            if (o3 < 0)
              return this;
            0 === o3 ? n3.shift() : function(t4, e4) {
              for (; e4 + 1 < t4.length; e4++)
                t4[e4] = t4[e4 + 1];
              t4.pop();
            }(n3, o3), 1 === n3.length && (r3[t3] = n3[0]), void 0 !== r3.removeListener && this.emit("removeListener", t3, i3 || e3);
          }
          return this;
        }, a2.prototype.off = a2.prototype.removeListener, a2.prototype.removeAllListeners = function(t3) {
          var e3, n3, r3;
          if (void 0 === (n3 = this._events))
            return this;
          if (void 0 === n3.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[t3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[t3]), this;
          if (0 === arguments.length) {
            var o3, s3 = Object.keys(n3);
            for (r3 = 0; r3 < s3.length; ++r3)
              "removeListener" !== (o3 = s3[r3]) && this.removeAllListeners(o3);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e3 = n3[t3]))
            this.removeListener(t3, e3);
          else if (void 0 !== e3)
            for (r3 = e3.length - 1; r3 >= 0; r3--)
              this.removeListener(t3, e3[r3]);
          return this;
        }, a2.prototype.listeners = function(t3) {
          return d2(this, t3, true);
        }, a2.prototype.rawListeners = function(t3) {
          return d2(this, t3, false);
        }, a2.listenerCount = function(t3, e3) {
          return "function" == typeof t3.listenerCount ? t3.listenerCount(e3) : y2.call(t3, e3);
        }, a2.prototype.listenerCount = y2, a2.prototype.eventNames = function() {
          return this._eventsCount > 0 ? r2(this._events) : [];
        };
      }, function(t2, e2, n2) {
        class r2 {
          constructor(t3, e3) {
            this.target = e3, this.type = t3;
          }
        }
        class o2 extends r2 {
          constructor(t3, e3) {
            super("message", e3), this.data = t3;
          }
        }
        class s2 extends r2 {
          constructor(t3, e3, n3) {
            super("close", n3), this.wasClean = n3._closeFrameReceived && n3._closeFrameSent, this.reason = e3, this.code = t3;
          }
        }
        class i2 extends r2 {
          constructor(t3) {
            super("open", t3);
          }
        }
        class a2 extends r2 {
          constructor(t3, e3) {
            super("error", e3), this.message = t3.message, this.error = t3;
          }
        }
        const c2 = { addEventListener(t3, e3) {
          function n3(t4) {
            e3.call(this, new o2(t4, this));
          }
          function r3(t4, n4) {
            e3.call(this, new s2(t4, n4, this));
          }
          function c3(t4) {
            e3.call(this, new a2(t4, this));
          }
          function h2() {
            e3.call(this, new i2(this));
          }
          "function" == typeof e3 && ("message" === t3 ? (n3._listener = e3, this.on(t3, n3)) : "close" === t3 ? (r3._listener = e3, this.on(t3, r3)) : "error" === t3 ? (c3._listener = e3, this.on(t3, c3)) : "open" === t3 ? (h2._listener = e3, this.on(t3, h2)) : this.on(t3, e3));
        }, removeEventListener(t3, e3) {
          const n3 = this.listeners(t3);
          for (var r3 = 0; r3 < n3.length; r3++)
            n3[r3] !== e3 && n3[r3]._listener !== e3 || this.removeListener(t3, n3[r3]);
        } };
        t2.exports = c2;
      }, function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.reconstructPacket = e2.deconstructPacket = void 0;
        const r2 = n2(16);
        e2.deconstructPacket = function(t3) {
          const e3 = [], n3 = t3.data, o2 = t3;
          return o2.data = function t4(e4, n4) {
            if (!e4)
              return e4;
            if (r2.isBinary(e4)) {
              const t5 = { _placeholder: true, num: n4.length };
              return n4.push(e4), t5;
            }
            if (Array.isArray(e4)) {
              const r3 = new Array(e4.length);
              for (let o3 = 0; o3 < e4.length; o3++)
                r3[o3] = t4(e4[o3], n4);
              return r3;
            }
            if ("object" == typeof e4 && !(e4 instanceof Date)) {
              const r3 = {};
              for (const o3 in e4)
                e4.hasOwnProperty(o3) && (r3[o3] = t4(e4[o3], n4));
              return r3;
            }
            return e4;
          }(n3, e3), o2.attachments = e3.length, { packet: o2, buffers: e3 };
        }, e2.reconstructPacket = function(t3, e3) {
          return t3.data = function t4(e4, n3) {
            if (!e4)
              return e4;
            if (e4 && e4._placeholder)
              return n3[e4.num];
            if (Array.isArray(e4))
              for (let r3 = 0; r3 < e4.length; r3++)
                e4[r3] = t4(e4[r3], n3);
            else if ("object" == typeof e4)
              for (const r3 in e4)
                e4.hasOwnProperty(r3) && (e4[r3] = t4(e4[r3], n3));
            return e4;
          }(t3.data, e3), t3.attachments = void 0, t3;
        };
      }, function(t2, e2) {
        function n2(t3) {
          t3 = t3 || {}, this.ms = t3.min || 100, this.max = t3.max || 1e4, this.factor = t3.factor || 2, this.jitter = t3.jitter > 0 && t3.jitter <= 1 ? t3.jitter : 0, this.attempts = 0;
        }
        t2.exports = n2, n2.prototype.duration = function() {
          var t3 = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var e3 = Math.random(), n3 = Math.floor(e3 * this.jitter * t3);
            t3 = 0 == (1 & Math.floor(10 * e3)) ? t3 - n3 : t3 + n3;
          }
          return 0 | Math.min(t3, this.max);
        }, n2.prototype.reset = function() {
          this.attempts = 0;
        }, n2.prototype.setMin = function(t3) {
          this.ms = t3;
        }, n2.prototype.setMax = function(t3) {
          this.max = t3;
        }, n2.prototype.setJitter = function(t3) {
          this.jitter = t3;
        };
      }]);
    });
  })(uniSocket_io);
  var uniSocket_ioExports = uniSocket_io.exports;
  const io = /* @__PURE__ */ getDefaultExportFromCjs(uniSocket_ioExports);
  const _sfc_main$h = {
    data() {
      return {
        exploreImgSrc: "/static/home.jpg",
        fridge: "/static/冰箱.png",
        washer: "/static/智能洗衣机.png",
        message: null,
        msgType: null,
        time: null,
        latestMessages: []
        // 存储最新的两条消息
      };
    },
    methods: {
      goto(url) {
        uni.navigateTo({
          url
        });
      },
      redirect(msgType) {
        formatAppLog("log", "at pages/index/index.vue:86", msgType);
        let url = "";
        switch (msgType) {
          case 1:
            url = "/pages/msgToiletIn/msgToiletIn";
            break;
          case 2:
            url = "/pages/msgToiletOut/msgToiletOut";
            break;
          case 3:
            url = "/pages/msgKitchen/msgKitchen";
            break;
          case 4:
            url = "/pages/msgKitchenOut/msgKitchenOut";
            break;
          case 5:
            url = "/pages/msgCloseDoor/msgCloseDoor";
            break;
          case 6:
            url = "/pages/msgDoor/msgDoor";
            break;
          case 9:
            url = "/pages/msgToilet/msgToilet";
            break;
          default:
            formatAppLog("warn", "at pages/index/index.vue:111", "未匹配到对应的页面路由");
            return;
        }
        formatAppLog("log", "at pages/index/index.vue:114", url);
        this.goto(url);
      },
      change(e2) {
        formatAppLog("log", "at pages/index/index.vue:118", "当前模式：" + e2.type + ",状态：" + e2.show);
      },
      toggle(type) {
        this.type = type;
        this.$refs.popup.open(type);
        let messages = uni.getStorageSync("messages") || [];
        this.latestMessages = messages.slice(-2).reverse();
      },
      setupWebSocket() {
        const socket = io("ws://122.9.40.140:5000", {
          transports: ["websocket", "polling"],
          timeout: 5e3
        });
        socket.on("connect", () => {
          formatAppLog("log", "at pages/index/index.vue:135", "WebSocket 已连接");
          let messages = uni.getStorageSync("messages") || [];
          this.latestMessages = messages.slice(-2).reverse();
        });
        socket.on("update", (data) => {
          formatAppLog("log", "at pages/index/index.vue:142", "收到服务器消息：", data);
          this.message = data.msg;
          this.msgType = data.type;
          this.time = data.time;
          let messages = uni.getStorageSync("messages") || [];
          messages.push({
            msg: data.msg,
            type: data.type,
            time: data.time
          });
          if (messages.length > 50) {
            messages = messages.slice(-50);
          }
          uni.setStorageSync("messages", messages);
          this.toggle("top");
        });
        socket.on("error", (err) => {
          formatAppLog("error", "at pages/index/index.vue:169", "WebSocket 错误：", err);
        });
      }
    },
    mounted() {
      this.setupWebSocket();
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "uni-column" }, [
        vue.createElementVNode("view", { class: "myhome" }, " 我的家庭 "),
        vue.createElementVNode("view", { class: "explore" }, [
          vue.createElementVNode("view", { class: "text_explore" }, "探索"),
          vue.createElementVNode("view", { class: "pic" }, [
            vue.createElementVNode("image", {
              style: { "width": "100%" },
              src: $data.exploreImgSrc,
              mode: "widthFix"
            }, null, 8, ["src"])
          ])
        ]),
        vue.createElementVNode("view", { class: "message" }, [
          vue.createElementVNode("view", { class: "text_message" }, "消息"),
          vue.createCommentVNode(' <uni-section title="两条消息未读" type="circle" >\r\n							<uni-card title="冰箱" sub-title="我的家庭 | 餐厅"  :thumbnail="fridge" @click="onClick">\r\n								<text class="uni-body">昨日13:31已关门 已登记人员儿童Lucy操作</text>\r\n							</uni-card>\r\n							<uni-card title="智能洗衣机" sub-title="我的家庭 | 洗漱间"  :thumbnail="washer" @click="onClick">\r\n								<text class="uni-body">昨日13:31已结束 已登记人员成人Tommy操作</text>\r\n							</uni-card>\r\n							\r\n				</uni-section> '),
          vue.createElementVNode("view", { class: "message-bar" }, [
            vue.createCommentVNode(' <view v-for="(item, index) in latestMessages" :key="index">\r\n				        <view class="msg" @click="redirect(item.type)">\r\n				          <text>{{ item.msg }}</text>\r\n				          <text>{{ item.time }}</text>\r\n				        </view>\r\n				      </view> '),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.latestMessages, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "messages",
                  key: index
                }, [
                  vue.createElementVNode("view", {
                    onClick: ($event) => $options.redirect(item.type)
                  }, [
                    vue.createVNode(_component_uni_section, {
                      title: item.time,
                      type: "line"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode(
                          "view",
                          { class: "content" },
                          vue.toDisplayString(item.msg),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"])
                  ], 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "moreMessage" }, [
            vue.createElementVNode("button", {
              size: "mini",
              type: "default",
              "hover-class": "is-hover",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.goto("/pages/message/message"))
            }, "消息详情")
          ])
        ])
      ]),
      vue.createCommentVNode(' <uni-popup ref="infoPopup">\r\n			弹窗\r\n		</uni-popup> '),
      vue.createVNode(_component_uni_popup, {
        ref: "popup",
        onChange: $options.change
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "popup-content",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.redirect($data.msgType))
          }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createVNode(_component_uni_icons, { type: "gear-filled" }),
              vue.createElementVNode("text", { class: "title" }, "系统消息")
            ]),
            vue.createElementVNode(
              "text",
              { class: "time" },
              vue.toDisplayString($data.time),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "text" },
              vue.toDisplayString($data.message),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onChange"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$e], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/code/uniapp/RFID/pages/index/index.vue"]]);
  const _sfc_main$g = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      // 每列显示个数
      column: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e2) {
        this.$emit("change", e2);
      },
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.width = parseInt((ret[0].width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-grid-wrap" }, [
      vue.createElementVNode("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: vue.normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: vue.normalizeStyle({ "border-left-color": $props.borderColor })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 14, ["id"])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$d], ["__scopeId", "data-v-07acefee"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  const _sfc_main$f = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$c], ["__scopeId", "data-v-ae4bee67"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _imports_0$a = "/static/RFIDdevice.jpg";
  const _imports_4$1 = "/static/Right右.png";
  const _imports_2$2 = "/static/home.jpg";
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {
      goto(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_1);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_uni_card, { class: "device" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "RFID" }, [
            vue.createElementVNode("image", {
              class: "RFIDdevice",
              src: _imports_0$a,
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "RFIDtext" }, " 入户检测区域 ")
          ]),
          vue.createVNode(_component_uni_grid, {
            column: "4",
            "show-border": "false",
            square: "false"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", {
                class: "grid-item-box",
                style: { "background-color": "#fff" }
              }, [
                vue.createElementVNode("view", { class: "textup" }, "状态"),
                vue.createVNode(_component_uni_icons, {
                  style: { "margin-bottom": "20rpx" },
                  type: "eye",
                  size: 30,
                  color: "#777"
                }),
                vue.createElementVNode("view", { class: "text" }, "运行中")
              ]),
              vue.createElementVNode("view", {
                class: "grid-item-box",
                style: { "background-color": "#fff" }
              }, [
                vue.createElementVNode("view", { class: "textup" }, "登记人数"),
                vue.createVNode(_component_uni_icons, {
                  style: { "margin-bottom": "20rpx" },
                  type: "contact",
                  size: 30,
                  color: "#777"
                }),
                vue.createElementVNode("view", { class: "text" }, "3名成员")
              ]),
              vue.createElementVNode("view", {
                class: "grid-item-box",
                style: { "background-color": "#fff" }
              }, [
                vue.createElementVNode("view", { class: "textup" }, "运行消息"),
                vue.createVNode(_component_uni_icons, {
                  style: { "margin-bottom": "20rpx" },
                  type: "bars",
                  size: 30,
                  color: "#777"
                }),
                vue.createElementVNode("view", { class: "text" }, "4条未读")
              ]),
              vue.createElementVNode("view", {
                class: "grid-item-box",
                style: { "background-color": "#fff" }
              }, [
                vue.createElementVNode("view", { class: "textup" }, "网关"),
                vue.createVNode(_component_uni_icons, {
                  style: { "margin-bottom": "20rpx" },
                  type: "smallcircle",
                  size: 30,
                  color: "#777"
                }),
                vue.createElementVNode("view", { class: "text" }, "已连接")
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", {
            class: "add",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goto("/pages/add/add"))
          }, [
            vue.createElementVNode("text", null, "添加注册人员"),
            vue.createElementVNode("image", {
              src: _imports_4$1,
              style: { "width": "40rpx" },
              mode: "widthFix"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_card, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "monitor" }, [
            vue.createElementVNode("text", { class: "monitorText" }, ' "我的家庭"检测区 '),
            vue.createElementVNode("image", {
              class: "home",
              src: _imports_2$2,
              mode: "widthFix"
            }),
            vue.createVNode(_component_uni_card, { class: "deviceButton" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("text", { class: "deviceButtonText" }, "查看设备详情")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesDeviceDevice = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$b], ["__scopeId", "data-v-165c9ab9"], ["__file", "C:/code/uniapp/RFID/pages/device/device.vue"]]);
  const _imports_0$9 = "/static/头像.jpg";
  const _imports_1$1 = "/static/adult.png";
  const _imports_2$1 = "/static/oldman.png";
  const _imports_0$8 = "/static/baby.png";
  const _sfc_main$d = {
    data() {
      return {};
    },
    methods: {
      goto(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "user" }, [
        vue.createElementVNode("view", { class: "userName" }, [
          vue.createElementVNode("text", null, "Tommy"),
          vue.createCommentVNode(' <uni-card class="detail">\r\n					<text>身份 | 家庭管理员</text>\r\n				</uni-card> '),
          vue.createElementVNode("view", { class: "detail" }, " 身份信息 | 家庭管理员 ")
        ]),
        vue.createVNode(_component_uni_icons, {
          type: "right",
          size: ""
        }),
        vue.createElementVNode("image", {
          class: "userImg",
          src: _imports_0$9,
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "familyBox" }, [
        vue.createElementVNode("text", { class: "title" }, " Tommy的家庭 "),
        vue.createElementVNode("view", { class: "detail" }, " 3名成员 "),
        vue.createElementVNode("view", { class: "family" }, [
          vue.createElementVNode("view", { class: "member" }, [
            vue.createElementVNode("text", null, "Tommy"),
            vue.createElementVNode("image", {
              class: "memberImg",
              src: _imports_1$1,
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("view", { class: "member" }, [
            vue.createElementVNode("text", null, "Monica"),
            vue.createElementVNode("image", {
              class: "memberImg",
              src: _imports_2$1,
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("view", { class: "member" }, [
            vue.createElementVNode("text", null, "Lucy"),
            vue.createElementVNode("image", {
              class: "memberImg",
              src: _imports_0$8,
              mode: "widthFix"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "setting" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createVNode(_component_uni_icons, {
            type: "gear",
            size: "18"
          }),
          vue.createElementVNode("text", { style: { "margin-left": "10rpx" } }, "更多设置")
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createElementVNode("image", {
            src: _imports_4$1,
            style: { "width": "50rpx", "display": "flex", "flex-direction": "row", "justify-content": "center" },
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "exit" }, [
        vue.createElementVNode("text", { style: { "color": "firebrick" } }, "退出")
      ])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a], ["__scopeId", "data-v-2f1ef635"], ["__file", "C:/code/uniapp/RFID/pages/my/my.vue"]]);
  const _imports_0$7 = "/static/消息.png";
  const _sfc_main$c = {
    __name: "message",
    setup(__props) {
      const msgs = vue.ref([]);
      function loadMessages() {
        const storedMessages = uni.getStorageSync("messages") || [];
        if (storedMessages.length > 50) {
          storedMessages = storedMessages.slice(-50);
          uni.setStorageSync("messages", storedMessages);
          formatAppLog("log", "at pages/message/message.vue:35", "消息队列超出50条.");
        }
        formatAppLog("log", "at pages/message/message.vue:37", storedMessages);
        msgs.value = storedMessages.reverse();
      }
      function goto(msgType) {
        let url = "";
        switch (msgType) {
          case 1:
            url = "/pages/msgToiletIn/msgToiletIn";
            break;
          case 2:
            url = "/pages/msgToiletOut/msgToiletOut";
            break;
          case 3:
            url = "/pages/msgKitchen/msgKitchen";
            break;
          case 4:
            url = "/pages/msgKitchenOut/msgKitchenOut";
            break;
          case 5:
            url = "/pages/msgCloseDoor/msgCloseDoor";
            break;
          case 6:
            url = "/pages/msgDoor/msgDoor";
            break;
          case 9:
            url = "/pages/msgToilet/msgToilet";
            break;
          default:
            formatAppLog("warn", "at pages/message/message.vue:73", "未匹配到对应的页面路由");
            return;
        }
        formatAppLog("log", "at pages/message/message.vue:76", url);
        uni.navigateTo({
          url
        });
      }
      vue.onMounted(() => {
        loadMessages();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "messageCenter" }, [
          vue.createElementVNode("text", null, "消息中心"),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(msgs.value, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "messages",
                key: item.id
              }, [
                vue.createElementVNode("view", { class: "msg" }, [
                  vue.createElementVNode("view", {
                    onClick: ($event) => goto(item.type)
                  }, [
                    vue.createElementVNode("view", { class: "up" }, [
                      vue.createElementVNode("image", {
                        src: _imports_0$7,
                        mode: "widthFix",
                        style: { "width": "36rpx" }
                      }),
                      vue.createElementVNode(
                        "view",
                        { class: "time" },
                        vue.toDisplayString(item.time),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "down" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "content" },
                        vue.toDisplayString(item.msg),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 8, ["onClick"])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4c1b26cf"], ["__file", "C:/code/uniapp/RFID/pages/message/message.vue"]]);
  const _imports_0$6 = "/static/crossDoor.jpg";
  const _sfc_main$b = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgDoor/msgDoor.vue:18", option.name);
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$6,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记儿童Lucy经过入户房门")
    ]);
  }
  const PagesMsgDoorMsgDoor = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9], ["__scopeId", "data-v-2979c113"], ["__file", "C:/code/uniapp/RFID/pages/msgDoor/msgDoor.vue"]]);
  const _imports_0$5 = "/static/kitchenIn.jpg";
  const _sfc_main$a = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgKitchen/msgKitchen.vue:17", option.name);
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$5,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记儿童Lucy进入厨房灶台区，灶台已关闭,饮水机热水童锁已开")
    ]);
  }
  const PagesMsgKitchenMsgKitchen = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8], ["__scopeId", "data-v-4ff3eef5"], ["__file", "C:/code/uniapp/RFID/pages/msgKitchen/msgKitchen.vue"]]);
  const _imports_0$4 = "/static/toilet.jpg";
  const _sfc_main$9 = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgToilet/msgToilet.vue:17", option.name);
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$4,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记老人Monica在洗手间超过15分钟,请注意")
    ]);
  }
  const PagesMsgToiletMsgToilet = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__scopeId", "data-v-db00a635"], ["__file", "C:/code/uniapp/RFID/pages/msgToilet/msgToilet.vue"]]);
  const _imports_0$3 = "/static/closeDoor.jpg";
  const _sfc_main$8 = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgCloseDoor/msgCloseDoor.vue:17", option.name);
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$3,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "未登记人员欲开门，权限未通过")
    ]);
  }
  const PagesMsgCloseDoorMsgCloseDoor = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__scopeId", "data-v-1d3fead5"], ["__file", "C:/code/uniapp/RFID/pages/msgCloseDoor/msgCloseDoor.vue"]]);
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "首页"
      }
    },
    {
      path: "pages/device/device",
      style: {
        navigationBarTitleText: "设备"
      }
    },
    {
      path: "pages/my/my",
      style: {
        navigationBarTitleText: "我的"
      }
    },
    {
      path: "pages/message/message",
      style: {
        navigationBarTitleText: "消息中心"
      }
    },
    {
      path: "pages/msgDoor/msgDoor",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgKitchen/msgKitchen",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgToilet/msgToilet",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgCloseDoor/msgCloseDoor",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/add/add",
      style: {
        navigationBarTitleText: "添加注册人员"
      }
    },
    {
      path: "pages/test/test",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/webtest/webtest",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgKitchenOut/msgKitchenOut",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgToiletIn/msgToiletIn",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/msgToiletOut/msgToiletOut",
      style: {
        navigationBarTitleText: ""
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "white",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#27BA9B",
    backgroundColor: "#F8F8F8"
  };
  const tabBar = {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "static/tab/home.png",
        selectedIconPath: "static/tab/home (1).png"
      },
      {
        pagePath: "pages/device/device",
        text: "设备",
        iconPath: "static/tab/device.png",
        selectedIconPath: "static/tab/device (1).png"
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "static/tab/people.png",
        selectedIconPath: "static/tab/people (1).png"
      }
    ]
  };
  const uniIdRouter = {};
  const e = {
    pages,
    globalStyle,
    tabBar,
    uniIdRouter
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), P2 = h2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, T2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = h2(T2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, T2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = h2(T2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, T2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = h2(T2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, T2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = l2(P2, T2 = h2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, T2, S2, 16, a2[34]), T2 = l2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = l2(P2, T2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, T2, _2, 16, a2[38]), T2 = l2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, T2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, T2, f2, 16, a2[42]), T2 = l2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, T2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, T2, C2, 16, a2[46]), P2 = d2(P2, T2 = l2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), C = b, P = I(""), T = I("[]") || [];
  let O = "";
  try {
    O = "";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let he = {};
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...he, ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...he, ...ae, locale: e2, LOCALE: e2 };
  }
  var de = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = de.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var fe = { init(e2) {
    const t2 = new pe(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  }, _e = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), we = _e, ve = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const Ie = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Se(e2) {
    return void 0 === e2;
  }
  function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var ke;
  function Ae(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(ke || (ke = {}));
  const Ce = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends ye {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ce.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function xe(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class Oe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Ee = {}, Le = {};
  function Re(e2) {
    return Ee[e2];
  }
  class Ue {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ne extends Ue {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const De = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ne)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Me(e2, t2) {
    De.on(e2, t2);
  }
  function qe(e2, t2 = {}) {
    De.fire(e2, t2);
  }
  function Fe(e2, t2) {
    De.off(e2, t2);
  }
  const Ke = "loginStateChanged", je = "loginStateExpire", $e = "loginTypeChanged", Be = "anonymousConverted", We = "refreshAccessToken";
  var He;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(He || (He = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function Ve(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...Je, "x-seqid": e2 } };
  }
  class Ye {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, Le[t2]), Ve(this._reqClass, "post", [Ge]), Ve(this._reqClass, "upload", [Ge]), Ve(this._reqClass, "download", [Ge]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          qe(je), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return qe(We), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === ze.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Qe = {};
  function Xe(e2) {
    return Qe[e2];
  }
  class Ze {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class tt {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new et(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === He.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === He.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class nt extends Ze {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.ANONYMOUS, persistence: "local" });
        const e3 = new tt(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), qe(Be, { env: this.config.env }), qe($e, { loginType: He.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, He.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class st extends Ze {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new tt(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class rt extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.EMAIL, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class it extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: He.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.USERNAME, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class ot {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new nt(this.config);
    }
    customAuthProvider() {
      return new st(this.config);
    }
    emailAuthProvider() {
      return new rt(this.config);
    }
    usernameAuthProvider() {
      return new it(this.config);
    }
    async signInAnonymously() {
      return new nt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new it(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), Me(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === He.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), qe(Ke), qe($e, { env: this.config.env, loginType: He.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      Me(Ke, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      Me(je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Me(We, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Me(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Me($e, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new tt(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new st(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const at = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    if (t2 = t2 || Ie(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = function({ fileList: e2 }, t2) {
    t2 = t2 || Ie(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, lt = async function({ fileID: e2 }, t2) {
    const n2 = (await ht.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Xe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, dt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || Ie();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Xe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, pt = { timeout: 15e3, persistence: "session" }, ft = {};
  class gt {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...pt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new gt(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ce.adapter.primaryStorage || pt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Ee[t3] = new Oe(e3), Le[t3] = new Oe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), this.authObj;
    }
    on(e2, t2) {
      return Me.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return Fe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return dt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      ft[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = ft[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Ae(e2) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var mt = new gt();
  function yt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class _t {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: yt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: yt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const wt = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var vt = { genAdapter: function() {
    return { root: {}, reqClass: _t, localStorage: wt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  mt.useAdapters(vt);
  const It = mt, St = It.init;
  It.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = St.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var bt = It;
  var kt = class extends pe {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var At = { init(e2) {
    const t2 = new kt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Ct = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Tt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = Pt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = we(e3.body).toString(Ct), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = we(r3).toString(Ct), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ve(o3, e3.secretKey).toString(Ct);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function xt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ot(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Tt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return xt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Et(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Lt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class Rt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Pt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(Ct)].join("\n"), a2 = ve(o2, this.config.secretKey).toString(Ct), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  var Ut = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Rt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false } = e3, i2 = "POST", o2 = { "x-to-function-name": n2 };
        r2 && (o2["x-function-invoke-type"] = "async");
        const { url: a2, headers: c2 } = Tt("/functions/invokeFunction", { functionName: n2, data: s2, method: i2, headers: o2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return xt({ url: a2, data: s2, method: i2, headers: c2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ot({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = Et.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ot({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Lt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ne.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
  };
  var Nt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Ut(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Dt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Mt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: C, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR":
            console.error(s3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Dt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: C, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const qt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Ft = /[\\^$.*+?()[\]{}|]/g, Kt = RegExp(Ft.source);
  function jt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Kt.test(s2) ? s2.replace(Ft, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Bt = "request", Wt = "response", Ht = "both";
  const Tn = { code: 2e4, message: "System error" }, xn = { code: 20101, message: "Invalid client" };
  function Ln(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || Tn.code, message: r2 || o2, cause: a2 });
  }
  let Un;
  function Fn({ secretType: e2 } = {}) {
    return e2 === Bt || e2 === Wt || e2 === Ht;
  }
  function Kn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function jn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Ln(xn);
  }
  function $n({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Bn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Dt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Fn(n3), o2 = Kn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = jt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = jt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: qt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Mt), o2 = Mt) : o2 = n2, o2 = o2.bind(e2), Kn(t3))
        a2 = n2.call(e2, t3);
      else if (Fn(t3)) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (jn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  Un = class {
    constructor() {
      throw Ln({ message: `Platform ${C} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Wn = Symbol("CLIENT_DB_INTERNAL");
  function Hn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Wn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function zn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Jn = ["db.Geo", "db.command", "command.aggregate"];
  function Vn(e2, t2) {
    return Jn.indexOf(`${e2}.${t2}`) > -1;
  }
  function Gn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Gn(e3));
      case "object":
        return e2._internalType === Wn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Gn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Yn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Qn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Gn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Yn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Xn({ $method: e2, $param: Gn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Gn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Xn(e2, t2, n2) {
    return Hn(new Qn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Vn(s2, t3) ? Xn({ $method: t3 }, e3, n2) : function() {
        return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Zn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function es(e2, t2 = {}) {
    return Hn(new e2(t2), { get: (e3, t3) => Vn("db", t3) ? Xn({ $method: t3 }, null, e3) : function() {
      return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, null, e3);
    } });
  }
  class ts extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = zn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, zn(this._dbCallBacks)), this.env = Hn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Hn({}, { get: (e3, t3) => Zn({ path: ["Geo"], method: t3 }) }), this.serverDate = Zn({ path: [], method: "serverDate" }), this.RegExp = Zn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const ns = "token无效，跳转登录页面", ss = "token过期，跳转登录页面", rs = { TOKEN_INVALID_TOKEN_EXPIRED: ss, TOKEN_INVALID_INVALID_CLIENTID: ns, TOKEN_INVALID: ns, TOKEN_INVALID_WRONG_TOKEN: ns, TOKEN_INVALID_ANONYMOUS_USER: ns }, is = { "uni-id-token-expired": ss, "uni-id-check-token-failed": ns, "uni-id-token-not-exist": ns, "uni-id-check-device-feature-failed": ns };
  function os(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function as(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(os(t2, e3.path)) : false === e3.needLogin && s2.push(os(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function cs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function us() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function hs() {
    return cs(us());
  }
  function ls(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = cs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const ds = !!e.uniIdRouter;
  const { loginPage: ps, routerNeedLogin: fs, resToLogin: gs, needLoginPage: ms, notNeedLoginPage: ys, loginPageInTabBar: _s } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = as(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = as(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: ls(i2, r2) };
  }();
  if (ms.indexOf(ps) > -1)
    throw new Error(`Login page [${ps}] should not be "needLogin", please check your pages.json`);
  function ws(e2) {
    const t2 = hs();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function vs(e2) {
    const t2 = cs(ws(e2));
    return !(ys.indexOf(t2) > -1) && (ms.indexOf(t2) > -1 || fs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Is({ redirect: e2 }) {
    const t2 = cs(e2), n2 = cs(ps);
    return hs() !== n2 && t2 !== n2;
  }
  function Ss({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Is({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ps, t2);
    _s ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function bs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: is[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: is[e4] };
      }
      return n3;
    }();
    if (vs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ks() {
    !function() {
      const e3 = us(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = bs({ url: e3 });
      t2 || n2 && Ss({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = bs({ url: e3.url });
        return t3 ? e3 : s2 ? (Ss({ api: n2, redirect: ws(e3.url) }), false) : e3;
      } });
    }
  }
  function As() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in is;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in rs;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = us();
          if (n3 && Is({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ps && Ss({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Cs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        G($, e4);
      }, ds && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        ks.call(e3);
      }), gs && As.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(B, e4);
      }, e3.offRefreshToken = function(e4) {
        G(B, e4);
      };
    }(e2);
  }
  let Ps;
  const Ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Os() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Ps(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ps = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !xs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = Ts.indexOf(e2.charAt(i2++)) << 18 | Ts.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ts.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ts.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Es = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Ls = t(Es);
  const Rs = "manual";
  function Us(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Rs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ns(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
          }
          return Y(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ds(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Ms({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ds(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${C}\``);
  }
  async function qs(e2) {
    const t2 = Ds(this);
    return t2.initPromise || (t2.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Fs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return qs.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ks(e2) {
    !function(e3) {
      he = e3;
    }(e2);
  }
  function js(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class $s extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([js("getSystemInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Bs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ws(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Bs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === C.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Hs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const zs = { tcb: bt, tencent: bt, aliyun: fe, private: At, alipay: Nt };
  let Js = new class {
    init(e2) {
      let t2 = {};
      const n2 = zs[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === C;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ws(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Hs(t2), Bn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = es(ts, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = es(ts, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Us(e3);
        } }), e3.SSEChannel = $s, e3.initSecureNetworkByWeixin = Fs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = T;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Js = Js.init(t2), Js._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Js[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Js, { get mixinDatacom() {
      return Us(Js);
    } }), Cs(Js), Js.addInterceptor = N, Js.removeInterceptor = D, Js.interceptObject = F;
  })();
  var Vs = Js;
  const _sfc_main$7 = {
    name: "uni-data-select",
    mixins: [Vs.mixinDatacom || {}],
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      emptyTips: {
        type: String,
        default: "无选项"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
      format: {
        type: String,
        default: ""
      },
      placement: {
        type: String,
        default: "bottom"
      }
    },
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: [],
        cacheKey: "uni-data-select-lastSelectedValue"
      };
    },
    created() {
      this.debounceGet = this.debounce(() => {
        this.query();
      }, 300);
      if (this.collection && !this.localdata.length) {
        this.debounceGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "版本",
          "opendb-app-channels": "渠道",
          "opendb-app-list": "应用"
        };
        const common = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common + placeholder : common;
      },
      valueCom() {
        return this.modelValue;
      },
      textShow() {
        let text = this.current;
        if (text.length > 10) {
          return text.slice(0, 25) + "...";
        }
        return text;
      },
      getOffsetByPlacement() {
        switch (this.placement) {
          case "top":
            return "bottom:calc(100% + 12px);";
          case "bottom":
            return "top:calc(100% + 12px);";
        }
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      valueCom(val, old) {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      debounce(fn, time = 100) {
        let timer = null;
        return function(...args) {
          if (timer)
            clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, time);
        };
      },
      // 执行数据库查询
      query() {
        this.mixinDatacomEasyGet();
      },
      // 监听查询条件变更事件
      onMixinDatacomPropsChange() {
        if (this.collection) {
          this.debounceGet();
        }
      },
      initDefVal() {
        let defValue = "";
        if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
          defValue = this.valueCom;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = this.getCache();
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          if (defValue || defValue === 0) {
            this.emit(defValue);
          }
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          this.removeCache();
        }
      },
      change(item) {
        if (!item.disable) {
          this.showSelector = false;
          this.current = this.formatItemName(item);
          this.emit(item.value);
        }
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          this.setCache(val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        if (this.format) {
          let str = "";
          str = this.format;
          for (let key in item) {
            str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
          }
          return str;
        } else {
          return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
        }
      },
      // 获取当前加载的数据
      getLoadData() {
        return this.mixinDatacomResData;
      },
      // 获取当前缓存key
      getCurrentCacheKey() {
        return this.collection;
      },
      // 获取缓存
      getCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        return cacheData[name];
      },
      // 设置缓存
      setCache(value, name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        cacheData[name] = value;
        uni.setStorageSync(this.cacheKey, cacheData);
      },
      // 删除缓存
      removeCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        delete cacheData[name];
        uni.setStorageSync(this.cacheKey, cacheData);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-stat__select" }, [
      $props.label ? (vue.openBlock(), vue.createElementBlock(
        "span",
        {
          key: 0,
          class: "uni-label-text hide-on-phone"
        },
        vue.toDisplayString($props.label + "："),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              vue.createElementVNode("view", {
                class: "uni-select__input-box",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $data.current ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "uni-select__input-text"
                  },
                  vue.toDisplayString($options.textShow),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: "uni-select__input-text uni-select__input-placeholder"
                  },
                  vue.toDisplayString($options.typePlaceholder),
                  1
                  /* TEXT */
                )),
                $data.current && $props.clear && !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clearVal && $options.clearVal(...args), ["stop"]))
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "clear",
                    color: "#c0c4cc",
                    size: "24"
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_uni_icons, {
                    type: $data.showSelector ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])
                ]))
              ]),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : vue.createCommentVNode("v-if", true),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "uni-select__selector",
                  style: vue.normalizeStyle($options.getOffsetByPlacement)
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass($props.placement == "bottom" ? "uni-popper__arrow_bottom" : "uni-popper__arrow_top")
                    },
                    null,
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode("scroll-view", {
                    "scroll-y": "true",
                    class: "uni-select__selector-scroll"
                  }, [
                    $data.mixinDatacomResData.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-select__selector-empty"
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString($props.emptyTips),
                        1
                        /* TEXT */
                      )
                    ])) : (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      vue.renderList($data.mixinDatacomResData, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-select__selector-item",
                          key: index,
                          onClick: ($event) => $options.change(item)
                        }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: vue.normalizeClass({ "uni-select__selector__disabled": item.disable })
                            },
                            vue.toDisplayString($options.formatItemName(item)),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "C:/code/uniapp/RFID/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const _imports_1 = "/static/door .png";
  const _imports_2 = "/static/衣柜2.png";
  const _imports_3 = "/static/notice.png";
  const _imports_4 = "/static/火焰.png";
  const _sfc_main$6 = {
    data() {
      return {
        value1: 0,
        value2: 0,
        range1: [
          { value: 0, text: "5-12岁儿童" },
          { value: 1, text: "成年人" },
          { value: 2, text: "老人" }
        ],
        range2: [
          { value: 0, text: "应用消息推送" },
          { value: 1, text: "发送短信" },
          { value: 2, text: "拨打紧急电话" }
        ]
      };
    },
    methods: {
      change1(e2) {
        formatAppLog("log", "at pages/add/add.vue:104", "e:", e2);
      },
      change2(e2) {
        formatAppLog("log", "at pages/add/add.vue:107", "e:", e2);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_0);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "title",
        style: { "margin-left": "10rpx", "font-size": "35rpx", "margin-bottom": "20rpx" }
      }, "注册人员权限设置"),
      vue.createElementVNode("view", { class: "layout" }, [
        vue.createElementVNode("view", { class: "box" }, [
          vue.createVNode(_component_uni_grid, { column: "2" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "leftbox" }, [
                vue.createElementVNode("image", {
                  class: "baby",
                  src: _imports_0$8,
                  mode: "widthFix"
                }),
                vue.createVNode(_component_uni_data_select, {
                  class: "select-picker",
                  modelValue: $data.value1,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
                  localdata: $data.range1,
                  onChange: $options.change1
                }, null, 8, ["modelValue", "localdata", "onChange"])
              ]),
              vue.createElementVNode("view", { class: "rightbox" }, [
                vue.createElementVNode("text", { class: "rightboxTitle" }, " 5-12岁儿童组 "),
                vue.createElementVNode("text", { class: "rightboxContent" }, " 组内成员: "),
                vue.createElementVNode("text", { class: "rightboxContent" }, " Lucy ")
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createElementVNode("view", { class: "canDoBox" }, [
          vue.createElementVNode("view", { class: "canDoTitle" }, [
            vue.createTextVNode(" 可以执行以下操作 "),
            vue.createVNode(_component_uni_icons, {
              type: "plus-filled",
              size: "18"
            })
          ]),
          vue.createElementVNode("view", { class: "canDoBox1" }, [
            vue.createElementVNode("image", {
              class: "icon",
              src: _imports_1,
              mode: "widthFix"
            }),
            vue.createElementVNode("text", { class: "boxText" }, " 通过大门 "),
            vue.createVNode(_component_uni_icons, {
              type: "clear",
              size: "20",
              style: { "margin-left": "280rpx" },
              color: "#777"
            })
          ]),
          vue.createElementVNode("view", { class: "canDoBox1" }, [
            vue.createElementVNode("image", {
              class: "icon",
              src: _imports_2,
              mode: "widthFix"
            }),
            vue.createElementVNode("text", { class: "boxText" }, " 打开衣柜 "),
            vue.createVNode(_component_uni_icons, {
              type: "clear",
              size: "20",
              style: { "margin-left": "280rpx" },
              color: "#777"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "canDoBox" }, [
          vue.createElementVNode("view", { class: "canDoTitle" }, [
            vue.createTextVNode(" 执行以下操作会发出通知 "),
            vue.createVNode(_component_uni_icons, {
              type: "plus-filled",
              size: "18"
            })
          ]),
          vue.createElementVNode("view", { class: "canDoBox2" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("image", {
                class: "icon",
                src: _imports_3,
                mode: "widthFix"
              }),
              vue.createElementVNode("text", { class: "boxText" }, " 通知方式 ")
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createVNode(_component_uni_data_select, {
                class: "notice-picker",
                modelValue: $data.value2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
                localdata: $data.range2,
                onChange: $options.change2
              }, null, 8, ["modelValue", "localdata", "onChange"])
            ])
          ]),
          vue.createElementVNode("view", { class: "canDoBox1" }, [
            vue.createElementVNode("image", {
              class: "icon",
              src: _imports_4,
              mode: "widthFix"
            }),
            vue.createElementVNode("text", { class: "boxText" }, " 靠近厨房灶台 "),
            vue.createVNode(_component_uni_icons, {
              type: "clear",
              size: "20",
              style: { "margin-left": "220rpx" },
              color: "#777"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "start" }, [
          vue.createElementVNode("text", { style: { "color": "aliceblue" } }, "开始录入")
        ])
      ])
    ]);
  }
  const PagesAddAdd = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__scopeId", "data-v-e8d2fd40"], ["__file", "C:/code/uniapp/RFID/pages/add/add.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        socketTask: null,
        message: ""
      };
    },
    onLoad() {
      this.connectToWebSocket();
    },
    methods: {
      connectToWebSocket() {
        const url = "ws://192.168.120.198:5000/";
        this.socketTask = uni.connectSocket({
          url,
          success: () => {
            formatAppLog("log", "at pages/test/test.vue:112", "WebSocket connection established!");
          },
          fail: (err) => {
            formatAppLog("error", "at pages/test/test.vue:115", "WebSocket connection failed:", err);
          }
        });
        this.socketTask.onOpen(() => {
          formatAppLog("log", "at pages/test/test.vue:120", "WebSocket opened");
        });
        this.socketTask.onMessage((res) => {
          formatAppLog("log", "at pages/test/test.vue:124", "Received message:", res.data);
          this.message = res.data;
          uni.showModal({
            title: "New Message",
            content: this.message,
            showCancel: false
          });
        });
        this.socketTask.onClose(() => {
          formatAppLog("log", "at pages/test/test.vue:134", "WebSocket closed");
        });
        this.socketTask.onError((err) => {
          formatAppLog("error", "at pages/test/test.vue:138", "WebSocket error:", err);
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.message ? (vue.openBlock(), vue.createElementBlock(
        "text",
        { key: 0 },
        vue.toDisplayString($data.message),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "C:/code/uniapp/RFID/pages/test/test.vue"]]);
  const _sfc_main$4 = {
    __name: "webtest",
    setup(__props) {
      const socket = io("ws://127.0.0.1:5000", {
        transports: ["websocket", "polling"],
        timeout: 5e3
      });
      const message = vue.ref(null);
      socket.on("connect", () => {
        formatAppLog("log", "at pages/webtest/webtest.vue:57", "WebSocket 已连接");
      });
      socket.on("update", (data) => {
        formatAppLog("log", "at pages/webtest/webtest.vue:61", "收到服务器消息：", data);
        message.value = data.msg;
      });
      socket.on("error", (err) => {
        formatAppLog("error", "at pages/webtest/webtest.vue:66", "WebSocket 错误：", err);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          message.value ? (vue.openBlock(), vue.createElementBlock(
            "text",
            { key: 0 },
            vue.toDisplayString(message.value),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesWebtestWebtest = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "C:/code/uniapp/RFID/pages/webtest/webtest.vue"]]);
  const _imports_0$2 = "/static/kitchenOut.jpg";
  const _sfc_main$3 = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgKitchenOut/msgKitchenOut.vue:17", option.name);
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$2,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记儿童Lucy离开厨房灶台区,灶台已恢复,饮水机热水童锁已关")
    ]);
  }
  const PagesMsgKitchenOutMsgKitchenOut = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-edea42df"], ["__file", "C:/code/uniapp/RFID/pages/msgKitchenOut/msgKitchenOut.vue"]]);
  const _imports_0$1 = "/static/toiletIn.jpg";
  const _sfc_main$2 = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgToiletIn/msgToiletIn.vue:17", option.name);
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0$1,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记老人Monica进入洗手间")
    ]);
  }
  const PagesMsgToiletInMsgToiletIn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-f9470df8"], ["__file", "C:/code/uniapp/RFID/pages/msgToiletIn/msgToiletIn.vue"]]);
  const _imports_0 = "/static/toiletOut.jpg";
  const _sfc_main$1 = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/msgToiletOut/msgToiletOut.vue:17", option.name);
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, "入户RFID检测区"),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "pic" }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, "已登记老人Monica离开洗手间")
    ]);
  }
  const PagesMsgToiletOutMsgToiletOut = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-0fda75c2"], ["__file", "C:/code/uniapp/RFID/pages/msgToiletOut/msgToiletOut.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/device/device", PagesDeviceDevice);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/msgDoor/msgDoor", PagesMsgDoorMsgDoor);
  __definePage("pages/msgKitchen/msgKitchen", PagesMsgKitchenMsgKitchen);
  __definePage("pages/msgToilet/msgToilet", PagesMsgToiletMsgToilet);
  __definePage("pages/msgCloseDoor/msgCloseDoor", PagesMsgCloseDoorMsgCloseDoor);
  __definePage("pages/add/add", PagesAddAdd);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/webtest/webtest", PagesWebtestWebtest);
  __definePage("pages/msgKitchenOut/msgKitchenOut", PagesMsgKitchenOutMsgKitchenOut);
  __definePage("pages/msgToiletIn/msgToiletIn", PagesMsgToiletInMsgToiletIn);
  __definePage("pages/msgToiletOut/msgToiletOut", PagesMsgToiletOutMsgToiletOut);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      this.initWebSocket();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    },
    methods: {}
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/code/uniapp/RFID/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
