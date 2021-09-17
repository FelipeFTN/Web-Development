import { Custommer } from "./Custommer.js"
import { CheckingAccount } from "./CheckingAccount.js"

const ricardosCheckingAccount = new CheckingAccount()
ricardosCheckingAccount.custommer = new Custommer()
ricardosCheckingAccount.custommer.name = "Ricardo"
ricardosCheckingAccount.custommer.cpf = 11122233344
ricardosCheckingAccount.custommer.rg = 123456789
ricardosCheckingAccount.agency = 1001
ricardosCheckingAccount.balance = 500

const alicesCheckingAccount = new CheckingAccount()
alicesCheckingAccount.custommer = new Custommer()
alicesCheckingAccount.custommer.name = "Alice"
alicesCheckingAccount.custommer.cpf = 88899910101
alicesCheckingAccount.custommer.rg = 123456788
alicesCheckingAccount.agency = 1002

ricardosCheckingAccount.transfer(500, alicesCheckingAccount)

console.log(alicesCheckingAccount)
console.log(ricardosCheckingAccount)