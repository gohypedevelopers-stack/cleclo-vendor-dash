import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Truck, Settings2, CheckCircle2 } from "lucide-react"

const stats = [
  {
    title: "New Assigned",
    value: "12",
    description: "+4 since yesterday",
    icon: ClipboardList,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    trend: "up",
  },
  {
    title: "Pending Pickups",
    value: "5",
    description: "Next pickup at 2:00 PM",
    icon: Truck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    trend: "neutral",
  },
  {
    title: "In Processing",
    value: "28",
    description: "15 washers active",
    icon: Settings2,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    trend: "neutral",
  },
  {
    title: "Ready for Delivery",
    value: "8",
    description: "3 drivers notified",
    icon: CheckCircle2,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent>
            <div className="flex items-center justify-between space-y-0">
              <h3 className="text-sm font-bold text-[#3E8940]">{stat.title}</h3>
              <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">{stat.value}</div>
              <p className="text-xs font-semibold mt-1 text-[#3E8940]">
                {stat.trend === "up" && <span className=" font-medium select-none">↗ </span>}
                {stat.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
