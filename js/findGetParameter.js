function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
    //return เป็น url
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        //เทียบว่าตรงกันไหม
    });
    return result;
}