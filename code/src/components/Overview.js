import React from "react"
import './overview.css'

const Overview = ({ traditionInput, treeInput, foodInput, movieInput, feelingInput }) => {
    return (
        <section className="overview">
            <h2>Summary</h2>
            <p className="summary-p">Favorite Christmas tradition: {traditionInput}</p>
            <p className="summary-p">Christmas tree preference: {treeInput}</p>
            <p className="summary-p">Favorite Christmas food/treat: {foodInput}</p>
            <p className="summary-p">Best Christmas movie: {movieInput}</p>
            <p className="summary-p">Your Christmas feeling is on level: {feelingInput}</p>
            <h3>Thank you!</h3>
        </section>
    )
}

export default Overview