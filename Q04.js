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
