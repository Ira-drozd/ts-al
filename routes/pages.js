const { Router } = require("express");
const router = Router();
const SEO = require("./constants.js");

router.get("/", function (req, res) {
  res.render("index", {
    title: SEO.index.title,
    description: SEO.index.description,
    isIndex: true,
  });
});

router.get("/products", function (req, res) {
  res.render("products", {
    title: SEO.products.title,
    description: SEO.products.description,
    isProducts: true,
  });
});

router.get("/gallery", function (req, res) {
  res.render("gallery", {
    title: SEO.gallery.title,
    description: SEO.gallery.description,
    isGallery: true,
  });
});

router.get("/news", function (req, res) {
  res.render("news", {
    title: SEO.news.title,
    description: SEO.news.description,
    isNews: true,
  });
});

router.get("/contacts", function (req, res) {
  res.render("contacts", {
    title: SEO.contacts.title,
    description: SEO.contacts.description,
    isContacts: true,
  });
});

router.get("/cooperation", function (req, res) {
  res.render("cooperation", {
    title: SEO.cooperation.title,
    description: SEO.cooperation.description,
    isCooperation: true,
  });
});

router.get("/glazing", function (req, res) {
  res.render("frameless-glazing", {
    title: SEO.framelessGlazing.title,
    description: SEO.framelessGlazing.description,
    isProducts: true,
  });
});

router.get("/awnings", function (req, res) {
  res.render("awnings", {
    title: SEO.awnings.title,
    description: SEO.awnings.description,
    isProducts: true,
  });
});

router.get("/winter-garden", function (req, res) {
  res.render("winter-garden", {
    title: SEO.winterGarden.title,
    description: SEO.winterGarden.description,
    isProducts: true,
  });
});

module.exports = router;
