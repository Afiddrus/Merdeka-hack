const navItem = [
    {id:1, label: "Ujung Tombang", href: '#'},
    {id:2, label: "Sejarah", href: '#sejarah'},
    {id:3, label: "Pahlawanku", href: '#pahlawan'},
    {id:4, label: "Tema", href: '#'},
    {id:5, label: "Event", href: '#event'},
]

export default navItem;  // Exporting the array as a named export. This can be imported in other files using 'import {navItem} from './navItem.js''.  The default export is used when importing the whole module, without specifying a specific item. In this case, the entire array is exported.  For example, 'import * as nav from './navItem.js''.  This would allow you to access all the items in the array using 'nav
