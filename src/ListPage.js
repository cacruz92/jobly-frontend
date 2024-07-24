import React from "react";
import {Link} from "react-router-dom"
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
import SearchForm from "./SearchForm";
import "./ListPage.css"


const ListPage = ({list, category, onSearch, handleApply, hasAppliedToJob}) => {
    
    return(
        <div className="page-container">
        <div className="content-wrapper">
        <SearchForm category={category} onSearch={onSearch}/>
        <div className="card-container">
        <section className="col-md-4">
                    {category === "Companies" ? (
                        list.map(company => (
                            <>
                            <Card key={company.handle} className="mb-3">
                                <CardBody>
                                    <CardTitle>
                                        <Link 
                                        to={`/companies/${company.handle}`} 
                                        key={company.handle}
                                        className="card-title a">
                                            <ListGroupItem className="list-group-item">{company.name}</ListGroupItem>
                                        </Link>
                                    </CardTitle> 
                                    <CardText>{company.description}</CardText>   
                                </CardBody>
                            </Card>
                            </>
                        ))
                    ):(
                        list.map(job => (

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
                    )
                }
                
        </section>
        </div>
        </div>
        </div>
    )
}

export default ListPage;