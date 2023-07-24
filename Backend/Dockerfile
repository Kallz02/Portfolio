# Use the official Python image as the base image
FROM python:3.9

# Set environment variables for Python buffering and for Django's production settings
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application files to the container
COPY . /app/

# Collect static files (change 'myproject' to your Django project name)

# Start Gunicorn with Uvicorn workers as the production server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "Backend.asgi:application", "-w", "4", "-k", "uvicorn.workers.UvicornWorker"]
