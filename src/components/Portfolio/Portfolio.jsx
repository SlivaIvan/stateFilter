/* eslint-disable no-undef */
import { Component } from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { Data } from '../data'
import { ProjectList } from '../ProjectList/ProjectList';
import './portfolio-style.css'
// Хранит в себе список фильмов
//Активный фильтр
//Список проектов
export class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFilter: "All",
            filterData: Data,
        }
        this.onSelectFilter = this.onSelectFilter.bind(this);
      }

    getFilters(){
        const filters = ['All', ...Data.map(({category}) => category)]
        return [...new Set(filters)];
    }

    onSelectFilter(filter){
        this.setState({ selectedFilter: filter })
        this.setState({ filterData: filter === 'All'
            ? Data
            : Data.filter(({category}) => category === filter)})
    }
    
    render() {
        return(
            <div className='obj'> 
                <Toolbar 
                filters={this.getFilters()}
                selected={this.state.selectedFilter}
                oneSelectFilter={this.onSelectFilter}
                
                />
                <ProjectList project={this.state.filterData} />
            </div>
        )
    }

}
