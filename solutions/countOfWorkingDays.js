

function countOfWorkingDays(dateEarlier, dateLater) {
    let earlier = new Date(dateEarlier);
    let later = new Date(dateLater);
    let count = 0;
    if (later < earlier) {
        throw new Error('The first parameter is earlier date, than second!');
    } else {
        while (earlier <= later) {
            let actualDay = earlier.getDay();
            if (actualDay > 0 || actualDay < 6) {
                count++;
            }
            earlier.setDay(actualDay + 1);
        }
    }
    return count;
}

export default countOfWorkingDays;