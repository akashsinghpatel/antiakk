(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "agebracket",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "contractedfromwhichpatientsuspected",
            alias: "cfps",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "currentstatus",
            alias: "currentstatus",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "dateannounced",
            alias: "dateannounced",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "detectedcity",
            alias: "detectedcity",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "detecteddistrict",
            alias: "detecteddistrict",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "detectedstate",
            alias: "detectedstate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "entryid",
            alias: "entryid",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "gender",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "nationality",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "notes",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "numcases",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "patientnumber",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "source1",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "source2",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "source3",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "statecode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "statepatientnumber",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "statuschangedate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "typeoftransmission",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "covid",
            alias: "COVID Feed 19 April",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covid19india.org/raw_data1.json", function(res) {
            var resp = res.raw_data;
            tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp.length; i < len; i++) {
                tableData.push({
                    "agebracket": resp[i].agebracket,
                    "contractedfromwhichpatientsuspected": resp[i].cfps,
                    "currentstatus": resp[i].currentstatus,
                    "dateannounced": resp[i].dateannounced,
                    "detectedcity": resp[i].detectedcity,
                    "detecteddistrict": resp[i].detecteddistrict,
                    "detectedstate": resp[i].detectedstate,
                    "entryid": resp[i].entryid,
                    "gender": resp[i].gender,
                    "nationality": resp[i].nationality,
                    "notes": resp[i].notes,
                    "numcases": resp[i].numcases,
                    "patientnumber": resp[i].patientnumber,
                    "source1": resp[i].source1,
                    "source2": resp[i].source2,
                    "source3": resp[i].source3,
                    "statecode": resp[i].statecode,
                    "statepatientnumber": resp[i].statepatientnumber,
                    "statuschangedate": resp[i].statuschangedate,
                    "typeoftransmission": resp[i].typeoftransmission
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "COVID Feed 19 April"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();