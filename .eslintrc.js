module.exports={
  "extends":["eslint:recommended"],//推荐配置
  "parser":"babel-eslint",
  "rules":{                           
    "no-console":["error",{           //不允许使用console(除了console.warn、console.error、console.info)
      "allow":["warn","error","info"]   
    }]
  },
  "parser":"babel-eslint",
  "parserOptions":{
    "ecmaVersion":6,
    "sourceType":"script"
  },
  "globals":{       //window全局变量是否可以使用
    //"window":true
  },
  "env":{
    "browser":false,
    "node":true,//node环境
    "es6":true,
    "mocha":true
  }
};