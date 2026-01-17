"use client";

import { useState } from "react";
import {
  Settings,
  Save,
  Bell,
  Shield,
  Globe,
  Mail,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newOrderAlerts: true,
    vendorApplicationAlerts: true,
    issueAlerts: true,
    defaultCommission: 15,
    autoApproveVendors: false,
    maintenanceMode: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl text-black font-bold tracking-tight">
          Settings
        </h1>
        <p className="text-slate-500 mt-1">Configure admin panel settings</p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50">
            <Bell className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-bold text-black">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-black">Email Notifications</p>
              <p className="text-sm text-slate-500">
                Receive updates via email
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, emailNotifications: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-black">Push Notifications</p>
              <p className="text-sm text-slate-500">
                Browser push notifications
              </p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, pushNotifications: checked }))
              }
            />
          </div>

          <div className="border-t pt-4 space-y-4">
            <p className="text-sm font-medium text-slate-600">Alert Types</p>

            <div className="flex items-center justify-between pl-4">
              <p className="text-sm text-slate-700">New Order Alerts</p>
              <Switch
                checked={settings.newOrderAlerts}
                onCheckedChange={(checked) =>
                  setSettings((s) => ({ ...s, newOrderAlerts: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between pl-4">
              <p className="text-sm text-slate-700">
                Vendor Application Alerts
              </p>
              <Switch
                checked={settings.vendorApplicationAlerts}
                onCheckedChange={(checked) =>
                  setSettings((s) => ({
                    ...s,
                    vendorApplicationAlerts: checked,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between pl-4">
              <p className="text-sm text-slate-700">Issue Alerts</p>
              <Switch
                checked={settings.issueAlerts}
                onCheckedChange={(checked) =>
                  setSettings((s) => ({ ...s, issueAlerts: checked }))
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white rounded-xl shadow-sm border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-50">
            <Globe className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-bold text-black">Platform Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-slate-400" />
              Default Commission Rate (%)
            </Label>
            <Input
              type="number"
              value={settings.defaultCommission}
              onChange={(e) =>
                setSettings((s) => ({
                  ...s,
                  defaultCommission: parseInt(e.target.value) || 0,
                }))
              }
              className="w-32"
            />
            <p className="text-xs text-slate-500">
              Applied to new vendors by default
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="font-medium text-black">Auto-Approve Vendors</p>
              <p className="text-sm text-slate-500">
                Automatically approve new vendor applications
              </p>
            </div>
            <Switch
              checked={settings.autoApproveVendors}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, autoApproveVendors: checked }))
              }
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-red-50">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <h2 className="text-lg font-bold text-red-700">Danger Zone</h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-black">Maintenance Mode</p>
            <p className="text-sm text-slate-500">
              Disable app access for users
            </p>
          </div>
          <Switch
            checked={settings.maintenanceMode}
            onCheckedChange={(checked) =>
              setSettings((s) => ({ ...s, maintenanceMode: checked }))
            }
          />
        </div>

        {settings.maintenanceMode && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-3">
            <p className="text-sm text-red-700">
              ⚠️ Maintenance mode is ON. Users cannot access the app.
            </p>
          </div>
        )}
      </div>

      {/* Save Button */}
      <Button
        className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/90 w-fit"
        onClick={handleSave}
      >
        <Save className="h-4 w-4" />
        {saved ? "Saved!" : "Save Settings"}
      </Button>
    </div>
  );
}

