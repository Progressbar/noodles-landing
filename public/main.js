(function () {
    var scrollToLinks = document.querySelectorAll('a[data-scrollto]')

    function scrollTo(elementId) {
        document.getElementById(elementId).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    scrollToLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            scrollTo(link.dataset.scrollto)
        })
    })
})()
