const express = require('express');
const { createWorkout,
        getItems,
        getItem,
        deleteItem,
        updateItem} = require('../controller/toDoController')
const router = express.Router();

router.get('/',getItems)

router.get('/:id',getItem)

router.post('/', createWorkout)

router.delete('/:id',deleteItem)

router.patch('/:id',updateItem)

module.exports = router;