exports.filter = function(property_list) {
    var payload = property_list.payload;

    var resultArray = new Array ();
    for (var i = 0; i < payload.length; i++) {
        var property = payload[i];
        if (property.type == 'htv' && property.workflow == 'completed') {
            var node = {};
            var address = property.address;
            node["concataddress"] = address.buildingNumber +' ' + address.street + ' ' + address.suburb + ' ' + address.state + ' ' + address.postcode;
            node["type"] = "htv";
            node["workflow"] = "completed";
            resultArray.push(node);
        }
    }
    return resultArray;
}
