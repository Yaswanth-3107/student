import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css"

export const Preci = () => {
    const [data, setData] = React.useState([]);
    const [datai, setDatai] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/data");
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);
    const [datas, setDatas] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/datas");
            const datas = await response.json();
            setDatas(datas);
        }
        fetchData();


    }, []);
    useEffect(() => {
        let arr = []
        for (var i = 0; i < data.length; i++) {
            var kl = 0
            for (var j = 0; j < datas.length; j++) {
                if (data[i].roll === datas[j].roll) {
                    kl = kl + 1
                }

            }
            if (kl === 0) {
                arr.push(data[i])
            }


        }
        setDatai(arr);
    })
    const Filter = (e) => {
        let d = datai.filter(item => (item.roll).toLowerCase().includes(((e.target.value).toLowerCase())))
        setDatai(d);
    }




    return (
        <>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "100px" }} to="/data">Check in</Link>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "10px" }} to="/">Home</Link>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "200px" }} to="/checkout">Check out</Link>
            <div>
                <label>Enter Roll</label>
                <input onChange={Filter} type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div>
                <h3>No of students at present in the class</h3>
                <input type="Number" value={datai.length} />
            </div>
            <div>
                <table class="table table-hover" style={{ color: "orange", backgroundColor: "white", marginTop: "10px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Check in</th>
                            <th>check out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datai.map((item) => {
                                return (
                                    <tr scope="row">

                                        <td>{item.name}</td>
                                        <td>{item.roll}</td>
                                        <td>{item.time}</td>

                                        <td>---

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}