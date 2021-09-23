// 
const sideBars = document.querySelectorAll('.sidebar-item');

sideBars.forEach(sidebar => {
    sidebar.onclick = function(){
        $(".sidebar-item.active").removeClass("active");
        this.classList.add("active");
    }
})

// sibar
const barBtn = document.querySelector(".bars-btn");
const sideBar = document.querySelector(".sidebar");
const sbOverplay = document.querySelector(".sidebar-overlay");
const closeSidebar = document.querySelector(".close-sidebar")

barBtn.onclick = function () {
    sideBar.classList.add("show");
    sbOverplay.style.display = "block";
}
function hideSidebar() {
    sideBar.classList.remove("show");
    sbOverplay.style.display = "none";
}
sbOverplay.onclick = hideSidebar;
closeSidebar.onclick = hideSidebar;