const userRoutes = require('./routes/usersroutes');
const commentRoutes = require('./routes/commentsroutes');

app.use('/users', userRoutes);
app.use('/comments', commentRoutes);
