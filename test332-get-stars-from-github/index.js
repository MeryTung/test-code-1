const fs = require('fs')
const Json2csvParser = require('json2csv').Parser
 
const { Octokit } = require('@octokit/core')
const octokit = new Octokit({
  auth: `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`
})

let page = 1
const PER_PAGE = 100
const starList = []

// node index.js --owner=zhaoyiming0803 --repo=VueNode
const envMap = process.argv.slice(2).reduce((map, arg) => {
  const [key, value] = arg.substring(2).split('=')
  map[key] = value
  return map
}, {})

async function getStarList () {
  try {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/stargazers', {
      owner: envMap.owner,
      repo: envMap.repo,
      per_page: PER_PAGE,
      page
    })
    return data
  } catch (e) {
    return []
  }
}

function output () {
  const fields = [
    'login', 'id', 'node_id', 'avatar_url', 'url', 'html_url', 'followers_url', 
    'following_url', 'gists_url', 'starred_url', 'subscriptions_url', 'organizations_url',
    'repos_url', 'events_url', 'received_events_url', 'type', 'site_admin'
  ]
  const json2csvParser = new Json2csvParser({ fields })
  const csv = json2csvParser.parse(starList)

  fs.writeFile("./star-list.csv", csv, err => {
    if (err) {
      return console.log('output csv error: ', err)
    }
    console.log('The file was saved!')
  })
}

async function readyGo () {
  const _startList = await getStarList()

  starList.push.apply(starList, _startList)

  if (_startList.length === PER_PAGE) {
    page++
    readyGo()
  } else {
    output()
    console.log('total stars: ', starList.length)
  }
}

readyGo()
