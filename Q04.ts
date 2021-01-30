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
