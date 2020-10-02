// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/ingredients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var my_ingredients = ["protein powder", "avocado", "chia", "lemon", "greens", "cucumber", "milk", "ghee", "garlic", "shrimp", "eggs", "vinegar", "canned fish", "nuts", "fish", "hemp", "turmeric", "chicken", "green powder", "coconut milk"];
var _default = my_ingredients;
exports.default = _default;
},{}],"data/recipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cards = [{
  num: "1",
  name: "Spa Day Fab Four Smoothie",
  ingredients: ["protein powder", "avocado", "chia", "lemon", "greens", "cucumber", "milk"],
  category: "Breakfast",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678425/food-app/spa_vlhziz.png",
  page: 164,
  url: "https://kellyleveque.com/recent-posts/2015/11/15/spa-smoothie"
}, {
  num: "2",
  name: "Shrimp Scampi with Zoodles",
  ingredients: ["ghee", "garlic", "shrimp", "greens", "zucchini", "lemon"],
  category: "Dinner",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678424/food-app/zoodles_scampi_dnm9df.png",
  page: 165,
  url: "https://www.instagram.com/p/BiDgSB0H7lL/?hl=en"
}, {
  num: "3",
  name: "Flaky Tuna and Toasted Walnut Salad",
  ingredients: ["vinegar", "greens", "canned fish", "fish", "nuts"],
  category: "Lunch",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678423/food-app/flaky_tuna_svqzdw.png",
  page: 181,
  url: "https://kellyleveque.com/recent-posts/marisas-carnitas-kale-salad-w3xm3"
}, {
  num: "4",
  name: "Original Green Fab Four Smoothie",
  ingredients: ["protein powder", "avocado", "chia", "greens", "milk"],
  category: "Breakfast",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678418/food-app/fab_four_hspgnm.png",
  page: 167,
  url: "https://kellyleveque.com/recent-posts/fab-4-smoothies-to-try-this-summer"
}, {
  num: "5",
  name: "Ribboned Rainbow Salad Over Hummus",
  ingredients: ["zucchini", "carrot", "cucumber", "greens", "radish", "hemp"],
  category: "Lunch",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678421/food-app/ribbon_rup562.png",
  page: 288,
  url: "https://homesweethunter.com/2020/02/02/the-healthy-lifestyle-book-everyone-should-read/"
}, {
  num: "6",
  name: "Garlic Salmon and Brussel Sprouts",
  ingredients: ["brussels sprouts", "garlic", "salmon"],
  category: "Dinner",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678418/food-app/garlic_salmon_guaaad.png",
  page: 263,
  url: "https://kellyleveque.com/recent-posts/2016/3/29/roasted-salmon-with-lemon-and-dill-over-arugula-and-mache"
}, {
  num: "7",
  name: "Green Goddess Fab Four Smoothie",
  ingredients: ["protein powder", "avocado", "chia", "greens", "milk", "green powder", "lemon"],
  category: "Breakfast",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678419/food-app/goddess_smoothie_ohwvwr.png",
  page: 221,
  url: "https://kellyleveque.com/recent-posts/2015/7/9/the-bewell-smoothie"
}, {
  num: "8",
  name: "Coconut Tzatziki Chicken Skewers w/ Cucumber Salad",
  ingredients: ["coconut milk", "lemon", "turmeric", "chicken", "coconut yogurt", "cucumbers", "lemon"],
  category: "Dinner",
  img: "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678420/food-app/coconut_tzatziki_fv5mok.png",
  page: 230,
  url: "https://www.thedoctorstv.com/recipes/kelly-leveque-body-love-every-day-recipes"
}, {
  num: "9",
  name: "Creamy Mocha Fab Four Smoothie",
  ingredients: ["collagen", "coffee", "butter", "mct oil", "acacia fiber", "cinnamon", "cacao", "milk"],
  category: "Breakfast",
  img: null,
  page: 264,
  url: null
}];
var _default = cards;
exports.default = _default;
},{}],"data/shopping_list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shopping_list = [];
var _default = shopping_list;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _ingredients = _interopRequireDefault(require("./data/ingredients"));

