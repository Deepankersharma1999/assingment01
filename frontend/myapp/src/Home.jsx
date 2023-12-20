import Createuser from "./Createuser";
import Viewuser from "./Viewuser";
import Navbar from './Navbar'

export default function Home() {
    return (
        <>
        <Navbar></Navbar>
            <div className="container">
                <div className="row border border-1 mt-5">
                    <div className="col-lg-9">
                        <Viewuser></Viewuser>
                    </div>
                    <div className="col-lg-3 ">
                        <Createuser></Createuser>
                    </div>
                </div>
            </div>

        </>
    )
}