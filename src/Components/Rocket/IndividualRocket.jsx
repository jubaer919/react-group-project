import PropType from 'prop-types';
import classes from './IndividualRocket.module.css';

export default function IndividualRocket({
  name, img, des,
}) {
  return (
    <div className={classes.container}>
      <div className={classes['img-container']}>
        <img src={img} alt="rocket" className={classes.img} />
      </div>
      <div className={classes['info-container']}>
        <h1>{ name }</h1>
        <des>{ des }</des>
        <div>
          <button type="button" className={classes['reserve-btn']}>Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
}

IndividualRocket.propTypes = {
  name: PropType.string.isRequired,
  img: PropType.string.isRequired,
  des: PropType.string.isRequired,
};
