import ProjectManagement from "./ProjectManagement";
import WorkTogether from "./WorkTogether";

export default function WorkManagement(){
    return(
        <>
        <section className="w-full h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] gap-[100px]">
            <ProjectManagement />
            <br />
            <br />
            <br />
            <br />
            <WorkTogether />
        </section>
        </>
    )
}