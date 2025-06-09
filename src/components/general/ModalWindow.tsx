import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setModalWindow } from '../../slices/modalSlice';

function ModalWindow() {
  const { modal } = useSelector(
    (state: { modalWindow: { modal: boolean } }) => state.modalWindow,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Modal open={modal} onClose={() => dispatch(setModalWindow())}>
        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-100 px-10 py-8 shadow dark:bg-gray-800">
          <p className="text-3xl font-bold tracking-wide dark:text-gray-100">
            Create New Note
          </p>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Note Title"
              className="min-w-80 rounded-md border-[1px] border-gray-500 bg-transparent px-3 py-2 text-gray-100 text-inherit placeholder:text-gray-500"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
