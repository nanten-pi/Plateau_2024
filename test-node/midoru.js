const express = require("express");
const app = express();

// ミドルウェア関数の例
const a_middleware_function = function (req, res, next) {
    // Perform some operations
    next(); // next() を呼ぶことで Express はチェイン中の次のミドルウェア関数を呼びます。

    // すべてのルートと述語に対して use() で関数を追加します。
    app.use(a_middleware_function);

    // 指定ルートに対して use() でミドルウェア関数を追加します。
    app.use("/someroute", a_middleware_function);

    // 指定の HTTP 述語とルートに対してミドルウェア関数を追加します。
    app.get("/", a_middleware_function);

    app.listen(3000);
}

