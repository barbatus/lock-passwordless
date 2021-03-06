'use strict';

exports.__esModule = true;

var _index = require('../index');

var _ask_email_vcode = require('../../passwordless/ask_email_vcode');

var _ask_email_vcode2 = _interopRequireDefault(_ask_email_vcode);

var _ask_social_network_or_email = require('../../cred/or/ask_social_network_or_email');

var _ask_social_network_or_email2 = _interopRequireDefault(_ask_social_network_or_email);

var _index2 = require('../../social/index');

var _index3 = require('../../passwordless/index');

var m = _interopRequireWildcard(_index3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialOrEmailCode = function (_Mode) {
  _inherits(SocialOrEmailCode, _Mode);

  function SocialOrEmailCode() {
    _classCallCheck(this, SocialOrEmailCode);

    return _possibleConstructorReturn(this, _Mode.call(this, "socialOrEmailcode"));
  }

  SocialOrEmailCode.prototype.willOpen = function willOpen(model, options) {
    options = (0, _index2.processSocialOptions)(options);
    options.mode.send = "code";
    this.setOptions(options);
    this.setModel(model.set("forceRedirect", !options.popup));
  };

  SocialOrEmailCode.prototype.render = function render(lock) {
    return m.passwordlessStarted(lock) ? new _ask_email_vcode2.default() : new _ask_social_network_or_email2.default();
  };

  return SocialOrEmailCode;
}(_index.Mode);

exports.default = SocialOrEmailCode;
