import react from 'react';
import '../css/modal.css';

export default function Modal(props) {
    const { open, close, header } = props;

    return (
        <div className={open? 'openModal modal':'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className='close' onClick={close}>{' '} &times; {' '}</button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={ close}>창닫기</button>
                    </footer>
                </section>
            ): null}
        </div>
    )
}