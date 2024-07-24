import React, {useState, useEffect} from "react";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom"
import "./Company.css"
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
import JoblyApi from "./api";

const Company = ({getCompany, handleApply, hasAppliedToJob}) => {

    const { companyHandle } = useParams();
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCompany() {
            const companyData = await getCompany(companyHandle);
            setCompany(companyData);
            setIsLoading(false)
        }
        fetchCompany();
    }, [companyHandle, getCompany])



    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }

      if (!company) {
        return <p>Company not found</p>;
    }

    return(
        <div className="page-container">
        <div className="content-wrapper">
            <SearchForm />
            <div className="card-container">
            <Card className="transparent-card">
            <CardBody >
                <CardTitle className="font-weight-bold text-center">
                {company.name}
                </CardTitle>
                    
            <CardText className="text-center">
                {company.description}
            </CardText>
            </CardBody>

            </Card>
            {
                company.jobs.map(job => (
                    <>
                    <Card key={job.id} className="mb-3">
                        <CardBody>
                            <CardTitle>
                            <h1>{job.title}</h1>
                            </CardTitle> 
                            <CardText>
                                <h3><i>{job.companyName}</i></h3>
                                <p>Salary: {job.salary}</p>
                                <p>Equity: {job.equity}</p>
                                
                            </CardText>   
                            <button 
                            className="button-apply"
                            onClick={() => handleApply(job.id)}
                            disabled={hasAppliedToJob(job.id)}> 
                                {hasAppliedToJob(job.id) ? "Applied" : "Apply"}
                            </button>
                        </CardBody>
                    </Card>
                    </>
                ))
            }
        </div>
        </div>
        </div>
    )
}

export default Company;


