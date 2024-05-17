"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "createdAt",
    header: "주문 일자",
  },
  {
    accessorKey: "products",
    header: "주문 상품",
  },
  {
    accessorKey: "phone",
    header: "휴대폰 번호",
  },
  {
    accessorKey: "address",
    header: "주소",
  },
  {
    accessorKey: "totalPrice",
    header: "주문 금액",
  },
  {
    accessorKey: "isPaid",
    header: "지불 여부",
  },
];
