# AOE Card Game

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
  - [Unit and Integration Tests](#unit-and-integration-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple player management app built using the MERN stack and Ant Design. It allows users to view, sort, and select player cards, and displays detailed information about the selected player.

## Features

- Fetch and display player data
- Sort players in ascending or descending order
- Select a player card to view details
- Submit button to trigger actions

## Project Structure

```plaintext
.
├── src
│   ├── components
│   │   ├── Controls.tsx
│   │   ├── DetailsCard.tsx
│   │   ├── PlayerCard.tsx
│   │__ tests__
│   │   ├── Controls.test.tsx
│   │   ├── DetailsCard.test.tsx
│   │   └── PlayerCard.test.tsx
│   │   └── App.test.tsx
│   ├── interfaces
│   │   └── Player.interface.ts
│   ├── services
│   │   └── playerService.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md

```

# Installation

# Prerequisites

Node.js (>= 14.x)
npm (>= 6.x)

# Steps

```
Clone the repository:
git clone https://github.com/fahadali503/aoe-game
cd my-app
Install dependencies:
npm install
npm run dev
```
