import { useEffect, useMemo, useState } from 'react';

import { addHours, differenceInSeconds } from 'date-fns';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


import Modal from 'react-modal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCalendarStore, useUiStore } from '../../hooks';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {

   const {isDateModalOpen, closeDateModal}= useUiStore();
   const {activeEvents, startSavingEvent} = useCalendarStore()
    

    //const [isOpen, setIsOpen] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours( new Date(), 2),
    })

    const titleClass = useMemo(() => {
      if (!formSubmitted) return'';

      return(formValues.title.length > 0)
      ? ''
      : 'is-invalid'

    }, [formValues.title, formSubmitted])

    useEffect(() => {
      if(activeEvents !==null){
        setFormValues({
          ...activeEvents
        });
      }
    }, [activeEvents])
    

    const onInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
    }
    
    const onDateChanged = (event, changing) => {
      setFormValues({
        ...formValues,
        [changing]: event
      })
    }
    const onCloseModal = () => {
      closeDateModal();
      // console.log('closing Modal');
        //setIsOpen(false)
    }

    const onSubmit = (event) => {
      event.preventDefault();
      setFormSubmitted(true);

      const difference = differenceInSeconds(formValues.end, formValues.start);
      if(isNaN(difference) || difference <= 0){
        Swal.fire('Wrong Dates','Check the ingressed dates', 'error');
        return;
      }
      if (formValues.title.length <=0 ) return;

      startSavingEvent(formValues)
      closeDateModal();
      setFormSubmitted(false);
    }
    
  return (
    <Modal
        isOpen={isDateModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >
        <h1> New Event </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label> Start Date & Hour:  </label>
                &nbsp;
                <DatePicker 
                  className='form-control'
                  selected={formValues.start}
                  onChange={(event) => onDateChanged(event, 'start')} 
                  dateFormat='Pp'
                  showTimeSelect
                />
            </div>

            <div className="form-group mb-2">
                <label>End Date & Hour: </label>
                &nbsp;
                <DatePicker 
                  minDate={formValues.start}
                  className='form-control'
                  selected={formValues.end}
                  onChange={(event) => onDateChanged(event, 'end')}
                  dateFormat='Pp'
                  showTimeSelect
                /> 

            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Title and Notes</label>
                <input 
                    type="text" 
                    className={`form-control ${titleClass}`}
                    placeholder="Event Title"
                    name="title"
                    autoComplete="off"
                    value={formValues.title}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">A short description</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notes"
                    rows="5"
                    name="notes"
                    value={formValues.notes}
                    onChange={onInputChange}

                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Additional Information</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Save </span>
            </button>

        </form>
    </Modal>
  )
}
