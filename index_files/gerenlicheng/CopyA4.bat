REM @echo off
@echo off
set str=gerenlicheng0.html 
for /f %%i in (FileList.txt) do (echo F|(xcopy %str% %%i))