# Rideau Canal Skateway Live Dashboard

## Project Description
This repository contains the web application for the Rideau Canal Monitoring System. It is a full-stack Node.js application that fetches real-time ice conditions and safety telemetry from Azure Cosmos DB and presents them through a responsive, color-coded dashboard for public use.

## Student Information
* Name: Harshdeep Puri
* Student ID: 41170600
* Course: CST8916 - Cloud Computing

---

## Implementation Details
The dashboard serves as the "Hot Path" consumer in the system architecture, providing immediate visibility into the processed data coming from Azure Stream Analytics.

### Features
* Real-time Data Fetching: Periodically queries Azure Cosmos DB for the most recent sensor aggregations.
* Dynamic Safety UI: Displays location-based Safety Cards for NAC, Fifth Avenue, and Dows Lake.
* Color-Coded Status: Automatically renders status as Safe, Caution, or Unsafe based on ice thickness thresholds.
* Cloud Hosting: Fully deployed and managed via Azure App Service.

---

## Setup and Deployment

### 1. Prerequisites
* Node.js 18.x or higher installed.
* An active Azure Cosmos DB (NoSQL API) instance populated with telemetry data.

### 2. Installation
Clone this repository and install the dependencies:
```bash
git clone [https://github.com/harshdeep1230/rideau-canal-dashboard.git](https://github.com/harshdeep1230/rideau-canal-dashboard.git)
cd rideau-canal-dashboard
npm install
````

### 3\. Environment Configuration

Create a .env file locally for testing, or add these to your Azure App Service Settings:

  * COSMOS\_CONNECTION\_STRING: Primary connection string for your Cosmos DB.
  * DATABASE\_ID: The ID of your Cosmos database (e.g., RideauCanalDB).
  * CONTAINER\_ID: The ID of your container (e.g., SensorData).

### 4\. Running the App

To start the server locally:

```bash
npm start
```

The dashboard will be available at http://localhost:3000.

-----

## Repository Structure

  * /public: Static assets including index.html and style.css.
  * server.js: Express.js backend that handles the Cosmos DB connection and API routes.
  * package.json: Manages project scripts and dependencies.

-----

## Related Repositories

  * Main Documentation: [rideau-canal-monitoring]([https://www.google.com/search?q=https://github.com/harshdeep1230/rideau-canal-monitoring](https://github.com/harshdeep1230/rideau-canal-monitoring))
  * Sensor Simulation: [rideau-canal-sensor-simulation](https://www.google.com/search?q=https://github.com/harshdeep1230/rideau-canal-sensor-simulation)

## Live Link

[View the Live Dashboard on Azure](https://www.google.com/search?q=INSERT_YOUR_AZURE_APP_SERVICE_URL_HERE)

## References

  * Azure Cosmos DB Node.js SDK
  * Express.js Framework

