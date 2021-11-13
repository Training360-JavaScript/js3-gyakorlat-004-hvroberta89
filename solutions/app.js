import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";


const checker = {
    rules: {
        visa : checkVisa,
        ip : checkIP,
        mac : checkMac
    },
    validate(text,type) {
        return this.rules.hasOwnProperty(type) ? this.rules[type](text) : false;
    }
}

//console.log(checker.validate('4123123412341234','visa'));
//console.log(Validator.validate('125.123.154.124','ip'));
//console.log(Validator.validate('12:12:12:12:12:df','mac'));

export default checker;