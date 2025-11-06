# BenchForge

BenchForge is a modern, extensible platform for benchmarking the performance of AI models. It provides a simple interface to run inference tasks on various models using different datasets and visualizes the results, helping developers and researchers make informed decisions about model selection and optimization.

## Features

- **Modular Backend:** Built with Node.js and Express, featuring a clean, scalable architecture with separate routes, controllers, and services.
- **Dynamic Frontend:** A responsive user interface built with React, Vite, and TypeScript for a fast and seamless user experience.
- **AI Model Integration:** Easily benchmark models from the Hugging Face Hub using the Inference API.
- **File Management:** Upload and manage datasets and other files with MongoDB GridFS.
- **Dynamic Benchmarking:** Create, run, and view benchmark results in real-time.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, GridFS
- **API Integration:** Hugging Face Inference API

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/benchforge.git
    cd benchforge
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    # MongoDB connection string
    MONGODB_URI=mongodb://localhost:27017

    # Hugging Face API Token
    # Get your token from https://huggingface.co/settings/tokens
    HF_API_TOKEN=your-hugging-face-api-token
    ```
    You can use the provided `.env.example` as a template.

4.  **Run the application:**
    - **Start the backend server:**
      ```bash
      npm run server
      ```
    - **Start the frontend development server:**
      ```bash
      npm run dev
      ```
    The application will be available at `http://localhost:5173`.

## Usage

1.  Navigate to the **Benchmarks** page.
2.  Click on the **New Benchmark** button to open the creation modal.
3.  Enter the name of the Hugging Face model you want to test (e.g., `bert-base-uncased`).
4.  Provide a sample input for the dataset (e.g., a sentence for a classification model).
5.  Click **Create Benchmark**. The new benchmark will appear in the table, and its status will update once the inference is complete.

## API Endpoints

-   `GET /api/files`: List all uploaded files.
-   `POST /api/files`: Upload a new file.
-   `POST /api/models/inference`: Run inference on a specific model.
-   `GET /api/benchmarks`: Get a list of all benchmarks.
-   `POST /api/benchmarks`: Create and run a new benchmark.

## Roadmap

Our vision for BenchForge is to become a comprehensive tool for AI model evaluation. Here are some of the features we plan to implement:

-   **Advanced Performance Metrics:**
    -   **Accuracy:** Implement methods to calculate model accuracy by comparing predictions against a ground-truth dataset.
    -   **Latency:** Measure the time it takes for a model to produce a response (inference time).
    -   **Throughput:** Measure the number of inference requests a model can handle per second.

-   **Expanded Model Support:** Integrate with other AI model providers and APIs.
-   **Custom Datasets:** Allow users to upload and use their own datasets for benchmarking.
-   **Detailed Visualizations:** Create more detailed charts and graphs to compare the performance of different models.
-   **User Authentication:** Add user accounts and authentication to save and manage benchmark results.
