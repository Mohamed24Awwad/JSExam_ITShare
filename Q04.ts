class Account{
   protected cust_name;
   protected acc_no;
   protected acc_type;
   protected balance;
   constructor(cust_name:string,acc_no:number,acc_type:string,balance:number){
     this.cust_name=cust_name;
     this.acc_no=acc_no;
     this.acc_type=acc_type;
     this.balance=balance;
   }
 withdraw(){ }
 deposit():void{}
  display() {}
 updateBal(){}
}
class Current extends Account
{
   protected serviceCharge:number;
   protected cheqbook:number;
   
   constructor(cust_name:string,acc_no:number,acc_type:string,balance:number,serviceCharge:number,cheqbook:number){
     super(cust_name,acc_no,acc_type,balance);
     this.cust_name=cust_name;
     this.acc_no=acc_no;
     this.acc_type=acc_type;
     this.balance=balance;
     this.serviceCharge=serviceCharge;
     this.cheqbook=cheqbook;
   }

    issueCheque():void{}
   checkBal():void{}
   imposePenalty():void{}
}
class Saving extends Account
{
   protected interest;
   constructor(cust_name:string,acc_no:number,acc_type:string,balance:number,interest:number){
     super(cust_name,acc_no,acc_type,balance);
     this.cust_name=cust_name;
     this.acc_no=acc_no;
     this.acc_type=acc_type;
     this.balance=balance;
     this.interest=interest;
   }
 computeInterest(){}
  depositInterest()  {}   
}





















/**
 * =====================================================================================
 * ---------------------------- Question 05/Q4-----------------------------------------
 * =====================================================================================
 */

class Time {
  protected hour: number;
  protected minute: number;
  protected second: number;
  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  get Hour(): number {
    return this.hour;
  }
  get Minute(): number {
    return this.minute;
  }

  set Hour(hour: number) {
    this.hour = hour;
  }
  set Minute(minute: number) {
    this.minute = minute;
  }
  set Second(second: number) {
    this.second = second;
  }
  set Timeh(hour: number) {
    this.hour = hour;
  }
  set Timem(minute: number) {
    this.minute = minute;
  }

  set Times(second: number) {
    this.second = second;
  }
  toString() {
    return `hh:${this.hour} mm:${this.minute} ss:${this.second}`; // "hh:mm:ss"
  }
  nextSecond() {
    return this.second ;
  }
  previousSecond() {
    return this.second;
  }
}

const timeStamp = new Time(12,10,2);

console.log(timeStamp.toString());
