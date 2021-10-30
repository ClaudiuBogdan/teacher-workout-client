import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: 0,
    [theme.breakpoints.only('xs')]: { width: 200 },
    [theme.breakpoints.only('sm')]: { width: 200 },
    [theme.breakpoints.only('md')]: { width: 80 },
    [theme.breakpoints.only('lg')]: { width: 300 },
    [theme.breakpoints.only('xl')]: { width: 500 },
  },
}))

export const Space = () => <Box className={useStyles().root} />
