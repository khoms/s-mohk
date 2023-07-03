type DrawerMenuId =
  | "dashboard"
  | "products"
  | "invoice"
  | "orders"
  | "employee"
  | "reports"
  | "log-out";

export interface DrawerMenuItem {
  id: DrawerMenuId;
  text: string;
  icon: JSX.Element;
  path?: string;
  onClick?: () => void;
  subMenu?: DrawerMenuItem[];
  expanded?: boolean;
}
