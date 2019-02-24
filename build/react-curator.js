(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Curator"] = factory(require("react"), require("react-dom"));
	else
		root["Curator"] = factory(root["React"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Curator.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/curator-core/build/curator-core.js":
/*!*********************************************************!*\
  !*** ./node_modules/curator-core/build/curator-core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/curator-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/curator-core.js":
/*!*****************************!*\
  !*** ./src/curator-core.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Snapper core is responsible for handling all logic for interacting with the grid
// except:
// 1. direct ui manipulation (responsibility of the wrapper)
// 2. internal grid determination (responsibility of the algorithm)
// 3. Maintenence of state (responsibility of the wrapper)


/* harmony default export */ __webpack_exports__["default"] = ({
  getItemStyles: function getItemStyles() {
    return {
      boxSizing: 'border-box',
      position: 'absolute'
    };
  },
  getEmptyGrid: function getEmptyGrid(gridRows) {
    return Array.from(Array(gridRows), function (_) {
      return [];
    });
  },
  /// 
  /// Calculate the position of the item within the grid
  ///
  getItemPosition: function getItemPosition(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top, renderMode) {
    var flex = renderMode === _options__WEBPACK_IMPORTED_MODULE_1__["renderModeType"].flex; // even though the container could change and these calculations need to rerun on that event,
    // it looks much nicer if theyre percentages on the widgets - even if it temporarily gives a 1px gap
    // and then closes the gap on mouse up, than having px values 

    if (flex) {
      return _objectSpread({}, this.getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top), this.getItemPositionPercentages(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top));
    } else {
      return this.getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top);
    }
  },
  getItemPositionPercentages: function getItemPositionPercentages(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top) {
    var leftPct = left / gridCols * 100;
    var topPct = top / gridRows * 100;
    var widthPct = width / gridCols * 100;
    var heightPct = height / gridRows * 100;
    var ending = '%';
    return {
      leftPct: leftPct,
      widthPct: widthPct,
      topPct: topPct,
      heightPct: heightPct,
      ending: ending
    };
  },
  getItemPositionPixels: function getItemPositionPixels(gridWidth, gridHeight, gridRows, gridCols, width, height, left, top) {
    var widthPx = gridWidth / gridCols * width;
    var heightPx = gridHeight / gridRows * height;
    var topPx = gridHeight / gridRows * top;
    var leftPx = gridWidth / gridCols * left;
    var ending = 'px';
    return {
      widthPx: widthPx,
      heightPx: heightPx,
      topPx: topPx,
      leftPx: leftPx,
      ending: ending
    };
  },
  updateMovedItem: function updateMovedItem(item, gridSizing, gridOptions) {
    var newX = item.newX,
        newY = item.newY,
        newWidth = item.newWidth,
        newHeight = item.newHeight;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx,
        gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var renderMode = gridOptions.renderMode;

    var movedItem = _objectSpread({}, item);

    if (!(newWidth && newHeight)) {
      // todo
      console.error("Item ".concat(key, " does not have a newWidth or newHeight value. Unable to correctly resize item"));
      return item;
    } // update the values with the set new values


    movedItem.x = newX;
    movedItem.y = newY;
    movedItem.width = newWidth;
    movedItem.height = newHeight;
    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, movedItem.width, movedItem.height, movedItem.x, movedItem.y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, movedItem.styles, position);
    movedItem.position = _objectSpread({}, position);
    movedItem.styles = _objectSpread({}, styles);
    return movedItem;
  },
  getUpdatedMovedItems: function getUpdatedMovedItems(items, draggedItemId, newTopPx, newLeftPx, newWidthPx, newHeightPx, gridSizing, gridOptions) {
    var _this = this;

    return items.forEach(function (item) {
      var movedItem = _this.updateMovedItem(item, gridSizing, gridOptions);

      if (key === draggedItemId) {
        // todo sync the %
        var position = _objectSpread({}, movedItem.position, {
          ending: 'px',
          topPx: newTopPx,
          leftPx: newLeftPx,
          widthPx: newWidthPx,
          heightPx: newHeightPx
        });

        var styles = _this.getItemPositionStyles(gridOptions, movedItem.styles, position);

        movedItem.position = _objectSpread({}, position);
        movedItem.styles = _objectSpread({}, styles);
      }

      return movedItem;
    });
  },
  getUpdatedGridSizeItems: function getUpdatedGridSizeItems(items, gridOptions, gridSizing) {
    var _this2 = this;

    var ignoreIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;
    var heightPx = gridSizing.heightPx,
        widthPx = gridSizing.widthPx;
    return items.map(function (item) {
      if (ignoreIds.indexOf(item.id) > -1) return;

      var position = _this2.getItemPosition(widthPx, heightPx, gridRows, gridColumns, item.width, item.height, item.x, item.y, renderMode);

      var styles = _this2.getItemPositionStyles(gridOptions, item.styles, position);

      return _objectSpread({}, item, {
        position: position,
        styles: styles
      });
    });
  },
  getGridBoundaries: function getGridBoundaries(gridSizing) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    return {
      leftBoundary: 0,
      rightBoundary: widthPx,
      topBoundary: 0,
      bottomBoundary: heightPx
    };
  },
  getItemSizing: function getItemSizing(itemProps, gridSizing) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var width = itemProps.width,
        height = itemProps.height;
    var pxPerColumn = widthPx / gridColumns;
    var pxPerRow = heightPx / gridRows;
    var itemWidthPx = width * pxPerColumn;
    var itemHeightPx = height * pxPerRow;
    return {
      itemWidthPx: itemWidthPx,
      itemHeightPx: itemHeightPx
    };
  },
  calculateGridMatrixSize: function calculateGridMatrixSize(items, gridOptions, gridSizing) {
    var itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';

    if (!(canResizeX || canResizeY)) {
      return {
        rows: gridRows,
        columns: gridColumns
      };
    }

    var rowsRequired = 0;
    var columnsRequired = 0;
    items.forEach(function (item) {
      var rightBoundary = item.x + item.width;
      var bottomBoundary = item.y + item.height;
      if (rightBoundary > columnsRequired) columnsRequired = rightBoundary;
      if (bottomBoundary > rowsRequired) rowsRequired = bottomBoundary;
    });
    return {
      rows: canResizeY ? Math.max(rowsRequired, gridRows) : gridRows,
      columns: canResizeX ? Math.max(columnsRequired, gridColumns) : gridColumns
    };
  },
  calculateGridSize: function calculateGridSize(gridSizing, gridOptions, newRowCount, newColumnCount) {
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var newGridWidth = widthPx / gridColumns * newColumnCount;
    var newGridHeight = heightPx / gridRows * newRowCount;
    return {
      newGridWidth: newGridWidth,
      newGridHeight: newGridHeight
    };
  },
  calculateMovementChange: function calculateMovementChange(itemProps, gridOptions, gridSizing, movementDetails) {
    var gridResizeable = gridOptions.itemsCanResizeGrid;
    var canResizeX = gridResizeable && gridOptions.resizeGridDirections !== 'y';
    var canResizeY = gridResizeable && gridOptions.resizeGridDirections !== 'x';
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var xDiff = movementDetails.currentMouseX - movementDetails.initialMouseX;
    var yDiff = movementDetails.currentMouseY - movementDetails.initialMouseY;
    var newLeftPx = movementDetails.initialLeft + xDiff;
    var newTopPx = movementDetails.initialTop + yDiff;
    var newX = Math.round(newLeftPx / pxPerColumn);
    var newY = Math.round(newTopPx / pxPerRow);

    if (newX < 0) {
      newX = 0;
    } else if (newX + 1 > gridOptions.gridColumns && !canResizeX) {
      newX = gridOptions.gridColumns - 1;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY + 1 > gridOptions.gridRows && !canResizeY) {
      newY = gridOptions.gridRows - 1;
    }

    return {
      newX: newX,
      newY: newY,
      newLeftPx: newLeftPx,
      newTopPx: newTopPx
    };
  },
  calculateResizeChange: function calculateResizeChange(itemProps, gridOptions, gridSizing, movementDetails) {
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var xDiff = movementDetails.currentMouseX - movementDetails.initialMouseX;
    var yDiff = movementDetails.currentMouseY - movementDetails.initialMouseY;
    var newWidthPx = movementDetails.initialWidth + xDiff;
    var newHeightPx = movementDetails.initialHeight + yDiff;
    var newWidth = Math.round(newWidthPx / pxPerColumn);
    var newHeight = Math.round(newHeightPx / pxPerRow);

    if (newWidthPx < pxPerColumn) {
      newWidth = 1;
      newWidthPx = pxPerColumn;
    }

    if (newHeightPx < pxPerRow) {
      newHeight = 1;
      newHeightPx = pxPerRow;
    }

    return {
      newWidthPx: newWidthPx,
      newHeightPx: newHeightPx,
      newWidth: newWidth,
      newHeight: newHeight,
      newLeftPx: itemProps.position.leftPx,
      newTopPx: itemProps.position.topPx
    };
  },
  calculatePositionChange: function calculatePositionChange(itemProps, state) {
    var gridSizing = state.gridSizing,
        gridOptions = state.gridOptions;
    var pxPerColumn = gridSizing.widthPx / gridOptions.gridColumns;
    var pxPerRow = gridSizing.heightPx / gridOptions.gridRows;
    var newWidthPx = pxPerColumn * itemProps.width;
    var newHeightPx = pxPerRow * itemProps.height;
    var newLeftPx = pxPerColumn * itemProps.x;
    var newTopPx = pxPerRow * itemProps.y;
    return {
      newWidthPx: newWidthPx,
      newHeightPx: newHeightPx,
      newLeftPx: newLeftPx,
      newTopPx: newTopPx,
      newX: itemProps.x,
      newY: itemProps.y,
      newWidth: itemProps.width,
      newHeight: itemProps.height
    };
  },
  getNoMovementResult: function getNoMovementResult(state, itemProps, movementChange) {
    var targetItem = _objectSpread({}, itemProps, {
      position: _objectSpread({}, itemProps.position, {
        ending: 'px',
        topPx: Math.max(0, movementChange.newTopPx),
        leftPx: Math.max(0, movementChange.newLeftPx),
        widthPx: Math.max(0, movementChange.newWidthPx),
        heightPx: Math.max(0, movementChange.newHeightPx)
      })
    });

    var updatedItems = state.items.map(function (item) {
      if (item.id == targetItem.id) {
        return targetItem;
      }

      return item;
    });
    return {
      success: true,
      // todo should this be false?
      grid: state.grid,
      updatedItems: updatedItems,
      targetItem: targetItem,
      gridSizing: state.gridSizing,
      movementChange: movementChange,
      itemsMoved: false
    };
  },
  itemHasMoved: function itemHasMoved(itemProps, movementChange) {
    return movementChange.newX != itemProps.x || movementChange.newY != itemProps.y;
  },
  itemHasResized: function itemHasResized(itemProps, movementChange) {
    return movementChange.newWidth !== itemProps.width || movementChange.newHeight !== itemProps.height;
  },
  checkProposedGridSizing: function checkProposedGridSizing(state, proposedGridColumns, proposedGridRows) {
    var gridOptions = state.gridOptions;
    var itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].y;
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].x;
    if (!canResizeX && proposedGridColumns !== gridOptions.gridColumns || gridOptions.gridColumns < 1) throw 'Invalid grid column proposition from algorithm';else if (!canResizeY && proposedGridRows !== gridOptions.gridRows || gridOptions.gridRows < 1) throw 'Invalid grid row proposition from algorithm';
  },
  getPlaceholderStyles: function getPlaceholderStyles(position) {
    return _objectSpread({}, _options__WEBPACK_IMPORTED_MODULE_1__["defaultPlaceholderStyles"], {
      left: "".concat(position.leftPx, "px"),
      top: "".concat(position.topPx, "px"),
      width: "".concat(position.widthPx, "px"),
      height: "".concat(position.heightPx, "px")
    });
  },
  addItemToGrid: function addItemToGrid(itemProps, state) {
    var movementChange = {
      newX: itemProps.x,
      newY: itemProps.y,
      newWidth: itemProps.width,
      newHeight: itemProps.height,
      newTopPx: itemProps.position.topPx,
      newLeftPx: itemProps.position.leftPx,
      newWidthPx: itemProps.position.widthPx,
      newHeightPx: itemProps.position.heightPx
    };
    return this.onItemMovement(itemProps, state, movementChange);
  },
  movementIsWithinBounds: function movementIsWithinBounds(movementChange, gridOptions) {
    var gridColumns = gridOptions.gridColumns,
        gridRows = gridOptions.gridRows,
        itemsCanResizeGrid = gridOptions.itemsCanResizeGrid,
        resizeGridDirections = gridOptions.resizeGridDirections;
    var newX = movementChange.newX,
        newY = movementChange.newY,
        newWidth = movementChange.newWidth,
        newHeight = movementChange.newHeight;
    var canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
    var canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';
    return (canResizeX || newX + newWidth <= gridColumns) && (canResizeY || newY + newHeight <= gridRows) && newX >= 0 && newY >= 0 && newWidth > 0 && newHeight > 0;
  },
  onItemMovement: function onItemMovement(itemProps, state, movementChange) {
    var _this3 = this;

    var renderMode = state.gridOptions.renderMode;
    var gridOptions = state.gridOptions;
    var defaultResult = this.getNoMovementResult(state, itemProps, movementChange);

    var draggedItem = _objectSpread({}, itemProps);

    if (!this.movementIsWithinBounds(movementChange, gridOptions)) {
      return defaultResult;
    }

    var dragResult = gridOptions.algo.run(state, draggedItem, movementChange.newX, movementChange.newY, movementChange.newWidth, movementChange.newHeight);

    if (!dragResult.success) {
      return defaultResult;
    }

    var gridResized = dragResult.gridColumns !== gridOptions.gridColumns || dragResult.gridRows !== gridOptions.gridRows;
    var gridWidth = state.gridSizing.widthPx;
    var gridHeight = state.gridSizing.heightPx;

    if (gridResized) {
      this.checkProposedGridSizing(state, dragResult.gridColumns, dragResult.gridRows);
      var newSize = this.calculateGridSize(state.gridSizing, gridOptions, dragResult.gridRows, dragResult.gridColumns);
      gridWidth = newSize.newGridWidth;
      gridHeight = newSize.newGridHeight;
    }

    var updatedItems = Object.keys(dragResult.itemsToMove).map(function (key) {
      var movedItem = dragResult.itemsToMove[key];
      var _movedItem$meta = movedItem.meta,
          isDragging = _movedItem$meta.isDragging,
          isResizing = _movedItem$meta.isResizing;

      var position = _this3.getItemPosition(gridWidth, gridHeight, dragResult.gridRows, dragResult.gridColumns, movedItem.width, movedItem.height, movedItem.x, movedItem.y, renderMode); // without these the item will jitter


      if (movedItem.id === draggedItem.id && (isDragging || isResizing)) {
        var placeholderStyles = _this3.getPlaceholderStyles(position);

        movedItem.meta = _objectSpread({}, movedItem.meta, {
          placeholderStyles: placeholderStyles
        });
        movedItem.position = _objectSpread({}, movedItem.position, {
          ending: 'px',
          // movedItem.meta.isDragging || movedItem.meta.isResizing ? 'px' : '%',
          topPx: movementChange.newTopPx,
          leftPx: movementChange.newLeftPx,
          widthPx: movementChange.newWidthPx,
          heightPx: movementChange.newHeightPx
        });
        movedItem.styles = _this3.getItemPositionStyles(gridOptions, movedItem.styles, movedItem.position);
      } else {
        movedItem.position = position;
        movedItem.styles = _this3.getItemPositionStyles(gridOptions, movedItem.styles, position);
      }

      return movedItem;
    });
    return {
      success: dragResult.success,
      grid: state.grid,
      updatedItems: updatedItems,
      itemsMoved: Object.keys(dragResult.itemsToMove).length > 1,
      targetItem: draggedItem,
      movementChange: movementChange,
      gridSizing: {
        gridRows: dragResult.gridRows,
        gridColumns: dragResult.gridColumns,
        heightPx: gridHeight,
        widthPx: gridWidth
      }
    };
  },
  onItemPositionChanged: function onItemPositionChanged(itemProps, previousItemProps, state) {
    var positionChange = this.calculatePositionChange(itemProps, state);

    if (!this.positionHasChanged(itemProps, previousItemProps)) {
      return this.getNoMovementResult(state, previousItemProps, positionChange);
    }

    return this.onItemMovement(previousItemProps, state, positionChange);
  },
  positionHasChanged: function positionHasChanged(itemProps, previousItemProps) {
    return itemProps.x !== previousItemProps.x || itemProps.y !== previousItemProps.y || itemProps.width !== previousItemProps.width || itemProps.height !== previousItemProps.height;
  },
  onItemDragStart: function onItemDragStart(itemProps) {
    if (itemProps.glued) return {
      item: itemProps,
      success: false
    };
    var placeholderStyles = this.getPlaceholderStyles(itemProps.position);

    var item = _objectSpread({}, itemProps, {
      meta: _objectSpread({}, itemProps.meta, {
        isDragging: true,
        placeholderStyles: placeholderStyles
      })
    });

    return {
      item: item,
      success: true
    };
  },
  ///
  /// Handles all drag logic
  ///
  onItemDrag: function onItemDrag(itemProps, state, movementDetails) {
    var movementChange = _objectSpread({}, this.calculateMovementChange(itemProps, state.gridOptions, state.gridSizing, movementDetails), {
      newWidth: itemProps.width,
      newHeight: itemProps.height,
      newWidthPx: itemProps.position.widthPx,
      newHeightPx: itemProps.position.heightPx
    });

    if (!itemProps.meta.isDragging || itemProps.glued) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    } else if (!this.itemHasMoved(itemProps, movementChange)) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    }

    return this.onItemMovement(itemProps, state, movementChange);
  },
  onItemDragStop: function onItemDragStop(itemProps, items, gridWidth, gridHeight, gridOptions, gridSizing) {
    var width = itemProps.width,
        height = itemProps.height,
        x = itemProps.x,
        y = itemProps.y;
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;

    var meta = _objectSpread({}, itemProps.meta, {
      isDragging: false
    });

    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, width, height, x, y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, itemProps.styles, position);

    var updatedItem = _objectSpread({}, itemProps, {
      position: position,
      styles: styles,
      meta: meta
    });

    return updatedItem;
  },
  onItemResizeStart: function onItemResizeStart(itemProps) {
    if (itemProps.glued) {
      return {
        item: itemProps,
        success: false
      };
    }

    var item = _objectSpread({}, itemProps, {
      meta: _objectSpread({}, itemProps.meta, {
        isResizing: true
      })
    });

    return {
      item: item,
      success: true
    };
  },
  onItemResize: function onItemResize(itemProps, state, movementDetails) {
    var movementChange = _objectSpread({}, this.calculateResizeChange(itemProps, state.gridOptions, state.gridSizing, movementDetails), {
      newX: itemProps.x,
      newY: itemProps.y,
      newLeftPx: itemProps.position.leftPx,
      newTopPx: itemProps.position.topPx
    });

    if (!itemProps.meta.isResizing || itemProps.glued) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    } else if (!this.itemHasResized(itemProps, movementChange)) {
      return this.getNoMovementResult(state, itemProps, movementChange);
    }

    return this.onItemMovement(itemProps, state, movementChange);
  },
  onItemResizeStop: function onItemResizeStop(itemProps, items, gridWidth, gridHeight, gridOptions, gridSizing) {
    var width = itemProps.width,
        height = itemProps.height,
        x = itemProps.x,
        y = itemProps.y;
    var gridRows = gridOptions.gridRows,
        gridColumns = gridOptions.gridColumns,
        renderMode = gridOptions.renderMode;

    var meta = _objectSpread({}, itemProps.meta, {
      isResizing: false
    });

    var position = this.getItemPosition(gridWidth, gridHeight, gridRows, gridColumns, width, height, x, y, renderMode);
    var styles = this.getItemPositionStyles(gridOptions, itemProps.styles, position);

    var updatedItem = _objectSpread({}, itemProps, {
      position: position,
      styles: styles,
      meta: meta
    });

    return updatedItem;
  },
  ///
  /// Updates the internal 2d grid with the new item position. itemProps should contain the current values, prior to being updated
  ///
  updateGridWithItemMovement: function updateGridWithItemMovement(grid, itemProps, oldX, oldY, oldWidth, oldHeight) {
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    this.ensureGridHasRow(grid, y);
    this.setGridWithValue(grid, id, oldX, oldY, oldWidth, oldHeight, undefined, false);
    this.setGridWithValue(grid, id, x, y, width, height, itemProps, true);
  },
  updateGridWithItem: function updateGridWithItem(grid, itemProps) {
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    this.setGridWithValue(grid, id, x, y, width, height, itemProps, true);
  },
  removeGridItem: function removeGridItem(state, itemProps) {
    var _this4 = this;

    var grid = state.grid,
        items = state.items,
        gridOptions = state.gridOptions,
        gridSizing = state.gridSizing;
    var id = itemProps.id,
        x = itemProps.x,
        y = itemProps.y,
        width = itemProps.width,
        height = itemProps.height;
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx;
    var renderMode = gridOptions.renderMode;
    this.ensureGridHasRow(grid, y);
    this.setGridWithValue(grid, id, x, y, width, height, undefined, true); // todo handle grid resize

    var itemsReverted = gridOptions.algo.onGridItemRemoved(state, itemProps);
    var updatedItems = items.map(function (item) {
      var revertDetails = itemsReverted.find(function (i) {
        return i.id === item.id;
      });
      if (!revertDetails) return null;
      var x = revertDetails.x,
          y = revertDetails.y,
          width = revertDetails.width,
          height = revertDetails.height;

      var movedItem = _objectSpread({}, item, {
        x: x,
        y: y,
        width: width,
        height: height
      });

      var position = _this4.getItemPosition(widthPx, heightPx, gridOptions.gridRows, gridOptions.gridColumns, width, height, x, y, renderMode);

      movedItem.position = position;
      movedItem.styles = _this4.getItemPositionStyles(gridOptions, movedItem.styles, position);
      return movedItem;
    }).filter(function (item) {
      return item != null;
    });
    return {
      updatedItems: updatedItems
    };
  },
  ensureGridHasRow: function ensureGridHasRow(grid, rowIndex) {
    if (!grid[rowIndex]) grid[rowIndex] = [];
  },
  ///
  /// Set the internal 2d grid with the value specified within the { x, x + width, y, y + height } range as long as the cell does not contain a different item already
  ///
  setGridWithValue: function setGridWithValue(grid, id, x, y, width, height, value) {
    var overwrite = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

    for (var j = y; j < y + height; j++) {
      for (var i = x; i < x + width; i++) {
        var cellValue = grid[j][i];
        if (!_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].isDefined(cellValue) || cellValue.id == id || overwrite) grid[j][i] = value;
      }
    }
  },
  getItemPositionStyles: function getItemPositionStyles(gridOptions, styles, position) {
    var _ref = styles || {},
        transform = _ref.transform,
        left = _ref.left,
        top = _ref.top,
        otherStyles = _objectWithoutProperties(_ref, ["transform", "left", "top"]);

    if (position.ending === '%') {
      return _objectSpread({}, otherStyles, {
        left: "".concat(position.leftPct, "%"),
        top: "".concat(position.topPct, "%"),
        width: "".concat(position.widthPct, "%"),
        height: "".concat(position.heightPct, "%")
      });
    } else if (gridOptions.enableCSS3) {
      return _objectSpread({}, otherStyles, {
        width: "".concat(position.widthPx, "px"),
        height: "".concat(position.heightPx, "px"),
        transform: "translate(".concat(position.leftPx, "px, ").concat(position.topPx, "px)")
      });
    }

    return _objectSpread({}, otherStyles, {
      left: "".concat(position.leftPx, "px"),
      top: "".concat(position.topPx, "px"),
      width: "".concat(position.widthPx, "px"),
      height: "".concat(position.heightPx, "px")
    });
  },
  ///
  /// Gets the internal grid x,y equivalent for the supplied top & left px values
  ///
  getGridXY: function getGridXY(gridSizing, topPx, leftPx) {
    var widthPx = gridSizing.widthPx,
        heightPx = gridSizing.heightPx,
        gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var x = this.getGridPosition(gridWidth, leftPx, gridColumns);
    var y = this.getGridPosition(gridHeight, topPx, gridRows);
    return {
      x: x,
      y: y
    };
  },
  getGridWH: function getGridWH(gridWidth, gridHeight, widthPx, heightPx, gridSizing) {
    var gridRows = gridSizing.gridRows,
        gridColumns = gridSizing.gridColumns;
    var width = this.getGridPosition(gridWidth, widthPx, gridColumns);
    var height = this.getGridPosition(gridHeight, heightPx, gridRows);
    return {
      width: width,
      height: height
    };
  },
  getGridPosition: function getGridPosition(gridPixels, itemPixels, matrixLevels) {
    return Math.max(1, Math.round(itemPixels / gridPixels * matrixLevels));
  },
  getBoundaryLimitedSizing: function getBoundaryLimitedSizing(currentLeftPx, currentTopPx, currentWidthPx, currentHeightPx, boundaries, gridOptions) {
    var resizeGridDirections = gridOptions.resizeGridDirections,
        itemsCanResizeGrid = gridOptions.itemsCanResizeGrid;
    var rightBoundary = boundaries.rightBoundary,
        bottomBoundary = boundaries.bottomBoundary;
    var xResizeable = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].y;
    var yResizeable = itemsCanResizeGrid && resizeGridDirections !== _options__WEBPACK_IMPORTED_MODULE_1__["resizeOptions"].x;
    var widthPx = xResizeable ? currentWidthPx : Math.min(currentWidthPx, rightBoundary - currentLeftPx);
    var heightPx = yResizeable ? currentHeightPx : Math.min(currentHeightPx, bottomBoundary - currentTopPx);
    return {
      widthPx: widthPx,
      heightPx: heightPx
    };
  }
});

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDefined = function isDefined(item) {
  return typeof item !== 'undefined' && item != null;
};

