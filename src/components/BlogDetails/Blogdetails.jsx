import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Blogdetails = ({ blog }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = blog;
    return (
        <>
            <div className="card card-compact bg-base-100 border-2 border-gray-200 rounded p-3">
                <div className="ml-3">
                    <img className="w-24 h-24" src={logo} alt="Shoes" />
                </div>
                <div className="card-body space-y-3">
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

                    <div className="card-actions text-xl font-extrabold">
                        <Link to={`/job/${id}`}
                        ><button className="btn bg-gradient-to-r from-[#7f8ffe] to-[#9675ff] font-xl text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};


Blogdetails.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blogdetails;