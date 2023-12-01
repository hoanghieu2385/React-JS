import React from "react";
import Student from "./Exam";
import dataStudent from "../data/ExamDataList";

const StudentList = () => {
    return (
        <div className="container-fluid" >
            <div className="container p-5">
                <div className="row">
                    {dataStudent.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                            <Student {...plan} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudentList