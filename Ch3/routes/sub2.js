var express = require("express");
var router = express.Router();

router.get("/cookie", (req, res, next) => {
  const user = {
    uid: "a101",
    name: "홍길동",
    hp: "010-1212-1212",
    age: 21,
  };

  // 쿠키 전송
  res.cookie("uid", "a101");
  res.cookie("user", user);

  res.render("sub2/cookie");
});

router.get("/cookieResult", (req, res) => {
  const user = req.cookies.user;

  res.render("sub2/cookieResult", user);
});

router.get("/session", (req, res, next) => {
  const user = {
    uid: "b101",
    name: "김유신",
    hp: "010-4242-1212",
    age: 23,
  };

  // 사용자 세션 설정
  req.session.user = user;

  res.render("sub2/session");
});

router.get("/sessionResult", (req, res) => {
  const user = req.session.user;

  res.render("sub2/sessionResult", user);
});

module.exports = router;
