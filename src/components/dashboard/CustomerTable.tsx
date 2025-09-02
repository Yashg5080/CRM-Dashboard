import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./ag-grid-custom.css";
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
import { ColDef, ICellRendererParams } from "ag-grid-community";

const customers = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Inc",
    status: "Active",
    value: 12500,
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
    value: 8900,
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
    value: 15300,
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
    value: 5200,
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
    value: 9800,
    lastContact: "2024-01-12",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james@fintech.com",
    phone: "+1 (555) 567-8901",
    company: "FinTech Solutions",
    status: "Active",
    value: 22100,
    lastContact: "2024-01-16",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 7,
    name: "Anna Martinez",
    email: "anna@healthcare.co",
    phone: "+1 (555) 678-9012",
    company: "Healthcare Plus",
    status: "Lead",
    value: 13700,
    lastContact: "2024-01-11",
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

// Customer Cell Renderer
const CustomerCellRenderer = (params: ICellRendererParams) => {
  const { data } = params;
  return (
    <div className="flex items-center space-x-3 h-full">
      <Avatar className="h-10 w-10">
        <AvatarImage src={data.avatar} />
        <AvatarFallback className="bg-primary-light text-primary">
          {data.name.split(" ").map((n: string) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium text-foreground">
          {data.name}
        </div>
        <div className="text-sm text-muted-foreground flex items-center mt-1">
          <Mail className="h-3 w-3 mr-1" />
          {data.email}
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <Phone className="h-3 w-3 mr-1" />
          {data.phone}
        </div>
      </div>
    </div>
  );
};

// Status Cell Renderer
const StatusCellRenderer = (params: ICellRendererParams) => {
  const { value } = params;
  return (
    <Badge className={`${getStatusVariant(value)} border-0`}>
      {value}
    </Badge>
  );
};

// Value Cell Renderer
const ValueCellRenderer = (params: ICellRendererParams) => {
  const { value } = params;
  return (
    <span className="font-semibold text-foreground">
      ${value.toLocaleString()}
    </span>
  );
};

// Actions Cell Renderer
const ActionsCellRenderer = (params: ICellRendererParams) => {
  return (
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
  );
};

export const CustomerTable = () => {
  const columnDefs = useMemo<ColDef[]>(() => [
    {
      headerName: "Customer",
      field: "name",
      width: 350,
      cellRenderer: CustomerCellRenderer,
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Company",
      field: "company",
      width: 200,
      sortable: true,
      resizable: true,
      cellStyle: { fontWeight: 500 },
    },
    {
      headerName: "Status",
      field: "status",
      width: 130,
      cellRenderer: StatusCellRenderer,
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Value",
      field: "value",
      width: 120,
      cellRenderer: ValueCellRenderer,
      sortable: true,
      resizable: true,
      sort: 'desc', // Default sort by value descending
    },
    {
      headerName: "Last Contact",
      field: "lastContact",
      width: 140,
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Actions",
      field: "actions",
      width: 100,
      cellRenderer: ActionsCellRenderer,
      sortable: false,
      resizable: false,
      suppressMenu: true,
    },
  ], []);

  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  }), []);

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
      <div 
        className="ag-theme-alpine ag-grid-custom" 
        style={{ height: '600px', width: '100%' }}
      >
        <AgGridReact
          rowData={customers}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowHeight={80}
          headerHeight={50}
          animateRows={true}
          rowSelection="single"
          suppressRowClickSelection={true}
          onGridReady={(params) => {
            params.api.sizeColumnsToFit();
          }}
          onFirstDataRendered={(params) => {
            params.api.sizeColumnsToFit();
          }}
        />
      </div>
    </div>
  );
};