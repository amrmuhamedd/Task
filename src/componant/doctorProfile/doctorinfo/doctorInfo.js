import React from 'react'
import { Avatar , Layout, Row, Col} from 'antd';
import { StarFilled  } from '@ant-design/icons';
import "./doctorinfo.less"
const doctorInfo = () => {
    return (
        <div className = "doctor-info">
        <Layout.Content className = "container" >
            <Row>
                <Col  xs={{span: 24}} md={{span: 12}} lg={{span: 12}}>
                <div className= 'img'>
                        <Avatar src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/117353629_587469431942649_6615863337062510390_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=JKTHcXAQbfsAX9EqfNH&_nc_ht=scontent-hbe1-1.xx&oh=5b351f6bdaed3ccb87eabdb7d4191156&oe=5F87D387" className = "avatar"/>  
                        <StarFilled className = "star"/>
                        <StarFilled className = "star"/>
                        <StarFilled className = "star"/>
                        <StarFilled className = "star"/>
          
                </div>
                </Col>
                <Col  xs={{span: 24}} md={{span: 12}} lg={{span:12}}>
                <div  className = "doctor-info">
                  <ul>
                    <li><span className = "title">Doctor :</span> Amr </li>
                    <li><span className = "title">age :</span> 23 </li>
                    <li><span className = "title">Department :</span> dentistry</li>
                  </ul>
               </div>
                </Col>
            </Row>
        
      
        </Layout.Content>
        </div>
    )
}

export default doctorInfo
