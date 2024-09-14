import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddStudentButton from "@/Components/AddStudentButton";
import ModalUpdate from "@/Components/ModalUpdate";
import ModalDelete from "@/Components/ModalDelete";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';

export default function StudentsDashboard({ auth, studentsData, count }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'gray.800' }}>
                    Students Dashboard
                </Typography>
            }
        >
            <Head title="Students Dashboard" />
            <Box sx={{ py: 3 }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                            <Typography variant="body1" color="text.primary">
                                Total Students: {count === 0 ? 'No students yet' : count}
                            </Typography>
                            <AddStudentButton />
                        </Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {studentsData.map((s) => (
                                        <TableRow
                                            key={s.student_id}
                                            hover
                                            sx={{ '&:hover': { backgroundColor: 'slategray.100' } }}
                                        >
                                            <TableCell>{s.student_id}</TableCell>
                                            <TableCell>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Typography variant="body1" fontWeight="bold">
                                                        {s.first_name} {s.last_name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>{s.department}</TableCell>
                                            <TableCell>{s.email}</TableCell>
                                            <TableCell>
                                                <Box display="flex" gap={2}>
                                                    <ModalUpdate id={`modal_update_${s.student_id}`} s={s} />
                                                    <ModalDelete id={`modal_delete_${s.student_id}`} s={s} />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        </AuthenticatedLayout>
    );
}