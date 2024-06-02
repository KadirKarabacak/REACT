// Using installed babel packages to avoid jsx error [ to convert jsx to js ]
require("@babel/register")({ extensions: [".js", ".jsx"] });
require("./server.js");
