
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RemoveModal(props) {
 

  return (
    
      <Modal
        show={props.show}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header >
          <Modal.Title>Remove Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to remove this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.deletePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default RemoveModal;