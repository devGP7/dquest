@echo off
echo ===================================================
echo   PATHWAY LIVE AI - SYSTEM LAUNCHER
echo ===================================================

echo [1/3] Starting Backend API Server (Port 8000)...
start "Backend API Server" cmd /k "python backend/server.py"
timeout /t 2 >nul

echo [2/3] Starting Live Data Engine (Fallback Mode)...
start "Pathway Engine" cmd /k "python backend/fallback_engine.py"
timeout /t 2 >nul

echo [3/3] Starting Frontend Dashboard (Port 5173)...
cd frontend
start "Frontend Dashboard" cmd /k "npm run dev"

echo.
echo ===================================================
echo   SYSTEM LAUNCHED SUCCESSFULLY!
echo   Open your browser at: http://localhost:5173
echo ===================================================
pause
