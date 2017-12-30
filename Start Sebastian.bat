@echo off
echo.

set NodePackagesPath=C:\Users\Julien\Desktop\Bot Discord 

set Path=%NodePackagesPath%\node_modules\.bin;%PATH%
set Path=%NodePackagesPath%;%PATH%

set NODE_PATH=%NodePackagesPath%\node_modules;%NODE_PATH%
set NODE_ENV=production

echo. 
echo  Reveil du majordome...
echo.  Preparation du fouet...
echo.   Proferations de menaces de morts si le travail est mal fait...
echo.    Ingestion de pillules antidepressives au majordome...
echo. 
echo. 

node server.js