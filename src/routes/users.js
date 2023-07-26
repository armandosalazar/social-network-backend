const router = require('express').Router();

router.get('/', (req, res) => {
    const user = {
        name: 'John',
        hobby: 'Skating'
    };
    res.send(user);
});

module.exports = router;