const express = require('express')
const fs = require('fs')

const app = express()
const port = 4000

app.get('/', (req,res)=> {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vishvam's File Reader App</title>
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
                
                .feature-card {
                    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                    padding: 2rem;
                    border-radius: 15px;
                    color: #333;
                    text-decoration: none;
                    display: block;
                    transition: all 0.3s ease;
                    margin-bottom: 1rem;
                }
                
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                
                .feature-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 0.5rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📁 Hello Vishvam!</h1>
                <p class="subtitle">File System Operations Demo</p>
                
                <a href="/logs" class="feature-card">
                    <h3>📋 View Error Logs</h3>
                    <p>Read and display error log files</p>
                </a>
            </div>
        </body>
        </html>
    `)
})

app.get('/logs', (req, res) => {
    fs.readFile("errors.txt", "utf-8", function(err, data){
        if (err) {
            return res.status(500).send(`
                <h1>Error Log Viewer</h1>
                <p style="color:red;">Error: Could not read file.</p>
                <p>Reason: ${err.message}</p>
            `);
        }

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error Log Viewer - Vishvam's App</title>
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
                        padding: 2rem;
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
                    
                    .log-container {
                        background: #1a1a1a;
                        border-radius: 12px;
                        padding: 20px;
                        box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
                        border: 2px solid #333;
                    }
                    
                    .log-header {
                        color: #00ff00;
                        font-weight: 600;
                        margin-bottom: 15px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #333;
                    }
                    
                    pre {
                        color: #00ff00;
                        font-family: 'Courier New', monospace;
                        font-size: 14px;
                        line-height: 1.6;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                    }
                    
                    .nav-btn {
                        display: inline-block;
                        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
                        color: white;
                        padding: 12px 25px;
                        border-radius: 25px;
                        text-decoration: none;
                        font-weight: 600;
                        margin-top: 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .nav-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 15px rgba(238, 90, 36, 0.4);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📋 Error Log Viewer</h1>
                    <div class="log-container">
                        <div class="log-header">🔍 System Error Logs:</div>
                        <pre>${data}</pre>
                    </div>
                    <a href="/" class="nav-btn">← Back to Home</a>
                </div>
            </body>
            </html>
        `);
    })
})

app.listen(port, ()=> {
    console.log(`App4 Running on Port ${port}`)
})