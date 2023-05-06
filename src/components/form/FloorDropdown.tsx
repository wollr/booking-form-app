import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setFloor } from '../../features/formSlice';
import styles from './common-form.module.css';

const FloorDropdown: React.FC<{ isDisabled?: boolean }> = ({
  isDisabled = false,
}) => {
  const dispatch = useDispatch();
  const { floor } = useSelector((state: RootState) => state.form);

  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const floorValue = e.target.value;
    dispatch(setFloor(floorValue));
  };

  const floorOptions = [];

  for (let i = 3; i <= 27; i++) {
    floorOptions.push(
      <option key={i} value={i}>
        {i} этаж
      </option>
    );
  }

  return (
    <>
      <select
        className={styles.select}
        id="floor"
        required
        value={floor}
        onChange={handleFloorChange}
      >
        <option value="" disabled={!isDisabled}>
          Выберите этаж
        </option>
        {floorOptions}
      </select>
    </>
  );
};

export default FloorDropdown;
