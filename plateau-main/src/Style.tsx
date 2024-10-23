import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Viewer} from './Viewer';
import { PlateauOrtho } from './PlateauOrtho';
import { Camera } from './Camera'; // Assuming you have a Camera component in your project
import { Clock } from './Clock';
import { Lighting } from './Lighting';
import { Poligon } from './Poligon';
import { PlateauTerrain } from './PlateauTerrain';
import { OpenChiriinchizu } from './OpenChiriinchizu';
import { PlateauModelLatest } from './PlateauModelLatest';
import { HazardMapData } from './HazardMapData';
import { XmlLoder } from './XmlLoder'
import { KmlLoder } from './KmlLoder';
import { GeologicalSurveyData } from './GeologicalSurveyData';
import { Pointer } from './Pointer';
 //Material UI をいんぽしてつかってる
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);// サイドの。
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [sort, setSort] = React.useState(''); //ここからプルダウンのやつです
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start" // ここでボタンの種類増やしたいな
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#ffffff"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              検証用アプリ
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#101010"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              めにゅー
            </Typography>
          </Toolbar>
          <Divider />
          <Divider />
          <Button variant="text">土砂災害</Button>
          <Divider />
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Plateau地図" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="地理院地図" />
          </FormGroup>
          <Divider />
          <Divider />
          <Button variant="text">情報共有</Button>
          <Divider />
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="浸水" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="土石" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="雨雲" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="津波" />
          </FormGroup>
          <Divider />
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={sort}これは使いたいときどうぞ
          label="Sort"
          //onChange={handleChange}これは使いたいときどうぞ
        >
          <MenuItem value={0}>Layer1</MenuItem>
          <MenuItem value={1}>Layer2</MenuItem>
          <MenuItem value={2}>Layer3</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Viewer>
            <Camera />
            <Clock />
            <Lighting />
            <PlateauTerrain />
            <OpenChiriinchizu />
            <HazardMapData path='https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_pref_data/34/{z}/{x}/{y}.png' />
            <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/cb/7bac72-24c1-4901-b1f4-9373e2feb738/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34102_higashi-ku_lod2' />
            <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/5d/e5c519-682e-43fc-9bbb-744b8dd665ba/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34103_minami-ku_lod2' />
            <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/a6/2ab468-91d9-4f5b-bdb2-058037d6e257/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34105_asaminami-ku_lod1' />
            <Pointer />
          </Viewer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export const Style: React.FC = () => {
  return <DashboardContent />;
}