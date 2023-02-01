import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();


    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className='details'>
                <p>Dolor ullamco ad incididunt qui aliquip fugiat eu dolor elit cupidatat culpa commodo aliquip.Amet minim dolore labore ullamco labore aute nisi consectetur consequat eu incididunt.Consequat reprehenderit cupidatat non irure ut aliqua mollit est sit.</p>
            </div>
        </div>
    )
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);
    
    if(!res.ok){
        throw Error('Could not find that career');
    }

    return res.json();
}
