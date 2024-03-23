import { useEffect, useState } from "react";
import Blogdetails from "../BlogDetails/Blogdetails";


const Featurejobs = () => {
    const [jobs, setjobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then((data) => setjobs(data))
    }, [])
    return (
        <>
            <div className="mt-14 mb-5">
                <h1 className="text-5xl text-center font-bold">Featured Jobs</h1>
            </div>
            <div>
                <p className="text-lg text-[#757575] text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Card */}

            <div className="grid grid-cols-2 gap-5 mt-16">
                {
                    jobs.slice(0, dataLength).map((blog) => <Blogdetails key={blog.id} blog={blog}></Blogdetails>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div onClick={() => setDataLength(jobs.length)} className="mt-10 w-[10rem] mx-auto">
                    <button className="btn px-10 bg-gradient-to-r from-[#7f8ffe] to-[#9675ff] font-2xl text-white font-semibold">See All Jobs</button>
                </div>
            </div>
        </>
    );
};

export default Featurejobs;