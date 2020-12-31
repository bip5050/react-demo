"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderFullPage;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://redux.js.org/recipes/server-rendering#inject-initial-component-html-and-state
function renderFullPage(html, preloadedState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n      <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat(_config.default.GSTM_code, "');\n      </script>\n\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n      <title>Esm</title>\n\n\n      <meta name=\"description\" content=\"\">\n      \n      <meta http-equiv=\"cache-control\" content=\"max-age=0\" />\n      <meta http-equiv=\"cache-control\" content=\"no-cache\" />\n      <meta http-equiv=\"expires\" content=\"0\" />\n      <meta http-equiv=\"expires\" content=\"Tue, 01 Jan 1980 1:00:00 GMT\" />\n      <meta http-equiv=\"pragma\" content=\"no-cache\" />\n      <!--   <link rel=\"shortcut icon\" href=\"/img/favicon.ico\" /> -->\n\n      <!-- Font Awesome -->\n      <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\n      <!-- Bootstrap core CSS -->\n      <link href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css\" rel=\"stylesheet\">\n      \n      </head>\n      <body>\n\n        <div id=\"root\">").concat(html, "</div>\n<script defer type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n        \n<!-- Bootstrap tooltips -->\n<script defer type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js\"></script>\n<!-- Bootstrap core JavaScript -->\n<script defer type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<script src=\"https://unpkg.com/sweetalert/dist/sweetalert.min.js\"></script>\n<!-- TODO: Add SDKs for Firebase products that you want to use\nhttps://firebase.google.com/docs/web/setup#available-libraries -->\n\n\n        <script defer>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(preloadedState).replace(/</g, "\\u003c"), "\n        </script>\n        <script defer src=\"/dist/main.bundle.js\"></script>\n        <script defer src=\"/dist/vendors~main.bundle.js\"></script>\n      </body>\n    </html>\n    ");
}