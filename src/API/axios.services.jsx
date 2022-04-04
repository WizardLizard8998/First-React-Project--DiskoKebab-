import axios from 'axios';
import { useState, useEffect } from 'react';
import TextGrid from '../COMPONENTS/textGrid';
import '../PAGES/PageCss.css';


export default function ReadData() {

    const [data, setData] = useState();

    axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
    axios.defaults.headers['Access-Control-Allow-Headers'] = "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type, Host, Accept, Acces-Control-Allow-Methods"
    useEffect(() => {
        axios.get("http://localhost:5000/api/Users")
            .then(response => {
                console.log(response)

                setData(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    

    console.log(data);


    return (


        <div className='textBox' >

            {
                data && data.map(data2 => (

                    <TextGrid key={data2.key}
                        text1={data2.mail}
                        text2={data2.id}
                    />
                ))
            }
        </div>

    );


}
