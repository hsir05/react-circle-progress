import { ReactSVG } from "react-svg";
import circle from "./circle.svg"
import './progress.css'


function CircleProgress (props) {
    const { progress=20, color="#fdd835" } = props
    let progressValue = (progress / 100) * 250
    return (
        <div className="progress" >
            <ReactSVG className='svg-wapper' style={{ strokeDasharray: `${progressValue}, 279.602`, stroke: color }}
                beforeInjection={(svg) => {
                    svg.children[1].style=`strokeDasharray: ${progressValue}, 279.602, stroke: ${color}`
                }} src={circle} />
                <div className="mask">{progress}%</div>
        </div >
    )
}

export default CircleProgress
