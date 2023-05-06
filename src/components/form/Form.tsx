import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearForm } from '../../features/formSlice';
import { RootState } from '../../app/store';

import TowerDropdown from './TowerDropdown';
import FloorDropdown from './FloorDropdown';
import RoomDropdown from './RoomDropdown';
import DateTimePicker from './DateTimePicker';
import CommentInput from './CommentInput';
import Card from '../layout/Card';

import styles from './Form.module.css';

const Form = () => {
  const [isTowerDisabled, setIsTowerDisabled] = useState(false);
  const [isFloorDisabled, setIsFloorDisabled] = useState(false);
  const [isRoomDisabled, setIsRoomDisabled] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const { tower, floor, room, dateTime, comment } = useSelector(
    (state: RootState) => state.form
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const formData = {
        tower,
        floor,
        room,
        dateTime,
        comment,
      };
      console.log(JSON.stringify(formData));
      dispatch(clearForm());
    } else {
      console.log('Пожалуйста, введите все данные');
    }
  };

  const handleValidation = () => {
    if (tower && floor && room && dateTime && comment) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleResetForm = () => {
    setIsTowerDisabled(true);
    setIsFloorDisabled(true);
    setIsRoomDisabled(true);
    dispatch(clearForm());
  };

  return (
    <Card>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="tower">Выберите башню:</label>
          <TowerDropdown isDisabled={isTowerDisabled} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="floor">Выберите этаж:</label>
          <FloorDropdown isDisabled={isFloorDisabled} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="room">Выберите переговорку:</label>
          <RoomDropdown isDisabled={isRoomDisabled} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="date">Выберите дату и время:</label>
          <DateTimePicker />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="comment">Введите комментарий:</label>
          <CommentInput />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.reset}
            type="reset"
            onClick={handleResetForm}
          >
            Очистить
          </button>
          <button
            className={styles.submit}
            onClick={handleValidation}
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
