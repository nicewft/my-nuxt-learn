import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/getCitys', async (ctx) => {
  ctx.body = {
    result: ['北京', '武汉']
  }
})

export default router
