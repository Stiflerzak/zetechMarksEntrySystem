import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService } from 'src/notification/notification.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnDestroy  {

  

  displayedColumns: string[] = ['id', 'courseName','description','duration','createdAt','verifiedFlag','deletedFlag', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading: boolean = false;
  data: any;
  error: any;
  dialogConfig: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private dialog: MatDialog,    
    private notificationAPI: NotificationService
  ) { }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    // Simulating an API call (replace this with your actual API call)
    this.loading = true;
    // Simulate API error for demonstration purposes
    setTimeout(() => {
      this.loading = false;
      this.error = 'Failed to fetch data. Please try again later.';
      this.notificationAPI.showError(this.error);
      console.error('Error occurred while fetching data:', this.error);
    }, 2000);
  }

  onDialog(row: any, action: any) {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = false;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.action = action;
    this.dialogConfig.data = row;
    // const dialogRef = this.dialog.open(JobgroupDialogComponent,
    //   {
    //     width: "600px",
    //     height: "auto",
        
    //     data: {
    //       action: action,
    //       formData: row
    //     },
    //   });
    // dialogRef.afterClosed().subscribe(res => {
    //   this.getData();
    // })
    console.log(`Dialog opened with data: ${JSON.stringify(row)} and action: ${action}`);
  }

  onDelete(id: number) {
    if (window.confirm('JOB GROUP RECORD WILL BE DELETED PERMANENTLY!! ARE YOU SURE?')) {
      this.loading = true;
      // Simulating an API call to delete job group (replace this with your actual API call)
      this.simulatedDeleteJobGroup(id);
    }
  }
  
  private simulatedDeleteJobGroup(id: number) {
    // Simulate an API call delay (replace setTimeout with your actual HTTP request)
    setTimeout(() => {
      this.loading = false;
      const success = Math.random() > 0.5; // Simulate success or failure randomly
      if (success) {
        this.getData();
        this.notificationAPI.alertSuccess("JOB GROUP RECORD DELETED SUCCESSFULLY");
      } else {
        // Simulated error response from the server
        this.error = 'Failed to delete job group. Server error.';
        this.notificationAPI.alertWarning(this.error);
      }
    }, 2000); // Simulate 2 seconds delay for API call
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
 
}
