const express = require('express');
const { showHomePage, showMenuPage, showTeamPage, showServicesPage, showCareerPage, showContactPage } = require('../controllers/pageController');


const router = express.Router();

// homepage Routes
router.get('/', showHomePage);
router.get('/menu', showMenuPage);
router.get('/team', showTeamPage);
router.get('/services', showServicesPage);
router.get('/careers', showCareerPage);
router.get('/contact', showContactPage);

module.exports = router;