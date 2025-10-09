const express = require('express')

const app = express()
const port = 4000

app.get('/', (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's Static Site Demo</title>
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
                
                .cta-button {
                    display: inline-block;
                    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
                    color: white;
                    padding: 15px 35px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 15px rgba(238, 90, 36, 0.3);
                }
                
                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(238, 90, 36, 0.4);
                }
                
                .info-text {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                    margin-top: 1rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🌟 Hello Vishvam!</h1>
                <p class="subtitle">Welcome to the Static Site Serving Demo</p>
                <a href="/homesite" class="cta-button">Visit Home Site 🏠</a>
                <p class="info-text">Experience a beautifully designed static HTML page</p>
            </div>
        </body>
        </html>
    `)
})

app.get('/homesite', (req,res) => {
    res.sendFile(__dirname+'/homesite.html')
})

app.listen(port, ()=> {
    console.log(`App3 Running on Port ${port}`)
})