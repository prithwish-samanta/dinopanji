import {useMemo} from "react";

import DateCell from "./DateCell";
import {parseGregorianDate} from "../../utils/dateUtils";
import {BENGALI_WEEKDAYS} from "../../constants";

export default function CalendarGrid({monthData, onDateClick, todayString}) {
    const startDayOfWeek = useMemo(() => {
        if (!monthData || monthData.length === 0) return 0;
        return parseGregorianDate(monthData[0].gregorianDate).getDay();
    }, [monthData]);

    if (!monthData || monthData.length === 0) {
        return <div className="text-center py-10 text-muted-foreground">Data for this month is not available.</div>;
    }
    const totalCells = startDayOfWeek + monthData.length;
    const trailingCells = (7 - (totalCells % 7)) % 7;

    return (
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {BENGALI_WEEKDAYS.map(day => <div key={day}
                                              className="text-center font-semibold text-muted-foreground text-sm py-2">{day}</div>)}
            {Array.from({length: startDayOfWeek}).map((_, i) => <div key={`empty-leading-${i}`}
                                                                     className="bg-zinc-100/50 rounded-lg"></div>)}
            {monthData.map((day, index) => <DateCell key={index} dayInfo={day} onDateClick={onDateClick}
                                                     isToday={day.gregorianDate === todayString}/>)}
            {Array.from({length: trailingCells}).map((_, i) => <div key={`empty-trailing-${i}`}
                                                                    className="bg-zinc-100/50 rounded-lg"></div>)}
        </div>
    );
}