
function countOfWorkingDays(dateEarlier, dateLater) {
    let earlier = new Date(dateEarlier);
    let later = new Date(dateLater);
    if (later < earlier) {
        throw new Error('The first parameter is earlier date, than second!');
    }
    let count = 0;
    while (earlier <= later) {
        let actualDay = earlier.getDay();
        if (actualDay > 0 && actualDay < 6) {
            count++;
        }
        earlier.setDate(earlier.getDate() + 1);
    }
    return count;
}

export default countOfWorkingDays;