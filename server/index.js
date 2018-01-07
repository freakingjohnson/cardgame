require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    // , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , cloudinary = require('cloudinary')

const app = express()
// app.use(cors())
app.use(bodyParser.json())

// cloudinary.v2.api.resources_by_tag("cardimages", function (error, result) { console.log(result) })
// cloudinary.v2.uploader.destroy(publicID, function(error, result){console.log(result)});
// cloudinary.v2.api.delete_resources(['image1'], function (error, result) { console.log(result); });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// massive(process.env.DB_CONNECTION).then(db => {
//     app.set
//         ('db', db)
// })
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(express.static(__dirname + '/../build'))

// app.post('/upload', function (req, res, next) {
//     cloudinary.uploader.upload(req.file.path, function (result) {
//         console.log(result);
//     });
// })
// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new Auth0Strategy({

//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK
// }, function (accessToken, refreshToken, extraParams, profile, done) {
//     console.log(profile)
//     const db = app.get('db')
//     let userData = profile._json,
//         auth_id = userData.user_id.split('|')[1]
//     /*
//     1. user_name? user.name
//     2. email? user.email
//     3. img? user.picture
//     4. auth_id? user.user_id.split('|')[1]
//     */
//     db.find_user([userData.auth_id]).then(user => {
//         if (user[0]) {
//             return done(null, user[0].id)
//         } else {
//             db.create_user([userData.name, userData.email, userData.picture, auth_id])
//                 .then(user => {
//                     return done(null, user[0].id)
//                 })
//         }
//     })
// }))

// app.get('/auth', passport.authenticate('auth0'))
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: process.env.AUTH_PRIVATE_REDIRECT,
//     failureRedirect: process.env.AUTH_LANDING_REDIRECT
// }))

// passport.serializeUser(function (user, done) {
//     done(null, user) //usually save user id from DB to session
// })

// passport.deserializeUser(function (user, done) {
//     const db = app.get('db')
//     db.find_user_by_session([user]).then(user => {
//         done(null, user[0])
//     })
//     //make query call to find the user that matches req.user
// })

// app.get('/auth/me', function (req, res, next) {
//     if (!req.user) {
//         res.status(401).send('login required')
//     } else {
//         res.status(200).send(req.user)
//     }
// })

// app.get('/auth/logout', function (req, res, next) {
//     req.logout()
//     res.redirect(process.env.AUTH_LANDING_REDIRECT)
// })

app.listen(process.env.SERVER_PORT, () => { console.log('(0)_(0)') })

// check to see if user is admin
// function checkAdmin(req, res, next) {
//     if (req.user.type === 'admin') {
//         next()
//     } else {
//         req.redirect(/*whatever endpoint has your 401 page */)
//     }
// }