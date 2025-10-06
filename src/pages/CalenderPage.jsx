import {useMemo, useState} from "react";

import CalendarHeader from "../components/calender/CalendarHeader";
import CalendarGrid from "../components/calender/CalendarGrid";
import DateDetailsModal from "../components/calender/DateDetailsModal";

import {findBengaliDateLocation, formatGregorianDate} from "../utils/dateUtils";
import data from "../data/bengali_calender.json";

export default function CalenderPage() {
    const availableYears = useMemo(() => Object.keys(data).sort(), []);
    const today = new Date();
    const todayString = formatGregorianDate(today);

    const initialDateLocation = useMemo(() => findBengaliDateLocation(todayString, data), [todayString]);

    const [currentBengaliYear, setCurrentBengaliYear] = useState(initialDateLocation.year);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(initialDateLocation.monthIndex);
    const [selectedDayInfo, setSelectedDayInfo] = useState(null);

    const availableMonths = Object.keys(data[currentBengaliYear] || {});
    const currentMonthKey = availableMonths[currentMonthIndex];
    const currentMonthData = (data[currentBengaliYear]?.[currentMonthKey] || []).map(day => ({
        ...day,
        bengaliMonth: currentMonthKey
    }));

    const handleMonthChange = (direction) => {
        let newMonthIndex = currentMonthIndex + direction;
        let newYear = currentBengaliYear;
        let yearIndex = availableYears.indexOf(newYear);

        if (newMonthIndex >= availableMonths.length) {
            if (yearIndex < availableYears.length - 1) {
                newYear = availableYears[yearIndex + 1];
                newMonthIndex = 0;
                setCurrentBengaliYear(newYear);
            } else {
                newMonthIndex = availableMonths.length - 1; // Stop at last month
            }
        } else if (newMonthIndex < 0) {
            if (yearIndex > 0) {
                newYear = availableYears[yearIndex - 1];
                const newYearMonths = Object.keys(data[newYear]);
                newMonthIndex = newYearMonths.length - 1;
                setCurrentBengaliYear(newYear);
            } else {
                newMonthIndex = 0; // Stop at first month
            }
        }
        setCurrentMonthIndex(newMonthIndex);
    };

    const handleYearChange = (direction) => {
        const currentYearIndex = availableYears.indexOf(currentBengaliYear);
        const newYearIndex = currentYearIndex + direction;
        if (newYearIndex >= 0 && newYearIndex < availableYears.length) {
            setCurrentBengaliYear(availableYears[newYearIndex]);
            // Optional: reset month to Boishakh on year change
            setCurrentMonthIndex(0);
        }
    };

    const handleToday = () => {
        const todayLocation = findBengaliDateLocation(todayString, data);
        setCurrentBengaliYear(todayLocation.year);
        setCurrentMonthIndex(todayLocation.monthIndex);
    };

    return (
        <div className="p-2 sm:p-4 md:p-6 max-w-7xl mx-auto">
            <CalendarHeader
                year={currentBengaliYear}
                monthKey={currentMonthKey}
                onPrevMonth={() => handleMonthChange(-1)}
                onNextMonth={() => handleMonthChange(1)}
                onPrevYear={() => handleYearChange(-1)}
                onNextYear={() => handleYearChange(1)}
                onToday={handleToday}
            />
            <CalendarGrid
                monthData={currentMonthData}
                onDateClick={setSelectedDayInfo}
                todayString={todayString}
            />
            {selectedDayInfo && <DateDetailsModal dayInfo={selectedDayInfo} onClose={() => setSelectedDayInfo(null)}/>}
        </div>
    );
}