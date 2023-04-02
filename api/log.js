const Log = require('./models/logSchema');
const mongoose = require('mongoose')
const express = require('express')


exports.getAllLogs = async (req, res, next) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status().json({ message: 'Server error' });
  }
};


exports.createLog = async (req, res, next) => {
  try {
    const { title, description, image, latitude, longitude, visitDate, rating } = req.body;
    const log = new Log({ title, description, image, latitude, longitude, visitDate, rating });
    await log.save();
    res.json(log);
  } catch (err) {
    console.error(err);
    res.status().json({ message: 'Server error' });
  }
};


exports.getLogById = async (req, res, next) => {
  try {
    const log = await Log.findById(req.params.id);
    if (!log) return res.status(404).json({ message: 'Log not found' });
    res.json(log);
  } catch (err) {
    console.error(err);
    res.status().json({ message: 'Server error' });
  }
};


exports.updateLogById = async (req, res, next) => {
  try {
    const { title, description, image, latitude, longitude, visitDate, rating } = req.body;
    const log = await Log.findByIdAndUpdate(req.params.id, { title, description, image, latitude, longitude, visitDate, rating }, { new: true });
    if (!log) return res.status(404).json({ message: 'Log not found' });
    res.json(log);
  } catch (err) {
    console.error(err);
    res.status().json({ message: 'Server error' });
  }
};
   

