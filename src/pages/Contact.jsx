import { FadeUp } from "../features/home/components/FadeUp";
import { Footer } from "../features/common/Footer";
import { AddressPage } from "../features/contact/components/addressPage";
import { FormPage } from "../features/contact/components/FormPage";
import { FrequentlyQuestion } from "../features/contact/components/FrequentlyQuestion";
import { ReachusPage } from "../features/contact/components/ReachusPage";
import { VisitUsPage } from "../features/contact/components/VisitUsPage";

export const Contact = () => {

    return (
        <>
            <div className="w-full h-auto mt-[10%] flex justify-center items-center flex-col">
                {/* First page*/}
                
                <FadeUp>
                   <AddressPage />
                </FadeUp>

                {/* ReachusPage */}
                <FadeUp>
                    <ReachusPage />
                </FadeUp>
              
                {/* FormPage */}
                <FadeUp>
                    <FormPage />
                </FadeUp>

                {/* visitusPage */}
                <FadeUp>
                      <VisitUsPage />
                </FadeUp>
              
                {/* FrequentlyQuestion */}
                <FadeUp>
                      <FrequentlyQuestion />
                </FadeUp>
                

                <Footer />
            </div>
        </>
    );
};