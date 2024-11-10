import CustomizationSection from "./CustomizationSection";
import ExtensionUsage from "./ExtensionUsage";
import HeroSection from "./Hero-Section";
import OurSponser from "./OurSponser";
import WorkAnywhere from "./WorkAnywhere";
import WorkManagement from "./WorkManagement";

export default function App(){
    return(
        <>
        <HeroSection />
        <WorkManagement />
        <ExtensionUsage />
        <CustomizationSection />
        <WorkAnywhere />
        <OurSponser />
        </>
    )
}