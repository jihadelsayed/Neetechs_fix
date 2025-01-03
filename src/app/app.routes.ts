import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default Route
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  // Dashboard Module
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  // Customers Module
  {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customers.module').then((m) => m.CustomersModule),
  },

  // POS Module
  {
    path: 'pos',
    loadChildren: () =>
      import('./features/pos/pos.module').then((m) => m.PosModule),
  },

  // Inventory Module
  {
    path: 'inventory',
    loadChildren: () =>
      import('./features/inventory/inventory.module').then((m) => m.InventoryModule),
  },

  // Notifications Module
  {
    path: 'notifications',
    loadChildren: () =>
      import('./features/notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
  },

  // Reports Module
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.module').then((m) => m.ReportsModule),
  },

  // Auth Module (Login/Register)
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },

  // Fallback Route
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
