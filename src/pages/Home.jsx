import { FadeUp } from "../features/home/components/FadeUp"
import { Footer } from "../features/common/Footer"
import { Header } from "../features/home/components/Header"
import { HeaderEight } from "../features/home/components/HeaderEight"
import { HeaderFive } from "../features/home/components/HeaderFive"
import { HeaderFour } from "../features/home/components/HeaderFour"
import { HeaderNine } from "../features/home/components/HeaderNine"
import { HeaderSeven } from "../features/home/components/HeaderSeven"
import { HeaderThree } from "../features/home/components/HeaderThree"
import { HeaderTwo } from "../features/home/components/HeaderTwo"
import LearningAssistant from "../features/common/LearningAssistant"



// This is the main Home page where all the headers Page are showing //

export const Home = () => {
    return (
        <>
            <div className="w-screen min-h-screen overflow-x-hidden">

            {/* <LearningAssistant/> */}

                <FadeUp>l
                    <Header />
                </FadeUp>

                <FadeUp>
                    <HeaderTwo />
                </FadeUp>
            
                <FadeUp>
                    <HeaderThree />
                </FadeUp>
              
                <FadeUp>
                    <HeaderFour />
                </FadeUp>

                <FadeUp>
                    <HeaderFive />
                </FadeUp>

                <FadeUp>
                    <HeaderSeven />
                </FadeUp>

                <FadeUp>
                    <HeaderEight />
                </FadeUp>

                <FadeUp>
                    <HeaderNine />
                </FadeUp>
                <Footer />
            </div>
        </>
    )
}