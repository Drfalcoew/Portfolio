import MenuMui from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"; // Import Box
import { UserSettingsState } from "../common/UserSettingsContext";

// This is a reusable component that can be used to create a menu with a list of items.

interface MenuItemProps {
    label?: string;
    color?: string;
    image?: React.ReactNode;
    onClick: () => void;
}

interface MenuProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
    menuItems: Array<MenuItemProps>;
    state: UserSettingsState;
}

const Menu = ({ anchorEl, handleClose, menuItems, state }: MenuProps) => {
    const open = Boolean(anchorEl);

    return (
        <MenuMui
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: state.darkMode ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.88)',
                    color: state.darkMode ? '#e0e0e0' : '#282c34',
                    border: '1px solid' + (state.darkMode ? '#1d2026' : '#bdbdbd'),
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                },
            }}
        >
            <Grid container spacing={0}>
                {menuItems.map((item, index) => (
                    <Grid item xs={2} key={index} style={{ textAlign: 'center' }}>
                        <Box 
                            onClick={() => {
                                item.onClick();
                                handleClose();
                            }}
                            sx={{
                                borderRadius: '25%',
                                height: '30px',
                                width: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '10px',
                                cursor: 'pointer',
                            }}>
                            {item.image && <Box sx={{ mb: 1 }}>{item.image}</Box>}
                            {item.color && (
                                <Box sx={{ padding: 2, backgroundColor: item.color, borderRadius: '50%' }} />
                            )}
                            <Box component="span" sx={{ fontSize: '0.75rem' }}>
                                {item.label}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </MenuMui>
    );
};

export default Menu;
