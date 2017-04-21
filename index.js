'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var children = _ref.children;


	var updateTitle = function updateTitle() {
		var title = document.querySelector('title');

		if (!title) {
			title = document.createElement('title');
			document.querySelector('head').appendChild(title);
		}

		title.innerHTML = children;
	};

	updateTitle();

	return null;
};
