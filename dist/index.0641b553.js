// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var _table = require("./concerns/table");
let table = (0, _table.NewTable)("table", "tableData", {
    data: [
        [
            "",
            ""
        ],
        [
            "",
            ""
        ],
        [
            "",
            ""
        ],
        [
            "",
            ""
        ]
    ],
    alignment: [],
    colMaxChars: []
});
table.generate("markdown");
let tableControls = document.getElementById("table-controls");
let generateOnChange = document.getElementById("generate-on-change");
let tableElement = document.getElementById("table");
let clearStorage = document.getElementById("clear-storage");
clearStorage.addEventListener("click", function(event) {
    let isButton = event.target.nodeName === "BUTTON";
    if (!isButton) return;
    localStorage.clear();
    location.reload();
});
function inputListener(event) {
    let isInput = event.target.nodeName === "INPUT";
    if (!isInput) return;
    let generated = document.getElementById("generated");
    let format = generated.getAttribute("format") ?? "markdown";
    table.generate(format);
}
// remove event listener from table element
tableControls.addEventListener("click", function(event) {
    let isButton = event.target.nodeName === "BUTTON";
    if (!isButton) return;
    let mutation = event.target.getAttribute("mutation");
    if (mutation) return table.mutate(mutation);
    let generation = event.target.getAttribute("generation");
    if (generation) return table.generate(generation);
});
generateOnChange.addEventListener("change", function(event) {
    let isCheckbox = event.target.nodeName === "INPUT";
    if (!isCheckbox) return;
    let generateOnChange = event.target.checked;
    if (generateOnChange) {
        console.log("generate on change");
        tableElement.addEventListener("input", inputListener);
    } else {
        console.log("do not generate on change");
        tableElement.removeEventListener("input", inputListener);
    }
});

},{"./concerns/table":"czXc1"}],"czXc1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// button event listener -> mutation -> dom -> storage
// button event listener -> format -> dom -> storage
parcelHelpers.export(exports, "NewTable", ()=>NewTable);
var _domJs = require("./dom.js");
var _storageJs = require("./storage.js");
var _mutationJs = require("./mutation.js");
var _generationJs = require("./generation.js");
function NewTable(tableDomId, localStorageKey, defaultTable) {
    let dom = (0, _domJs.TableDom)(tableDomId);
    let storage = (0, _storageJs.TableStorage)(localStorageKey, defaultTable);
    let mutation = (0, _mutationJs.TableMutation)(dom, storage).mutate;
    let generate = (0, _generationJs.TableGeneration)(dom, storage);
    /**
	 * Load table data from local storage.
	 */ dom.fromJson(storage.load(defaultTable));
    return {
        mutate: mutation,
        generate: generate
    };
}

},{"./dom.js":"bAa6T","./storage.js":"6Smic","./mutation.js":"9ELvz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./generation.js":"2jY2P"}],"bAa6T":[function(require,module,exports) {
/**
 * Creates a state object.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Functions for creating and manipulating the table DOM.
 * @param {string} tableId
 * @returns
 */ parcelHelpers.export(exports, "TableDom", ()=>TableDom);
function useState(defaultValue = defaultState) {
    let value = defaultValue;
    function getValue() {
        return value;
    }
    function setValue(newValue) {
        value = newValue;
    }
    return [
        getValue,
        setValue
    ];
}
/**
 * Creates a reducer.
 * @param {function} reducer - The reducer function.
 * @param {any} initialState - The initial state.
 * @returns {any[]} The state and dispatch function.
 */ function useReducer(reducer, initialState) {
    let [state, setState] = useState(initialState);
    function dispatch(action) {
        setState(reducer(state(), action));
    }
    return [
        state,
        dispatch
    ];
}
function tableStateReducer(state, action) {
    switch(action.type){
        case "setActiveRow":
            return {
                ...state,
                R: action.value
            };
        case "setActiveColumn":
            return {
                ...state,
                C: action.value
            };
        case "reset":
            return defaultState;
        default:
            return state;
    }
}
function TableDom(tableId) {
    let table = document.getElementById(tableId);
    let initialState = {
        R: 0,
        C: 0
    };
    let [tableState, updateTableState] = useReducer(tableStateReducer, initialState);
    function moveToPreviousColumn() {
        let t = tableState();
        let previousCell = table.rows[t.R].cells[t.C - 1];
        if (previousCell) {
            let previousInput = previousCell.children[0];
            previousInput.focus();
            previousInput.select();
        }
    }
    function moveToNextColumn() {
        let t = tableState();
        let nextCell = table.rows[t.R].cells[t.C + 1];
        if (nextCell) {
            let nextInput = nextCell.children[0];
            nextInput.focus();
            nextInput.select();
        } else {
            // If no next column, for every row, create a new column
            for(let i = 0; i < table.rows.length; i++){
                let row = table.rows[i];
                let newCell = createCell("");
                row.appendChild(newCell);
            }
            let nextCell1 = table.rows[t.R].cells[t.C + 1];
            let nextInput1 = nextCell1.children[0];
            nextInput1.focus();
            nextInput1.select();
        }
    }
    function moveToPreviousRow() {
        let t = tableState();
        let previousRow = table.rows[t.R - 1];
        if (previousRow) {
            let previousCell = previousRow.cells[t.C];
            let previousInput = previousCell.children[0];
            previousInput.focus();
            previousInput.select();
        }
    }
    function moveToNextRow(target) {
        let t = tableState();
        let nextRow = table.rows[t.R + 1];
        if (nextRow) {
            let nextCell = nextRow.cells[t.C];
            let nextInput = nextCell.children[0];
            nextInput.focus();
            nextInput.select();
        } else {
            // If no next row, create a new row and focus the next input.
            let row = target.parentElement.parentElement;
            let newRowData = Array(row.children.length).fill("");
            let newRow = createRow(newRowData);
            table.appendChild(newRow);
            let nextCell1 = newRow.cells[t.C];
            let nextInput1 = nextCell1.children[0];
            nextInput1.focus();
            nextInput1.select();
        }
    }
    table.addEventListener("keydown", function(event) {
        // console.log(event);
        // If the enter key is pressed, focus next row.
        let state = tableState();
        // If the enter key is pressed, focus next row.
        if (event.key === "Enter") {
            event.preventDefault();
            let target = event.target;
            if (target.tagName === "INPUT") {
                // let row = target.parentElement.parentElement;
                // if shift is pressed, focus previous row
                if (event.shiftKey) moveToPreviousRow(target);
                else moveToNextRow(target);
            }
        }
        // If the tab key is pressed, focus next column.
        if (event.key === "Tab") {
            event.preventDefault();
            let target1 = event.target;
            if (target1.tagName === "INPUT") {
                // let row = target.parentElement.parentElement;
                // if shift is pressed, focus previous row
                if (event.shiftKey) moveToPreviousColumn();
                else moveToNextColumn();
            }
        }
    });
    /**
	 * Creates a new input element.
	 * @param {string} value - The value to populate the input with.
	 */ function createInput(value) {
        let input = document.createElement("input");
        function updateSelection(rowIndex, columnIndex) {
            // Update table state
            updateTableState({
                type: "setActiveRow",
                value: rowIndex
            });
            updateTableState({
                type: "setActiveColumn",
                value: columnIndex
            });
            // Update selected attribute
            let prevInput = document.querySelector(`[selected]`);
            if (prevInput) prevInput.removeAttribute("selected");
            input.setAttribute("selected", "true");
        }
        input.addEventListener("focus", function(event) {
            let columnIndex = event.target.parentElement.cellIndex;
            let rowIndex = event.target.parentElement.parentElement.rowIndex;
            updateSelection(rowIndex, columnIndex);
        });
        input.value = value;
        return input;
    }
    function createCell(value) {
        let cell = document.createElement("td");
        cell.appendChild(createInput(value));
        return cell;
    }
    /**
	 * Creates a new table row and adds it to the current row.
	 * @param {string[]} values - The column values to populate the row with.
	 */ function createRow(values) {
        let row = document.createElement("tr");
        for(let colIndex = 0; colIndex < values.length; colIndex++)row.appendChild(createCell(values[colIndex]));
        return row;
    }
    /**
	 * Renders a table from an array of rows.
	 * @param {string[][]} rows - The rows to render.
	 */ function renderTable(rows) {
        let table = document.getElementById("table");
        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++)table.appendChild(createRow(rows[rowIndex]));
    }
    function fromJson(json) {
        let table = document.getElementById(tableId);
        table.innerHTML = "";
        for(let i = 0; i < json.data.length; i++){
            let row = json.data[i];
            let rowElement = document.createElement("tr");
            // let rowAlignmentDirection = json.alignment[i];
            for(let columnIndex = 0; columnIndex < row.length; columnIndex++){
                let cell = document.createElement("td");
                let input = createInput(row[columnIndex]);
                let colAlignmentDirection = json.alignment[columnIndex] ?? "left";
                input.setAttribute("align", colAlignmentDirection);
                input.classList.add(`text-${colAlignmentDirection}`);
                cell.appendChild(input);
                rowElement.appendChild(cell);
            }
            table.appendChild(rowElement);
        }
    }
    /**
	 * Converts the table to JSON.
	 * @returns {string} - The JSON representation of the table.
	 */ function toJson() {
        let table = document.getElementById(tableId);
        let rows = table.rows;
        let columnMinWidth = 3;
        let json = {
            data: [],
            // Column alignment
            alignment: [],
            colMaxChars: []
        };
        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++){
            let row = rows[rowIndex];
            let rowArray = [];
            for(let columnIndex = 0; columnIndex < row.cells.length; columnIndex++){
                let cell = row.cells[columnIndex];
                let input = cell.children[0];
                let text = input.value;
                let textLength = text.length > columnMinWidth ? text.length : columnMinWidth;
                colMaxChars = json.colMaxChars[columnIndex] || columnMinWidth;
                if (textLength > colMaxChars) json.colMaxChars[columnIndex] = textLength;
                rowArray.push(text);
                if (rowIndex === 0) json.alignment.push(input.getAttribute("align") ?? "left");
            }
            json.data.push(rowArray);
        }
        return json;
    // let cols = rows[0].cells;
    // let json = [];
    // for (let i = 0; i < rows.length; i++) {
    // 	let row = {};
    // 	for (let j = 0; j < cols.length; j++) {
    // 		let cell = rows[i].cells[j];
    // 		let input = cell.children[0];
    // 		let text = input.value;
    // 		let align = input.getAttribute('align');
    // 		row[cols[j].innerText] = text;
    // 	}
    // 	json.push(row);
    // }
    // return json;
    }
    /**
	 * Aligns text in the current column.
	 * @param {string} direction - The direction to align the text (left, right, center).
	 */ function align(direction) {
        let table = document.getElementById(tableId);
        let C = tableState().C;
        // get all row columns at the columnIndex
        for(let rowIndex = 0; rowIndex < table.rows.length; rowIndex++){
            let row = table.rows[rowIndex];
            let cell = row.cells[C];
            let input = cell.children[0];
            input.setAttribute("align", direction);
            input.classList.remove("text-left");
            input.classList.remove("text-right");
            input.classList.remove("text-center");
            input.classList.add(`text-${direction}`);
        }
    }
    function insertRow() {
        let table = document.getElementById(tableId);
        let row = table.rows[tableState().R];
        let newRow = createRow(Array(row.children.length).fill(""));
        table.insertBefore(newRow, row);
    }
    function insertColumn() {
        // Insert a new column at the current column index for every row
        let table = document.getElementById(tableId);
        let C = tableState().C;
        for(let rowIndex = 0; rowIndex < table.rows.length; rowIndex++){
            let row = table.rows[rowIndex];
            let cell = createCell("");
            row.insertBefore(cell, row.children[C]);
        }
    // let table = document.getElementById(tableId);
    // let row = table.rows[tableState().R];
    // let newCell = createCell('');
    // row.insertBefore(newCell, row.children[tableState().C]);
    }
    function deleteRow() {
        let table = document.getElementById(tableId);
        // Do not delete the last row
        if (table.rows.length === 1) return;
        let t = tableState();
        table.deleteRow(t.R);
        // Focus on the next row
        // If the last row is deleted, focus on the previous row
        if (t.R >= table.rows.length) t.R--;
        let focusOn = table.rows[t.R].cells[t.C].children[0];
        focusOn.focus();
        focusOn.select();
    }
    function deleteColumn() {
        let table = document.getElementById(tableId);
        // Do not delete the last column
        if (table.rows[0].cells.length === 1) return;
        let t = tableState();
        for(let rowIndex = 0; rowIndex < table.rows.length; rowIndex++){
            let row = table.rows[rowIndex];
            row.deleteCell(t.C);
        }
        // Focus on the next column
        // If the last column is deleted, focus on the previous column
        if (t.C >= table.rows[0].cells.length) t.C--;
        let focusOn = table.rows[t.R].cells[t.C].children[0];
        focusOn.focus();
        focusOn.select();
    }
    return {
        align: align,
        createRow: createRow,
        toJson: toJson,
        fromJson: fromJson,
        renderTable: renderTable,
        insertRow: insertRow,
        insertColumn: insertColumn,
        deleteColumn: deleteColumn,
        deleteRow: deleteRow,
        tableState: tableState
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6Smic":[function(require,module,exports) {
/**
 * Creates a table storage object.
 * @param {string} localStorageKey - The key to use for local storage.
 * @returns {object} The table storage object.
 * @property {function} load - Loads table data from local storage.
 * @property {function} destroy - Removes table data from local storage.
 * @property {function} save - Saves the table data to local storage.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TableStorage", ()=>TableStorage);
function TableStorage(localStorageKey = "tableData", defaultTable = {
    data: [],
    alignment: []
}) {
    /**
	 * Loads table data from local storage.
	 * @param {*} fallbackTable - The table to use if no data is found in local storage.
	 * @returns {*} The table data in JSON.
	 */ function load(fallbackTable = defaultTable) {
        let storedTable = localStorage.getItem(localStorageKey);
        if (storedTable) return JSON.parse(storedTable);
        else return {
            data: fallbackTable.data,
            alignment: fallbackTable.alignment
        };
    }
    /**
	 * Removes table data from local storage.
	 */ function destroy() {
        localStorage.removeItem(localStorageKey);
    }
    /**
	 * Saves the table data to local storage.
	 * @param {*} tableData - The JSON table data to save.
	 */ function save(tableData) {
        localStorage.setItem(localStorageKey, JSON.stringify(tableData));
    }
    return {
        load,
        destroy,
        save,
        defaultTable
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ELvz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TableMutation", ()=>TableMutation);
var _lastActionStorageJs = require("./last-action-storage.js");
function TableMutation(dom, storage) {
    /**
	 * A reducer function to handle saving last dom mutation action to local storage.
	 * @param {string} action
	 */ function mutate(action) {
        let undoButton = document.getElementById("undoButton");
        let [getLastAction, setLastAction] = (0, _lastActionStorageJs.useLastActionStorage)();
        let lastAction = getLastAction();
        // Undo uses the last action saved to local storage, so we don't want to overwrite it.
        if (action === "undo") {
            if (lastAction) {
                undoButton.classList.add("hidden");
                dom.fromJson(lastAction.data);
                storage.save(lastAction.data);
            }
            return;
        }
        let lastActionStorageKey = "lastAction";
        // Get table data and save to local storage before performing action.
        localStorage.setItem(lastActionStorageKey, JSON.stringify({
            data: dom.toJson(),
            action: action
        }));
        undoButton.classList.remove("hidden");
        switch(action){
            // Alignment
            case "alignLeft":
                dom.align("left");
                break;
            case "alignCenter":
                dom.align("center");
                break;
            case "alignRight":
                dom.align("right");
                break;
            // Insert
            case "insertRow":
                dom.insertRow();
                break;
            case "insertColumn":
                dom.insertColumn();
                break;
            // Delete
            case "deleteRow":
                dom.deleteRow();
                break;
            case "deleteColumn":
                dom.deleteColumn();
                break;
            case "resetTable":
                let reset = confirm("Are you sure you want to clear?");
                if (reset) dom.fromJson(storage.defaultTable);
                break;
            default:
                console.log("Action not found");
        }
        storage.save(dom.toJson());
    }
    return {
        mutate: mutate
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./last-action-storage.js":"8UoPN"}],"8UoPN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @returns {object} save, load
 */ parcelHelpers.export(exports, "useLastActionStorage", ()=>useLastActionStorage) // function historyStorage() {
 // 	let historyStorageKey = 'history';
 // 	function save(data) {
 // 		let history = JSON.parse(localStorage.getItem(historyStorageKey));
 // 		if (!history) {
 // 			history = [];
 // 		}
 // 		history.push(data);
 // 		localStorage.setItem(historyStorageKey, JSON.stringify(history));
 // 	}
 // 	function load() {
 // 		let history = JSON.parse(localStorage.getItem(historyStorageKey));
 // 		if (!history) {
 // 			history = [];
 // 		}
 // 		return history;
 // 	}
 // }
;
let lastActionStorageKey = "lastAction";
function useLastActionStorage() {
    /**
	 * @param {*} data
	 */ function setLastAction(data) {
        localStorage.setItem(lastActionStorageKey, JSON.stringify(data));
    }
    /**
	 * @returns {object} lastAction
	 */ function getLastAction() {
        let lastAction = JSON.parse(localStorage.getItem(lastActionStorageKey));
        if (!lastAction) lastAction = [];
        return lastAction;
    }
    return [
        getLastAction,
        setLastAction
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jY2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TableGeneration", ()=>TableGeneration);
var _markdownJs = require("./formats/markdown.js");
var _htmlJs = require("./formats/html.js");
function TableGeneration(dom, storage) {
    return function generate(generation) {
        let tableJson = dom.toJson();
        storage.save(tableJson);
        let generateElement = document.getElementById("generated");
        switch(generation){
            case "markdown":
                generateElement.setAttribute("format", "markdown");
                generateElement.innerHTML = (0, _markdownJs.markdownFormat)(tableJson);
                break;
            case "html":
                generateElement.setAttribute("format", "html");
                generateElement.innerHTML = (0, _htmlJs.htmlFormat)(tableJson);
                break;
            case "json":
                generateElement.setAttribute("format", "json");
                generateElement.innerHTML = JSON.stringify(tableJson, null, 2);
                break;
            default:
                console.log("Action not found");
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./formats/markdown.js":"9cABV","./formats/html.js":"heL1V"}],"9cABV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Generate markdown table in compact format.
 * @param {*} table - The table data to convert to markdown.
 * @returns {string} The markdown table.
 */ parcelHelpers.export(exports, "markdownFormat", ()=>markdownFormat);
const testObject = {
    data: [
        [
            "Let’s get table’n",
            "Persist me!"
        ],
        [
            "",
            ""
        ],
        [
            "",
            ""
        ],
        [
            "",
            ""
        ]
    ],
    alignment: [
        null,
        null,
        null,
        null
    ]
};
function markdownFormat(table = testObject) {
    let markdown = "";
    for(let rowIndex = 0; rowIndex < table.data.length; rowIndex++){
        let cols = table.data[rowIndex];
        for(let columnIndex = 0; columnIndex < cols.length; columnIndex++){
            let text = cols[columnIndex];
            let paddingRequired = table.colMaxChars[columnIndex] - text.length;
            // if (paddingRequired > 0) {
            // 	text += ' '.repeat(paddingRequired);
            // }
            // markdown += `| ${text} `;
            let align = table.alignment[columnIndex];
            if (align == "left") {
                if (paddingRequired > 0) text += " ".repeat(paddingRequired);
                markdown += `| ${text} `;
            } else if (align == "right") {
                if (paddingRequired > 0) text = " ".repeat(paddingRequired) + text;
                markdown += `| ${text} `;
            } else {
                let leftPadding = Math.floor(paddingRequired / 2);
                let rightPadding = paddingRequired - leftPadding;
                if (leftPadding > 0) text = " ".repeat(leftPadding) + text;
                if (rightPadding > 0) text += " ".repeat(rightPadding);
                markdown += `| ${text} `;
            }
        }
        markdown += "|\n";
        if (rowIndex == 0) {
            for(let columnIndex1 = 0; columnIndex1 < cols.length; columnIndex1++){
                let align1 = table.alignment[columnIndex1];
                if (align1 == "left") {
                    let lines = "-".repeat(table.colMaxChars[columnIndex1]);
                    markdown += `|:${lines}:`;
                } else if (align1 == "right") {
                    let lines1 = "-".repeat(table.colMaxChars[columnIndex1] + 1);
                    markdown += `|${lines1}:`;
                } else if (align1 == "center") {
                    let lines2 = "-".repeat(table.colMaxChars[columnIndex1]);
                    markdown += `|:${lines2}:`;
                } else {
                    let lines3 = "-".repeat(table.colMaxChars[columnIndex1] + 2);
                    markdown += `|${lines3}`;
                }
            }
            markdown += "|\n";
        }
    }
    return markdown;
}
function getCompact() {
    let table = document.getElementById("table");
    let rows = table.rows;
    let cols = rows[0].cells;
    let markdown = "";
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < cols.length; j++){
            let cell = rows[i].cells[j];
            let input = cell.children[0];
            let text = input.value;
            let align = input.getAttribute("align");
            if (align == "left") markdown += `| ${text}`;
            else if (align == "right") markdown += `| ${text} `;
            else markdown += `| ${text} `;
        }
        markdown += "|\n";
    }
    console.log(markdown);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heL1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlFormat", ()=>htmlFormat);
function h(string) {
    return string.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n";
}
function htmlFormat(tableJson) {
    let html = "";
    for (let row of tableJson.data){
        html += h("<tr>");
        for (let cell of row)html += "	" + h(`<td>${cell}</td>`);
        html += h("</tr>");
    }
    return html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
