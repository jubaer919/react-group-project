import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve, cancleReservation } from '../../Redux/Rocket/rocketSlice';
import classes from './IndividualRocket.module.css';

export default function IndividualRocket({
  name, img, des, id, re,
}) {
  const dispatch = useDispatch();
  const reservedHandeler = () => {
    dispatch(rocketReserve(id));
  };

  const cancleHandeler = () => {
    dispatch(cancleReservation(id));
  };

  return (
    <div className={classes.container}>
      <div className={classes['img-container']}>
        <img src={img} alt="rocket" className={classes.img} />
      </div>
      <div className={classes['info-container']}>
        <h1>{ name }</h1>
        <div>
          {re
            && <span className={classes.reserved}>Reserved</span>}
          <span>{des}</span>
        </div>
        <div>
          {!re && <button type="button" className={classes['reserve-btn']} onClick={reservedHandeler}>Reserve Rocket</button>}
          {re && <button type="button" className={classes['cancel-btn']} onClick={cancleHandeler}>Cancell Reservation</button>}
        </div>
      </div>
    </div>
  );
}

IndividualRocket.propTypes = {
  name: PropType.string.isRequired,
  img: PropType.string.isRequired,
  des: PropType.string.isRequired,
  id: PropType.string.isRequired,
  re: PropType.bool.isRequired,
};
