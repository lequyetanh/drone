export const numberWithCommas = (x) => {
    x = x.toString();
    // console.log("x="+x);
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    // console.log(x);
    return x;
}