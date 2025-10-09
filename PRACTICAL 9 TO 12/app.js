const express = require('express')

const app = express()
const port = 4000

app.use('/', (req, res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's App</title>
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
                }
                
                .container {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 60px 40px;
                    text-align: center;
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    animation: fadeInUp 1s ease-out;
                    max-width: 500px;
                    width: 90%;
                }
                
                h1 {
                    font-size: 2.8rem;
                    color: #fff;
                    margin-bottom: 20px;
                    font-weight: 700;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
                
                p {
                    font-size: 1.3rem;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 30px;
                    line-height: 1.6;
                }
                
                .badge {
                    display: inline-block;
                    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    box-shadow: 0 8px 15px rgba(238, 90, 36, 0.3);
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Welcome!</h1>
                <p>Hello World!!! This is Vishvam Here!!!</p>
                <div class="badge">Express.js App Running on Port 4000</div>
            </div>
        </body>
        </html>
    `)
})

app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
})