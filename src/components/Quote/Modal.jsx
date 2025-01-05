import Editor from 'react-simple-wysiwyg';

const Modal = ({ quote, setQuote }) => {
  function onChange(e) {
    setQuote(e.target.value);
  }

  return (
    <div>
      <Editor value={quote} onChange={onChange} />
    </div>
  );
}


export default Modal;