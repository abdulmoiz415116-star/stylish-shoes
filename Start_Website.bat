@echo off
title Stylish Shoes & Bags Store Launcher
echo ===================================================
echo   Starting Stylish Shoes & Bags Store in Chrome...
echo ===================================================
cd /d "%~dp0"

:: Start Vite dev server in background using npm.cmd
start "Stylish Store Server" cmd /k "npm.cmd run dev -- --host"

:: Wait 3 seconds for server to be ready
timeout /t 3 /nobreak >nul

:: Open Chrome with the local website link
start "" "http://localhost:5173/"

echo Website launched successfully!
exit
