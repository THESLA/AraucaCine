@echo off
echo ============================================
echo  DEPLOY ARAUCACINE - gh-pages directo
echo ============================================
echo.
echo 1. Compilando el sitio...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Fallo la compilacion
    pause
    exit /b 1
)
echo OK - Build completado
echo.
echo 2. Subiendo a gh-pages ...
git checkout --orphan deploy-temp 2>nul
if %errorlevel% neq 0 (
    echo git checkout --orphan fallo, intentando metodo alternativo...
)

REM Limpiar todo menos .git y dist
for /f "tokens=*" %%f in ('dir /b') do (
    if not "%%f"=="dist" if not "%%f"==".git" (
        if exist "%%f" (
            if not "%%f"=="." if not "%%f"==".." (
                rmdir /s /q "%%f" 2>nul
                del /f /q "%%f" 2>nul
            )
        )
    )
)

REM Mover dist al raiz
if exist "dist" (
    xcopy /e /y /q "dist\*" "." >nul
    rmdir /s /q "dist"
)

REM .nojekyll
echo. 2>nul > .nojekyll

REM Commit y push
git add -A
git commit -m "deploy: %date% %time%"
git push origin deploy-temp:gh-pages --force

REM Volver a master y limpiar
git checkout master 2>nul
git branch -D deploy-temp 2>nul

echo.
echo ============================================
echo  LISTO! Sitio desplegado en:
echo  https://THESLA.github.io/AraucaCine/
echo ============================================
pause