"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "상품 이름",
  },
  {
    accessorKey: "isFeatured",
    header: "활성 상품",
  },
  {
    accessorKey: "isArchived",
    header: "비활성 상품",
  },
  {
    accessorKey: "price",
    header: "가격",
  },
  {
    accessorKey: "category",
    header: "카테고리",
  },
  {
    accessorKey: "size",
    header: "사이즈",
  },
  {
    accessorKey: "color",
    header: "색상",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2" >
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "생성 날짜",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
