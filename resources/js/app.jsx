import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '@fontsource/roboto'; // Import Roboto font
import { CssBaseline } from '@mui/material'; // Import MUI CssBaseline
import { ThemeProvider, createTheme } from '@mui/material/styles';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const theme = createTheme({
    // Customize Theme
    palette: {
        primary: {
            main: '#1A237E',
        },
        secondary: {
            main: '#374151',
        },
        background: {
            default: '#F9FAFC',
        },
    },
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
