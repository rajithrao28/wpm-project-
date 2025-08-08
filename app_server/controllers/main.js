const homepageController = (req, res) => {
res.render('index', { title: 'Express' });
};
/* GET homepage. */
router.get('/', homepageController);