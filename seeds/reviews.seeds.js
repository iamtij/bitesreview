require('../db')

const mongoose = require('mongoose');
const ReviewsModel =require('../models/Reviews.model.js')

ReviewsModel.create([
    {
        rating: 5,
        review: "Food is awesome",
        image: "https://bitesreview.s3.ap-southeast-1.amazonaws.com/restaurants-thumbnail/burgerking.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaDmFwLXNvdXRoZWFzdC0xIkcwRQIgTWyhB%2F81%2BoorJZlx32zHAZSXYoXgj3eKNyytjSFqdDsCIQDcfOYw5mXieeCkLVxP638O5K2plN00kVZUtugyfZezWCqiAgij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDg5Mjc2NzI2MjQyMyIM0VrOPpJxTjt6udrhKvYBkBsYYxsnPHt2n9iatUlM800MMkvfrr3i20ZZN0STqHXeZ0wNWdsY%2BECBMId%2FVeMpMPcJIADktitdY5dqv5C9tMJ18Cnh4nVFwVKzp5Z%2Bec8iKEhncJg0tMtU5iJ8w%2FKOeMg8Mi4XYFMHKUNluovLHO6H%2FFqXfeqxULmOCu%2BeLVEsHmHHMl8tES06VVvrvhgIzFXiN9nKEMozsDF8djbD0vA0uFMCtPRFi5czgsGqTWw5mdBm5rceS560K5d0ZLUbVt36fauEz%2FSSg3H1jGrh28vye2eFzKEW2cgQs8NANir0KEE2kJ%2FYkCojl6gxXE1a1%2BuPXsSbMNeA%2Bp0GOt8B4q9Wa%2F1OrR5oRP8lsqZCgXfZkWM2usjNFka258aZmQOkwlUsxcvac4LozRmmwGqQPxZ7%2BCRhKR1QzmJ%2BAgy4mtpkGDnN2T5rb6pRvbFpMMGPo3iMDmLSyDpFBg4QXa%2BHOEVjfE2Uk%2FE%2FMERtrJjp4uccy1Sf9UuTsGFPF6GADmAPsii1Gaz4GeGIoJE%2F%2BgOuQ4zP3C4FyKwf70TKAx%2BVOp9La4NHq9WcuGWXqAa4e40mSN%2BMOhcAqvUlL9jlpxTujHGBsGi70YpiL6qpIRanmOwEm34WpJLdvtFux8QkVA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230111T094557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA47XITK3LRN52OAVD%2F20230111%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=c0aa801f7e0fbc87a5bf8d165c552a208e4ec5be0af1a24daebf22a534f3d0b0",
        reviewer: "Alex Tan",
        user_id: '63c2701e6e30650d8d2aa7ba'
    }
    ])
    .then(() => {
        console.log('Data added')
    })
    .catch(() => {
        console.log('Seeding failed')
    })
    .finally(() => {
        mongoose.connection.close()
    })


