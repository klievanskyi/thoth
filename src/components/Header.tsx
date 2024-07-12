import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
        </Typography>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}