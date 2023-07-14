const express = require('express');
const router = express.Router();
const { addMember, getAllMembers, getSingleMember } = require('../controllers/Member')



router.route('/').post(addMember).get(getAllMembers);
router.route('/:id').get(getSingleMember);


module.exports = router;