'use client'

function Footer() {
    return (
        <>
            <section className="footer_section">
                <div className="container">
                    <p>
                        © <span id="displayYear" /> All Rights Reserved By BEIN Sports
                    </p>
                </div>
            </section>
            <script src="/js/jquery-3.4.1.min.js" type="text/javascript" />
            <script
                crossOrigin="anonymous"
                dangerouslySetInnerHTML={{
                    __html: "  ",
                }}
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            />
            <script src="/js/bootstrap.js" type="text/javascript" />
            <script
                dangerouslySetInnerHTML={{
                    __html: "  ",
                }}
                src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                type="text/javascript"
            />
            <script src="/js/custom.js" type="text/javascript" />
            <script
                dangerouslySetInnerHTML={{
                    __html: "  ",
                }}
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"
            />
        </>
    )
}

export default Footer;