var objIsInArray = function objIsInArray(array, obj, key) {
  var objKeyValue = obj[key];
  return array.find(function (item) {
    return item[key] === objKeyValue;
  }) != null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isDefined: isDefined,
  objIsInArray: objIsInArray
});

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: renderModeType, resizeOptions, defaultItemOptions, defaultGridOptions, defaultPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModeType", function() { return renderModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeOptions", function() { return resizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultItemOptions", function() { return defaultItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function() { return defaultGridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPlaceholderStyles", function() { return defaultPlaceholderStyles; });
var renderModeType = {
  // flex = percentages
  flex: 'flex',
  // fixed = px
  fixed: 'fixed'
};
var resizeOptions = {
  // boxes are fixed width
  none: 'none',
  // resize x direction only
  x: 'x',
  // resize y direction 
  y: 'y',
  // resize both
  both: 'both'
};
var defaultItemOptions = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  className: 'grid-item',
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  displayResize: true,
  position: {
    topPx: 0,
    leftPx: 0,
    topPct: 0,
    leftPct: 0,
    widthPx: 0,
    heightPx: 0,
    widthPct: 0,
    heightPct: 0,
    ending: 'px'
  },
  meta: {
    isDragging: false,
    isResizing: false
  }
};
var defaultPlaceholderStyles = {
  position: 'absolute',
  border: '2px dashed grey',
  zIndex: -1
};
var defaultGridOptions = {
  gridColumns: 12,
  gridRows: 12,
  width: '100%',
  height: '100%',
  className: 'curator-grid',
  // whether to render the grid items using percentages or pixel values
  renderMode: renderModeType.flex,
  // when a dragged element pushes others out of the way, they may return to their 
  // old spot if dragging continues
  stickyElements: true,
  // show the grid lines: not currently supported
  //showGrid: false,
  // can resize the grid by dragging elements
  itemsCanResizeGrid: true,
  // which directions the grid can resize in (either dragging handle or items)
  resizeGridDirections: resizeOptions.y,
  // move items using transitions
  useTransition: true,
  // specific options for transitions
  transitionDuration: 600,
  // On an individual transition completed for an element (multiple fires when multiple elements moved)
  onTransitionComplete: function onTransitionComplete(element, details, eventIfFired) {},
  // On all transitions completed for a given element
  onAllTransitionsComplete: function onAllTransitionsComplete(element, details, eventIfFired) {},
  // class name for the resize handle
  resizeClassName: 'resize-handle',
  enableCSS3: true,
  algo: null
};


