var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

router.get('/:id', async function (req, res, next) {
  try {
    const story = await query(
      'SELECT * FROM story WHERE id = ?',
      req.params.id
    );
    const links = await query(
      'SELECT * FROM links WHERE story_id = ?',
      req.params.id
    );

    res.render('story', {
      id: req.params.id,
      story: story,
      links: links,
      title: "Jätten, gesällen och bältet "
    });

  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
