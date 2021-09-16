import { Custommer } from "./Custommer.js"
import { CheckingAccount } from "./CheckingAccount.js"
const custommer1 = new Custommer()

custommer1.name = "Ricardo"
custommer1.cpf = 11122233309
custommer1.rg = 123456789

const ricardosCheckingAccount = new CheckingAccount()
ricardosCheckingAccount.agency = 1001
ricardosCheckingAccount.balance = 500
ricardosCheckingAccount.custommer = custommer1

const custommer2 = new Custommer()
custommer2.name = "Alice"
custommer2.cpf = 88899910101 
custommer2.rg = 123456788

const alicesCheckingAccount = new CheckingAccount()
alicesCheckingAccount.custommer = custommer2
alicesCheckingAccount.agency = 1002

ricardosCheckingAccount.transfer(500, alicesCheckingAccount)

console.log(alicesCheckingAccount)