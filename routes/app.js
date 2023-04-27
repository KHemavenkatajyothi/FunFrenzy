var express = require('express');
var router = express.Router();
const ejs=require('ejs');

// var mongojs = require('mongojs')
// var cString=""
// var db = mongojs(cString, [])

// router.use(
//     express.urlencoded({
//       extended: true
//     })
// )
var mongojs = require('mongojs')
var cString="mongodb+srv://Hema:Hema@cluster0.r5stcec.mongodb.net/FunFrenzy?retryWrites=true&w=majority";
var db = mongojs(cString, ['StoryTellers'])
// var user ={
//     name:"Meher",
//     email:"meherspr@gmail.com",
//     mobile:"9849687852",
// }
// db.StoryTellers.insert(user,function(err,docs){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(docs)
//     }
// })

router.post('/ssignupar',function(req,res){
    id1=req.body.uname;
    var user={
        name:req.body.uname,
        email:req.body.mail,
        password:req.body.psw,
        select:req.body.rr,
        pic:req.body.pic,
        about:req.body.about,
    }
    console.log(user)
    db.select.insert(user,function(err,docs){
            if(err){
                console.log(err)
            }
            else{
                console.log(docs)
                res.render("ssignupar");
            }
        })
    })
router.post('/ssignup',function(req,res){
    id1=req.body.u1name;
    var user1={
        name:req.body.u1name,
        email:req.body.mail1,
        password:req.body.psw1,
    }
    // console.log(user1)
    // res.send("hello");
    db.audience.insert(user1,function(err,docs){
            if(err){
                console.log(err)
            }
            else{
                console.log(docs)
                res.render("ssignup");
            }
        })
    })
router.post('/ccomitform',function(req,res){
    id1=req.body.uname;
    var data={
        name:req.body.uname2,
        date:req.body.date2,
        place:req.body.place2,
        link:req.body.link2,
        title:req.body.title,
    }
    console.log(data)
    db.commitments.insert(data,function(err,docs){
            if(err){
                console.log(err)
            }
            else{
                console.log(docs)
                res.render("ccomitform");
            }
        })
})

router.post('/page1',function(req,res){
    id1=req.body.luname;
    id2=req.body.lpsw;
    id3=req.body.usertype;
    console.log(id3);
    var test=db.select;
    var test1=db.audience;
    if(id3=="artist"){
        let promiseOfFind = test.find({name:id1,password:id2}).toArray((err, docs) => {
            if(docs.length!=0){
                res.render("page1ar",{id3:id3,id1:id1});
            }
            else{
                res.send("Enter valid details");
            }
         })
    }
    if(id3=="audience"){
        let promiseOfFind = test1.find({name:id1,password:id2}).toArray((err, docs1) => {
            if(docs1.length!=0){
                res.render("page1",{id3:id3,id1:id1});
            }
            else{
                res.send("enter valid details");
            }
        })
    }
})
router.get('/buyform',(req,res,next)=>{
    res.render('buyform');
})
router.get('/sbuyform',(req,res,next)=>{
    res.render('sbuyform');
})
// router.get('/stryar1',function(req,res){
//     var test1=db.commitments;
//     let promiseOfFind = test1.find({select:""}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("stryar1",{l1:docs1});
//         }
//     })
// })
// router.get('/stry1',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"storyteller"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("stry1",{l1:docs1});
//         }
//     })
// })
// router.get('/dancer',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"dancer"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("dancer",{l1:docs1});
//         }
//     })
// })
// router.get('/pop',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"popstar"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("pop",{l1:docs1});
//         }
//     })
// })
// router.get('/stc',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"standupcomedy"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("stc",{l1:docs1});
//         }
//     })
// })
// router.get('/sing',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"singer"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("sing",{l1:docs1});
//         }
//     })
// })
// router.post('/page2',async function(req,res){
//     console.log(id1);
//     var value=req.body.val
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:value}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("page2",{l1:docs1});
//         }
//     })
// })
router.post('/page2',async function(req,res){
    console.log(id1);
    var value=req.body.val;
    var id3=req.body.rad;
    var id1=req.body.id1;
    var test1=db.select;
    let promiseOfFind = test1.find({select:value}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("page2",{l1:docs1,id3:id3,id1:id1});
        }
    })
})
router.post('/stry11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("stry11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/sing11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("sing11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/PP11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("PP11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/TT11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("TT11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/dance11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("dance11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/pop11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("pop11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/stc11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("stc11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.post('/pt11',async function(req,res){
    var id=req.body.name123;
    var test1=db.commitments;
    var id1=req.body.id1;
    var id3=req.body.rad;
    let promiseOfFind = test1.find({name:id}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("pt11",{l9:docs1,id1:id1,id3:id3,id:id});
        }
    })
})
router.get('/TT',function(req,res){
    var test1=db.select;
    let promiseOfFind = test1.find({select:"tedtalk"}).toArray((err, docs1) => {
        if(docs1.length!=0){
            console.log(docs1);
            res.render("TT",{l1:docs1});
        }
    })
})
router.post('/favs',function(req,res){
    // console.log(req.body.id1);
    // console.log(req.body.rad);
    // console.log(req.body.id);
    var id3=req.body.rad;
    var user1={
        u_name:req.body.id1,
        fav_art_name:req.body.id,
    }
    let promiseOfFind = favorites.find({fav_art_name:id}).toArray(async(err, docs1) => {
        if(await docs1.length==0){
            db.favorites.insert(user1,function(err,docs){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(docs)
                    res.render("favs",{id3:id3});
                }
            })
        }
    })
})
// router.get('/PP',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"puppet"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("PP",{l1:docs1});
//         }
//     })
// })
// router.get('/pt',function(req,res){
//     var test1=db.select;
//     let promiseOfFind = test1.find({select:"poet"}).toArray((err, docs1) => {
//         if(docs1.length!=0){
//             console.log(docs1);
//             res.render("pt",{l1:docs1});
//         }
//     })
// })
router.post('/favorites',function(req,res){
    var id1=req.body.id1;
    var favo=db.favorites;
    var favo1=db.select;
    let promiseOfFind =favo.find({u_name:id1}).toArray((err, docs8) => {
                if(docs8.length!=0){
                     let promiseOfFind1 =favo1.find({u_name:id1}).toArray((err, docs7) => {
                    //console.log(docs8);
                    console.log(docs7);
                    res.render("favorites",{l4:docs8,l5:docs7});
                })
                }
            })
        })
router.get('/',function (req,res,next){
    res.render('landing_page');
})
router.get('/landing_page',function (req,res,next){
    res.render('landing_page');
})
router.post('/contactartform',function (req,res,next){
    res.render('contactartform');
})
router.get('/scontactartform',function (req,res,next){
    res.render('scontactartform');
})
router.get('/signup',(req,res,next)=>{
    res.render('signup');
})
router.get('/signupar',(req,res,next)=>{
    res.render('signupar');
})
router.get('/login1',(req,res,next)=>{
    res.render('login1');
})
router.get('/contactus',(req,res,next)=>{
    res.render('contactus');
})
router.post('/scontact',(req,res,next)=>{
    res.render('scontact');
})
router.get('/about',(req,res,next)=>{
    res.render('about');
})
router.post('/ccomitform',(req,res,next)=>{
    res.render('ccomitform');
})
router.get('/page1',(req,res,next)=>{
    res.render('page1');
})
router.get('/page1ar',(req,res,next)=>{
    res.render('page1ar');
})
router.get('/favorites',(req,res,next)=>{
    res.render('favorites');
})

router.get('/arform',(req,res,next)=>{
    res.render('arform');
})
module.exports=router;