/***/ })

/******/ });
});
//# sourceMappingURL=curator-core.js.map

/***/ }),

/***/ "./node_modules/curator-core/build/helpers.js":
/*!****************************************************!*\
  !*** ./node_modules/curator-core/build/helpers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/helpers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDefined = function isDefined(item) {
  return typeof item !== 'undefined' && item != null;
};

var objIsInArray = function objIsInArray(array, obj, key) {
  var objKeyValue = obj[key];
  return array.find(function (item) {
    return item[key] === objKeyValue;
  }) != null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isDefined: isDefined,
  objIsInArray: objIsInArray
});

/***/ })

/******/ });
});
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/curator-core/build/options.js":
/*!****************************************************!*\
  !*** ./node_modules/curator-core/build/options.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: renderModeType, resizeOptions, defaultItemOptions, defaultGridOptions, defaultPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModeType", function() { return renderModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeOptions", function() { return resizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultItemOptions", function() { return defaultItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function() { return defaultGridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPlaceholderStyles", function() { return defaultPlaceholderStyles; });
var renderModeType = {
  // flex = percentages
  flex: 'flex',
  // fixed = px
  fixed: 'fixed'
};
var resizeOptions = {
  // boxes are fixed width
  none: 'none',
  // resize x direction only
  x: 'x',
  // resize y direction 
  y: 'y',
  // resize both
  both: 'both'
};
var defaultItemOptions = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  className: 'grid-item',
  glued: false,
  // not yet supported but is partially done in the algo, do not alter
  visible: true,
  displayResize: true,
  position: {
    topPx: 0,
    leftPx: 0,
    topPct: 0,
    leftPct: 0,
    widthPx: 0,
    heightPx: 0,
    widthPct: 0,
    heightPct: 0,
    ending: 'px'
  },
  meta: {
    isDragging: false,
    isResizing: false
  }
};
var defaultPlaceholderStyles = {
  position: 'absolute',
  border: '2px dashed grey',
  zIndex: -1
};
var defaultGridOptions = {
  gridColumns: 12,
  gridRows: 12,
  width: '100%',
  height: '100%',
  className: 'curator-grid',
  // whether to render the grid items using percentages or pixel values
  renderMode: renderModeType.flex,
  // when a dragged element pushes others out of the way, they may return to their 
  // old spot if dragging continues
  stickyElements: true,
  // show the grid lines: not currently supported
  //showGrid: false,
  // can resize the grid by dragging elements
  itemsCanResizeGrid: true,
  // which directions the grid can resize in (either dragging handle or items)
  resizeGridDirections: resizeOptions.y,
  // move items using transitions
  useTransition: true,
  // specific options for transitions
  transitionDuration: 600,
  // On an individual transition completed for an element (multiple fires when multiple elements moved)
  onTransitionComplete: function onTransitionComplete(element, details, eventIfFired) {},
  // On all transitions completed for a given element
  onAllTransitionsComplete: function onAllTransitionsComplete(element, details, eventIfFired) {},
  // class name for the resize handle
  resizeClassName: 'resize-handle',
  enableCSS3: true,
  algo: null
};


/***/ })

