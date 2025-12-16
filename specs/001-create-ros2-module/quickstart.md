# Quickstart: ROS 2 Docusaurus Module

**Feature Branch**: `001-create-ros2-module`  
**Created**: 2025-12-16  

## Overview

This quickstart guide provides instructions for viewing and developing the "module-01-ros2" Docusaurus content locally.

## Prerequisites

- Node.js (v18.0 or later)
- npm (v8.0 or later)
- Git

## Steps

### 1. Clone the Repository

If you haven't already, clone the main repository:

```bash
git clone [REPOSITORY_URL]
cd [REPOSITORY_NAME]
```

### 2. Checkout the Feature Branch

Switch to the branch containing the ROS 2 module:

```bash
git checkout 001-create-ros2-module
```

### 3. Install Docusaurus Dependencies

Navigate to the `my-book` directory (the Docusaurus project root) and install its dependencies:

```bash
cd my-book
npm install
```

### 4. Start Local Development Server

Once dependencies are installed, you can start the Docusaurus development server:

```bash
npm start
```

This will open a new browser window/tab at `http://localhost:3000` (or another available port). You can then navigate to the `module-01-ros2` documentation within the Docusaurus site to view the newly created content.

### 5. Locate the ROS 2 Module Content

The content for "module-01-ros2" is located under `my-book/docs/module-01-ros2/`. Each chapter has its own `index.md` file:

- `my-book/docs/module-01-ros2/chapter-01-introduction/index.md`
- `my-book/docs/module-01-ros2/chapter-02-ros2-basics/index.md`
- `my-book/docs/module-01-ros2/chapter-03-rclpy/index.md`
- `my-book/docs/module-01-ros2/chapter-04-urdf/index.md`

You can edit these markdown files directly, and the local development server will hot-reload the changes.

## Further Information

- For more details on Docusaurus, refer to the [official Docusaurus documentation](https://docusaurus.io/docs).
- For specifics on the content and structure, refer to `specs/001-create-ros2-module/spec.md`.
