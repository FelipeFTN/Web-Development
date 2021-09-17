import { Custommer } from "./Custommer.js"
import { CheckingAccount } from "./CheckingAccount.js"

const custommer1 = new Custommer("Ricardo", 11122233309)
const custommer2 = new Custommer("Alice", 11122233308)

const ricardosCheckingAccount = new CheckingAccount(custommer1, 1001)
const alicesCheckingAccount = new CheckingAccount(custommer2, 1002)

ricardosCheckingAccount.deposit(500)

console.log(ricardosCheckingAccount.custommer)