const express = require('express');
const app = express();

// Default route
app.get('/', (req,res) => 
    res.json({msg: 'Welcome to my blog'})
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
// app.use('/api/blogs', require('./routes/blog'));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));