REM @echo off
@echo off

set name=FileList.txt
set time=gerenlicheng
set exc=.html
for /l %%i in (001,1,100) do (
echo %time%%%i%exc% >>%name%
)