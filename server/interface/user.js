import Router from 'koa-router'
import User from '../models/user'
// const User = require('../models/user')

const router = new Router({
  prefix: '/api'
})

// 新增
router.post('/addUser', async ctx => {
  let userName = ctx.request.body.userName
  let age = ctx.request.body.age
  let code, success
  let user = new User({
    userName: userName,
    age: age
  })
  try {
    await user.save()
    code = 0
    success = 'ok'
  } catch (e) {
    code = -1
    success = e
  }
  ctx.body = {
    code,
    success
  }
})

// 查询
router.get('/getUser', async ctx => {
  let code
  try {
    let result = await User.find()
    code = 0
    ctx.body = {
      result,
      code
    }
  } catch (e) {
    ctx.body = {
      err: e,
      code: -1
    }
  }
})

// 删除
router.post('/removeUser', async ctx => {
  let userName = ctx.request.body.userName
  let id = ctx.request.body.id
  let code
  try {
    await User.where({
      // userName: userName
      _id: id
    }).remove()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code
  }
})

export default router
