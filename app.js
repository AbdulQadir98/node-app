const express = require('express'); // express module will return a function
const app = express(); 
// express() is a type of object with http methods
// Ex - app.get(), app.post(), app.put(), app.delete()
// these methods take 2 args- url and a call back function with 2 args req and res

const courses = [
    {id : 1, name: 'course1'},
    {id : 2, name: 'course2'},
    {id : 3, name: 'course3'},
];

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);  // to get param value - req.params.id
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('course not found');
    res.send(course);
});

app.get('/api/courses/:id/:name', (req, res) => {
    res.send(req.query);  // to print query param // ex - http://localhost:3000/api/courses/2/maths?stu=abdul
});




// create port
// app.listen(3000);

//read the host port environment value using process.env.PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`On port ${port}...`));

