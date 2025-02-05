# AI Agent Prediction App

This is a simple web application built using Flask and Docker. The application allows users to input parameters via a form, sends these parameters to a backend agent inference system, and returns a prediction based on the input.

## Features
- Flask-based backend API that handles agent inference.
- Dockerized setup for easy deployment.
- A simple frontend form for user input.

## Project Structure

```bash
├── Dockerfile                 # Dockerfile for building the app
├── agent_inference.py         # Main Flask app that handles the AI agent inference
├── templates/                 # HTML templates for the Flask app
│   └── index.html
├── static/                    # Static files (CSS, JS, images, etc.)
│   ├── css/
│   │   └── style.css          # Stylesheet for the app
│   ├── js/
│   │   └── script.js          # JavaScript logic for form handling
│   └── images/
│       └── logo-secondary.svg # Logo for the app
├── .env                       # Environment file (for license key, etc.)
├── requirements.txt           # Python dependencies
└── README.md                  # This readme file

Requirements

	•	Docker
	•	Python 3.10.x

Getting Started

1. Clone the Repository

`git clone https://github.com/composabl/agent-action-api-app.git`
`cd agent-action-api-app`

2. Build the Docker Image

To build the Docker image for the app, run:

`docker build -t agent-action-api-app .`

3. Run the Application

After building the Docker image, run the container:

`docker run -p 8000:8000 --env-file .env -v $(pwd):/usr/src/app my-agent-runtime`

This will start the Flask app on http://localhost:8000.

4. Environment Variables

Make sure to add your COMPOSABL_LICENSE key in the .env file:

COMPOSABL_LICENSE=your_license_key_here

Accessing the App

After running the app, open your browser and go to:

http://localhost:8000

This will display a form where you can input values and get predictions from the AI agent.

Form Input

The form fields include:

	•	T
	•	Tc
	•	Ca
	•	Cref
	•	Tref
	•	Conc_Error
	•	Eps_Yield
	•	Cb_Prod

Submit the form to receive a prediction in the “AI Agent Prediction” section.

API Request

You can also directly test the /predict API endpoint using curl or Postman:

Example curl command:

curl -X POST http://localhost:8000/predict -H "Content-Type: application/json" -d '{
  "observation": {
    "T": 311.0,
    "Tc": 292.0,
    "Ca": 8.56,
    "Cref": 8.56,
    "Tref": 311.0,
    "Conc_Error": 0.0,
    "Eps_Yield": 0.0,
    "Cb_Prod": 0.0
  }
}'

Development Setup (Without Docker)

If you prefer to run the app locally without Docker:

	1.	Install the required dependencies:

`pip install -r requirements.txt`


	2.	Start the Flask app:

`python agent_inference.py`


The app will run on http://localhost:8000

Notes

	•	Flask is running in debug mode for development purposes. Make sure to disable it in production by setting debug=False.
	•	Static files (CSS, JS, and images) are served from the /static/ directory.

License

Make sure you have a valid license for the AI agent (COMPOSABL_LICENSE), as this is required for the app to work.

Contributions

Feel free to contribute by submitting pull requests or opening issues!


