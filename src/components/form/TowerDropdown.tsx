import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setTower } from '../../features/formSlice';
import styles from './common-form.module.css';

const TowerDropdown: React.FC<{ isDisabled?: boolean }> = ({
  isDisabled = false,
}) => {
  const dispatch = useDispatch();
  const { tower } = useSelector((state: RootState) => state.form);

  const handleTowerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const towerValue = e.target.value;
    dispatch(setTower(towerValue));
  };

  return (
    <>
      <select
        className={styles.select}
        id="tower"
        required
        value={tower}
        onChange={handleTowerChange}
      >
        <option value="" disabled={!isDisabled}>
          Выберите башню
        </option>
        <option value="Tower A">Башня А</option>
        <option value="Tower B">Башня Б</option>
      </select>
    </>
  );
};

export default TowerDropdown;