/******/ });
});
//# sourceMappingURL=options.js.map

/***/ }),

/***/ "./node_modules/curator-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/curator-core/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const options = __webpack_require__(/*! ./build/options */ "./node_modules/curator-core/build/options.js")

module.exports = __webpack_require__(/*! ./build/curator-core */ "./node_modules/curator-core/build/curator-core.js").default
module.exports.helpers = __webpack_require__(/*! ./build/helpers */ "./node_modules/curator-core/build/helpers.js").default
module.exports.defaultGridOptions = options.defaultGridOptions
module.exports.defaultItemOptions = options.defaultItemOptions
module.exports.renderModeType = options.renderModeType
module.exports.resizeOptions = options.resizeOptions
module.exports.defaultPlaceholderStyles = options.defaultPlaceholderStyles

/***/ }),

/***/ "./node_modules/react-draggable/dist/react-draggable.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-draggable/dist/react-draggable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! react-dom */ "react-dom"), __webpack_require__(/*! react */ "react")) :
	undefined;
}(this, (function (ReactDOM,React) { 'use strict';

	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	{
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	{
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	{
	  var invariant$1 = invariant_1;
	  var warning$1 = warning_1;
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant_1(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ( true && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning_1(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunction_1.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunction_1.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning_1(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction_1.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	}
	});

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ( true && module.exports) {
			module.exports = classNames;
		} else if (false) {} else {
			window.classNames = classNames;
		}
	}());
	});

	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}

	function isFunction(func /*: any*/) /*: boolean*/ {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}

	function isNum(num /*: any*/) /*: boolean*/ {
	  return typeof num === 'number' && !isNaN(num);
	}

	function int(a /*: string*/) /*: number*/ {
	  return parseInt(a, 10);
	}

	function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
	  if (props[propName]) {
	    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}

	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	function getPrefix() /*: string*/ {
	  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

	  var style = window.document.documentElement.style;

	  if (prop in style) return '';

	  for (var i = 0; i < prefixes.length; i++) {
	    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
	  }

	  return '';
	}

	function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
	}

	function kebabToTitleCase(str /*: string*/) /*: string*/ {
	  var out = '';
	  var shouldCapitalize = true;
	  for (var i = 0; i < str.length; i++) {
	    if (shouldCapitalize) {
	      out += str[i].toUpperCase();
	      shouldCapitalize = false;
	    } else if (str[i] === '-') {
	      shouldCapitalize = true;
	    } else {
	      out += str[i];
	    }
	  }
	  return out;
	}

	// Default export is the prefix itself, like 'Moz', 'Webkit', etc
	// Note that you may have to re-test for certain things; for instance, Chrome 50
	// can handle unprefixed `transform`, but not unprefixed `user-select`
	var browserPrefix = getPrefix();

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	/*:: import type {ControlPosition, MouseTouchEvent} from './types';*/


	var matchesSelectorFunc = '';
	function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = findInArray(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return isFunction(el[method]);
	    });
	  }

	  // Might not be found entirely (not an Element?) - in that case, bail
	  // $FlowIgnore: Doesn't think elements are indexable
	  if (!isFunction(el[matchesSelectorFunc])) return false;

	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc](selector);
	}

	// Works up the tree to the draggable itself attempting to match selector.
	function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
	  var node = el;
	  do {
	    if (matchesSelector(node, selector)) return true;
	    if (node === baseNode) return false;
	    node = node.parentNode;
	  } while (node);

	  return false;
	}

	function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}

	function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}

	function outerHeight(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height += int(computedStyle.borderTopWidth);
	  height += int(computedStyle.borderBottomWidth);
	  return height;
	}

	function outerWidth(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width += int(computedStyle.borderLeftWidth);
	  width += int(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node /*: HTMLElement*/) /*: number*/ {
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height -= int(computedStyle.paddingTop);
	  height -= int(computedStyle.paddingBottom);
	  return height;
	}

	function innerWidth(node /*: HTMLElement*/) /*: number*/ {
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width -= int(computedStyle.paddingLeft);
	  width -= int(computedStyle.paddingRight);
	  return width;
	}

	// Get from offsetParent
	function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
	  var isBody = offsetParent === offsetParent.ownerDocument.body;
	  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

	  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

	  return { x: x, y: y };
	}

	function createCSSTransform(_ref) /*: Object*/ {
	  var x = _ref.x,
	      y = _ref.y;

	  // Replace unitless items with px
	  return defineProperty({}, browserPrefixToKey('transform', browserPrefix), 'translate(' + x + 'px,' + y + 'px)');
	}

	function createSVGTransform(_ref3) /*: string*/ {
	  var x = _ref3.x,
	      y = _ref3.y;

	  return 'translate(' + x + ',' + y + ')';
	}

	function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
	  return e.targetTouches && findInArray(e.targetTouches, function (t) {
	    return identifier === t.identifier;
	  }) || e.changedTouches && findInArray(e.changedTouches, function (t) {
	    return identifier === t.identifier;
	  });
	}

	function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
	  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}

	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.

	// Note we're passing `document` b/c we could be iframed
	function addUserSelectStyles(doc /*: ?Document*/) {
	  if (!doc) return;
	  var styleEl = doc.getElementById('react-draggable-style-el');
	  if (!styleEl) {
	    styleEl = doc.createElement('style');
	    styleEl.type = 'text/css';
	    styleEl.id = 'react-draggable-style-el';
	    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
	    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
	    doc.getElementsByTagName('head')[0].appendChild(styleEl);
	  }
	  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
	}

	function removeUserSelectStyles(doc /*: ?Document*/) {
	  try {
	    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
	    // $FlowIgnore: IE
	    if (doc.selection) {
	      // $FlowIgnore: IE
	      doc.selection.empty();
	    } else {
	      window.getSelection().removeAllRanges(); // remove selection caused by scroll
	    }
	  } catch (e) {
	    // probably IE
	  }
	}

	function styleHacks() /*: Object*/ {
	  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}

	function addClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.add(className);
	  } else {
	    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
	      el.className += ' ' + className;
	    }
	  }
	}

	function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.remove(className);
	  } else {
	    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
	  }
	}

	/*:: import type Draggable from '../Draggable';*/
	/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
	/*:: import type DraggableCore from '../DraggableCore';*/


	function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [x, y];

	  // Clone new bounds
	  var bounds = draggable.props.bounds;

	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = findDOMNode(draggable);

	  if (typeof bounds === 'string') {
	    var ownerDocument = node.ownerDocument;

	    var ownerWindow = ownerDocument.defaultView;
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = ownerDocument.querySelector(bounds);
	    }
	    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
	      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = ownerWindow.getComputedStyle(node);
	    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
	      top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
	      right: innerWidth(boundNode) - outerWidth(node) - node.offsetLeft + int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
	      bottom: innerHeight(boundNode) - outerHeight(node) - node.offsetTop + int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
	    };
	  }

	  // Keep x and y below right and bottom limits...
	  if (isNum(bounds.right)) x = Math.min(x, bounds.right);
	  if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);

	  // But above left and top limits.
	  if (isNum(bounds.left)) x = Math.max(x, bounds.left);
	  if (isNum(bounds.top)) y = Math.max(y, bounds.top);

	  return [x, y];
	}

	function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}

	function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}

	function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}

	// Get {x, y} positions from event.
	function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
	  var touchObj = typeof touchIdentifier === 'number' ? getTouch(e, touchIdentifier) : null;
	  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
	  var node = findDOMNode(draggableCore);
	  // User can provide an offsetParent if desired.
	  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
	  return offsetXYFromParent(touchObj || e, offsetParent);
	}

	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
	  var state = draggable.state;
	  var isStart = !isNum(state.lastX);
	  var node = findDOMNode(draggable);

	  if (isStart) {
	    // If this is our first move, use the x and y as last coords.
	    return {
	      node: node,
	      deltaX: 0, deltaY: 0,
	      lastX: x, lastY: y,
	      x: x, y: y
	    };
	  } else {
	    // Otherwise calculate proper values.
	    return {
	      node: node,
	      deltaX: x - state.lastX, deltaY: y - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      x: x, y: y
	    };
	  }
	}

	// Create an data exposed by <Draggable>'s events
	function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
	  var scale = draggable.props.scale;
	  return {
	    node: coreData.node,
	    x: draggable.state.x + coreData.deltaX / scale,
	    y: draggable.state.y + coreData.deltaY / scale,
	    deltaX: coreData.deltaX / scale,
	    deltaY: coreData.deltaY / scale,
	    lastX: draggable.state.x,
	    lastY: draggable.state.y
	  };
	}

	// A lot faster than stringify/parse
	function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}

	function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
	  var node = ReactDOM.findDOMNode(draggable);
	  if (!node) {
	    throw new Error('<DraggableCore>: Unmounted during event!');
	  }
	  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
	  return node;
	}

	/*eslint no-console:0*/
	function log() {
	}

	/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


	// Simple abstraction for dragging events names.
	/*:: import type {Element as ReactElement} from 'react';*/
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};

	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;

	/*:: type DraggableCoreState = {
	  dragging: boolean,
	  lastX: number,
	  lastY: number,
	  touchIdentifier: ?number
	};*/
	/*:: export type DraggableBounds = {
	  left: number,
	  right: number,
	  top: number,
	  bottom: number,
	};*/
	/*:: export type DraggableData = {
	  node: HTMLElement,
	  x: number, y: number,
	  deltaX: number, deltaY: number,
	  lastX: number, lastY: number,
	};*/
	/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
	/*:: export type ControlPosition = {x: number, y: number};*/


	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//

	/*:: export type DraggableCoreProps = {
	  allowAnyClick: boolean,
	  cancel: string,
	  children: ReactElement<any>,
	  disabled: boolean,
	  enableUserSelectHack: boolean,
	  offsetParent: HTMLElement,
	  grid: [number, number],
	  handle: string,
	  onStart: DraggableEventHandler,
	  onDrag: DraggableEventHandler,
	  onStop: DraggableEventHandler,
	  onMouseDown: (e: MouseEvent) => void,
	};*/

	var DraggableCore = function (_React$Component) {
	  inherits(DraggableCore, _React$Component);

	  function DraggableCore() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, DraggableCore);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: NaN, lastY: NaN,
	      touchIdentifier: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);

	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

	      // Get nodes. Be sure to grab relative document (could be iframed)
	      var thisNode = ReactDOM.findDOMNode(_this);
	      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
	        throw new Error('<DraggableCore> not mounted on DragStart!');
	      }
	      var ownerDocument = thisNode.ownerDocument;

	      // Short circuit if handle or cancel prop was provided and selector doesn't match.

	      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !matchesSelectorAndParentsTo(e.target, _this.props.handle, thisNode) || _this.props.cancel && matchesSelectorAndParentsTo(e.target, _this.props.cancel, thisNode)) {
	        return;
	      }

	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      var touchIdentifier = getTouchIdentifier(e);
	      _this.setState({ touchIdentifier: touchIdentifier });

	      // Get the current drag point from the event. This is used as the offset.
	      var position = getControlPosition(e, touchIdentifier, _this);
	      if (position == null) return; // not possible but satisfies flow
	      var x = position.x,
	          y = position.y;

	      // Create an event object with all the data parents need to make a decision here.

	      var coreEvent = createCoreData(_this, x, y);

	      // Call event handler. If it returns explicit false, cancel.
	      log('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;

	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) addUserSelectStyles(ownerDocument);

	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,

	        lastX: x,
	        lastY: y
	      });

	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      addEvent(ownerDocument, dragEventFor.move, _this.handleDrag);
	      addEvent(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {

	      // Prevent scrolling on mobile devices, like ipad/iphone.
	      if (e.type === 'touchmove') e.preventDefault();

	      // Get the current drag point from the event. This is used as the offset.
	      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;

	      // Snap to grid if prop has been provided

	      if (Array.isArray(_this.props.grid)) {
	        var _deltaX = x - _this.state.lastX,
	            _deltaY = y - _this.state.lastY;

	        var _snapToGrid = snapToGrid(_this.props.grid, _deltaX, _deltaY);

	        var _snapToGrid2 = slicedToArray(_snapToGrid, 2);

	        _deltaX = _snapToGrid2[0];
	        _deltaY = _snapToGrid2[1];

	        if (!_deltaX && !_deltaY) return; // skip useless drag
	        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
	      }

	      var coreEvent = createCoreData(_this, x, y);

	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        try {
	          // $FlowIgnore
	          _this.handleDragStop(new MouseEvent('mouseup'));
	        } catch (err) {
	          // Old browsers
	          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
	          // I see why this insanity was deprecated
	          // $FlowIgnore
	          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	          _this.handleDragStop(event);
	        }
	        return;
	      }

	      _this.setState({
	        lastX: x,
	        lastY: y
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;

	      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;

	      var coreEvent = createCoreData(_this, x, y);

	      var thisNode = ReactDOM.findDOMNode(_this);
	      if (thisNode) {
	        // Remove user-select hack
	        if (_this.props.enableUserSelectHack) removeUserSelectStyles(thisNode.ownerDocument);
	      }

	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: NaN,
	        lastY: NaN
	      });

	      // Call event handler
	      _this.props.onStop(e, coreEvent);

	      if (thisNode) {
	        removeEvent(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
	        removeEvent(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
	      }
	    }, _this.onMouseDown = function (e) {
	      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

	      return _this.handleDragStart(e);
	    }, _this.onMouseUp = function (e) {
	      dragEventFor = eventsFor.mouse;

	      return _this.handleDragStop(e);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;

	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;

	      return _this.handleDragStop(e);
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      var thisNode = ReactDOM.findDOMNode(this);
	      if (thisNode) {
	        var ownerDocument = thisNode.ownerDocument;

	        removeEvent(ownerDocument, eventsFor.mouse.move, this.handleDrag);
	        removeEvent(ownerDocument, eventsFor.touch.move, this.handleDrag);
	        removeEvent(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
	        removeEvent(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
	        if (this.props.enableUserSelectHack) removeUserSelectStyles(ownerDocument);
	      }
	    }

	    // Same as onMouseDown (start drag), but now consider this a touch device.

	  }, {
	    key: 'render',
	    value: function render() {
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return React.cloneElement(React.Children.only(this.props.children), {
	        style: styleHacks(this.props.children.props.style),

	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.onMouseDown,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.onMouseUp,
	        onTouchEnd: this.onTouchEnd
	      });
	    }
	  }]);
	  return DraggableCore;
	}(React.Component);

	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: propTypes.bool,

	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   */
	  disabled: propTypes.bool,

	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: propTypes.bool,

	  /**
	   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
	   * instead of using the parent node.
	   */
	  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
	    if (props[propName] && props[propName].nodeType !== 1) {
	      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
	    }
	  },

	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   */
	  grid: propTypes.arrayOf(propTypes.number),

	  /**
	   * `scale` specifies the scale of the area you are dragging inside of. It allows
	   * the drag deltas to scale correctly with how far zoomed in/out you are.
	   */
	  scale: propTypes.number,

	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: propTypes.string,

	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *                     <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: propTypes.string,

	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onStart: propTypes.func,

	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onDrag: propTypes.func,

	  /**
	   * Called when dragging stops.
	   * If this function returns the boolean false, the drag will remain active.
	   */
	  onStop: propTypes.func,

	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (as there is internal use of onMouseDown)
	   */
	  onMouseDown: propTypes.func,

	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: dontSetMe,
	  style: dontSetMe,
	  transform: dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  offsetParent: null,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};

	/*:: import type {DraggableEventHandler} from './utils/types';*/
	/*:: import type {Element as ReactElement} from 'react';*/
	/*:: type DraggableState = {
	  dragging: boolean,
	  dragged: boolean,
	  x: number, y: number,
	  slackX: number, slackY: number,
	  isElementSVG: boolean
	};*/


	//
	// Define <Draggable>
	//

	/*:: export type DraggableProps = {
	  ...$Exact<DraggableCoreProps>,
	  axis: 'both' | 'x' | 'y' | 'none',
	  bounds: DraggableBounds | string | false,
	  defaultClassName: string,
	  defaultClassNameDragging: string,
	  defaultClassNameDragged: string,
	  defaultPosition: ControlPosition,
	  position: ControlPosition,
	  scale: number
	};*/

	var Draggable = function (_React$Component) {
	  inherits(Draggable, _React$Component);

	  function Draggable(props /*: DraggableProps*/) {
	    classCallCheck(this, Draggable);

	    var _this = possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

	    _this.onDragStart = function (e, coreData) {

	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, createDraggableData(_this, coreData));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;

	      _this.setState({ dragging: true, dragged: true });
	    };

	    _this.onDrag = function (e, coreData) {
	      if (!_this.state.dragging) return false;

	      var uiData = createDraggableData(_this, coreData);

	      var newState /*: $Shape<DraggableState>*/ = {
	        x: uiData.x,
	        y: uiData.y
	      };

	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _x = newState.x,
	            _y = newState.y;

	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.

	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY;

	        // Get bound position. This will ceil/floor the x and y within the boundaries.

	        var _getBoundPosition = getBoundPosition(_this, newState.x, newState.y),
	            _getBoundPosition2 = slicedToArray(_getBoundPosition, 2),
	            newStateX = _getBoundPosition2[0],
	            newStateY = _getBoundPosition2[1];

	        newState.x = newStateX;
	        newState.y = newStateY;

	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	        newState.slackX = _this.state.slackX + (_x - newState.x);
	        newState.slackY = _this.state.slackY + (_y - newState.y);

	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiData.x = newState.x;
	        uiData.y = newState.y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      }

	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiData);
	      if (shouldUpdate === false) return false;

	      _this.setState(newState);
	    };

	    _this.onDragStop = function (e, coreData) {
	      if (!_this.state.dragging) return false;

	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, createDraggableData(_this, coreData));
	      if (shouldStop === false) return false;

	      var newState /*: $Shape<DraggableState>*/ = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      };

	      // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	      var controlled = Boolean(_this.props.position);
	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            _x2 = _this$props$position.x,
	            _y2 = _this$props$position.y;

	        newState.x = _x2;
	        newState.y = _y2;
	      }

	      _this.setState(newState);
	    };

	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,

	      // Whether or not we have been dragged before.
	      dragged: false,

	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,

	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,

	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };
	    return _this;
	  }

	  createClass(Draggable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
	        // eslint-disable-next-line
	        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof window.SVGElement !== 'undefined' && ReactDOM.findDOMNode(this) instanceof window.SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps /*: Object*/) {
	      // Set x/y if position has changed
	      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() /*: ReactElement<any>*/ {
	      var _classNames;

	      var style = {},
	          svgTransform = null;

	      // If this is controlled, we don't want to move it - unless it's dragging.
	      var controlled = Boolean(this.props.position);
	      var draggable = !controlled || this.state.dragging;

	      var position = this.props.position || this.props.defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: canDragX(this) && draggable ? this.state.x : position.x,

	        // Set top if vertical drag is enabled
	        y: canDragY(this) && draggable ? this.state.y : position.y
	      };

	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = createSVGTransform(transformOpts);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = createCSSTransform(transformOpts);
	      }

	      var _props = this.props,
	          defaultClassName = _props.defaultClassName,
	          defaultClassNameDragging = _props.defaultClassNameDragging,
	          defaultClassNameDragged = _props.defaultClassNameDragged;


	      var children = React.Children.only(this.props.children);

	      // Mark with class while dragging
	      var className = classnames(children.props.className || '', defaultClassName, (_classNames = {}, defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return React.createElement(
	        DraggableCore,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        React.cloneElement(children, {
	          className: className,
	          style: _extends({}, children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	  return Draggable;
	}(React.Component);

	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, DraggableCore.propTypes, {

	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: propTypes.oneOf(['both', 'x', 'y', 'none']),

	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: propTypes.oneOfType([propTypes.shape({
	    left: propTypes.number,
	    right: propTypes.number,
	    top: propTypes.number,
	    bottom: propTypes.number
	  }), propTypes.string, propTypes.oneOf([false])]),

	  defaultClassName: propTypes.string,
	  defaultClassNameDragging: propTypes.string,
	  defaultClassNameDragged: propTypes.string,

	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: propTypes.shape({
	    x: propTypes.number,
	    y: propTypes.number
	  }),

	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: propTypes.shape({
	    x: propTypes.number,
	    y: propTypes.number
	  }),

	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: dontSetMe,
	  style: dontSetMe,
	  transform: dontSetMe
	});
	Draggable.defaultProps = _extends({}, DraggableCore.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: { x: 0, y: 0 },
	  position: null,
	  scale: 1
	});

	// Previous versions of this lib exported <Draggable> as the root export. As to not break
	// them, or TypeScript, we export *both* as the root and as 'default'.
	// See https://github.com/mzabriskie/react-draggable/pull/254
	// and https://github.com/mzabriskie/react-draggable/issues/266
	Draggable.default = Draggable;
	Draggable.DraggableCore = DraggableCore;

	return Draggable;

})));
//# sourceMappingURL=react-draggable.js.map


