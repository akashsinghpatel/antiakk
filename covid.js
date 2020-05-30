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
            alias: "COVID Feed",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };


    tableData = [];
    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covid19india.org/raw_data1.json", function(res) {
            var resp = res.raw_data;
            alert(resp)


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
            //doneCallback();
        });
        $.getJSON("https://api.covid19india.org/raw_data2.json", function(res2) {
            var resp2 = res2.raw_data;
            alert(resp2)
                //tableData2 = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp2.length; i < len; i++) {
                tableData.push({
                    "agebracket": resp2[i].agebracket,
                    "contractedfromwhichpatientsuspected": resp2[i].cfps,
                    "currentstatus": resp2[i].currentstatus,
                    "dateannounced": resp2[i].dateannounced,
                    "detectedcity": resp2[i].detectedcity,
                    "detecteddistrict": resp2[i].detecteddistrict,
                    "detectedstate": resp2[i].detectedstate,
                    "entryid": resp2[i].entryid,
                    "gender": resp2[i].gender,
                    "nationality": resp2[i].nationality,
                    "notes": resp2[i].notes,
                    "numcases": resp2[i].numcases,
                    "patientnumber": resp2[i].patientnumber,
                    "source1": resp2[i].source1,
                    "source2": resp2[i].source2,
                    "source3": resp2[i].source3,
                    "statecode": resp2[i].statecode,
                    "statepatientnumber": resp2[i].statepatientnumber,
                    "statuschangedate": resp2[i].statuschangedate,
                    "typeoftransmission": resp2[i].typeoftransmission
                });
            }

            table.appendRows(tableData);
            //doneCallback();
        });
        $.getJSON("https://api.covid19india.org/raw_data3.json", function(res3) {
            var resp3 = res3.raw_data;
            alert(resp3)
                //tableData2 = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp3.length; i < len; i++) {
                tableData.push({
                    "agebracket": resp3[i].agebracket,
                    "contractedfromwhichpatientsuspected": resp3[i].cfps,
                    "currentstatus": resp3[i].currentstatus,
                    "dateannounced": resp3[i].dateannounced,
                    "detectedcity": resp3[i].detectedcity,
                    "detecteddistrict": resp3[i].detecteddistrict,
                    "detectedstate": resp3[i].detectedstate,
                    "entryid": resp3[i].entryid,
                    "gender": resp3[i].gender,
                    "nationality": resp3[i].nationality,
                    "notes": resp3[i].notes,
                    "numcases": resp3[i].numcases,
                    "patientnumber": resp3[i].patientnumber,
                    "source1": resp3[i].source1,
                    "source2": resp3[i].source2,
                    "source3": resp3[i].source3,
                    "statecode": resp3[i].statecode,
                    "statepatientnumber": resp3[i].statepatientnumber,
                    "statuschangedate": resp3[i].statuschangedate,
                    "typeoftransmission": resp3[i].typeoftransmission
                });
            }

            table.appendRows(tableData);
            //doneCallback();
        });
        $.getJSON("https://api.covid19india.org/raw_data4.json", function(res4) {
            var resp4 = res4.raw_data;
            alert(resp4)
                //tableData2 = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp4.length; i < len; i++) {
                tableData.push({
                    "agebracket": resp4[i].agebracket,
                    "contractedfromwhichpatientsuspected": resp4[i].cfps,
                    "currentstatus": resp4[i].currentstatus,
                    "dateannounced": resp4[i].dateannounced,
                    "detectedcity": resp4[i].detectedcity,
                    "detecteddistrict": resp4[i].detecteddistrict,
                    "detectedstate": resp4[i].detectedstate,
                    "entryid": resp4[i].entryid,
                    "gender": resp4[i].gender,
                    "nationality": resp4[i].nationality,
                    "notes": resp4[i].notes,
                    "numcases": resp4[i].numcases,
                    "patientnumber": resp4[i].patientnumber,
                    "source1": resp4[i].source1,
                    "source2": resp4[i].source2,
                    "source3": resp4[i].source3,
                    "statecode": resp4[i].statecode,
                    "statepatientnumber": resp4[i].statepatientnumber,
                    "statuschangedate": resp4[i].statuschangedate,
                    "typeoftransmission": resp4[i].typeoftransmission
                });
            }

            table.appendRows(tableData);
            //doneCallback();
        });
        $.getJSON("https://api.covid19india.org/raw_data5.json", function(res5) {
            var resp5 = res5.raw_data;
            alert(resp5)
                //tableData2 = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp5.length; i < len; i++) {
                tableData.push({
                    "agebracket": resp5[i].agebracket,
                    "contractedfromwhichpatientsuspected": resp5[i].cfps,
                    "currentstatus": resp5[i].currentstatus,
                    "dateannounced": resp5[i].dateannounced,
                    "detectedcity": resp5[i].detectedcity,
                    "detecteddistrict": resp5[i].detecteddistrict,
                    "detectedstate": resp5[i].detectedstate,
                    "entryid": resp5[i].entryid,
                    "gender": resp5[i].gender,
                    "nationality": resp5[i].nationality,
                    "notes": resp5[i].notes,
                    "numcases": resp5[i].numcases,
                    "patientnumber": resp5[i].patientnumber,
                    "source1": resp5[i].source1,
                    "source2": resp5[i].source2,
                    "source3": resp5[i].source3,
                    "statecode": resp5[i].statecode,
                    "statepatientnumber": resp5[i].statepatientnumber,
                    "statuschangedate": resp5[i].statuschangedate,
                    "typeoftransmission": resp5[i].typeoftransmission
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
            tableau.connectionName = "COVID Feed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();