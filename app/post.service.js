System.register(['rxjs/add/operator.map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                }
                PostService.prototype.getPost = function () {
                    return this._http.get("http://jsonplaceholder.typicode.com/posts")
                        .map(function (res) { return res.json(); });
                };
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map