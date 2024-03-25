import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Utility";
import AppliedJob from "../AppliedJob/AppliedJob";

const Appliedjobs = () => {
    const [jobsApplied, setjobApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const jobs = useLoaderData();
    useEffect(() => {
        const storeJobs = getStoredJobApplication();

        if (jobs.length > 0) {
            // System 1
            const jobApplied = jobs.filter(job => storeJobs.includes(job.id));

            // Another System 
            // const jobApplied = [];
            // for (const id of storeJobs) {
            //     const job = jobs.find( job => job.id === id);
            //     if(job) {
            //         jobApplied.push(job)
            //     } 
            // }
            // console.log(jobs, jobApplied, storeJobs);

            setjobApplied(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [jobs])

    const handleFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(jobsApplied)
        }
        else if (filter === 'Remote') {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'Onsite') {
            const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    };


    return (
        <>
            <div className="mt-14">
                <div className="p-5 bg-orange-300 rounded-lg w-52 mx-auto">
                    <h2 className="text-2xl text-center font-semibold">Applied Jobs</h2>
                </div>
                <div className="mt-3 mb-3 flex justify-end">
                    <details className="dropdown">
                        <summary className="m-1 btn text-lg">Filter
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('All')}><a>All</a></li>
                            <li onClick={() => handleFilter('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleFilter('Onsite')}><a>OnSite</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    {
                        displayJobs.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)
                    }
                </div>
            </div>
        </>
    );
};

export default Appliedjobs;