var _recipes = _interopRequireDefault(require("./data/recipes"));

var _shopping_list = _interopRequireDefault(require("./data/shopping_list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fetch("https://github.com/mashablair/body-love-food-app/blob/master/data.js")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     console.log("https://github.com/mashablair/body-love-food-app/blob/master/data.js");
//   });
// import images from "./images/*.png";
// import "./images/*.png";
var cards_container = document.querySelector("#cards");
var message = document.querySelector("#filter_message");
var search = document.querySelector("#input1");

var checker = function checker(arr, target) {
  return target.every(function (v) {
    return arr.includes(v);
  });
};

function displayCards(arr) {
  // create html
  var html;

  if (arr.length > 0) {
    html = "<ul class=\"d-flex flex-wrap\">" + arr.map(function (item) {
      var ready_to_cook = false; // see if it's ready to cook

      if (checker(_ingredients.default, item.ingredients)) {
        ready_to_cook = true;
      }

      return "<div class=\"card\" style=\"width: 18rem;\">\n                  <img src='".concat(item.img ? item.img : "https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678419/food-app/no_image_okp23a.png", "' class=\"card-img-top\" style=\"height:220px\" alt=\"\">\n                  <img src=\"https://res.cloudinary.com/djnvzdffx/image/upload/c_thumb,w_200,g_face/v1601678423/food-app/ready_mlgzlo.png\" aria-label=\"ready to cook\" title=\"ready to cook\" class='ready ").concat(ready_to_cook ? "" : "d-none", " '>\n                  <div class=\"card-body d-flex flex-column justify-content-end\">\n                    <span class=\"badge badge-light w-25 my-2\">").concat(item.category, "</span>\n                    <h3 class=\"card-title h5\">").concat(item.name, "</h3>\n                    <div class=\"btn-group action_btns\" role=\"group\">\n                      <a href=\"").concat(item.url, "\" class=\"btn btn-secondary ").concat(item.url ? "" : "d-none", "\" target=\"_blank\">Recipe</a>\n                      <button class=\"btn btn-outline-dark show_missing\" data-calculated=\"false\" aria-label=\"show missing ingredients\" title=\"show missing ingredients\" data-num=\"").concat(item.num, "\">\uD83D\uDD75\uFE0F\u200D</button>\n                      <button class=\"btn btn-outline-dark add_to_cart\" aria-label=\"add missing ingredients to a shopping list\" title=\"add missing ingredients to a shopping list\" data-num=\"").concat(item.num, "\">Add \uD83D\uDED2</button>\n                    </div>\n                  </div>\n                </div>");
    }).join("");
  } else {
    html = "<div class=\"alert alert-primary\" role=\"alert\">Sorry, no recipes found based on your search...</div>";
    filter_message.textContent = "";
  }

  cards_container.innerHTML = html;
}

displayCards(_recipes.default);

function displayIngredients(arr, idUL, idContainer) {
  arr.sort();
  var html = "<ul id=\"".concat(idUL, "\">") + arr.map(function (item) {
    return "<li>".concat(item, "</li>");
  }).join("") + "</ul>";
  document.querySelector("#".concat(idContainer)).innerHTML = html;
}

displayIngredients(_ingredients.default, "ingredUl", "ingredients");

function filterResults() {
  var result = [];

  _recipes.default.forEach(function (card) {
    // see if card is a match
    if (checker(_ingredients.default, card.ingredients)) {
      result.push(card);
    }
  });

  console.log("result: " + result);
  displayCards(result);
}

function filterByCat(event, category) {
  event.preventDefault();
  var result = [];

  _recipes.default.forEach(function (card) {
    if (card.category === category) {
      result.push(card);
    }
  });

  displayCards(result);
  filter_message.innerHTML = "Filtered recipes by <b>".concat(category, "</b>");
}

document.addEventListener("click", function (e) {
  if (e.target.matches("#filter")) {
    e.preventDefault();
    filterResults();
    filter_message.innerHTML = "Filtered recipes by <b>My Ingredients</b>";
  }

  if (e.target.matches("#showAll")) {
    displayCards(_recipes.default);
    filter_message.textContent = "All recipes";
  }

  if (e.target.matches("#hideAll")) {
    cards_container.innerHTML = "";
    filter_message.textContent = "";
  }

  if (e.target.matches("#show_book")) {
    document.querySelector("#book").classList.remove("d-none");
  }

  if (e.target.matches("#close_book")) {
    console.log("hi");
    document.querySelector("#book").classList.add("d-none");
  }

  if (e.target.matches("#breakfast")) {
    filterByCat(e, "Breakfast");
  }

  if (e.target.matches("#lunch")) {
    filterByCat(e, "Lunch");
  }

  if (e.target.matches("#dinner")) {
    filterByCat(e, "Dinner");
  }

  if (e.target.matches(".add_to_cart")) {
    // find card in [cards]
    var card = _recipes.default.find(function (item) {
      return item.num === e.target.dataset.num;
    }); // we only need items that are not in 'ingredients'


    card.ingredients.forEach(function (item) {
      if (!_ingredients.default.includes(item)) {
        _shopping_list.default.push({
          ingredient: "".concat(item),
          recipe: "".concat(card.name)
        });
      }
    });
    console.log(_shopping_list.default); // remove duplicates from 'shopping list'
    // shopping_list = [...new Set(shopping_list)];
    // // loop through 'shopping_list' to see which cards have those ingredients
    // shopping_list.forEach((item) => {
    //   console.log(item);
    //   cards.forEach((card) => {
    //     if (card.ingredients.includes(item)) {
    //       console.log(card.name);
    //     }
    //   });
    // });
    // // display shopping list
    // displayIngredients(shopping_list, "shoppingUL", "shopping_list");

    var html = "<ul id=\"shoppingUL\">" + _shopping_list.default.map(function (item) {
      return "<li class=\"mt-2\"><b>".concat(item.ingredient, "</b> <span class=\"badge bg-primary\">").concat(item.recipe, "</span></li>");
    }).join("") + "</ul>";
    document.querySelector("#shopping_list").innerHTML = html;
  }

  if (e.target.matches(".show_missing")) {
    if (e.target.dataset.calculated === "false") {
      var card = _recipes.default.find(function (item) {
        return item.num === e.target.dataset.num;
      });

      var missing_items = []; // we only need items that are not in 'ingredients'

      card.ingredients.forEach(function (item) {
        if (!_ingredients.default.includes(item)) {
          missing_items.push(item);
        }
      });
      var html;

      if (missing_items.length > 0) {
        missing_items.sort();
        html = "<div class=\"missing_ingredients card alert-info\">\n            <button type=\"button\" class=\"close close_missing\" aria-label=\"Close\">&times;</button>\n            <div class=\"mb-2\">You are missing these items:</div>\n            <ul class=\"missing_ul\">" + missing_items.map(function (item) {
          return "<li>".concat(item, "</li>");
        }).join("") + "</ul><div class='mt-2'>Add them to your 🛒</div></div>";
      } else {
        html = "<div class=\"missing_ingredients card alert-success\">\n                <button type=\"button\" class=\"close close_missing\" aria-label=\"Close\">&times;</button>\n                <div>You have all ingredients for this recipe! \uD83D\uDC4D</div></div>";
      }

      e.target.closest(".card-body").innerHTML += html;
      e.target.dataset.calculated = true;
    }
  }

  if (e.target.matches(".close_missing")) {
    e.target.closest(".missing_ingredients").classList.add("d-none");
  }
});
document.querySelector("#one_food").addEventListener("submit", function (e) {
  e.preventDefault();
  var one_ingredient = "".concat(search.value);
  var result = [];

  _recipes.default.forEach(function (card) {
    if (card.ingredients.includes(one_ingredient)) {
      result.push(card);
    }
  });

  displayCards(result);
  filter_message.innerHTML = "Recipes based on your search for <b>\"".concat(one_ingredient, "\"</b>");
  search.value = "";
});
},{"./data/ingredients":"data/ingredients.js","./data/recipes":"data/recipes.js","./data/shopping_list":"data/shopping_list.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55014" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map