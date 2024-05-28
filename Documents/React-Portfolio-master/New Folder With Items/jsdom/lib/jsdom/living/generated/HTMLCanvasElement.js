"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

class HTMLCanvasElement extends HTMLElement.interface {
  constructor() {
    throw new TypeError("Illegal constructor");
  }

  getContext(contextId) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'getContext' on 'HTMLCanvasElement': 1 argument required, but only " +
          arguments.length +
          " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'getContext' on 'HTMLCanvasElement': parameter 1"
      });
      args.push(curArg);
    }
    for (let i = 1; i < arguments.length; i++) {
      let curArg = arguments[i];
      curArg = conversions["any"](curArg, {
        context: "Failed to execute 'getContext' on 'HTMLCanvasElement': parameter " + (i + 1)
      });
      args.push(curArg);
    }
    return utils.tryWrapperForImpl(this[impl].getContext(...args));
  }

  toDataURL() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    const args = [];
    {
      let curArg = arguments[0];
      if (curArg !== undefined) {
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'toDataURL' on 'HTMLCanvasElement': parameter 1"
        });
      }
      args.push(curArg);
    }
    {
      let curArg = arguments[1];
      if (curArg !== undefined) {
        curArg = conversions["any"](curArg, {
          context: "Failed to execute 'toDataURL' on 'HTMLCanvasElement': parameter 2"
        });
      }
      args.push(curArg);
    }
    return this[impl].toDataURL(...args);
  }

  toBlob(callback) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'toBlob' on 'HTMLCanvasElement': 1 argument required, but only " +
          arguments.length +
          " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = utils.tryImplForWrapper(curArg);
      args.push(curArg);
    }
    {
      let curArg = arguments[1];
      if (curArg !== undefined) {
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'toBlob' on 'HTMLCanvasElement': parameter 2"
        });
      }
      args.push(curArg);
    }
    {
      let curArg = arguments[2];
      if (curArg !== undefined) {
        curArg = conversions["any"](curArg, {
          context: "Failed to execute 'toBlob' on 'HTMLCanvasElement': parameter 3"
        });
      }
      args.push(curArg);
    }
    return this[impl].toBlob(...args);
  }

  get width() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["width"];
  }

  set width(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'width' property on 'HTMLCanvasElement': The provided value"
    });

    this[impl]["width"] = V;
  }

  get height() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["height"];
  }

  set height(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'height' property on 'HTMLCanvasElement': The provided value"
    });

    this[impl]["height"] = V;
  }
}
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: { enumerable: true },
  toDataURL: { enumerable: true },
  toBlob: { enumerable: true },
  width: { enumerable: true },
  height: { enumerable: true },
  [Symbol.toStringTag]: { value: "HTMLCanvasElement", configurable: true }
});
const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'HTMLCanvasElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLCanvasElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLCanvasElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: HTMLCanvasElement,
  expose: {
    Window: { HTMLCanvasElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLCanvasElement-impl.js");
