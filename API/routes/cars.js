const express = require('express');
const router = express.Router();
const Car = require('../models/Car')


/**
 * GET ALL CARS
 */
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars)
    } catch (err) {
        res.json(err);
    }
});


/**
 * GET SPECIFIC CAR
 */
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.json(car)
    } catch (err) {
        res.json(err);
    }
});


/**
 * ADD CAR TO DATABASE
 */
router.post('/', async (req, res) => {
    console.log(req.body);

    const car = new Car({
        carName: req.body.name
    });

    try {
        const savedCar = await car.save()
        res.json(savedCar);
    }catch(err) {
        res.json(err);
    }
});


/**
 * EDIT CAR IN DATABASE
 */
 router.patch('/:id', async (req, res) => {
    try {
        const updatedCar = await Car.updateOne(
            { _id: req.params.id }, 
            { $set: {carName: req.body.name} }
        );
        res.json(updatedCar);
    }catch(err) {
        res.json(err);
    }
});


/**
 * REMOVE CAR FROM DATABASE
 */
 router.delete('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        res.json(car)
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;