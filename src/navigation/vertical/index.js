// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Creation } from 'mdi-material-ui'


const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Tasks'
    },
    {
      title: 'Create Task',
      icon: Creation,
      path: '/admin/tasks/create'
    },
    {
      title: 'View Tasks',
      path: '/admin/tasks',
      icon: Table
    },
    {
      title: 'User Tasks',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      sectionTitle: 'Transactions'
    },
    {
      title: 'View Transactions',
      icon: Table,
      path: '/typography'
    },

  ]
}

export default navigation
