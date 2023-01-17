const router = require("express").Router();
const RestaurantModel = require("../models/Restaurant.model");
const ReviewModel = require("../models/Reviews.model")


// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');

/* GET home page */
router.get("/", (req, res, next) => {
  RestaurantModel.find()
    .then((restaurants) => {
      res.render('index.hbs', {restaurants});
      console.log(restaurants)
    }).catch((err) => {
      console.log('Error')
    });
});

router.get('/add-restaurant',  (req,res,next) => {
  res.render('reviews/newrestaurant.hbs')
})

router.post('/add-restaurant', fileUploader.single('thumbnail'), (req,res,next) => {
  console.log(req.body)
  const {name, cuisine, address,city, createdby} = req.body
  RestaurantModel.create({name, cuisine, address,city, createdby, thumbnail:req.file.path })
    .then((result) => {
      res.redirect('/')
    }).catch((err) => {
      console.log('Creation failed')
    });
})

router.get('/reviews/:id/edit', (req,res,next)=> {
  const {id} = req.params
  RestaurantModel.findById(id)
  .then((restaurants) => {
    res.render('reviews/editrestaurant.hbs', {restaurants})
  }).catch((err) => {
    console.log('Restaurant edit failed')
  });
})


router.post('/reviews/:id/edit',fileUploader.single('thumbnail'), (req,res,next)=> {
  const {id} = req.params
  const {name, cuisine,address,city,createdby}= req.body

  
    RestaurantModel.findByIdAndUpdate(id, {name, cuisine,address,city,createdby,thumbnail:req.file.path })
    .then(() => {
      res.redirect('/')
    }).catch((err) => {
      console.log('Restaurant edit failed')
    });
  
 
})

router.get('/viewreviews/:id',(req,res,next)=> {
  const {id} = req.params
  ReviewModel.find({user_id:id})
    .populate('user_id')
    .then((reviews) => {
      console.log(reviews)
      res.render('reviews/viewreviews.hbs', {reviews,user_id:id})
    }).catch((err) => {
      console.log('View Review failed')
    });
})

router.get('/newreview/:id/new',(req,res,next)=> {
  const {id} = req.params
  ReviewModel.find({user_id:id})
    .populate('user_id')
    .then((reviews) => {
      res.render('reviews/newreview.hbs', {reviews,user_id:id})
    }).catch((err) => {
      console.log('View Review failed')
    });
})

router.post('/newreview/:id/add', fileUploader.single('thumbnail'), (req,res,next)=> {
  const {id} = req.params
  const {rating, review,image,reviewer}= req.body
  ReviewModel.create({rating, review,image,reviewer,user_id:id,image:req.file.path })
  .then(() => {
    res.redirect(`/viewreviews/${id}`)
  }).catch((err) => {
    console.log('Restaurant edit failed')
  });
})



module.exports = router;
