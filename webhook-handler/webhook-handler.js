const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());

// Webhook handler
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);

    // Example command (you can replace this with your specific command)
    const command = 'echo "Webhook triggered" >> /home/ubuntu/webhook.log';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return res.status(500).send('Command execution failed');
        }

        console.log(`Command Output: ${stdout}`);
        res.status(200).send('Webhook received and command executed successfully');
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Webhook handler listening on port ${PORT}`);
});
