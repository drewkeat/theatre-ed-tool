import {Box, TextField, Button, Grid, Link} from "@mui/material"

export default function SignUp({swapForm}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirmation: data.get('passwordConfirmation')
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="firstNameInput"
        label="First Name"
        name="firstName"
        autoComplete="firstName"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="lastNameInput"
        label="Last Name"
        name="lastName"
        autoComplete="lastName"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="emailInput"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="passwordInput"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="passwordConfirmation"
        label="Confirm Password"
        type="password"
        id="passwordConfirmationInput"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create Account
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link onClick={() => swapForm("login")} variant="body2">
            {"Have an account? Log In"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
