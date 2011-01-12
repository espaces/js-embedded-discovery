
/** @class IdP Selector UI */
function IdPSelectUIParms(){
    //
    // Adjust the following to fit into your local configuration
    //
    this.alwaysShow = true;          // If true, this will show results as soon as you start typing
    this.dataSource = 'idp.json';//'/Shibboleth.sso/DiscoFeed';    // Where to get the data from
    this.defaultLanguage = 'en';     // Language to use if the browser local doesnt have a bundle
    this.defaultLogo = 'flyingpiglogo.jpg';
    this.defaultLogoWidth = 90;
    this.defaultLogoHeight = 80 ;
    this.defaultReturn = null;       // If non null, then the default place to send users who are not
                                     // Approaching via the Discovery Protocol for example
    //this.defaultReturn = "https://example.org/Shibboleth.sso/DS?SAMLDS=1&target=https://example.org/secure";
    this.defaultReturnIDParam = null;
    this.helpURL = 'https://spaces.internet2.edu/display/SHIB2/DSRoadmap';
    this.ie6Hack = null;             // An array of structures to disable when drawing the pull down (needed to 
                                     // handle the ie6 z axis problem
    this.insertAtDiv = 'idpSelect';  // The div where we will insert the data
    this.maxResults = 10;            // How many results to show at once or the number at which to
                                     // start showing ig alwaysShow is true
    this.myEntityID = null;          // If non null then this string must match the string provided in the DS parms
    this.preferredIdP = null;        // Array of entityIds to always show
    this.samlIdPCookieTTL = 730;     // in days
    this.testGUI = false;


    //
    // Globalization stuff
    //
    this.langBundles = {
    'en': {
        'fatal.divMissing': 'Supplied Div is not present in the DOM',
        'fatal.noXMLHttpRequest': 'Browser does not support XMLHttpRequest, unable to load IdP selection data',
        'fatal.wrongProtocol' : 'policy supplied to DS was not "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
        'fatal.wrongEntityId' : 'entityId supplied was wrong"',
        'fatal.noparms' : 'No parameters to to discovery session and no defaultReturn supplied',
        'fatal.noReturnURL' : "No URL return parmeter provided",
        'fatal.badProtocol' : "return request must start with https:// or http://",
        'idpPreferred.label': 'Use a preferred selection:',
        'idpEntry.label': 'Or enter your organization\'s name',
        'idpEntry.NoPreferred.label': 'Enter your organization\'s name',
        'idpList.label': 'Or select your organization from the list below',
        'idpList.NoPreferred.label': 'Select your organization from the list below',
        'idpList.defaultOptionLabel': 'Please select your organization...',
 'idpList.showList' : 'Allow me to pick from a list',
        'idpList.showSearch' : 'Allow me to specify the site',
        'submitButton.label': 'Continue',
        'helpText': 'Help',
        'defaultLogoAlt' : 'DefaultLogo'
        }
    };

    //
    // The following should not be changed without changes to the css.  Consider them as mandatory defaults
    //
    this.maxPreferredIdPs = 3;
    this.maxIdPCharsButton = 33;
    this.maxIdPCharsDropDown = 58;

    this.minWidth = 20;
    this.minHeight = 20;
    this.maxWidth = 115;
    this.maxHeight = 69;
    this.bestRatio = Math.log(80 / 60);
}
