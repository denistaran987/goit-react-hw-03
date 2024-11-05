import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.wrapper} key={id}>
            <Contact name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
