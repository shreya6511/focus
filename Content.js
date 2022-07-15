const generateHTML = (pageName) => {
    return `<div> 
        
        <h1> BLOCKED! </h1> 
    
    </div>`
}
const generateSTYLE = () => {
    return `<style> 
        h1 {
            padding-left: 2rem;
        }

    </style>`
}
const blocked_websites = ["www.youtube.com", "www.netflix.com"]
const hostname = window.location.hostname
if (blocked_websites.includes(hostname)){
    document.body.innerHTML = generateHTML(hostname);
    document.head.innerHTML = generateSTYLE(); 
}