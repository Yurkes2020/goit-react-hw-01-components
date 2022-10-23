import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.status}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
