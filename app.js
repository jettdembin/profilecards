const heading = 'Where Success is Born';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 120);
    }
};

typing();
