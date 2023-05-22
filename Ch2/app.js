/**
 * 날짜 : 2023/05/22
 * 이름 : 김채영
 * 내용 : Express 실습하기
 */
const express = require("express");
const app = express();

// Template Engine 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// route 설정
app.get("/", (req, res) => {
  const data = {
    tit1: "Node.js Express",
    tit2: "EJS Template Engine",
    result1: true,
    result2: false,
    score: 86,
    user: {
      uid: "a101",
      name: "홍길동",
      hp: "010-1234-1111",
      age: 21,
    },

    users: [
      { uid: "p101", name: "김유신", hp: "010-1234-1234", age: 23 },
      { uid: "p102", name: "김춘추", hp: "010-1234-2234", age: 33 },
      { uid: "p103", name: "장보고", hp: "010-1234-3234", age: 43 },
      { uid: "p104", name: "강감찬", hp: "010-1234-4234", age: 53 },
      { uid: "p105", name: "이순신", hp: "010-1234-5234", age: 63 },
    ],
  };

  res.render("index", data);
});

app.get("/sub/hello", (req, res) => {
  res.render("sub/hello");
});

app.get("/sub/welcome", (req, res) => {
  res.render("sub/welcome");
});

app.get("/sub/greeting", (req, res) => {
  res.render("sub/greeting");
});

app.listen(3000, () => {
  console.log("3000 실행 중...");
});
