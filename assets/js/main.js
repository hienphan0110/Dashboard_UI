// 
const sideBars = document.querySelectorAll('.sidebar-item');

sideBars.forEach(sidebar => {
    sidebar.onclick = function(){
        $(".sidebar-item.active").removeClass("active");
        this.classList.add("active");
    }
})