/***/ }),

/***/ "./src/Curator.jsx":
/*!*************************!*\
  !*** ./src/Curator.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Curator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GridItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridItem.jsx */ "./src/GridItem.jsx");
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! curator-core */ "./node_modules/curator-core/index.js");
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(curator_core__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* 
    React-Curator: A wrapper around the curator-core library
    Copyright (C) 2019 Code Trove Limited

    This program is licensed under GNP GPLv3 and several paid-for licenses. 
    For more information visit https://www.codetrove.co.uk/Products/Curator/License
*/


 // todo for perf test: change items to an array

var defaultProps = {
  gridOptions: curator_core__WEBPACK_IMPORTED_MODULE_2__["defaultGridOptions"]
};

var noop = function noop() {};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isNumber = function isNumber(val) {
  return typeof val === 'number';
};

var Curator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Curator, _React$Component);

  function Curator() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;

    _classCallCheck(this, Curator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Curator).call(this, props));
    _this.gridRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.itemHolderRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = _this.getInitialState();
    _this.gridOptions = _objectSpread({}, curator_core__WEBPACK_IMPORTED_MODULE_2__["defaultGridOptions"], _this.props.gridOptions);
    _this.grid = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getEmptyGrid(_this.gridOptions.gridRows);
    _this.itemsRequiringResync = [];

    _this.bindEventHandlers();

    _this.onGridPropsChange = props.onGridPropsChange ? props.onGridPropsChange : _this.defaultGridPropsChangeHandler;
    _this.gridItems = [];
    _this.setupItemProps = false;
    return _this;
  }

  _createClass(Curator, [{
    key: "getDefaultItemProps",
    value: function getDefaultItemProps() {
      return _objectSpread({}, curator_core__WEBPACK_IMPORTED_MODULE_2__["defaultItemOptions"], {
        onItemRendered: this.props.onItemRendered || noop,
        onItemDragStart: this.onItemDragStart,
        onItemDragged: this.onItemDragged,
        onItemDragStop: this.onItemDragStop,
        onItemResize: this.onItemResize,
        onItemResizeStart: this.onItemResizeStart,
        onItemResizeStop: this.onItemResizeStop,
        gridOptions: this.gridOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      // todo these will slow it down, need to move elsewhere
      this.syncItemProps();
      this.syncGridProps();

      if (this.props.onItemsChange) {
        return this.renderExternallyControlledChildren();
      }

      return this.renderInternallyControlledChildren();
    }
  }, {
    key: "renderInternallyControlledChildren",
    value: function renderInternallyControlledChildren() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.gridRef,
        className: this.gridOptions.className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.itemHolderRef,
        className: "grid-item-holder",
        style: this.getGridStyles()
      }, this.state.readyToRenderChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child, index) {
        return _this2.renderGridItem(child);
      })));
    }
  }, {
    key: "renderExternallyControlledChildren",
    value: function renderExternallyControlledChildren() {
      var _this3 = this;

      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.gridRef,
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.itemHolderRef,
        className: "grid-item-holder",
        style: this.getGridStyles()
      }, this.state.readyToRenderChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child, index) {
        return _this3.renderGridItem(child);
      })));
    }
  }, {
    key: "renderGridItem",
    value: function renderGridItem(child) {
      if (!child.props.id) throw 'Curator received a child without a unique id. You must provide an id.';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GridItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        key: child.props.id
      }, this.getGridItemProps(child)), child);
    }
  }, {
    key: "updateGridItems",
    value: function updateGridItems(itemsToUpdate) {
      this.gridItems = this.gridItems.map(function (i) {
        var update = itemsToUpdate.find(function (ui) {
          return ui.id == i.id;
        });

        if (update) {
          return Object.assign({}, i, update);
        }

        return i;
      });
    }
  }, {
    key: "defaultGridPropsChangeHandler",
    value: function defaultGridPropsChangeHandler(props) {
      if (props.gridOptions) this.gridOptions = props.gridOptions;
      this.setState(_objectSpread({}, props));
    }
  }, {
    key: "syncItemProps",
    value: function syncItemProps() {
      var _this4 = this;

      var childProps = this.props.children.map(function (c) {
        return c.props;
      });
      var newItems = [];
      var itemsChanged = false;
      this.gridItems.forEach(function (item) {
        var props = childProps.find(function (c) {
          return c.id == item.id;
        });

        if (!props) {
          var algoState = _this4.buildAlgoState();

          var removeResult = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.removeGridItem(algoState, item);

          _this4.updateGridItems(removeResult.updatedItems);

          return;
        }

        newItems.push(item);
      }); // todo refactor this

      this.gridItems = newItems;
      this.gridItems.forEach(function (item) {
        var props = childProps.find(function (c) {
          return c.id == item.id;
        }); // a non-movement prop could have changed e.g. glued
        // so update the grid items

        var itemProps = _this4.props.onItemsChange ? _objectSpread({}, item, props) : item;

        if (_this4.itemPositionChanged(item, itemProps)) {
          var options = _objectSpread({
            gridOptions: _this4.gridOptions
          }, _this4.state, {
            grid: _this4.grid,
            items: _this4.gridItems,
            gridSizing: _this4.gridSizing
          });

          var movementResult = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemPositionChanged(itemProps, item, options);

          if (movementResult.success) {
            if (_this4.movementHasResizedGrid(movementResult.gridSizing, _this4.gridOptions)) {
              _this4.updateGridSizingFromAlgo(movementResult.gridSizing, _this4.gridOptions);
            }

            _this4.updateGridItems(movementResult.updatedItems);

            movementResult.updatedItems.forEach(function (i) {
              if (_this4.itemsRequiringResync.find(function (i2) {
                return i2.id == i.id;
              }) == null) _this4.itemsRequiringResync.push(i);
            });
          }
        }
      });
      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$gridOptions = this.gridOptions,
          width = _this$gridOptions.width,
          height = _this$gridOptions.height;
      this.updateGridSizing(width, height); // todo send update upwards

      this.setState({
        readyToRenderChildren: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncChildProps();
    } // todo a lot of this should go in Core?

  }, {
    key: "generateGridItemProps",
    value: function generateGridItemProps(child) {
      var _this5 = this;

      if (!child.key) throw 'No key supplied to SnapperGrid child';
      var gridSizing = this.gridSizing;
      var _child$props = child.props,
          height = _child$props.height,
          width = _child$props.width,
          x = _child$props.x,
          y = _child$props.y;
      var _this$gridOptions2 = this.gridOptions,
          gridRows = _this$gridOptions2.gridRows,
          gridColumns = _this$gridOptions2.gridColumns,
          algo = _this$gridOptions2.algo,
          renderMode = _this$gridOptions2.renderMode;
      var position = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPosition(gridSizing.widthPx, gridSizing.heightPx, gridRows, gridColumns, width, height, x, y, renderMode);
      var meta = {
        isDragging: false,
        pseudo: false,
        isConfigured: false
      };

      var itemProps = _objectSpread({
        id: child.key
      }, curator_core__WEBPACK_IMPORTED_MODULE_2__["defaultItemOptions"], child.props, {
        position: position,
        meta: meta
      });

      var defaultStyles = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemStyles(itemProps);
      var positionStyles = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPositionStyles(this.gridOptions, itemProps.styles, position);

      var styles = _objectSpread({}, defaultStyles, positionStyles);

      var algoData = algo.getItemInitialData ? algo.getItemInitialData(itemProps) : function () {};

      var allItemProps = _objectSpread({}, this.getDefaultItemProps(), itemProps, {
        algoData: algoData,
        styles: styles,
        meta: meta
      });

      var options = _objectSpread({}, this.buildAlgoState());

      options.items = [].concat(_toConsumableArray(options.items), [allItemProps]);
      var addResult = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.addItemToGrid(allItemProps, options);

      if (this.movementHasResizedGrid(addResult.gridSizing, this.gridOptions)) {
        this.updateGridSizing(addResult.gridSizing, this.gridOptions);
      }

      this.updateGridItems(addResult.updatedItems);

      if (addResult.itemsMoved) {
        addResult.updatedItems.forEach(function (item) {
          if (_this5.itemsRequiringResync.find(function (i) {
            return i.id === item.id;
          })) return;

          _this5.itemsRequiringResync.push(item);
        });
      } // todo on fail???
      // todo add item to grid on algo
      // if it's ok, then return with meta configured true
      // otherwise return configured is false,
      // dont render it until prop configured is true
      // return an update request (single item) 
      // this will work well for additions, 
      // then add this stuff to onmount to speed up the initial render => lightning!


      return _objectSpread({}, addResult.targetItem, {
        meta: _objectSpread({}, meta, {
          configured: addResult.success
        })
      });
    }
  }, {
    key: "buildAlgoState",
    value: function buildAlgoState() {
      return _objectSpread({}, this.state, {
        grid: this.grid,
        gridOptions: this.gridOptions,
        items: _toConsumableArray(this.gridItems),
        gridSizing: this.gridSizing
      });
    }
  }, {
    key: "syncChildProps",
    value: function syncChildProps() {
      if (this.itemsRequiringResync.length > 0) {
        var items = this.itemsRequiringResync;
        this.itemsRequiringResync = [];
        this.onItemsChange(items);
      }
    }
  }, {
    key: "syncGridProps",
    value: function syncGridProps() {
      var newGridOptions = _objectSpread({}, this.gridOptions, this.props.gridOptions);

      if (newGridOptions.gridColumns !== this.gridOptions.gridColumns || newGridOptions.gridRows !== this.gridOptions.gridRows || newGridOptions.renderMode !== this.gridOptions.renderMode) {
        this.gridItems = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getUpdatedGridSizeItems(this.gridItems, newGridOptions, this.gridSizing);
      }

      this.gridOptions = newGridOptions;
      var _this$props$gridOptio = this.props.gridOptions,
          width = _this$props$gridOptio.width,
          height = _this$props$gridOptio.height; // optional override by props - allows resize handling

      if (width || height) {
        var sizingChanged = this.gridSizing && (this.gridSizing.widthPx !== this.props.width || this.gridSizing.heightPx !== this.props.height);

        if (sizingChanged) {
          this.updateGridSizing(width, height);
          this.updateItemPositions();
        }
      }
    }
  }, {
    key: "updateGridSizing",
    value: function updateGridSizing(optionalWidth, optionalHeight) {
      var newSizing = this.calculateItemHolderSizing(optionalWidth, optionalHeight);

      if (this.gridSizing && (this.gridSizing.width !== newSizing.width || this.gridSizing.height != newSizing.height)) {
        this.setState({
          gridSizing: newSizing
        });
      }

      this.gridSizing = newSizing;
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      return {
        readyToRenderChildren: false,
        gridRendered: false,
        gridItems: []
      };
    }
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      this.onItemDragStart = this.onItemDragStart.bind(this);
      this.onItemDragged = this.onItemDragged.bind(this);
      this.onItemDragStop = this.onItemDragStop.bind(this);
      this.onItemResizeStart = this.onItemResizeStart.bind(this);
      this.onItemResize = this.onItemResize.bind(this);
      this.onItemResizeStop = this.onItemResizeStop.bind(this);
    }
  }, {
    key: "getGridItemProps",
    value: function getGridItemProps(child) {
      var itemProps = this.gridItems.find(function (c) {
        return c.id == child.props.id;
      });
      var gridOptions = this.gridOptions;

      if (!itemProps) {
        itemProps = this.generateGridItemProps(child);
        this.gridItems.push(itemProps);
      }

      if (!this.props.onItemsChange) {
        return _objectSpread({}, itemProps, {
          gridOptions: gridOptions
        });
      }

      return _objectSpread({}, itemProps, child.props, {
        gridOptions: gridOptions
      });
    }
  }, {
    key: "itemPositionChanged",
    value: function itemPositionChanged(oldItemProps, newItemProps) {
      return oldItemProps.x !== newItemProps.x || oldItemProps.y !== newItemProps.y || oldItemProps.width !== newItemProps.width || oldItemProps.height !== newItemProps.height;
    }
  }, {
    key: "onGridRendered",
    value: function onGridRendered() {
      var onRendered = this.props.onGridRendered; // grid rendered is called every time the grid items are updated
      // avoid sending this callback when it's not true 

      if (this.state.gridRendered) return;

      var callback = function callback() {
        if (onRendered) onRendered();
      };

      this.setState({
        gridRendered: true
      }, callback);
    }
  }, {
    key: "calculateItemHolderSizing",
    value: function calculateItemHolderSizing(optionalWidth, optionalHeight) {
      var itemHolder = this.itemHolderRef.current;
      var gridWrapper = this.gridRef.current;
      var width = isString(optionalWidth) ? optionalWidth : isNumber(optionalWidth) ? "".concat(optionalWidth, "px") : "".concat(itemHolder.clientWidth, "px");
      var height = isString(optionalHeight) ? optionalHeight : isNumber(optionalHeight) ? "".concat(optionalHeight, "px") : "".concat(itemHolder.clientHeight, "px");
      var heightPct = 0;
      var widthPct = 0;
      var heightPx = 0;
      var widthPx = 0;

      if (height.indexOf('%') > -1) {
        heightPct = parseInt(height);
        heightPx = gridWrapper.clientHeight / 100 * heightPct;
      } else {
        heightPx = height ? parseInt(height) : itemHolder.clientHeight;
        heightPct = heightPx / gridWrapper.clientHeight * 100;
      }

      if (width.indexOf('%') > -1) {
        widthPct = width ? parseInt(width) : itemHolder.clientWidth;
        widthPx = gridWrapper.clientWidth / 100 * widthPct;
      } else {
        widthPx = parseInt(width);
        widthPct = widthPx / gridWrapper.clientWidth * 100;
      }

      return {
        widthPx: widthPx,
        heightPx: heightPx,
        widthPct: widthPct,
        heightPct: heightPct,
        height: height,
        width: width
      };
    } // calculateGridSizing( ) {
    //     const itemHolder = this.itemHolderRef.current
    //     const gridWrapper = this.gridRef.current
    //     if ( !itemHolder )
    //         return null
    //     const widthPx = itemHolder.clientWidth
    //     const heightPx = itemHolder.clientHeight
    //     const widthPct = gridWrapper.clientWidth / widthPx * 100
    //     const heightPct = itemHolder.clientHeight / heightPx * 100
    //     const pct = this.gridOptions.renderMode == 'flex'
    //     const height = pct ? `${ heightPct }%` : `${ heightPx }px`
    //     const width = pct ? `${ widthPct }%` : `${ widthPx }px`
    //     return {
    //         widthPx,
    //         heightPx,
    //         widthPct,
    //         heightPct,
    //         height,
    //         width
    //     }
    // }

  }, {
    key: "getGridStyles",
    value: function getGridStyles() {
      var gridSizing = this.gridSizing;
      if (!gridSizing) return null;
      return {
        width: gridSizing.width,
        height: gridSizing.height,
        // todo add to snapper core
        boxSizing: 'border-box',
        position: 'relative'
      };
    }
  }, {
    key: "onItemDragStart",
    value: function onItemDragStart(itemProps) {
      var _CuratorCore$onItemDr = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemDragStart(itemProps),
          item = _CuratorCore$onItemDr.item,
          success = _CuratorCore$onItemDr.success;

      if (success) {
        this.updateGridItems([item]);
        this.onItemsChange([item]);
      }
    }
  }, {
    key: "onItemDragged",
    value: function onItemDragged(itemProps, movementDetails) {
      var options = _objectSpread({}, this.state, {
        grid: this.grid,
        gridOptions: this.gridOptions,
        items: this.gridItems,
        gridSizing: this.gridSizing
      });

      var dragResult = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemDrag(itemProps, options, movementDetails);

      if (dragResult.success) {
        this.grid = dragResult.grid;

        if (this.movementHasResizedGrid(dragResult.gridSizing, this.gridOptions)) {
          this.updateGridSizingFromAlgo(dragResult.gridSizing, this.gridOptions);
        }

        this.updateGridItems(dragResult.updatedItems);
        this.onItemsChange(dragResult.updatedItems);
      } // todo fix this


      return dragResult.updatedItems.find(function (i) {
        return i.id == itemProps.id;
      }).position;
    }
  }, {
    key: "movementHasResizedGrid",
    value: function movementHasResizedGrid(movementResult, gridOptions) {
      return gridOptions.gridColumns < movementResult.gridColumns || gridOptions.gridRows < movementResult.gridRows;
    }
  }, {
    key: "updateGridSizingFromAlgo",
    value: function updateGridSizingFromAlgo(newGridSizing, currentGridOptions) {
      var resizeGridDirections = currentGridOptions.resizeGridDirections,
          itemsCanResizeGrid = currentGridOptions.itemsCanResizeGrid;
      var gridSizing = this.calculateItemHolderSizing("".concat(newGridSizing.widthPx, "px"), "".concat(newGridSizing.heightPx, "px"));
      if (this.gridSizing.widthPx === gridSizing.widthPx && this.gridSizing.heightPx === gridSizing.heightPx) return;
      var canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y';
      var canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x';
      var gridRows = canResizeY ? newGridSizing.gridRows : currentGridOptions.gridRows;
      var gridColumns = canResizeX ? newGridSizing.gridColumns : currentGridOptions.gridColumns;
      var width = gridSizing.width,
          height = gridSizing.height;

      var gridOptions = _objectSpread({}, currentGridOptions, {
        gridRows: gridRows,
        gridColumns: gridColumns,
        width: width,
        height: height
      });

      this.gridSizing = gridSizing;
      this.gridOptions = gridOptions;
      this.updateItemPositions();
      this.onGridPropsChange({
        gridOptions: gridOptions
      });
    } // recalculates the positions for each grid item and updates the associated styles

  }, {
    key: "updateItemPositions",
    value: function updateItemPositions() {
      var _this6 = this;

      var _this$gridSizing = this.gridSizing,
          widthPx = _this$gridSizing.widthPx,
          heightPx = _this$gridSizing.heightPx;
      var _this$gridOptions3 = this.gridOptions,
          gridRows = _this$gridOptions3.gridRows,
          gridColumns = _this$gridOptions3.gridColumns,
          renderMode = _this$gridOptions3.renderMode;
      this.gridItems = this.gridItems.map(function (item) {
        var width = item.width,
            height = item.height,
            x = item.x,
            y = item.y,
            meta = item.meta;

        var _item$styles = item.styles,
            top = _item$styles.top,
            left = _item$styles.left,
            transform = _item$styles.transform,
            otherStyles = _objectWithoutProperties(_item$styles, ["top", "left", "transform"]);

        var position = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPosition(widthPx, heightPx, gridRows, gridColumns, width, height, x, y, renderMode);
        var positionStyles = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPositionStyles(_this6.gridOptions, item.styles, position);

        var styles = _objectSpread({}, otherStyles, positionStyles);

        return _objectSpread({}, item, {
          position: position,
          styles: styles
        });
      });
    }
  }, {
    key: "onItemsChange",
    value: function onItemsChange(updatedItems) {
      var filtered = updatedItems.map(function (i) {
        var id = i.id,
            x = i.x,
            y = i.y,
            width = i.width,
            height = i.height,
            className = i.className;
        return {
          id: id,
          x: x,
          y: y,
          width: width,
          height: height,
          className: className
        };
      });

      if (!filtered.length) {
        return;
      }

      if (this.props.onItemsChange) {
        this.props.onItemsChange(filtered);
      } else {
        var gridItems = this.state.gridItems.map(function (i) {
          if (i.id !== item1Props.id) return i;
          return item1Props;
        });
        this.setState({
          gridItems: gridItems
        });
      }
    }
  }, {
    key: "onItemDragStop",
    value: function onItemDragStop(itemProps) {
      var _this$gridSizing2 = this.gridSizing,
          widthPx = _this$gridSizing2.widthPx,
          heightPx = _this$gridSizing2.heightPx;
      var items = this.gridItems;
      var updatedItem = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemDragStop(itemProps, items, widthPx, heightPx, this.gridOptions, this.gridSizing);
      this.updateGridItems([updatedItem]);
      this.onItemsChange([updatedItem]);
    }
  }, {
    key: "onItemResizeStart",
    value: function onItemResizeStart(itemProps) {
      var _CuratorCore$onItemRe = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemResizeStart(itemProps),
          item = _CuratorCore$onItemRe.item,
          success = _CuratorCore$onItemRe.success;

      if (success) {
        this.updateGridItems([item]);
        this.onItemsChange([item]);
      }
    }
  }, {
    key: "onItemResize",
    value: function onItemResize(itemProps, movementDetails) {
      var options = _objectSpread({}, this.state, {
        grid: this.grid,
        gridOptions: this.gridOptions,
        items: this.gridItems,
        gridSizing: this.gridSizing
      });

      var resizeResult = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemResize(itemProps, options, movementDetails);

      if (resizeResult.success) {
        this.grid = resizeResult.grid;

        if (this.movementHasResizedGrid(resizeResult.gridSizing, this.gridOptions)) {
          this.updateGridSizingFromAlgo(resizeResult.gridSizing, this.gridOptions);
        }

        this.updateGridItems(resizeResult.updatedItems);
        this.onItemsChange(resizeResult.updatedItems);
      } // todo fix this


      return resizeResult.updatedItems.find(function (i) {
        return i.id == itemProps.id;
      }).position;
    }
  }, {
    key: "onItemResizeStop",
    value: function onItemResizeStop(itemProps) {
      var _this$gridSizing3 = this.gridSizing,
          widthPx = _this$gridSizing3.widthPx,
          heightPx = _this$gridSizing3.heightPx;
      var items = this.gridItems;
      var updatedItem = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.onItemResizeStop(itemProps, items, widthPx, heightPx, this.gridOptions, this.gridSizing);
      this.updateGridItems([updatedItem]);
      this.onItemsChange([updatedItem]);
    }
  }]);

  return Curator;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/GridItem.jsx":
