const express = require('express')

const app = express()
const port = 4002


//Whenver use ejs then add these below two lines
app.set('views',__dirname+'/views')
app.set('view engine', 'ejs')


//For API endpoint add below line 
app.use(express.urlencoded())

app.get('/', (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's EJS Demo App</title>
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
                    max-width: 600px;
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
                
                .features {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                
                .feature-card {
                    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
                    padding: 1.5rem;
                    border-radius: 15px;
                    color: #333;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                
                .feature-card h3 {
                    margin-bottom: 0.5rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🎯 Hello Vishvam!</h1>
                <p class="subtitle">Welcome to the EJS Template Demo Application</p>
                
                <div class="features">
                    <a href="/homepage" class="feature-card">
                        <h3>🏠 Homepage</h3>
                        <p>View EJS template with dynamic content</p>
                    </a>
                    
                    <a href="/marksheet" class="feature-card">
                        <h3>📊 Marksheet</h3>
                        <p>Calculate and display marks</p>
                    </a>
                </div>
            </div>
        </body>
        </html>
    `)
})

app.get('/homepage', (req,res) => {
    res.render('home', {myname: "Vishvam"})
})

app.get('/marksheet', (req, res) => {
    res.render('marksheet')
})


//API Endpoint 
app.post('/marksheetprocess', (req,res) => {
    var sub1 = req.body.sub1
    var sub2 = req.body.sub2

    var total = parseInt(sub1) + parseInt(sub2)
    res.render('ans', {mysub1: sub1, mysub2: sub2, result: total})
})

app.listen(port, ()=> {
    console.log("App2 Running on Port 4002")
})