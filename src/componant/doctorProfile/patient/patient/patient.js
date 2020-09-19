import React , {useState}from 'react'
import { Card , Col ,Input ,Select , Button} from 'antd';
import {useStateValue} from '../../../../context/stateProvider';
import {actionTypes} from '../../../../context/reducer';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import "./Patient.less"
const Patient = ({patient}) => {
  const [state , dispatch] = useStateValue();
  const [edit , setEdit] = useState(false);
  const [name , setName] = useState(patient.name);
    const [age , setAge] = useState(patient.age);
    const [gender , setGender] = useState(patient.gender);
  const handelEdit = () => {
    setEdit(true)
  }
  const handleUpdate = () => {
    dispatch({
      type : actionTypes.UPDATE_PATIENT,
      id : patient.id,
      newPatient : {name : name, age : age , gender : gender}
    })
    setEdit(false)
  }
  const deletePatient =  () => {
    dispatch({
      type : actionTypes.DELETE_PATIENT,
      id : patient.id
    })
  }
  const select = (value) =>{
    setGender(value)
}
const {Option} = Select;
    return (
            <Col  xs={{span: 24}} md={{span: 12}} lg={{span: 8}} >
            <Card 
            className = "patient"
            title = "patient"
    style={{minWidth: '360px',  margin : '20px' }}
    actions={[
     edit ? <Button className = "delete" onClick ={handleUpdate}> Done </Button> : <EditOutlined key="edit" onClick = {handelEdit}/>,
      <DeleteOutlined  key="delet" onClick = {deletePatient}/>
    ]}
  >
   <div> <span className ="title">Name : </span>{edit ?   <Input  placeholder = {patient.name} style={{ width: 150 }} onChange = {e => setName(e.target.value)}/>  : name }</div>
   <div> <span className ="title">Gender : </span> {edit ?  <Select defaultValue="gender" style={{ width: 120 }} onChange = {select}>
                    <Option value="male" >male</Option>
                    <Option value="female">female</Option>
              </Select>  : gender } </div>
   <div> <span className ="title">Age :</span> {edit ?   <Input type ="number" placeholder = {patient.age} style={{ width: 150 }} onChange = {e => setAge(e.target.value)}/>  : age } </div>
  </Card>
         </Col>
    )
}

export default Patient
