import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.16.0/+esm"

function ScrollTrigger() {
    return (
        <div className= "body">
<div className="example">
    <section className="scroll-section"><pre>Scroll</pre></section>
    <section className="scroll-section"><pre>to</pre></section>
    <section className="scroll-section"><pre>trigger</pre></section>
    <section className="scroll-section"><pre>animations!</pre></section>
</div>

<script type="module">
    {inView(".scroll-section pre", (element) => {
        animate(
            element,
            { opacity: 1, x: [-100, 0] },
            {
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )

        return () => animate(element, { opacity: 0, x: -100 })
    })}
</script>
</div>

    )
}

export default ScrollTrigger;