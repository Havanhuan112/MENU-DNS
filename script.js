
        const menuIcon = document.getElementById('menuIcon');
        const menu = document.getElementById('menu');
        const checkboxes = document.querySelectorAll('.mod-toggle');
        const statusBox = document.getElementById('status');

        let isDraggingIcon = false, isDraggingMenu = false;
        let offsetX, offsetY;

        // Ấn vào icon để mở menu
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
        });

        // Kéo thả icon
        menuIcon.addEventListener('mousedown', (e) => {
            isDraggingIcon = true;
            offsetX = e.clientX - menuIcon.getBoundingClientRect().left;
            offsetY = e.clientY - menuIcon.getBoundingClientRect().top;
            menuIcon.style.cursor = "grabbing";
        });

        document.addEventListener('mousemove', (e) => {
            if (isDraggingIcon) {
                menuIcon.style.left = `${e.clientX - offsetX}px`;
                menuIcon.style.top = `${e.clientY - offsetY}px`;
            }
            if (isDraggingMenu) {
                menu.style.left = `${e.clientX - offsetX}px`;
                menu.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDraggingIcon = false;
            isDraggingMenu = false;
            menuIcon.style.cursor = "grab";
            menu.style.cursor = "grab";
        });

        // Kéo thả menu
        menu.addEventListener('mousedown', (e) => {
            isDraggingMenu = true;
            offsetX = e.clientX - menu.getBoundingClientRect().left;
            offsetY = e.clientY - menu.getBoundingClientRect().top;
            menu.style.cursor = "grabbing";
        });

        // Hiển thị thông báo khi ấn vào checkbox
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                statusBox.style.display = 'block';
                statusBox.innerText = 'Đang xử lý...';
                statusBox.style.background = 'red';

                setTimeout(() => {
                    statusBox.innerText = 'Thành công!';
                    statusBox.style.background = 'green';
                    setTimeout(() => statusBox.style.display = 'none', 1000);
                }, 4000);
            });
        });
    
