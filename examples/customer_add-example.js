// -----------------------------------------------
// Evosus Customer_Add Web API Javascript Example
// -----------------------------------------------
var data = JSON.stringify({
    "args": {
        "Name_Company": "Evosus Pool Company", // Optional
        "Name_First": "John", // REQUIRED
        "Name_Last": "Doe", // Optional
        "BillTo_ContactName": "Johnathan", // Optional
        "BillTo_Address1": "123 Pool St", // Optional
        "BillTo_City": "Vancouver", // Optional
        "BillTo_StateAbbr": "WA", // Optional
        "BillTo_PostCode": "98665", // Optional
        "BillTo_Country": "USA", // Optional
        "ShipTo_ContactName": "Johnathan", // Optional
        "ShipTo_Address1": "123 Pool St", // Optional
        "ShipTo_Address2": "Suite 100", // Optional
        "ShipTo_City": "Vancouver", // Optional
        "ShipTo_StateAbbr": "WA", // Optional
        "ShipTo_PostCode": "98665", // Optional
        "ShipTo_Country": "USA", // Optional
        "PhoneNumber_Mobile1": "360-735-9510", // Optional
        "PhoneNumber_Mobile2": "360-735-9510", // Optional
        "PhoneNumber_Home": "360-735-9510", // Optional
        "PhoneNumber_Work": "360-735-9510", // Optional
        "PhoneNumber_Fax": "360-735-9510", // Optional
        "EmailAddress1": "sales@evosus.com", // Optional
        "EmailAddress2": "dmcmanus@evosus.com", // Optional
        "Customer_TypeName": "Web Order Customer", // Optional
        "Lead_InterestName": "Spas", // Optional
        "Lead_AdvertisingCode": "AdTrack", // Optional
        "Lead_EmployeeEvosusLoginName": "admin", // Optional
        "Lead_StoreName": "eCommerce Store", // Optional
        "Lead_Date": "03-08-2017", // Optional
        "WaterTest_Integration_SystemID": "{{WaterTest_Integration_SystemID}}", // Optional
        "WaterTest_Integration_CustomerID": "{{WaterTest_Integration_CustomerID}}", // Optional
        "DataConversion_LegacySystemID": "{{DataConversion_LegacySystemID}}", // Optional
        "AustralianBusinessNumber": "{{AustralianBusinessNumber}}" // Optional
    }
});
// URL PARAMETERS
// CompanySN && ticket
var params = "CompanySN=20030908100353*989&ticket=1ca0c308-0a29-4cfc-9383-f3f6cde0e74f"; // Required
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
