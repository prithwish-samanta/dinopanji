import {Flag, Star} from 'lucide-react';

export default function DateCell({dayInfo, onDateClick, isToday}) {
    const isHoliday = dayInfo.isPublicHoliday;
    const hasFestival = !!dayInfo.festival;
    const gregorianDay = dayInfo.gregorianDate.split('-')[0];
    const cellClasses = ["relative flex flex-col h-28 sm:h-32 md:h-36 lg:h-44 rounded-lg p-2 md:p-3 transition-all duration-200 bg-card hover:bg-zinc-200/50 cursor-pointer", isToday ? "border-2 border-primary scale-105 shadow-lg" : "border border-border hover:shadow-md"].join(' ');

    return (
        <div className={cellClasses} onClick={() => onDateClick(dayInfo)}>
            <div className="flex justify-between items-center">
                <span
                    className={`text-xs md:text-sm font-semibold ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>{gregorianDay}</span>
                <div className="flex items-center gap-1.5">
                    {isHoliday && <Flag className="h-3 w-3 text-red-500" title="Public Holiday"/>}
                    {hasFestival && !isHoliday && <Star className="h-3 w-3 text-amber-500" title="Festival"/>}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow mt-1">
                <span
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isHoliday || isToday ? 'text-primary' : ''}`}>{dayInfo.date}</span>
                {hasFestival &&
                    <p className="text-xs md:text-sm text-primary text-center -mt-1 truncate max-w-full px-1">{dayInfo.festival}</p>}
            </div>
        </div>
    );
}