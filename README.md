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

This project has **5 open issues** that need to be addressed:

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
- ~~Issue #2: Delete functionality not implemented~~ ✅ Fixed
- ~~Issue #3: Empty tasks can be added~~ ✅ Fixed
- ~~Issue #7: Delete button typo "Delte"~~ ✅ Fixed

## Tech Stack

- React 18
- CSS

## Architecture

### Project Structure

```
demo-app/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── index.js            # React DOM render entry
│   ├── index.css           # Global styles
│   ├── App.js              # Main app component & state management
│   └── components/
│       ├── TaskForm.js     # New task input form
│       ├── TaskList.js     # Renders filtered task list
│       ├── TaskItem.js     # Individual task with toggle/delete
│       ├── TaskStats.js    # Completed/remaining counters
│       └── ServiceStatus.js # Health check display (stub)
└── package.json
```

### Component Hierarchy

```
App (state: tasks[], filter)
├── TaskForm        → addTask()
├── Filter Buttons  → setFilter()
├── TaskList
│   └── TaskItem    → toggleTask(), deleteTask()
└── TaskStats
```

### Data Flow

- **State Management:** React `useState` hooks in `App.js` (no Redux/Context)
- **Props Down:** Parent passes `tasks`, callbacks to children
- **Events Up:** Children call `onToggle`, `onDelete`, `onAddTask` props
- **Filtering:** Computed in `getFilteredTasks()` before render

### Task Object Schema

```javascript
{
  id: number,        // Unique ID (Date.now() on creation)
  text: string,      // Task description
  completed: boolean // Toggle state
}
```
