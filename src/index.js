module.exports = function toReadable(number) {
    const solo = new Map();
    solo.set(0, 'zero');
    solo.set(1, 'one');
    solo.set(2, 'two');
    solo.set(3, 'three');
    solo.set(4, 'four');
    solo.set(5, 'five');
    solo.set(6, 'six');
    solo.set(7, 'seven');
    solo.set(8, 'eight');
    solo.set(9, 'nine');

    const unique = new Map();
    unique.set(10, 'ten');
    unique.set(11, 'eleven');
    unique.set(12, 'twelve');
    unique.set(13, 'thirteen');
    unique.set(14, 'fourteen');
    unique.set(15, 'fifteen');
    unique.set(16, 'sixteen');
    unique.set(17, 'seventeen');
    unique.set(18, 'eighteen');
    unique.set(19, 'nineteen');

    const double = new Map();
    double.set(2, 'twenty');
    double.set(3, 'thirty');
    double.set(4, 'forty');
    double.set(5, 'fifty');
    double.set(6, 'sixty');
    double.set(7, 'seventy');
    double.set(8, 'eighty');
    double.set(9, 'ninety');

    let length = String(number).length;
    switch (length) {

        case 1: {
            return solo.get(number);
        }
        case 2: {
            if (number < 20) {
                return unique.get(number);
            } else {
                let result = double.get(Number(String(number)[0]));
                if (number % 10 !== 0) {
                    return result + ' ' + solo.get(Number(String(number)[1]));
                } else {
                    return result;
                }
            }
        }
        case 3: {
            let result = solo.get(Number(String(number)[0])) + ' hundred';
            let second = Number(String(number)[1]);
            if (second !== 0) {
                let ending = Number(String(number)[1] + String(number)[2]);
                if (ending < 20) {
                    return result + ' ' + unique.get(ending);
                } else {
                    result += ' '+ double.get(Number(String(ending)[0]));
                    if (ending % 10 !== 0) {
                        return result + ' ' + solo.get(Number(String(ending)[1]));
                    } else {
                        return result;
                    }
                }
            } else {
                let third = Number(String(number)[2]);
                if (third !== 0) {
                    return result + ' ' + solo.get(third);
                } else {
                    return result;
                }
            }
        }
    }


}
