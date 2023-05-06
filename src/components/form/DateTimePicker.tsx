import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setDateTime } from '../../features/formSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './common-form.module.css'

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const selectedDateString = useSelector((state: RootState) => state.form.dateTime);
  const selectedDate = selectedDateString ? new Date(selectedDateString) : null;

  const handleDateChange = (date: Date) => {
    if (date && !isNaN(date.getTime())) {
      dispatch(setDateTime(date.toISOString()));
    }
  };

  return (
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        required
        className={`${styles.select} ${styles.datePicker_select}`}
        dateFormat="d MMMM yyyy, HH:mm"
        locale={ru}
      />
  );
};

export default DateTimePicker;
