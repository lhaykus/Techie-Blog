const router = require('express').Router();

const apiRoutes = require('./routes');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');



router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
