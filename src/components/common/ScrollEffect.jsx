import ScrollAnimation from "react-animate-on-scroll";
const ScrollEffect = ({children, durationNumber}) => {
    return(
        <ScrollAnimation duration={durationNumber} animateIn="fadeInUp">
            {children}
        </ScrollAnimation>
    )
}
export default ScrollEffect;