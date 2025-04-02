import cx from 'classnames';

const HandsonBlockView = (props) => {
  const { style, className } = props;
  return (
    <div style={style} className={cx('block handson', { className })}>
      <div className="block-inner-container">My View component</div>
    </div>
  );
};

export default HandsonBlockView;
