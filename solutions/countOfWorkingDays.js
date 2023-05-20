

function countOfWorkingDays(dateEarlier, dateLater) {
    if (dateLater < dateEarlier) {
        throw new Error('The first parameter is earlier date, than second!');
    }
    let count = 0;
    while (dateEarlier <= dateLater) {
        let actualDay = dateEarlier.getDay();
        if (actualDay > 0 || actualDay < 6) {
            count++;
        }
        dateEarlier.setDay(actualDay + 1);
    }
    return count;
}

export default countOfWorkingDays;