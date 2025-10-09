const express = require('express')

const app = express()
const port = 4000

app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.use(express.urlencoded())

app.get('/', (req,res)=> {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's Math Calculator App</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                }
                
                .container {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 3rem;
                    text-align: center;
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    max-width: 500px;
                    width: 100%;
                }
                
                h1 {
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
                
                .subtitle {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                }
                
                .calculator-card {
                    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
                    padding: 2rem;
                    border-radius: 15px;
                    color: #333;
                    text-decoration: none;
                    display: block;
                    transition: all 0.3s ease;
                }
                
                .calculator-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                
                .calculator-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .math-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🧮 Hello Hi Vishvam!</h1>
                <p class="subtitle">Advanced Math Calculator</p>
                
                <a href="/maths" class="calculator-card">
                    <div class="math-icon">🔢</div>
                    <h3>Math Operations</h3>
                    <p>Perform addition, subtraction, multiplication and division with our smart calculator</p>
                </a>
            </div>
        </body>
        </html>
    `)
})

app.get('/maths', (req,res)=> {
    res.render('maths')
})

app.post('/mathsans', (req,res)=> {
    var a = parseFloat(req.body.num1)
    var b = parseFloat(req.body.num2)

    if(isNaN(a) || isNaN(b)){
        return res.send("Invalid Input. Please enter valid input numbers")
    }

    let add = a+b;
    let sub = a-b;
    let mul = a*b;
    let div = b != 0 ? (a/b).toFixed(2) : "Division by Zero is Not Allowed";
    res.render('mathsans', {a, b, add, sub, mul, div})
})

app.listen(port, ()=> {
    console.log(`App6 Running on Port ${port}`)
})