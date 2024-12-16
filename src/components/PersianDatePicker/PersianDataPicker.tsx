import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

interface SelectedDay {
  year: number;
  month: number;
  day: number;
}

const PersianDataPicker = () => {
  const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const handleDateChange = (day: SelectedDay) => {
    setSelectedDay(day);
    setIsCalendarOpen(false); // Close the calendar after selecting a date
  };
  return (



          <Calendar
            value={selectedDay}
            onChange={handleDateChange}
            shouldHighlightWeekends
            locale="fa"
          />


  );
};

export default PersianDataPicker;
