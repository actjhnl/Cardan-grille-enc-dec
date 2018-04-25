export const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    backgroundColor:'#EFEBE9',
    display:'flex',
    justifyContent:'center',
    flexDirection: 'column',
  }),
  wrapper: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'stretch',
    flexWrap:'nowrap',
    flexShrink:1
  },
  button: {
    margin: theme.spacing.unit
  },
  panel:{
    backgroundColor:'#EFEBE9',
    flexShrink:1
  }

});
