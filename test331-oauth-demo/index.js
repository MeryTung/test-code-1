const clientID = '15aa6bd9634b6e679be9'
const clientSecret = '2be784dab9131eef4ff428630faa637fe0000b06'

const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const route = require('koa-route')
const axios = require('axios')

const app = new Koa()

const views = serve(path.join(__dirname + '/views'))

async function oauth(ctx) {
  const authorizationCode = ctx.request.query.code
  console.log('authorization code:', authorizationCode)

  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${authorizationCode}`,
    headers: {
      accept: 'application/json'
    }
  })

  const accessToken = tokenResponse.data.access_token
  // {
  //   access_token: '',
  //   token_type: 'bearer',
  //   scope: ''
  // }
  console.log('tokenResponse.data: ', tokenResponse.data)

  console.log(`accessToken: ${accessToken}`)

  const userInfo = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  console.log('userInfo.datae: ', userInfo.data)
  const { email } = userInfo.data

  ctx.response.redirect(`/welcome.html?email=${email}`)
}

app.use(views)
app.use(route.get('/oauth/redirect', oauth))

app.listen(8080)
