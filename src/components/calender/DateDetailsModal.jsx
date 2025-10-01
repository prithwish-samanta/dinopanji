import {AnimatePresence, motion} from 'framer-motion';
import {Flag, X} from 'lucide-react';

import {parseGregorianDate} from "../../utils/dateUtils";
import {BENGALI_MONTH_NAMES} from '../../constants';

export default function DateDetailsModal({dayInfo, onClose}) {
    if (!dayInfo) return null;
    const gregorianDate = parseGregorianDate(dayInfo.gregorianDate);

    return (
        <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <motion.div initial={{scale: 0.9, y: 20}} animate={{scale: 1, y: 0}} exit={{scale: 0.9, y: 20}}
                            onClick={(e) => e.stopPropagation()}
                            className="relative m-4 w-full max-w-md rounded-xl bg-card text-foreground border border-border shadow-2xl">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-primary">{dayInfo.date} {BENGALI_MONTH_NAMES[dayInfo.bengaliMonth]}</h2>
                                <p className="text-muted-foreground">{gregorianDate.toLocaleDateString('en-GB', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                            </div>
                            <button onClick={onClose}
                                    className="p-1 rounded-full hover:bg-zinc-200/50"><X
                                size={20}/></button>
                        </div>
                        <div className="mt-6 border-t border-border pt-4 space-y-3">
                            <h3 className="font-semibold">Details for the Day</h3>
                            <p className="text-sm"><span
                                className="font-medium text-muted-foreground w-20 inline-block">Event:</span> {dayInfo.event || 'N/A'}
                            </p>
                            {dayInfo.festival && <p className="text-sm"><span
                                className="font-medium text-muted-foreground w-20 inline-block">Festival:</span> <span
                                className="text-primary font-semibold">{dayInfo.festival}</span></p>}
                            <div className="flex items-center gap-4 text-sm pt-2">
                                {dayInfo.isPublicHoliday &&
                                    <span className="flex items-center gap-1.5"><Flag className="h-4 w-4 text-red-500"/> Public Holiday</span>}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}