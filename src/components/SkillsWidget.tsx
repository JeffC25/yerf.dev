// import Skill from "./Skill";
import SkillCategory from "./SkillCategory";

interface Props {
    tab: number,
}

const SkillsWidget = ({ tab }: Props) => {
    return (
        <section className={`w-full pt-10 flex flex-col space-y-4 justify-between  ${(tab == 1 ? "block" : "hidden")}`}>
            {SkillCategory({ category: "Languages", skills: ["Go", "C", "C++", "C#", "TypeScript", "JavaScript", "Python", "Java", "Lua", "Verilog"] })}
            {SkillCategory({ category: "Frameworks", skills: ["React", "Svelte", "Remix", "Express.js", "Flask", "Django", "ASP.net"] })}
            {SkillCategory({ category: "Databases", skills: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "Neo4j", "DynamoDB"] })}
            {SkillCategory({ category: "Tools", skills: ["Node.js", "Docker", "Kubernetes", "Git", "NGINX", "AWS"] })}
        </section>
    )
}

export default SkillsWidget;