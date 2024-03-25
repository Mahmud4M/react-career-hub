import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/Utility";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    console.log(job);

    const { salary, job_title, job_description, job_responsibility, educational_requirements, contact_information, experiences } = job;


    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("You have alreay applied this job !!");
    }


    return (
        <>

            <div className="mt-10 mb-14 py-16 bg-[#faf8ff] rounded-xl">
                <h1 className="text-3xl text-black font-bold text-center">Job Details</h1>
            </div>


            <div className="grid grid-cols-4 gap-5">
                <div className="border col-span-3 p-5 rounded-xl">

                    <p><span className="text-lg text-black font-semibold">Job Description: </span>{job_description}</p> <br />
                    <p><span className="text-lg text-black font-semibold">Job Responsbility: </span>{job_responsibility}</p> <br />
                    <p><span className="text-lg text-black font-semibold">Educational Requirements: </span>{educational_requirements}</p> <br />
                    <p><span className="text-lg text-black font-semibold">Experiences: </span>{experiences}</p>
                </div>

                <div>
                    <div className="border bg-[#f4f1ff] p-5 rounded-xl">
                        <p className="text-xl font-bold mb-2">Job Details</p>
                        <div className="border-b-2 border-gray-300"></div>
                        <div className="mt-2 space-y-2">
                            <p> <span className="text-lg text-black font-semibold">Salary:</span> {salary}</p>
                            <p> <span className="text-lg text-black font-semibold">Job Title:</span> {job_title}</p>
                        </div>
                        <p className="text-xl font-bold mt-3 mb-2">Contact Information</p>
                        <div className="border-b-2 border-gray-300"></div>
                        <div className="mt-3 space-y-2">
                            <p> <span className="text-lg text-black font-semibold">Phone:</span> {contact_information.phone}</p>
                            <p> <span className="text-lg text-black font-semibold">Email:</span> {contact_information.email}</p>
                            <p> <span className="text-lg text-black font-semibold">Address:</span> {contact_information.address}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn w-full mt-3 bg-gradient-to-r from-[#7f8ffe] to-[#9675ff] text-lg text-white">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default JobDetails;