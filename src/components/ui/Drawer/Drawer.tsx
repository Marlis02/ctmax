// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
// import Button from '@mui/material/Button'
// import List from '@mui/material/List'
// import Divider from '@mui/material/Divider'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import styles from './drawer.module.scss'
// import { Menu } from '@mui/material'
// import Link from 'next/link'
// import { Add, ChevronLeft, Dashboard } from '@mui/icons-material'

// export default function DashDrawer({ open, setOpen }: any) {
//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen)
//   }

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List sx={{ padding: '10px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             {/* <ListItemIcon>
//               <MenuIcon size={30} />
//             </ListItemIcon> */}
//             <ListItemText primary={'CT MAX'} />
//             <ListItemIcon
//               sx={{
//                 position: 'absolute',
//                 right: 0,
//                 // background: 'red',
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 alignItems: 'center',
//                 marginRight: '5px',
//               }}
//             >
//               <ChevronLeft />
//             </ListItemIcon>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <Dashboard />
//             </ListItemIcon>
//             <Link className={styles.link} href="/admin/dash">
//               Dashboard
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <Add />
//             </ListItemIcon>
//             <Link className={styles.link} href="/admin/dash/create_product">
//               Create Product
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <User />
//             </ListItemIcon>
//             <Link className={styles.link} href="/admin/dash/create_product">
//               Profile
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <LineChart />
//             </ListItemIcon>
//             <Link className={styles.link} href="#">
//               Analytics
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px', flexGrow: 1 }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <Send />
//             </ListItemIcon>
//             <Link className={styles.link} href="#">
//               Contacts
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <List sx={{ padding: '5px 10px' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <Settings />
//             </ListItemIcon>
//             <Link className={styles.link} href="#">
//               Settings
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   )

//   return (
//     <>
//       <Drawer
//         sx={{ position: 'relative' }}
//         open={open}
//         onClose={toggleDrawer(false)}
//       >
//         {DrawerList}
//       </Drawer>
//     </>
//   )
// }
