const express = require('express');
const router = express.Router();

const { Group, Image, Venue, Event } = require('../../db/models');

router.get('/', async (req, res) => {
  const allEvents = await Event.findAll({
    include: [{model: Group, attributes: ['id', 'name', 'city', 'state'] }, {model: Venue, attributes: ['id', 'city', 'state']}]
  })

  if (allEvents) {
    res.json(allEvents)
  }
})

module.exports = router;
