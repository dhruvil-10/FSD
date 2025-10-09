const express = require('express')

const app = express()
const port = 4001

app.get('/', (req, res)=> {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's Navigation App</title>
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
                    padding: 2rem;
                }
                
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                h1 {
                    color: white;
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
                
                .nav-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                
                .nav-card {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    padding: 2rem;
                    border-radius: 15px;
                    text-align: center;
                    text-decoration: none;
                    color: white;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .nav-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }
                
                .nav-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .nav-card p {
                    opacity: 0.9;
                }
                
                .welcome-msg {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 1.5rem;
                    border-radius: 10px;
                    color: white;
                    text-align: center;
                    margin-bottom: 2rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🏠 Navigation Hub</h1>
                
                <div class="welcome-msg">
                    <h2>Hello Vishvam! 👋</h2>
                    <p>Welcome to your personal navigation center. Explore the different sections below.</p>
                </div>
                
                <div class="nav-grid">
                    <a href="/home" class="nav-card">
                        <h3>🏠 Home</h3>
                        <p>Visit the homepage</p>
                    </a>
                    
                    <a href="/about" class="nav-card">
                        <h3>👤 About</h3>
                        <p>Learn more about me</p>
                    </a>
                    
                    <a href="/contact" class="nav-card">
                        <h3>📞 Contact</h3>
                        <p>Get in touch</p>
                    </a>
                </div>
            </div>
        </body>
        </html>
    `)
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html')
})

app.get('/contact', (req,res) => {
    res.sendFile(__dirname+'/contact.html')
})

app.get('/about', (req,res) => {
    res.sendFile(__dirname+'/about.html')
})

app.listen(port, ()=> {
    console.log("App1 Running on Port 4001")
})