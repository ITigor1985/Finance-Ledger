const faqs= document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', faqActive);
    function faqActive(){
        faq.classList.toggle('active');
    }
})