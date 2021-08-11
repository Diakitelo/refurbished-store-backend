module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u4g4");


/***/ }),

/***/ "3SxR":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/auth");

/***/ }),

/***/ "48JS":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/cloudinary");

/***/ }),

/***/ "99Vv":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/fields");

/***/ }),

/***/ "DBBG":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/schema");

/***/ }),

/***/ "Kfaf":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/session");

/***/ }),

/***/ "VnZ6":
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "u4g4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ keystone; });

// EXTERNAL MODULE: external "@keystone-next/auth"
var auth_ = __webpack_require__("3SxR");

// EXTERNAL MODULE: external "@keystone-next/keystone/schema"
var schema_ = __webpack_require__("DBBG");

// EXTERNAL MODULE: external "@keystone-next/keystone/session"
var session_ = __webpack_require__("Kfaf");

// EXTERNAL MODULE: external "dotenv/config"
var config_ = __webpack_require__("VnZ6");

// EXTERNAL MODULE: external "@keystone-next/fields"
var fields_ = __webpack_require__("99Vv");

// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/User.ts


const User = Object(schema_["list"])({
  // access
  // ui
  fields: {
    firstName: Object(fields_["text"])({
      isRequired: true
    }),
    name: Object(fields_["text"])(),
    lastName: Object(fields_["text"])(),
    email: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    password: Object(fields_["password"])(),
    isAcceptedNewsletter: Object(fields_["checkbox"])() // todo: add roles, cart and orders

  }
});
// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/Brand.ts


const Brand = Object(schema_["list"])({
  // todo
  // access
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    products: Object(fields_["relationship"])({
      ref: 'Product.brand',
      many: true
    })
  }
});
// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/Category.ts


const Category = Object(schema_["list"])({
  // todo
  // access
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    photo: Object(fields_["relationship"])({
      ref: 'CategoryImage.category',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {
          fields: ['image', 'altText']
        },
        inlineEdit: {
          fields: ['image', 'altText']
        }
      }
    }),
    products: Object(fields_["relationship"])({
      ref: 'Product.category',
      many: true
    })
  }
});
// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/Product.ts


const Product = Object(schema_["list"])({
  // TODO:
  // access:
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    slug: Object(fields_["text"])({
      isRequired: true
    }),
    color: Object(fields_["text"])({
      isRequired: true
    }),
    memory: Object(fields_["integer"])({
      isRequired: true
    }),
    state: Object(fields_["text"])({
      isRequired: true
    }),
    shortDescription: Object(fields_["text"])({
      isRequired: true
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    photos: Object(fields_["relationship"])({
      ref: 'ProductImage.product',
      many: true,
      ui: {
        displayMode: 'select'
      }
    }),
    brand: Object(fields_["relationship"])({
      ref: 'Brand.products',
      many: true,
      ui: {
        displayMode: 'select'
      }
    }),
    category: Object(fields_["relationship"])({
      ref: 'Category.products',
      many: true,
      ui: {
        displayMode: 'select'
      }
    }),
    quantity: Object(fields_["integer"])({
      isRequired: true
    }),
    price: Object(fields_["integer"])({
      isRequired: true
    }),
    originalPrice: Object(fields_["integer"])({
      isRequired: true
    })
  }
});
// EXTERNAL MODULE: external "@keystone-next/cloudinary"
var cloudinary_ = __webpack_require__("48JS");

// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/ProductImage.ts




const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: process.env.CLOUDINARY_API_FOLDER
};
const ProductImage = Object(schema_["list"])({
  fields: {
    image: Object(cloudinary_["cloudinaryImage"])({
      cloudinary,
      label: 'source'
    }),
    altText: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    product: Object(fields_["relationship"])({
      ref: 'Product.photos'
    })
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product']
    }
  }
});
// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/schemas/CategoryImage.ts




const CategoryImage_cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: process.env.CLOUDINARY_API_FOLDER
};
const CategoryImage = Object(schema_["list"])({
  fields: {
    image: Object(cloudinary_["cloudinaryImage"])({
      cloudinary: CategoryImage_cloudinary,
      label: 'source'
    }),
    altText: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    category: Object(fields_["relationship"])({
      ref: 'Category.photo'
    })
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'category']
    }
  }
});
// CONCATENATED MODULE: /Users/admin/Documents/projetPerso/phone-store-backend/keystone.ts










const databaseURL = process.env.MONGODB_URI || 'mongodb://localhost/keystone-phone-store';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  // How long they stay signed in?
  secret: process.env.COOKIE_SECRET
};
const {
  withAuth
} = Object(auth_["createAuth"])({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'] // TODO: add initial roles her

  }
});
/* harmony default export */ var keystone = (withAuth(Object(schema_["config"])({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL
  },
  lists: Object(schema_["createSchema"])({
    // schema items here
    User: User,
    Brand: Brand,
    Category: Category,
    Product: Product,
    ProductImage: ProductImage,
    CategoryImage: CategoryImage
  }),
  ui: {
    // Show the UI only for poeple who pass this test
    isAccessAllowed: ({
      session
    }) => !!(session !== null && session !== void 0 && session.data)
  },
  session: Object(session_["withItemData"])(Object(session_["statelessSessions"])(sessionConfig), {
    // GraphQL Query
    User: 'id name email'
  })
})));
// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ var _keystone_api_build = __webpack_exports__["default"] = (function (req, res) {
  return res.status(500);
});

/***/ })

/******/ });