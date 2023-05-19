import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [fi, setFi] = useState([]);
    const [ee, setEe] = useState([]);
    const [lv, setLv] = useState([]);
    const [lt, setLt] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4001/nord-pool-price")
            .then(res => res.json())
            .then(json => {
                setFi(json.data.fi);
                setEe(json.data.ee)
                setLv(json.data.lv)
                setLt(json.data.lt)
            });
    }, []);

    return (
        <div>
            <table style={{marginLeft: "100px"}}>
                <thead>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Ajatempel</th>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Hind</th>
                </thead>
                <tbody>
                <div style={{position: "absolute", left: "30px"}}>Soome</div>
                {fi.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                <div style={{position: "absolute", left: "30px"}}>Eesti</div>
                {ee.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                <div style={{position: "absolute", left: "30px"}}>Läti</div>
                {lv.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                <div style={{position: "absolute", left: "30px"}}>Leedu</div>
                {lt.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default App;