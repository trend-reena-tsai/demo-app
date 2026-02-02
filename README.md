# Task Manager Demo

A simple task manager application built with React. This is a **work-in-progress** project with known issues that need to be fixed.

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

This project has several issues that need to be addressed:

### Issue #1: Filter shows wrong tasks
**Location:** `src/App.js` - `getFilteredTasks()` function
**Problem:** The "Completed" filter shows incomplete tasks instead of completed ones.

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

## Tech Stack

- React 18
- CSS
