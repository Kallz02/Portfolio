//javaScript For Cool Animations Using Intersection Observer

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
        
    });
}, {
    threshold: 0.1, // Trigger intersection when 50% of element is visible //low value for tall elements
    root: null, // Use viewport as root element
  });


const hiddenEle=document.querySelectorAll('.hidden');
hiddenEle.forEach((ele)=>observer.observe(ele));


//To Uncheck Navbar When NavLink Is CLicked

const navLinks = document.querySelectorAll('.nav li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('nav-menu');
    checkbox.checked = false;
  });
});



