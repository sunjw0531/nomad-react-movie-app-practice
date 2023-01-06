import PropTypes from 'prop-types';
import styled from './Button.module.css';
const Btn = ({ sort }) => {
  return <button className={styled.btn}>{sort}</button>;
};

Btn.propTypes = {
  sort: PropTypes.string.isRequired,
};

export default Btn;
