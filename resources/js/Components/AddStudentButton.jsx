import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Box,
    CircularProgress
} from '@mui/material';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function AddStudentButton({ className = "", disabled }) {
    const { data, setData, reset, errors, processing } = useForm({
        first_name: "",
        last_name: "",
        department: "",
        email: "",
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        reset();
        setOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();
        router.post("/addStudent", data, {
            onSuccess: () => handleClose(),
        });
    };

    return (
        <>
            <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
                disabled={disabled || processing}
                className={className}
                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
                {processing ? <CircularProgress size={24} color="inherit" /> : "Add Student"}
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={submit} sx={{ mt: 2 }} noValidate>
                        {/* First Name */}
                        <Box mb={2}>
                            <InputLabel htmlFor="first_name" value="First Name" />
                            <TextInput
                                id="first_name"
                                fullWidth
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                required
                                autoFocus
                                autoComplete="first_name"
                            />
                            {errors.first_name && <InputError message={errors.first_name} />}
                        </Box>

                        {/* Last Name */}
                        <Box mb={2}>
                            <InputLabel htmlFor="last_name" value="Last Name" />
                            <TextInput
                                id="last_name"
                                fullWidth
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                required
                                autoComplete="last_name"
                            />
                            {errors.last_name && <InputError message={errors.last_name} />}
                        </Box>

                        {/* Department */}
                        <Box mb={2}>
                            <InputLabel htmlFor="department" value="Department" />
                            <TextInput
                                id="department"
                                fullWidth
                                value={data.department}
                                onChange={(e) => setData('department', e.target.value)}
                                required
                                autoComplete="department"
                            />
                            {errors.department && <InputError message={errors.department} />}
                        </Box>

                        {/* Email */}
                        <Box mb={2}>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                fullWidth
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="email"
                            />
                            {errors.email && <InputError message={errors.email} />}
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            disabled={processing}
                            sx={{ mt: 2 }}
                        >
                            {processing ? <CircularProgress size={24} color="inherit" /> : "Add New Student"}
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit" variant="outlined">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}