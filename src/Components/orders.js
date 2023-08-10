import React,{useEffect,useState} from 'react'
import list from "./data.js";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Orders(props) {

    
    // const navigate = useNavigate();
    // let cuser;
    // useEffect(()=>{
    //     cuser = localStorage.getItem('cuser');
    //     navigate('/', {replace: true});  
    //   })
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
  
      // const res = await axios.get("https://aqre-api.onrender.com//getProduct");
      // setData(res.data);
      // console.log(res.data);
    });
    const fetchData = () => {
        let lemail = localStorage.getItem('lemail');
        fetch('https://aqre-api.onrender.com//getOrderProduct',{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              lemail
            })
          }).then(result=>result.json())
          .then(val=>{
              console.log(val.data)
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
                    <h5 class="header-title pb-3 mt-0">Products</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Product Name</th>
                                    <th>Product image</th>
                                    <th>consumer email</th>
                                    <th>price</th>
                                    <th>discount</th>
                                    <th>quantity</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td>{item.productName}</td>
                                    <td><img src={item.photo} alt=""  style={{height:"100px",width:"100px"}}/></td>
                                    
                                    <td>{item.email}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.quantity} </td>
                                    
                              
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
