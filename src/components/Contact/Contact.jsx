import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import s from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={s.container}>
        <p>
          <FaUserLarge /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button type="button">Delete</button>
    </>
  );
};
export default Contact;
