import { CatalogueCards } from "../features/catalogue/components/catalogueCards";
import { CatalogueHead } from "../features/catalogue/components/CatalogueHead";
import { Footer } from "../features/common/Footer";
import { FadeUp } from "../features/home/components/FadeUp";
import Hero from "../Hero";


export const Catalogue = () => {
    return (
        <>

            <div className="w-full h-auto mt-[5%] flex justify-center items-center flex-col">
                <FadeUp>
                    <CatalogueHead />
                </FadeUp>

                    <CatalogueCards />
                    {/* <Hero/> */}
                <Footer/>
            </div>
        </>
    )
}