import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./styles.css"
import axios from "axios";

export const Data = () => {
    const [data, setData] = React.useState([]);

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
    const Filter = (e) => {
        let d = data.filter(item => (item.roll).toLowerCase().includes(((e.target.value).toLowerCase())))
        setData(d);
    }
    const checkouting = (a, b, c) => {
        var co = 0
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].roll === b) {
                co = co + 1

            }
        }
        if (co > 0) {
            alert("Already left the class")
        }
        else {
            const date = new Date();
            const d = date.getHours();
            const m = date.getMinutes();
            let times = d.toString() + ":" + m.toString()
            let name = a
            let roll = b
            let time = c
            const datas = {
                name,
                roll,
                time,
                times

            }

            axios.post("http://localhost:3001/datas", datas)
            alert("Checked out");
            setDisable(true)
        }


    }
    const [disable, setDisable] = React.useState(false);
    return (
        <>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "100px" }} to="/">Home</Link>
            <div>
                <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "10px" }} to="/checkout">Check out</Link>
            </div>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "200px" }} to="/presentcheckin">Presentcheckin</Link>
            <h3>No of students came to class Today</h3>
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

                                    <td><button disabled={disable} class="button-88" type="submit" onClick={() => { checkouting(item.name, item.roll, item.time) }}>Check out</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}