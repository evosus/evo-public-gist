// -----------------------------------------------
// EVOSUS Customer_Add Web API Javascript Example
// -----------------------------------------------
var data = JSON.stringify({
    "args": {
        "Name_Company": "Evosus Pool Company",
        "Name_First": "John",
        "Name_Last": "Doe",
        "BillTo_ContactName": "Johnathan",
        "BillTo_Address1": "123 Pool St",
        "BillTo_City": "Vancouver",
        "BillTo_StateAbbr": "WA",
        "BillTo_PostCode": "98665",
        "BillTo_Country": "USA",
        "ShipTo_ContactName": "Johnathan",
        "ShipTo_Address1": "123 Pool St",
        "ShipTo_Address2": "Suite 100",
        "ShipTo_City": "Vancouver",
        "ShipTo_StateAbbr": "WA",
        "ShipTo_PostCode": "98665",
        "ShipTo_Country": "USA",
        "PhoneNumber_Mobile1": "360-735-9510",
        "PhoneNumber_Mobile2": "360-735-9510",
        "PhoneNumber_Home": "360-735-9510",
        "PhoneNumber_Work": "360-735-9510",
        "PhoneNumber_Fax": "360-735-9510",
        "EmailAddress1": "sales@evosus.com",
        "EmailAddress2": "dmcmanus@evosus.com",
        "Customer_TypeName": "Web Order Customer",
        "Lead_InterestName": "Spas",
        "Lead_AdvertisingCode": "AdTrack",
        "Lead_EmployeeEvosusLoginName": "admin",
        "Lead_StoreName": "eCommerce Store",
        "Lead_Date": "03-08-2017",
        "WaterTest_Integration_SystemID": "{{WaterTest_Integration_SystemID}}",
        "WaterTest_Integration_CustomerID": "{{WaterTest_Integration_CustomerID}}",
        "DataConversion_LegacySystemID": "{{DataConversion_LegacySystemID}}",
        "AustralianBusinessNumber": "{{AustralianBusinessNumber}}"
    }
});
// URL PARAMETERS
var params = "CompanySN=20030908100353*989&ticket=1ca0c308-0a29-4cfc-9383-f3f6cde0e74f";
// -------------------------
// BEGIN XHR REQUEST
// --------------------------
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});
xhr.open("POST", "https://cloud3.evosus.com/api/method/Customer_Add?" + params);
xhr.setRequestHeader("content-type", "application/json");
xhr.send(data);
