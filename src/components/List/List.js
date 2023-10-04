import style from './List.module.scss';
import Column from '../Column/Column';
const List = () => {
    return (
        <div>
            <header className={style.header}>
                <h2 className={style.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={style.description}>Interesting things I want to check out!</p>
            <section className={style.columns}>
            <Column title="Książki" icon="book" />
      <Column title="Gry" icon="gamepad" />
      <Column title="Filmy" icon="film" />
            </section>
        </div>

    );
};

export default List;