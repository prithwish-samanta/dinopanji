import {useMemo, useState} from "react";
import {Calendar as CalendarIcon} from "lucide-react";

import FestivalCard from "../components/festival/FestivalCard";
import YearSelector from "../components/festival/YearSelector";

import {parseGregorianDate} from "../utils/dateUtils";
import {BENGALI_MONTH_NAMES} from "../constants";
import data from "../data/bengali_calender.json";

export default function FestivalsPage() {
    const availableYears = useMemo(() => Object.keys(data).sort(), []);
    const [selectedYear, setSelectedYear] = useState("1432");

    const festivalsByMonth = useMemo(() => {
        const yearData = data[selectedYear];
        if (!yearData) return {};

        const allFestivals = [];
        for (const monthKey in yearData) {
            const monthDays = yearData[monthKey];
            monthDays.forEach(day => {
                if (day.festival) {
                    allFestivals.push({
                        festivalName: day.festival,
                        bengaliYear: selectedYear,
                        bengaliMonth: monthKey,
                        bengaliDate: day.date,
                        gregorianDate: day.gregorianDate,
                        isPublicHoliday: day.isPublicHoliday || false,
                    });
                }
            });
        }

        allFestivals.sort((a, b) => parseGregorianDate(a.gregorianDate) - parseGregorianDate(b.gregorianDate));

        return allFestivals.reduce((acc, festival) => {
            const monthName = BENGALI_MONTH_NAMES[festival.bengaliMonth] || festival.bengaliMonth;
            if (!acc[monthName]) {
                acc[monthName] = [];
            }
            acc[monthName].push(festival);
            return acc;
        }, {});

    }, [selectedYear]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Festivals & Holidays</h1>
                <p className="mt-2 text-lg text-muted-foreground">Browse all important dates for the Bengali year.</p>
            </div>

            <div className="mb-10">
                <YearSelector years={availableYears} selectedYear={selectedYear} onSelectYear={setSelectedYear}/>
            </div>

            <div className="space-y-10">
                {Object.keys(festivalsByMonth).length > 0 ? (
                    Object.entries(festivalsByMonth).map(([month, festivals]) => (
                        <div key={month}>
                            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                <CalendarIcon className="text-primary" size={24}/>
                                {month}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {festivals.map(festival => (
                                    <FestivalCard key={`${festival.gregorianDate}-${festival.festivalName}`}
                                                  festival={festival}/>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 px-6 rounded-lg bg-card border border-border">
                        <h3 className="text-xl font-semibold">No Festivals Found</h3>
                        <p className="text-muted-foreground mt-2">There is no festival data available for the selected
                            year.</p>
                    </div>
                )}
            </div>
        </div>
    );
}