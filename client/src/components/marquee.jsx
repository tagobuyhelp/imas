import { Marquee } from "@/registry/magicui/marquee"

const MarqueeComponent = ({ children }) => {
    return (
        <Marquee>
            {children}
        </Marquee>
    )
}