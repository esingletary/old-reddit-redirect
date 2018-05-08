'use strict'

/** Require and invoke express */
const app = require('express')()

/**
 * Redirect the user to the subreddit they specified
 */
app.get('/:subreddit', (req, res, next) => {
  let subreddit = req.params.subreddit
  let ip = req.ip
  console.log(`Redirecting ${ip} to subreddit ${subreddit}`)
  res.redirect(`https://old.reddit.com/r/${subreddit}`)
})

/** Use either the port specified in env variables or 5500 if none is defined */
const port = process.env.PORT || 5500

/** Start the app */
app.listen(port, () => console.log(`Server started on port ${port}`))
