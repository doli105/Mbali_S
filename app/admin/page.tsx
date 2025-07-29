"use client"

import { useState } from "react"
import { Package, Clock, Truck, CheckCircle, Edit, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const initialOrders = [
  {
    id: "ORD-2024-001",
    customerName: "Sarah Johnson",
    email: "sarah@email.com",
    phone: "078 123 4567",
    cakeName: "Princess Castle Cake",
    status: "confirmed",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    total: "R850",
    notes: "Pink and purple theme, gluten-free",
  },
  {
    id: "ORD-2024-002",
    customerName: "Mike Rodriguez",
    email: "mike@email.com",
    phone: "078 987 6543",
    cakeName: "Superhero Adventure Cake",
    status: "out-for-delivery",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-19",
    total: "R950",
    notes: "Batman theme, chocolate flavor",
  },
  {
    id: "ORD-2024-003",
    customerName: "Lisa Chen",
    email: "lisa@email.com",
    phone: "078 555 1234",
    cakeName: "Wedding Elegance Cake",
    status: "pending",
    orderDate: "2024-01-17",
    deliveryDate: "2024-01-25",
    total: "R2500",
    notes: "3-tier, white roses, vanilla flavor",
  },
]

const statusOptions = [
  { key: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  { key: "confirmed", label: "Confirmed", color: "bg-blue-100 text-blue-800", icon: CheckCircle },
  { key: "out-for-delivery", label: "Out for Delivery", color: "bg-purple-100 text-purple-800", icon: Truck },
  { key: "delivered", label: "Delivered", color: "bg-green-100 text-green-800", icon: Package },
]

export default function AdminPanel() {
  const [orders, setOrders] = useState(initialOrders)
  const [editingOrder, setEditingOrder] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
    setEditingOrder(null)
  }

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.cakeName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusInfo = (status: string) => {
    return statusOptions.find((option) => option.key === status) || statusOptions[0]
  }

  const getStatusCounts = () => {
    return statusOptions.map((status) => ({
      ...status,
      count: orders.filter((order) => order.status === status.key).length,
    }))
  }

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 to-pink-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Admin <span className="font-dancing-script text-pink-600">Dashboard</span>
          </h1>
          <p className="text-amber-700 max-w-2xl mx-auto">Manage and track all cake orders from one central location</p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {getStatusCounts().map((status) => {
            const IconComponent = status.icon
            return (
              <Card key={status.key} className="border-amber-200">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${status.color}`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <p className="text-2xl font-bold text-amber-900">{status.count}</p>
                  <p className="text-sm text-amber-600">{status.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search orders by ID, customer name, or cake name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md border-amber-200 focus:border-yellow-500"
          />
        </div>

        {/* Orders Table */}
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const statusInfo = getStatusInfo(order.status)
            const IconComponent = statusInfo.icon

            return (
              <Card key={order.id} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-amber-900">{order.id}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${statusInfo.color}`}
                      >
                        <IconComponent className="h-4 w-4 mr-1" />
                        {statusInfo.label}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingOrder(editingOrder === order.id ? null : order.id)}
                        className="text-amber-700 hover:text-amber-900"
                      >
                        {editingOrder === order.id ? <X className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-amber-600">Customer</p>
                      <p className="font-medium text-amber-900">{order.customerName}</p>
                      <p className="text-sm text-amber-700">{order.email}</p>
                      <p className="text-sm text-amber-700">{order.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600">Cake</p>
                      <p className="font-medium text-amber-900">{order.cakeName}</p>
                      <p className="text-sm text-amber-700">Total: {order.total}</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600">Dates</p>
                      <p className="text-sm text-amber-700">Ordered: {order.orderDate}</p>
                      <p className="text-sm text-amber-700">Delivery: {order.deliveryDate}</p>
                    </div>
                  </div>

                  {order.notes && (
                    <div className="mb-4">
                      <p className="text-sm text-amber-600">Notes</p>
                      <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded">{order.notes}</p>
                    </div>
                  )}

                  {/* Status Update Controls */}
                  {editingOrder === order.id && (
                    <div className="border-t border-amber-200 pt-4">
                      <p className="text-sm font-medium text-amber-900 mb-3">Update Status:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {statusOptions.map((status) => {
                          const StatusIcon = status.icon
                          return (
                            <Button
                              key={status.key}
                              variant={order.status === status.key ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateOrderStatus(order.id, status.key)}
                              className={`${
                                order.status === status.key
                                  ? "bg-yellow-500 hover:bg-yellow-600 text-amber-900"
                                  : "border-amber-300 text-amber-700 hover:bg-amber-50"
                              }`}
                            >
                              <StatusIcon className="h-4 w-4 mr-1" />
                              {status.label}
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-amber-300 mx-auto mb-4" />
            <p className="text-amber-700 text-lg">No orders found</p>
            <p className="text-amber-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
