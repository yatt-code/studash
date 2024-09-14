import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Box,
    CircularProgress
} from "@mui/material";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function ModalUpdate({ id, s }) {
    const { data: editData, setData: setEditData, errors, processing, reset } = useForm({
        student_id: s.student_id,
        first_name: s.first_name,
        last_name: s.last_name,
        department: s.department,
        email: s.email,
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        reset();
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(`/updateStudent/${s.student_id}`, {
            _method: "patch",
            ...editData,
        });
    };

    return (
        <>
            <Button
                variant="contained"
                color="warning"
                onClick={handleClickOpen}
                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
                Edit
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Edit {s.first_name} Details</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }} noValidate>
                        {/* First Name */}
                        <Box mb={2}>
                            <InputLabel htmlFor="first_name" value="First Name" />
                            <TextInput
                                id="first_name"
                                fullWidth
                                value={editData.first_name}
                                onChange={(e) => setEditData('first_name', e.target.value)}
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
                                value={editData.last_name}
                                onChange={(e) => setEditData('last_name', e.target.value)}
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
                                value={editData.department}
                                onChange={(e) => setEditData('department', e.target.value)}
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
                                value={editData.email}
                                onChange={(e) => setEditData('email', e.target.value)}
                                required
                                autoComplete="email"
                            />
                            {errors.email && <InputError message={errors.email} />}
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="warning"
                            disabled={processing}
                            sx={{ mt: 2 }}
                        >
                            {processing ? <CircularProgress size={24} color="inherit" /> : "Confirm Update"}
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