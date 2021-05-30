// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

/**
	https://underscorejs.org/
	https://qastack.com.br/programming/5767325/how-can-i-remove-a-specific-item-from-an-array
	https://love2dev.com/blog/javascript-remove-from-array/
	https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array?page=2&tab=votes#tab-top
*/

// import _, { pluck, filter, each } from 'underscore';

// var map = require('underscore/cjs/map.js');
var _ = require('underscore');

// console.log(JSON.stringify(map, false, 2))

const menu = [
	{
		section_title: "Aplicação",
		roles: true,
	},
	{
		id: 165,
		roles: true,
		title: "Dashboard",
		icon: "mdi mdi-view-dashboard-variant",
		page: "/dashboard",
	},

	{
		section_title: "Menu",
		roles: 'admin|mananger',
	},
	{
		id: 898898,
        roles: true,
		title: "Perfis",
		page: "/dashboard/perfis",
		icon: "mdi mdi-file-document-edit",
		isOpen: true,
		level: 0,
		submenu: [
			{
				id: 988989,
				title: "Listar",
				page: "/dashboard/perfis/listar"
			},
		]
	},
	// {
	// 	id: uniqueID(),
	// 	title: "Permissões",
	// 	page: "/permissions",
	// 	icon: "mdi mdi-lock",
	// 	isOpen: false,
	// 	level: 0,
	// 	submenu: [
	// 		// {
	// 		// 	id: uniqueID(),
	// 		// 	title: "Listar",
	// 		// 	page: "/dashboard/permissoes"
	// 		// },
	// 	]
	// },
	{
		id: 596898,
		title: "Usuários",
		page: "/usuarios",
		icon: "mdi mdi-account-box",
		roles: 'admin | mananger',
		isOpen: false,
		level: 0,
		submenu: [
			{
				id: 98989,
				title: "Adicionar",
				page: "/dashboard/usuarios/adicionar",
				permissions: false,
			},
			{
				id: 59898,
				title: "Listar",
				page: "/dashboard/usuarios/listar",
				permissions: true,
			},
			{
				id: 8988,
                permissions:  false,
				title: "Listar V1",
				page: "/dashboard/usuarios/listarv1"
			},
			{
				id: 898565,
                permissions:  false,
				title: "Listar V2",
				page: "/dashboard/usuarios/listarv2"
			}
		]
	},
];


// const newArray = menu.filter((m) => {
// 	//console.log(el)
//
// 	if (m.roles !== false) {
// 		///console.log(el.submenu !== undefined)
//
// 		if (typeof m.submenu !== 'undefined') {
// 			//console.log(el.submenu)
// 		  return m.submenu.filter((s, i, array) => {
//
// 				if (typeof s.permissions !== 'undefined') {
// 					//console.log(m)
// 					if (s.permissions !== false)  {
// 						alert('entrei')
//
// 						// return s.permissions !== false
//
// 						return array.indexOf( s.permissions ) !== false;
// 					}
//
// 				}
// 			})
//
// 		}
// 		//return m
// 	}
//
// })

// Retorna Menu array filtrado com "roles == true"
const newArray = menu.filter( m => {
	//console.log(el)
    if (m.roles !== undefined) {
      return m.roles !== false
    }
})

let idxSubmenuArray = []
let newSubmenuArray = []

// Retorna SubMenu array filtrado com "roles == true"
newArray.filter(m => {
  if(m.submenu !== undefined) {
    m.submenu.map( (s, i, array) => {
      if ( s.permissions !== undefined) {
        //console.log(s.permissions == false )
        if (s.permissions !== true) {
          idxSubmenuArray.push(i)
        }
      }
    })

    // console.log(idxSubmenuArray)

		// delete indices
		newSubmenuArray = m.submenu.filter((s, idx) => {
			return !idxSubmenuArray.includes(idx);
		})

		// New newSubmenuArray
	  m.submenu = newSubmenuArray
	}

  return  m.submenu
})



// console.log(JSON.stringify(menu, false, 2))
console.log('--------------------------------')
// console.log(JSON.stringify(newArray, false, 2))
console.log(JSON.stringify(newArray, false, 2))
// console.log(JSON.stringify(newSubmenuArray, false, 2))
