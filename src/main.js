const links = {
    github: 'https://github.com/',
    frontendmentor: 'https://frontendmentor.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/'
};

Object.keys(links).forEach(id => {
    document.getElementById(id).addEventListener('click', function() {
        window.location.href = links[id];
    });
});