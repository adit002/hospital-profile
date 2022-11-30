const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/index', (req, res,next)=>{
   res.sendFile(path.join(__dirname, 'index.html'));
});
module.exports = router;