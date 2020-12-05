const {Router} = require('express')
const router = Router()


router.get('/', function (req, res) {
    res.render('index', {
        title: 'TS-Aluminium',
        isIndex: true
    })
})

router.get('/products', function (req, res) {
    res.render('products', {
        title: 'Products',
        isProducts: true
    })
})

router.get('/catalog', function (req, res) {
    res.render('catalog', {
        title: 'Catalog',
        isCatalog: true
    })
})

router.get('/gallery', function (req, res) {
    res.render('gallery', {
        title: 'Gallery',
        isGallery: true
    })
})


router.get('/news', function (req, res) {
    res.render('news', {
        title: 'News',
        isNews: true
    })
})

router.get('/contacts', function (req, res) {
    res.render('contacts', {
        title: 'Contacts',
        isContacts: true
    })
})

router.get('/cooperation', function (req, res) {
    res.render('cooperation', {
        title: 'Cooperation',
        isCooperation: true
    })
})

router.get('/glazing', function (req, res) {
    res.render('frameless-glazing', {
        title: 'Frameless Glazing',
        isProducts: true
    })
})


module.exports = router