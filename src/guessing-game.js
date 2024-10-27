class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.x = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.x = Math.round((this.min + this.max) / 2);
  }

  guess() {
    return this.x;
  }

  lower() {
    this.max = this.x;
    this.x = Math.round((this.min + this.max) / 2);
  }

  greater() {
    this.min = this.x;
    this.x = Math.round((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
