"use client";

import React from "react";
import { usePosts } from "@/hooks/use-posts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";

export default function PostListPage() {
  const { data, isLoading, error, refetch } = usePosts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-lg">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Bir hata oluştu</h3>
          <p className="text-gray-600 mb-4">
            Postlar yüklenirken bir sorun oluştu.
          </p>
          <Button onClick={() => refetch()}>Tekrar Dene</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Postlar</h1>
        <p className="text-gray-600">Tüm postları görüntüleyin ve yönetin</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="w-[100px]">Kullanıcı ID</TableHead>
              <TableHead>Başlık</TableHead>
              <TableHead className="w-[200px]">İçerik</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.id}</TableCell>
                <TableCell>{post.userId}</TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {post.body}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {data && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          Toplam {data.length} post bulundu
        </div>
      )}
    </div>
  );
}
