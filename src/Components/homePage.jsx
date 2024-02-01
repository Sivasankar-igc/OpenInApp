import { useState } from "react";
import "../Css/homePage.css";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const HomePage = () => {
    const [header, setHeader] = useState([]);
    const [data, setData] = useState([]);
    const [fileName, setFileName] = useState(null);
    const [canUpload, setCanUpload] = useState(false);

    const handleFile = (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        ExcelRenderer(file, (err, response) => {
            if (err) {
                console.error(err)
            } else {
                setHeader(response.rows[0]);
                setData(response.rows);
            }
        })
    }
    const upload = () => {
        setCanUpload(true);
    }
    const handleMenu = () => {
        document.querySelector(".homepage-wrapper .menu").classList.toggle('activateMenu'); console.log("s")
    }
    return (
        <>
            <section className="homepage-wrapper">
                <div className="menu">
                    <div className="img">
                        <img src="../../Image/logo.png" />
                    </div>
                    <div className="menu-content">
                        <div className="content">
                            <img src="../../Image/dashboard.png" /> <p>Dashboard</p>
                        </div>
                        <div className="content active">
                            <img src="../../Image/upload.png" /> <p>Upload</p>
                        </div>
                        <div className="content">
                            <img src="../../Image/invoice.png" /> <p>Invoice</p>
                        </div>
                        <div className="content">
                            <img src="../../Image/schedule.png" /> <p>Schedule</p>
                        </div>
                        <div className="content">
                            <img src="../../Image/calendar.png" /> <p>Calendar</p>
                        </div>
                        <div className="content">
                            <img src="../../Image/notification.png" /> <p>Notificaton</p>
                        </div>
                        <div className="content">
                            <img src="../../Image/setting.png" /> <p>Settings</p>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="top">
                        <div className="hamburger" onClick={() => handleMenu()}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <header>Upload CSV</header>
                        <div><img src="../../Image/notification1.png" style={{ width: "20px", height: "25px", border: "none" }} /><img src="../../Image/bgImage.jpg" alt="" /></div>
                    </div>
                    <div className="upload-section">
                        <div className="field">
                            <input type="file" onChange={(event) => handleFile(event)} id="excel-sheet-input" style={{ display: "none" }} />
                            <img src="../../Image/excel.png" />
                            {fileName !== null ? <p>{fileName}</p> : <p>Drop your excel sheet here or <label htmlFor="excel-sheet-input" style={{ color: "blue", cursor: "pointer" }}>Browse</label></p>}
                        </div>
                    </div>
                    <div>{fileName !== null ? <button onClick={() => upload()} id="activeBtn">Upload</button> : <button onClick={() => upload()} style={{ backgroundColor: "rgb(0,0,0,0.4)" }} disabled>Upload</button>}</div>
                    <div className="table-container">
                        {
                            canUpload ?
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                header.map((i, index) => (
                                                    <th key={index}>{i}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.slice(1).map((i, index) => (
                                                <tr key={index}>
                                                    {
                                                        i.map((d, index) => (
                                                            <td key={index}>{d}</td>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : ""
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;