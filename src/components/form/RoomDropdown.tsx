import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setRoom } from '../../features/formSlice';
import styles from './common-form.module.css';

const RoomDropdown: React.FC<{ isDisabled?: boolean }> = ({
  isDisabled = false,
}) => {
  const dispatch = useDispatch();
  const { floor, room } = useSelector((state: RootState) => state.form);

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoom(event.target.value));
  };

  return (
    <select
      className={styles.select}
      value={room}
      required
      onChange={handleRoomChange}
      disabled={floor === ''}
    >
      {floor === '' && (
        <option value="" disabled={!isDisabled} hidden>
          Сначала выберите этаж
        </option>
      )}
      {floor !== '' && (
        <option value="" disabled hidden>
          Выберите переговорку
        </option>
      )}
      {floor !== '' &&
        Array.from({ length: 10 }, (_, index) => {
          const roomNumber = index + (+floor - 1) * 10 + 10;
          return (
            <option key={roomNumber} value={roomNumber.toString()}>
              {roomNumber}
            </option>
          );
        })}
    </select>
  );
};

export default RoomDropdown;
