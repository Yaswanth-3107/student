import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css"
import { Datas } from "./checkout";

export const Home = () => {
    const [name, setName] = React.useState("");
    const [roll, setroll] = React.useState("");
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
    return (
        <>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "100px" }} to="/data">Check in</Link>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "10px" }} to="/checkout">Check out</Link>
            <Link style={{ fontSize: "20px", color: "orange", padding: "20px", margin: "200px" }} to="/presentcheckin">Presentcheckin</Link>
            <div>
                <h3>No of students in class at present</h3>
                <input type="Number" value={data.length - datas.length} />
            </div>
            <div class="container">
                <div class="brand-logo"></div>
                <div class="brand-title">Class room</div>


                <form>
                    <div class="inputs">

                        <label> Name</label>
                        <input type="text" id="name" name="name" placeholder="example:Yash" value={
                            name
                        } onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <label>Roll no</label>
                        <input type="text" id="roll" name="roll" value={roll} placeholder="S20200010***" onChange={
                            (e) => {

                                setroll(e.target.value);
                            }
                        } />

                        <button class="button-88" type="submit" onClick={(e) => {
                            e.preventDefault();
                            const date = new Date();
                            const d = date.getHours();
                            const m = date.getMinutes();
                            let time = d.toString() + ":" + m.toString()

                            const data = {
                                name,
                                roll,
                                time

                            }
                            axios.post("http://localhost:3001/data", data).then((res) => {

                                setName("");

                                setroll("");
                                alert("Saved data");
                            }).catch((err) => {
                                console.log(err);
                            })
                        }}>Submit</button>

                    </div>
                </form>

            </div>








        </>
    );
}