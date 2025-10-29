// config.js - Central configuration for site structure and navigation

const SiteConfig = (function() {
    'use strict';

    // Menu configuration with semantic names
    const menuConfig = {
        home: {
            id: 'home',
            sections: ['goal', 'news', 'supervise'], // Sections visible on home
            icon: 'fa fa-home',
            iconSize: '22px',
            label: 'Home'
        },
        publications: {
            id: 'publications',
            sections: ['pubWrapper'],
            icon: 'fa fa-book',
            iconSize: '19px',
            label: 'Publications'
        },
        service: {
            id: 'service',
            sections: ['activities'],
            icon: 'fa fa-briefcase',
            iconSize: '17px',
            label: 'Service'
        },
        teaching: {
            id: 'teaching',
            sections: ['teaching'],
            icon: 'fa fa-chalkboard-teacher',
            iconSize: '15px',
            label: 'Teaching & Talks'
        },
        awards: {
            id: 'awards',
            sections: ['awards'],
            icon: 'fa fa-award',
            iconSize: '20px',
            label: 'Awards'
        }
    };

    // All section IDs in the site
    const allSections = ['goal', 'news', 'supervise', 'pubWrapper', 'activities', 'teaching', 'awards'];

    // Get menu item by ID
    function getMenuItem(menuId) {
        return menuConfig[menuId];
    }

    // Get all menu items in order
    function getAllMenuItems() {
        return Object.values(menuConfig);
    }

    // Get sections to show for a given menu
    function getSectionsForMenu(menuId) {
        const item = menuConfig[menuId];
        return item ? item.sections : [];
    }

    // Get all section IDs
    function getAllSections() {
        return allSections;
    }

    // Public API
    return {
        getMenuItem,
        getAllMenuItems,
        getSectionsForMenu,
        getAllSections
    };
})();
