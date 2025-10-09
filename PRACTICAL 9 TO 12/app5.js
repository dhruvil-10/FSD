const express = require('express')

const app = express()
const port = 4000

app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.get('/', (req,res)=> {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's Dashboard App</title>
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
                
                .dashboard-card {
                    background: linear-gradient(135d, #f093fb 0%, #f5576c 100%);
                    padding: 2rem;
                    border-radius: 15px;
                    color: white;
                    text-decoration: none;
                    display: block;
                    transition: all 0.3s ease;
                }
                
                .dashboard-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                
                .dashboard-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🎯 Hii Vishvam!</h1>
                <p class="subtitle">Welcome to your Personal Dashboard</p>
                
                <a href="/homedashboard" class="dashboard-card">
                    <h3>📊 Home Dashboard</h3>
                    <p>Access your personalized dashboard with EJS templates</p>
                </a>
            </div>
        </body>
        </html>
    `)
})

app.get('/homedashboard', (req,res)=> {
    res.render('homedashboard', {name: "Vishvam"})
})

app.listen(port, ()=> {
    console.log(`App5 Running on Port ${port}`)
})