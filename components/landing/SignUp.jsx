import {Box, TextField, Button, Grid, Link} from "@mui/material"
import {useFormik} from "formik"
import * as yup from "yup"

export default function SignUp({swapForm}) {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Required field"),
    lastName: yup.string().required("Required field"),
    email: yup.string().email("Invalid email").required("Required field"),
    password: yup.string().required("Required field"),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], "Password Confirmation does not match Password").required("Required field"),
  })

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  })

  return (
    <Box>
      <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1 }}>
        <TextField
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          margin="normal"
          required
          fullWidth
          id="firstNameInput"
          label="First Name"
          name="firstName"
          autoComplete="firstName"
        />
        <TextField
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          margin="normal"
          required
          fullWidth
          id="lastNameInput"
          label="Last Name"
          name="lastName"
          autoComplete="lastName"
        />
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
          required
          fullWidth
          id="emailInput"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
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
    </Box>
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
