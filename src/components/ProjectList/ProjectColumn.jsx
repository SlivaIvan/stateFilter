export const ProjectColumn = ({ project, column, numberColumn }) => {
    return(
        <div className="project__column">
        {
            project.map((item, index) => index % column === numberColumn -1 && (
                <div className="project__item"
                key={Date.now() + index}>
                    <img src={item.img} alt=""/>
                </div>
            ))
        }
        </div>
    )

}