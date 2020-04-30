'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /* 
    router.get('/swiperList', controller.home.getSwiperList);
    router.get('/catItems', controller.home.getCatItems);
    router.get('/floorData', controller.home.getFloorData);
  */
   index() {
    const { ctx } = this;
    ctx.body = ctx.service.index.index();
  }
   getSwiperList() {
    const { ctx } = this;
    ctx.body = ctx.service.index.getSwiperList();
  }
   getCatItems() {
    const { ctx } = this;
    ctx.body = ctx.service.index.getCatItems()
  }
   getFloorData() {
    const { ctx } = this;
    ctx.body = ctx.service.index.getFloorData();
  }
}

module.exports = HomeController;
