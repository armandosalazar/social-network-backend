const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { email, password } = req.body;

    // print request headers
    console.log('req.headers', req.headers);
    // get autorization header
    const authorization = req.headers.authorization;
    // print authorization header
    console.log('authorization', authorization);
    // get token from authorization header
    // console.log(jwt.verify(authorization.split(' ')[1], 'secret'));

    const token = jwt.sign({
        // Aquí va la información que quieras que viaje en el token
        email,
        password
    }, 'secret', { expiresIn: '1h' });

    console.log('email', email);
    console.log('password', password);

    if (email === 'armando@email.com' && password === '123') {
        // send token in header
        res.header('Authorization', `Bearer ${token}`);
        res.status(200).json({
            message: 'Login successful',
            token
        });
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}