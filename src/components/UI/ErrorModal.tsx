import { createPortal } from 'react-dom';
import { Button } from './Button';
import { Card } from './Card';
import classes from './ErrorModal.module.css';

const Backdrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props: any) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props: {
  title: string;
  message: string;
  onConfirm: () => void;
}) {
  return (
    <>
      {createPortal(
        <Backdrop {...props} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
}

export default ErrorModal;
