import React from 'react';
import _ from 'lodash';

const SelectBar = ({ campusList, costList,categoryList, selectEvent_campus,selectEvent_cost,selectEvent_category}) => {

    let categoryOption = categoryList.map( item => (<option key={index} value={item.index}>{item}</option>));
    let costOption = costList.map( item => (<option key={index} value={index}>{item.index}</option>));
    let campusOption = campusList.map( item => (<option key={index} value={item.inde}>{item}</option>));
     
        return (
            <div className="selectedContainer">
               <selectedContainer 
                categoryOption = {categoryOption}
                costOption = {costOption}
                campusOption = {campusOption}
                selectEvent_campus = {selectEvent_campus}
                selectEvent_category = {selectEvent_category}
                selectEvent_cost = {selectEvent_cost} />                      
            </div>
        );
}

const selectedContainer = ({ campusList, costList,categoryList, selectEvent_campus,selectEvent_cost,selectEvent_category }) => {
    return (
                    <label> 
                      &ensp; Campus : 
                    </label>
                    <select value={item.index} onChange={ (e) => { this.selectEvent_campus()}} >
                        {campusOption} 
                    </select>

                    <label> 
                        &ensp; Cost : 
                    </label>
					<select value={item.index} onChange={ (e) => { this.selectEvent_cost()}} >
                        {costOption} 
                	</select>

                    <label> 
                        &ensp; Category : 
                    </label>
                    <select value={item.index} onChange={ (e) => { this.selectEvent_category()}} >
                        {categoryOption} 
                    </select>
    );
}






export default Dropdownfilter;