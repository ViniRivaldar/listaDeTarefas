<<<<<<< HEAD
export default class DisplayToday {
    constructor(element) {
      this.element = document.querySelector(element);
      this.date = new Date();
      this.options = { day: "numeric", month: "numeric" };
    }
  
    updateElement() {
      this.element.innerText = new Intl.DateTimeFormat(
        "pt-br",
        this.options,
      ).format(this.date);
    }
  
    init() {
      if (this.element) this.updateElement();
      return this;
    }
=======
export default class DisplayToday {
    constructor(element) {
      this.element = document.querySelector(element);
      this.date = new Date();
      this.options = { day: "numeric", month: "numeric" };
    }
  
    updateElement() {
      this.element.innerText = new Intl.DateTimeFormat(
        "pt-br",
        this.options,
      ).format(this.date);
    }
  
    init() {
      if (this.element) this.updateElement();
      return this;
    }
>>>>>>> 1aebcbdd9e4d79186c8f6c3b425da52e68fed069
  }