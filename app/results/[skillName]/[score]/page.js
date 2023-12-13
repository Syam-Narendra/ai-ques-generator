export default function Results({ params: { skillName, score } }) {
    console.log(skillName,score)
    return <h1>{skillName},{score}</h1>

}