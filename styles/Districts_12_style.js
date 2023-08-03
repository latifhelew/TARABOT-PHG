var size = 0;
var placement = 'point';
function categories_Districts_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bethlehem':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,187,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hebron':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(65,187,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jenin':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,21,57,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jericho':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(67,235,115,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jerusalem':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,117,238,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nablus':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,226,97,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Qalqiliya':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,78,17,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ramallah and Al-Bireh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(62,226,21,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Salfit':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,210,173,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tubas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,81,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tulkarm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,95,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Districts_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ENAME");
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#ff4b09";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.7;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Districts_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
