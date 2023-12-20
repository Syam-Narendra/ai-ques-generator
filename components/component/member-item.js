"use client";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

const BodyItem = () => (
  <TableBody>
    <TableRow>
      <TableCell>Ravi</TableCell>
      <TableCell>ravi@italentdigital.com</TableCell>
      <TableCell>
        <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">
          Python,Springboot,React
        </span>
      </TableCell>
      <TableCell className="text-right">Khoros, Dynamatics</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableBody>
);

export default function MemberItem() {
  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Team Members</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead className="text-right">On-Going Projects</TableHead>
            </TableRow>
          </TableHeader>
          <BodyItem />
          <BodyItem />
        </Table>
      </main>
    </div>
  );
}
