const router = require('express').Router();

router.get('/', (req, res) => {
    // res.send('Hello from user route');
    const user = {
        name: 'John',
        hobby: 'Skating'
    };
    res.send(user);
});

module.exports = router;