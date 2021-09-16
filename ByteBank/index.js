class Custommer{
    name
    cpf
    rg
}
class CheckingAccount{
    agency
    balance = 0

    withdraw(value){
        if(this.balance >= value){
        this.balance -= value 
        return value
        }
    }
    deposit(value){
        if(value > 0){
            this.balance += value
        }
    }
}

const custommer1 = new Custommer()

custommer1.name = "Ricardo"
custommer1.cpf = 11122233309
custommer1.rg = 123456789

const custommer2 = new Custommer()

custommer2.name = "Alice"
custommer2.cpf = 88899910101 
custommer2.rg = 123456788

const ricardosCheckingAccount = new CheckingAccount()
ricardosCheckingAccount.agency = 1001
ricardosCheckingAccount.balance = 500

const withdrawValue = ricardosCheckingAccount.withdraw(50)
console.log("Valor Sacado: ", withdrawValue)
console.log(custommer1, ricardosCheckingAccount)
