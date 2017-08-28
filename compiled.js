"use strict";

Object.defineProperty( "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hand = document.getElementById("hand");
var add = document.getElementById("add");
//对象有点赞+1的方法

var PraiseButton = PraiseButton = function () {
	function PraiseButton() {
		_classCallCheck(this, PraiseButton);

		this.pariseCount = 0;
	}

	_createClass(PraiseButton, [{
		key: "praiseAdd",
		value: function praiseAdd() {

			if (this.pariseCount < 10) {

				this.pariseCount++;
				console.log(this.pariseCount);
			} else {
				alert("最多只能点赞10次哦！");
			}
			return this.pariseCount;
		}
	}]);

	return PraiseButton;
}();

var Thumb = Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb() {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
	}

	return Thumb;
}(PraiseButton);

var praise = new Thumb();
hand.addEventListener("click", function () {
	add.innerText = "+" + praise.praiseAdd();
});
