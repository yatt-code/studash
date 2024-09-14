import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    CircularProgress,
    Typography
} from "@mui/material";

export default function ModalDelete({ id, s }) {
    const { data: deleteData, setData: setDeleteData, processing, reset } = useForm({
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
        Inertia.post(`/deleteStudent/${deleteData.student_id}`, {
            _method: "delete",
            ...deleteData,
        });
    };

    return (
        <>
            <Button
                variant="contained"
                color="error"
                onClick={handleClickOpen}
                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
                Delete
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete{" "}
                        <strong>{deleteData.first_name}</strong>?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Student ID: {deleteData.student_id}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        color="error"
                        variant="contained"
                        disabled={processing}
                    >
                        {processing ? <CircularProgress size={24} color="inherit" /> : "Confirm Delete"}
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="inherit"
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}