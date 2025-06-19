function toggleMode(){
    document.body.classList.toggle('dark-mode');
}
const observer=new
IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
});
document.querySelectorAll('section').forEach(section=>{
    observer.observe(section);
});
    document.getElementById("contact-form").
addEventListener("submit", function(e)
{
    e.preventDefault();
document.getElementById("form-message")
innerHTML="<p style='color:green;font-weight:bold;'>Thank You for contacting me!</p>";
this.reset();});