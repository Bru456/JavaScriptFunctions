/**
 * Determines if key presses is numeric.
 * @param evt
 * @returns {boolean}
 * @constructor
 */
function IsNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)))
        return false;
    return true;
}

/**
 * Determines if key presses is numeric including decimal. Will only allow one decimal.
 * @param evt
 * @returns {boolean}
 * @constructor
 */
function IsDecimalNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57))) || (charCode == 46 && evt.srcElement.value.indexOf(".") >= 0))
        return false;
    return true;
}
