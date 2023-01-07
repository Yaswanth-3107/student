import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./styles.css"
import axios from "axios";

export const Datas = () => {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/datas");
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);
    const Filter = (e) => {
        let d = data.filter(item => (item.roll).toLowerCase().includes(((e.target.value).toLowerCase())))
        setData(d);
    }
    return (
        <>
            <div>
                <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "100px" }} to="/">Home</Link>
            </div>
            <div>
                <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "10px" }} to="/data">Check in</Link>
            </div>
            <div>
                <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "200px" }} to="/presentcheckin">Presentcheckin</Link>
            </div>



            <h3>No of students out of class</h3>
            <input type="Number" value={data.length} />
            <label>Enter Roll</label>
            <input onChange={Filter} type="search" placeholder="Search" aria-label="Search" />
            <table class="table table-hover" style={{ color: "orange", backgroundColor: "white", marginTop: "10px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Check in</th>

                        <th>Check out</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr scope="row">

                                    <td>{item.name}</td>
                                    <td>{item.roll}</td>
                                    <td>{item.time}</td>

                                    <td>{item.times}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    );
}