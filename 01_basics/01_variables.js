const accountId = 144553;
let accountEmail = "raja@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

//accountId = 2; not allowed
accountEmail = "kam@google.com"
accountPassword = "23466"
accountCity = "Bangaluru"
let accountState;
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])