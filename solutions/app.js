import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";

const checker = {
    rules: {
        visa : checkVisa(),
        ip : checkIP(),
        mac : checkMac()
    },
    validate(text,type) {
        return text.match(this.patterns[type]) ? true :false;
    }
}

//console.log(Validator.validate('412312341234','visa'));
//console.log(Validator.validate('125.123.154.124','ip'));
//console.log(Validator.validate('12:12:12:12:12:df','mac'));

export default checker;