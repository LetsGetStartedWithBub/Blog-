const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const postDataCopy = require('../models/postData')

router.post('/create', (request, response) =>{
    const postblog = new postDataCopy({
        title : request.body.title,
        body : request.body.body,
        author : request.body.author
    })
    postblog.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
router.get('/read', (request,response) => {
    postDataCopy.find()
    .then(result => {
        response.status(200).json({
            data:result
        })
    })
    .catch(error =>{
        response.json(error)
    })
})
router.get('/detail/:id', (request, response) =>{
    console.log(request.params.id)
    postDataCopy.findById(request.params.id)
    .then(result =>{
        console.log("This is deatils.js route");
        console.log(result);
        response.status(200).json({
            data:result
        })
    })
    .catch(error =>{
        console.log(error);
        response.json(error)
    })
})
router.delete('/delete/:id', (request, response) =>{
    postDataCopy.remove({_id : request.params.id})
    .then(result => {
        response.status(200).json({
            message: "product deleted",
            result : result
        })
    })
    .catch(error =>{
        console.log(error);
        response.json(error)
    })
})
module.exports = router;