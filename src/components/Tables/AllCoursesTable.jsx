import React from "react";
import { Pencil, Trash2, UserCog } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import Button from "../ui/Button";

const AllCoursesTable = ({ courses, onDelete, onEdit }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12">ID</TableHead>
          <TableHead className="w-2/12">Course</TableHead>
          <TableHead className="w-1/12">Professor</TableHead>
          <TableHead className="w-1/12">Professor Email</TableHead>
          <TableHead className="w-1/12">Number of Students</TableHead>
          <TableHead className="w-1/12">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses?.map((course) => (
          <TableRow key={course.CourseID}>
            <TableCell>{course.CourseID}</TableCell>
            <TableCell>{course.CourseName}</TableCell>
            <TableCell>{course.professor.name}</TableCell>
            <TableCell>{course.professor.email}</TableCell>
            <TableCell>{course.course_registrations_count}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    onEdit(course.id, course);
                  }}
                  title="Edit Course"
                >
                  <Pencil className="h-4 w-4 text-primary" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(course.id)}
                  title="Delete Course"
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllCoursesTable;
