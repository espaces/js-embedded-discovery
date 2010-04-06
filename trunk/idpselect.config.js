var idpselectConfig = {
    datasource: , //required
    defaultLanguage: , //optional, defaults to 'en'
    preferredIdP: , // optional, array of entity IDs
    maxPreferredIdPs: , //optional, default: 3
    helpUrl: , //optional, string
    samlIdPCookieTTL: , //optional, integer, # of days, default: none (never expire)
}

var langPack = {
    "en": {
        "error.noXMLHttpRequest": "Browser does not support XMLHttpRequest, unable to load IdP selection data",
        "error.noData": "",
        "error.noIdPSelectDiv": ""

        "idpPreferred.label": "Use a preferred selection",
        
        "idpEntry.label": "Or enter your organization's name",
        
        "idpList.label": "Or select your organization from the list below",
        "idpList.defaultOptionLabel": "Please select your organization..."

        "submitButton.label": "Continue",
    },
}

var idpselect = new IdPSelect(idpselectconfig, langPacks);