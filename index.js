import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors()); // Allow all origins (customize as needed)

app.post('/send-to-slack', async (req, res) => {
    try {
        const slackWebhookUrl = `https://hooks.slack.com/triggers/${process.env.SLACK_WEBHOOK_URL‎_1}/${process.env.SLACK_WEBHOOK_URL‎_2}/${process.env.SLACK_WEBHOOK_URL_3}`;

        if (!slackWebhookUrl) {
            return res.status(500).json({ error: 'Slack webhook URL is missing' });
        }

        const response = await axios.post(slackWebhookUrl, req.body, {
            headers: { 'Content-Type': 'application/json' },
        });

        res.json({ success: true, message: 'Data sent to Slack', slackResponse: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to send data to Slack' });
    }
});

// Vercel requires this for deployment
export default app;
