@echo off
setlocal

REM We need a JVM
if not defined JAVA_HOME  (
  echo Error: JAVA_HOME is not defined.
  exit /b
)

set JARCMD="%JAVA_HOME%\bin\jar.exe"
set JAVACMD="%JAVA_HOME%\bin\java.exe"

if not exist %JARCMD% (
  echo "Error: JAVA_HOME is not defined correctly (has to point to a JDK)
  echo Cannot execute %JARCMD%
  exit /b
)


rem Tidy up from previous build

rd /s /q ..\target
mkdir ..\target

rem Build js

copy /b /y ..\src\javascript\json2.js+..\src\javascript\typeahead.js+..\src\javascript\idpselect.js %TEMP%\idpselect.js
java -jar yuicompressor-2.4.2.jar -o ..\target\idpselect.js %TEMP%\idpselect.js
del/q %TEMP%\idpselect.js

rem Copy other files

copy ..\LICENSE.txt ..\target
copy ..\doc\*.txt ..\target
copy ..\src\resources\index.html ..\target
copy ..\src\javascript\idpselect_config.js ..\target
copy ..\src\resources\idpselect.css ..\target
rem Zip it up

cd ..\target

%JARCMD% cfM  %TEMP%\EDS.zip *
copy %TEMP%\EDS.zip
del/q  %TEMP%\EDS.zip
