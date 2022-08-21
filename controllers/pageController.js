const express = require('express');
const path = require('path');

const showHomePage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

const showMenuPage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
}

const showServicesPage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/services.html'));
}

const showTeamPage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/our-team.html'));
}

const showCareerPage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/careers.html'));
}

const showContactPage = ( req, res ) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact-us.html'));
}

module.exports = {
    showHomePage,
    showMenuPage,
    showServicesPage,
    showTeamPage,
    showCareerPage,
    showContactPage
}