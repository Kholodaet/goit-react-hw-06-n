import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getfilterItems = (items, filterName) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );
};

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const filterItems = getfilterItems(items, filterName);

  return (
    <ul className={css.contactsList}>
      {filterItems.map((value) => {
        return (
          <li key={value.id} className={css.item}>
            <Contact value={value} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
