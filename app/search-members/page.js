"use client";
import "./styles.css";
import MemberItem from "../../components/component/member-item.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@chakra-ui/react";
const allMembers = [
  {
    id: "#1236",
    email: "ravi@italentdigital.com",
    name: "Ravi Varma",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    skills: "Azure",
    projects: "Dynamatics",
  },
];

export default function Members() {
  return (
    <div className="flex flex-col p-8">
      <div className="grid gap-4 py-4">
        <Label htmlFor="name" className="text-left">
          Project Name
        </Label>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input id="name" className="col-span-3" />
        </div>
        <Label htmlFor="username" className="text-left">
          Project Description
        </Label>
        <div className="grid grid-cols-4 items-center gap-4">
          <Textarea
            className="col-span-3 h-40 bg-black text-white "
            placeholder="Describe Your Project"
          />
        </div>
      </div>
      <Button className="border-white border-2 self-end">Search</Button>
      <MemberItem />
      <Button className="border-white border-2 self-end">Save</Button>
    </div>
  );
}
