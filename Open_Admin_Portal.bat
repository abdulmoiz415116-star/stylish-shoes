@echo off
title Open Stylish Shoes & Bags Admin Portal
cd /d "%~dp0"

:: Start Vite dev server in background if not already running
powershell -Command "if (-not (Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue)) { Start-Process cmd -ArgumentList '/k npm.cmd run dev -- --host' -WindowStyle Minimized }"

timeout /t 2 /nobreak >nul

:: Launch Chrome directly with Admin Portal link
start chrome "http://localhost:5173/#admin" || start "" "http://localhost:5173/#admin"
exit
