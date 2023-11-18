const toDoListItem = require('../models/item')
const mongoose = require('mongoose')

//get all workouts

const getItems = async (req,res) => {
    const items = await toDoListItem.find({}).sort({createdAt: -1})
    res.status(200).json(items)
}
//get a single workout
const getItem = async(req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json('No item found')
    }
    const item = await toDoListItem.findById(id)
    if(!item){
        return res.status(404).json({error: 'No item found'})
    }
    res.status(200).json(item)
}


//create new workout
const createWorkout = async (req, res) => {
    const {title, desc} = req.body
    try {
        const item = await toDoListItem.create({title, desc})
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}

//delete a workout
const deleteItem= async(req,res) =>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json('No item found')
    }
    const item = await toDoListItem.findOneAndDelete({_id: id})

    if(!item){
        return res.status(404).json({error: 'No item found'})
    }

    res.status(200).json(item);

}

//update a workout
const updateItem = async(req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json('No item found')
    }
    const item = await toDoListItem.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!item){
        return res.status(404).json({error: 'No item found'})
    }
    res.status(200).json(item);

}

module.exports = {
    createWorkout,
    getItems,
    getItem,
    deleteItem,
    updateItem
}



