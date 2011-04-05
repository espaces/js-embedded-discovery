all:	kit

clean:
	rm -f ../target/*
	rmdir ../target

kit:	clean
	mkdir ../target
	cat ../src/javascript/json2.js ../src/javascript/idpselect.js ../src/javascript/typeahead.js | java -jar yuicompressor-2.4.2.jar -o ../target/idpselect.js --type js
	java -jar yuicompressor-2.4.2.jar -o ../target/idpselect.css ../src/resources/idpselect.css
	cp ../LICENSE.txt ../src/resources/index.html ../src/javascript/idpselect_config.js ../target

zip:	kit
	cd ../target; jar cfM ../EDS.zip *;mv ../EDS.zip .



