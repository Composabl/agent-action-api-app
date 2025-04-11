# Use a lightweight Python image
FROM python:3.10-slim

# Install necessary build dependencies
RUN apt update && apt install -y build-essential gcc g++ python3-dev

# Set the working directory
WORKDIR /usr/src/app

# Copy project files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 8000

# Run the application
CMD ["python", "agent_inference.py"]