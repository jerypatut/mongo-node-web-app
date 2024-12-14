const notFound = (req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f2f2f2;
                    }
                    .message {
                        text-align: center;
                        font-size: 24px;
                        color: #333;
                        padding: 20px;
                        border-radius: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h1>404 - Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </body>
        </html>
    `);
};

module.exports = notFound;
