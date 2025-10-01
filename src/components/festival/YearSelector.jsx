export default function YearSelector({years, selectedYear, onSelectYear}) {
    return (
        <div className="flex justify-center items-center p-1 rounded-lg bg-zinc-100 gap-1">
            {years.map(year => (
                <button
                    key={year}
                    onClick={() => onSelectYear(year)}
                    className={`px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors ${
                        selectedYear === year
                            ? 'bg-primary text-primary-foreground shadow'
                            : 'text-foreground hover:bg-zinc-200'
                    }`}
                >
                    {year}
                </button>
            ))}
        </div>
    );
}