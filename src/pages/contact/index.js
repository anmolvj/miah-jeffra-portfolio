import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Layout from '../../components/Layout'
import FormikForm from '../../components/FormikForm'

const styles = {
  card: {
    maxWidth: 400,
    textAlign: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
  },
}

const SimpleCard = ({ classes }) => (
  <Layout>
    <Card className={classes.card}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Get in Touch With me!
      </Typography>
      <FormikForm />
    </Card>
  </Layout>
)

export default withStyles(styles)(SimpleCard)

// export default () => <Card><FormikForm /></Card>;
