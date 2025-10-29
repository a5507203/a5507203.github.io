// ContentManager.js - Unified content rendering and management system

const ContentManager = (function() {
    'use strict';

    // Registry to store section configurations
    const sections = new Map();

    // Utility: Create a basic list element
    function createList(items, className = 'news_list') {
        const list = document.createElement('ul');
        list.className = className;
        items.forEach(item => {
            const li = document.createElement('li');
            if (typeof item === 'string') {
                li.textContent = item;
            } else if (item.html) {
                li.innerHTML = item.html;
            } else if (item.date && item.text) {
                li.innerHTML = `${item.date} ${item.text}`;
            }
            list.appendChild(li);
        });
        return list;
    }

    // Utility: Create a section with heading and list
    function createSectionWithHeading(heading, items, className = 'news_list') {
        const section = document.createElement('section');
        const headingElement = document.createElement('h3');
        headingElement.textContent = heading;
        section.appendChild(headingElement);
        section.appendChild(createList(items, className));
        return section;
    }

    // Utility: Create a table element
    function createTable() {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        return table;
    }

    // Utility: Add a row to a table
    function addTableRow(table, cells) {
        const row = document.createElement('tr');
        cells.forEach(cell => {
            const td = document.createElement('td');
            if (typeof cell === 'string') {
                td.textContent = cell;
            } else {
                if (cell.className) td.className = cell.className;
                if (cell.html) td.innerHTML = cell.html;
                if (cell.element) td.appendChild(cell.element);
            }
            row.appendChild(td);
        });
        table.tBodies[0].appendChild(row);
        return row;
    }

    // Register a section with its rendering function
    function registerSection(sectionId, renderFunction) {
        sections.set(sectionId, renderFunction);
    }

    // Initialize all registered sections when DOM is ready
    function initializeAll() {
        sections.forEach((renderFunction, sectionId) => {
            const container = document.getElementById(sectionId);
            if (container) {
                renderFunction(container);
            } else {
                console.warn(`Container '${sectionId}' not found for section`);
            }
        });
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
        // DOM already loaded (in case this script loads late)
        initializeAll();
    }

    // Public API
    return {
        registerSection,
        createList,
        createSectionWithHeading,
        createTable,
        addTableRow,
        initializeAll
    };
})();
