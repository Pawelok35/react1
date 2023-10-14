import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const TextInput = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};
const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:{' '}
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter column title"
      />
      Icon:
      <TextInput
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder="Enter column icon"
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
