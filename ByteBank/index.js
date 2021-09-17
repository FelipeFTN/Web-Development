import { Custommer } from "./Custommer.js"
import { CheckingAccount } from "./CheckingAccount.js"

const custommer1 = new Custommer("Ricardo", 11122233309)
const custommer2 = new Custommer("Alice", 11122233308)

const ricardosCheckingAccount = new CheckingAccount()
ricardosCheckingAccount.agency = 1001
ricardosCheckingAccount.custommer = custommer1
ricardosCheckingAccount.deposit(500)

const alicesCheckingAccount = new CheckingAccount()
alicesCheckingAccount.custommer = custommer2
alicesCheckingAccount.agency = 1002

let value = 200
ricardosCheckingAccount.transfer(value, alicesCheckingAccount)

console.log(ricardosCheckingAccount.custommer)