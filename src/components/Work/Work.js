import React, { Component } from 'react'
import {WorkSection, WorkTitle, Part, Icon, PartTitle,Line, PartDesc} from './WorkStyle'
import axios from 'axios'
import { Span } from '../Home/Home.Style'

class Work extends Component {
    state= {
        works: []
    }

    componentDidMount=()=>{
        axios.get('js/data.json').then(res=> this.setState({works: res.data.works}))
    }
    render(){
        const works= this.state.works;
        const work= works.map(workList=>{
            return(
                <Part first= {workList.id} key= {workList.id}>
                <Icon className={workList.icon_name}></Icon>
                <PartTitle>{workList.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {workList.body}
                </PartDesc>
            </Part>
            )
        })
    return(
        <WorkSection>
        <div className="container">
            <WorkTitle id="1"><Span>My</Span> Skills</WorkTitle>
            
            {work}
           
        </div>
    </WorkSection>
    )
    }
}

export default Work