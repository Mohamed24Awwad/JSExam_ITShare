var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(cust_name, acc_no, acc_type, balance) {
        this.cust_name = cust_name;
        this.acc_no = acc_no;
        this.acc_type = acc_type;
        this.balance = balance;
    }
    Account.prototype.withdraw = function () { };
    Account.prototype.deposit = function () { };
    Account.prototype.display = function () { };
    Account.prototype.updateBal = function () { };
    return Account;
}());
var Current = /** @class */ (function (_super) {
    __extends(Current, _super);
    function Current(cust_name, acc_no, acc_type, balance, serviceCharge, cheqbook) {
        var _this = _super.call(this, cust_name, acc_no, acc_type, balance) || this;
        _this.cust_name = cust_name;
        _this.acc_no = acc_no;
        _this.acc_type = acc_type;
        _this.balance = balance;
        _this.serviceCharge = serviceCharge;
        _this.cheqbook = cheqbook;
        return _this;
    }
    Current.prototype.issueCheque = function () { };
    Current.prototype.checkBal = function () { };
    Current.prototype.imposePenalty = function () { };
    return Current;
}(Account));
var Saving = /** @class */ (function (_super) {
    __extends(Saving, _super);
    function Saving(cust_name, acc_no, acc_type, balance, interest) {
        var _this = _super.call(this, cust_name, acc_no, acc_type, balance) || this;
        _this.cust_name = cust_name;
        _this.acc_no = acc_no;
        _this.acc_type = acc_type;
        _this.balance = balance;
        _this.interest = interest;
        return _this;
    }
    Saving.prototype.computeInterest = function () { };
    Saving.prototype.depositInterest = function () { };
    return Saving;
}(Account));
/**
 * ===================================
 * -------- Question 05/Q4-------------
 * ===================================
 */
var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    Object.defineProperty(Time.prototype, "Hour", {
        get: function () {
            return this.hour;
        },
        set: function (hour) {
            this.hour = hour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Minute", {
        get: function () {
            return this.minute;
        },
        set: function (minute) {
            this.minute = minute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Second", {
        set: function (second) {
            this.second = second;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Timeh", {
        set: function (hour) {
            this.hour = hour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Timem", {
        set: function (minute) {
            this.minute = minute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Times", {
        set: function (second) {
            this.second = second;
        },
        enumerable: true,
        configurable: true
    });
    Time.prototype.toString = function () {
        return "hh:" + this.hour + " mm:" + this.minute + " ss:" + this.second;
    };
    Time.prototype.nextSecond = function () {
        return this.second;
    };
    Time.prototype.previousSecond = function () {
        return this.second;
    };
    return Time;
}());
var timeStamp = new Time(12, 10, 2);
console.log(timeStamp.toString());
