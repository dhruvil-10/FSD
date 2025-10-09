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
            <title>Vishvam's Income Calculator App</title>
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
                
                .income-card {
                    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
                    padding: 2rem;
                    border-radius: 15px;
                    color: #333;
                    text-decoration: none;
                    display: block;
                    transition: all 0.3s ease;
                }
                
                .income-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                
                .income-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .money-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>💰 Vishvam Hello!</h1>
                <p class="subtitle">Personal Income Calculator</p>
                
                <a href="/income" class="income-card">
                    <div class="money-icon">📊</div>
                    <h3>Income Calculator</h3>
                    <p>Calculate and track your total income from multiple sources</p>
                </a>
            </div>
        </body>
        </html>
    `)
})

app.get('/income', (req,res)=> {
    res.render('income')
})

app.post('/incomeresult', (req,res)=> {
    var s1 = parseFloat(req.body.s1)
    var s2 = parseFloat(req.body.s2)

    var total = s1+s2
    res.render('incomeresult', {s1, s2, total})
})

app.listen(port, ()=> {
    console.log(`App7 Running on Port ${port}`)
})