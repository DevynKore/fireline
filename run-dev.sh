@echo off
REM Start the development environment project

echo Setting up Python virtual environment...
cd backend
python -m venv venv
call venv\Scripts\activate.bat
pip install -r requirements.txt
cd ..

echo Setting up Node.js environment...
cd frontend
npm install
cd ..

echo Setup complete!
echo.
echo Backend API: http://localhost:8000
echo Frontend: http://localhost:3000
echo To start development:
echo   Backend: cd backend ^&^& venv\Scripts\activate ^&^& python app\main.py
echo   Frontend: cd frontend ^&^& npm start