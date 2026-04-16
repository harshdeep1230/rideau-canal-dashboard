const express = require('express');
const { CosmosClient } = require('@azure/cosmos');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Azure Cosmos DB Configuration
const endpoint = process.env.COSMOS_ENDPOINT; 
const key = process.env.COSMOS_KEY;
const databaseId = process.env.DATABASE_ID;
const containerId = process.env.CONTAINER_ID;

const client = new CosmosClient({ endpoint, key });

app.use(express.static('public'));

// API Route to fetch latest sensor data
app.get('/api/status', async (req, res) => {
    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);

        // Query to get the latest entry for each of the 3 locations
        const querySpec = {
            query: "SELECT TOP 3 * FROM c ORDER BY c._ts DESC"
        };

        const { resources: items } = await container.items.query(querySpec).fetchAll();
        res.json(items);
    } catch (error) {
        res.status(500).send("Error fetching data from Cosmos DB");
    }
});

app.listen(port, () => {
    console.log(`Dashboard running at http://localhost:${port}`);
});
