# 🌦️ Weather App

A responsive, modern weather application built with **React**, **Tailwind CSS**, and the **OpenWeatherMap API**. Users can search for any city and get current weather and an hourly forecast with a beautiful UI and responsive layout.

---

## 🚀 Features

- 🌍 Search weather by city name
- 🕐 24-hour forecast with horizontal scroll
- 🎨 Tailwind CSS for styling
- 🔄 React hooks for data management
- ⚡ Fast and responsive
- ☁️ Deployed on Kubernetes (MicroK8s-ready)
- 📦 Dockerized for easy deployment

---

## 📸 Screenshots

<!-- You can add screenshots here -->
<img src="Images/input.png" alt="Input View" width="600"/>
<img src="Images/output.png" alt="Output View" width="600"/>

---

## 🧪 Tech Stack

- **Frontend:** React (CRA), Tailwind CSS
- **Data:** OpenWeatherMap API
- **Containerization:** Docker
- **Orchestration:** Kubernetes (MicroK8s)
- **Web Server:** NGINX

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```
2. Install Dependencies
```bash
npm install
```
3. Configure API Keys
edit .env file in the root directory:
```bash
REACT_APP_OPENWEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_WEATHER_API_BASE=https://api.openweathermap.org/data/2.5
🔐 Get your API key from: https://openweathermap.org/api
```
4. Start the App
```bash
npm start
The app will run at http://localhost:3000
```
📦 Docker Support
🛠️ Build Docker Image
```bash
docker build -t weather-app:latest -f Dockerfile.weather .
```
▶️ Run Locally with Docker
```bash
docker run -p 8080:80 weather-app:latest
Visit: http://localhost:8080
```
☸️ Kubernetes Deployment (MicroK8s)
1. Enable MicroK8s Registry
```bash
microk8s enable registry
```
2. Tag & Push Image to Local Registry
```bash
docker tag weather-app:latest localhost:32000/weather-app:0.0.1
docker push localhost:32000/weather-app:0.0.1
```
You may need to allow insecure registry by adding this to /etc/containers/registries.conf.d/999-insecure.conf:
```bash
[[registry]]
location = "localhost:32000"
insecure = true
```
3. Apply Deployment
```bash
kubectl apply -f Deployment/Deployment.yaml
kubectl apply -f Deployment/Service.yaml
```
4. Access the App
```bash
kubectl get service weather-app-service
Use the NodePort shown (e.g., http://localhost:31234)

Or:

kubectl port-forward service/weather-app-service 8080:80
Access at: http://localhost:8080
```
📁 Project Structure
```bash
weather-app/
├── Dockerfile.weather        # Multi-stage Docker build
├── nginx.conf                # Custom NGINX config
├── Deployment/               # Kubernetes manifests
│   ├── Deployment.yaml
│   └── Service.yaml
├── public/                   # Static assets
├── src/                      # Source code
│   ├── components/
│   ├── hooks/
│   └── services/
├── tailwind.config.js
├── postcss.config.js
├── .env
└── README.md
