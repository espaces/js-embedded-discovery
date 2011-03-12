#! /bin/sh

# OS specific support.  $var _must_ be set to either true or false.
cygwin=false;
darwin=false;
case "`uname`" in
  CYGWIN*) cygwin=true ;;
  Darwin*) darwin=true ;;
esac

#Find the necessary resources

if [ -z "$JARCMD" ] ; then 
  if [ -n "$JAVA_HOME"  ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then 
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD=$JAVA_HOME/jre/sh/java
      JARCMD=$JAVA_HOME/jre/sh/jar
    else
      JAVACMD=$JAVA_HOME/bin/java
      JARCMD=$JAVA_HOME/bin/jar
    fi
  else
    JAVACMD=`which java`
    JARCMD=`which jar`
  fi
fi
 
if [ ! -x "$JARCMD" ] ; then
  echo "Error: JAVA_HOME is not defined correctly (to a WDK)"
  echo "  We cannot execute $JARCMD"
  exit
fi

# Tidy from previous build

rm -r ../target 
mkdir ../target

# Build js

cat ../src/javascript/json2.js ../src/javascript/idpselect.js ../src/javascript/typeahead.js | java -jar yuicompressor-2.4.2.jar -o ../target/idpselect.js --type js

# Build css

$JAVACMD -jar yuicompressor-2.4.2.jar -o ../target/idpselect.css ../src/resources/idpselect.css

# copy other files

cp ../LICENSE.txt ../target
cp ../src/resources/index.html ../target
cp ../src/javascript/idpselect_config.js ../target

# rem Zip it up

cd ../target

$JARCMD cfM  ../EDS.zip *
mv ../EDS.zip .
