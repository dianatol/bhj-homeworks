function initTabs(){
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach((tabsContainer) => {
    const tabNavigation = tabsContainer.querySelector('.tab__navigation');
    const tabs = tabNavigation.querySelectorAll('.tab');
    const tabContents = tabsContainer.querySelector('.tab__contents');
    const contents = tabContents.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        contents.forEach((content) => content.classList.remove('tab__content_active'));
        contents[index].classList.add('tab__content_active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);