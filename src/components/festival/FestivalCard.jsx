import { Flag } from 'lucide-react';

import {parseGregorianDate} from "../../utils/dateUtils";
import {BENGALI_MONTH_NAMES} from "../../constants";

export default function FestivalCard({festival}) {
    const date = parseGregorianDate(festival.gregorianDate);
    const day = date.toLocaleDateString('en-GB', {day: '2-digit'});
    const month = date.toLocaleDateString('en-GB', {month: 'short'});

    return (
        <div
            className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border transition-transform hover:scale-[1.02] hover:shadow-md">
            <div
                className="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-zinc-800 border border-border">
                <span className="text-2xl font-bold text-primary">{day}</span>
                <span className="text-sm font-semibold text-muted-foreground -mt-1">{month}</span>
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg">{festival.festivalName}</h3>
                <p className="text-sm text-muted-foreground">{festival.bengaliDate} {BENGALI_MONTH_NAMES[festival.bengaliMonth]}, {festival.bengaliYear}</p>
                {festival.isPublicHoliday && (
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-red-500 font-semibold">
                        <Flag size={12}/>
                        <span>Public Holiday</span>
                    </div>
                )}
            </div>
        </div>
    );
}