import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./ag-grid-custom.css";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, ChevronLeft, ChevronRight, Loader2, AlertCircle, Users } from "lucide-react";
import { ColDef, ICellRendererParams } from "ag-grid-community";

const mockCustomers = [
  {
    id: 1,
    customerName: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    customerName: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-14",
  },
  {
    id: 3,
    customerName: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-13",
  },
  {
    id: 4,
    customerName: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-12",
  },
  {
    id: 5,
    customerName: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-11",
  },
  {
    id: 6,
    customerName: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-10",
  },
  {
    id: 7,
    customerName: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-09",
  },
  {
    id: 8,
    customerName: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
    avatar: "/api/placeholder/40/40",
    joinDate: "2024-01-08",
  },
  // Add more mock data for pagination testing
  ...Array.from({ length: 248 }, (_, i) => ({
    id: i + 9,
    customerName: `Customer ${i + 9}`,
    company: ["Microsoft", "Google", "Apple", "Amazon", "Tesla"][i % 5],
    phoneNumber: `(${String(Math.floor(Math.random() * 900) + 100)}) 555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
    email: `customer${i + 9}@example.com`,
    country: ["United States", "Canada", "UK", "Germany", "France"][i % 5],
    status: i % 4 === 0 ? "Inactive" : "Active",
    avatar: "/api/placeholder/40/40",
    joinDate: `2024-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  }))
];

const CustomerNameRenderer = (params: ICellRendererParams) => {
  const { data } = params;
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.avatar} />
        <AvatarFallback className="bg-primary-light text-primary text-xs">
          {data.customerName.split(" ").map((n: string) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <span className="font-medium">{data.customerName}</span>
    </div>
  );
};

const StatusRenderer = (params: ICellRendererParams) => {
  const { value } = params;
  return (
    <span 
      className={`inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md min-w-[70px] ${
        value === "Active" 
          ? "bg-green-100 text-green-700 border border-green-200" 
          : "bg-red-100 text-red-700 border border-red-200"
      }`}
    >
      {value}
    </span>
  );
};

export const CustomersTableCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const pageSize = 8;

  const filteredCustomers = useMemo(() => {
    return mockCustomers.filter(customer =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Reset to first page when search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const paginatedCustomers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredCustomers.slice(startIndex, startIndex + pageSize);
  }, [filteredCustomers, currentPage]);

  const totalPages = Math.ceil(filteredCustomers.length / pageSize);
  const startEntry = (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, filteredCustomers.length);

  const columnDefs = useMemo<ColDef[]>(() => [
    {
      headerName: "Customer Name",
      field: "customerName",
      width: 200,
      cellRenderer: CustomerNameRenderer,
      sortable: true,
    },
    {
      headerName: "Company",
      field: "company",
      width: 150,
      sortable: true,
    },
    {
      headerName: "Phone Number",
      field: "phoneNumber",
      width: 150,
      sortable: true,
    },
    {
      headerName: "Email",
      field: "email",
      width: 200,
      sortable: true,
    },
    {
      headerName: "Country",
      field: "country",
      width: 150,
      sortable: true,
    },
    {
      headerName: "Status",
      field: "status",
      width: 100,
      cellRenderer: StatusRenderer,
      sortable: true,
    },
  ], []);

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-foreground">All Customers</h2>
            <button className="text-sm text-success hover:underline">Active Members</button>
          </div>
          
          <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 w-full md:w-[200px] bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        {hasError ? (
          // Error State
          <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground">Something went wrong</h3>
              <p className="text-sm text-muted-foreground">Failed to load customer data. Please try again.</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setHasError(false)}
              className="bg-background"
            >
              Try Again
            </Button>
          </div>
        ) : isLoading ? (
          // Loading State
          <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading customers...</p>
          </div>
        ) : filteredCustomers.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
            <Users className="h-12 w-12 text-muted-foreground" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground">No customers found</h3>
              <p className="text-sm text-muted-foreground">
                {searchTerm ? `No results for "${searchTerm}"` : "No customers to display"}
              </p>
            </div>
            {searchTerm && (
              <Button 
                variant="outline" 
                onClick={() => handleSearchChange("")}
                className="bg-background"
              >
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          // Table Content
          <div 
            className="ag-theme-alpine ag-grid-custom" 
            style={{ height: '400px', width: '100%' }}
          >
            <AgGridReact
              rowData={paginatedCustomers}
              columnDefs={columnDefs}
              rowHeight={60}
              headerHeight={40}
              suppressPaginationPanel={true}
              suppressRowClickSelection={true}
              onGridReady={(params) => {
                params.api.sizeColumnsToFit();
              }}
            />
          </div>
        )}

        {/* Pagination - only show when data is available */}
        {!hasError && !isLoading && filteredCustomers.length > 0 && (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing data {startEntry} to {endEntry} of 256K entries
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="bg-background"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center space-x-1">
                {/* Show pages 1-5 initially, or current page context */}
                {Array.from({ length: Math.min(5, Math.min(totalPages, 40)) }, (_, i) => {
                  let pageNum;
                  if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= Math.min(totalPages, 40) - 2) {
                    pageNum = Math.min(totalPages, 40) - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={currentPage === pageNum ? "" : "bg-background"}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                
                {/* Show ellipsis and last page if needed */}
                {Math.min(totalPages, 40) > 5 && currentPage < Math.min(totalPages, 40) - 2 && (
                  <>
                    <span className="text-muted-foreground">...</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, 40))}
                      className="bg-background"
                    >
                      {Math.min(totalPages, 40)}
                    </Button>
                  </>
                )}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(Math.min(totalPages, 40), currentPage + 1))}
                disabled={currentPage === Math.min(totalPages, 40)}
                className="bg-background"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};