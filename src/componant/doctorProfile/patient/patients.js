import React , {useState} from 'react'
import { Divider , Button, Row ,Layout, Input ,Select  } from 'antd';
import {useStateValue} from '../../../context/stateProvider';
import Patient from './patient/patient';
import './patients.less';
import {actionTypes} from '../../../context/reducer'
import Modal from '../../ui/modal/modal';
import { PlusOutlined } from '@ant-design/icons';
const Patients = () => {
    const [state , dispatch] = useStateValue();
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("male");
    const patient = state.patients.map(patient => {
        return <Patient key = {patient.id} patient = {patient} />
    })


     //open modal
    const handleOpenModal = () => {
        dispatch({
            type : actionTypes.OPEN_MODAL,
        })
    }

    //close modal
    const handleCloseModal = () => {
        dispatch({
            type : actionTypes.CLOSE_MODAL,
        })
    }
    //add patient 
    const select = (value) =>{
        setGender(value)
    }
    const handelAddPatient = () => {
        setGender('male')
        dispatch({
            type : actionTypes.ADD_PATIENT,
            patient : {id: Math.random() * 1000 ,name : name, age : age , gender : gender}
        });
        handleCloseModal()
        
    }

    const {Option} = Select;
    return (
        <div className = "patients">
            <Divider orientation="left" className ="divider">patients</Divider>
            <Layout.Content className = "container">
                <div className = "patient">
                <Button type = "primary" className = "add-patient" onClick={handleOpenModal}> <PlusOutlined /> Add patient </Button>
                <Row>
                    {patient}
                </Row>
           
                </div>
            </Layout.Content>
            <Modal show = {state.modal} modalClosed = {handleCloseModal}>
               <h2>Add new patient</h2>
               <Input  placeholder = "enter Name of the patient" onChange = {e => setName(e.target.value)}/>
               <Input type = "number" placeholder = "enter age of the patient" onChange = {e => setAge(e.target.value)}/>
               <Select defaultValue="gender" style={{ width: 120 }} onChange ={select}>
                    <Option value="male" >male</Option>
                    <Option value="female">female</Option>
              </Select>
              <Button type = "primary" onClick = {handelAddPatient}> add patient </Button>
            </Modal>
             
        </div>
    )
}
export default Patients
