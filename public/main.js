(function () {
    var scrollToLinks = document.querySelectorAll('a[data-scrollto]')
    var isSafari = window.safari !== undefined;

    function scrollTo(elementId) {
        var options = {
            block: 'start',
            behavior: 'smooth'
        }

        var element = document.getElementById(elementId)

        if (!element) return

        element.scrollIntoView(options)
    }

    scrollToLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (link.dataset && link.dataset.scrollto) {
                scrollTo(link.dataset.scrollto)
            }
        })
    })
})()
