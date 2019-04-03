// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
const friends = require('../data/friends')

const router = require('express').Router()

router.get('/friends', function (req, res) {

    res.json(friends)
})

router.post("/friends", function (req, res) {
    console.log(req.body)
    console.log(friends)

    let closestFriend = 10;

    friends.forEach((friend, index) => {
        const formula = (accum, curr) => parseInt(accum) + parseInt(curr)

        const score = friend.scores.reduce(formula)
        const otherScore = req.body.scores.reduce(formula);

        const diff = Math.abs(score - otherScore)
        if (diff < closestFriend) {
            closestFriend = diff
            closestFriendIndex = index
        }
        console.log(score, otherScore)
    })
    console.log(closestFriend)

    res.json(JSON.stringify(friends[closestFriendIndex]))
    friends.push(req.body) //friends[friends.length] = req.body
})



module.exports = router;

