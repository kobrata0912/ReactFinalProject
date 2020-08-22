import React, { useContext } from 'react'
import FirebaseContext from '../../utils/firebase/firebaseContext'
import { toast } from 'react-toastify';

const OneRepair = (props) => {
    const firebase = useContext(FirebaseContext);
    
    const deleteRepair = (event, id) => {
        event.preventDefault()
        if (id !== undefined) {
            firebase.db.collection('repairs').doc(id).delete().then(() => {
                toast.success('Successfully deleted the Repair Inquiry')
            })
        }
    }

    return (
        <div className="row" >
            <div className="col-lg-12">
                <div className="container-fluid border shadow-sm my-2 p-2">
                    <div className="row">
                        <div className="col-lg-12 justify-content-center d-flex">
                            <h5>Заявка за сервиз { props.location }</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 justify-content-center d-flex">
                            <h5>Описание: { props.description }</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 justify-content-center d-flex">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={e => deleteRepair(e, props.id)}
                            >
                                Изтрий заявката
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneRepair