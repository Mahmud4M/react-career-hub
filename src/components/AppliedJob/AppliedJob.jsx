import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <>

            <div className="card card-compact p-7 bg-gray-200 border-2 border-gray-200 rounded-xl mt-10 grid grid-cols-8 gap-3">

                <div className="flex justify-center items-center border-2 border-gray-400 rounded-xl col-span-2">
                    <img className="w-24 h-24 rounded" src={logo} alt="Shoes" />
                </div>

                <div className="card-body space-y-3 col-span-4">
                    <h2 className="text-2xl text-[#1a1919] font-semibold">{job_title}</h2>
                    <p className="text-xl text-[#757575] font-semibold">{company_name}</p>
                    <div>
                        <button className="btn mr-5 bg-white border-1 text-base text-[#8687fe] border-[#8687fe] font-semibold">{remote_or_onsite}</button>
                        <button className="btn bg-white border-1 text-base text-[#8687fe] border-[#8687fe] font-semibold">{job_type}</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p className="text-xl text-[#757575] font-semibold">
                                Location: {location}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className="text-xl text-[#757575] font-semibold">
                                Salary: {salary}</p>
                        </div>
                    </div>


                </div>
                <div className="card-actions text-xl font-extrabold col-span-2 flex justify-center items-center">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-[#7f8ffe] to-[#9675ff] font-xl text-white">View Details</button>
                    </Link>
                </div>
            </div>























            {/* <div className="grid grid-cols-3 gap-5">
               
                <div>
                    <img className="w-28 h-28" src={logo} alt="Shoes" />
                </div>
            
                <div>
                <h2 className="text-2xl text-[#1a1919] font-semibold">{job_title}</h2>
                    <p className="text-xl text-[#757575] font-semibold">{company_name}</p>
                    <div>
                        <button className="btn mr-5 bg-white border-1 text-base text-[#8687fe] border-[#8687fe] font-semibold">{remote_or_onsite}</button>
                        <button className="btn bg-white border-1 text-base text-[#8687fe] border-[#8687fe] font-semibold">{job_type}</button>
                    </div>
                </div>
                
                <div></div>
            </div> */}

        </>
    );
};


AppliedJob.propTypes = {
    job: PropTypes.object.isRequired
}
export default AppliedJob;