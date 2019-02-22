'use strict';


class Controller {
  constructor(){
    this.count  = {
      val: 0,
    }
  }

  increment ({request, response }) {
    response.send(this.count.val + 1);
  }

  decrement({ request, response}){
    response.send(this.count.val - 1);
  }
}

module.exports = Controller;