import { Custommer } from "./Custommer.js"
export class CheckingAccount{
    agency
    _custommer

    set custommer(newValue){
        if(newValue instanceof Custommer){
            this._custommer = newValue
        }
    }
    get custommer(){
        return this._custommer
    }
    _balance = 0
    get balance(){
        return this._balance
    }
    constructor(custommer, agency){
        this.agency = agency
        this.custommer = custommer
    }
    withdraw(value){
        if(this._balance >= value){
            this._balance -= value 
            return value
        }
    }
    deposit(value){
        // Early Return Method
        if(value <= 0) return
        this._balance += value
    }
    transfer(value, account){
        const withdrawValue = this.withdraw(value)
        account.deposit(withdrawValue)
    }
}