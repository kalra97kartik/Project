const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res) => {
    res.render('login',{user:req.user});

});

    //auth logout
router.get('/logout',(req,res)=>{
    //handle with passport
    req.logout();
    res.redirect('/');

})

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

module.exports = router; 

// //callback route  for google to redirect to
    router.get('/google/redirect',passport.authenticate('google'),(req,res) =>
    {     
        res.redirect('/profile/'); 
    }) 
    