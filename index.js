const express = require('express');

const app= express();

const math = require('./services/math');

// const isNumber = require('is-number');

// const app2 = isNumber();

const port = 3000;

app.get('/math/add', (req, res) => {
     const a = parseInt(req.query.a);
     const b = parseInt(req.query.b);
     const sumString = `${a} + ${b},`  
     const sum = math.add(a,b);


    res.send(`{ 
    input: {
      a: ${a},
      b: ${b}
    },
    sumString: ${sumString}
    sum: ${sum}
}`)
});



app.get('/math/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const productString = `${a} * ${b},`
    const product = math.multiply(a,b);
    console.log(request.query);

    // res.contentType('html')
   res.send(`{ 
   input: {
     a: ${a},
     b: ${b}
   },
   productString: ${productString}
   product: ${product}
}`)
});


app.listen(port, () => {
    console.log(`listening at port ${port}`)
});  

