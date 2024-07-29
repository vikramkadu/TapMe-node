
# TapMe Backend

## Overview

The backend for the TapMe application is built using Node.js. It handles user registration and authentication via a Telegram bot, interacts with a Supabase database for user data management, and provides necessary endpoints for the frontend.

---

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

---

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd tapme-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    TELEGRAM_BOT_TOKEN=<your-telegram-bot-token>
    SUPABASE_URL=<your-supabase-url>
    SUPABASE_ANON_KEY=<your-supabase-anon-key>
    ```

---

## Running the Server

Start the server using the following command:
```bash
npm start
---

## File Structure
    src/: Contains the source code.
    superbaseClient.ts: Supabase client configuration.
    telegramBot.ts: Telegram bot configuration and handlers.
    src/index.ts: Main server file.