const Router = require('@koa/router');
let mysql = require('mysql')
const router = new Router({
    prefix: '/store'
});

router.get('/', ctx => {
    ctx.body = 'Test12'
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contactformdatabase'
    });
    
    connection.connect(function(err){
        if (err) {
            console.error('Error connecting to database' + err.message)
            return;
        }
        console.log('Connected to database' + connection.threadId)
        let sql = "SELECT `model`, `price`, `description`, `image` FROM `products`";
        let values = [];
        
        connection.query(sql, function(err, result){
            if (err) throw err;
            console.log(result)
            let values = [result];
            //console.log(values)
        });
        connection.end();
    });
    
});

router.post('/', ctx => {
    ctx.body = 'Test2 - post'
    
});

module.exports = router;
