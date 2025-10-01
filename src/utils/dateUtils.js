export const parseGregorianDate = (dateStr) => {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
};

export const formatGregorianDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
};

export const findBengaliDateLocation = (dateToFind, allData) => {
    const availableYears = Object.keys(allData).sort();
    for (const year of availableYears) {
        const monthKeys = Object.keys(allData[year]);
        for (let i = 0; i < monthKeys.length; i++) {
            const monthKey = monthKeys[i];
            if (allData[year][monthKey].some(day => day.gregorianDate === dateToFind)) {
                return {year, monthIndex: i};
            }
        }
    }
    return {year: availableYears[0], monthIndex: 0};
};