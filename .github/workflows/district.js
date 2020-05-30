(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "statecode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "district",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "notes",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "active",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "confirmed",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "deceased",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "recovered",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "delta_confirmed",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "delta_deceased",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "delta_recovered",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "covid",
            alias: "COVID Feed",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };


    tableData = [];
    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covid19india.org/v2/state_district_wise.json", function(res) {
            var resp = res;

            //console.log(resp);

            // Iterate over the JSON object
            for (var i = 0, len = resp.length; i < len; i++) {
                console.log(resp.length);
                console.log(resp[i].districtData.length);
                for (var j = 0, len2 = resp[i].districtData.length; j < len2; j++) {
                    var d = resp[i].districtData[j].delta;
                    tableData.push({
                        "state": resp[i].state,
                        "statecode": resp[i].statecode,
                        "district": resp[i].districtData[j].district,
                        "notes": resp[i].districtData[j].notes,
                        "active": resp[i].districtData[j].active,
                        "confirmed": resp[i].districtData[j].confirmed,
                        "deceased": resp[i].districtData[j].deceased,
                        "recovered": resp[i].districtData[j].recovered,
                        "delta_confirmed": resp[i].districtData[j].delta.confirmed,
                        "delta_deceased": resp[i].districtData[j].delta.deceased,
                        "delta_recovered": resp[i].districtData[j].delta.recovered
                    });

                }
            }
            table.appendRows(tableData);
            doneCallback();
        });

    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "COVID Feed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
