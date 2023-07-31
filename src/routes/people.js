const { Router } = require('express');

const router = Router();
const people = [
    {
        name: 'John Doe',
    }, {
        name: 'Jane Brown',
    }, {
        name: 'John Brown',
    }
]

router.get('/', (req, res) => {
    res.json(people);
});

module.exports = router;