/*!**************************!*\
  !*** ./src/GridItem.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! curator-core */ "./node_modules/curator-core/index.js");
/* harmony import */ var curator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(curator_core__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* 
    React-Curator: A wrapper around the curator-core library
    Copyright (C) 2019 Code Trove Limited

    This program is licensed under GNP GPLv3 and several paid-for licenses. 
    For more information visit https://www.codetrove.co.uk/Products/Curator/License
*/




var GridItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridItem, _React$Component);

  function GridItem(props) {
    var _this;

    _classCallCheck(this, GridItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GridItem).call(this, props)); // for getting element position & sizing

    _this.itemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      styles: _this.props.styles
    };
    return _this;
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // todo sanitize the child props before passing across
      var isMoving = this.props.meta.isDragging || this.props.meta.isResizing;
      var styles = isMoving ? this.state.styles : this.props.styles;
      var placeholderStyles = this.props.meta.placeholderStyles;
      var resizeClassName = this.props.gridOptions.resizeClassName ? this.props.gridOptions.resizeClassName : 'resize-handle';
      var className = this.props.glued ? "".concat(this.props.className, " glued") : this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1__["DraggableCore"], {
        cancel: ".".concat(resizeClassName),
        onStart: function onStart(e, data) {
          return _this2.onDragStart(e, data);
        },
        onStop: function onStop(e, data) {
          return _this2.onDragEnd(e, data);
        },
        onDrag: function onDrag(e, data) {
          return _this2.onDrag(e, data);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.itemRef,
        className: className,
        style: styles
      }, this.props.children, this.props.displayResize && !this.props.glued && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1__["DraggableCore"], {
        disabled: this.props.glued,
        onStart: function onStart(e, data) {
          return _this2.onResizeStart(e, data, 'start');
        },
        onStop: function onStop(e, data) {
          return _this2.onResizeEnd(e, data, 'end');
        },
        onDrag: function onDrag(e, data) {
          return _this2.onResize(e, data, 'drag');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: resizeClassName
      })))), isMoving && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: placeholderStyles,
        className: "placeholder"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onItemRendered(this.props);
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(e, data) {
      this.movement = {
        xStart: data.x,
        yStart: data.y,
        left: this.props.position.leftPx,
        top: this.props.position.topPx
      };
      this.props.onItemDragStart(this.props);
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(e, data) {
      this.props.onItemDragStop(this.props);
    }
  }, {
    key: "onDrag",
    value: function onDrag(e, data) {
      //var startTime = new Date()
      var position = this.props.onItemDragged(this.props, {
        initialMouseX: this.movement.xStart,
        initialMouseY: this.movement.yStart,
        currentMouseX: data.x,
        currentMouseY: data.y,
        initialTop: this.movement.top,
        initialLeft: this.movement.left
      });
      var styles = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPositionStyles(this.props.gridOptions, this.props.styles, position);
      this.setState({
        styles: styles
      });
    }
  }, {
    key: "onResizeStart",
    value: function onResizeStart(e, data) {
      this.movement = {
        xStart: data.x,
        yStart: data.y,
        width: this.props.position.widthPx,
        height: this.props.position.heightPx
      };
      this.props.onItemResizeStart(this.props);
    }
  }, {
    key: "onResizeEnd",
    value: function onResizeEnd(e, data) {
      this.props.onItemResizeStop(this.props);
    }
  }, {
    key: "onResize",
    value: function onResize(e, data) {
      var props = _objectSpread({}, this.props);

      var position = this.props.onItemResize(props, {
        initialMouseX: this.movement.xStart,
        initialMouseY: this.movement.yStart,
        currentMouseX: data.x,
        currentMouseY: data.y,
        initialWidth: this.movement.width,
        initialHeight: this.movement.height
      });
      var styles = curator_core__WEBPACK_IMPORTED_MODULE_2___default.a.getItemPositionStyles(this.props.gridOptions, this.props.styles, position);
      this.setState({
        styles: styles
      });
    }
  }]);

  return GridItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom","root":"ReactDOM"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-curator.js.map