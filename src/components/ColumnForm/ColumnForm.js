import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const TextInput = (props) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
    />
  );
};
const ColumnForm = (props) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };
  return (
    <form onSubmit={handleSubmit}>
      Title:{' '}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      Icon: <input type="text" />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
