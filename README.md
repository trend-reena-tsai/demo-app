# Task Manager Demo

A simple task manager application built with React. This is a **work-in-progress** project with known issues that need to be fixed.

## About This Project

This demo project was created for **AI Team Day** to showcase the capabilities of [Moltbot](https://github.com/moltbot/moltbot) — an AI-powered coding assistant. The app intentionally contains bugs and incomplete features, allowing participants to experience how Moltbot can:

- 🔍 **Analyze code** and identify issues
- 🐛 **Debug problems** with context-aware suggestions
- 🛠️ **Fix bugs** through guided code changes
- 📝 **Create PRs** following proper Git workflows
- 🤖 **Monitor deployments** via GitHub Pages

Perfect for hands-on learning and demonstrating AI-assisted development workflows!

## Getting Started

```bash
npm install
npm start
```

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Filter tasks by status (All/Active/Completed)
- View task statistics

## Known Issues

This project has **7 open issues** that need to be addressed:

### Issue #2: Delete functionality not implemented
**Location:** `src/App.js` - `deleteTask()` function  
**Problem:** The delete button doesn't work. The function body is empty with only a TODO comment.

### Issue #3: Empty tasks can be added
**Location:** `src/components/TaskForm.js` - `handleSubmit()` function  
**Problem:** Users can add empty tasks. There's no validation to prevent submitting blank task text.

### Issue #4: Task stats show incorrect count
**Location:** `src/components/TaskStats.js`  
**Problem:** The completed count is calculated incorrectly - it counts incomplete tasks instead of completed ones.

### Issue #5: Poor variable naming
**Location:** `src/components/TaskStats.js`  
**Problem:** Variable `x` is used instead of a descriptive name like `remainingCount`.

### Issue #8: Typo in empty state message
**Location:** `src/components/TaskList.js`  
**Problem:** Empty state shows "No taks to display" instead of "No tasks to display".

### Issue #9: Debug console.log left in code
**Location:** `src/components/TaskForm.js` - line 9  
**Problem:** A debug `console.log('DEBUG: submitting task', text)` statement was left in production code.

### Issue #10: ServiceStatus component not implemented
**Location:** `src/components/ServiceStatus.js`  
**Problem:** The health check component is a stub. Needs to fetch from endpoint, display online/offline status, and auto-refresh every 30 seconds.

## Resolved Issues

- ~~Issue #1: Filter shows wrong tasks~~ ✅ Fixed
- ~~Issue #7: Delete button typo "Delte"~~ ✅ Fixed

## Tech Stack

- React 18
- CSS
