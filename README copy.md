# APIs and Endpoints Assignment

This project contains 6 different API-based applications, each with its own JSON server and HTML file.

## Setup

1. Make sure you have `json-server` installed globally:
```bash
npm install -g json-server
```

## Running the Applications

Each question requires its own JSON server running on a different port. Open 6 separate terminal windows and run the following commands:

### Q1: Live Search
```bash
json-server --watch q1-db.json --port 3001
```
Then open `q1-live-search.html` in your browser.

### Q2: Employee Status Dashboard
```bash
json-server --watch q2-db.json --port 3002
```
Then open `q2-employee-dashboard.html` in your browser.

### Q3: Task Manager
```bash
json-server --watch q3-db.json --port 3003
```
Then open `q3-task-manager.html` in your browser.

### Q4: Multi-API Dashboard
```bash
json-server --watch q4-db.json --port 3004
```
Then open `q4-multi-api-dashboard.html` in your browser.

### Q5: College Timetable Viewer
```bash
json-server --watch q5-db.json --port 3005
```
Then open `q5-timetable-viewer.html` in your browser.

### Q6: User Registration
```bash
json-server --watch q6-db.json --port 3006
```
Then open `q6-user-registration.html` in your browser.

## Features

- **Q1**: Real-time product search with jQuery AJAX
- **Q2**: Employee status toggle with XMLHttpRequest and PATCH
- **Q3**: Task manager with priority filters and completion toggle
- **Q4**: Multi-API dashboard using Fetch and Promise.all
- **Q5**: College timetable viewer with dynamic rendering
- **Q6**: User registration with duplicate email check using Axios
