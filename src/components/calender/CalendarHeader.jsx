import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'lucide-react';

import {BENGALI_MONTH_NAMES} from "../../constants";

export default function CalendarHeader({year, monthKey, onPrevMonth, onNextMonth, onPrevYear, onNextYear, onToday}) {
    const monthName = BENGALI_MONTH_NAMES[monthKey] || monthKey;
    return (
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{monthName}</h1>
                <p className="text-muted-foreground md:text-lg">Bengali Year {year}</p>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={onToday}
                        className="px-3 py-1.5 text-sm font-semibold rounded-md border border-border hover:bg-zinc-200/50">Today
                </button>
                <div className="flex items-center bg-zinc-100 rounded-md">
                    <button onClick={onPrevYear} className="p-2 rounded-md hover:bg-zinc-200/50">
                        <ChevronsLeft size={20}/></button>
                    <button onClick={onPrevMonth}
                            className="p-2 rounded-md hover:bg-zinc-200/50"><ChevronLeft
                        size={20}/></button>
                    <button onClick={onNextMonth}
                            className="p-2 rounded-md hover:bg-zinc-200/50"><ChevronRight
                        size={20}/></button>
                    <button onClick={onNextYear} className="p-2 rounded-md hover:bg-zinc-200/50">
                        <ChevronsRight size={20}/></button>
                </div>
            </div>
        </div>
    );
}