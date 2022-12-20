import ScrollAnimation from "react-animate-on-scroll";
const ScrollEffect = ({children, durationNumber}) => {
    return(
        durationNumber ? 
            <ScrollAnimation duration={durationNumber} animateIn="fadeInUp">
                {children}
            </ScrollAnimation>
            :
            <ScrollAnimation duration={1.5} animateIn="fadeInUp">
                {children}
            </ScrollAnimation>
        

    )
}
export default ScrollEffect;