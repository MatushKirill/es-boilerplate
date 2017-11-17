var interval;

const Timer = () => new function () {
    this.minutes = 0;
    this.seconds = 0;

    this.init = (startFrom = 0, callback) => {
        if (typeof startFrom !== 'number') {
            throw new Error('First argument must be a number')
        }
        if (typeof callback !== 'function') {
            throw new Error('Second argument must be a function')
        }
        this.minutes = startFrom;
        callback()
    };


    this.start = (speed = 1, callback) => {
        if (typeof speed !== 'number') {
            throw new Error('First argument must be a number')
        }
        if (typeof callback !== 'function') {
            throw new Error('Second argument must be a function')
        }
        let currentSeconds = this.minutes * 60 + this.seconds;
        interval = setInterval(() => {
            currentSeconds++;
            this.minutes = parseInt(currentSeconds / 60);
            this.seconds = currentSeconds % 60;
            callback(this)
        }, 1000 / speed)
    };

    this.pause = (callback) => {
        if (typeof callback !== 'function') {
            throw new Error('Second argument must be a function')
        }
        this.isTimerStoped = true;
        clearInterval(interval);
        callback(this)
    };

    this.stop = (callback) => {
        if (typeof callback !== 'function') {
            throw new Error('Second argument must be a function')
        }
        clearInterval(interval);
        callback(this);
        this.minutes = 0;
        this.seconds = 0;
    };
};

export default Timer
