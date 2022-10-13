  class SumApp {
    constructor() {
      this.numbers = [];
    }
  
    addNumber(n) {
      this.numbers.push(n);
    }
  
    getSum() {
      if (this.numbers.length > 0) {
        let count = 0;
  
        for (let n of this.numbers) {
          count = count + n;
        }
  
        return count;
      } else {
        return 0;
      }
    }
  
    reset() {
      this.numbers = [];
    }
  }
