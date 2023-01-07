// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import { createContext, useState, useEffect, useContext } from 'react'
import useAxios from "src/axios"
import { useRouter } from 'next/router'
import { userContext } from '../_app'


const Dashboard = () => {
  const router = useRouter();
  const axios = useAxios()
  const [user, setUser] = useContext(userContext)
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
      const res = axios.then(axios => {
        axios.get('/admin/me')
        .then(res => {
          setUser(true)
          console.log(res)

        })
        .catch(err => {
          router.push('/admin/login')
        })
      })

  }, [])



  return user ? (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  ) : 'Loading'
}

export default Dashboard
