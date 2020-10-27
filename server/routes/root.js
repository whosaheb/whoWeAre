const { Router } = require("express");
const expree = require ('express');
const router  = expree.Router();

router.get('/',(req, res)=>{
	time = new Date();
	res.send('whoWeAre focused on life. Now the time is : ' + time);
});

module.exports = router;