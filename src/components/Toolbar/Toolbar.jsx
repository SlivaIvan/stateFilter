import './toolbar-style.css';
export const Toolbar = ({filters, selected, oneSelectFilter}) => {
    return(
        <div className="toolbar">
            <ul className="toolbar__list">
                {
                    filters.map( filter => 
                        <li
                        className={
                            filter === selected
                            ?"toolbar__item_active"
                            :"toolbar__item"
                        }
                        key={filter}
                        onClick={()=> oneSelectFilter(filter)}
                        >{filter}</li>
                    
                    )
                    }
            </ul> 
        </div>
    )
}