import React from 'react' //Yup has some bug due to which we need to import it like this
import { TextField } from 'formik-material-ui'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: '#0291b1',
    },
  },
  cssFocused: {},

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#0291b1',
    },
  },
  notchedOutline: {},
})

export const CustomTextField = ({ classes, ...props }) => {
  return (
    <TextField
      className={classes.margin}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      fullWidth
      margin="normal"
      variant="outlined"
      {...props}
    />
  )
}

export default withStyles(styles)(CustomTextField)
