import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Mail, Phone, Eye, Edit, Trash2 } from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Inc",
    status: "Active",
    value: "$12,500",
    lastContact: "2024-01-15",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@designstudio.com",
    phone: "+1 (555) 987-6543",
    company: "Design Studio",
    status: "Lead",
    value: "$8,900",
    lastContact: "2024-01-14",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@startup.io",
    phone: "+1 (555) 456-7890",
    company: "StartupIO",
    status: "Active",
    value: "$15,300",
    lastContact: "2024-01-13",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 4,
    name: "David Thompson",
    email: "david@consulting.co",
    phone: "+1 (555) 234-5678",
    company: "Thompson Consulting",
    status: "Inactive",
    value: "$5,200",
    lastContact: "2024-01-10",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 5,
    name: "Lisa Park",
    email: "l.park@agency.com",
    phone: "+1 (555) 345-6789",
    company: "Creative Agency",
    status: "Lead",
    value: "$9,800",
    lastContact: "2024-01-12",
    avatar: "/api/placeholder/40/40",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-success-light text-success-foreground";
    case "Lead":
      return "bg-warning-light text-warning-foreground";
    case "Inactive":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const CustomerTable = () => {
  const [sortField, setSortField] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="w-[300px] font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Company</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Value</TableHead>
              <TableHead className="font-semibold">Last Contact</TableHead>
              <TableHead className="w-[100px] font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="border-border hover:bg-muted/30 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={customer.avatar} />
                      <AvatarFallback className="bg-primary-light text-primary">
                        {customer.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">
                        {customer.name}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-foreground">
                  {customer.company}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusVariant(customer.status)} border-0`}
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold text-foreground">
                  {customer.value}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {customer.lastContact}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem className="cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Customer
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};