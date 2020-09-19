import React from 'react'
import Docorinfo from './doctorinfo/doctorInfo';
import Patients from './patient/patients'
const doctorProfile = () => {
    return (
        <div>
            <Docorinfo/>
            <Patients/>
        </div>
    )
}
export default doctorProfile;