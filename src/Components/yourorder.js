import React,{useEffect,useState} from 'react'
import list from "./data.js";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function YourOrder(props) {

    
    // const navigate = useNavigate();
    // let cuser;
    // useEffect(()=>{
    //     cuser = localStorage.getItem('cuser');
    //     navigate('/', {replace: true});  
    //   })
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [total,setTotal] = useState(0)
    useEffect(() => {
      fetchData();
        console.log(data);
      // const res = await axios.get("https://aqre-api.onrender.com/getProduct");
      // setData(res.data);
      // console.log(res.data);
    });
   
    const fetchData = () => {
        let cemail = localStorage.getItem('cemail');
        fetch('https://aqre-api.onrender.com/getyourorder',{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              cemail
            })
          }).then(result=>result.json())
          .then(val=>{
              console.log(val.data.length);
              console.log(val.data);
              
              setData(val.data);
            
          }).catch(err=>{
            console.log(err);
            
    
          })
      
    };
   
    
   
  
    
  return (
    <>
    
    <div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">your orders</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Product Name</th>
                                    <th>Product image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td>{item.productName}</td>
                                    <td><img src={item.photo} alt=""  style={{height:"100px",width:"100px"}}/></td>
                                    
                                    <td>{item.quantity}</td>
                                    <td>{(item.discount)*item.quantity}</td>
                                                                       
                                    
                             
                                </tr>
                                )) }
                                
                                
                            </tbody>
                        </table>
                    </div>
                    {/* <!--end table-responsive--> */}
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}