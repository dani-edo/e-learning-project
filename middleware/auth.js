export default ({ redirect }) => {
  if (!localStorage.getItem('loggedIn')) {
    return redirect('/auth/login')
  }

  return true
}
