import {Flag, Star} from 'lucide-react';

export default function DateCell({dayInfo, onDateClick, isToday}) {
    const isHoliday = dayInfo.isPublicHoliday;
    const hasFestival = !!dayInfo.festival;
    const gregorianDay = dayInfo.gregorianDate.split('-')[0];
    const cellClasses = ["relative flex flex-col h-28 sm:h-32 rounded-lg p-2 transition-colors duration-200 bg-card hover:bg-zinc-200/50 cursor-pointer", isToday ? "border-2 border-primary" : "border border-border"].join(' ');

    return (
        <div className={cellClasses} onClick={() => onDateClick(dayInfo)}>
            <div className="flex justify-between items-center">
                <span
                    className={`text-xs sm:text-sm font-semibold ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>{gregorianDay}</span>
                <div className="flex items-center gap-1.5">
                    {isHoliday && <Flag className="h-3 w-3 text-red-500" title="Public Holiday"/>}
                    {hasFestival && !isHoliday && <Star className="h-3 w-3 text-amber-500" title="Festival"/>}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow mt-1">
                <span
                    className={`text-3xl sm:text-4xl font-bold ${isHoliday || isToday ? 'text-primary' : ''}`}>{dayInfo.date}</span>
                {hasFestival &&
                    <p className="text-xs text-primary text-center -mt-1 truncate max-w-full px-1">{dayInfo.festival}</p>}
            </div>
        </div>
    );
}