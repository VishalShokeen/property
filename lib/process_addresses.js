exports.filter = function(property_list) {
    var payload = property_list.payload;

    var node = {"response":[]};
    for (var i = 0; i < payload.length; i++) {
        var property = payload[i];
        if (property.type == 'htv' && property.workflow == 'completed') {
            var address = property.address;

            node.response.push({
                "concataddress" : address.buildingNumber + ' ' + address.street + ' ' + address.suburb + ' ' + address.state + ' ' + address.postcode,
                "type":"htv",
                "workflow":"completed"
            });

        }
    }
    return node;
}
